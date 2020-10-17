import { ReactNode, ComponentType } from "react";

export default interface Card {
  background: ComponentType<{ width: number; height: number }>;

  title: string;
  description: ReactNode;
  link: string;
}
