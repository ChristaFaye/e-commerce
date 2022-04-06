import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../CartContext";
import { MdWatch, MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

function Nav() {

    const { items } = useContext(CartContext);

    return (
        <nav className="navbar navbar-dark bg-dark b-gradient p-2">
            <div className="container-fluid">
                <h1 className="navbar-brand badge bg-warning text-wrap fs-3 text-dark mt-2" to="/">
                    GoodBuy
                </h1>
                <Link className="nav-link nav-item active text-wrap fs-4 text-white" to="/">
                    Wearable Technology
                </Link>
                <Link className="nav-link nav-item disabled text-wrap fs-4 text-muted" to="/">
                    Laptops
                </Link>
                <Link className="nav-link nav-item disabled text-wrap fs-4 text-muted" to="/">
                    Mobiles
                </Link>
                <Link className="nav-link nav-itemdisabled text-wrap fs-4 text-muted" to="/">
                    Audio
                </Link>
                <Link className="nav-link nav-item disabled text-wrap fs-4 text-muted" to="/">
                    Cameras
                </Link>

                <Link className="navbar-brand pe-0" to="/checkout">
                    <div className="cart btn btn-primary fs-6">
                        Cart:
                        <FaShoppingCart className="ms-1"/>
                        <span className="ms-2 badge bg-secondary">{items.length}</span>
                    </div>
                </Link>

                <button type="button" class="btn btn-warning btn-lg p-1 circle"> 
                    <MdAccountCircle size={35}/>
                </button>
            </div>
        </nav>
    );
}

export default Nav;
