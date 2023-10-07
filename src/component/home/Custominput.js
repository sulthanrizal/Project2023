import React, { Component } from "react";

class Custominput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Input Pertama"
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.textinput = React.createRef();

    }
    handleInput() {
        this.setState({ value: "" })
        this.textinput.current.focus();
    }
    handleChange(e) {
        this.setState({ value: e.target.value })
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    ref={this.textinput}
                    onChange={this.handleChange} />
                <button onClick={this.handleInput}>Kirim</button>
            </div>
        )
    }
}
export default Custominput;