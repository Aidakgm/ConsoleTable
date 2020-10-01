let num = process.argv[2]
// <----- ERRORES ----->
if (!num) return console.error("Tienes que poner un número.")
if (num < 0) return console.error("Tienes que poner un número positivo.")
// <---- CÓDIGO ----->
var i;
for (i = 1; i <= 10; i++) {
    var valor = i * num;
    console.log(num + ' x ' + i + ' = ' + valor)
}
