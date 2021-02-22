import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';


const HomeComp = () => {
    const [bannersObject, setBannersObject] = useState([]);
    const [productsObject, setProductsObject] = useState([]);
    const banners = [
        {
            "bannerImageUrl": '../images/offers/offer1.jpg',
            "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
            "isActive": true,
            "order": 1,
            "id": "5b6c38156cb7d770b7010ccc"
        },
        {
            "bannerImageUrl": '../images/offers/offer2.jpg',
            "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
            "isActive": true,
            "order": 2,
            "id": "5b6c38336cb7d770b7010ccd"
        },
        {
            "bannerImageUrl": '../images/offers/offer3.jpg',
            "bannerImageAlt": "Independence Day Deal - Rs99 off on domex",
            "isActive": true,
            "order": 3,
            "id": "5b6c38456cb7d770b7010cce"
        },
        {
            "bannerImageUrl": '../images/offers/offer4.jpg',
            "bannerImageAlt": "Independence Day Deal - Rs99 off on bodywash",
            "isActive": true,
            "order": 4,
            "id": "5b6c38576cb7d770b7010ccf"
        },
        {
            "bannerImageUrl": '../images/offers/offer5.jpg',
            "bannerImageAlt": "Independence Day Deal - Rs70 off on tea",
            "isActive": true,
            "order": 5,
            "id": "5b6c386b6cb7d770b7010cd0"
        }
    ]

    const products = [
        {
            "name": "Beverages",
            "key": "beverages",
            "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
            "enabled": true,
            "order": 3,
            "imageUrl": "../images/category/beverages.png",
            "id": "5b675e5e5936635728f9fc30"
        },
        {
            "name": "Bakery Cakes and Dairy",
            "key": "bakery-cakes-dairy",
            "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
            "enabled": true,
            "order": 2,
            "imageUrl": "../images/category/bakery.png",
            "id": "5b6899123d1a866534f516de"
        },
        {
            "name": "Beauty and Hygiene",
            "key": "beauty-hygiene",
            "description": "Buy beauty and personal care products online in India at best prices.",
            "enabled": true,
            "order": 4,
            "imageUrl": "../images/category/beauty.png",
            "id": "5b68994e3d1a866534f516df"
        },
        {
            "name": "Baby Care",
            "key": "baby",
            "description": "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
            "enabled": true,
            "order": 5,
            "imageUrl": "../images/category/baby.png",
            "id": "5b6899683d1a866534f516e0"
        },
        {
            "name": "Seafood",
            "key": "seafood",
            "description": "Great place to buy fresh seafood.",
            "enabled": false,
            "order": -1,
            "id": "5b68997d3d1a866534f516e1"
        },
        {
            "name": "Fruits & Vegetables",
            "key": "fruit-and-veg",
            "description": "A variety of fresh fruits and vegetables.",
            "enabled": true,
            "order": 1,
            "imageUrl": "../images/category/fruits.png",
            "id": "5b6899953d1a866534f516e2"
        }
    ]

    /**
     * Similar to componentDidMount and componentDidUpdate:
     */
    useEffect(() => {
        setBannersObject(
            ...bannersObject,
            banners
        )
        setProductsObject(
            ...productsObject,
            products
        )
    }, []);

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
        <div className="homeWrap">
            <section className="slider-section">
                <Carousel autoPlay>
                    {bannersObject.map(item => {
                        return (
                            <div key={item.order}>
                                <img src={images[item.bannerImageUrl]} alt={item.bannerImageAlt} />
                            </div>
                        )
                    })}
                </Carousel>
            </section>
            <section className="product-info-list">
                <ul>
                    {
                        productsObject.map(item => item.enabled && <li key={item.key}>
                            <div className="floatcontainer">
                                <div className="product-image">
                                    <img src={images[item.imageUrl]} alt={item.name} />
                                </div>
                                <div className="product-info">
                                    <h2>{item.name}</h2>
                                    <span>{item.description}</span>
                                    <a href="#" className="btn">Explore {item.key}</a>
                                </div>
                            </div>
                        </li>)
                    }

                </ul>

            </section>
        </div>
    )
}
export default HomeComp;