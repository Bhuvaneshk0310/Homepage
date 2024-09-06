import { Navbar, Nav, Container } from "react-bootstrap";

export const NavBar = () => {
  return (
    <>
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img src={`data:image/png;base64,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`} alt="Logo" />
          <span class="navbars  navbar-link " href="/Home">Sweets</span>
        
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={" navbar-link"}>
                Home
              </Nav.Link>
              <Nav.Link href="/" className={" navbar-link"}>
                About
              </Nav.Link>
              <Nav.Link href="/" className={"navbar-link"}>
                Contact
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={`https://i.imgur.com/s3noPaC.png`} alt="" />
                </a>
                <a href="#">
                  <img src={`https://i.imgur.com/rxgJBL4.png`} alt="" />
                </a>
                <a href="#">
                  <img src={`https://i.imgur.com/cE0RPru.png`} alt="" />
                </a>
              </div>
              <a href="#">
                <button className="vvd">
                  <span>Sign in</span>
                </button>
              </a>
              <a href="#">
                <button className="vvd">
                  <span>Sign up</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};