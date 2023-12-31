import React, {Component} from "react";
import {Form, FormGroup, Input, Label} from "reactstrap";


function Building({buildingName, address}) {
    return <div></div>
}

class CreateModelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dealName: "",
            buildings: [],
            locationDescription: "",
            numApartmentUnits: 0,
            numParkingSpots: 0,
            parkingSpotsPerUnit: 0,
            //collaborators: [] TODO add later
        };
    }

    createModel = () => {

    }

    handleChange = (e) => {

    }

    render(){
        return (
            <div>
                <h1 className="text-black text-center my-4">Create Model Page</h1>
                <Form>
                    <FormGroup>
                        <Label for="MFRE-buildingName">Deal Name</Label>
                        <Input
                            type="text"
                            id="dealName"
                            name="buildingName"
                            value={this.state.activeItem.buildingName}
                            onChange={this.handleChange}
                            placeholder="Enter Building Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="buildings">Add Buildings</Label>
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
                <button className={"btn btn-primary"} id={"create-model"}>Continue</button>
            </div>
        );
    }
}

export default CreateModelPage;