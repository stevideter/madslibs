import React, { PureComponent } from "react";
import "./TextInput.css";
import TextInput  from '@material-ui/core/TextField';

class MyTextInput extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        // this.setState({ value: event.target.value });
        this.props.onChange(this.props.index, event.target.value);
    }

    render() {
        return (
            <div className="TextInput-container">
                <TextInput
                    label={this.props.label || 'word' }
                    type="text"
                    className="TextInput-input"
                    onChange={this.handleChange}
                    // onChange={this.props.onChange}
                    value={this.props.value}
                />
            </div>
        );
    }
}

export default MyTextInput;
