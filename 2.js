/*

**타입
문자형, 숫자형, boolean, undifined, null
"tykim", 27, true,false, var sum;, var a=null

자바스크립트에서의 false 값 : 0, undefined, false, "", null
*/

var a = 1;
var b = "1";

if(a==b){	// == : 값만 비교, === : 타입까지 비교
	console.log("참");
	console.log(a+b);
}else{
	console.log("거짓");
}


var a = false;
var b = "false";
var c = 0;

if(a==b){
	console.log("10");
}
if(a==c){
	console.log("20");
}
if(b==c){
	console.log("30");
}


var x = true;
var y = "true";
var z = 10;

if(x==y){
	console.log("1");
}
if(x==z){
	console.log("2");
}
if(y==z){
	console.log("3");
}

