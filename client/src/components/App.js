import React, { Component } from "react";
import madspout from "../madslibs-pout.png";
import "./App.css";
import Madslibs from "./Madslibs/Madslibs";
import Fillin from "./Fillin/Fillin";
import "typeface-roboto";
import Button from '@material-ui/core/Button'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            replacements: [],
            words: [],
            fillinDone: false,
            madslib: "",
            showMadslib: false
        };
        this.handleWordChange = this.handleWordChange.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.newMadslib = this.newMadslib.bind(this);
    }
    newMadslib() {
        this.setState({
            replacements: [],
            words: [],
            fillinDone: false,
            madslib: "",
            showMadslib: false
        });
        this.getMadslib();
    }
    handleDone() {
        this.setState({ showMadslib: true });
    }
    handleWordChange(i, value) {
        const words = this.state.words.slice();
        words[i] = value;
        const fillinDone =
            words.filter(word => word.length > 0).length === words.length;
        this.setState({ words, fillinDone });
    }
    componentDidMount() {
        this.getMadslib();
    }

    getMadslib = () => {
        fetch("/api/madslib")
            .then(res => res.json())
            .then(madslib => {
                console.log("got ", madslib);
                this.setState({
                    madslib: madslib.madslib,
                    replacements: madslib.replacements,
                    words: Array(madslib.replacements.length).fill("")
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({ madslib: "i let you know me, see me" });
            });
    };
    render() {
        const showMadslib = this.state.showMadslib;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={madspout} className="App-logo" alt="logo" />
                    <h1 className="App-title">
                        Welcome Fannibals to Madslibs!
                    </h1>
                </header>
                {showMadslib && (
                    <div>
                    <Madslibs
                        words={this.state.words}
                        replacements={this.state.replacements}
                        madslib={this.state.madslib}
                    />
                    <Button variant="raised" onClick={this.newMadslib}>Another!</Button>
                    </div>
                )}
                {!showMadslib && (

                <Fillin
                    words={this.state.words}
                    handleWordChange={this.handleWordChange}
                    replacements={this.state.replacements}
                    fillinDone={this.state.fillinDone}
                    handleDone={this.handleDone}
                />
                )}
            </div>
        );
    }
}

export default App;
