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



    return (
        <div className='root-container'>
            <Header />
            {listProduct.map((product) => {
                console.log("product terong map,", product);
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