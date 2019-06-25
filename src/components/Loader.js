import React, { Component } from 'react'

class Loader extends Component {
    render() {
        return (
            <div className="loader-overlay">
                <div className="lds-roller">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        )
    }
}

export default Loader
