import { NextPageContext } from "next";
import ErrorPage, { ErrorProps } from "next/error";
import Bugsnag from "../Services/Bugsnag/Bugsnag.service";

export const getInitialProps = (ctx: NextPageContext) => {
  if (ctx.err) {
    Bugsnag.notify(ctx.err);
  }
  return ErrorPage.getInitialProps(ctx);
};

const Page = (props: ErrorProps) => <ErrorPage statusCode={props.statusCode} />;

export default Page;
