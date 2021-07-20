// @flow

declare module "three" {
  declare type ColorName =
    | "aliceblue"
    | "antiquewhite"
    | "aqua"
    | "aquamarine"
    | "azure"
    | "beige"
    | "bisque"
    | "black"
    | "blanchedalmond"
    | "blue"
    | "blueviolet"
    | "brown"
    | "burlywood"
    | "cadetblue"
    | "chartreuse"
    | "chocolate"
    | "coral"
    | "cornflowerblue"
    | "cornsilk"
    | "crimson"
    | "cyan"
    | "darkblue"
    | "darkcyan"
    | "darkgoldenrod"
    | "darkgray"
    | "darkgrey"
    | "darkgreen"
    | "darkkhaki"
    | "darkmagenta"
    | "darkolivegreen"
    | "darkorange"
    | "darkorchid"
    | "darkred"
    | "darksalmon"
    | "darkseagreen"
    | "darkslateblue"
    | "darkslategray"
    | "darkslategrey"
    | "darkturquoise"
    | "darkviolet"
    | "deeppink"
    | "deepskyblue"
    | "dimgray"
    | "dimgrey"
    | "dodgerblue"
    | "firebrick"
    | "floralwhite"
    | "forestgreen"
    | "fuchsia"
    | "gainsboro"
    | "ghostwhite"
    | "gold"
    | "goldenrod"
    | "gray"
    | "grey"
    | "green"
    | "greenyellow"
    | "honeydew"
    | "hotpink"
    | "indianred"
    | "indigo"
    | "ivory"
    | "khaki"
    | "lavender"
    | "lavenderblush"
    | "lawngreen"
    | "lemonchiffon"
    | "lightblue"
    | "lightcoral"
    | "lightcyan"
    | "lightgoldenrodyellow"
    | "lightgray"
    | "lightgrey"
    | "lightgreen"
    | "lightpink"
    | "lightsalmon"
    | "lightseagreen"
    | "lightskyblue"
    | "lightslategray"
    | "lightslategrey"
    | "lightsteelblue"
    | "lightyellow"
    | "lime"
    | "limegreen"
    | "linen"
    | "magenta"
    | "maroon"
    | "mediumaquamarine"
    | "mediumblue"
    | "mediumorchid"
    | "mediumpurple"
    | "mediumseagreen"
    | "mediumslateblue"
    | "mediumspringgreen"
    | "mediumturquoise"
    | "mediumvioletred"
    | "midnightblue"
    | "mintcream"
    | "mistyrose"
    | "moccasin"
    | "navajowhite"
    | "navy"
    | "oldlace"
    | "olive"
    | "olivedrab"
    | "orange"
    | "orangered"
    | "orchid"
    | "palegoldenrod"
    | "palegreen"
    | "paleturquoise"
    | "palevioletred"
    | "papayawhip"
    | "peachpuff"
    | "peru"
    | "pink"
    | "plum"
    | "powderblue"
    | "purple"
    | "rebeccapurple"
    | "red"
    | "rosybrown"
    | "royalblue"
    | "saddlebrown"
    | "salmon"
    | "sandybrown"
    | "seagreen"
    | "seashell"
    | "sienna"
    | "silver"
    | "skyblue"
    | "slateblue"
    | "slategray"
    | "slategrey"
    | "snow"
    | "springgreen"
    | "steelblue"
    | "tan"
    | "teal"
    | "thistle"
    | "tomato"
    | "turquoise"
    | "violet"
    | "wheat"
    | "white"
    | "whitesmoke"
    | "yellow"
    | "yellowgreen";

  declare type Event<EventName: string, Data> = {|
    ...$Exact<Data>,

    type: EventName,
  |};

  declare type EventCallback<EventName: string, Data> = (Event<EventName, Data>) => void;

  declare export type LoadingManagerOnErrorCallback = (url: string) => void;

  declare export type LoadingManagerOnLoadCallback<T> = T => void;

  declare export type LoadingManagerOnProgressCallback = (url: string, itemsLoaded: number, itemsTotal: number) => void;

  declare export type LoadingManagerOnStartCallback = (url: string, itemsLoaded: number, itemsTotal: number) => void;

  declare export type MorphNormal = {
    +name: string,
    +normals: $ReadOnlyArray<Vector3> | $ReadOnlyArray<Vector3Plain>,
  };

  declare export type MorphTarget = {
    +name: string,
    +normals: $ReadOnlyArray<number>,
    +vertices: $ReadOnlyArray<number>,
  };

  declare type ShaderDefines = {
    [string]: string,
  };

  declare type UniformValue = UniformValueType | $ReadOnlyArray<UniformValueType>;

  declare type UniformValueType = number | string | Color | Vector2 | Vector3 | Vector4 | Texture;

  declare type Uniforms = {
    [string]:
      | {|
          value: UniformValue,
        |}
      | Uniform,
  };

  declare type Vector3Plain = {|
    x: number,
    y: number,
    z: number,
  |};

  // export var MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
  // export var TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
  declare export var CullFaceNone: 0;
  declare export var CullFaceBack: 1;
  declare export var CullFaceFront: 2;
  declare export var CullFaceFrontBack: 3;
  declare export var FrontFaceDirectionCW: 0;
  declare export var FrontFaceDirectionCCW: 1;
  declare export var BasicShadowMap: 0;
  declare export var PCFShadowMap: 1;
  declare export var PCFSoftShadowMap: 2;
  declare export var FrontSide: 0;
  declare export var BackSide: 1;
  declare export var DoubleSide: 2;
  declare export var FlatShading: 1;
  declare export var SmoothShading: 2;
  declare export var NoColors: 0;
  declare export var FaceColors: 1;
  declare export var VertexColors: 2;
  declare export var NoBlending: 0;
  declare export var NormalBlending: 1;
  declare export var AdditiveBlending: 2;
  declare export var SubtractiveBlending: 3;
  declare export var MultiplyBlending: 4;
  declare export var CustomBlending: 5;
  declare export var AddEquation: 100;
  declare export var SubtractEquation: 101;
  declare export var ReverseSubtractEquation: 102;
  declare export var MinEquation: 103;
  declare export var MaxEquation: 104;
  declare export var ZeroFactor: 200;
  declare export var OneFactor: 201;
  declare export var SrcColorFactor: 202;
  declare export var OneMinusSrcColorFactor: 203;
  declare export var SrcAlphaFactor: 204;
  declare export var OneMinusSrcAlphaFactor: 205;
  declare export var DstAlphaFactor: 206;
  declare export var OneMinusDstAlphaFactor: 207;
  declare export var DstColorFactor: 208;
  declare export var OneMinusDstColorFactor: 209;
  declare export var SrcAlphaSaturateFactor: 210;
  declare export var NeverDepth: 0;
  declare export var AlwaysDepth: 1;
  declare export var LessDepth: 2;
  declare export var LessEqualDepth: 3;
  declare export var EqualDepth: 4;
  declare export var GreaterEqualDepth: 5;
  declare export var GreaterDepth: 6;
  declare export var NotEqualDepth: 7;
  declare export var MultiplyOperation: 0;
  declare export var MixOperation: 1;
  declare export var AddOperation: 2;
  declare export var NoToneMapping: 0;
  declare export var LinearToneMapping: 1;
  declare export var ReinhardToneMapping: 2;
  declare export var Uncharted2ToneMapping: 3;
  declare export var CineonToneMapping: 4;
  declare export var ACESFilmicToneMapping: 5;
  declare export var UVMapping: 300;
  declare export var CubeReflectionMapping: 301;
  declare export var CubeRefractionMapping: 302;
  declare export var EquirectangularReflectionMapping: 303;
  declare export var EquirectangularRefractionMapping: 304;
  declare export var SphericalReflectionMapping: 305;
  declare export var CubeUVReflectionMapping: 306;
  declare export var CubeUVRefractionMapping: 307;
  declare export var RepeatWrapping: 1000;
  declare export var ClampToEdgeWrapping: 1001;
  declare export var MirroredRepeatWrapping: 1002;
  declare export var NearestFilter: 1003;
  declare export var NearestMipmapNearestFilter: 1004;
  declare export var NearestMipMapNearestFilter: 1004;
  declare export var NearestMipmapLinearFilter: 1005;
  declare export var NearestMipMapLinearFilter: 1005;
  declare export var LinearFilter: 1006;
  declare export var LinearMipmapNearestFilter: 1007;
  declare export var LinearMipMapNearestFilter: 1007;
  declare export var LinearMipmapLinearFilter: 1008;
  declare export var LinearMipMapLinearFilter: 1008;
  declare export var UnsignedByteType: 1009;
  declare export var ByteType: 1010;
  declare export var ShortType: 1011;
  declare export var UnsignedShortType: 1012;
  declare export var IntType: 1013;
  declare export var UnsignedIntType: 1014;
  declare export var FloatType: 1015;
  declare export var HalfFloatType: 1016;
  declare export var UnsignedShort4444Type: 1017;
  declare export var UnsignedShort5551Type: 1018;
  declare export var UnsignedShort565Type: 1019;
  declare export var UnsignedInt248Type: 1020;
  declare export var AlphaFormat: 1021;
  declare export var RGBFormat: 1022;
  declare export var RGBAFormat: 1023;
  declare export var LuminanceFormat: 1024;
  declare export var LuminanceAlphaFormat: 1025;
  declare export var RGBEFormat: typeof RGBAFormat;
  declare export var DepthFormat: 1026;
  declare export var DepthStencilFormat: 1027;
  declare export var RedFormat: 1028;
  declare export var RGB_S3TC_DXT1_Format: 33776;
  declare export var RGBA_S3TC_DXT1_Format: 33777;
  declare export var RGBA_S3TC_DXT3_Format: 33778;
  declare export var RGBA_S3TC_DXT5_Format: 33779;
  declare export var RGB_PVRTC_4BPPV1_Format: 35840;
  declare export var RGB_PVRTC_2BPPV1_Format: 35841;
  declare export var RGBA_PVRTC_4BPPV1_Format: 35842;
  declare export var RGBA_PVRTC_2BPPV1_Format: 35843;
  declare export var RGB_ETC1_Format: 36196;
  declare export var RGBA_ASTC_4x4_Format: 37808;
  declare export var RGBA_ASTC_5x4_Format: 37809;
  declare export var RGBA_ASTC_5x5_Format: 37810;
  declare export var RGBA_ASTC_6x5_Format: 37811;
  declare export var RGBA_ASTC_6x6_Format: 37812;
  declare export var RGBA_ASTC_8x5_Format: 37813;
  declare export var RGBA_ASTC_8x6_Format: 37814;
  declare export var RGBA_ASTC_8x8_Format: 37815;
  declare export var RGBA_ASTC_10x5_Format: 37816;
  declare export var RGBA_ASTC_10x6_Format: 37817;
  declare export var RGBA_ASTC_10x8_Format: 37818;
  declare export var RGBA_ASTC_10x10_Format: 37819;
  declare export var RGBA_ASTC_12x10_Format: 37820;
  declare export var RGBA_ASTC_12x12_Format: 37821;
  declare export var LoopOnce: 2200;
  declare export var LoopRepeat: 2201;
  declare export var LoopPingPong: 2202;
  declare export var InterpolateDiscrete: 2300;
  declare export var InterpolateLinear: 2301;
  declare export var InterpolateSmooth: 2302;
  declare export var ZeroCurvatureEnding: 2400;
  declare export var ZeroSlopeEnding: 2401;
  declare export var WrapAroundEnding: 2402;
  declare export var TrianglesDrawMode: 0;
  declare export var TriangleStripDrawMode: 1;
  declare export var TriangleFanDrawMode: 2;
  declare export var LinearEncoding: 3000;
  declare export var sRGBEncoding: 3001;
  declare export var GammaEncoding: 3007;
  declare export var RGBEEncoding: 3002;
  declare export var LogLuvEncoding: 3003;
  declare export var RGBM7Encoding: 3004;
  declare export var RGBM16Encoding: 3005;
  declare export var RGBDEncoding: 3006;
  declare export var BasicDepthPacking: 3200;
  declare export var RGBADepthPacking: 3201;
  declare export var TangentSpaceNormalMap: 0;
  declare export var ObjectSpaceNormalMap: 1;

  declare export class AmbientLight<T: Camera> extends Light<T> {
    +isAmbientLight: true;
    castShadow: boolean;

    constructor(color?: number, intensity?: number): void;
  }

  declare export class AnimationAction {
    enabled: boolean;

    crossFadeTo(AnimationAction, durationInSeconds: number): AnimationAction;

    play(): AnimationAction;

    setEffectiveWeight(number): void;
  }

  declare export class AnimationClip {
    static CreateClipsFromMorphTargetSequences(morphTargets: MorphTarget[], fps: number, noLoop?: boolean): AnimationClip[];
  }

  declare export class AnimationMixer {
    constructor(Object3D): void;

    clipAction(AnimationClip, optionalRoot: ?Object3D): AnimationAction;

    update(delta: number): void;
  }

  declare export class Audio {
    constructor(AudioListener): void;

    setBuffer(AudioBuffer): Audio;

    setLoop(boolean): Audio;

    setVolume(number): Audio;

    play(): Audio;

    stop(): Audio;
  }

  declare export class AudioContext {}

  declare export class AudioListener extends Object3D {
    context: AudioContext;
    timeDelta: number;

    constructor(
      ?{|
        context?: AudioContext,
        timeDelta?: number,
      |}
    ): void;

    getMasterVolume(): number;

    setMasterVolume(value: number): AudioListener;
  }

  declare export class AudioLoader extends Loader<AudioBuffer> {}

  declare export class AxesHelper extends Object3D {
    constructor(size: number): void;
  }

  declare export class BaseGeometry extends Object3D {
    animations: AnimationClip[];

    dispose(): void;

    rotateX(number): this;

    rotateY(number): this;

    rotateZ(number): this;

    translate(x: number, y: number, z: number): this;
  }

  declare export class Box3 {
    +isBox3: boolean;
    +max: Vector3;
    +min: Vector3;

    constructor(min?: number, max?: number): void;

    getSize(Vector3): Box3;

    setFromBufferAttribute(BufferAttribute): Box3;

    setFromPoints($ReadOnlyArray<Vector3>): Box3;
  }

  declare export class BoxBufferGeometry extends BufferGeometry {
    constructor(width?: number, height?: number, depth?: number, widthSegments?: number, heightSegments?: number, depthSegments?: number): void;
  }

  declare export class BoxGeometry extends Geometry {
    constructor(width?: number, height?: number, depth?: number, widthSegments?: number, heightSegments?: number, depthSegments?: number): void;
  }

  declare export class BufferAttribute {
    +array: $TypedArray;
    +isBufferAttribute: true;
    name: string;
    needsUpdate: boolean;

    constructor($TypedArray, itemSize: number, normalized?: boolean): void;
  }

  declare export class BufferGeometry extends BaseGeometry {
    +attributes: {
      [string]: BufferAttribute,
    };
    +isBufferGeometry: true;
    +morphAttributes: {
      [string]: BufferAttribute[],
    };
    morphTargetsRelative: boolean;

    constructor(): void;

    addGroup(number, number, number): void;

    setAttribute(string, BufferAttribute): void;

    setIndex(number[] | BufferAttribute): void;
  }

  declare export class Camera extends Object3D {
    +isCamera: true;
    +matrixWorldInverse: Matrix4;
    +projectionMatrix: Matrix4;
    +projectionMatrixInverse: Matrix4;

    constructor(): void;
  }

  declare export class Clock {
    constructor(autoStart?: boolean): void;
  }

  declare export class Color {
    +isColor: true;
    r: number;
    g: number;
    b: number;

    constructor(number | ColorName, ?number, ?number): void;

    add(color: Color): void;

    addColors(a: Color, b: Color): void;

    addScalar(scalar: number): void;

    clone(): Color;

    convertGammaToLinear(): void;

    convertLinearToGamma(): void;

    copy(c: Color): void;

    copyLinearToGamma(c: Color): void;

    equals(color: Color): boolean;

    fromArray(array: [number, number, number], number): void;

    getHSL(): HSL;

    getStyle(): string;

    lerp(color: Color, alpha: number): void;

    multiply(color: Color): void;

    multiplyScalar(scalar: number): void;

    offsetHSL(hue: number, saturation: number, lightness: number): void;

    set(value: Color | number | ColorName): void;

    setHex(hex: number): void;

    setHSL(hue: number, saturation: number, lightness: number): void;

    setStyle(style: string): void;

    toArray(array: ?[number, number, number], offset: ?number): [number, number, number];
  }

  declare export class CylinderGeometry extends Geometry {
    constructor(
      radiusTop: ?number,
      radiusBottom: ?number,
      height: ?number,
      radialSegments: ?number,
      heightSegments: ?number,
      openEnded: ?boolean,
      thetaStart: ?number,
      thetaLength: ?number
    ): void;
  }

  declare export class EdgesGeometry extends BufferGeometry {
    constructor(BufferGeometry | Geometry, thresholdAngle?: number): void;
  }

  declare export class Euler {
    +isEuler: true;
    x: number;
    y: number;
    z: number;

    constructor(number, number, number): void;

    set(x: number, y: number, z: number): void;
  }

  declare export class EventDispatcher {
    constructor(): void;

    dispatchEvent<EventName: string, Data>(Event<EventName, Data>): void;

    addEventListener<EventName: string, Data>(EventName, EventCallback<EventName, Data>): void;

    removeEventListener<EventName: string, Data>(EventName, EventCallback<EventName, Data>): void;
  }

  declare export class ExtrudeGeometry extends Geometry {
    constructor(
      Shape,
      {
        // int. Number of points on the curves. Default is 12.
        curveSegments?: number,
        // int. Number of points used for subdividing segments along the
        // depth of the extruded spline. Default is 1.
        steps?: number,
        // float. Depth to extrude the shape. Default is 100.
        depth?: number,
        // bool. Apply beveling to the shape. Default is true.
        bevelEnabled?: boolean,
        // float. How deep into the original shape the bevel goes. Default is 6.
        bevelThickness?: number,
        // float. Distance from the shape outline that the bevel extends.
        // Default is bevelThickness - 2.
        bevelSize?: number,
        // int. Number of bevel layers. Default is 3.
        bevelSegments?: number,
        // THREE.CurvePath. A 3D spline path along which the shape
        // should be extruded.
        // extrudePath? :
        // Object. object that provides UV generator functions
        // UVGenerator:
      }
    ): void;
  }

  declare export class Face3 {
    +a: number;
    +b: number;
    +c: number;
    +materialIndex: number;
    +normal: Vector3;
    +vertexColors: [Color, Color, Color];
    +vertexNormals: [Vector3, Vector3, Vector3];

    constructor(a: number, b: number, c: number, normal?: Vector3, color?: Color, materialIndex?: number): void;

    clone(): Face3;

    copy(Face3): Face3;
  }

  declare export class Float32BufferAttribute extends BufferAttribute {
    constructor($ReadOnlyArray<number>, number): void;
  }

  declare export class Geometry extends BaseGeometry {
    +faces: Face3[];
    +faceVertexUvs: Array<Array<[Vector2, Vector2, Vector2]>>;
    +isGeometry: true;
    +vertices: Vector3[];
    colors: Color[];
    colorsNeedUpdate: boolean;
    elementsNeedUpdate: boolean;
    groupsNeedUpdate: boolean;
    id: number;
    lineDistances: number[];
    lineDistancesNeedUpdate: boolean;
    morphNormals: MorphNormal[];
    morphTargets: MorphTarget[];
    name: string;
    normalsNeedUpdate: boolean;
    skinIndicies: number[];
    skinWeights: Vector4[];
    uuid: string;
    uvsNeedUpdate: boolean;
    verticesNeedUpdate: boolean;

    constructor(): void;

    applyMatrix(matrix: Matrix4): void;

    center(): void;

    clone(): this;

    computeBoundingBox(): void;

    computeBoundingSphere(): void;

    computeFaceNormals(): void;

    computeFlatVertexNormals(): void;

    computeMorphNormals(): void;

    computeVertexNormals(): void;

    computeVertexNormals(areaWeighted: boolean): void;

    copy(geometry: Geometry): void;

    dispose(): void;

    lookAt(vector: Vector3): void;

    merge(geometry: Geometry, matrix: Matrix4, materialIndexOffset: number): void;

    mergeMesh(mesh: Mesh<any, any>): void;

    mergeVertices(): void;

    normalize(): void;

    sortFacesByMaterialIndex(): void;

    toJSON(): string;
  }

  declare export class FileLoader<T> extends Loader<T, XMLHttpRequest> {
    constructor(LoadingManager): void;

    setResponseType(string): FileLoader<T>;

    setWithCredentials(boolean): FileLoader<T>;
  }

  declare export class Fog {
    color: Color;
    far: number;
    name: string;
    near: number;

    constructor(color: number, far: number, near: number): void;

    clone(): Fog;

    toJSON(): Object;
  }

  declare export class Frustum {
    +planes: [Plane, Plane, Plane, Plane, Plane, Plane];

    constructor(p0: Plane, p1: Plane, p2: Plane, p3: Plane, p4: Plane, p5: Plane): void;

    containsPoint(Vector3): boolean;

    clone(): Frustum;

    copy(Frustum): Frustum;

    intersectsBox(Box3): boolean;

    intersectsObject(Object3D): boolean;
  }

  declare export class GridHelper extends Object3D {
    constructor(size: number, divisions: number): void;
  }

  declare export class Group extends Object3D {
    +type: "group";

    constructor(): void;
  }

  declare export class HemisphereLight<T: Camera> extends Light<T> {
    +color: number;
    +groundColor: number;
    +isHemisphereLight: true;
    +position: Vector3;

    constructor(skyColor?: number, groundColor?: number, intensity?: number): void;
  }

  declare export class ImageUtils {
    static loadTexture: (path: string, mapping: typeof UVMapping) => Texture;
  }

  declare export class InstancedMesh<T: BufferGeometry | Geometry, U: Material> extends Mesh<T, U> {
    +count: number;
    +instanceMatrix: BufferAttribute;

    constructor(geometry: BufferGeometry, material: Material, count: number): void;

    getMatrixAt(index: number, matrix: Matrix4): void;

    setMatrixAt(index: number, matrix: Matrix4): void;
  }

  declare export class Int32BufferAttribute extends BufferAttribute {
    constructor($ReadOnlyArray<number>, number): void;
  }

  declare export class Light<T: Camera> extends Object3D {
    +isLight: true;
    intensity: number;
    shadow: LightShadow<T>;
  }

  declare export class LightShadow<T: Camera> {
    +camera: T;
    +mapSize: Vector2;

    constructor(Camera): void;
  }

  declare export class LineBasicMaterial extends Material {
    +isLineBasicMaterial: true;

    constructor({|
      color: number,
      linewidth: number,
    |}): void;
  }

  declare export class LineSegments extends Object3D {
    +isLineSegments: true;

    constructor(BaseGeometry, Material): void;
  }

  declare export class Loader<T, U = void> {
    +manager: LoadingManager;
    +path: string;

    constructor(?LoadingManager): void;

    load(url: string, LoadingManagerOnLoadCallback<T>, ?LoadingManagerOnProgressCallback, ?LoadingManagerOnErrorCallback): U;

    setPath(string): Loader<T>;

    setResourcePath(string): Loader<T>;
  }

  declare export class LoadingManager {
    constructor(): void;

    onError?: LoadingManagerOnErrorCallback;
    onLoad?: LoadingManagerOnLoadCallback<any>;
    onProgress?: LoadingManagerOnProgressCallback;
    onStart?: LoadingManagerOnStartCallback;
  }

  declare export class LOD extends Object3D {
    +isLod: true;

    addLevel(Object3D, number): LOD;

    clone(): LOD;

    getObjectForDistance(number): Object3D;

    update(Camera): void;
  }

  declare export class Material extends Geometry {
    +color: Color;
    +isMaterial: true;
    map: Texture;
    needsUpdate: boolean;

    constructor({|
      color?: number,
      opacity?: number,
      transparent?: boolean,
    |}): void;
  }

  declare export class Math {
    static clamp(number, number, number): number;

    static degToRad(number): number;
  }

  declare export class Matrix3 {
    +isMatrix3: true;

    constructor(): void;

    determinant(): number;

    // prettier-ignore
    set(
      number, number, number,
      number, number, number,
      number, number, number
    ): Matrix3
  }

  declare export class Matrix4 {
    +isMatrix4: true;

    constructor(): void;

    multiplyMatrices(Matrix4, Matrix4): Matrix4;

    // prettier-ignore
    set(
      number, number, number,
      number, number, number,
      number, number, number
    ): Matrix3;

    setPosition(v: Vector3): void;

    makeRotationFromQuaternion(q: Quaternion): void;
  }

  declare export class Mesh<T: BufferGeometry | Geometry, U: Material> extends Object3D {
    +geometry: T;
    +isMesh: true;
    +material: T;

    constructor(T, Material | $ReadOnlyArray<Material>): void;

    clone(): Mesh<T, U>;
  }

  declare export class MeshBasicMaterial extends Material {
    +isMeshBasicMaterial: true;
  }

  declare export class MeshLambertMaterial extends Material {
    +isMeshLambertMaterial: true;

    constructor({|
      color?: number,
      map?: Texture,
      morphNormals?: boolean,
      morphTargets?: boolean,
      opacity?: number,
      transparent?: boolean,
      wireframe?: boolean,
    |}): void;
  }

  declare export class MeshNormalMaterial extends Material {
    +isMeshNormalMaterial: true;
  }

  declare export class MeshPhongMaterial extends Material {
    +isMeshPhongMaterial: true;

    constructor({|
      color?: number,
      map?: Texture,
      reflectivity?: number,
      shininess?: number,
    |}): void;
  }

  declare export class MeshStandardMaterial extends Material {
    +isMeshStandardMaterial: true;

    constructor({|
      color?: number,
      emissive?: number,
      emissiveIntensity?: number,
    |}): void;
  }

  declare export class Object3D extends EventDispatcher {
    +children: Array<Object3D>;
    +isObject3D: true;
    +material: Material;
    +matrix: Matrix4;
    +parent: Object3D;
    +position: Vector3;
    +rotation: Euler;
    +scale: Vector3;
    animations: AnimationClip[];
    castShadow: boolean;
    frustumCulled: boolean;
    name: string;
    receiveShadow: boolean;
    userData: any;
    visible: boolean;

    constructor(): void;

    add(Object3D): void;

    clone(): Object3D;

    remove(Object3D): void;

    lookAt(Vector3): void;

    traverse((Object3D) => void): void;

    updateMatrix(): void;
  }

  declare export class OrthographicCamera extends Camera {
    +isOrthographicCamera: true;
    bottom: number;
    far: number;
    left: number;
    near: number;
    right: number;
    top: number;
    zoom: number;

    constructor(bottom?: number, far?: number, left?: number, near?: number, right?: number, top?: number): void;

    updateProjectionMatrix(): void;
  }

  declare export class PerspectiveCamera extends Camera {
    +isPerspectiveCamera: true;
    aspect: number;
    far: number;
    fov: nubmer;
    near: number;
    zoom: number;

    constructor(fov?: number, aspect?: number, near?: number, far?: number): void;

    updateProjectionMatrix(): void;
  }

  declare export class PlaneBufferGeometry extends BufferGeometry implements PlaneGeometryBase {}

  declare export class PlaneGeometry extends Geometry implements PlaneGeometryBase {}

  declare export interface PlaneGeometryBase {
    constructor(width: number, height: number, widthSegments?: number, heightSegments?: number): void;
  }

  declare export class Plane {
    +isPlane: true;
    constant: number;
    normal: Vector3;

    constructor(normal?: Vector3, constant?: number): void;

    distanceToPoint(Vector3): number;

    equals(Plane): boolean;

    projectPoint(Vector3, Vector3): Plane;

    setFromCoplanarPoints(Vector3, Vector3, Vector3): Plane;
  }

  declare export class PointLight<T: Camera> extends Light<T> {
    +isPointLight: true;
    +position: Vector3;
    decay: number;

    constructor(color?: Color | number, intensity?: number, distance?: number, decay?: number): void;
  }

  declare export class Quaternion {
    static slerp(start: Quaternion, end: Quaternion, target: Quaternion, t: number): Quaternion;

    static slerpFlat(
      dst: [number, number, number, number],
      dstOffset: number,
      src0: [number, number, number, number],
      srcOffset0: number,
      src1: [number, number, number, number],
      srcOffset1: number,
      t: number
    ): Quaternion;

    x: number;
    y: number;
    z: number;
    w: number;

    constructor(x: number, y: number, z: number, w: number): Quaternion;

    angleTo(q: Quaternion): number;

    clone(): Quaternion;

    conjugate(): Quaternion;

    copy(q: Quaternion): Quaternion;

    dot(v: Quaternion): number;

    equals(v: Quaternion): boolean;

    fromArray(xyzw: [number, number, number, number], number): Quaternion;

    inverse(): Quaternion;

    length(): number;

    lengthSq(): number;

    multiply(q: Quaternion): Quaternion;

    multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;

    normalize(): Quaternion;

    onChange(callback: Function): Quaternion;

    onChangeCallback(): Quaternion;

    premultiply(q: Quaternion): Quaternion;

    rotateTowards(q: Quaternion, step: number): Quaternion;

    set(x: number, y: number, z: number, w: number): Quaternion;

    setFromAxisAngle(axis: Vector3, angle: number): Quaternion;

    setFromEuler(euler: Euler): Quaternion;

    setFromRotationMatrix(m: Matrix4): Quaternion;

    setFromUnitVectors(from: Vector3, to: Vector3): Quaternion;

    slerp(q: Quaternion, t: number): Quaternion;

    toArray(array?: [], offset?: number): [number, number, number, number];
  }

  declare export class Raycaster {
    constructor(): void;

    setFromCamera(Vector2, Camera): void;

    intersectObjects(
      objects: Array<Object3D>,
      recursive?: boolean
    ): $ReadOnlyArray<{|
      distance: number,
      object: Object3D,
    |}>;
  }

  declare export class Renderer {
    +info: {|
      +memory: {|
        +geometries: number,
        +textures: number,
      |},
      +render: {|
        +calls: number,
      |},
    |};

    dispose(): void;

    forceContextLoss(): void;

    render(Scene, Camera): void;

    getSize(Vector2): void;

    setPixelRatio(number): void;

    setSize(number, number, ?boolean): void;
  }

  declare export class Scene extends Object3D {
    autoUpdate: boolean;
    background: ?Object3D;
    fog: Fog;
    overrideMaterial: ?Material;

    constructor(): void;

    dispose(): void;

    toJSON(): Object;
  }

  declare export class ShaderChunk {
    static alphamap_fragment: string;
    static alphamap_pars_fragment: string;
    static alphatest_fragment: string;
    static aomap_fragment: string;
    static aomap_pars_fragment: string;
    static background_frag: string;
    static background_vert: string;
    static begin_vertex: string;
    static beginnormal_vertex: string;
    static bsdfs: string;
    static bumpmap_pars_fragment: string;
    static clearcoat_normal_fragment_begin: string;
    static clearcoat_normal_fragment_maps: string;
    static clearcoat_normalmap_pars_fragment: string;
    static clipping_planes_fragment: string;
    static clipping_planes_pars_fragment: string;
    static clipping_planes_pars_vertex: string;
    static clipping_planes_vertex: string;
    static color_fragment: string;
    static color_pars_fragment: string;
    static color_pars_vertex: string;
    static color_vertex: string;
    static common: string;
    static cube_frag: string;
    static cube_uv_reflection_fragment: string;
    static cube_vert: string;
    static defaultnormal_vertex: string;
    static depth_frag: string;
    static depth_vert: string;
    static displacementmap_pars_vertex: string;
    static displacementmap_vertex: string;
    static distanceRGBA_frag: string;
    static distanceRGBA_vert: string;
    static dithering_fragment: string;
    static dithering_pars_fragment: string;
    static emissivemap_fragment: string;
    static emissivemap_pars_fragment: string;
    static encodings_fragment: string;
    static encodings_pars_fragment: string;
    static envmap_common_pars_fragment: string;
    static envmap_fragment: string;
    static envmap_pars_fragment: string;
    static envmap_pars_vertex: string;
    static envmap_physical_pars_fragment: string;
    static envmap_vertex: string;
    static equirect_frag: string;
    static equirect_vert: string;
    static fog_fragment: string;
    static fog_pars_fragment: string;
    static fog_pars_vertex: string;
    static fog_vertex: string;
    static gradientmap_pars_fragment: string;
    static lightmap_fragment: string;
    static lightmap_pars_fragment: string;
    static lights_fragment_begin: string;
    static lights_fragment_end: string;
    static lights_fragment_maps: string;
    static lights_lambert_vertex: string;
    static lights_pars_begin: string;
    static lights_phong_fragment: string;
    static lights_phong_pars_fragment: string;
    static lights_physical_fragment: string;
    static lights_physical_pars_fragment: string;
    static linedashed_frag: string;
    static linedashed_vert: string;
    static logdepthbuf_fragment: string;
    static logdepthbuf_pars_fragment: string;
    static logdepthbuf_pars_vertex: string;
    static logdepthbuf_vertex: string;
    static map_fragment: string;
    static map_pars_fragment: string;
    static map_particle_fragment: string;
    static map_particle_pars_fragment: string;
    static meshbasic_frag: string;
    static meshbasic_vert: string;
    static meshlambert_frag: string;
    static meshlambert_vert: string;
    static meshmatcap_frag: string;
    static meshmatcap_vert: string;
    static meshphong_frag: string;
    static meshphong_vert: string;
    static meshphysical_frag: string;
    static meshphysical_vert: string;
    static metalnessmap_fragment: string;
    static metalnessmap_pars_fragment: string;
    static morphnormal_vertex: string;
    static morphtarget_pars_vertex: string;
    static morphtarget_vertex: string;
    static normal_frag: string;
    static normal_fragment_begin: string;
    static normal_fragment_maps: string;
    static normal_vert: string;
    static normalmap_pars_fragment: string;
    static packing: string;
    static points_frag: string;
    static points_vert: string;
    static premultiplied_alpha_fragment: string;
    static project_vertex: string;
    static roughnessmap_fragment: string;
    static roughnessmap_pars_fragment: string;
    static shadow_frag: string;
    static shadow_vert: string;
    static shadowmap_pars_fragment: string;
    static shadowmap_pars_vertex: string;
    static shadowmap_vertex: string;
    static shadowmask_pars_fragment: string;
    static skinbase_vertex: string;
    static skinning_pars_vertex: string;
    static skinning_vertex: string;
    static skinnormal_vertex: string;
    static specularmap_fragment: string;
    static specularmap_pars_fragment: string;
    static sprite_frag: string;
    static sprite_vert: string;
    static tonemapping_fragment: string;
    static tonemapping_pars_fragment: string;
    static uv2_pars_fragment: string;
    static uv2_pars_vertex: string;
    static uv2_vertex: string;
    static uv_pars_fragment: string;
    static uv_pars_vertex: string;
    static uv_vertex: string;
    static worldpos_vertex: string;
  }

  declare export class ShaderLib {
    static phong: {|
      uniforms: Uniforms,
      fragmentShader: string,
      vertexShader: string,
    |};
  }

  declare export class ShaderMaterial extends Material {
    +defines: ShaderDefines;
    +fragmentShader: string;
    +isShaderMaterial: true;
    +lights?: boolean;
    +uniforms?: Uniforms;
    +vertexShader: string;

    constructor({|
      defines?: ShaderDefines,
      fragmentShader?: string,
      isShaderMaterial?: true,
      lights?: boolean,
      uniforms?: Uniforms,
      vertexShader?: string,
    |}): void;

    clone(): this;
  }

  declare export class Shape {
    constructor(): void;

    lineTo(number, number): void;

    moveTo(number, number): void;
  }

  declare export class ShapeGeometry extends Geometry {
    constructor(Shape): void;
  }

  declare export class SphereBufferGeometry extends BufferGeometry {
    constructor(radius: number, widthSegments?: number, heightSegments?: number, phiStart?: number, phiLength?: number, thetaStart?: number, thetaLength?: number): void;
  }

  declare export class SpotLight<T: Camera> extends Light<T> {
    +isSpotLight: true;
    angle: number;
    penumbra: number;
    target: Object3D;

    constructor(color?: number): void;
  }

  // prettier-ignore
  declare export class Texture {
    +image: HTMLImageElement;
    +isTexture: number;
    +repeat: Vector2;
    mapping:
      | typeof UVMapping
      | typeof CubeReflectionMapping
      | typeof CubeRefractionMapping
      | typeof EquirectangularReflectionMapping
      | typeof EquirectangularRefractionMapping
      | typeof SphericalReflectionMapping
      | typeof CubeUVReflectionMapping
      | typeof CubeUVRefractionMapping
    ;
    name: string;
    wrapS:
      | typeof ClampToEdgeWrapping
      | typeof RepeatWrapping
      | typeof MirroredRepeatWrapping
    ;
    wrapT:
      | typeof ClampToEdgeWrapping
      | typeof RepeatWrapping
      | typeof MirroredRepeatWrapping
    ;

    constructor(HTMLImageElement): void;

    dispose(): void;
  }

  declare export class TextureLoader {
    constructor(?LoadingManager): void;

    load(url: string, onLoad: ?(Texture) => void, onProgress: ?() => void, onError: ?() => void): Texture;
  }

  declare export class Uint8BufferAttribute extends BufferAttribute {
    constructor($ReadOnlyArray<number>, number): void;
  }

  declare export class Uniform {
    +value: UniformValue;

    constructor(UniformValue): void;
  }

  declare export class UniformsLib {
    static aomap: Uniforms;
    static bumpmap: Uniforms;
    static common: Uniforms;
    static displacementmap: Uniforms;
    static emissivemap: Uniforms;
    static envmap: Uniforms;
    static fog: Uniforms;
    static gradientmap: Uniforms;
    static lightmap: Uniforms;
    static lights: Uniforms;
    static metalnessmap: Uniforms;
    static normalmap: Uniforms;
    static points: Uniforms;
    static roughnessmap: Uniforms;
    static specularmap: Uniforms;
    static sprite: Uniforms;
  }

  declare export class UniformsUtils {
    static merge($ReadOnlyArray<Uniforms>): Uniforms;
  }

  declare export class Vector2 {
    +isVector2: true;
    height: number;
    width: number;
    x: number;
    y: number;

    constructor(x?: number, y?: number): void;

    add(v: Vector2): void;

    addScalar(s: number): void;

    addScaledVector(v: Vector2, s: number): void;

    addVectors(a: Vector2, b: Vector2): void;

    angle(): number;

    ceil(): void;

    clamp(min: number, max: number): void;

    clampLength(min: number, max: number): void;

    clampScalar(min: number, max: number): void;

    clone(): Vector2;

    copy(v: Vector2): void;

    distanceTo(v: Vector2): void;

    distanceToManhattan(v: Vector2): number;

    distanceToSquared(v: Vector2): number;

    divide(v: Vector2): Vector2;

    set(number, number): Vector2;

    toArray(): [number, number];
  }

  declare export class Vector3 {
    +isVector3: true;
    x: number;
    y: number;
    z: number;

    constructor(?number, ?number, ?number): void;

    add(vector: this): void;

    addScaledVector(vector: this, scale: number): void;

    addVectors(a: this, b: this): void;

    angleTo(vector: Vector3): number;

    applyAxisAngle(axis: number, angle: number): void;

    applyEuler(euler: Vector3): void;

    applyMatrix3(matrix: Matrix3): void;

    applyMatrix4(matrix: Matrix4): void;

    applyProjection(matrix: Matrix4): void;

    applyQuaternion(quaternion: Quaternion): void;

    ceil(): void;

    clamp(min: number, max: number): void;

    clampLength(min: number, max: number): void;

    clampScalar(min: number, max: number): void;

    clone(): this;

    copy(vector: this): void;

    cross(vector: Vector3): void;

    crossVectors(a: Vector3, b: Vector3): void;

    distanceTo(vector: Vector3): number;

    distanceToSquared(vector: Vector3): number;

    divide(vector: Vector3): void;

    divideScalar(scalar: number): void;

    dot(vector: this): void;

    equals(vector: Vector3): boolean;

    floor(): void;

    fromArray(array: [number, number, number], offset: number): void;

    getCompoment(index: 0 | 1 | 2): number;

    length(): number;

    lengthManhattan(): number;

    lengthSq(): number;

    lerp(vector: Vector3, alpha: number): void;

    lerpVectors(a: Vector3, b: Vector3, alpha: number): void;

    max(vector: Vector3): void;

    min(vector: Vector3): void;

    multiply(vector: Vector3): void;

    multiplyScalar(scalar: number): void;

    multiplyVectors(a: Vector3, b: Vector3): void;

    negate(): void;

    normalize(): void;

    project(camera: Camera): void;

    projectOnPlane(planeNormal: Vector3): void;

    projectOnVector(vector: Vector3): void;

    reflect(normal: Vector3): void;

    round(): void;

    roundToZero(): void;

    set(x: number, y: number, z: number): this;

    setComponent(index: 0 | 1 | 2, value: number): void;

    setFromMatrixColumn(index: 0 | 1 | 2 | 3, matrix: Matrix4): void;

    setLength(length: number): void;

    setX(x: number): void;

    setY(y: number): void;

    setZ(z: number): void;

    sub(vector: this): void;

    subVectors(a: this, b: this): void;

    toArray(array?: Array<number>, offset?: number): [number, number, number];

    unproject(camera: Camera): void;
  }

  declare export class Vector4 {
    +isVector4: true;
    x: number;
    y: number;
    z: number;
    w: number;

    constructor(x?: number, y?: number, z?: number, w?: number): void;

    clone(): Vector4;

    set(number, number, number, number): Vector4;

    toArray(): [number, number, number, number];
  }

  declare export class WebGLRenderer extends Renderer {
    +domElement: HTMLCanvasElement;
    +shadowMap: WebGLShadowMap;
    gammaInput: boolean;
    gammaOutput: boolean;

    constructor({|
      alpha?: boolean,
      antialias?: boolean,
      canvas?: HTMLCanvasElement,
      context?: ?(CanvasRenderingContext2D | WebGLRenderingContext),
      depth?: boolean,
      logarithmicDepthBuffer?: boolean,
      powerPreference?: "high-performance" | "low-power" | "default",
      precision?: "highp" | "mediump" | "lowp",
      premultipliedAlpha?: boolean,
      stencil?: boolean,
    |}): void;
  }

  // A render target is a buffer where the video card draws pixels for a scene
  // that is being rendered in the background. It is used in different effects,
  // such as applying postprocessing to a rendered image before displaying it
  // on the screen.
  declare export class WebGLRenderTarget {
    // The width of the render target.
    width: number;

    // The height of the render target.
    height: number;

    // A rectangular area inside the render target's viewport. Fragments that
    // are outside the area will be discarded.
    scissor: Vector4;

    // Indicates whether the scissor test is active or not.
    scissorTest: boolean;

    // The viewport of this render target.
    viewport: Vector4;

    // This texture instance holds the rendered pixels. Use it as input for
    // further processing.
    texture: Texture;

    // Renders to the depth buffer. Default is true.
    depthBuffer: boolean;

    // Renders to the stencil buffer. Default is true.
    stencilBuffer: boolean;

    // If set, the scene depth will be rendered to this texture.
    // Default is null.
    // depthTexture: DepthTexture;

    constructor(width: number, height: number, options?: {||}): void;

    // Sets the size of the render target.
    setSize(width: number, height: number): void;

    // Creates a copy of this render target.
    clone(): WebGLRenderTarget;

    // Adopts the settings of the given render target.
    copy(source: WebGLRenderTarget): WebGLRenderTarget;

    // Dispatches a dispose event.
    dispose(): void;
  }

  declare export class WebGLShadowMap {
    enabled: boolean;
    autoUpdate: boolean;
    needsUpdate: boolean;
    type: typeof BasicShadowMap | typeof PCFShadowMap | typeof PCFSoftShadowMap;
    render(Scene, Camera): void;
  }
}
