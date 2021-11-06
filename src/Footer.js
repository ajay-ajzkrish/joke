import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="rodape" id="rodape">
        <ul className="redes">
          <li data-text="Linkedin">
            <a
              target="blanck"
              className="linkedin"
              href="https://www.linkedin.com/in/ajzkrish/"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li data-text="Github">
            <a
              target="blanck"
              className="github"
              href="https://github.com/ajay-ajzkrish"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js"></script>
    </>
  );
};

export default Footer;
