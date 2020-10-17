import { ReactNode, FunctionComponent } from "react";

export default interface Card {
  background: FunctionComponent<{ width: number; height: number }>;
  title: string;
  description: ReactNode;
  link: string;
}
