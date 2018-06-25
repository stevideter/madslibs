import React, { Component } from "react";
import "./Madslibs.css";

class Madslibs extends Component {
    constructor(props) {
        super(props);
        this.state = { madslib: "" };
    }

    componentDidMount() {
        this.getMadslib();
    }

    getMadslib = () => {
        fetch("/api/madslib")
            .then(res => res.json())
            .then(madslib => {
                console.log(madslib);
                this.setState({ madslib: madslib.madslib});
            })
            .catch(err => {
                console.log(err);
                this.setState({madslib: "i let you know me, see me"});
            });
    };
    render() {
        console.log('render');
        let modifiedMadslib = this.state.madslib;
        console.log(this.props.words);
        for (let i = 0; i < this.props.words.length; i++) {
            const word = this.props.words[i];
            if (word && word.length > 0) {
                console.log(word);
                const re = new RegExp(this.props.replacements[i], "ig");
                modifiedMadslib = modifiedMadslib.replace(re, word);
            }
            console.log(modifiedMadslib);
        }
        return (
            <div className="Madslibs">
                <header className="Madslibs-header">
                    <h1 className="Madslibs-title">Apéritif</h1>
                </header>
                <p className="Madslibs-intro">
                {modifiedMadslib}
                </p>
            </div>
        );
    }
}

export default Madslibs;
