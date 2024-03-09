var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
Question 18: Seeing the World: Think of at least five places you’d like to visit.
*/
// saving cpountry name
var Countries = ['Pakistan', 'Japan', 'America', 'Sri Lanka', 'Turkey'];
// printing original list
console.log('\noriginal order list :' + Countries);
//printing in alphabetic order
console.log('\nalphabetic order :' + __spreadArray([], Countries, true).sort());
// printing original list
console.log('\noriginal order list :' + Countries);
//printing in alphabetic order in reverse
console.log('\nalphabetic order in reverse :' + __spreadArray([], Countries, true).sort(function (a, b) { return b.localeCompare(a); }));
// printing original list
console.log('\noriginal order list :' + Countries);
//printing in alphabetic order in reverse by using revers()
console.log('\nalphabetic order in reverse by using revers() :' + __spreadArray([], Countries, true).sort().reverse());
// printing original list
console.log('\noriginal order list :' + Countries);
// printing  reverse order list
console.log('\nreverse order list :' + Countries.reverse());
// printing  original order list
console.log('\noriginal order list :' + Countries.reverse());
