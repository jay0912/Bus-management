import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BusDetail() {
  let params = useParams();
  const navigate = useNavigate();

  const [bus, setBus] = useState({});

  useEffect(() => {
    fetch("https://62dacea8e56f6d82a76a25de.mockapi.io/Bus/" + params.id, {
      method: "GET"
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBus(res);
      });
  }, []);

  return (
    <>
      <div class="container mt-4 mb-5" style={{ padding: "10px" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ textDecorationLine: "underline", color: "soild black" }}>
            Details
          </h2>
          <p>Must visit our website. Have a nice day!</p>
        </div>
        <div class="row">
          <div
            class="column"
            style={{
              float: "left",
              width: "50%",
              marginTop: "6px",
              padding: "20px",
              background: "#4C5E87"
            }}
          >
            <img src={bus.BusImage} alt="..." style={{ width: "100%" }} />
          </div>
          <div
            class="column"
            style={{
              float: "left",
              width: "50%",
              marginTop: "6px",
              padding: "20px",
              background: "#001A46",
              color: "white"
            }}
          >
            <table align="center" style={{ marginTop: "5px" }}>
              <tr>
                <td style={{ paddingBottom: "20px" }}>Bus Name</td>
                <td style={{ paddingBottom: "20px", paddingLeft: "45px" }}>
                  :
                </td>
                <td style={{ paddingBottom: "20px" }}>{bus.BusName}</td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "20px" }}>RTO No.</td>
                <td style={{ paddingBottom: "20px", paddingLeft: "45px" }}>
                  :
                </td>
                <td style={{ paddingBottom: "20px" }}>{bus.BusRTONumber}</td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "20px" }}>Driver</td>
                <td style={{ paddingBottom: "20px", paddingLeft: "45px" }}>
                  :
                </td>
                <td style={{ paddingBottom: "20px" }}>{bus.BusDriverName}</td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "20px" }}>Average</td>
                <td style={{ paddingBottom: "20px", paddingLeft: "45px" }}>
                  :
                </td>
                <td style={{ paddingBottom: "20px" }}>{bus.BusAverage}</td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "20px" }}>No.of KMs</td>
                <td style={{ paddingBottom: "20px", paddingLeft: "45px" }}>
                  :
                </td>
                <td style={{ paddingBottom: "20px" }}>{bus.BusNoOfKM}</td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "20px" }}>From</td>
                <td style={{ paddingBottom: "20px", paddingLeft: "45px" }}>
                  :
                </td>
                <td style={{ paddingBottom: "20px" }}>{bus.From}</td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "20px" }}>To</td>
                <td style={{ paddingBottom: "20px", paddingLeft: "45px" }}>
                  :
                </td>
                <td style={{ paddingBottom: "20px" }}>{bus.To}</td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "20px" }}>From Time</td>
                <td style={{ paddingBottom: "20px", paddingLeft: "45px" }}>
                  :
                </td>
                <td style={{ paddingBottom: "20px" }}>{bus.FromTime}</td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "20px" }}>To Time</td>
                <td style={{ paddingBottom: "20px", paddingLeft: "45px" }}>
                  :
                </td>
                <td style={{ paddingBottom: "20px" }}>{bus.ToTime}</td>
              </tr>
              <tr>
                <td align="left">
                  <button
                    type="button"
                    class="btn btn-outline-info"
                    style={{
                      marginLeft: "",
                      marginTop: "10px"
                    }}
                    onClick={() => {
                      fetch(
                        "https://62dacea8e56f6d82a76a25de.mockapi.io/Bus/" +
                          params.id,
                        {
                          method: "DELETE"
                        }
                      ).then((res) => {
                        navigate("/allBuses");
                      });
                    }}
                  >
                    DELETE
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-info"
                    style={{ marginLeft: "40px", marginTop: "10px" }}
                    onClick={() => {
                      navigate("/bus/edit/" + params.id);
                    }}
                  >
                    EDIT
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default BusDetail;
