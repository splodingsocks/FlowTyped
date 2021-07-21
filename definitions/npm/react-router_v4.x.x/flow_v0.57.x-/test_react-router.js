// @flow
import React from "react";
import {
  StaticRouter,
  MemoryRouter,
  Router,
  Prompt,
  Redirect,
  Route,
  Switch,
  withRouter,
  matchPath
} from "react-router";
import type {
  Location,
  Match,
  RouterHistory
} from "react-router";

// Location
var locationOK: Location = {
  pathname: "/path",
  search: "?search",
  hash: "#hash",
  state: null,
  key: "key"
};

// $ExpectError
var locationError: Location = {};

// StaticRouter
<StaticRouter context={{}}>
  <div />
</StaticRouter>;
<StaticRouter location="/" context={{}} basename="/foo/">
  <div />
</StaticRouter>;

// $ExpectError
<StaticRouter />;

// MemoryRouter
<MemoryRouter>
  <div />
</MemoryRouter>;
<MemoryRouter
  initialEntries={["/one", "/two", { pathname: "/three" }]}
  initialIndex={1}
  getUserConfirmation={(
    message: string,
    callback: (confirmed: boolean) => void
  ): void => {}}
  keyLength={3}
>
  <div />
</MemoryRouter>;

// $ExpectError
<MemoryRouter initialEntries={""} />;

declare var history: RouterHistory;
<Router history={history}>
  <div />
</Router>;

// $ExpectError
<Router>
  <div />
</Router>;

// Prompt
<Prompt message="ok?" when={true} />;
<Prompt message={location => "ok?"} />;
<Prompt message={location => true} />;

// $ExpectError
<Prompt />;

// Redirect
<Redirect to="/foo" push />;
<Redirect
  to={{
    pathname: "/login",
    search: "?utm=foo",
    state: { referrer: "/current" }
  }}
/>;

// $ExpectError
<Redirect />;

// Route
var User = () => <div />;
<Route path="/user/:username" component={User} exact={true} strict={true} />;
<Route
  path="/home"
  render={({ match }) =>
    <div>
      Home {match.path}
    </div>}
/>;
<Route
  path="/"
  children={({ match }) => <div className={match ? "active" : ""} />}
/>;
<Route>
  <div>children</div>
</Route>;

// $ExpectError
<Route path="/user/:username" component={<User />} />;

// Switch
<Switch>
  <Route />
  <Route />
</Switch>;

// withRouter
type FooProps = {|
  ...ContextRouter,
  name: string
|};
const Foo = ({ location, name }: FooProps) =>
  <div>
    {location.pathname} {name}
  </div>;
const FooWithRouter = withRouter(Foo);
<FooWithRouter name="name" />;

class Bar extends React.Component<FooProps> {}
const BarWithRouter = withRouter(Bar);
<BarWithRouter name="name" />;

// $ExpectError
withRouter("nope");

// const FooWithRouterError = withRouter(Foo);
// <FooWithRouterError name={3} />;

// $ExpectError
const BarWithRouterError = withRouter(Bar);
<BarWithRouterError name={3} />;

const IncorrectHistoryUsage = ({ history, name }: FooProps) => {
  // Wrong arguments here
  // $ExpectError
  history.push(["bla"]);
  return (
    <div>
      {name}
    </div>
  );
};

// matchPath
const match: null | Match = matchPath("/the/pathname", {
  path: "/the/:dynamicId",
  exact: true,
  strict: false
});
const match2: null | Match = matchPath("/the/pathname", "/the/:dynamicId");
const match3: null | Match = matchPath("/the/pathname");

// $ExpectError
matchPath();
// $ExpectError
const matchError: string = matchPath("/the/pathname", "the/:dynamicId");


const Unrouted: React$ComponentType<{|
  history: RouterHistory,
  location: Location,
  match: Match,

  someProp: string
|}> = () => <span />;

const Routed1: React$ComponentType<{| someProp: string |}> = withRouter(
  Unrouted
);

// $ExpectError: This error bubbles up from the assignment in Routed2.
const Unrouted2: React$ComponentType<{|
  history: RouterHistory,
  location: Location,
  match: Match,
  someProp: string
|}> = () => <span />;

const Routed2: React$ComponentType<{| someProp2: string |}> = withRouter(
  Unrouted2
);


// take only some of tte props.


const Unrouted3: React$ComponentType<{|
  history: RouterHistory,
  location: Location,
  match: Match,

  someProp: string
|}> = () => <span />;

const Routed3: React$ComponentType<{| someProp: string |}> = withRouter(
  Unrouted3
);


// $ExpectError: This error bubbles up from the assignment in Routed2.
const Unrouted4: React$ComponentType<{|
  history: RouterHistory,
  match: Match,
  someProp: string
|}> = () => <span />;

const Routed4: React$ComponentType<{| someProp2: string |}> = withRouter(
  Unrouted4
);
