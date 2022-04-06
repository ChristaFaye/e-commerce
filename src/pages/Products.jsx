import Card from "../components/Card";
import { v4 as uuid } from "uuid";

function Products(){
    const products = [
        {name: "Samsung Galaxy Watch 4", price: 419, src: "../src/img/samsung-watch4.jpg"},
        {name: "Apple Watch Series 3", price: 195, src:"/src/img/apple-watch3.jpeg"},
        {name: "Apple Watch SE", price: 399, src:"/src/img/apple-watchSE.jpeg"},
        {name: "Apple Watch Series 7 ", price: 414, src:"/src/img/apple-watch7.jpeg"},
        {name: "Fitbit Versa 2", price: 199, src:"/src/img/fitibit-versa2.png"},
        {name: "Fitbit Versa 3", price: 229, src:"/src/img/fitibit-versa3.png"},
        {name: "Razer Anzu Sunglasses", price: 149, src:"/src/img/razer-anzu.jpg"},
        {name: "Bose Frames Tenor", price: 309, src:"/src/img/bose-frame-tenor.jpg"},
        {name: "Opttecc Smartwear", price: 309, src:"/src/img/opttecc-smartwear.jpeg"}
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