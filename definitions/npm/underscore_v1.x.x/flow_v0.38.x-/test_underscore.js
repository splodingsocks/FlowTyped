/** @flow */
import _ from 'underscore';

_.where(listOfPlays, {author: 'Shakespeare', year: 1611});

_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');

_.indexBy([{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], 'age');

_.countBy([1, 2, 3, 4, 5], function(num) {
	return num % 2 == 0 ? 'even': 'odd';
});

_.shuffle([1, 2, 3, 4, 5, 6]);

(function() {
	return _.toArray(arguments).slice(1);
})(1, 2, 3, 4);

_.unzip([['moe', 30, true], ['larry', 40, false], ['curly', 50, false]]);

_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);

_.sortedIndex([10, 20, 30, 40, 50], 35);

_.findLastIndex([{'id': 1, 'name': 'Bob', 'last': 'Brown'}, {'id': 2, 'name': 'Ted', 'last': 'White'}, {'id': 3, 'name': 'Frank', 'last': 'James'}, {'id': 4, 'name': 'Ted', 'last': 'Jones'}], {
	name: 'Ted'
});

_.once(function () {});

_.after(1, function () {});

_.before(1, function () {});

_.wrap(function (name) {return 'hello: ' + name;}, function(func) {return 'before, ' + func('moe') + ', after';});

_.negate(Boolean);

function Stooge(name) {
	this.name = name;
}
Stooge.prototype.silly = true;
_.allKeys(new Stooge('Moe'));

_.invert({Moe: 'Moses', Larry: 'Louis', Curly: 'Jerome'});

_.functions(_);

_.extend({name: 'moe'}, {age: 50});
_.extendOwn({name: 'moe'}, {age: 50});
_.assign({name: 'moe'}, {age: 50});

_.defaults({flavor: 'chocolate'}, {flavor: 'vanilla', sprinkles: 'lots'});

_.isMatch({name: 'moe', age: 32}, {age: 32});

_.isElement(0);

_.constant({name: 'moe'})();

_.uniqueId('contact_');

_.escape('Curly, Larry & Moe');

_.unescape('Curly, Larry &amp; Moe');

// $ExpectError
_.zip([{x:1}], [{x:2,y:1}])[0][2]
// $ExpectError array literal. Tuple arity mismatch.
_.bindAll({msg: 'hi', greet: function(){ return this.msg;}}, ['greet', 'toString']);

var identityIsString: string = _.identity('foo');
// $ExpectError
var identityIsNotString: string = _.identity(42);
