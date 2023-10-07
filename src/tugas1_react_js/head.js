import React, { Component } from "react";
import "./head.css"
import { Link } from "react-router-dom";

class Head extends Component {
    render() {
        return (
            <div id="head">
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <center>
                                <td>
                                    <h2>
                                        <Link to="/" className="link">Home</Link>
                                        |
                                    </h2>
                                </td>
                                <td>
                                    <h2>
                                        <Link to="/Menu-makanan" className="link">Makanan</Link>
                                        |
                                    </h2>
                                </td>
                                <td>
                                    <h2>
                                        <Link to="/Menu-minuman" className="link">Minuman</Link>
                                        |
                                    </h2>
                                </td>
                                <td>
                                    <h2>
                                        <Link to="/Kontak" className="link">Kontak</Link>
                                        |
                                    </h2>
                                </td>
                            </center>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Head;
