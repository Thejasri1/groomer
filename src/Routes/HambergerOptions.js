/** @format */
import "../Hamberger.css";
import { useState } from "react";
import Services from "./Services";
const Hamberger = () => {
  const [selectedHambergerOption, setSelectedHambergerOption] = useState("");

  const displayHambergerOptions = (item) => {
    setSelectedHambergerOption(item);
  };
  // console.log("selectedHambergerOption", selectedHambergerOption);
  return (
    <>
      {selectedHambergerOption === "services" ? (
        <Services />
      ) : (
        <div className="containerMain">
          <div>
            <li>
              <h1
                onClick={() => displayHambergerOptions("home")}
                className="optionsList"
              >
                Home
              </h1>
            </li>
            <li>
              <h1
                onClick={() => displayHambergerOptions("services")}
                className="optionsList"
              >
                Services
              </h1>
            </li>
            <li>
              <h1
                onClick={() => displayHambergerOptions("about")}
                className="optionsList"
              >
                About Us
              </h1>
            </li>
            <li>
              <h1
                onClick={() => displayHambergerOptions("logout")}
                className="optionsList"
              >
                Logout
              </h1>
            </li>
          </div>
        </div>
      )}
    </>
  );
};
export default Hamberger;
