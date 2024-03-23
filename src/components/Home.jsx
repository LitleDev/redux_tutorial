import React from "react";


function Home (props) {
    return (
        <div>
            <h1>Home Components</h1>
            <div className="cart-wrapper">
                <div className="image-wrapper">
                    <img src="#"/>

                </div>
                <div className="des-wrapper">
                    <span>
                        I_phone
                    </span>
                    <span>
                        Price: 100 RS
                    </span>
                </div>
                <div className="add-to-cart-button">
                    <button>Add to Cart </button>
                </div>
            </div>
        </div>
    )
}


export default Home;


