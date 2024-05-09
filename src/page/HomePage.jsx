import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { fetchProductList } from '../services/Product.service';

const HomePage = () => {
    const [listProduct, setListProduct] = useState([]);

    const getListProduct = async () => {
        const data = await fetchProductList();
        setListProduct(data)
    }

    useEffect(() => {
        getListProduct();
    }, []);


    console.log("continue here");
    return (
        <div className='root-container'>
            <Header />
            <h1>hello</h1>
            {listProduct.map((product) => {
                return <div key={product.id}>
                    <img src={product.img1} />
                    <h1>{product.name}</h1>
                    <p>{product.price}VND</p>
                </div>
            })}
            HomePage
        </div>
    )
}

export default HomePage