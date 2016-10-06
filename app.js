var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();

add();

add();

add();
var c = add();
console.log(c);