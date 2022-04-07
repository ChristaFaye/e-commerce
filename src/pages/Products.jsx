import Card from "../components/Card";
import { v4 as uuid } from "uuid";
import image1 from "../img/samsung-watch4.jpg"
import image2 from "../img/apple-watch3.jpeg"
import image3 from "../img/apple-watchSE.jpeg"
import image4 from "../img/apple-watch7.jpeg"
import image5 from "../img/fitibit-versa2.png"
import image6 from "../img/fitibit-versa3.png"
import image7 from "../img/razer-anzu.jpg"
import image8 from "../img/bose-frame-tenor.jpg"
import image9 from "../img/opttecc-smartwear.jpeg"


function Products(){
    const products = [
        {name: "Samsung Galaxy Watch 4", price: 419, src: image1},
        {name: "Apple Watch Series 3", price: 195, src: image2},
        {name: "Apple Watch SE", price: 399, src: image3},
        {name: "Apple Watch Series 7 ", price: 414, src: image4},
        {name: "Fitbit Versa 2", price: 199, src: image5},
        {name: "Fitbit Versa 3", price: 229, src: image6},
        {name: "Razer Anzu Sunglasses", price: 149, src: image7},
        {name: "Bose Frames Tenor", price: 309, src: image8},
        {name: "Opttecc Smartwear", price: 309, src: image9}
    ]
    return(
        <div className="product-list" key={uuid()}>
            {products.map((product) => (
                <Card name={product.name} price={product.price} src={product.src} key={uuid()}/>
            ))}
        </div>
    )
}

export default Products;