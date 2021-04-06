import React from 'react';
import { useHistory } from 'react-router';
import './AllProduct.css'
const Checkout = ({product}) => {

    const history = useHistory()
    const handleLogin = () =>{
        history.push('/checkout');
    }
    return (
        <div className="col-lg-4 col-md-4 col-12 p-0">
              <div className="card m-2">
                 <div className="card-body p-1">
                 <img   className="img-fluid" src={product.productImg} />
                 </div>
                 <div className="card-footer py-2">
                 <h6 className="text-left">{product.name}</h6>
                    <div className="d-flex mt-3">
                        <h5 className="font-weight-bold">$ {product.price}</h5> <a href="#" className="btn btn-info ml-auto" onClick={handleLogin}>Buy Now</a>
                    </div>
                 </div>
            </div>
        </div>
    );
}; 

export default Checkout;