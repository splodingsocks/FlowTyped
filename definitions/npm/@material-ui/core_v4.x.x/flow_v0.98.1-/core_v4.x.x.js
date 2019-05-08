/*
 * Created and maintained: https://github.com/retyui
 * Some times you can find strange module declaration
 * that looks like `<path_scope>/@@<name>`
 * This is a temporary abstraction for importing external dependencies.
 */

declare module '@material-ui/core/@@utils' {
  // Utilities used in this definition:

  // Currently the flow.js do not support `Pick` operator
  declare export type $$Pick<NamesMap, Obj> = $Diff<Obj, $Diff<Obj, NamesMap>>;
}
declare module '@material-ui/core/@@JSS' {
  declare export type GenerateId = (rule: {}, sheet?: mixed) => string;

  declare export type StyleSheetFactoryOptions = {
    media?: string,
    meta?: string,
    generateId?: GenerateId,
    classNamePrefix?: string,
  };
}
declare module '@material-ui/core/@@csstype' {
  // I don't use `CSSStyleDeclaration` https://github.com/facebook/flow/blob/fa89aadb55ae9bb37c71e14d7274935903d501ce/lib/cssom.js#L71
  // Because all properties are described as `string`
  // But `JSS`(material-ui based on this) also support number: `{width: 10}`

  // Copied from https://unpkg.com/csstype@2.6.4/index.js.flow
  // I copied not all the properties but only took those that are needed by the <Box/> component

  declare type Globals = 'inherit' | 'initial' | 'revert' | 'unset';
  declare type ContentPosition =
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'start';
  declare type SelfPosition =
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start';

  declare type ContentDistribution =
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch';

  declare type AlignContentProperty =
    | Globals
    | ContentDistribution
    | ContentPosition
    | 'baseline'
    | 'normal'
    | string;
  declare type AlignItemsProperty =
    | Globals
    | SelfPosition
    | 'baseline'
    | 'normal'
    | 'stretch'
    | string;
  declare type AlignSelfProperty =
    | Globals
    | SelfPosition
    | 'auto'
    | 'baseline'
    | 'normal'
    | 'stretch'
    | string;

  declare type Color = 'currentcolor' | string;
  declare type LineStyle =
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'hidden'
    | 'inset'
    | 'none'
    | 'outset'
    | 'ridge'
    | 'solid';
  declare type LineWidth<TLength> = TLength | 'medium' | 'thick' | 'thin';
  declare type BorderProperty<TLength> =
    | Globals
    | LineWidth<TLength>
    | LineStyle
    | Color
    | string;

  declare type BorderBottomProperty<TLength> =
    | Globals
    | LineWidth<TLength>
    | LineStyle
    | Color
    | string;
  declare type BorderColorProperty = Globals | Color | string;
  declare type BorderLeftProperty<TLength> =
    | Globals
    | LineWidth<TLength>
    | LineStyle
    | Color
    | string;

  declare type BorderRadiusProperty<TLength> = Globals | TLength | string;
  declare type BorderRightProperty<TLength> =
    | Globals
    | LineWidth<TLength>
    | LineStyle
    | Color
    | string;

  declare type BorderTopProperty<TLength> =
    | Globals
    | LineWidth<TLength>
    | LineStyle
    | Color
    | string;
  declare type BottomProperty<TLength> = Globals | TLength | 'auto' | string;
  declare type BoxShadowProperty = Globals | 'none' | string;
  declare type ColorProperty = Globals | Color;
  declare type CursorProperty = Globals | string;

  declare type DisplayInside =
    | '-ms-flexbox'
    | '-ms-grid'
    | '-webkit-flex'
    | 'flex'
    | 'flow'
    | 'flow-root'
    | 'grid'
    | 'ruby'
    | 'table';
  declare type DisplayOutside = 'block' | 'inline' | 'run-in';
  declare type DisplayInternal =
    | 'ruby-base'
    | 'ruby-base-container'
    | 'ruby-text'
    | 'ruby-text-container'
    | 'table-caption'
    | 'table-cell'
    | 'table-column'
    | 'table-column-group'
    | 'table-footer-group'
    | 'table-header-group'
    | 'table-row'
    | 'table-row-group';
  declare type DisplayProperty =
    | Globals
    | DisplayOutside
    | DisplayInside
    | DisplayInternal
    | 'contents'
    | 'list-item'
    | 'none'
    | string;
  declare type FlexProperty<TLength> =
    | Globals
    | TLength
    | 'auto'
    | 'available'
    | 'content'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | 'none'
    | string
    | number;
  declare type FlexDirectionProperty =
    | Globals
    | 'column'
    | 'column-reverse'
    | 'row'
    | 'row-reverse';

  declare type GlobalsNumber = Globals | number;
  declare type FlexWrapProperty = Globals | 'nowrap' | 'wrap' | 'wrap-reverse';
  declare type FontFamilyProperty = Globals | string;

  declare type FontSizeProperty<TLength> =
    | Globals
    | TLength
    | 'larger'
    | 'smaller'
    | string;
  declare type FontWeightAbsolute = 'bold' | 'normal' | number;

  declare type FontWeightProperty =
    | Globals
    | FontWeightAbsolute
    | 'bolder'
    | 'lighter';
  declare type HeightProperty<TLength> = Globals | TLength | string;
  declare type JustifyContentProperty =
    | Globals
    | ContentDistribution
    | ContentPosition
    | 'left'
    | 'normal'
    | 'right'
    | string;
  declare type LeftProperty<TLength> = Globals | TLength | 'auto' | string;

  declare type MaxHeightProperty<TLength> = Globals | TLength | 'none' | string;
  declare type WidthProperty<TLength> = Globals | TLength | string;
  declare type TextAlignProperty =
    | Globals
    | 'center'
    | 'end'
    | 'justify'
    | 'left'
    | 'match-parent'
    | 'right'
    | 'start';

  declare type ZIndexProperty = Globals | 'auto' | number;
  declare type TopProperty<TLength> = Globals | TLength | 'auto' | string;

  declare type RightProperty<TLength> = Globals | TLength | 'auto' | string;
  declare type PositionProperty =
    | Globals
    | '-webkit-sticky'
    | 'absolute'
    | 'fixed'
    | 'relative'
    | 'static'
    | 'sticky';
  declare type MaxWidthProperty<TLength> = Globals | TLength | string;
  declare type OverflowProperty =
    | Globals
    | 'auto'
    | 'clip'
    | 'hidden'
    | 'scroll'
    | 'visible';

  declare type MinHeightProperty<TLength> = Globals | TLength | string;
  declare type MinWidthProperty<TLength> = Globals | TLength | string;

  declare export type Properties<TLength> = {
    alignContent?: AlignContentProperty,
    alignItems?: AlignItemsProperty,
    alignSelf?: AlignSelfProperty,
    border?: BorderProperty<TLength>,
    borderBottom?: BorderBottomProperty<TLength>,
    borderColor?: BorderColorProperty,
    borderLeft?: BorderLeftProperty<TLength>,
    borderRadius?: BorderRadiusProperty<TLength>,
    borderRight?: BorderRightProperty<TLength>,
    borderTop?: BorderTopProperty<TLength>,
    bottom?: BottomProperty<TLength>,
    boxShadow?: BoxShadowProperty | BoxShadowProperty[],
    color?: ColorProperty | ColorProperty[],
    cursor?: CursorProperty | CursorProperty[],
    display?: DisplayProperty | DisplayProperty[],
    flex?: FlexProperty<TLength> | FlexProperty<TLength>[],
    flexDirection?: FlexDirectionProperty,
    flexGrow?: GlobalsNumber,
    flexShrink?: GlobalsNumber,
    flexWrap?: FlexWrapProperty,
    fontFamily?: FontFamilyProperty,
    fontSize?: FontSizeProperty<TLength>,
    fontWeight?: FontWeightProperty,
    height?: HeightProperty<TLength> | HeightProperty<TLength>[],
    justifyContent?: JustifyContentProperty | JustifyContentProperty[],
    left?: LeftProperty<TLength> | LeftProperty<TLength>[],
    maxHeight?: MaxHeightProperty<TLength>,
    maxWidth?: MaxWidthProperty<TLength>,
    minHeight?: MinHeightProperty<TLength>,
    minWidth?: MinWidthProperty<TLength>,
    overflowX?: OverflowProperty,
    overflowY?: OverflowProperty,
    position?: PositionProperty,
    right?: RightProperty<TLength>,
    textAlign?: TextAlignProperty | TextAlignProperty[],
    top?: TopProperty<TLength> | TopProperty<TLength>[],
    width?: WidthProperty<TLength> | WidthProperty<TLength>[],
    zIndex?: ZIndexProperty | ZIndexProperty[],
  };
}
declare module '@material-ui/core/@@dom' {
  import type { Properties } from '@material-ui/core/@@csstype';

  // Material-UI use `JSS` witch support number and string for values, example: `{width: 10, height: '100%'}`
  declare export type CSS$Properties = Properties<string | number>;

  // At the moment there is no possibility to withdraw the React types for Html Element.
  // ... in the future will be replaced with exact types for a specific element (div, li, inout, ...)
  declare export type HTMLImageAttributes = {};
  declare export type HTMLDivAttributes = {};
  declare export type HTMLElementAttributes = {};
}
declare module '@material-ui/core/transitions/transition/@@react-transition-group/Transition' {
  // The version `2.9.1` based on this: //
  // https://github.com/mui-org/material-ui/blob/d0c7b070156b30908cee2b9c657469a3d6f406b3/packages/material-ui/package.json#L44

  // Types copied from: https://unpkg.com/@types/react-transition-group@2.9.1/Transition.d.ts

  declare export type EndHandler = (
    node: HTMLElement,
    done: () => void
  ) => mixed;
  declare export type EnterHandler = (
    node: HTMLElement,
    isAppearing: boolean
  ) => mixed;
  declare export type ExitHandler = (node: HTMLElement) => mixed;

  declare export var UNMOUNTED: 'unmounted';
  declare export var EXITED: 'exited';
  declare export var ENTERING: 'entering';
  declare export var ENTERED: 'entered';
  declare export var EXITING: 'exiting';

  declare export type TransitionActions = {
    appear?: boolean,
    enter?: boolean,
    exit?: boolean,
  };

  declare export type TransitionStatus =
    | typeof ENTERING
    | typeof ENTERED
    | typeof EXITING
    | typeof EXITED
    | typeof UNMOUNTED;

  declare export type TransitionChildren =
    | React$Node
    | ((status: TransitionStatus) => React$Node);

  declare export type TransitionProps = TransitionActions & {
    timeout: number | {| enter?: number, exit?: number |},
    children?: TransitionChildren,
    in?: boolean,
    mountOnEnter?: boolean,
    unmountOnExit?: boolean,
    addEndListener?: EndHandler,
    onEnter?: EnterHandler,
    onEntering?: EnterHandler,
    onEntered?: EnterHandler,
    onExit?: ExitHandler,
    onExiting?: ExitHandler,
    onExited?: ExitHandler,
  };
}

///////////////////////////////////////////////////////////////////////////////
declare module '@material-ui/core/OverridableComponent' {
  import type {
    StyledComponentProps,
    CSSProperties,
  } from '@material-ui/core/styles/withStyles';

  /**
   * a component whose root component can be controled via a `component` prop
   *
   * Adjusts valid props based on the type of `component`
   */
  declare type $OverridableComponent<M: OverridableTypeMap<*, *, *>> = {
    (props: DefaultComponentProps<M>): React$Node,
    // TODO: not supported https://github.com/facebook/flow/issues/7701
    // <Component: React$ElementType>(
    //   props: { component?: Component } & OverrideProps<M, Component>
    // ): React$Node,
  };

  declare export type OverridableComponent<
    Props,
    DefaultComp,
    ClassKey
  > = $OverridableComponent<OverridableTypeMap<Props, DefaultComp, ClassKey>>;

  /**
   * props of the component if `component={Component}` is used
   */
  declare export type OverrideProps<
    M: OverridableTypeMap<*, *, *>,
    C: React$ElementType
  > = BaseProps<M> & $Diff<React$ElementConfig<C>, CommonProps<M>>;

  /**
   * props if `component={Component}` is NOT used
   */
  declare export type DefaultComponentProps<
    M: OverridableTypeMap<*, *, *>
  > = BaseProps<M> &
    $Diff<
      React$ElementConfig<$ElementType<M, 'defaultComponent'>>,
      BaseProps<M>
    >;

  /**
   * props defined on the component (+ common material-ui props)
   */
  declare export type BaseProps<M: OverridableTypeMap<*, *, *>> = $ElementType<
    M,
    'props'
  > &
    CommonProps<M>;

  /**
   * props that are valid for material-ui components
   */
  declare export type CommonProps<
    M: OverridableTypeMap<*, *, *>
  > = StyledComponentProps<$ElementType<M, 'classKey'>> & {
    className?: string,
    style?: CSSProperties,
  };

  declare export type OverridableTypeMap<
    Props: {},
    DefaultComponent: React$ElementType,
    ClassKey: string
  > = {
    props: Props,
    defaultComponent: React$ElementType,
    classKey: ClassKey,
  };

  declare type Simplify<
    Map,
    OC: OverridableComponent<Map>
  > = DefaultComponentProps<Map>;

  declare export type SimplifiedPropsOf<OC: OverridableComponent<*>> = Simplify<
    *,
    OC
  >;
}
declare module '@material-ui/core/transitions' {
  import type {
    TransitionStatus as BaseTransitionStatus,
    TransitionProps as BaseTransitionProps,
    TransitionActions,
  } from '@material-ui/core/transitions/transition/@@react-transition-group/Transition';
  import type { CSSProperties } from '@material-ui/core/styles/withStyles';
  import type { $$Pick } from '@material-ui/core/@@utils';

  declare type _TransitionHandler = {
    onEnter: any,
    onEntering: any,
    onEntered: any,
    onExit: any,
    onExiting: any,
    onExited: any,
  };

  declare export type TransitionHandlerKeys = $Keys<_TransitionHandler>;
  declare export type TransitionHandlerProps = $$Pick<
    _TransitionHandler,
    BaseTransitionProps
  >;

  declare type _Transition = {
    in: any,
    mountOnEnter: any,
    unmountOnExit: any,
    timeout: any,
    addEndListener: any,
    ...$Exact<_TransitionHandler>,
  };

  declare export type TransitionKeys = $Keys<_Transition>;
  declare type $TransitionProps = $$Pick<_Transition, BaseTransitionProps>;

  declare export type TransitionStatus = BaseTransitionStatus;
  declare export type TransitionProps = TransitionActions & {
    ...$TransitionProps,
  } & {
    style?: CSSProperties,
  };
}
declare module '@material-ui/core/transitions/transition' {
  declare export * from '@material-ui/core/transitions'
}

declare module '@material-ui/core/colors' {
  declare export { default as amber } from '@material-ui/core/colors/amber';
  declare export { default as blue } from '@material-ui/core/colors/blue';
  declare export {
    default as blueGrey,
  } from '@material-ui/core/colors/blueGrey';
  declare export { default as brown } from '@material-ui/core/colors/brown';
  declare export { default as common } from '@material-ui/core/colors/common';
  declare export { default as cyan } from '@material-ui/core/colors/cyan';
  declare export {
    default as deepOrange,
  } from '@material-ui/core/colors/deepOrange';
  declare export {
    default as deepPurple,
  } from '@material-ui/core/colors/deepPurple';
  declare export { default as green } from '@material-ui/core/colors/green';
  declare export { default as grey } from '@material-ui/core/colors/grey';
  declare export { default as indigo } from '@material-ui/core/colors/indigo';
  declare export {
    default as lightBlue,
  } from '@material-ui/core/colors/lightBlue';
  declare export {
    default as lightGreen,
  } from '@material-ui/core/colors/lightGreen';
  declare export { default as lime } from '@material-ui/core/colors/lime';
  declare export { default as orange } from '@material-ui/core/colors/orange';
  declare export { default as pink } from '@material-ui/core/colors/pink';
  declare export { default as purple } from '@material-ui/core/colors/purple';
  declare export { default as red } from '@material-ui/core/colors/red';
  declare export { default as teal } from '@material-ui/core/colors/teal';
  declare export { default as yellow } from '@material-ui/core/colors/yellow';
}
declare module '@material-ui/core/colors/amber' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/blue' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/blueGrey' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/brown' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/common' {
  declare export type CommonColors = {|
    black: string,
    white: string,
  |};

  declare export default CommonColors;
}
declare module '@material-ui/core/colors/cyan' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/deepOrange' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/deepPurple' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/green' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/grey' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/indigo' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/lightBlue' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/lightGreen' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/lime' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/orange' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/pink' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/purple' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/red' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/teal' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}
declare module '@material-ui/core/colors/yellow' {
  import type { Color } from '@material-ui/core';
  declare export default Color;
}

declare module '@material-ui/core/utils' {
  declare export * from '@material-ui/core/utils/helpers'
  declare export * from '@material-ui/core/utils/reactHelpers'
  declare export {
    default as requirePropFactory,
  } from '@material-ui/core/utils/requirePropFactory';
  declare export {
    default as ownerWindow,
  } from '@material-ui/core/utils/ownerWindow';
}
declare module '@material-ui/core/utils/helpers' {
  declare export type ChainedFunction =
    | ((...args: Array<any>) => mixed)
    | void
    | null;

  declare export function capitalize(str: string): string;

  declare export function contains(obj: {}, pred: {}): boolean;

  declare export function createChainedFunction(
    ...args: Array<ChainedFunction>
  ): (...args: Array<any>) => mixed;
}
declare module '@material-ui/core/utils/ownerWindow' {
  // https://github.com/facebook/flow/blob/e812492d9f642c0345e70407e77d16768a55be81/lib/bom.js#L36
  declare type $Window = any;

  declare export default (node: Node, fallback?: $Window) => $Window;
}
declare module '@material-ui/core/utils/reactHelpers' {
  declare export type NamedMuiComponent = React$ComponentType<any> & {
    muiName: string,
  };

  declare export type NamedMuiElement = {
    type: NamedMuiComponent,
    // TODO: need StandardProps
    props: any,
    key: string | number | null,
  };

  declare export function isMuiElement(
    element: any,
    muiNames: Array<string>
  ): boolean;

  declare export function setRef<T>(ref: React$Ref<T>, value: T | null): void;
}
declare module '@material-ui/core/utils/requirePropFactory' {
  declare export default (componentNameInError: string) => any;
}

declare module '@material-ui/core/styles/colorManipulator' {
  declare export type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla';
  declare export type ColorObject = {
    type: ColorFormat,
    values: [number, number, number] | [number, number, number, number],
  };

  declare export function recomposeColor(color: ColorObject): string;
  declare export function convertHexToRGB(hex: string): string;
  declare export function rgbToHex(color: string): string;
  declare export function decomposeColor(color: string): ColorObject;
  declare export function getContrastRatio(
    foreground: string,
    background: string
  ): number;
  declare export function getLuminance(color: string): number;
  declare export function emphasize(
    color: string,
    coefficient?: number
  ): string;
  declare export function fade(color: string, value: number): string;
  declare export function darken(color: string, coefficient?: number): string;
  declare export function lighten(color: string, coefficient?: number): string;
}
declare module '@material-ui/core/styles/createBreakpoints' {
  declare export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  declare export type BreakpointValues = { [key: Breakpoint]: number };

  declare export type Breakpoints = {|
    keys: Breakpoint[],
    values: BreakpointValues,
    up: (key: Breakpoint | number) => string,
    down: (key: Breakpoint | number) => string,
    between: (start: Breakpoint, end: Breakpoint) => string,
    only: (key: Breakpoint) => string,
    width: (key: Breakpoint) => number,
  |};

  declare export type BreakpointsOptions = $Shape<{|
    ...Breakpoints,
    unit: string,
    step: number,
  |}>;

  declare export var keys: Array<Breakpoint>;

  declare export default (options: BreakpointsOptions) => Breakpoints;
}
declare module '@material-ui/core/styles/createSpacing' {
  declare export type SpacingArgument = number | string;

  declare export type Spacing = {
    (value1: SpacingArgument): number,
    (value1: SpacingArgument, value2: SpacingArgument): string,
    (
      value1: SpacingArgument,
      value2: SpacingArgument,
      value3: SpacingArgument
    ): string,
    (
      value1: SpacingArgument,
      value2: SpacingArgument,
      value3: SpacingArgument,
      value4: SpacingArgument
    ): string,
  };

  declare export type SpacingOptions = number | Spacing;

  declare export default (spacing?: SpacingOptions) => Spacing;
}
declare module '@material-ui/core/styles/zIndex' {
  declare export type ZIndex = {
    mobileStepper: number,
    appBar: number,
    drawer: number,
    modal: number,
    snackbar: number,
    tooltip: number,
  };

  declare export type ZIndexOptions = $Shape<ZIndex>;
  declare export default ZIndex;
}
declare module '@material-ui/core/styles/transitions' {
  declare export type Easing = {|
    easeInOut: string,
    easeOut: string,
    easeIn: string,
    sharp: string,
  |};

  declare export var easing: Easing;

  declare export type Duration = {|
    shortest: number,
    shorter: number,
    short: number,
    standard: number,
    complex: number,
    enteringScreen: number,
    leavingScreen: number,
  |};

  declare export var duration: Duration;

  declare export function formatMs(milliseconds: number): string;

  declare export type Transitions = {|
    easing: Easing,
    duration: Duration,
    create(
      props: string | string[],
      options?: $Shape<{|
        duration: number | string,
        easing: string,
        delay: number | string,
      |}>
    ): string,
    getAutoHeightDuration(height: number): number,
  |};

  declare export type TransitionsOptions = {|
    easing?: $Shape<Easing>,
    duration?: $Shape<Duration>,
    create?: (
      props: string | string[],
      options?: $Shape<{
        duration: number | string,
        easing: string,
        delay: number | string,
      }>
    ) => string,
    getAutoHeightDuration?: (height: number) => number,
  |};

  declare export default Transitions;
}
declare module '@material-ui/core/styles/createMixins' {
  import type { Breakpoints } from '@material-ui/core/styles/createBreakpoints';
  import type { Spacing } from '@material-ui/core/styles/createSpacing';
  import type { CSSProperties } from '@material-ui/core/styles/withStyles';

  declare export type Mixins = {
    gutters: (styles?: CSSProperties) => CSSProperties,
    toolbar: CSSProperties,
  };

  declare export type MixinsOptions = $Shape<Mixins>;

  declare export default (
    breakpoints: Breakpoints,
    spacing: Spacing,
    mixins: MixinsOptions
  ) => Mixins;
}
declare module '@material-ui/core/styles/createMuiTheme' {
  import type {
    Breakpoints,
    BreakpointsOptions,
  } from '@material-ui/core/styles/createBreakpoints';
  import type {
    Mixins,
    MixinsOptions,
  } from '@material-ui/core/styles/createMixins';
  import type {
    Palette,
    PaletteOptions,
  } from '@material-ui/core/styles/createPalette';
  import type {
    Typography,
    TypographyOptions,
  } from '@material-ui/core/styles/createTypography';
  import type { Shadows } from '@material-ui/core/styles/shadows';
  import type { Shape, ShapeOptions } from '@material-ui/core/styles/shape';
  import type {
    Spacing,
    SpacingOptions,
  } from '@material-ui/core/styles/createSpacing';
  import type {
    Transitions,
    TransitionsOptions,
  } from '@material-ui/core/styles/transitions';
  import type { ZIndex, ZIndexOptions } from '@material-ui/core/styles/zIndex';
  import type { Overrides } from '@material-ui/core/styles/overrides';
  import type { ComponentsProps } from '@material-ui/core/styles/props';

  declare export type Direction = 'ltr' | 'rtl';

  declare export type ThemeOptions = {|
    shape?: ShapeOptions,
    breakpoints?: BreakpointsOptions,
    direction?: Direction,
    mixins?: MixinsOptions,
    overrides?: Overrides,
    palette?: PaletteOptions,
    props?: ComponentsProps,
    shadows?: Shadows,
    spacing?: SpacingOptions,
    transitions?: TransitionsOptions,
    typography?: TypographyOptions | ((palette: Palette) => TypographyOptions),
    zIndex?: ZIndexOptions,
  |};

  declare export type Theme = {|
    shape: Shape,
    breakpoints: Breakpoints,
    direction: Direction,
    mixins: Mixins,
    overrides?: Overrides,
    palette: Palette,
    props?: ComponentsProps,
    shadows: Shadows,
    spacing: Spacing,
    transitions: Transitions,
    typography: Typography,
    zIndex: ZIndex,
  |};

  declare export default (options?: ThemeOptions) => Theme;
}
declare module '@material-ui/core/styles/createPalette' {
  import type { Color, PaletteType } from '@material-ui/core';
  import type { CommonColors } from '@material-ui/core/colors/common';

  declare export type ColorPartial = $Shape<Color>;

  declare export type TypeText = {|
    primary: string,
    secondary: string,
    disabled: string,
    hint: string,
  |};

  declare export type TypeAction = {|
    active: string,
    hover: string,
    hoverOpacity: number,
    selected: string,
    disabled: string,
    disabledBackground: string,
  |};

  declare export type TypeBackground = {|
    default: string,
    paper: string,
  |};

  declare export type TypeDivider = string;

  declare export type PaletteColorOptions =
    | SimplePaletteColorOptions
    | ColorPartial;

  declare export type SimplePaletteColorOptions = {|
    light?: string,
    main: string,
    dark?: string,
    contrastText?: string,
  |};

  declare export type PaletteColor = {|
    light: string,
    main: string,
    dark: string,
    contrastText: string,
  |};

  declare export type TypeObject = {|
    text: TypeText,
    action: TypeAction,
    divider: TypeDivider,
    background: TypeBackground,
  |};

  declare export var light: TypeObject;
  declare export var dark: TypeObject;

  declare export type Palette = {|
    common: CommonColors,
    type: PaletteType,
    contrastThreshold: number,
    tonalOffset: number,
    primary: PaletteColor,
    secondary: PaletteColor,
    error: PaletteColor,
    grey: Color,
    text: TypeText,
    divider: TypeDivider,
    action: TypeAction,
    background: TypeBackground,
    getContrastText: (background: string) => string,
    augmentColor: {
      (
        color: ColorPartial,
        mainShade?: number | string,
        lightShade?: number | string,
        darkShade?: number | string
      ): PaletteColor,
      (color: PaletteColorOptions): PaletteColor,
    },
  |};

  declare export type PartialTypeObject = $ObjMap<
    TypeObject,
    <V>(V) => $Shape<V>
  >;

  declare export type PaletteOptions = {|
    primary?: PaletteColorOptions,
    secondary?: PaletteColorOptions,
    error?: PaletteColorOptions,
    type?: PaletteType,
    tonalOffset?: number,
    contrastThreshold?: number,
    common?: $Shape<CommonColors>,
    grey?: ColorPartial,
    text?: $Shape<TypeText>,
    divider?: string,
    action?: $Shape<TypeAction>,
    background?: $Shape<TypeBackground>,
    getContrastText?: (background: string) => string,
  |};

  declare export default (palette: PaletteOptions) => Palette;
}
declare module '@material-ui/core/styles/createStyles' {
  import type { StyleRules } from '@material-ui/core/styles/withStyles';

  declare export default {
    <C: string>(styles: StyleRules<C>): StyleRules<C>,
  };
}
declare module '@material-ui/core/styles/createTypography' {
  import type { Palette } from '@material-ui/core/styles/createPalette';
  import type { CSSProperties } from '@material-ui/core/styles/withStyles';

  declare export type ThemeStyle =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';

  declare export type FontStyle = {|
    fontSize: number,
    fontFamily: $ElementType<CSSProperties, 'fontFamily'>,
    fontWeightLight: $ElementType<CSSProperties, 'fontWeight'>,
    fontWeightRegular: $ElementType<CSSProperties, 'fontWeight'>,
    fontWeightMedium: $ElementType<CSSProperties, 'fontWeight'>,
  |};

  declare export type FontStyleOptions = $Shape<{|
    ...FontStyle,
    htmlFontSize: number,
    allVariants: CSSProperties,
  |}>;

  declare export type TypographyStyle = {|
    fontFamily: $ElementType<CSSProperties, 'fontFamily'>,
    fontSize: $ElementType<CSSProperties, 'fontSize'>,
    fontWeight: $ElementType<CSSProperties, 'fontWeight'>,
    color: $ElementType<CSSProperties, 'color'>,

    letterSpacing?: $ElementType<CSSProperties, 'letterSpacing'>,
    lineHeight?: $ElementType<CSSProperties, 'lineHeight'>,
    textTransform?: $ElementType<CSSProperties, 'textTransform'>,
  |};

  declare export type TypographyStyleOptions = $Shape<TypographyStyle>;

  declare export type TypographyUtils = {|
    pxToRem: (px: number) => string,
  |};

  declare export type Typography = {|
    [ThemeStyle]: TypographyStyle,
    ...FontStyle,
    ...TypographyUtils,
  |};

  declare export type TypographyOptions = {|
    [ThemeStyle]: TypographyStyleOptions,
    ...FontStyleOptions,
  |};

  declare export default (
    palette: Palette,
    typography: TypographyOptions | ((palette: Palette) => TypographyOptions)
  ) => Typography;
}
declare module '@material-ui/core/styles/makeStyles' {
  import type {
    ClassKeyOfStyles,
    ClassNameMap,
    PropsOfStyles,
    Styles,
    WithStylesOptions,
  } from '@material-ui/core/styles/withStyles';

  declare export type StylesHook<S: Styles<*, *>> = (
    props: PropsOfStyles<S>
  ) => ClassNameMap<ClassKeyOfStyles<S>>;

  declare export default {
    <Theme: mixed, Props: {}, ClassKey: string>(
      styles: Styles<Theme, Props, ClassKey>,
      options?: WithStylesOptions<Theme>
    ): StylesHook<Styles<Theme, Props, ClassKey>>,
  };
}
declare module '@material-ui/core/styles/overrides' {
  // TODO
  declare export type Overrides = {};
  declare export type ComponentNameToClassKey = {};
}
declare module '@material-ui/core/styles/props' {
  // TODO
  declare export type ComponentsProps = {};
  declare export type ComponentsPropsList = {};
}
declare module '@material-ui/core/styles/shadows' {
  declare export type Shadows = [
    'none',
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ];

  declare export default Shadows;
}
declare module '@material-ui/core/styles/shape' {
  declare export type Shape = {|
    borderRadius: number,
  |};

  declare export type ShapeOptions = $Shape<Shape>;

  declare export default Shape;
}
declare module '@material-ui/core/styles/useTheme' {
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';

  declare export default {
    <T: Theme>(): T,
  };
}
declare module '@material-ui/core/styles/withStyles' {
  import type { StyleSheetFactoryOptions } from '@material-ui/core/@@JSS';
  import type { CSS$Properties } from '@material-ui/core/@@dom';
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';

  declare export type CSSProperties = CSS$Properties;

  declare export type StyleRules<ClassKey: string> = {
    [ClassKey]: CSSProperties,
  };

  declare export type StyleRulesCallback<ClassKey: string> = (
    theme: Theme
  ) => StyleRules<ClassKey>;

  declare export type Styles<ClassKey: string> =
    | StyleRules<ClassKey>
    | StyleRulesCallback<ClassKey>;

  declare type _PropsOfStyles<Props: {}, S: Styles<any, Props, any>> = Props;
  declare type _ClassKeyOfStyles<
    ClassKey: string,
    S: Styles<any, any, ClassKey>
  > = ClassKey;

  declare export type PropsOfStyles<S: Styles<*, *, *>> = _PropsOfStyles<*, S>;
  declare export type ClassKeyOfStyles<S: Styles<*, *, *>> = _ClassKeyOfStyles<
    *
  >;

  declare export type WithStylesOptions = StyleSheetFactoryOptions & {
    flip?: boolean,
    name?: string,
  };

  declare export type ClassNameMap<Keys: string> = { [Keys]: string };

  declare export type StyledComponentProps<ClassesKeys: string> = {
    classes?: ClassNameMap<ClassesKeys>,
    innerRef?: React$Ref<any>,
  };

  declare export default {
    <ClassKey: string, Options: WithStylesOptions & { withTheme: true }>(
      style: Styles<ClassKey>,
      options?: Options
    ): <Comp: React$ComponentType<*>>(
      Component: Comp
    ) => React$ComponentType<
      $Diff<React$ElementConfig<Comp>, { classes: any, theme: any }> &
        StyledComponentProps<ClassKey>
    >,
    <ClassKey: string, Options: WithStylesOptions & { withTheme?: false }>(
      style: Styles<ClassKey>,
      options?: Options
    ): <Comp: React$ComponentType<*>>(
      Component: Comp
    ) => React$ComponentType<
      $Diff<React$ElementConfig<Comp>, { classes: any }> &
        StyledComponentProps<ClassKey>
    >,
  };
}
declare module '@material-ui/core/styles/withTheme' {
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';

  declare export type WithTheme = {
    theme: Theme,
  };

  declare export type ThemedComponentProps = { ...WithTheme } & {
    innerRef?: React$Ref<any>,
  };

  declare export default {
    <Comp: React$ComponentType<*>>(
      Component: Comp
    ): React$ComponentType<
      $Diff<React$ElementConfig<Comp>, WithTheme> & ThemedComponentProps
    >,
  };
}
declare module '@material-ui/core/styles' {
  declare export * from '@material-ui/core/styles/colorManipulator'
  declare export {
    default as createMuiTheme,
    Theme,
    Direction,
  } from '@material-ui/core/styles/createMuiTheme';
  declare export {
    default as createPalette,
    PaletteColorOptions,
    SimplePaletteColorOptions,
  } from '@material-ui/core/styles/createPalette';
  declare export {
    default as createStyles,
  } from '@material-ui/core/styles/createStyles';
  declare export {
    TypographyStyle,
  } from '@material-ui/core/styles/createTypography';
  declare export {
    default as makeStyles,
  } from '@material-ui/core/styles/makeStyles';
  declare export { ComponentsPropsList } from '@material-ui/core/styles/props';
  declare export * from '@material-ui/core/styles/transitions'
  declare export {
    default as useTheme,
  } from '@material-ui/core/styles/useTheme';
  declare export {
    default as withStyles,
    StyleRules,
    StyleRulesCallback,
    StyledComponentProps,
  } from '@material-ui/core/styles/withStyles';
  declare export {
    default as withTheme,
    WithTheme,
  } from '@material-ui/core/styles/withTheme';
}

declare module '@material-ui/core/Paper' {
  import type { StandardProps } from '@material-ui/core';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';

  declare export type PaperClassKey =
    | 'root'
    | 'rounded'
    | 'elevation0'
    | 'elevation1'
    | 'elevation2'
    | 'elevation3'
    | 'elevation4'
    | 'elevation5'
    | 'elevation6'
    | 'elevation7'
    | 'elevation8'
    | 'elevation9'
    | 'elevation10'
    | 'elevation11'
    | 'elevation12'
    | 'elevation13'
    | 'elevation14'
    | 'elevation15'
    | 'elevation16'
    | 'elevation17'
    | 'elevation18'
    | 'elevation19'
    | 'elevation20'
    | 'elevation21'
    | 'elevation22'
    | 'elevation23'
    | 'elevation24';

  declare export type PaperProps = StandardProps<
    HTMLDivAttributes,
    PaperClassKey,
    void
  > & {
    component?: React$ElementType,
    elevation?: number,
    square?: boolean,
  };

  declare export default React$ComponentType<PaperProps>;
}
declare module '@material-ui/core/Paper/Paper' {
  declare export * from '@material-ui/core/Paper'
}

declare module '@material-ui/core/AppBar' {
  import type { StandardProps, PropTypes$Color } from '@material-ui/core';
  import type { PaperProps } from '@material-ui/core/Paper';

  declare export type AppBarClassKey =
    | 'root'
    | 'positionFixed'
    | 'positionAbsolute'
    | 'positionSticky'
    | 'positionStatic'
    | 'positionRelative'
    | 'colorDefault'
    | 'colorPrimary'
    | 'colorSecondary';

  declare export type AppBarProps = StandardProps<
    PaperProps,
    AppBarClassKey,
    void
  > & {
    color?: PropTypes$Color,
    position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative',
  };

  declare export default React$ComponentType<AppBarProps>;
}
declare module '@material-ui/core/AppBar/AppBar' {
  declare export * from '@material-ui/core/AppBar'
}

declare module '@material-ui/core/Avatar' {
  import type { HTMLImageAttributes } from '@material-ui/core/@@dom';
  import type {
    OverridableComponent,
    SimplifiedPropsOf,
  } from '@material-ui/core/OverridableComponent';

  declare export type AvatarClassKey = 'root' | 'colorDefault' | 'img';

  declare type Avatar = OverridableComponent<
    {
      alt?: string,
      childrenClassName?: string,
      imgProps?: HTMLImageAttributes,
      sizes?: string,
      src?: string,
      srcSet?: string,
    },
    'div',
    AvatarClassKey
  >;

  declare export type AvatarProps = SimplifiedPropsOf<Avatar>;

  declare export default Avatar;
}
declare module '@material-ui/core/Avatar/Avatar' {
  declare export * from '@material-ui/core/Avatar'
}

declare module '@material-ui/core/Backdrop' {
  import type { StandardProps } from '@material-ui/core';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { FadeProps } from '@material-ui/core/Fade';
  import type { TransitionProps } from '@material-ui/core/transitions';

  declare export type BackdropClassKey = 'root' | 'invisible';

  declare export type BackdropProps = StandardProps<
    HTMLDivAttributes & { ...FadeProps },
    BackdropClassKey,
    void
  > & {
    open: boolean,
    invisible?: boolean,
    onClick?: ({}) => mixed,
    transitionDuration?: $ElementType<TransitionProps, 'timeout'>,
  };

  declare export default React$ComponentType<BackdropProps>;
}
declare module '@material-ui/core/Backdrop/Backdrop' {
  declare export * from '@material-ui/core/Backdrop'
}

declare module '@material-ui/core/Badge' {
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { StandardProps, PropTypes$Color } from '@material-ui/core';

  declare export type BadgeClassKey =
    | 'root'
    | 'badge'
    | 'colorPrimary'
    | 'colorSecondary'
    | 'colorError'
    | 'invisible'
    | 'dot';

  declare export type BadgeProps = StandardProps<
    HTMLDivAttributes,
    BadgeClassKey,
    void
  > & {
    children: React$Node,
    badgeContent?: React$Node,
    color?: PropTypes$Color | 'error',
    component?: React$ElementType,
    invisible?: boolean,
    max?: number,
    showZero?: boolean,
    variant?: 'standard' | 'dot',
  };

  declare export default React$ComponentType<BadgeProps>;
}
declare module '@material-ui/core/Badge/Badge' {
  declare export * from '@material-ui/core/Badge'
}

declare module '@material-ui/core/BottomNavigation' {
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { StandardProps } from '@material-ui/core';

  declare export type BottomNavigationClassKey = 'root';

  declare export type BottomNavigationProps = StandardProps<
    HTMLDivAttributes,
    BottomNavigationClassKey,
    { onChange: any }
  > & {
    component?: React$ElementType,
    children: React$Node,
    onChange?: (event: {}, value: any) => mixed,
    showLabels?: boolean,
    value?: any,
  };

  declare export default React$ComponentType<BottomNavigationProps>;
}
declare module '@material-ui/core/BottomNavigation/BottomNavigation' {
  declare export * from '@material-ui/core/BottomNavigation'
}

declare module '@material-ui/core/Box' {
  import type { $$Pick } from '@material-ui/core/@@utils';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { CSSProperties } from '@material-ui/core/styles/withStyles';

  declare type PropsByCSSProperties = {
    ...$$Pick<
      {
        alignContent: any,
        alignItems: any,
        alignSelf: any,
        border: any,
        borderBottom: any,
        borderColor: any,
        borderLeft: any,
        borderRadius: any,
        borderRight: any,
        borderTop: any,
        bottom: any,
        boxShadow: any,
        color: any,
        cursor: any,
        display: any,
        flex: any,
        flexDirection: any,
        flexGrow: any,
        flexShrink: any,
        flexWrap: any,
        fontFamily: any,
        fontSize: any,
        fontWeight: any,
        height: any,
        justifyContent: any,
        left: any,
        maxHeight: any,
        maxWidth: any,
        minHeight: any,
        minWidth: any,
        overflowX: any,
        overflowY: any,
        position: any,
        right: any,
        textAlign: any,
        top: any,
        width: any,
        zIndex: any,
      },
      CSSProperties
    >,
  };

  declare export type BoxProps = PropsByCSSProperties &
    HTMLDivAttributes & {
      component?: React$ElementType,
      // styled API
      clone?: boolean,
      // Box specific props
      bgcolor?: string,
      displayPrint?: string,
      m?: string | number,
      mb?: string | number,
      ml?: string | number,
      mr?: string | number,
      mt?: string | number,
      mx?: string | number,
      my?: string | number,
      order?: string | number,
      p?: string | number,
      pb?: string | number,
      pl?: string | number,
      pr?: string | number,
      pt?: string | number,
      px?: string | number,
      py?: string | number,
    };

  declare export default React$ComponentType<BoxProps>;
}
declare module '@material-ui/core/Box/Box' {
  declare export * from '@material-ui/core/Box'
}

declare module '@material-ui/core/Breadcrumbs' {
  import type {
    OverridableComponent,
    SimplifiedPropsOf,
  } from '@material-ui/core/OverridableComponent';

  declare export type BreadcrumbsClassKey = 'root' | 'ol' | 'separator';

  declare type Breadcrumbs = OverridableComponent<
    {
      itemsAfterCollapse?: boolean,
      itemsBeforeCollapse?: boolean,
      maxItems?: number,
      separator?: React$Node,
    },
    'nav',
    BreadcrumbsClassKey
  >;

  declare export type BreadcrumbsProps = SimplifiedPropsOf<Breadcrumbs>;

  declare export default Breadcrumbs;
}
declare module '@material-ui/core/Breadcrumbs/Breadcrumbs' {
  declare export * from '@material-ui/core/Breadcrumbs'
}

declare module '@material-ui/core/Card' {
  import type { StandardProps } from '@material-ui/core';
  import type { PaperProps } from '@material-ui/core/Paper';

  declare export type CardClassKey = 'root';

  declare export type CardProps = StandardProps<
    PaperProps,
    CardClassKey,
    void
  > & {
    raised?: boolean,
  };

  declare export default React$ComponentType<CardProps>;
}
declare module '@material-ui/core/Card/Card' {
  declare export * from '@material-ui/core/Card'
}

declare module '@material-ui/core/CardActions' {
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { StandardProps } from '@material-ui/core';

  declare export type CardActionsClassKey = 'root' | 'spacing';

  declare export type CardActionsProps = StandardProps<
    HTMLDivAttributes,
    CardActionsClassKey,
    void
  > & {
    disableSpacing?: boolean,
  };

  declare export default React$ComponentType<CardActionsProps>;
}
declare module '@material-ui/core/CardActions/CardActions' {
  declare export * from '@material-ui/core/CardActions'
}

declare module '@material-ui/core/CardContent' {
  import type { StandardProps } from '@material-ui/core';
  import type { PaperProps } from '@material-ui/core/Paper';

  declare export type CardContentClassKey = 'root';

  declare export type CardContentProps = StandardProps<
    PaperProps,
    CardContentClassKey,
    void
  > & {
    component?: React$ElementType,
  };

  declare export default React$ComponentType<CardContentProps>;
}
declare module '@material-ui/core/CardContent/CardContent' {
  declare export * from '@material-ui/core/CardContent'
}

declare module '@material-ui/core/CircularProgress' {
  import type { StandardProps } from '@material-ui/core';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  declare export type CircularProgressClassKey =
    | 'root'
    | 'static'
    | 'indeterminate'
    | 'colorPrimary'
    | 'colorSecondary'
    | 'svg'
    | 'circle'
    | 'circleStatic'
    | 'circleIndeterminate'
    | 'circleDisableShrink';

  declare export type CircularProgressProps = StandardProps<
    HTMLDivAttributes,
    CircularProgressClassKey,
    void
  > & {
    color?: 'primary' | 'secondary' | 'inherit',
    disableShrink?: boolean,
    size?: number | string,
    thickness?: number,
    value?: number,
    variant?: 'determinate' | 'indeterminate' | 'static',
  };

  declare export default React$ComponentType<CircularProgressProps>;
}
declare module '@material-ui/core/CircularProgress/CircularProgress' {
  declare export * from '@material-ui/core/CircularProgress'
}

declare module '@material-ui/core/ClickAwayListener' {
  declare export type ClickAwayListenerProps = {|
    children: React$Node,
    onClickAway: (event: {} /*SyntheticMouseEvent<Document>*/) => mixed,
    mouseEvent?: 'onClick' | 'onMouseDown' | 'onMouseUp' | false,
    touchEvent?: 'onTouchStart' | 'onTouchEnd' | false,
  |};

  declare export default React$ComponentType<ClickAwayListenerProps>;
}
declare module '@material-ui/core/ClickAwayListener/ClickAwayListener' {
  declare export * from '@material-ui/core/ClickAwayListener'
}

declare module '@material-ui/core/Container' {
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { StandardProps } from '@material-ui/core';

  declare export type ContainerClassKey =
    | 'root'
    | 'fixed'
    | 'maxWidthXs'
    | 'maxWidthSm'
    | 'maxWidthMd'
    | 'maxWidthLg'
    | 'maxWidthXl';

  declare export type ContainerProps = StandardProps<
    HTMLDivAttributes,
    ContainerClassKey,
    void
  > & {
    component?: React$ElementType,
    fixed?: boolean,
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false,
  };

  declare export default React$ComponentType<ContainerProps>;
}
declare module '@material-ui/core/Container/Container' {
  declare export * from '@material-ui/core/Container'
}

declare module '@material-ui/core/CssBaseline' {
  declare export type CssBaselineClassKey = '@global';

  declare export type CssBaselineProps = {|
    children?: React$Node,
  |};

  declare export default React$ComponentType<CssBaselineProps>;
}
declare module '@material-ui/core/CssBaseline/CssBaseline' {
  declare export * from '@material-ui/core/CssBaseline'
}

declare module '@material-ui/core/DialogActions' {
  import type { StandardProps } from '@material-ui/core';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  declare export type DialogActionsClassKey = 'root' | 'spacing';

  declare export type DialogActionsProps = StandardProps<
    HTMLDivAttributes,
    DialogActionsClassKey,
    void
  > & {
    disableSpacing?: boolean,
  };

  declare export default React$ComponentType<DialogActionsProps>;
}
declare module '@material-ui/core/DialogActions/DialogActions' {
  declare export * from '@material-ui/core/DialogActions'
}

declare module '@material-ui/core/DialogContent' {
  import type { StandardProps } from '@material-ui/core';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  declare export type DialogContentClassKey = 'root';

  declare export type DialogContentProps = StandardProps<
    HTMLDivAttributes,
    DialogContentClassKey,
    void
  > & {
    dividers?: boolean,
  };

  declare export default React$ComponentType<DialogContentProps>;
}
declare module '@material-ui/core/DialogContent/DialogContent' {
  declare export * from '@material-ui/core/DialogContent'
}

declare module '@material-ui/core/DialogTitle' {
  import type { StandardProps } from '@material-ui/core';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  declare export type DialogTitleClassKey = 'root';

  declare export type DialogTitleProps = StandardProps<
    HTMLDivAttributes,
    DialogTitleClassKey,
    void
  > & {
    disableTypography?: boolean,
  };

  declare export default React$ComponentType<DialogTitleProps>;
}
declare module '@material-ui/core/DialogTitle/DialogTitle' {
  declare export * from '@material-ui/core/DialogTitle'
}

declare module '@material-ui/core/ExpansionPanelActions' {
  import type { StandardProps } from '@material-ui/core';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';

  declare export type ExpansionPanelActionsClassKey = 'root' | 'spacing';

  declare export type ExpansionPanelActionsProps = StandardProps<
    HTMLDivAttributes,
    ExpansionPanelActionsClassKey,
    void
  >;

  declare export default React$ComponentType<ExpansionPanelActionsProps>;
}
declare module '@material-ui/core/ExpansionPanelActions/ExpansionPanelActions' {
  declare export * from '@material-ui/core/ExpansionPanelActions'
}

declare module '@material-ui/core/ExpansionPanelDetails' {
  import type { StandardProps } from '@material-ui/core';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';

  declare export type ExpansionPanelDetailsClassKey = 'root' | 'spacing';

  declare export type ExpansionPanelDetailsProps = StandardProps<
    HTMLDivAttributes,
    ExpansionPanelDetailsClassKey,
    void
  >;

  declare export default React$ComponentType<ExpansionPanelDetailsProps>;
}
declare module '@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails' {
  declare export * from '@material-ui/core/ExpansionPanelDetails'
}

declare module '@material-ui/core/Fade' {
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';
  import type { TransitionProps } from '@material-ui/core/transitions/transition';

  declare export type FadeProps = TransitionProps & {
    ref?: React$Ref<mixed>,
    theme?: Theme,
  };

  declare export default React$ComponentType<FadeProps>;
}
declare module '@material-ui/core/Fade/Fade' {
  declare export * from '@material-ui/core/Fade'
}

declare module '@material-ui/core/ButtonBase/TouchRipple' {
  import type { StandardProps } from '@material-ui/core';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';

  declare export type TouchRippleClassKey =
    | 'root'
    | 'ripple'
    | 'rippleVisible'
    | 'ripplePulsate'
    | 'child'
    | 'childLeaving'
    | 'childPulsate';

  declare export type TouchRippleProps = StandardProps<
    HTMLDivAttributes,
    TouchRippleClassKey,
    void
  > & { center?: boolean };

  declare export default React$ComponentType<TouchRippleProps>;
}
declare module '@material-ui/core/ButtonBase' {
  import type { TouchRippleProps } from '@material-ui/core/ButtonBase/TouchRipple';
  import type {
    OverrideProps,
    OverridableComponent,
    SimplifiedPropsOf,
    OverridableTypeMap,
  } from '@material-ui/core/OverridableComponent';

  declare export type ButtonBaseActions = {
    focusVisible(): void,
  };

  declare export type ButtonBaseClassKey = 'root' | 'disabled' | 'focusVisible';

  declare export type ButtonBaseOwnProps = {
    action?: (actions: ButtonBaseActions) => mixed,
    buttonRef?: React$Ref<any>,
    centerRipple?: boolean,
    disabled?: boolean,
    disableRipple?: boolean,
    disableTouchRipple?: boolean,
    focusRipple?: boolean,
    focusVisibleClassName?: string,
    onFocusVisible?: ({}) => mixed,
    TouchRippleProps?: $Shape<TouchRippleProps>,
    // TODO: remove when fix `ExtendButtonBase`
    href?: string,
  };

  /*
   TODO: need union of components
  ((props: { href: string } & OverrideProps<ExtendButtonBaseTypeMap<M>, 'a'>) => React$Node);
  */
  declare type ButtonBase = OverridableComponent<
    ButtonBaseOwnProps,
    'button',
    ButtonBaseClassKey
  >;

  declare export type ButtonBaseProps = ButtonBaseOwnProps;

  declare export default ButtonBase;
}
declare module '@material-ui/core/ButtonBase/ButtonBase' {
  declare export * from '@material-ui/core/ButtonBase'
}

declare module '@material-ui/core/BottomNavigationAction' {
  import type { StandardProps } from '@material-ui/core';
  import type { ButtonBaseProps } from '@material-ui/core/ButtonBase';

  declare export type BottomNavigationActionClassKey =
    | 'root'
    | 'selected'
    | 'iconOnly'
    | 'wrapper'
    | 'label';

  declare export type BottomNavigationActionProps = StandardProps<
    ButtonBaseProps,
    BottomNavigationActionClassKey,
    { onChange: any }
  > & {
    icon?: string | React$Element<any>,
    label?: React$Node,
    onChange?: (event: {}, value: mixed) => mixed,
    onClick?: ({}) => mixed,
    selected?: boolean,
    showLabel?: boolean,
    value?: mixed,
  };

  declare export default React$ComponentType<BottomNavigationActionProps>;
}
declare module '@material-ui/core/BottomNavigationAction/BottomNavigationAction' {
  declare export * from '@material-ui/core/BottomNavigationAction'
}

declare module '@material-ui/core/CardActionArea' {
  import type { StandardProps } from '@material-ui/core';
  import type { ButtonBaseProps } from '@material-ui/core/ButtonBase';

  declare export type CardActionAreaClassKey =
    | 'root'
    | 'focusVisible'
    | 'focusHighlight';

  declare export type CardActionAreaProps = StandardProps<
    ButtonBaseProps,
    CardActionAreaClassKey,
    void
  > & {
    focusVisibleClassName?: string,
  };

  declare export default React$ComponentType<CardActionAreaProps>;
}
declare module '@material-ui/core/CardActionArea/CardActionArea' {
  declare export * from '@material-ui/core/CardActionArea'
}

declare module '@material-ui/core/Typography' {
  import type { StandardProps, PropTypes$Alignment } from '@material-ui/core';
  import type { HTMLElementAttributes } from '@material-ui/core/@@dom';
  import type { ThemeStyle } from '@material-ui/core/styles/createTypography';

  declare export type TypographyClassKey =
    | 'root'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'srOnly'
    | 'alignLeft'
    | 'alignCenter'
    | 'alignRight'
    | 'alignJustify'
    | 'noWrap'
    | 'gutterBottom'
    | 'paragraph'
    | 'colorInherit'
    | 'colorSecondary'
    | 'colorTextSecondary'
    | 'colorError'
    | 'displayInline'
    | 'displayBlock';

  declare export type TypographyStyle = ThemeStyle | 'srOnly';

  declare export type TypographyProps = StandardProps<
    HTMLElementAttributes,
    TypographyClassKey,
    void
  > & {
    align?: PropTypes$Alignment,
    color?:
      | 'initial'
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'textPrimary'
      | 'textSecondary'
      | 'error',
    component?: React$ElementType,
    display?: 'initial' | 'block' | 'inline',
    gutterBottom?: boolean,
    noWrap?: boolean,
    paragraph?: boolean,
    variant?: TypographyStyle | 'inherit',
    variantMapping?: { [TypographyStyle]: string },
  };

  declare export default React$ComponentType<TypographyProps>;
}
declare module '@material-ui/core/Typography/Typography' {
  declare export * from '@material-ui/core/Typography'
}

declare module '@material-ui/core/CardHeader' {
  import type { StandardProps } from '@material-ui/core';
  import type { HTMLDivAttributes } from '@material-ui/core/@@dom';
  import type { TypographyProps } from '@material-ui/core/Typography';

  declare export type CardHeaderClassKey =
    | 'root'
    | 'avatar'
    | 'action'
    | 'content'
    | 'title'
    | 'subheader';

  declare export type CardHeaderProps = StandardProps<
    HTMLDivAttributes,
    CardHeaderClassKey,
    { title: any }
  > & {
    action?: React$Node,
    avatar?: React$Node,
    component?: React$ElementType,
    disableTypography?: boolean,
    subheader?: React$Node,
    subheaderTypographyProps?: $Shape<TypographyProps>,
    title?: React$Node,
    titleTypographyProps?: $Shape<TypographyProps>,
  };

  declare export default React$ComponentType<CardHeaderProps>;
}
declare module '@material-ui/core/CardHeader/CardHeader' {
  declare export * from '@material-ui/core/CardHeader'
}

declare module '@material-ui/core/CardMedia' {
  import type {
    OverridableComponent,
    SimplifiedPropsOf,
  } from '@material-ui/core/OverridableComponent';

  declare export type CardMediaClassKey = 'root' | 'media';

  declare type CardMedia = OverridableComponent<
    {
      image?: string,
      src?: string,
    },
    'div',
    CardMediaClassKey
  >;

  declare export type CardMediaProps = SimplifiedPropsOf<CardMedia>;

  declare export default CardMedia;
}
declare module '@material-ui/core/CardMedia/CardMedia' {
  declare export * from '@material-ui/core/CardMedia'
}

declare module '@material-ui/core/Chip' {
  import type { PropTypes$Color } from '@material-ui/core';
  import type {
    OverridableComponent,
    SimplifiedPropsOf,
  } from '@material-ui/core/OverridableComponent';

  declare export type ChipClassKey =
    | 'root'
    | 'colorPrimary'
    | 'colorSecondary'
    | 'clickable'
    | 'clickableColorPrimary'
    | 'clickableColorSecondary'
    | 'deletable'
    | 'deletableColorPrimary'
    | 'deletableColorSecondary'
    | 'outlined'
    | 'outlinedPrimary'
    | 'outlinedSecondary'
    | 'avatar'
    | 'avatarColorPrimary'
    | 'avatarColorSecondary'
    | 'avatarChildren'
    | 'icon'
    | 'iconColorPrimary'
    | 'iconColorSecondary'
    | 'label'
    | 'deleteIcon'
    | 'deleteIconColorPrimary'
    | 'deleteIconColorSecondary'
    | 'deleteIconOutlinedColorPrimary'
    | 'deleteIconOutlinedColorSecondary';

  declare type Chip = OverridableComponent<
    {
      avatar?: React$Element<any>,
      clickable?: boolean,
      color?: PropTypes$Color,
      deleteIcon?: React$Element<any>,
      icon?: React$Element<any>,
      label?: React$Node,
      onDelete?: mixed => mixed,
      variant?: 'default' | 'outlined',
    },
    'div',
    ChipClassKey
  >;

  declare export type ChipProps = SimplifiedPropsOf<Chip>;

  declare export default Chip;
}
declare module '@material-ui/core/Chip/Chip' {
  declare export * from '@material-ui/core/Chip'
}

declare module '@material-ui/core/Collapse' {
  import type { StandardProps } from '@material-ui/core';
  import type { Theme } from '@material-ui/core/styles/createMuiTheme';
  import type { TransitionProps } from '@material-ui/core/transitions/transition';

  declare export type CollapseClassKey =
    | 'container'
    | 'entered'
    | 'wrapper'
    | 'wrapperInner';
  declare export type CollapseProps = StandardProps<
    TransitionProps,
    CollapseClassKey,
    { timeout: any }
  > & {
    children?: React$Node,
    component?: React$ElementType,
    collapsedHeight?: string,
    theme?: Theme,
    timeout?: $ElementType<TransitionProps, 'timeout'> | 'auto',
  };

  declare export default React$ComponentType<CollapseProps>;
}
declare module '@material-ui/core/Collapse/Collapse' {
  declare export * from '@material-ui/core/Collapse'
}

declare module '@material-ui/core/Portal' {
  declare export type PortalProps<Container> = {|
    children: React$Element<any>,
    container?: React$ElementRef<Container> | null,
    disablePortal?: boolean,
    onRendered?: () => mixed,
  |};

  declare export default class Portal<
    Container: React$ElementType
  > extends React$Component<PortalProps<Container>> {}
}
declare module '@material-ui/core/Portal/Portal' {
  declare export * from '@material-ui/core/Portal'
}

///////////////////////////////////////////////////////////////////////////////

declare module '@material-ui/core' {
  import type {
    CSSProperties,
    StyledComponentProps,
  } from '@material-ui/core/styles/withStyles';
  // @TODO
  declare export type PaletteType = any;

  declare export type PropTypes$Alignment =
    | 'inherit'
    | 'left'
    | 'center'
    | 'right'
    | 'justify';
  declare export type PropTypes$Color =
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'default';
  declare export type PropTypes$Margin = 'none' | 'dense' | 'normal';

  declare export type StandardProps<
    BaseProps: {},
    ClassesKeys,
    Removals: ?{}
  > = $Diff<$Diff<BaseProps, { classes: any }>, Removals> &
    StyledComponentProps<ClassesKeys> & {
      className?: string,
      style?: CSSProperties,
    };

  declare export type Color = {|
    [50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900]: string,
    A100: string,
    A200: string,
    A400: string,
    A700: string,
  |};

  declare export { default as Paper } from '@material-ui/core/Paper';
  declare export { default as AppBar } from '@material-ui/core/AppBar';
  declare export { default as Avatar } from '@material-ui/core/Avatar';
  declare export { default as Backdrop } from '@material-ui/core/Backdrop';
  declare export { default as Badge } from '@material-ui/core/Badge';
  declare export { default as Box } from '@material-ui/core/Box';
  declare export { default as Card } from '@material-ui/core/Card';
  declare export { default as Container } from '@material-ui/core/Container';
  declare export { default as Fade } from '@material-ui/core/Fade';
  declare export { default as ButtonBase } from '@material-ui/core/ButtonBase';
  declare export { default as Typography } from '@material-ui/core/Typography';
  declare export { default as CardHeader } from '@material-ui/core/CardHeader';
  declare export { default as CardMedia } from '@material-ui/core/CardMedia';
  declare export { default as Chip } from '@material-ui/core/Chip';
  declare export { default as Collapse } from '@material-ui/core/Collapse';
  declare export { default as Portal } from '@material-ui/core/Portal';
  declare export {
    default as CardActionArea,
  } from '@material-ui/core/CardActionArea';

  declare export {
    default as BottomNavigationAction,
  } from '@material-ui/core/BottomNavigationAction';

  declare export {
    default as ExpansionPanelDetails,
  } from '@material-ui/core/ExpansionPanelDetails';
  declare export {
    default as ExpansionPanelActions,
  } from '@material-ui/core/ExpansionPanelActions';
  declare export {
    default as DialogTitle,
  } from '@material-ui/core/DialogTitle';
  declare export {
    default as DialogContent,
  } from '@material-ui/core/DialogContent';
  declare export {
    default as DialogActions,
  } from '@material-ui/core/DialogActions';
  declare export {
    default as CssBaseline,
  } from '@material-ui/core/CssBaseline';
  declare export {
    default as ClickAwayListener,
  } from '@material-ui/core/ClickAwayListener';

  declare export {
    default as CircularProgress,
  } from '@material-ui/core/CircularProgress';
  declare export {
    default as CardContent,
  } from '@material-ui/core/CardContent';
  declare export {
    default as CardActions,
  } from '@material-ui/core/CardActions';
  declare export {
    default as Breadcrumbs,
  } from '@material-ui/core/Breadcrumbs';
  declare export {
    default as BottomNavigation,
  } from '@material-ui/core/BottomNavigation';
}
