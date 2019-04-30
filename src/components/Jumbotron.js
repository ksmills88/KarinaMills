import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import MyBackgroundImage from '../images/pattern.jpg'
export default class Jumbo extends Component {
    styles={
        jt: {
            backgroundColor: 'transparent', 
        },
        boxAround: {
            borderColor: '#C3BEBF',
            borderWidth: 4,
            borderStyle: 'solid',
            lineHeight: 1,
            paddingBottom: 5,
            paddingTop: 5,
        }
    }
    render() {
        return (
            <div>
            <Jumbotron fluid style={this.styles.jt}>
              <Container fluid style={this.styles.boxAround}>
              {/* <h3 className="lead" style={this.styles.boxAround}>I build cool things in tech. </h3> */}
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
              </Container>
            </Jumbotron>
          </div>
        );
    }
}