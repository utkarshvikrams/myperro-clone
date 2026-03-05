import Logo from "../assets/img/logo.svg";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className="container-fluid header">
      <header className=" ">
        <div className="">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src={Logo} alt="Logo" className="logo" />
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 items">
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  PRODUCTS
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  BLOGS
                </a>
              </li>
              <li>
                <a href="#" className="nav-link   preorder">
                  PREORDER NOW
                  <div className="arrowbox">
                  <BiSolidRightTopArrowCircle className="arrow"/>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2  contact">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
