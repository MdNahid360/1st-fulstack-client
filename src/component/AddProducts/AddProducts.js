import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import grid from '../../img/icons/grid 1.png';
import edit from '../../img/icons/edit 1.png';
import plus from '../../img/icons/plus 1.png';



const AddProducts = () => {
    const { register, handleSubmit, watch ,errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

   


    const onSubmit = data => {
        console.log(data);
        const productData = {
            price: data.price,
            name: data.name,
            imageUrl: imageUrl
        };
        const url = `http://localhost:8080/addProduct`;
        console.log(productData);
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => setImageUrl('server site response', res));
    };
    const handleProductImgUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a66ad8d75837f94d190abac68fad24ce')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
                imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    

    return (
        <div className=" bak ">

             <div className="d-lg-flex">
             <div className="sidebar">
            
            <a className="text-white font-weight-bold pb-3 border-bottom" href="../Home/Home.js"><h4>E market</h4></a>
                                <ul className="mt-3 " style={{listStyle:'none', marginRight: '60px', float: 'right'}}>
                                    <li className="list-styled  py-2  ">
                                        <a href="#" className="text-white text-decoration-none"><span><img src={grid} className="img-fluid" style={{width:'25px'}} alt=""/></span> <span>Manage Product</span></a>
                                    </li>
                                    <li className="list-styled  py-2  ">
                                        <a href="#" className="text-white text-decoration-none"><span><img src={plus} className="img-fluid" style={{width:'25px'}} alt=""/></span> <span>Add Product</span></a>
                                    </li> 
                                    <li className="list-styled  py-2  ">
                                        <a href="#" className="text-white text-decoration-none"><span><img src={edit} className="img-fluid" style={{width:'25px'}} alt=""/></span> <span>Edit Product</span></a>
                                    </li>
                                </ul>
                        </div>
             <div className="row container  mt-5 m-auto">
                  <div className="col-lg-4 col-md-4 col-12">
                       
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                      
                      
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                           <br/><br/><br/><br/>
                             <div className="card mt-5 crd">
                            
                             <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <label className="font-weight-bold  text-left float-left  text-dark">
                                        product Name
                                    </label>
                                <input className="form-control" name="name" defaultValue="Product Name"/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                <label className="font-weight-bold  text-left float-left text-dark">
                                       Wight
                                    </label>
                                <input className="form-control mt-3" name="wight" defaultValue="Product Wight"/>
                                </div>
                            </div>
                     
                      
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                <label className="font-weight-bold  text-left float-left mt-3 text-dark">
                                        Add Price
                                    </label>
                                <input className="form-control mt-3" name="price" defaultValue="Product Price"/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                <label className="font-weight-bold  text-left float-left mt-3 text-dark">
                                       App Photo
                                    </label>
                        <input className="form-control mt-3" name="exampleRequired" type="file" onChange={handleProductImgUpload} />
                                </div>
                            </div>
                     
                      
                            </div>
                             </div>
                               <input  type="submit" value="Submit" className="btn btn-success mt-3 nh px-4 "/>
                        </form>
                    
                      
                  </div>
             </div>
             </div>


        </div>
    );
};

export default AddProducts;