import React, { Component } from 'react';
import Jumbo from '../components/Jumbotron';
import MyNav from '../components/Nav';
import MyBackgroundImage from '../images/pattern.jpg'

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

export default class Home extends Component {

    styles={
        bg: {
            backgroundImage: `url(${MyBackgroundImage})`,
            backgroundSize: 'cover' ,
            minHeight: 1000           
        }
    }
    render() {
        return (
            <div className="Home" style={this.styles.bg} >
            {/* add jumbotron or other here */}
            <MyNav />
            <Jumbo />
            <div >
                <DiReact style={{fontSize: 50, color: "#80D8F7"}}/>
                <DiHtml5 style={{fontSize: 50, color: "#E44D26"}}/>
                <DiCss3 style={{fontSize: 50, color: "#1572B6"}}/>
                <DiJavascript style={{fontSize: 50, color: "#F0DB4F"}}/>
                <DiNodejsSmall style={{fontSize: 50, color: "#83CD29"}}/>
                <DiMongodb style={{fontSize: 50, color: "#4FAA41"}}/>
                <DiMysql style={{fontSize: 50, color: "#00618A"}}/>

                {/* <DiAppstore style={{fontSize: 50, color: "black"}}/>
                <DiAndroid style={{fontSize: 50, color: "black"}}/> */}
            </div>
            </div>
        );
    }
}