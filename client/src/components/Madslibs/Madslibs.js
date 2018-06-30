import React, { PureComponent } from "react";
import "./Madslibs.css";

class Madslibs extends PureComponent {

    render() {
        return (
            <div className="Madslibs">
                <header className="Madslibs-header">
                    <h1 className="Madslibs-title">Madslibs</h1>
                </header>
                <p className="Madslibs-intro">
                {this.props.modifiedMadslib}
                </p>
            </div>
        );
    }
}

export default Madslibs;
