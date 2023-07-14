/** @format */

import "../Bookings.css";
import "../Whishlist.css";
const WhishList = () => {
  return (
    <div className="containerWhishlist">
      <div className="nestedContainer">
        <h1 className="whishlistText">Whish List</h1>
        <div className="childWhishLists hiddenContainer">
          <h1 className="listName">Looks salons</h1>
          <div className="flexContainer">
            <h1 className="listNameDesc">
              13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda,
              Nagole, HYD
            </h1>
            <i class="fa-solid fa-heart heartIcon"></i>
          </div>
        </div>
        <div className="flexBox childWhishLists">
          <h1 className="listName">Looks salons</h1>
          <h1 className="listNameDesc">
            13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda,
            Nagole, HYD
          </h1>
          <i class="fa-solid fa-heart heartIcon"></i>
        </div>
      </div>
    </div>
  );
};

export default WhishList;
