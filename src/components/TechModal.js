/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardImg } from 'reactstrap';

class TechModal extends React.Component {
  displayTechList(techArray) {
    //   techArray.split(',')
console.log(techArray)
  }
  render() {
      console.log(this.props.project.tech)
      const {project} = this.props
      const technology = this.props.project.tech
      console.log(technology)
    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>{project.name}</ModalHeader>
          {project.image ? <CardImg top src={project.image} alt="Card image cap" 
                    style={{width: '100%',
                    height: 300,
                    objectFit: 'contain'}} /> :null}
          <ModalBody>
              {project.description}
              {this.displayTechList(technology)}
              {/* <ul>
                  {technology.map(tech=>(
                      <li>{tech}</li>
                  ))}
              </ul> */}
          </ModalBody>
          <ModalFooter>
            {project.codebase ? 
            <a href={project.codebase} target="_blank" rel="noopener noreferrer"><Button color="primary">View Code on GitHub</Button></a>: null}
            {project.deployedURL ? 
            <a href={project.deployedURL} target="_blank" rel="noopener noreferrer"><Button color="primary">See the Live App</Button></a> :null}{' '}
            <Button color="primary" onClick={this.props.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TechModal;