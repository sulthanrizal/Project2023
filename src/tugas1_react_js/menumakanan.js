import React, { Component } from "react";
import Daftarmakanan from "../Lib_tugass/Daftar_makanan";
import Head from "./head";

class Menumakanan extends Component {
    render() {
        return (
            <div>
                <Head />
                <h3>Daftar Makanan Favourite :</h3>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            {Daftarmakanan.map((data, index) => {
                                return (
                                    <td>
                                        <center>
                                            <img
                                                src={data.img}
                                                alt="Product Makanan"
                                                width="150"
                                                height="100"
                                            />
                                            <p>{data.NamaMakanan}</p>
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
export default Menumakanan;