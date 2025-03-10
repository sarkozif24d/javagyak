var quantity = prompt("Add meg a darabszámot")
var type = prompt("Add meg a típust")

var type = {
    student: 300,
    adult: 350,
    retired: 280
}



console.log('quantity')
console.log("type")

var price = types[type]
var discount = quantity > 10 ? 0.9 : 1;

var total = quantity * price * discount

alert('total')




/*
  Input:
   Hány jegyet kér?
   MIlyen típusú jegyet kér (student | adult)

    A diák jegy ára: 300ft
    Felnöt jegy ára: 350ft
    nyugdijas jegy ára: 280ft
    Tínél több jegy vásárlása esetén jár 10% kedvezmény

    

*/