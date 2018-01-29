
var a = 2;
var b = 4;
var value = (a * a) - (2 * a * b) + (b * b);

alert('(a * a) - (2 * a * b) + (b * b)' +  value);

console.log('a wynik ten to: ' + value);

if (value > 0) {

	alert('wynik dodatni, hurra pijemy');

	console.log('wynik dodatni');

} else if (value ===0) {

	alert('wyszło 0, patrzymy jak piją')
	console.log('mamy 0 na pokładzie');
} else {

	console.log('wynik ujemny, koniec świata')
}