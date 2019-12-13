import React, {Component} from 'react';
 
class InputTracker extends Component {
    render() {
        return(
            <div className = "card-card-body nb-3">
                <label>Money Tracker</label>
                <form>
                    <input
                     className= "form control"
                     type="number"
                    />

                    <button className= "btn btn-dark btn-block">Submit</button>
                    
                   



                </form>
            
            </div>
        )
    }
}

export default InputTracker