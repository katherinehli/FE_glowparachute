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
            <div className={"my-auto p-2"} style={{height: "100%"}}>
                <h1 className="text-black text-center my-4">Create Model Page</h1>
                <Form>
                    <FormGroup>
                        <Label for="MFRE-buildingName">Deal Name</Label>
                        <Input
                            type="text"
                            id="dealName"
                            name="dealName"
                            value={this.state.dealName}
                            onChange={this.handleChange}
                            placeholder="Enter Deal Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="buildings">Add Buildings</Label>
                        <Input
                            type="text"
                            id="MFRE-dealName"
                            name="dealName"
                            onChange={this.state.handleChange}
                            placeholder="Building Address"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Location Description</Label>
                        <Input
                            type="text"
                            name="locationDescription"
                            value={this.state.locationDescription}
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