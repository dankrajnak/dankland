import * as React from "react";
import Card from "../Card/Card";

type PropsPassedThroughLocationState = {
  prevPath: string | null;
};
export type MenuRouteProps = any;

export type Menu = React.FunctionComponent<{
  routeProps: MenuRouteProps;
  cards: Card[];
}>;
