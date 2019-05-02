/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
            <a href={project.codebase}><Button color="primary">View Code on GitHub</Button></a>: null}
            <a href={project.deployedURL}><Button color="primary">See the Live App</Button></a>{' '}
            <Button color="primary" onClick={this.props.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TechModal;