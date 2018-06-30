import React, { PureComponent } from "react";
import madspout from "../madslibs-pout.png";
import "./App.css";
import Madslibs from "./Madslibs/Madslibs";
import Fillin from "./Fillin/Fillin";
import "typeface-roboto";
import Button from '@material-ui/core/Button'

class App extends PureComponent {
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
        this.updateMadslib = this.updateMadslib.bind(this);
    }
    newMadslib() {
        this.setState({
            replacements: [],
            words: [],
            fillinDone: false,
            madslib: "",
            showMadslib: false,
            modifiedMadslib: '',
        });
        this.getMadslib();
    }
    updateMadslib() {
        let modifiedMadslib = this.state.madslib;
        for (let i = 0; i < this.state.words.length; i++) {
            const word = this.state.words[i];
            if (word && word.length > 0) {
                const re = new RegExp(this.state.replacements[i].replace, "ig");
                modifiedMadslib = modifiedMadslib.replace(re, word);
            }
        }
        this.setState({modifiedMadslib});

    }
    handleDone() {
        console.log(this.state.madslib, this.state.replacements, this.state.words, this.state.modifiedMadslib);
        this.setState({ showMadslib: true });
    }
    handleWordChange(i, value) {
        const words = this.state.words.slice();
        words[i] = value;
        const fillinDone =
            words.filter(word => word.length > 0).length === words.length;
        this.setState({ words, fillinDone });
        this.updateMadslib();
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
                        modifiedMadslib={this.state.modifiedMadslib}
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
