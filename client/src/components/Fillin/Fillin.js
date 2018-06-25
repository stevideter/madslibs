import React, { Component } from "react";
import "./Fillin.css";
import MyTextInput from "../TextInput/TextInput";

class Fillin extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    renderTextInput(i) {
        return (
            <MyTextInput
                key={i}
                index={i}
                label='noun'
                value={this.props.words[i]}
                onChange={this.props.handleWordChange}
            />
        );
    }

    render() {
        if (this.props.errorMsg) {
            var errorMsg = (
                <div className="errorMsg">{this.props.errorMsg}</div>
            );
        }
        const words = [];
        for (let i = 0; i < this.props.words.length; i++) {
            words.push(this.renderTextInput(i));
        }
        return (
            <div className="Fillin">
                {errorMsg}
                <ul>{words}</ul>
            </div>
        );
    }
}

export default Fillin;
