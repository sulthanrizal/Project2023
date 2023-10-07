import React, { Component } from "react";
import Image from "./image";
//import Image2 from "./image2";
//import Image3 from "./image3";


class List extends Component {
    render() {
        return (
            <ol>

                <li>Nasi Padang</li>
                <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"
                    lebar="300" />
                <li>Sate</li>
                <Image linkgambar="https://kbu-cdn.com/dk/wp-content/uploads/sate-ayam.jpg"
                    lebar="250" />
                <li>Soto Lamongan</li>
                <Image linkgambar="https://cdn1.katadata.co.id/media/images/thumb/2021/11/12/Soto_ayam_Lamongan-2021_11_12-07_11_23_a43683d33b40f413228d54e3c6ed4a2f_960x640_thumb.jpg"
                    lebar="200" />
            </ol>
        )
    }
}

export default List;