import React from 'react';
import Checkout from '../Checkout/Checkout';
const products = [

    {   productImg : 'image 32.png',
        name: 'Marks Full Cream milk Power foil',
        price:221
    },
    {   productImg : 'image 33.png',
        name: 'Moushum Bay leaves 200 gm',
        price:221
    },
    {   productImg : 'image 34.png',   
        name: 'Onion Local -1kg',
        price:221
    },
    {   productImg : 'image 35.png',
        name: 'Rashid minicate rice -50kg',
        price:221
    },
    {   productImg : 'image 36.png',
        name: 'omera LPG refill 12kg',
        price:221
    },
]
const Home = () => {
    return (
        <div className="row container m-auto py-5">
                {
                    products.map(product => <Checkout product={product} />)
                }
        </div>
    );
};

export default Home;