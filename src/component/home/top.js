import React from "react"

const Top = () => {
    const handlepesan = (value, e) => {
        e.preventDefault()// <<- paramameter e ini untuk menghentikan atau menghilangkan reload pada sebuah halaman yang dijalankan pada alert
        alert("Halaman Top Tampil")
        alert(value)
    }

    return (
        <a href="/" onClick={(e) => handlepesan("Pesan Dari Top", e)}>
            Halaman Top</a>
    )
}
export default Top;