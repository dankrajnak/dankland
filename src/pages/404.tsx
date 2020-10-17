import SEO from "../View/Utility/seo";
import Link from "next/link";
import Layout from "../View/Layout/Layout";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div className="container">
      <div>
        <h1>
          404 <span style={{ fontWeight: "lighter" }}>| NOT FOUND</span>
        </h1>
        <p>One of us made a mistake.</p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href={"/"}>
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </div>
    <style jsx>
      {`
        .container {
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        p {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}
    </style>
  </Layout>
);

export default NotFoundPage;
