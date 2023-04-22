import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBus() {
  const [buses, setBuses] = useState([]);
  useEffect(() => {
    fetch("https://62dacea8e56f6d82a76a25de.mockapi.io/Bus")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBuses(res);
      });
  }, []);

  const foramtedBus = buses.map((bus) => {
    return (
      <>
        <div class="card col-md-3 my-4" style={{ border: 0 }}>
          <div class="shadow p-3 mb-5 bg-body rounded ">
            <img src={bus.BusImage} class="card-img-top" alt="..." />

            <div class="card-body">
              <h5 class="card-title" align="center">
                <i>Bus Name : {bus.BusName}</i>
              </h5>
              <h6
                class="card-title"
                style={{ color: "red", fontSize: "12px" }}
                align="center"
              >
                Express
              </h6>
              <hr />
              <h6
                class="card-title"
                style={{ fontSize: "12px" }}
                align="center"
              >
                Driver : {bus.BusDriverName}
              </h6>
              <hr />

              <div class="container">
                <div class="row">
                  <div
                    class="col-6"
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    From
                  </div>
                  <div
                    class="col-6"
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    To
                  </div>
                </div>

                <div class="row">
                  <div
                    class="col-6"
                    style={{
                      fontSize: "12px",
                      background: "lightblue",
                      color: "blue",
                      fontWeight: "700",

                      alignContent: "center",
                      textAlign: "center"
                    }}
                  >
                    {bus.From}
                  </div>
                  <div
                    class="col-6"
                    style={{
                      fontSize: "12px",
                      background: "silver",
                      fontWeight: "700",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    {bus.To}
                  </div>
                </div>
                <br />
                <Link
                  to={"../bus/" + bus.id}
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <button type="button" class="btn btn-primary">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div class="row"> {foramtedBus} </div>
    </>
  );
}

export default AllBus;
