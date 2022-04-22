import React,{useState,useEffect} from 'react';

const View = () => {

    return (
        <div className="container mt-100">
        <div className="row">
            <div className="col-6">
                <div className="details__image">
                    {/* <img src={`/images/${product.image}`} alt="Image"/> */}
                    <img  src="../Tshirt.jpg" alt="Product Image"/>
                </div>
            </div>
            <div className="col-6">
            <div className="details__name">
                Bucket
            </div>
            <div className="details__price">
                <span className="details__actual">
                    {/* {currencyFormatter.format(product.Price,{code:'USD'})} */}
                    Rs 700
                </span>
                <span className="details__discount">
                    {/* {currencyFormatter.format(product.discountPrice,{code:'USD'})} */}
                    Rs 500
                    </span>
            </div>
                
            <div className="details__p">
            
            <br/>
                <h3 className='Offers_detail'>Available Offers</h3>
                <br/>
                <p>Special PriceGet extra 2% off (price inclusive of discount)T&C</p>
                <p>Bank Offer5% off on ICICI Bank Cards, up to Rs 50. On orders of $150 and aboveT&C</p>
                <p>Bank Offer3% Unlimited Cashback on  Axis Bank Credit CardT&C</p>
                <br/>
                <h3 className='Offers_detail'>Services</h3>
                <br/>
                <p>14 Days Return Policy</p>
                <p>Cash on Delivery available</p>
                
            </div>

            <div className="details_info">
                <div className="details__incDec"> 
                {/* <span className="dec"></span>
                <span className="quantity">2</span>
                <span className="inc" ></span> */}
                <button className="btn-default ">Add To Wishlist</button>
             </div>
            </div>

            </div>
        </div>
    </div>

    )
}
export default View;
