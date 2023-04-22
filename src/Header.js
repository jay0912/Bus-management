import { Link } from "react-router-dom";

function Header() {
  const handleMouseEnter = (e) => {
    e.target.style.color = "#00FFFF";
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = "white";
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg " style={{ background: "#1c2331" }}>
        <div class="container-fluid">
          <h2 style={{ marginLeft: "5px", marginTop: "5px" }}>
            <span style={{ color: "#00FFFF" }}>DJ</span>
            <span style={{ color: "#F0FFFF" }}>
              <h6>Travel</h6>
            </span>
          </h2>
          <img
            style={{ marginLeft: "5px" }}
            width="10%"
            src="https://www.freepnglogos.com/uploads/bus-png/old-bus-png-icons-and-png-backgrounds-20.png"
            alt="..."
          />{" "}
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav me-auto mb-2 "
              style={{ marginLeft: "720px", marginTop: "30px" }}
            >
              <li class="nav-item">
                <Link
                  to="./"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: "white", textDecoration: "0" }}
                >
                  Home
                </Link>{" "}
                &nbsp; &nbsp;&nbsp;
              </li>
              <li class="nav-item">
                <Link
                  to="./allBuses"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: "white", textDecoration: "0" }}
                >
                  All Buses
                </Link>{" "}
                &nbsp; &nbsp;&nbsp;
              </li>
              <li class="nav-item">
                <Link
                  to="./bus/id"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: "white", textDecoration: "0" }}
                >
                  Details
                </Link>{" "}
                &nbsp;&nbsp;&nbsp;
              </li>
              <li class="nav-item">
                <Link
                  to="./bus/add"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: "white", textDecoration: "0" }}
                >
                  Add Bus
                </Link>{" "}
                &nbsp;&nbsp;&nbsp;
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-info" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
