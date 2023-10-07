import React, { Component } from "react";

class Image extends Component {
    render() {
        return (
            <img
                src={this.props.linkgambar}
                alt="gambar-makanan-nasi "
                width={this.props.lebar}
            />
        )
    }
}
export default Image;