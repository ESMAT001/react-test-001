import React from 'react';

const AddOption = (props) => {
    return (
        <form className="input-group" onSubmit={(e) => {
            props.handleAddOption(e)
        }}>
            <input id="textBox" className="form-control" type="text" placeholder="Enter text here" />
            <div className="input-group-append">
                <button className="btn btn-success shadow" type="submit">Add</button>
            </div>
        </form>
    )
}

export default AddOption;
