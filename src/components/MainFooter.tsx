import Container from "react-bootstrap/Container";

//I'm one with the Force and the Force is with me

const MainFooter = () => {
  return (
    <Container className="fixed-bottom">
      <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mt-auto">
        <p className="col-md-4 mb-0 text-muted">© 2022 Vitor Nascimento</p>

        <div className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-muted">
          I'm one with the Force and the Force is with me
        </div>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a
              href="https://github.com/ganvector"
              className="nav-link px-2 text-muted"
              target="_blank"
            >
              <img
                width="32"
                height="32"
                src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
                alt=""
                title=""
                className="loaded"
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/vitorgnascimento/"
              className="nav-link px-2 text-muted"
              target="_blank"
            >
              <img
                width="32"
                height="32"
                src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                alt=""
                title=""
                className="loaded"
              />
            </a>
          </li>
        </ul>
      </footer>
    </Container>
  );
};

export default MainFooter;
