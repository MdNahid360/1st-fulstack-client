import React from 'react';

const Checkout = ({product}) => {
    return (
        <div className="col-md-3">
               <img style={{height: '300px'}}  src={require(`../../img/Products/${product.productImg}`)} />
               <h5>{product.name}</h5>
        </div>
    );
};

export default Checkout;