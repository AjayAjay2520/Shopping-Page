import img_1 from "../Static/WhatsApp Image 2023-10-05 at 14.37.45_abb32b88.jpg";
import { GrSearch } from "react-icons/Gr";
import { AiOutlineArrowRight } from "react-icons/Ai";

const Search_text = () => {
  return (
    <div className="container-fluid  ">
      <div className="main_image img-fluid">
        <img src={img_1} alt="" style={{ width: "97.5vw", height: "45vh" }} />
      </div>
      <div className="img_text">
        <p className="text-white fs-1 fw-bolder   " >Change your wardrobe. Find execiting goods.</p>
        <div className="row height d-flex justify-content-center align-items-center">
          <div className=" Search_bar">
            <div className="form">
              <i className="search">
                {" "}
                <GrSearch />{" "}
              </i>
              <input
                type="text"
                className="form-control form-input rounded-5 "
                placeholder="What are you looking for ?"
                style={{ width: "53rem" }}
              />
              <button className="arrow btn btn-info rounded-5 text-white "><AiOutlineArrowRight/> </button>
                <div className="Filter_btn d-flex p-2 ">
                    <button className="btn bg-white rounded-5 ">Womens Clothes</button>
                    <button className="btn bg-white rounded-5 ">Beauty</button>
                    <button className="btn bg-white rounded-5 ">Mens Clothes</button>
                    <button className="btn bg-white rounded-5 ">Kids Clothes</button>
                    <button className="btn bg-white rounded-5 ">Hobbies</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search_text;
