function sayiUret(ustLimit = 49) {

    return Math.ceil(Math.random() * ustLimit)
    //random sayı üretmek için kullanılır ve ceil fonksiyonu da üretilen ondalıklı sayıyı yukarıya yuvarlar
}

for (var j = 1; j <= 8; j++) {
    console.log(j+".KOLON")
    for (var i = 1; i <= 6; i++) {
        console.log(sayiUret())

    }

    

}
