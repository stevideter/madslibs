import React, { Component } from "react";
import "./Fillin.css";
import MyTextInput from "../TextInput/TextInput";
import Button from '@material-ui/core/Button'
class Fillin extends Component {

    renderTextInput(i) {
        const inputField = this.props.replacements[i];
        return (
            <MyTextInput
                key={i}
                index={i}
                label={inputField.partOfSpeech || 'noun'}
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
                <h1>Fill in the following</h1>
                {errorMsg}
                <ul>{words}</ul>
                <Button variant="raised" disabled={!this.props.fillinDone} onClick={this.props.handleDone}>done</Button>
            </div>
        );
    }
}

export default Fillin;
