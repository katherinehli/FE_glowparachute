import {Component} from "react";


function Building({buildingName, address}) {
    return <div></div>
}

class CreateModelPage extends Component {
    render(){
        return (
            <div>
                <h1 className="text-black text-center my-4">Create Model Page</h1>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Deal Name</label>
                        <input type="text" className="form-control" id="deal-name"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Add Buildings</label>
                        <input type="text" className="form-control" id="building-search"></input>
                    </div>

                </form>
            </div>
        );
    }
}

export default CreateModelPage;