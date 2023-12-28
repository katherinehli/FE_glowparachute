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
        <ModalHeader toggle={toggle}>MFRE Models</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="MFRE-buildingName">Building Name</Label>
              <Input
                type="text"
                id="MFRE-buildingName"
                name="buildingName"
                value={this.state.activeItem.buildingName}
                onChange={this.handleChange}
                placeholder="Enter Building Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="MFRE-dealName">Deal Name</Label>
              <Input
                type="text"
                id="MFRE-dealName"
                name="dealName"
                value={this.state.activeItem.dealName}
                onChange={this.handleChange}
                placeholder="Enter Deal Name"
              />
            </FormGroup>
            <FormGroup>
              <Label>Location Description</Label>
              <Input
                  type="text"
                  name="locationDescription"
                  value={this.state.activeItem.locationDescription}
                  onChange={this.handleChange}
                  placeholder="Enter Location Description"
                />
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