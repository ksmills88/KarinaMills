import React, { Component } from 'react';
import { Jumbotron, Container, Col, Row } from 'reactstrap';
import MyBackgroundImage from '../images/pattern.jpg';

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


export default class Jumbo extends Component {
    styles={
        jt: {
            backgroundColor: 'transparent'
            // backgroundColor: 'white', 
            // opacity: .5
        },
        // boxAround: {
        //     borderColor: '#1572B6',
        //     borderWidth: 4,
        //     borderStyle: 'solid',
        //     lineHeight: 1,
        //     paddingBottom: 5,
        //     paddingTop: 5,
        //     width: 150,
        // },
        colBox: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // borderColor: '#1572B6',
            // borderWidth: 4,
            // borderStyle: 'solid',
            textAlign: 'center',
            // backgroundColor: 'pink',
            // opacity: 0.6,
            marginLeft: 20,
            marginRight: 20,
            minWidth: 200,
            marginTop: 20,
            marginBottom: 20,
        }
    }
    render() {
        return (
            <div>
            <Jumbotron fluid style={this.styles.jt}>
              <Container fluid >
              <h1 style={{fontSize: 60}} className="hover-uppercase">karina mills</h1>
              <h3>&lt; WebDeveloper /&gt;</h3>
              {/* <h3 className="lead" style={this.styles.boxAround}>I build cool things in tech. </h3> */}
              <Row>
                {/* <Col style={this.styles.colBox}>
                    <div style={this.styles.boxAround}>
                        <h3 className="lead" style={this.styles.tag1}>be creative.</h3>
                        <h3 className="lead" style={this.styles.tag2}>be kind.</h3>
                        <h3 className="lead" style={this.styles.tag3}>be a 
                            <strong><span style={{color: 'red'}}>  u</span>
                            <span style={{color: 'orange'}}>n</span>
                            <span style={{color: 'yellow'}}>i</span>
                            <span style={{color: 'green'}}>c</span>
                            <span style={{color: 'blue'}}>o</span>
                            <span style={{color: 'purple'}}>r</span>
                            <span style={{color: 'pink'}}>n</span></strong>.
                        </h3>
                    </div>
                </Col> */}
                <Col style={this.styles.colBox}>
                <Row style={{display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',}}>
                    <DiReact style={{fontSize: 50, color: "#80D8F7"}}/>
                    <DiHtml5 style={{fontSize: 50, color: "#E44D26"}}/>
                    <DiCss3 style={{fontSize: 50, color: "#1572B6"}}/>
                    <DiJavascript style={{fontSize: 50, color: "#F0DB4F"}}/>
                    <DiNodejsSmall style={{fontSize: 50, color: "#83CD29"}}/>
                    <DiMongodb style={{fontSize: 50, color: "#4FAA41"}}/>
                    <DiMysql style={{fontSize: 50, color: "#00618A"}}/>
                    </Row>
                    </Col>
                </Row>
              </Container>
            </Jumbotron>
          </div>
        );
    }
}