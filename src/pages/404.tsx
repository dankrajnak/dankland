import SEO from "../View/Utility/seo";
import Link from "next/link";
import Layout from "../View/Layout/Layout";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div className="fixed w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" font-sansDisplay text-2xl">
          404 <span className="font-light">| NOT FOUND</span>
        </h1>
        <div className="mt-3">
          <p className="font-light text-sm font-sansDisplay">
            One of us made a mistake.
          </p>
          <p className="flex items-center justify-center mt-8">
            <Link href={"/"}>
              <a className="hover:underline font-bold">Homepage</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
