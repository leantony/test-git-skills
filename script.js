// function buildFunctions(){

// 	var arr = [];

// 	for (var i = 0; i < 3; i++) {
// 		arr.push((function(j){
// 			return function() {console.log(j)};
// 		})(i))
// 	};

// 	return arr;
// }

// var fs = buildFunctions();

// fs[0]();
// fs[1]();
// fs[2]();


// function makeGreeting(language){

// 	return function(firstname, lastname) {
		
// 		if (language === 'en') {

// 			console.log('Hello ' + firstname + ' ' + lastname);
// 		}

// 		if (language === 'es') {

// 			console.log('Hola ' + firstname + ' ' + lastname);
// 		}
// 	}
// }

// var greetEnglish = makeGreeting('en');

// var greetSpanish = makeGreeting('es');

// greetEnglish('antony', 'chacha');
// greetSpanish('antony', 'chacha');


function mapForEach(arr, fn){

	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		
		newArr.push( fn(arr[i]) );
	};

	return newArr;
}

var arr2 = mapForEach([1, 2, 3], function(i){ return i * 2; });

console.log(arr2);

var checkNumber = function(limiter, item){

	return item > limiter;
}

var arr3 = mapForEach([1, 2, 3], checkNumber.bind(this, 1));

console.log(arr3);