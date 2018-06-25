import React, { Component } from "react";
import "./Madslibs.css";

class Madslibs extends Component {
    state = { madslib: "" };

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
        const madslib = this.state.madslib;
        return (
            <div className="Madslibs">
                <header className="Madslibs-header">
                    <h1 className="Madslibs-title">Apéritif</h1>
                </header>
                <p className="Madslibs-intro">
                {madslib}
                </p>
            </div>
        );
    }
}

export default Madslibs;
