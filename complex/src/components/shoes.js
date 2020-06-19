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
                    <div className="topArticles">
                        <div className="left">
                        <h1 id='main-header'> LATEST IN SNEAKERS</h1>
                        <img className="kithSneaker" src="../imgs/shoeCollection.jpeg" alt="shoe collection"></img>
                        <p><span class="articleBy">SOLE COLLECTOR |</span>  BY JESSICA MCKINNEY</p>
                        <a href="https://www.complex.com/sneakers/best-kith-sneaker-collaborations/"><p>The Best Kith Sneaker Collaborations</p></a>
                        </div>
                        <div className="right">
                        <img className="georgiaTech" src="../imgs/georgiaTech.jpeg" alt="Georgia Tech"></img>
                        <p><span className="adChoiceSpan"><img className="adChoice" src="../imgs/adChoicespng.png" alt="Ad Choices" />AdChoices </span>Apply online now and earn a spot in our Sneaker Scholarship Program for an opportunity to recieve a full paid scholarship to Georga Institute of Technology</p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="blueBox">
                        <img className="blueShoe" src="../imgs/blueShoe.jpeg" alt="Nike Gravity Shoe"/>
                        <p><span className="articleBy">SNEAKERS |</span>BY MATT WELTY</p>
                        <a href="https://www.complex.com/sneakers/2020/06/puerto-rico-nike-air-force-1-canceled"><p>Nike Cancels 'Puerto Rico' Air Force 1s</p></a>
                    </div>
                    <div className="multiBox">
                        <img className="multiShoe" src="../imgs/multiShoe.jpeg" alt="Multi Colored Shoe"/>
                        <p><span className="articleBy">SNEAKERS |</span>BY RILEY JONES</p>
                        <a href="https://www.complex.com/sneakers/off-white-nike-air-force-1-blue-unreleased"><p>Nike Athlete Mysteriously Receives Unreleased Off-White x Nike Air Force 1s</p></a>
                    </div>
                    <div className="redBox">
                        <img className="redShoe" src="../imgs/redShoe.jpeg" alt="Red Nike Running Shoe"/>
                        <p><span className="articleBy">SNEAKERS |</span>BY BRANDON RICHARD</p>
                        <a href="https://solecollector.com/news/2020/06/nike-n7-sneakers-2020-releaee-date"><p>Nike Reveals This Year's Full N7 Sneaker Lineup</p></a>
                    </div>
                    <div className="blackBox">
                        <img className="blackShoe" src="../imgs/blackShoe.jpeg" alt="Black Nike Force Shoe"/>
                        <p><span className="articleBy">SOLE COLLECTOR |</span> BY VICTOR DENG</p>
                        <a href="https://solecollector.com/news/2020/06/sean-wotherspoon-asics-gel-lyte-3-release-date"><p>Here's When Sean Wotherspoon's Atmos x Asics Collab Drops</p></a>
                    </div>
                    <div className="greenBox">
                        <img className="greenShoe" src="../imgs/greenShoe.jpeg" alt="Green Nike Shoe"/>
                        <p><span className="articleBy">SOLE COLLECTOR |</span>BY VICTOR DENG</p>
                        <a href="https://solecollector.com/news/2020/06/nike-air-max-90-galaxy-release-date-cw6018-001"><p>The Nike Air Max 90 Is Going Galactic</p></a>
                    </div>
                    <div className="whiteBlackRedBox">
                        <img className="whiteBlackRedShoe" src="../imgs/whiteBlackRedShoe.jpeg" alt="Nike Gravity Shoe"/>
                        <p><span className="articleBy">SOLE COLLECTOR |</span>BY VICTOR DENG</p>
                        <a href="https://www.complex.com/sneakers/best-air-jordans-2020-so-far/"><p>The Best Air Jordans of 2020 (So Far)</p></a>
                    </div>
                    <div className="whiteRedBox">
                        <img className="whiteRedShoe" src="../imgs/whiteRedShoe.jpeg" alt="Nike Gravity Shoe"/>
                        <p><span className="articleBy">SOLE COLLECTOR |</span> BY VICTOR DENG</p>
                        <a href="https://solecollector.com/news/2020/06/adidas-yeezy-boost-380-azure-release-date"><p>New Yeezy Boost 380 Reportedly Planned For Fall 2020</p></a>
                    </div>
                    <div className="orangeBrownBox">
                        <img className="orangeBrownShoe" src="../imgs/orangeBrownShoe.jpeg" alt="Nike Gravity Shoe"/>
                        <p><span className="articleBy">SOLE COLLECTOR |</span>BY VICTOR DENG</p>
                        <a href="https://solecollector.com/news/2020/06/dqm-nike-air-max-90-bacon-2020-release-date"><p>Is the 'Bacon' Nike Air Max 90 Finally Coming Back?</p></a>
                    </div>
                    <div className="brownBox">
                        <img className="brownShoe" src="../imgs/brownShoe.jpeg" alt="Brown Nike Shoe"/>
                        <p><span className="articleBy">SNEAKERS |</span> BY MIKE DESTEFANO</p>
                        <a href="https://www.complex.com/sneakers/2020/06/weekend-sneaker-release-guide-6-16-20/"><p>A Complete Guide to This Weekend's Sneaker Releases</p></a>
                    </div>
                    <div className="gravityBox">
                        <img className="gravityShoe" src="../imgs/gravityShoe.jpg" alt="Nike Gravity Shoe"/>
                        <p><span className="adChoiceSpan"><img className="adChoice" src="../imgs/adChoicespng.png" alt="Ad Choices" />AdChoices </span>Enroll in our sweepstakes for a chance to win a pair of 'Nike Air Mag Back To The Future', Marty McFly replicas.</p>
                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}

export default Shoes;