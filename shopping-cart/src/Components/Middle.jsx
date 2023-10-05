import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import img from "../Static/WhatsApp Image 2023-10-05 at 14.37.45_abb32b88.jpg";
import img1 from "../Static/premium_photo-.avif";
import img2 from "../Static/photo-.avif";
import img3 from "../Static/photo-15.avif";
import img4 from "../Static/photo-1601.avif";
function Middle() {
  return (
    <div>
      <div className=" d-flex  justify-content-between m-4">
        <div className="m-2 fw-bold  " >
          <h3>Listed recently </h3>
        </div>
        <div  className="mt-3">
          <FaLessThan className="me-3"></FaLessThan>
          <FaGreaterThan className="me-3"></FaGreaterThan>
        </div>
      </div>

      <div className="imgs_small d-flex justify-content-evenly ">
        <div>
          <img className="sm_img" src={img} alt=""></img>
        </div>
        <div>
          <img className="sm_img"  src={img1} alt=""></img>
        </div>
        <div>
          <img className="sm_img" src={img2} alt=""></img>
        </div>
        <div>
          <img className="sm_img" src={img3} alt=""></img>
        </div>
        <div>
          <img className="sm_img"  src={img4} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Middle;
