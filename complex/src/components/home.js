import React from 'react';
import Nav from './nav.js';
import Footer from './footer.js';

export default class Home extends React.Component{
    render(){
    return(
        <div>
            <Nav />

            <br />

            <Footer />
        </div>
    )
}
}