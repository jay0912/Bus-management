import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BusAdd() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  const label = {
    color: "white",
    marginBottom: "6px",
    display: "block"
  };

  const input = {
    color: "white",
    width: "100%",
    border: "none",
    background: "transparent",
    borderBottom: "2px solid #00FFFF", //cyan
    outline: "none",
    paddingBottom: "5px"
  };

  const row = {
    display: "flex",
    justifyContent: "space-between",
    flexBasis: "45%",
    marginBottom: "20px"
  };

  const block = {
    flexBasis: "50%",
    color: "black",
    background: "#001A46", //navy blue
    padding: "20px 40px",
    border: "20px solid #4C5E87"
  };

  const box = {
    background: "#4C5E87", //grey
    display: "flex",
    justifyContent: "center"
  };
  // const row = {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   flexBasis: "45%",
  //   marginBottom: "20px"
  // };

  useEffect(() => {
    if (params.id > 0) {
      fetch("https://62dacea8e56f6d82a76a25de.mockapi.io/Bus/" + params.id, {
        method: "GET"
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  return (
    <>
      <div style={{ background: "#4C5E87" }}>
        <section class="mx-auto">
          <div class="container contact mx-auto" style={{ width: "70%" }}>
            <div class="contact-box" style={box}>
              <div class="contact-center" style={block}>
                <form>
                  <div class="input-row" style={row}>
                    <div class="input-group">
                      <label style={label}>Bus Name</label>
                      <input
                        type="text"
                        placeholder="Enter Bus Name"
                        style={input}
                        value={data.BusName}
                        onChange={(e) => {
                          setData({ ...data, BusName: e.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div class="input-row" style={row}>
                    <div class="input-group">
                      <label style={label}>RTO No.</label>
                      <input
                        type="text"
                        placeholder="Enter Bus RTO Number"
                        style={input}
                        value={data.BusRTONumber}
                        onChange={(e) => {
                          setData({ ...data, BusRTONumber: e.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div class="input-row" style={row}>
                    <div class="input-group">
                      <label style={label}>Driver Name</label>
                      <input
                        type="text"
                        placeholder="Enter Bus Driver Name"
                        style={input}
                        value={data.BusDriverName}
                        onChange={(e) => {
                          setData({ ...data, BusDriverName: e.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div class="input-row" style={row}>
                    <div class="input-group">
                      <label style={label}>Average</label>
                      <input
                        type="text"
                        placeholder="Enter Bus Average"
                        style={input}
                        value={data.BusAverage}
                        onChange={(e) => {
                          setData({ ...data, BusAverage: e.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div class="input-row" style={row}>
                    <div class="input-group">
                      <label style={label}>No. Of KM</label>
                      <input
                        type="text"
                        placeholder="Enter Bus No Of KMs"
                        style={input}
                        value={data.BusNoOfKM}
                        onChange={(e) => {
                          setData({ ...data, BusNoOfKM: e.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div class="input-row" style={row}>
                    <div class="input-group">
                      <label style={label}>Image</label>
                      <input
                        type="text"
                        placeholder="Enter Image URL"
                        style={input}
                        value={data.BusImage}
                        onChange={(e) => {
                          setData({ ...data, BusImage: e.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div class="input-row" style={row}>
                    <div class="input-group">
                      <label style={label}>From</label>
                      <input
                        type="text"
                        placeholder="Enter From"
                        style={input}
                        value={data.From}
                        onChange={(e) => {
                          setData({ ...data, From: e.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div class="input-row" style={row}>
                    <div class="input-group">
                      <label style={label}>To</label>
                      <input
                        type="text"
                        placeholder="Enter To"
                        style={input}
                        value={data.To}
                        onChange={(e) => {
                          setData({ ...data, To: e.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div class="input-row" style={row}>
                    <div class="input-group">
                      <label style={label}>From Time</label>
                      <input
                        type="text"
                        placeholder="Enter From Time"
                        style={input}
                        value={data.FromTime}
                        onChange={(e) => {
                          setData({ ...data, FromTime: e.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div class="input-row" style={row}>
                    <div class="input-group">
                      <label style={label}>To Time</label>
                      <input
                        type="text"
                        placeholder="Enter To Time"
                        style={input}
                        value={data.ToTime}
                        onChange={(e) => {
                          setData({ ...data, ToTime: e.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-outline-info"
                    onClick={() => {
                      if (params.id > 0) {
                        fetch(
                          "https://62dacea8e56f6d82a76a25de.mockapi.io/Bus/" +
                            params.id,
                          {
                            method: "PUT",
                            body: JSON.stringify(data),
                            headers: {
                              "Content-Type": "application/json"
                            }
                          }
                        ).then(() => {
                          navigate("/allBuses");
                        });
                      } else {
                        fetch(
                          "https://62dacea8e56f6d82a76a25de.mockapi.io/Bus/",
                          {
                            method: "POST",
                            body: JSON.stringify(data),
                            headers: {
                              "Content-Type": "application/json"
                            }
                          }
                        ).then(() => {
                          navigate("/allBuses");
                        });
                      }
                    }}
                  >
                    {params.id > 0 && "Edit  "}
                    {!(params.id > 0) && "Add  "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
