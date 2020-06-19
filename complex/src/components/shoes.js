import React from 'react';
import '../css/shoes.css';
import Nav from '../components/nav';
import Footer from '../components/footer';
class Shoes extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <div className="headArticle">
                    <h1 id='main-header'> LATEST IN SNEAKERS</h1>
                    <p1 id='sub-header'> SOLE COLLECTOR |    BY JESSICA MCKINNEY</p1>
                </div>
                <div className="box">
                    <div>
                        <img className="blueShoe" src="../imgs/blueShoe.jpeg" alt="Nike Gravity Shoe"/>
                        <p>this is info on this shoe</p>
                    </div>
                    <div>
                        <img className="multiShoe" src="../imgs/multiShoe.jpeg" alt="Multi Colored Shoe"/>
                        <p>this is info on this shoe</p>
                    </div>
                    <div>
                        <img className="redShoe" src="../imgs/redShoe.jpeg" alt="Red Nike Running Shoe"/>
                        <p>this is info on this shoe</p>
                    </div>
                    <div>
                        <img className="blackShoe" src="../imgs/blackShoe.jpeg" alt="Black Nike Force Shoe"/>
                        <p>this is info on this shoe</p>
                    </div>
                    <div>
                        <img className="greenShoe" src="../imgs/greenShoe.jpeg" alt="Green Nike Shoe"/>
                        <p>this is info on this shoe</p>
                    </div>
                    <div>
                        <img className="whiteBlackRedShoe" src="../imgs/whiteBlackRedShoe.jpeg" alt="Nike Gravity Shoe"/>
                        <p>this is info on this shoe</p>
                    </div>
                    <div>
                        <img className="whiteRedShoe" src="../imgs/whiteRedShoe.jpeg" alt="Nike Gravity Shoe"/>
                        <p>this is info on this shoe</p>
                    </div>
                    <div>
                        <img className="orangeBrownShoe" src="../imgs/orangeBrownShoe.jpeg" alt="Nike Gravity Shoe"/>
                        <p>this is info on this shoe</p>
                    </div>
                    <div>
                        <img className="brownShoe" src="../imgs/brownShoe.jpeg" alt="Nike Gravity Shoe"/>
                        <p>this is info on this shoe</p>
                    </div>
                    <div>
                        <img className="gravityShoe" src="../imgs/gravityShoe.jpg" alt="Nike Gravity Shoe"/>
                        <p>this is info on this shoe</p>
                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}

export default Shoes;