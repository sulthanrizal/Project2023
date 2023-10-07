import React, { Component } from "react";

import Menuhome from "../../tugas1_react_js/menuHome";
// import Header from "./Header"
// import Footer from "./Footer";
// import List from "./list"
// import Top from "./top";
// import Custominput from "./Custominput";
// import Menumakanan2 from "../tugas1_react_js/menuMakanan2";
// import Form from "./Form";
// import Daftarmakanan from "../Lib_tugass/Daftar_makanan";
// import Main from "./main";
// import Foot from "../tugas1_react_js/foot";
// import Menumakanan from "../tugas1_react_js/menumakanan";
//import Menukontak from "../tugas1_react_js/menuKontak";
//import Menutentangkami from "../tugas1_react_js/menuTentangKami";
// import Head from "../tugas1_react_js/head";

// component juga bisa di buat dengan function , caranya yaitu:

// const Footer = () => {
//  return (
//    <div>
//      <h3>Halaman Footer</h3>
//      <p>@2018</p>
//    </div>
//  )
// }

class App extends Component {
  render() {
    return ( // untuk coment di dalam return itu harus ditambahkan dengan kerlibreket / {}
      <div>
        <Menuhome />
        {
          //  <Header />
          // <Form />
          //<Menumakanan2 />
          // <List />
          // <Main />
        }


      </div>
    )
  }
}
export default App;


