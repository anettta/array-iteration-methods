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
const sum = [1,2,3].reduce(function (result, item) {
    return result + item;
}, 0);
alert(sum);


// some
const hasNegativeNumbers = [1,2,3,-1,4].some(function (item) {
    return item < 0;
});
alert(hasNegativeNumbers);


// every
const allPositiveNumbers = [1,2,3].every(function (item) {
    return item > 0;
});
alert(allPositiveNumbers);



// find



// find index