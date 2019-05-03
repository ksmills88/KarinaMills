import React, { Component } from 'react';
import Jumbo from '../components/Jumbotron';
import MyNav from '../components/Nav';
import {Jumbotron} from 'reactstrap'
import MyBackgroundImage from '../images/mountains.jpg'

import { DiCss3, 
    DiHtml5, 
    DiReact, 
    DiJavascript, 
    DiBootstrap, 
    DiAppstore, 
    DiAndroid, 
    DiMongodb,
    DiMysql,
    DiNodejsSmall,
} from "react-icons/di";
import Images from '../components/Images';

export default class Home extends Component {

    styles={
        bg: {
            backgroundImage: `url(${MyBackgroundImage})`,
            backgroundSize: 'cover' ,
            // marginLeft: -200,
            // marginRight: -200,
            minHeight: 1500,
        },
        imgArea: {
            paddingLeft:30,
            paddingRight:30           
        }
    }
    render() {
        return (
            <div className="Home" style={this.styles.bg} >
            {/* add jumbotron or other here */}
            {/* <MyNav /> */}
            <Jumbo />
         
                
                {/* <DiReact style={{fontSize: 50, color: "#80D8F7"}}/>
                <DiHtml5 style={{fontSize: 50, color: "#E44D26"}}/>
                <DiCss3 style={{fontSize: 50, color: "#1572B6"}}/>
                <DiJavascript style={{fontSize: 50, color: "#F0DB4F"}}/>
                <DiNodejsSmall style={{fontSize: 50, color: "#83CD29"}}/>
                <DiMongodb style={{fontSize: 50, color: "#4FAA41"}}/>
                <DiMysql style={{fontSize: 50, color: "#00618A"}}/> */}

                {/* <DiAppstore style={{fontSize: 50, color: "black"}}/>
                <DiAndroid style={{fontSize: 50, color: "black"}}/> */}
                <div style={this.styles.imgArea}>
                    <Images />
                </div>
            {/* <a style={{backgroundColor:'black',color:'white',textDecoration:'none',padding:'4px 6px',fontFamily:'-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif',fontSize:12,fontWeight:'bold',lineHeight:'1.2',display:'inline-block',borderRadius:3, width: 190}} href="https://unsplash.com/@stairhopper?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Alex Holyoake"><span style={{display:'inline-block',padding:'2px 3px'}}><svg xmlns="http://www.w3.org/2000/svg" style={{height:12,width:'auto',position:'relative',verticalAlign:'middle',top:'-2px',fill:'white'}}><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style={{display:'inline-block',padding:'2px 3px'}}>Alex Holyoake</span></a> */}
                <Jumbotron className="footer">
                    <h3>Portfolio created with <DiReact style={{color:"#80D8F7", fontSize: 35}}/></h3>
                    <p>
                        Photo by Tom Gainor on Unsplash<br/>
                        Copyright © 2019 Karina Mills
                    </p>
                </Jumbotron>
            </div>
        );
    }
}