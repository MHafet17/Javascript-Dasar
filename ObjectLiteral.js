let biodata = {
    id: "17010197",
    nama: "M Hafidz Masruri",
    lahir: {
        tempat: "Lumajang",
        tgl: "1998-07-27",
    },
    favorit: [
        "coding",
        "membaca",
        "ngaji",
        {
            olahraga: ["lari", "footbal"],
            makanan: ["Mie", "Nasi Goreng"],
        }
    ],
    alamat: {
        jalan: "Jl. Manggis",
        kelurahan: "Jambekumbu",
        kecamatan: "Pasrujambe",
        kota: "Lumajang",
        provinsi: "Jawa Timur",
        kodePos: 36120
    }
}

// akses object
console.log(biodata.favorit[3].makanan[1]);
