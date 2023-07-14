/** @format */
import "../Services.css";

const Services = () => {
  return (
    <div className="servicesContainer">
      <div className="servicesContainerBg">
        <h1 className="servicesText">Services</h1>
      </div>
      <div className="flexContainer">
        <button className="filterBtn">Filter</button>
        <div>
          <p className="salonText">Location</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 imgContainer">
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="soloneImgOne"
              className="salonImages"
            />
            <p className="solonText">Salon Koniki - Best Hair & Beauty Salon</p>
            <div className="flexContainer">
              <div className="d-flex">
                <i class="fa-solid fa-location-dot location"></i>
                <p className="solonText">5.6 KM from you</p>
              </div>
              <div className="d-flex">
                <p className="solonText">4.0</p>
                <i class="fa-solid fa-star location"></i>
                <i class="fa-solid fa-star location"></i>
                <i class="fa-solid fa-star location"></i>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <h1 className="solonText">$150</h1>
                <del className="solonText pt-5  px-3">$200</del>
                <p className="solonText pt-5">25%</p>
              </div>
              <p className="solonText px-5">Hair cut</p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 imgContainer">
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="soloneImgOne"
              className="salonImages"
            />
            <p className="solonText">Salon Koniki - Best Hair & Beauty Salon</p>
            <div className="flexContainer">
              <div className="d-flex">
                <i className="fa-solid fa-location-dot location"></i>
                <p className="solonText">5.6 KM from you</p>
              </div>
              <div className="d-flex">
                <p className="solonText">4.0</p>
                <i class="fa-solid fa-star location"></i>
                <i class="fa-solid fa-star location"></i>
                <i class="fa-solid fa-star location"></i>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <h1 className="solonText">$150</h1>
                <del className="solonText pt-5  px-3">$200</del>
                <p className="solonText pt-5">25%</p>
              </div>
              <p className="solonText px-5">Hair cut</p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 imgContainer">
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="soloneImgOne"
              className="salonImages"
            />
            <p className="solonText">Salon Koniki - Best Hair & Beauty Salon</p>
            <div className="flexContainer">
              <div className="d-flex">
                <i class="fa-solid fa-location-dot location"></i>
                <p className="solonText">5.6 KM from you</p>
              </div>
              <div className="d-flex">
                <p className="solonText">4.0</p>
                <i class="fa-solid fa-star location"></i>
                <i class="fa-solid fa-star location"></i>
                <i class="fa-solid fa-star location"></i>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <h1 className="solonText">$150</h1>
                <del className="solonText pt-5   px-3">$200</del>
                <p className="solonText pt-5">25%</p>
              </div>
              <p className="solonText px-5">Hair cut</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
