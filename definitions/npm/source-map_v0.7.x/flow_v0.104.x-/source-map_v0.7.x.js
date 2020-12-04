declare module 'source-map' {
  declare export type SourceMapUrl = string;
  declare export type StartOfSourceMap = {|
    +file?: string,
    +sourceRoot?: string,
    +skipValidation?: boolean,
  |};
  declare export type RawSourceMap = {|
    +version: number,
    +sources: string[],
    +names: string[],
    +sourceRoot?: string,
    +sourcesContent?: string[],
    +mappings: string,
    +file: string,
  |};
  declare export type RawIndexMap = {|
    +file?: string,
    +sourceRoot?: string,
    +skipValidation?: boolean,
    +version: number,
    +sections: RawSection[],
  |};

  declare export type RawSection = {|
    +offset: Position,
    +map: RawSourceMap,
  |};
  declare export type Position = {|
    +line: number,
    +column: number,
  |};
  declare export type NullablePosition = {|
    +line: number | null,
    +column: number | null,
    +lastColumn: number | null,
  |};
  declare export type MappedPosition = {|
    +source: string,
    +line: number,
    +column: number,
    +name?: string,
  |};
  declare export type NullableMappedPosition = {|
    +source: string | null,
    +line: number | null,
    +column: number | null,
    +name: string | null,
  |};
  declare export type MappingItem =
    | {|
        +source: string,
        +name: string,
        +generatedLine: number,
        +generatedColumn: number,
        +lastGeneratedColumn?: number,
        +originalLine: number,
        +originalColumn: number
      |}
    | {|
        +source: null,
        +name: null,
        +generatedLine: number,
        +generatedColumn: number,
        +lastGeneratedColumn?: number,
        +originalLine: null,
        +originalColumn: null
      |};
  declare export type Mapping =
    | {|
        +generated: Position,
        +original: Position,
        +source: string,
        +name?: string
      |}
    | {|
        +generated: Position
      |};
  declare export type CodeWithSourceMap = {|
    +code: string,
    +map: SourceMapGenerator,
  |};
  declare export class SourceMapConsumer {
    static +GENERATED_ORDER: number;
    static +ORIGINAL_ORDER: number;
    static +GREATEST_LOWER_BOUND: number;
    static +LEAST_UPPER_BOUND: number;
    constructor(
      rawSourceMap: RawSourceMap,
      sourceMapUrl?: SourceMapUrl
    ): Promise<BasicSourceMapConsumer>;
    constructor(
      rawSourceMap: RawIndexMap,
      sourceMapUrl?: SourceMapUrl
    ): Promise<IndexedSourceMapConsumer>;
    constructor(
      rawSourceMap: RawSourceMap | RawIndexMap | string,
      sourceMapUrl?: SourceMapUrl
    ): Promise<BasicSourceMapConsumer | IndexedSourceMapConsumer>;

    /**
     * Create a BasicSourceMapConsumer from a SourceMapGenerator.
     * @param sourceMap The source map that will be consumed.
     */
    static fromSourceMap(
      sourceMap: SourceMapGenerator,
      sourceMapUrl?: SourceMapUrl
    ): Promise<BasicSourceMapConsumer>;

    /**
     * Construct a new `SourceMapConsumer` from `rawSourceMap` and `sourceMapUrl`
     * (see the `SourceMapConsumer` constructor for details. Then, invoke the `async
     *      * function f(SourceMapConsumer) -> T` with the newly constructed consumer, wait
     * for `f` to complete, call `destroy` on the consumer, and return `f`'s return
     * value.
     *
     * You must not use the consumer after `f` completes!
     *
     * By using `with`, you do not have to remember to manually call `destroy` on
     * the consumer, since it will be called automatically once `f` completes.
     *
     * ```js
     *      * const xSquared = await SourceMapConsumer.with(
     *      *   myRawSourceMap,
     *      *   null,
     *      *   async function (consumer) {
     *      *     // Use `consumer` inside here and don't worry about remembering
     *      *     // to call `destroy`.
     *      *
     *      *     const x = await whatever(consumer);
     *      *     return x * x;
     *      *   }
     *      * );
     *      *
     *      * // You may not use that `consumer` anymore out here; it has
     *      * // been destroyed. But you can use `xSquared`.
     *      * console.log(xSquared);
     *      * ```
     */
    static with<T>(
      rawSourceMap: RawSourceMap | RawIndexMap | string,
      sourceMapUrl: SourceMapUrl | null | void,
      callback: (
        consumer: BasicSourceMapConsumer | IndexedSourceMapConsumer
      ) => Promise<T> | T
    ): Promise<T>;

    /**
     * Compute the last column for each generated mapping. The last column is
     * inclusive.
     */
    computeColumnSpans(): void;

    /**
     * Returns the original source, line, and column information for the generated
     * source's line and column positions provided. The only argument is an object
     * with the following properties:
     *
     *    - line: The line number in the generated source.
     *    - column: The column number in the generated source.
     *    - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
     *      'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
     *      closest element that is smaller than or greater than the one we are
     *      searching for, respectively, if the exact element cannot be found.
     *      Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
     *
     * and an object is returned with the following properties:
     *
     *    - source: The original source file, or null.
     *    - line: The line number in the original source, or null.
     *    - column: The column number in the original source, or null.
     *    - name: The original identifier, or null.
     */
    originalPositionFor(
      generatedPosition: Position & { bias?: number, ... }
    ): NullableMappedPosition;

    /**
     * Returns the generated line and column information for the original source,
     * line, and column positions provided. The only argument is an object with
     * the following properties:
     *
     *    - source: The filename of the original source.
     *    - line: The line number in the original source.
     *    - column: The column number in the original source.
     *    - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
     *      'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
     *      closest element that is smaller than or greater than the one we are
     *      searching for, respectively, if the exact element cannot be found.
     *      Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
     *
     * and an object is returned with the following properties:
     *
     *    - line: The line number in the generated source, or null.
     *    - column: The column number in the generated source, or null.
     */
    generatedPositionFor(
      originalPosition: MappedPosition & { bias?: number, ... }
    ): NullablePosition;

    /**
     * Returns all generated line and column information for the original source,
     * line, and column provided. If no column is provided, returns all mappings
     * corresponding to a either the line we are searching for or the next
     * closest line that has any mappings. Otherwise, returns all mappings
     * corresponding to the given line and either the column we are searching for
     * or the next closest column that has any offsets.
     *
     * The only argument is an object with the following properties:
     *
     *    - source: The filename of the original source.
     *    - line: The line number in the original source.
     *    - column: Optional. the column number in the original source.
     *
     * and an array of objects is returned, each with the following properties:
     *
     *    - line: The line number in the generated source, or null.
     *    - column: The column number in the generated source, or null.
     */
    allGeneratedPositionsFor(
      originalPosition: MappedPosition
    ): NullablePosition[];

    /**
     * Return true if we have the source content for every source in the source
     * map, false otherwise.
     */
    hasContentsOfAllSources(): boolean;

    /**
     * Returns the original source content. The only argument is the url of the
     * original source file. Returns null if no original source content is
     * available.
     */
    sourceContentFor(
      source: string,
      returnNullOnMissing?: boolean
    ): string | null;

    /**
     * Iterate over each mapping between an original source/line/column and a
     * generated line/column in this source map.
     * @param callback The function that is called with each mapping.
     * @param context Optional. If specified, this object will be the value of `this` every
     * time that `aCallback` is called.
     * @param order Either `SourceMapConsumer.GENERATED_ORDER` or
     * `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
     * iterate over the mappings sorted by the generated file's line/column
     * order or the original's source/line/column order, respectively. Defaults to
     * `SourceMapConsumer.GENERATED_ORDER`.
     */
    eachMapping(
      callback: (mapping: MappingItem) => void,
      context?: any,
      order?: number
    ): void;

    /**
     * Free this source map consumer's associated wasm data that is manually-managed.
     * Alternatively, you can use SourceMapConsumer.with to avoid needing to remember to call destroy.
     */
    destroy(): void;
  }

  declare export class BasicSourceMapConsumer mixins SourceMapConsumer {
    +file: string;
    +sourceRoot: string;
    +sources: string[];
    +sourcesContent: string[];

    constructor(
      rawSourceMap: RawSourceMap | string
    ): Promise<BasicSourceMapConsumer>;

    /**
     * Create a BasicSourceMapConsumer from a SourceMapGenerator.
     * @param sourceMap The source map that will be consumed.
     */
    static fromSourceMap(
      sourceMap: SourceMapGenerator
    ): Promise<BasicSourceMapConsumer>;
  }
  declare export class IndexedSourceMapConsumer mixins SourceMapConsumer {
    +sources: string[];
    constructor(
      rawSourceMap: RawIndexMap | string
    ): Promise<IndexedSourceMapConsumer>;
  }
  declare export class SourceMapGenerator {
    constructor(startOfSourceMap?: StartOfSourceMap): this;

    /**
     * Creates a new SourceMapGenerator based on a SourceMapConsumer
     * @param sourceMapConsumer The SourceMap.
     */
    static fromSourceMap(
      sourceMapConsumer: SourceMapConsumer
    ): SourceMapGenerator;

    /**
     * Add a single mapping from original source line and column to the generated
     * source's line and column for this source map being created. The mapping
     * object should have the following properties:
     *
     *    - generated: An object with the generated line and column positions.
     *    - original: An object with the original line and column positions.
     *    - source: The original source file (relative to the sourceRoot).
     *    - name: An optional original token name for this mapping.
     */
    addMapping(mapping: Mapping): void;

    /**
     * Set the source content for a source file.
     */
    setSourceContent(sourceFile: string, sourceContent: string): void;

    /**
     * Applies the mappings of a sub-source-map for a specific source file to the
     * source map being generated. Each mapping to the supplied source file is
     * rewritten using the supplied source map. Note: The resolution for the
     * resulting mappings is the minimium of this map and the supplied map.
     * @param sourceMapConsumer The source map to be applied.
     * @param sourceFile Optional. The filename of the source file.
     * If omitted, SourceMapConsumer's file property will be used.
     * @param sourceMapPath Optional. The dirname of the path to the source map
     * to be applied. If relative, it is relative to the SourceMapConsumer.
     * This parameter is needed when the two source maps aren't in the same
     * directory, and the source map to be applied contains relative source
     * paths. If so, those relative source paths need to be rewritten
     * relative to the SourceMapGenerator.
     */
    applySourceMap(
      sourceMapConsumer: SourceMapConsumer,
      sourceFile?: string,
      sourceMapPath?: string
    ): void;
    toString(): string;
    toJSON(): RawSourceMap;
  }
  declare export class SourceNode {
    +children: SourceNode[];
    +sourceContents: any;
    +line: number;
    +column: number;
    +source: string;
    +name: string;

    constructor(): this;
    constructor(
      line: number | null,
      column: number | null,
      source: string | null,
      chunks?: Array<string | SourceNode> | SourceNode | string,
      name?: string
    ): this;

    static fromStringWithSourceMap(
      code: string,
      sourceMapConsumer: SourceMapConsumer,
      relativePath?: string
    ): SourceNode;
    add(chunk: Array<string | SourceNode> | SourceNode | string): SourceNode;
    prepend(
      chunk: Array<string | SourceNode> | SourceNode | string
    ): SourceNode;
    setSourceContent(sourceFile: string, sourceContent: string): void;
    walk(fn: (chunk: string, mapping: MappedPosition) => void): void;
    walkSourceContents(fn: (file: string, content: string) => void): void;
    join(sep: string): SourceNode;
    replaceRight(pattern: RegExp | string, replacement: string): SourceNode;
    toString(): string;
    toStringWithSourceMap(
      startOfSourceMap?: StartOfSourceMap
    ): CodeWithSourceMap;
  }
}
