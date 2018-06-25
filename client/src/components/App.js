import React, { Component } from "react";
import madspout from "../madslibs-pout.png";
import "./App.css";
import Madslibs from "./Madslibs/Madslibs";
import Fillin from "./Fillin/Fillin";

class App extends Component {
    constructor(props) {
        super(props);
        const replacements = ["eyes", "see", "focus", "white"];
        this.state = {
            replacements,
            words: Array(replacements.length).fill("")
        };
        this.handleWordChange = this.handleWordChange.bind(this);
    }
    handleWordChange(i, value) {
        console.log(i, value);
        const words = this.state.words.slice();
        words[i] = value;
        this.setState({ words });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={madspout} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Madslibs!</h1>
                </header>
                <Fillin
                    words={this.state.words}
                    handleWordChange={this.handleWordChange}
                />
                <Madslibs
                    words={this.state.words}
                    replacements={this.state.replacements}
                />
                <div>{this.state.words}</div>
            </div>
        );
    }
}

export default App;
