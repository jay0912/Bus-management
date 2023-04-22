function Home() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              height="750vh"
              //src="https://gtu.darshan.ac.in/Upload/Slider/Slide_1.jpg?V=1"
              src="http://trumpwallpapers.com/wp-content/uploads/Bus-Wallpaper-01-1600x900-1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              height="750vh"
              src="http://trumpwallpapers.com/wp-content/uploads/Bus-Wallpaper-02-1500x905-1.jpg"
              //src="https://www.darshan.ac.in/U01/Page/59---11-06-2021-10-09-57.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              height="750vh"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/953680/ss_aff2526e69523ce3cac7cc995fa2debdf13d50fd.1920x1080.jpg?t=1603360212"
              //src="https://www.darshan.ac.in/U01/Page/59---11-06-2021-10-10-11.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* ---------------cards---------------- */}
      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col-lg-4">
            <div
              class="card"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSdv8Pt53CQgvuOEqErhVWEOdKufmCz04Ew&usqp=CAU"
                height="220px"
                alt="..."
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Guarantee</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam eos
                  quo tempore iusto dolore modi dolorum in pariatur. Incidunt
                  repellendus praesentium quae!
                </p>
                <button class="btn btn-outline-dark" type="submit">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 ">
            <div
              class="card"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
              }}
            >
              <img
                src="https://i.pinimg.com/originals/fd/54/0e/fd540e6ee63323a4aa69b0badb7ed49a.png"
                height="220px"
                alt="..."
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Agent</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam eos
                  quo tempore iusto dolore modi dolorum in pariatur. Incidunt
                  repellendus praesentium quae!
                </p>
                <button class="btn btn-outline-dark" type="submit">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="card"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
              }}
            >
              <img
                src="https://www.justrechargeit.com/newsletters/images_bus_launches/launches_bus_banner.jpg"
                height="220px"
                alt="..."
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Offers</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam eos
                  quo tempore iusto dolore modi dolorum in pariatur. Incidunt
                  repellendus praesentium quae!
                </p>
                <button class="btn btn-outline-dark" type="submit">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------booking----------------- */}
      <div>
        <h2
          class="text-center mb-4"
          style={{
            textDecorationLine: "underline",
            textDecorationColor: " #0039e6"
          }}
        >
          How to Book a Bus online ?
        </h2>
        <div class="container">
          <p style={{ paddingBottom: "15px", color: "black" }}>
            <h5>Bus booking:</h5>
            <ul>
              <li>
                Enter the Source and Destination locations in the “From” and
                “To” tab respectively.
              </li>
              <li>
                Enter the “Date of Journey” and hit the “Search” button to check
                available bus tickets online.
              </li>
              <li>
                Select a bus of your choice from the list of buses that are
                displayed.
              </li>
              <li>
                Select a seat, boarding, and dropping points and hit “Proceed to
                Book” for final bus booking.
              </li>
              <li>
                Fill in the “Passenger Information” and “Contact Information”.
              </li>
              <li>
                You can even choose to insure your bus booking so that you will
                be covered in case of an accident or loss of luggage and then
                click “Proceed to Pay”.
              </li>
              <li>
                Enter the offer code (if applicable), select your mode of
                payment and complete the payment procedure for bus tickets
                online.
              </li>
              <li>
                Once this is done, you will receive an M-ticket on your mobile
                and an e-ticket on the email ID that was entered under “Contact
                Information.”
              </li>
            </ul>
          </p>
        </div>
      </div>

      {/* ----------------tracking------------ */}
      <blockquote
        class="container mb-5"
        style={{
          border: "2px solid black",
          padding: "50px",
          backgroundColor: "#f0f0f5",
          color: "black"
        }}
      >
        <h4 style={{ textDecorationLine: "underline" }}>
          Track the Bus with 'Track My Bus' Feature
        </h4>
        <p>
          Have you ever reached your boarding point and wondered about the
          whereabouts of your bus? Have you ever had a heated conversation with
          the bus operator about the location of your bus? redBus has addressed
          these worries and more with the “Track My Bus” feature for live bus
          tracking. With this, customers can track their bus on their app to
          help them plan their journey to the boarding point or to get off at
          their desired drop-off point.
        </p>
        <p>
          If the passenger has to be picked up from the drop-off point, they can
          always share the live location of the bus to help them plan their
          commute to the drop-off location. This feature also adds to improving
          the safety standards on the bus. Family members can breathe a sigh of
          relief as they can always keep a live track of the location of the bus
          in which their loved ones are traveling in. Visit 'track my bus' and
          enter the ticket number and registered email ID to track the concerned
          bus.
        </p>
      </blockquote>
    </>
  );
}

export default Home;
