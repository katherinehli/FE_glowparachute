import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="todo-buildingName">buildingName</Label>
              <Input
                type="text"
                id="todo-buildingName"
                name="buildingName"
                value={this.state.activeItem.buildingName}
                onChange={this.handleChange}
                placeholder="Enter Todo buildingName"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-dealName">dealName</Label>
              <Input
                type="text"
                id="todo-dealName"
                name="dealName"
                value={this.state.activeItem.dealName}
                onChange={this.handleChange}
                placeholder="Enter Todo dealName"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="locationDescription"
                  checked={this.state.activeItem.locationDescription}
                  onChange={this.handleChange}
                />
                locationDescription
              </Label>
            </FormGroup>  
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}