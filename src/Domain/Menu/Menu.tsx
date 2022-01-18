import { type FunctionComponent } from "react";
import Card from "../Card/Card";

export type Menu = FunctionComponent<{
  cards: Card[];
}>;
