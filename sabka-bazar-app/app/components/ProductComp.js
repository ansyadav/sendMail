
import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';


const ProductComp = (props) => {
    const [productItemsobject, setProductItems] = useState([]);

    /**
     * Similar to componentDidMount and componentDidUpdate:
     */
    useEffect(() => {
        productsGetCall();
    }, []);

    /**
   * function for products list data
   */
    const productsGetCall = () => {
        axios.get('http://localhost:5000/products')
            .then((response) => {
                // Success 
                if (response && response.data) {
                    setProductItems(
                        ...productItemsobject,
                        response.data
                    )
                }
            })
            .catch((error) => {
                alert("Products list get Api Failed to fetch Data" + error)
            })
    }

    /**
     * Code for load Dyanamic Image Urls without importing each image files
     */
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '../images/')] = r(item); });
        return images;
    }
    /**
     * Use Importall and webpack Require.context('directory', useSubdirectories: boolean, regExp)
     */
    const images = importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));

    return (
        <div className="productWrap">
            <section className="main-product-container floatcontainer">
                <div className="left-product-section">
                    <ul>
                        <li>
                            <a href="#" >Fruits & Vegetables</a>
                        </li>
                        <li>
                            <a href="#" >Bakery Cakes and Dairy</a>
                        </li>
                        <li>
                            <a href="#" >Beverages</a>
                        </li>
                        <li>
                            <a href="#" >Beauty and Hygiene</a>
                        </li>
                        <li>
                            <a href="#" >Baby Care</a>
                        </li>
                    </ul>
                </div>
                <div className="right-product-section">
                    {
                        productItemsobject.map(item => <div className="product-details-box" key={item.id}>
                            <h5>{item.name}</h5>
                            <img src={images[item.imageURL]} alt={item.sku} />
                            <p>{item.description}</p>
                            <div className="price-buy-now">
                                <span>MRP Rs.{item.price}</span>
                                <button className="btn" onClick={() => props.addToCartFunction(item)}>Buy Now</button>
                            </div>
                        </div>)
                    }
                </div>

            </section>

        </div>
    )
}
export default ProductComp;