import React, { Component } from "react"
import "./header.css"

const tumbut = { // tpi disarankan penulisan css dengan cara inline
    color: "blue",
    backgroundColor: "red", // ini adalah penulisan css secara internal
    marginTop: "150px "
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daftar: "Daftar Makananan Nusantara,",
            datarendering: true,
            datalist: this.props.list
        }
        this.handlePesan = this.handlePesan.bind(this)
        this.handleElement = this.handleElement.bind(this)
    }
    handlePesan(value, e) {
        e.preventDefault()// <<- paramameter e ini untuk menghentikan atau menghilangkan reload pada sebuah halaman yang dijalankan pada
        alert(this.state.daftar)
        alert(value)// <<- ini adalah hasil dari parameter value untuk menambahkan alert yang kedua

    }
    componentDidMount() { // << method componentDidMount ini akan berjalan atau berfungsi setelah render
        console.log("jalan:componentDidMount")
    }
    handleElement() {
        this.setState((state, props) => {
            return { datarendering: !state.datarendering }
        });
    }

    render() {
        console.log("jalan:render")
        console.log(this.state.datarendering)
        return (
            <div>
                {this.state.datarendering === true ? ( // jadi apabila ada lebih dari satu kondisi maka harus dibungkus dengan div.
                    <div>
                        <h1 style={{   // ini adalah penulisan css secara inline 
                            color: "red",
                            backgroundColor: "black",
                            marginTop: "200px"
                        }}
                        >Selamat Datang</h1>
                        <h2 style={tumbut}>Silahkan Pilih Menu Makanan</h2>
                    </div>
                ) : (
                    <div>
                        <h1 id="judulKedua">Selamat Tinggal</h1>
                        <h2 className="judulInfo">Jangan Lupa Datang Kembali</h2>
                    </div>
                )}
                <button onClick={this.handleElement}>change</button>
            </div>
        );

        // return (
        //     <div>
        //         <h2>Makanan Khas Indonesia</h2>
        //         <h3>{this.state.daftar}  {this.props.tambahan}</h3>
        //         <h3>{this.state.datalist}</h3>
        //         <a href="/" onClick={(e) => this.handlePesan("Pesan Dari Header", e)}>
        //             Halaman Header</a>

        //     </div>
        // )
    }
}

export default Header;