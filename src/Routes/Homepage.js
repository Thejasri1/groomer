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

  return (
    <div className="HomeContainer">
      <nav className="navbar navbar-expand-lg navColor shadow-lg">
        <div className="navbarFlexingContainer">
          <a className="navbar-brand">
            <img
              src={process.env.PUBLIC_URL + "/gromerLogo.png"}
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
              <img
                src={process.env.PUBLIC_URL + "/Search.png"}
                className="iconContainer"
                alt="search"
                onClick={onClickSearchIcon}
              />
            )}
            <div class="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                aria-expanded="false"
                data-toggle="dropdown"
              >
                <img
                  src={process.env.PUBLIC_URL + "/account.png"}
                  className="iconContainer"
                  alt="acc"
                />
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
              <img
                src={process.env.PUBLIC_URL + "/menu.png"}
                height={40}
                width={40}
                alt="acc"
                className="mt-4"
                onClick={() => setHambergerOptions(true)}
              />
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
                          <div className="col-12 col-md-4">
                            <img
                              src={process.env.PUBLIC_URL + "/Wallet.png"}
                              className="carousalImg"
                              alt="carousalImg"
                            />
                          </div>
                          <div className="col-12 col-md-8 carousalText carousalHeadings">
                            <span className="carousalInnerTextDeskview">
                              Great salon
                            </span>
                            <span className="carousalSpan"> services </span>
                            <br />
                            <span className="carousalSpan"> that won't </span>
                            <br />
                            <span className="carousalInnerTextDeskview">
                              empty your pockets
                            </span>
                            <br />
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
                              src={process.env.PUBLIC_URL + "/calender.png"}
                              className="carousalImg alignLeftImg"
                              alt="carousalImgTwo"
                            />
                          </div>
                          <div className="col-12 col-md-6 carousalText carousalHeadings">
                            <span className="carousalInnerTextDeskview">
                              Time
                            </span>
                            <span className="carousalSpan"> is money</span>
                            <br />
                            <span className="carousalSpan"> Let's not</span>
                            <br />
                            <span className="carousalInnerTextDeskview">
                              Waste either
                            </span>
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
                              src={process.env.PUBLIC_URL + "/aI.png"}
                              className="carousalImg alignLeftImg"
                              alt="carousalImgThree"
                            />
                          </div>
                          <div className="col-12 col-md-6 carousalText carousalHeadings">
                            <span className="carousalSpan">
                              The future of hair is
                            </span>
                            <br />
                            <span className="carousalInnerTextDeskview">
                              Digital
                            </span>
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
                      <span className="spans"> Online </span> salon apps make it
                      easy to book salon
                      <span className="spans"> appointments </span>
                      from home. Browse salons, read reviews, and
                      <span className="spans"> book </span> appointments in just
                      a<span className="spans"> few taps</span>. Many apps also
                      offer <span className="spans"> discounts </span> and
                      promotions.
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
                  <img
                    src={process.env.PUBLIC_URL + "/bestSalon.png"}
                    alt="serviceOption"
                    width={320}
                    height={200}
                  />
                  <div>
                    <button className="serviceBtn">
                      Best <strong>salons</strong> in city
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
              <div className="row">
                <div className="col-12 col-md-4">
                  <img
                    src={process.env.PUBLIC_URL + "/bestService.png"}
                    alt="serviceOption"
                    width={320}
                    height={200}
                  />
                  <div>
                    <button className="serviceBtn">
                      Best <strong>services</strong> in city
                      <i className="fa-solid fa-arrow-right-long arrowIcon"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="portionThreeVisible">
                    <p style={{ color: "white" }}>we give</p>
                    <h1 className="bestSalonText">Best service in city</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <img
                    src={process.env.PUBLIC_URL + "/serviceWithLove.png"}
                    alt="serviceOption"
                    width={320}
                    height={200}
                  />
                  <div>
                    <button className="serviceBtn">
                      Best <strong>service</strong> with love
                      <i className="fa-solid fa-arrow-right-long arrowIcon"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="portionThreeVisible">
                    <p style={{ color: "white" }}>we need</p>
                    <h1 className="bestSalonText">
                      A happy Smile and appreciations
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="largeViewMargin">
            <div className="portionTwo mb-5">
              <div className="alignPortionTwo">
                <strong className="spanContainer">The</strong>
                <h1 className="bestSalonText">
                  Best groomer in <span className="spanContainer">city</span>
                </h1>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="flexPortion">
                      <div class="img">
                        <img
                          src={process.env.PUBLIC_URL + "/likeHeart.png"}
                          alt="salonImg"
                          className="likeContainer"
                        />
                        <img
                          src={process.env.PUBLIC_URL + "/salonOne.png"}
                          alt="salonImg"
                          className="individualSalonImg"
                        />
                      </div>
                      <div className="portionAlign">
                        <h1 className="countSalonText">#1</h1>
                        <h1 className="groomerSalonText">Groomer salon</h1>
                        <p className="descriptionAbouIndividualText">
                          the salon with two best in class groomers in the same
                          salon gives you b est style and look with master level
                          talent.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="flexPortion">
                      <div class="img">
                        <img
                          src={process.env.PUBLIC_URL + "/likeHeart.png"}
                          alt="salonImg"
                          className="likeContainer"
                        />
                        <img
                          src={process.env.PUBLIC_URL + "/salonTwo.png"}
                          alt="salonImg"
                          className="individualSalonImg"
                        />
                      </div>
                      <div className="portionAlign">
                        <h1 className="countSalonText">#2</h1>
                        <h1 className="groomerSalonText">Groomer salon</h1>
                        <p className="descriptionAbouIndividualText">
                          the salon with two best in class groomers in the same
                          salon gives you b est style and look with master level
                          talent.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="flexPortion">
                      <div class="img">
                        <img
                          src={process.env.PUBLIC_URL + "/likeHeart.png"}
                          alt="salonImg"
                          className="likeContainer"
                        />
                        <img
                          src={process.env.PUBLIC_URL + "/salonThree.png"}
                          alt="salonImg"
                          className="individualSalonImg"
                        />
                      </div>
                      <div className="portionAlign">
                        <h1 className="countSalonText">#3</h1>
                        <h1 className="groomerSalonText">Groomer salon</h1>
                        <p className="descriptionAbouIndividualText">
                          the salon with two best in class groomers in the same
                          salon gives you b est style and look with master level
                          talent.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="flexPortion">
                      <div class="img">
                        <img
                          src={process.env.PUBLIC_URL + "/likeHeart.png"}
                          alt="salonImg"
                          className="likeContainer"
                        />
                        <img
                          src={process.env.PUBLIC_URL + "/salonFour.png"}
                          alt="salonImg"
                          className="individualSalonImg"
                        />
                      </div>
                      <div className="portionAlign">
                        <h1 className="countSalonText">#4</h1>
                        <h1 className="groomerSalonText">Groomer salon</h1>
                        <p className="descriptionAbouIndividualText">
                          the salon with two best in class groomers in the same
                          salon gives you b est style and look with master level
                          talent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="exploreConatiner">
                <button className="exploreMoreBtn mb-5">Explore more</button>
              </div>
            </div>
          </div>
          <div className="container-fulid salonHomeContainer">
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  src={process.env.PUBLIC_URL + "/trimming.png"}
                  alt="salimg"
                  className="salonImg"
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="mobileViewHidden">
                  <div className="d-flex">
                    <img
                      src={process.env.PUBLIC_URL + "/Home.png"}
                      alt="salimg"
                      width={115}
                      height={98}
                    />
                    <div>
                      <h2 className="spanHome">Home salon services</h2>
                      <h2 className="salonText">Starts very soon..</h2>
                      <bold className="salonText">
                        Follow us instagram and twitter to get notified
                      </bold>
                    </div>
                  </div>
                </div>
                <h1 className="salonText hiddenTextLapView">
                  Salon at your home
                </h1>
                <div className="textAlign">
                  <p className="descriptionText">
                    The salon with two best in class groomers in the same salon
                    gives you b est style and look with master level talent. at
                    your house. and prices are identical to salon. no worry
                    about timing and traffic. we will take all your pressure to
                    give you best service at your door steps.
                  </p>
                </div>
                <div className="bookNowBtnContainer">
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
            <div className="px-2 pt-2">
              <h1 className="groomerText">Groomer.live</h1>
            </div>
            <div>
              <p className="footerContent">
                <img
                  src={process.env.PUBLIC_URL + "/gmailLogo.png"}
                  className="minIcon"
                />
                Groomer.online@gmail.com
              </p>
              <p className="footerContent">
                <img
                  src={process.env.PUBLIC_URL + "/WhatsApp.png"}
                  className="minIcon"
                />
                +91 9876543210
              </p>
              <p className="footerContent">
                <img
                  src={process.env.PUBLIC_URL + "/location.png"}
                  className="minIcon"
                />
                Hi-tech city, Hyderabad.
              </p>
              <div className="flexContainer">
                <img
                  src={process.env.PUBLIC_URL + "/LinkedIn.png"}
                  className="icon"
                />
                <img
                  src={process.env.PUBLIC_URL + "/Twitter.png"}
                  className="icon"
                />
                <img
                  src={process.env.PUBLIC_URL + "/Instagram.png"}
                  className="icon"
                />
              </div>
            </div>
            <div>
              <p className="footerContent pt-5 hiddenPolicy">
                Terms and Conditions
                <br />
                Privacy and Policy
              </p>
              <p className="footerContent pt-5 hiddenTerms">
                Terms and Conditions Privacy and Policy
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
