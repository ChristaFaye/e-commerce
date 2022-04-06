import { useContext } from "react";
import CartContext from "../CartContext";
import { v4 as uuid } from "uuid";

function Checkout() {
    const { items } = useContext(CartContext);

    return(

        <>
        <div className="m-5">
            <h1 className="ms-5">Checkout</h1>
            
            <div className="shopping-cart card mb-3 m-5 w-50 border border-primary rounded">
                {items.map((item) =>
                    <div class="form-check border-bottom border-primary">
                        <input class="form-check-input mt-5 ms-3" type="checkbox" name="exampleRadios" value="option1" checked/>
                        <div className="row g-0">
                            <div key={uuid()} className="col-md-4" >
                                <img src={item.src} alt="" className="img-fluid rounded-start m-3 ms-5"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title text-center fs-3 mt-5">{item.name}</h2>
                                    <h3 className="card-text text-center text-danger fw-bold fs-4">${item.price}.99</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                )}

              
            </div>
            <div>
                <button type="button" className="payment btn btn-primary btn-lg d-block float-end">Proceed to Payment</button>
            </div>
                
        </div>
        
        </>
    );
};

export default Checkout;