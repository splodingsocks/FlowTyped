import React from "react";
import {
  NativeRouter,
  Link,
  DeepLinking,
  AndroidBackButton,
  matchPath,
  withRouter
} from "react-router-native";
import type { ContextRouter, Match } from "react-router-native";

// NativeRouter
<NativeRouter>
  <div />
</NativeRouter>;
<NativeRouter getUserConfirmation={(message, callback) => {}} keyLength={3}>
  <div />
</NativeRouter>;

// $ExpectError
<NativeRouter keyLength="five" />;

// Link
<Link to="/about">About</Link>;
<Link replace to="/about">
  About
</Link>;
<Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
>
  About
</Link>;

// $ExpectError
<Link to={3} />;

// DeepLinking
<DeepLinking />;

// AndroidBackButton
<AndroidBackButton />;

// matchPath
const match: null | Match = matchPath("/the/pathname", {
  path: "/the/:dynamicId",
  exact: true,
  strict: false
});
const match2: null | Match = matchPath("/the/pathname", {
  path: "/the/:dynamicId"
});
const match3: null | Match = matchPath("/the/pathname");

// $ExpectError
matchPath();
// $ExpectError
const matchError: string = matchPath("/the/pathname", {
  path: "the/:dynamicId"
});

const Unrouted: React$ComponentType<{|
  ...ContextRouter,
  someProp: string
|}> = () => <span />;

const Routed1: React$ComponentType<{| someProp: string |}> = withRouter(
  Unrouted
);

// $ExpectError: This error bubbles up from the assignment in Routed2.
const Unrouted2: React$ComponentType<{|
  ...ContextRouter,
  someProp: string
|}> = () => <span />;

const Routed2: React$ComponentType<{| someProp2: string |}> = withRouter(
  Unrouted2
);
