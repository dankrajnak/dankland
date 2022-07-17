//// <reference types="styled-jsx" />

// The above should fix issues with styled-jsx typing, but it doesn't.
// keeping it to reference with the actual solution below.

import "react";

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
