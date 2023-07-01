/** @format */

import "../App.css";
const Homepage = () => {
  return (
    <div className="HomeContainer">
      <nav className="navbar navbar-expand-lg navbar-light navColor fixed-top">
        <div className="container-fluid flexContainer">
          <a className="navbar-brand" href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqO7TkxTKyTlLH8v5TzIV6cBeF_fRYzj3t8w&usqp=CAU"
              className="logo"
            />
          </a>
          <div>
            <i class="fa-solid fa-magnifying-glass mr-2 icon"></i>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79drSQ14odOAATbriINtelDVq8POK854dBQ&usqp=CAU"
              className="profileImg"
            />
            <i class="fa-solid fa-bars ml-2 icon"></i>
          </div>
        </div>
      </nav>
      <div className="navContainer">
        <header>
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
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
            <div class="carousel-inner">
              <div>
                <div class="carousel-item active">
                  <div className="carousalSection carousalSectionOne">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqO7TkxTKyTlLH8v5TzIV6cBeF_fRYzj3t8w&usqp=CAU"
                      className="carousalImg"
                    />
                    <p className="carousalHeadings">
                      Great salon <span className="carousalSpan">services</span>
                      <br />
                      <span className="carousalSpan">that won't</span>
                      <br />
                      empty your pockets
                    </p>
                    <button className="bookNowButton">Book Now</button>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="carousalSection carousalSectiontwo">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqO7TkxTKyTlLH8v5TzIV6cBeF_fRYzj3t8w&usqp=CAU"
                      className="carousalImg"
                    />
                    <p className="carousalHeadings">
                      Time <span className="carousalSpan">is money</span>
                      <br />
                      <span className="carousalSpan">Let's not</span>
                      <br />
                      Waste either
                    </p>
                    <button className="bookNowButton">Book Now</button>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="carousalSection carousalSectionthree">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqO7TkxTKyTlLH8v5TzIV6cBeF_fRYzj3t8w&usqp=CAU"
                      className="carousalImg"
                    />
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
            <button
              class="carousel-control-prev visually-hidden"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next visually-hidden"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </header>
        <div className="conatinerPortionIOne">
          <h1 className="weAreText pt-5">We are</h1>
          <h1 className="headingText">Groomer</h1>
          <p className="portionOneDecs">
            Online salon apps make it easy to book salon appointments from home.
            Browse salons, read reviews, and book appointments in just a few
            taps. Many apps also offer discounts and promotions.
          </p>
        </div>
      </div>
      <div className="servicesChoosePortion">
        <div>
          <div>
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
                <i class="fa-solid fa-arrow-right-long arrowIcon"></i>
              </button>
            </div>
          </div>
          <div>
            <div className="servicesChooseContainer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1751/1751437.png"
                alt="serviceOption"
                className="serviceImg"
              />
            </div>
            <div>
              <button className="serviceBtn">
                Best Service in city
                <i class="fa-solid fa-arrow-right-long arrowIcon"></i>
              </button>
            </div>
          </div>
          <div>
            <div className="servicesChooseContainer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1751/1751437.png"
                alt="serviceOption"
                className="serviceImg"
              />
            </div>
            <div>
              <button className="serviceBtn">
                Best Service with Love
                <i class="fa-solid fa-arrow-right-long arrowIcon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="portionTwo">
        <strong className="spanContainer">The</strong>
        <h1 className="bestSalonText">
          Best groomer in <span className="spanContainer">city</span>
        </h1>
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
              the saloon with two best in class groomers in the same salon gives
              you b est style and look with master level talent.
            </p>
          </div>
        </div>
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
              the saloon with two best in class groomers in the same salon gives
              you b est style and look with master level talent.
            </p>
          </div>
        </div>
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
              the saloon with two best in class groomers in the same salon gives
              you b est style and look with master level talent.
            </p>
          </div>
        </div>
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
              the saloon with two best in class groomers in the same salon gives
              you b est style and look with master level talent.
            </p>
          </div>
        </div>
        <div className="exploreConatiner">
          <button className="exploreMoreBtn">Explore more</button>
        </div>
      </div>
      <div className="portionThree">
        <div>
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/men-hair-salon-barber-doing-haircut-barbershop-handsome-male-client-hairdresser-high-resolution-men-hair-salon-barber-doing-121115496.jpg"
              alt="salimg"
              className="salonImg"
            />
          </div>
          <div>
            <h1 className="salonText">Salon at your home</h1>
            <p className="descriptionText">
              The saloon with two best in class groomers in the same salon gives
              you b est style and look with master level talent. at your house.
              and prices are identical to salon. no worry about timing and
              traffic. we will take all your pressure to give you best service
              at your door steps.
            </p>
          </div>
          <div className="btnConatiner">
            <button className="bookNowBtn">Book Now</button>
          </div>
        </div>
      </div>
      <div className="footerContainer">
        <footer>
          <div className="flexContainer">
            <div>
              <h1 className="groomerText">Groomer.live</h1>
            </div>
            <div>
              <p className="footerContent">
                <i class="fa-regular fa-envelope minIcon"></i>
                Groomer.online@gmail.com
              </p>
              <p className="footerContent">
                <i class="fa-solid fa-phone minIcon"></i>+91 9876543210
              </p>
              <p className="footerContent">
                <i class="fa-solid fa-location-dot minIcon"></i>Hi-tech city,
                Hyderabad.
              </p>
              <div className="flexContainer">
                <i class="fa-brands fa-linkedin icon"></i>
                <i class="fa-brands fa-twitter icon"></i>
                <i class="fa-brands fa-instagram icon"></i>
              </div>
            </div>
            <div>
              <p className="footerContent">
                Terms and Conditions
                <br /> Privacy and Policy
              </p>
            </div>
          </div>
          <div className="flexContainer">
            <p className="copyRightsText">
              Copy right ©2023 groomer.live pvt limited. All the rights are
              reserved ®grooomer.live.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Homepage;
