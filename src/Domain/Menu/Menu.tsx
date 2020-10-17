import { FunctionComponent } from "react";
import Card from "../Card/Card";

export type MenuRouteProps = any;

export type Menu = FunctionComponent<{
  routeProps: MenuRouteProps;
  cards: Card[];
}>;
