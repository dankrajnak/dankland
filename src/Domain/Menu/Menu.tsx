import * as React from "react";
import Card from "../Card/Card";

export type MenuRouteProps = any;

export type Menu = React.FunctionComponent<{
  routeProps: MenuRouteProps;
  cards: Card[];
}>;
