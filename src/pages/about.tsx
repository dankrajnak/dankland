import MenuLayout from "../View/Layout/MenuLayout";
import SEO from "../View/Utility/seo";

const About = () => (
  <MenuLayout color="black">
    <SEO title="About" />
    <div className="container">
      <div className="content">
        <h4>This is just stuff I like making.</h4>
        <p>
          My name&apos;s Daniel. This is a place that I put stuff I make. If you
          like my work, feel free to reach out. My email is the first three
          letters of my first name plus a &quot;.&quot; plus my last name
          (krajnak). It&apos;s the google kind. Suck on that, email-harvesting
          bots
        </p>
      </div>
    </div>
    <style jsx>{`
      .container {
        width: 100%;
        height: 100%;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .content {
        width: 50%;
        line-height: 1.8rem;
      }
    `}</style>
  </MenuLayout>
);

export default About;
