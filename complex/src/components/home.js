import React from 'react';
import '../css/home.css'
import Nav from './nav.js';
import Footer from './footer.js';
import Top from './topstories.js';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });


export default class Home extends React.Component{
    render(){
    return(
        <div>
        <div className='container'>
            <Nav />

            <div className='article-container'>

        <h1 id='main-header'> The Enduring Joy of Run the Jewels</h1>
        <p1 id='sub-header'> MUSIC |    BY JESSICA MCKINNEY</p1>
        <br />
            <div className='img-container'>
            <img id='main-img' src='https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/z0x23tnnhtpr6owbib0e/rtj-by-tim-saccenti-2 ' />
            </div>
            </div>
           

      


        </div>
        <div className='top-container'>

        <Top />
        </div>

            <Footer />
        </div>
    )
}
}