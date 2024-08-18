// alert("Hello");

var age = 29;
var sayAge = () => alert(this.age);
alert(window.age);
sayAge();
window.sayAge();