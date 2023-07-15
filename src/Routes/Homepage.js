/** @format */

import { useState } from "react";
import "../App.css";
import BookingsHistory from "./BookingHistory";
import WhishList from "./Whishlist";
import Hamberger from "./HambergerOptions";

const Homepage = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [hambergerOptions, setHambergerOptions] = useState(false);
  const onDisplaySelectedContainer = (item) => {
    setSelectedItem(item);
  };
  const [displaySearch, setDisplaySearch] = useState(false);
  const onClickSearchIcon = () => {
    setDisplaySearch(true);
    setDisplaySearch(true);
  };
  console.log("displaySearch", displaySearch);
  return (
    <div className="HomeContainer">
      <nav className="navbar navbar-expand-lg navColor navbar-fixed-top shadow-lg">
        <div className="navbarFlexingContainer">
          <a className="navbar-brand">
            <img
              src="https://images-platform.99static.com//4PO9Gj6lKoB-0LptrpO3qPiyAto=/38x0:1661x1623/fit-in/500x500/99designs-contests-attachments/114/114626/attachment_114626077"
              className="logo"
              alt="logo"
            />
          </a>
          <div className="d-flex">
            {displaySearch && (
              <div className="positionOfSearchbar">
                <input
                  type="text"
                  className="inputSearch"
                  placeholder="Search"
                />
              </div>
            )}
            {displaySearch ? (
              <i
                class="fa-solid fa-xmark iconContainer"
                onClick={() => setDisplaySearch(false)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-magnifying-glass iconContainer"
                onClick={onClickSearchIcon}
              ></i>
            )}
            <div class="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                aria-expanded="false"
                data-toggle="dropdown"
              >
                <i class="fa-solid fa-user iconContainer"></i>
              </a>
              <ul className="dropdown-menu accSettingsList" role="menu">
                <li>
                  <p onClick={() => onDisplaySelectedContainer("bookings")}>
                    Bookings
                  </p>
                </li>
                <li>
                  <p onClick={() => onDisplaySelectedContainer("whishlist")}>
                    Whishlist
                  </p>
                </li>
              </ul>
            </div>
            {hambergerOptions ? (
              <i
                class="fa-solid fa-xmark iconContainer"
                onClick={() => setHambergerOptions(false)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-bars ml-2 iconContainer"
                onClick={() => setHambergerOptions(true)}
              ></i>
            )}
          </div>
        </div>
      </nav>
      {selectedItem === "bookings" ? (
        <BookingsHistory />
      ) : selectedItem === "whishlist" ? (
        <WhishList />
      ) : hambergerOptions === true ? (
        <Hamberger />
      ) : (
        <div>
          <div className="navContainer">
            <header>
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div>
                    <div className="carousel-item active">
                      <div className="carousalSection carousalSectionOne">
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqO7TkxTKyTlLH8v5TzIV6cBeF_fRYzj3t8w&usqp=CAU"
                              className="carousalImg"
                              alt="carousalImg"
                            />
                          </div>
                          <div className="col-12 col-md-6">
                            <p className="carousalHeadings">
                              Great salon
                              <span className="carousalSpan">services</span>
                              <br />
                              <span className="carousalSpan">that won't</span>
                              <br />
                              empty your pockets
                            </p>
                            <button className="bookNowButton">Book Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carousalSection carousalSectiontwo">
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqO7TkxTKyTlLH8v5TzIV6cBeF_fRYzj3t8w&usqp=CAU"
                              className="carousalImg"
                              alt="carousalImgTwo"
                            />
                          </div>
                          <div className="col-12 col-md-6">
                            <p className="carousalHeadings">
                              Time
                              <span className="carousalSpan">is money</span>
                              <br />
                              <span className="carousalSpan">Let's not</span>
                              <br />
                              Waste either
                            </p>
                            <button className="bookNowButton">Book Now</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="carousalSection carousalSectionthree">
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqO7TkxTKyTlLH8v5TzIV6cBeF_fRYzj3t8w&usqp=CAU"
                              className="carousalImg"
                              alt="carousalImgThree"
                            />
                          </div>
                          <div className="col-12 col-md-6">
                            <p className="carousalHeadings">
                              <span className="carousalSpan">
                                The future of hair is
                              </span>
                              <br />
                              Digital
                            </p>
                            <button className="bookNowButton">Book Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span className="indicatorBtn" aria-hidden="true">
                    <i class="fa-solid fa-arrow-left indicatorIcon"></i>
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span className="indicatorBtn" aria-hidden="true">
                    <i class="fa-solid fa-arrow-right indicatorIcon"></i>
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </header>
            <div className="continerPortionOne">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h1 className="weAreText pt-5">We are</h1>
                    <h1 className="headingText">Groomer</h1>
                  </div>
                  <div className="col-12 col-lg-6">
                    <p className="portionOneDecs">
                      Online salon apps make it easy to book salon appointments
                      from home. Browse salons, read reviews, and book
                      appointments in just a few taps. Many apps also offer
                      discounts and promotions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="servicesChoosePortion">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="servicesChooseContainer">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1751/1751437.png"
                      alt="serviceOption"
                      className="serviceImg"
                    />
                  </div>
                  <div>
                    <button className="serviceBtn">
                      Best Salons in city
                      <i className="fa-solid fa-arrow-right-long arrowIcon"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="portionThreeVisible">
                    <p style={{ color: "white" }}>we are</p>
                    <h1 className="bestSalonText">
                      Best salons service in city
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portionTwo m-3">
            <div className="alignPortionTwo">
              <strong className="spanContainer">The</strong>
              <h1 className="bestSalonText">
                Best groomer in <span className="spanContainer">city</span>
              </h1>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="flexPortion">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                        alt="salonImg"
                        className="individualSalonImg"
                      />
                    </div>
                    <div>
                      <h1 className="countSalonText">#1</h1>
                      <h1 className="groomerSalonText">Groomer salon</h1>
                      <p className="descriptionAbouIndividualText">
                        the saloon with two best in class groomers in the same
                        salon gives you b est style and look with master level
                        talent.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="flexPortion">
                    <div>
                      <img
                        src="https://media.istockphoto.com/id/1288801785/photo/barber-shop.jpg?s=612x612&w=0&k=20&c=R4e9Ts7MaRN2DaGTebLtiu_ThxRk2cGUefbQneL90ro="
                        alt="salonImg"
                        className="individualSalonImg"
                      />
                    </div>
                    <div>
                      <h1 className="countSalonText">#2</h1>
                      <h1 className="groomerSalonText">Groomer salon</h1>
                      <p className="descriptionAbouIndividualText">
                        the saloon with two best in class groomers in the same
                        salon gives you b est style and look with master level
                        talent.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="flexPortion">
                    <div>
                      <img
                        src="https://i.pinimg.com/564x/65/29/96/652996900ce350a260f34af4cecd7cb9.jpg"
                        alt="salonImg"
                        className="individualSalonImg"
                      />
                    </div>
                    <div>
                      <h1 className="countSalonText">#3</h1>
                      <h1 className="groomerSalonText">Groomer salon</h1>
                      <p className="descriptionAbouIndividualText">
                        the saloon with two best in class groomers in the same
                        salon gives you b est style and look with master level
                        talent.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="flexPortion">
                    <div>
                      <img
                        src="https://i.pinimg.com/originals/e9/05/20/e90520c257bbaa5435b8694e3817070c.jpg"
                        alt="salonImg"
                        className="individualSalonImg"
                      />
                    </div>
                    <div>
                      <h1 className="countSalonText">#4</h1>
                      <h1 className="groomerSalonText">Groomer salon</h1>
                      <p className="descriptionAbouIndividualText">
                        the saloon with two best in class groomers in the same
                        salon gives you b est style and look with master level
                        talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="exploreConatiner">
              <button className="exploreMoreBtn">Explore more</button>
            </div>
          </div>
          <div className="container">
            <div className="row flexing">
              <div className="col-12 col-md-6">
                <img
                  src="https://thumbs.dreamstime.com/b/men-hair-salon-barber-doing-haircut-barbershop-handsome-male-client-hairdresser-high-resolution-men-hair-salon-barber-doing-121115496.jpg"
                  alt="salimg"
                  className="salonImg"
                />
              </div>
              <div className="col-12 col-md-6">
                <h2 className="salonText">
                  <i className="fa-solid fa-house homeIcon"></i>Home salon
                  services
                </h2>
                <h2 className="salonText">Starts very soon..</h2>
                <br />
                <bold className="salonText">
                  Follow us instagram and twitter to get
                  <br />
                  notified
                </bold>
                <h1 className="salonText">Salon at your home</h1>
                <p className="descriptionText">
                  The saloon with two best in class groomers in the same salon
                  gives you b est style and look with master level talent. at
                  your house. and prices are identical to salon. no worry about
                  timing and traffic. we will take all your pressure to give you
                  best service at your door steps.
                </p>
                <div className="mt-5">
                  <button className="bookNowBtn">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="footerContainer">
        <footer>
          <div className="flexContainer">
            <div>
              <h1 className="groomerText">Groomer.live</h1>
            </div>
            <div>
              <p className="footerContent">
                <i className="fa-regular fa-envelope minIcon"></i>
                Groomer.online@gmail.com
              </p>
              <p className="footerContent">
                <i className="fa-solid fa-phone minIcon"></i>+91 9876543210
              </p>
              <p className="footerContent">
                <i className="fa-solid fa-location-dot minIcon"></i>Hi-tech
                city, Hyderabad.
              </p>
              <div className="flexContainer">
                <i className="fa-brands fa-linkedin icon"></i>
                <i className="fa-brands fa-twitter icon"></i>
                <i className="fa-brands fa-instagram icon"></i>
              </div>
            </div>
            <div>
              <p className="footerContent pt-5">
                Privacy and Policy Terms and Conditions
              </p>
            </div>
          </div>
        </footer>
        <div className="text-center">
          <p className="copyRightsText">
            Copy right ©2023 groomer.live pvt limited. All the rights are
            reserved ®grooomer.live.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
