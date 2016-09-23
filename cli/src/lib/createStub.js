/* @flow */

import {signCode, verifySignedCode} from './codeSign';
import {mkdirp} from './fileUtils';
import {fs, path} from "./node";

import {format} from 'util';
import globAsync from 'glob';
import colors from 'colors/safe';
import resolveAsync from 'resolve';

function glob(pattern: string, options: Object): Promise<Array<string>> {
  return new Promise((resolve, reject) =>
    globAsync(pattern, options, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    })
  );
}

function resolve(name: string, options: Object): Promise<string> {
  return new Promise((resolve, reject) =>
    resolveAsync(name, options, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  );
}

const stubTemplate =
`declare module '%s' {
  declare module.exports: any;
}`;

function stubFor(moduleName: string): string {
  return format(stubTemplate, moduleName);
}

async function writeStub(
  projectRoot: string,
  packageName: string,
  version: string,
  overwrite: boolean,
  files: Array<string>,
): Promise<string> {
  let output = stubFor(packageName);
  if (files.length > 0) {
    output += format(
      "\n\n%s\n",
      files
        .map(file => file.replace(/\.[^.]+$/, '')) // trim extensions
        .map(file => stubFor(format("%s/%s", packageName, file)))
        .join("\n\n"),
    );
  }
  output += "\n"; // File should end with a newline
  const filename = path.join(
    projectRoot,
    "flow-typed",
    "npm",
    format("%s_vx.x.x.js", packageName),
  );
  await mkdirp(path.dirname(filename));

  if (!overwrite) {
    const exists = await fs.exists(filename);
    if (exists) {
      const existingStub = await fs.readFile(filename);
      if (!verifySignedCode(existingStub.toString())) {
        throw new Error(
          "Stub already exists and has been modified. " +
          "Use --overwrite to overwrite",
        );
      }
    }
  }

  await fs.writeFile(filename, signCode(output, version));
  return filename;
}

/**
 * createStub("/path/to/root", "foo") will create a file
 * /path/to/root/flow-typed/foo.js that contains a stub for the module foo.
 *
 * If foo is installed, it will read the directory that require("foo") resolves
 * to and include definitions for "foo/FILE", for every FILE in the foo package
 */
export default async function createStub(
  projectRoot: string,
  packageName: string,
  explicitVersion: string | null,
  overwrite: boolean,
): Promise<boolean> {
  let files = [];
  let resolutionError = null;
  let pathToPackage = null;
  let version = explicitVersion || null;
  try {
    pathToPackage = await resolve(packageName, {basedir: process.cwd()});

    let dir = path.dirname(pathToPackage);
    while (path.basename(dir) !== "node_modules") {
      pathToPackage = dir;
      dir = path.dirname(pathToPackage);

      if (dir === pathToPackage) {
        throw new Error("Failed to find package directory");
      }
    }

    files = await glob("**/*.{js,jsx}", {
      cwd: pathToPackage,
      ignore: "node_modules/**",
    });

  } catch (e) {
    resolutionError = e;
  }

  // Try to deduce a version if one isn't provided
  if (version == null) {
    // Look at the package.json for the installed module
    if (pathToPackage != null) {
      try {
        version = (require: any)(path.join(pathToPackage, 'package.json')).version;
      } catch (e) {}
    }

    // If that failed, try looking for a package.json in the root
    if (version == null) {
      (require: any)(path.join(projectRoot, 'package.json')).version;
    }
  }

  if (version == null) {
    try {
      const package_json = (require: any)(path.join(projectRoot, 'package.json'));
      const deps = package_json.dependencies || {};
      const devDeps = package_json.devDependencies || {};
      version = deps[packageName] || devDeps[packageName] || null;
    } catch (e) { }
  }

  try {
    if (version === null) {
      throw new Error(
        "Could not deduce version from node_modules or package.json. " +
        "Please provide an explicit version",
      );
    }
    const filename = await writeStub(
      projectRoot,
      packageName,
      version,
      overwrite,
      files,
    );
    console.log(colors.green("✓\t%s@%s -> %s"), packageName, version, filename);
    if (resolutionError) {
      console.log(
        colors.yellow("\t  Only created generic stub for '%s' (%s)"),
        packageName,
        resolutionError.message,
      );
    }
    return true;
  } catch (e) {
    console.log(
      colors.red("❌\t%s%s': %s"),
      packageName,
      version ? "@"+version : "",
      e.message,
    );
    return false;
  }
}
