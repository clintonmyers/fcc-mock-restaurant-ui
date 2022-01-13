import "./Footer.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="restaurant-footer">
      <div className="icons">
        <div className="twittericon">
          <a
            href="https://github.com/clintonmyers/fcc-mock-restaurant-ui"
            title="Github"
          >
            {" "}
            <i className="bi bi-github"></i>
          </a>
        </div>
        <a
          href="https://www.linkedin.com/school/free-code-camp/about/"
          title="LinkedIn"
        >
          {" "}
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <h4>ⓒ FCC Brunch 'N Code</h4>
    </footer>
  );
};

export default Footer;
