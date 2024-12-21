

const insanlar = [
    {
        ad: "Oğuzhan",
        soyad: "Yılmaz",
        yas: 23
    },
    {
        ad: "Furkan",
        soyad: "Özay",
        yas: 25
    },
    {
        ad: "Ali",
        soyad: "Çelik",
        yas: 18
    }
]


function isimBulma () {
    return insanlar.find(insan => insan.ad === "Oğuzhan");   
}

const bulunanİsim = isimBulma();

console.log(bulunanİsim);
