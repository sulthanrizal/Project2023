import React, { Component } from "react";
import Menumakanan from "./lib/Food";

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Menu Makanan",
            title2: "Menu Minuman",
            inputValue: "",
            inputKota: "",

        }
        this.rubahdata = this.rubahdata.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    // rubahdata() {
    //     this.setState({ title: "Pilih Makanan" })// setstate ini untuk merubah data yang ada pada state sebelumnya
    // }

    // penulisan setState juga bisa seperti dibawah ini .
    // tpi lebih disarankan penulisannya seperti dibawah ini.

    rubahdata() {
        this.setState((state, props) => {
            return {
                title: state.title2,
                title2: state.title
            }
        });
    };

    handleChange(value, e) {
        this.setState({ [value]: e.target.value }) // << ini tuh agar bisa menambahkan atau mengurangkan sebuah data yang berada didalam input.
        // bisa juga mengunakan secara erofunction yaitu seperti dibawah ini:
        // const eventTarget = e.target.value;
        // this.setState((state, props) => {
        //     return {
        //         inputValue: eventTarget
        //     }
        // })


    }

    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <h2>{this.state.title2}</h2>
                <button onClick={this.rubahdata}>Rubah data </button>
                <br />
                <br />
                <input
                    type="Text"
                    value={this.state.inputValue}
                    placeholder="nama"
                    onChange={e => this.handleChange("inputValue", e)} />

                <input
                    type="Text"
                    value={this.state.inputKota}
                    placeholder="kota"
                    onChange={e => this.handleChange("inputKota", e)}
                />
                {Menumakanan.map((data, index) => {
                    console.log(data)
                    console.log(index)
                    return (
                        <div key={index}>
                            <p>No :{index + 1}</p>
                            <p>Nama Makanan : {data.nama}</p>
                            <p>Harga :{data.harga}</p>
                        </div>
                    )
                })}





            </div>
        )
    }
}
export default Main;