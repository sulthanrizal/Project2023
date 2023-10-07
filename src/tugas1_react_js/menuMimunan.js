import React, { Component } from "react";

import Daftarminuman from "../Lib_tugass/Daftar_minuman";
import Head from "./head";

class Menuminuman extends Component {
    render() {
        return (
            <div>
                <Head />
                <h3>Daftar Minuman Favourite</h3>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            {Daftarminuman.map((data, index) => {
                                return (
                                    <td key={index}>
                                        <center>
                                            <img
                                                src={data.img}
                                                alt="Product Minuman"
                                                width="150"
                                                height="100"
                                            />
                                            <p>{data.NamaMinuman}</p>
                                            <p>Harga : Rp.{data.Harga}</p>

                                        </center>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Menuminuman;