/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/profile-pic.png")}
            ></img>
            <h2>Rhuan M. E. Honório</h2>
            <h4>Psicólogo – CRP 13/11057</h4>
            <h4>
              Espaço para dar a conhecer a minha atividade
              profissional.
            </h4>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
