// @flow

declare module '@reach/router' {
  declare type DomLocation = typeof location & {| state?: any |};

  declare export type NavigateFn = (
    to: string,
    options?: NavigateOptions<{...}>
  ) => void;

  declare export var navigate: NavigateFn;

  declare export type HistoryListener = () => void;

  declare export type HistoryUnlistener = () => void;

  declare export interface History {
    location: string;
    transitioning: boolean;
    listen: (listener: HistoryListener) => HistoryUnlistener;
    navigate: NavigateFn;
  }

  declare export interface HistorySource {
    location: DomLocation;
    addEventListener(name: string, listener: (event: Event) => void): void;
    removeEventListener(name: string, listener: (event: Event) => void): void;

    history: {
      state: any,
      pushState(state: any, title: string, uri: string): void,
      replaceState(state: any, title: string, uri: string): void,
      ...
    };
  }

  declare export interface NavigateOptions<State> {
    state?: State;
    replace?: boolean;
  }

  declare type CommonRouteProps = {|
    children?: React$Node,
    location?: DomLocation,
    navigate?: NavigateFn,
    uri?: string,
  |};

  declare export type DefaultRouteProps = {
    ...CommonRouteProps,
    default: boolean,
    ...
  };

  declare export type RouteProps = {
    ...CommonRouteProps,
    path: string,
    ...
  };

  declare export type LocationProviderRenderFn = (context: {|
    location: DomLocation,
    navigate: NavigateFn,
  |}) => React$Node;

  declare export var Router: React$StatelessFunctionalComponent<{|
    children?: React$Node,
    basepath?: string,
    primary?: boolean,
    location?: DomLocation,
  |}>;

  declare export type LinkProps<State> = {
    ...React$ElementProps<'a'>,
    children: React$Node,
    innerRef?: React$Ref<HTMLAnchorElement>,
    getProps?: (props: {
      isCurrent: boolean,
      isPartiallyCurrent: boolean,
      href: string,
      location: DomLocation,
      ...
    }) => {...},
    state?: State,
    to?: string,
    replace?: boolean,
    // remove href, as it's ignored by the router
    href?: empty,
    ...
  };

  declare export var Link: { <State>(props: LinkProps<State>): React$Node, ... };

  declare export var Redirect: React$StatelessFunctionalComponent<{|
    from?: string,
    to: string,
    noThrow?: boolean,
    state?: any
  |}>;

  declare export type MatchProps<Params> = {|
    path: string,
    children: (props: {|
      match: null | {| uri: string, path: string, ...$Exact<Params> |},
      location: DomLocation,
      navigate: NavigateFn,
    |}) => React$Node,
  |};

  declare export var Match: { <Params>(props: MatchProps<Params>): React$Node, ... };

  declare export var Location: React$StatelessFunctionalComponent<{|
    children: LocationProviderRenderFn,
  |}>;

  declare export class LocationProvider extends React$Component<{|
    history: History,
    children?: React$Node | LocationProviderRenderFn,
  |}> {}

  declare export var ServerLocation: React$StatelessFunctionalComponent<{|
    url: string,
    children?: React$Node,
  |}>;

  declare export function createHistory(source: HistorySource): History;

  declare export function createMemorySource(
    initialPath: string
  ): HistorySource;

  declare export function isRedirect(error: any): $Exact<{ uri: string, ... }>;

  declare export function redirectTo(uri: string): void;
}
