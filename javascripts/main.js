// var x = 6;
// document.getElementById("test_id").innerHTML = x;
// var x = 'some string';
// document.getElementById("test1_id").innerHTML = x;
// var obj = {
// 	p:100,
// 	q:20,
// 	// for(variable in this) {
// 	// 	document.write(1);
// 	// } 
// 	print:function(a){
// 		function len_arguments() {
// 			return 1;
// 		}
// 		return len_arguments();
// 	}
// };

// for(x in obj) {
// 	document.write(x);
// }

// function p() {
// 	document.getElementById("test_id").innerHTML = 
// 	obj.print(1);
// }
			
function some_prototype(a,b,c) {
	this.m = a;
	this.n = 10;
	this.o = b;
	this.p = c;
}

var obj = new some_prototype(2,3,4);
document.write(obj.p);
document.write(obj.s);

for(variable in obj) {
	document.write(typeof(variable));
	document.write('\n')
}