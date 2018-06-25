import React, { Component } from "react";
import "./Madslibs.css";

class Madslibs extends Component {

    render() {
        let modifiedMadslib = this.props.madslib;
        for (let i = 0; i < this.props.words.length; i++) {
            const word = this.props.words[i];
            if (word && word.length > 0) {
                const re = new RegExp(this.props.replacements[i].replace, "ig");
                modifiedMadslib = modifiedMadslib.replace(re, word);
            }
        }
        return (
            <div className="Madslibs">
                <header className="Madslibs-header">
                    <h1 className="Madslibs-title">Madslibs</h1>
                </header>
                <p className="Madslibs-intro">
                {modifiedMadslib}
                </p>
            </div>
        );
    }
}

export default Madslibs;
