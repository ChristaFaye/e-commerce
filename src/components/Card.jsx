import { useContext } from "react";
import CartContext from "../CartContext";
import {MdFastfood} from "react-icons/md";
import {FaShoppingCart} from "react-icons/fa";

function Card({ name, price, src }) {

    const { addToCart } = useContext(CartContext);

    return(
        
        <div className="productCards card d-inline-flex p-2 bd-highlight">
            <div className="productImg card-img-top pt-4">
                <img src={src} alt="product image" className="rounded mx-auto d-block"/>
            </div>
            <div className="productDetails card-body">
                <h3 className="card-title text-center fs-4">{name}</h3>
                <h4 className="card-text text-center text-danger fw-bold fs-5">${price}.99</h4>
                <button className="btn btn-primary d-block mt-4 float-end" onClick={() => addToCart(name, price, src)}>
                    Add To Cart <FaShoppingCart/>
                </button>
            </div>
           
        </div>
    )
}

export default Card