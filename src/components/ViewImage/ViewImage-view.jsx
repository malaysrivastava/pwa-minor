import React,{useState,useEffect} from 'react';

const View = ({pro,addtoWish}) => {

    return (
        <div className="container mt-100" style={{'margin-top':'2rem','margin-bottom':'2rem'}}>
        <div className="row">
            <div className="col-6">
                <div className="details__image">
                    {/* <img src={`/images/${product.image}`} alt="Image"/> */}
                    <img  src={pro[0].img} alt="Product Image"/>
                </div>
            </div>
            <div className="col-6">
            <div className="details__name">
                <p>{pro[0].title}</p>
                <small>({pro[0].categories})</small>
            </div>
            <div className="details__price">
                <span className="details__discount">
                    {/* {currencyFormatter.format(product.discountPrice,{code:'USD'})} */}
                    <p>Price: ₹{pro[0].price}</p>
                    </span>
            </div>
                
            <div className="details__p">
            
            <br/>
                <h3 className='Offers_detail'> Product Description</h3>
                
                <p>{pro[0].desc}</p>
                <br/>
                
                <h3 className='Offers_detail'>About</h3>
                <br/>
                {pro[0].address &&
                <p>Hostel address: {pro[0].address}</p>
                }
                <p>Owner: {pro[0].userName}</p>
                {pro[0].phone &&
                <p>Phone number: {pro[0].phone}</p>
                }

                
            </div>

            <div className="details_info">
                <div className="details__incDec"> 
                {/* <span className="dec"></span>
                <span className="quantity">2</span>
                <span className="inc" ></span> */}
                <button className="btn-default" onClick={addtoWish}>Add To Wishlist</button>
             </div>
            </div>

            </div>
        </div>
    </div>

    )
}
export default View;
