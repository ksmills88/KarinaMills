import React, { Component} from 'react';
import { Card, Button, CardImg, CardTitle, 
    CardText, CardDeck, CardBody } from 'reactstrap';
import data from './../projects.json'

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
    DiApple,
} from "react-icons/di";
import TechModal from './TechModal';

class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          currentProject: {}
        };
    
        this.toggle = this.toggle.bind(this);
      }
      handleTechClick(data) {
        this.setState({currentProject: data})
        this.toggle()
      }
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    displayIcons(tech) {
        //project.tech
        return(
            <div>
            {tech.includes('react') ? 
            <DiReact style={{fontSize: 50, color: "#80D8F7"}}/> : null}
            {tech.includes('javascript') ? 
            <DiJavascript style={{fontSize: 50, color: "#F0DB4F"}}/> : null}
            {tech.includes('html') ? 
            <DiHtml5 style={{fontSize: 50, color: "#E44D26"}}/> : null}
            {tech.includes('css') ? 
            <DiCss3 style={{fontSize: 50, color: "#1572B6"}}/> : null}            
            {tech.includes('node') ? 
            <DiNodejsSmall style={{fontSize: 50, color: "#83CD29"}}/> : null}
            {tech.includes('mongo') ? 
            <DiMongodb style={{fontSize: 50, color: "#4FAA41"}}/> : null}
            {tech.includes('mysql') ? 
            <DiMysql style={{fontSize: 50, color: "white"}}/> : null}
            {tech.includes('android') ? 
            <DiAndroid style={{fontSize: 50, color: "#a4c639"}}/> : null}
            {tech.includes('appstore') ? 
            <DiAppstore style={{fontSize: 50, color: "#4DA9F2"}}/> : null}
            {tech.includes('appstore') ? 
            <DiApple style={{fontSize: 50, color: "black"}}/> : null}

            </div>
            



        )
    }

    render() {
    console.log(data)
        return (
            <CardDeck>
                {data.map(project=>(
                    
                    <Card style={{minWidth:300, marginTop:30}} className="image-card">
                {/* <Card style={{minWidth:300, marginTop:30, background: 'radial-gradient(circle, rgb(255, 255, 255, 0.4) 0%, rgb(0, 0, 255, 0.4) 100%)', borderColor: "#71F6DB", borderWidth: 5}}> */}

                <CardBody>
                <CardTitle style={{fontSize: 30, color: 'white'}}>{project.name}</CardTitle>
                {/* <CardImg top src={project.image} alt="Card image cap" 
                    style={{width: '100%',
                    height: 300,
                    objectFit: 'contain'}} /> */}
                    <CardText style={{color: "white", fontSize: 20}}>{project.description}</CardText>
                    <div style={{marginTop: 20, marginBottom: 20}}>{this.displayIcons(project.tech)}</div>
                    <Button style={{backgroundColor: "#E23C61"}}onClick={()=>this.handleTechClick(project)}>more info</Button>
                <a href={project.deployedURL} target="_blank" rel="noopener noreferrer"><Button style={{marginLeft:5, marginRight:5, backgroundColor: "#2A6771"}}>see project</Button></a>
                {project.codebase ? 
                    <a href={project.codebase} target="_blank" rel="noopener noreferrer"><Button style={{backgroundColor: "#ED6F2E"}}>github</Button></a> : null
                }
                </CardBody>
            </Card>
                ))}
                
            {/* <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card> */}
            <TechModal isOpen={this.state.modal} toggle={this.toggle} project={this.state.currentProject}/>

            </CardDeck>
        );
    }
};

export default Images;