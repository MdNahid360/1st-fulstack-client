import React, { useEffect, useState } from 'react';
import AddProduct from '../AllProduct/AllProduct';
import searct from '../../img/icons/search 1.png'
import { Link } from 'react-router-dom';
  
const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://obscure-dawn-32138.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const style1 = {
        width:'320px',
 
    }
    const style2 = {
        margin:'auto',
        display:'flex',
        justifyContent: 'center'

    }
    const style3 = {
       borderLeft:'none'

    }
    const style4 = {
        borderRight:'none'


    }
    return (
            <div>
               
  

       <div className="box container">
            <div style={style2}>
                 
            <div className="input-group mb-3" style={style1}>
            <div className="input-group-prepend bg-white">
                <span className="input-group-text bg-white" style={style4} id="basic-addon1">
                    <img src={searct} className="img-fluid" style={{width:'20px'}}/>
                </span>
            </div>
             <input style={{borderLeft:'none'}} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
             <div className="input-group-append">
                <span className="input-group-text btn bg-success px-4 text-white" id="basic-addon1">Search</span>
            </div>
            </div>


            </div>
            <div className="row container m-auto py-5">
                {
                    products.map(product => <AddProduct  product={product}/>)
                }
        </div>
       </div>

            </div>
    );
};

export default Home;