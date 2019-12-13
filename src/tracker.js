import React from 'react';
import InputTracker from './inputTracker';

const Tracker = () => {
    return(
        <div className="row">
            <div classname="col-lg-4">
                <InputTracker/>
                <h2>Expense Input</h2>

            </div>
            <div classname= "col-lg-8">
                <h2> Display Budget Info</h2>
            </div>

        </div>

    )


}

export default Tracker