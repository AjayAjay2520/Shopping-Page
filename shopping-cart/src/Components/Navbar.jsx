import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="Nav container-fluid ">
        <div className="nav-main  p-2  d-flex justify-content-between ">
            <div className="display-5 fw-bold mt-3 ">Sellerlist</div>
            <div className="btn-groub p-4  me-0 ">
                <button
                    type="buttton"
                    className="btn btn-outline-dark rounded-5 me-4 "
                >
                    Sign up
                </button>
                <button
                    type="buttton"
                    className="btn btn-outline-dark rounded-5 "
                >
                    Login 
                </button>
            </div>
        
        </div>
        <hr />
        <div className="list-grb d-flex justify-content-between  ">
            <div className="d-flex fw-bold Nav-List fs-5  " >
                <li>Womenswear</li>
                <li>Menswear</li>
                <li>KidsWear</li>
                <li>Beauty</li>
                <li>Hobbies</li>
                <li>Homeware</li>
            </div>

            <div className="Nav_cart">
                <button className="btn btn-outline-info text-dark rounded-5 " >Sell Items </button>
                <span className="fs-4" ><FaShoppingCart/></span> 
            </div>
        </div>
        <hr />
    </div>
     
  );
};

export default Navbar;
