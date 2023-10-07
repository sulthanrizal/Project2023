import React, { Component } from "react";

class Formmakanan extends Component {
    constructor(props) {
        super(props);
        this.state = { pesanan: "", jumlah: "" }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangejumlah = this.handleChangejumlah.bind(this)

    }
    handleChange(e) {
        this.setState({ pesanan: e.target.value })
    }
    handleChangejumlah(e) {
        this.setState({ jumlah: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault()
        alert(
            "Pesanan Anda Adalah:" +
            this.state.pesanan +
            "| Jumlah Pesanan:" +
            this.state.jumlah
        )
        this.setState({ pesanan: "", jumlah: "" })
        this.pesanan.current.focus()
    }

    render() {
        return (
            <div>
                <center>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            value={this.state.pesanan}
                            ref={this.pesanan}
                            placeholder="Masukan Makanan Anda" />
                        <input
                            type="number"
                            value={this.state.jumlah}
                            onChange={this.handleChangejumlah}
                            placeholder="Masukan Jumlah Pesanan"
                        />
                        <br /><br />
                        <input type="submit" value="pesan" />
                    </form>
                </center>
            </div>
        )
    }
}
export default Formmakanan;