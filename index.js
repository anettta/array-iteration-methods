// JS Nuggets
// Array iteration: 8 methods

// forEach
[1,2,3].forEach(function (item, index) {
    alert(item, index);
});


// map
const three = [1,2,3];
const doubled = three.map(function (item) {
    return item * 2;
});
alert(doubled);


// filter
const ints = [1,2,3];
const evens = ints.filter(function (item) {
    return item % 2 === 0;
});
alert(evens);


// reduce



// some



// every



// find


