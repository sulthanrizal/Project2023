import React, { Component } from "react";

import Head from "./head";
import "./kontak.css"

class Menukontak extends Component {
    render() {
        return (
            <div id="kontak_bg">
                <Head />
                <div className="kontak">
                    <center>
                        <h3>JL.Swadaya IV,Pd.Rangon,Cipayung,Kota Jakarta Timur,Daerah Khusus Ibukota Jakarta 13860{""}</h3>
                        <p>081312345678 </p>
                    </center>
                </div>
            </div>
        )
    }
}
export default Menukontak;