/* @flow */
/* eslint-disable */
import * as React from 'react';

jest.autoMockOff();
jest.clearAllMocks();
jest.resetAllMocks();
jest.restoreAllMocks();

// $FlowExpectedError[prop-missing] property `atoMockOff` not found in object type
jest.atoMockOff();

const mockFn = jest.fn();
mockFn.mock.calls.map(String).map((a) => a + a);

type Foo = {
  doStuff: (string) => number,
  doAsyncStuff: (string) => Promise<number>,
  ...
};
const foo: Foo = {
  doStuff(str: string): number {
    return 5;
  },
  doAsyncStuff(str: string): Promise<number> {
    return Promise.resolve(5);
  },
};

foo.doStuff = jest.fn().mockImplementation((str) => 10);
foo.doStuff = jest.fn().mockImplementation((str) => parseInt(str, 10));
foo.doStuff = jest.fn().mockImplementation((str) => str.indexOf('a'));
// $FlowExpectedError[prop-missing] function `doesntExist` not found in string.
foo.doStuff = jest.fn().mockImplementation((str) => str.doesntExist());
// $FlowExpectedError[incompatible-call] Mock function expected to return number, not string.
foo.doStuff = jest.fn().mockImplementation((str) => '10');
foo.doStuff = jest.fn().mockImplementationOnce((str) => 10);
foo.doStuff = jest.fn().mockImplementationOnce((str) => parseInt(str, 10));
foo.doStuff = jest.fn().mockImplementationOnce((str) => str.indexOf('a'));
// $FlowExpectedError[prop-missing] function `doesntExist` not found in string.
foo.doStuff = jest.fn().mockImplementationOnce((str) => str.doesntExist());
// $FlowExpectedError[incompatible-call] Mock function expected to return number, not string.
foo.doStuff = jest.fn().mockImplementationOnce((str) => '10');

foo.doStuff = jest.fn().mockReturnValue(10);
// $FlowExpectedError[incompatible-call] Mock function expected to return number, not string.
foo.doStuff = jest.fn().mockReturnValue('10');

foo.doStuff = jest.fn().mockReturnValueOnce(10);
// $FlowExpectedError[incompatible-call] Mock function expected to return number, not string.
foo.doStuff = jest.fn().mockReturnValueOnce('10');

foo.doAsyncStuff = jest.fn().mockResolvedValue(10);
// $FlowExpectedError[incompatible-call] Mock function expected to return Promise<number>, not Promise<string>
foo.doAsyncStuff = jest.fn().mockResolvedValue('10');

foo.doAsyncStuff = jest.fn().mockResolvedValueOnce(10);
// $FlowExpectedError[incompatible-call] Mock function expected to return Promise<number>, not Promise<string>
foo.doAsyncStuff = jest.fn().mockResolvedValueOnce('10');

foo.doAsyncStuff = jest.fn().mockRejectedValue(10);
foo.doAsyncStuff = jest.fn().mockRejectedValueOnce(10);

foo.doStuff = jest.fn().mockName('10');
// $FlowExpectedError[incompatible-call] mockName expects a string, not a number
foo.doStuff = jest.fn().mockName(10);

const mockedDoStuff = (foo.doStuff = jest.fn().mockImplementation((str) => 10));
mockedDoStuff.mock.calls[0][0].indexOf('a');
// $FlowExpectedError[prop-missing] function `doesntExist` not found in string.
mockedDoStuff.mock.calls[0][0].doesntExist('a');

mockedDoStuff.mock.instances[0] > 5;
// $FlowExpectedError[prop-missing] function `doesntExist` not found in number.
mockedDoStuff.mock.instances[0].indexOf('a');

expect(mockedDoStuff.mock.results[0].isThrow).toBe(false);
expect(mockedDoStuff.mock.results[0].value).toBe(10);
// $FlowExpectedError[prop-missing]
mockedDoStuff.mock.results[0].foo;

expect(1).toEqual(1);
expect(true).toBe(true);
expect(5).toBeGreaterThan(3);
expect(5).toBeLessThan(8);
expect('jester').toContain('jest');
expect({ foo: 'bar' }).toHaveProperty('foo');
expect({ foo: 'bar' }).toHaveProperty('foo', 'bar');
expect({ foo: { fizz: 'bar' } }).toHaveProperty(['foo', 'fizz'], 'bar');
expect('foo').toMatchSnapshot('snapshot name only');
expect('foo').toMatchSnapshot(undefined, 'snapshot name');
expect({
  foo: 1,
}).toMatchSnapshot(
  {
    foo: expect.any(Number),
  },
  'snapshot name'
);
expect('foo').toMatchInlineSnapshot();
expect('foo').toMatchInlineSnapshot(`"foo"`);
expect({ foo: 1 }).toMatchInlineSnapshot({
  foo: expect.any(Number),
});
expect({ foo: 1 }).toMatchInlineSnapshot(
  {
    foo: expect.any(Number),
  },
  `
Object {
"foo": Any<Number>,
}
`
);
// $FlowExpectedError[incompatible-call] - options must be object or undefined
expect('foo').toMatchDiffSnapshot('any', null, 'test name');
expect('foo').toMatchDiffSnapshot('any', {}, 'test name');
expect('foo').toMatchDiffSnapshot('foobar');
expect('foo').toMatchDiffSnapshot(
  'foobar',
  undefined,
  'snapshot difference between two strings'
);

expect({ foo: 1 }).toMatchInlineSnapshot([]);
expect({ foo: 'bar' }).toMatchObject({ baz: 'qux' });
expect('foobar').toMatch(/foo/);
expect('foobar').toMatch('foo');

mockFn('a');
expect('someVal').toBeCalled();
expect('someVal').toBeCalledWith('a');

// $FlowExpectedError[incompatible-call] property `toHaveBeeenCalledWith` not found in object type
expect('someVal').toHaveBeeenCalledWith('a');

// $FlowExpectedError[prop-missing] property `fn` not found in Array
mockFn.mock.calls.fn();

class AClass {}
function aFunction() {}

describe('name', () => {});
describe(AClass, () => {});
describe(aFunction, () => {});

describe.only('name', () => {});
describe.only(AClass, () => {});
describe.only(aFunction, () => {});
describe.each([['arg1'], ['arg2']])('test', (a) => expect(a).toMatchSnapshot());
describe.each(['arg1', 2, true])('test', (a) => expect(a).toMatchSnapshot());
describe.each([
  ['arg1', 'arg2'],
  ['arg2', 'arg3'],
])('test', (a, b) => expect(a).toMatchDiffSnapshot(b));
describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });
});
describe.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('$a + $b', ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });
});

describe.skip('name', () => {});
describe.skip(AClass, () => {});
describe.skip(aFunction, () => {});

test('test', () => expect('foo').toMatchSnapshot());
test(AClass, () => expect('foo').toMatchSnapshot());
test(aFunction, () => expect('foo').toMatchSnapshot());
test.each([
  ['arg1', 2, true],
  ['arg2', 3, false],
])('test', () => expect('foo').toMatchSnapshot());
test.each(['arg1', 2, true])('test', () => expect('foo').toMatchSnapshot());
test.only.each([
  ['arg1', 2, true],
  ['arg2', 3, false],
])('test', () => expect('foo').toMatchSnapshot());
test.only.each(['arg1', 2, true])('test', () =>
  expect('foo').toMatchSnapshot()
);
test.only('test', () => expect('foo').toMatchSnapshot());
test.skip('test', () => expect('foo').toMatchSnapshot());
test.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({ a, b, expected }) => {
  expect(a + b).toBe(expected);
});
test.skip.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({ a, b, expected }) => {
  expect(a + b).toBe(expected);
});

// $FlowExpectedError[prop-missing] property `fonly` not found in object type
test.fonly('test', () => expect('foo').toMatchSnapshot());

test('name', (done) => {
  done();
});
test.only('name', (done) => {
  done();
});
test.skip('name', (done) => {
  done();
});
test('name', (done) => {
  done.fail(new Error('fail'));
  // $FlowExpectedError[incompatible-call]
  done.fail();
  done(new Error('fail'));
  // $FlowExpectedError[incompatible-call]
  done("foo");
});

test.todo('');
// $FlowExpectedError[extra-arg]
test.todo('', () => {});

// $FlowExpectedError[incompatible-call] tests should return void or Promise.
test('name', () => 5);
test('name', async () => {});
test('name', () => new Promise((resolve, reject) => {}));
// $FlowExpectedError[incompatible-call] describe does not support Promises.
describe('name', () => new Promise((resolve, reject) => {}));

beforeEach(() => {});
beforeEach(() => new Promise((resolve, reject) => {}));
// $FlowExpectedError[incompatible-call] Lifecycle methods should return void or Promise.
beforeEach(() => 5);

beforeAll(() => {});
beforeAll(() => new Promise((resolve, reject) => {}));
// $FlowExpectedError[incompatible-call] Lifecycle methods should return void or Promise.
beforeAll(() => 5);

afterEach(() => {});
afterEach(() => new Promise((resolve, reject) => {}));
// $FlowExpectedError[incompatible-call] Lifecycle methods should return void or Promise.
afterEach(() => 5);

afterAll(() => {});
afterAll(() => new Promise((resolve, reject) => {}));
// $FlowExpectedError[incompatible-call] Lifecycle methods should return void or Promise.
afterAll(() => 5);

xtest('test', () => {});

// $FlowExpectedError[prop-missing] property `bar` not found in object type
expect.bar();

expect.extend({
  blah(actual, expected) {
    return {
      message: () => 'blah fail',
      pass: false,
    };
  },
});

expect.extend({
  foo(actual, expected) {
    // $FlowExpectedError[incompatible-call] property `pass` not found in object literal
    return {};
  },
});

expect.extend({
  blah(actual: string, one: string, two: string, three: string) {
    return Promise.resolve({
      message: () => one + two + three,
      pass: false,
    });
  },
});

const err = new Error('err');
expect(() => {
  throw err;
}).toThrowError('err');

expect(() => {
  throw err;
}).toThrowError(/err/);

expect(() => {
  throw err;
}).toThrowError(err);

expect(() => {}).toThrowErrorMatchingSnapshot();
expect(() => {}).toThrowErrorMatchingInlineSnapshot();
expect(() => {}).toThrowErrorMatchingInlineSnapshot('err');

expect(() => {}).toThrow('err');
expect(() => {}).toThrow(/err/);
expect(() => {}).toThrow(err);

(jest.getTimerCount(): number);
// $FlowExpectedError[extra-arg]
jest.getTimerCount(3);

jest.setSystemTime();
jest.setSystemTime(123);
jest.setSystemTime(new Date());
// $FlowExpectedError[incompatible-call]
jest.setSystemTime('');

jest.genMockFromModule('../mocked');
// $FlowExpectedError[incompatible-call]
jest.genMockFromModule(1);

jest.createMockFromModule('../mocked');
// $FlowExpectedError[incompatible-call]
jest.createMockFromModule(1);

// Test method chaining fixes
jest.doMock('testModule1', () => {}).doMock('testModule2', () => {});

jest.dontMock('testModule1').dontMock('testModule2');

jest.resetModules().resetModules();

jest.isolateModules(() => {});
// $FlowExpectedError[incompatible-call]
jest.isolateModules();

jest.spyOn({}, 'foo', 'get');

jest.setTimeout(1000);

jest.runTimersToTime(3000);
jest.advanceTimersByTime(3000);

expect.addSnapshotSerializer({
  print: (val, serialize) => `Foo: ${serialize(val.foo)}`,
  test: (val) => val && val.hasOwnProperty('foo'),
});

// $FlowExpectedError[incompatible-call]
expect.addSnapshotSerializer(JSON.stringify);

expect.assertions(1);
expect.hasAssertions();

expect.anything();
expect.any(Error);
expect.objectContaining({
  foo: 'bar',
});
expect.arrayContaining(['red', 'blue']);
expect.stringMatching('*this part*');

expect.not.arrayContaining(['red', 'blue']);
expect.not.objectContaining({ foo: 'bar' });
expect.not.stringContaining('foobar');
expect.not.stringMatching(/foobar/);

test.concurrent('test', () => {});

expect([1, 2, 3]).toHaveLength(3);

(async () => {
  await expect(Promise.reject('ok')).rejects.toBe('ok');
  await expect(Promise.resolve('ok')).resolves.toBe('ok');
})();

/**
 *  Plugin: jest-styled-components
 */
// $FlowExpectedError[cannot-resolve-module]
import { mount } from 'enzyme';
// $FlowExpectedError[cannot-resolve-module]
import styled from 'styled-components';

const ColoredSpan = styled.span`
  color: red;
`;

const ButtonWithBreakpoint = styled.button`
  @media (max-width: 640px) {
    &:hover {
      color: red;
    }
  }
`;

const styledWrapper = mount(<ColoredSpan />);

expect(styledWrapper).toHaveStyleRule('color', 'red');

expect(styledWrapper).not.toHaveStyleRule('cursor', expect.any(String));

expect(mount(<ButtonWithBreakpoint />)).toHaveStyleRule('color', 'red', {
  media: '(max-width:640px)',
  modifier: ':hover',
});

// $FlowExpectedError[incompatible-call]
expect(styledWrapper).toHaveStyleRule();

// $FlowExpectedError[incompatible-call]
expect(styledWrapper).toHaveStyleRule({ backgroundColor: 'red' });

/**
 *  Plugin: jest-enzyme
 */

// $FlowExpectedError[cannot-resolve-module]
import { shallow } from 'enzyme';
const Dummy = () => <div />;
const wrapper = shallow(<Dummy />);

// 5.x

expect(wrapper).toBeEmpty();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toBeEmpty(true);

expect(wrapper).toBePresent();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toBePresent(true);

// 6.x

expect(wrapper).toBeChecked();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toBeChecked(true);

expect(wrapper).toBeEmptyRender();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toBeEmptyRender(true);

expect(wrapper).toBeEmptyRender();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toBeEmptyRender(true);

expect(wrapper).toContainMatchingElement('span');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toContainMatchingElement(true);

expect(wrapper).toContainMatchingElements(2, 'span');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toContainMatchingElements('span', true);

expect(wrapper).toContainExactlyOneMatchingElement('span');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toContainExactlyOneMatchingElement(true);

expect(wrapper).toContainReact(<Dummy />);
// $FlowExpectedError[incompatible-call]
expect(wrapper).toContainReact();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toContainReact('string');

expect(wrapper).toExist();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toExist(true);

expect(wrapper).toHaveClassName('class');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveClassName();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveClassName(true);

expect(wrapper).toHaveHTML('<span>test</span>');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveHTML();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveHTML(true);

expect(wrapper).toHaveProp('test');
expect(wrapper).toHaveProp('test', 'test');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveProp();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveProp(true);
expect(wrapper).toHaveProp({ test: 'test' });
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveProp({ test: 'test' }, 'test');

expect(wrapper).toHaveRef('test');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveRef();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveRef(true);

expect(wrapper).toHaveState('test');
expect(wrapper).toHaveState('test', 'test');
expect(wrapper).toHaveState({ test: 'test' });
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveState({ test: 'test' }, 'test');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveState();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveState(true);

expect(wrapper).toHaveStyle('color');
expect(wrapper).toHaveStyle('color', '#ccc');
expect(wrapper).toHaveStyle({ color: '#ccc' });
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveStyle({ color: '#ccc' }, 'test');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveStyle();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveStyle(true);

expect(wrapper).toHaveTagName('marquee');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveTagName();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveTagName(true);

expect(wrapper).toHaveText('test');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveText();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveText(true);

expect(wrapper).toHaveValue('test');

expect(wrapper).toIncludeText('test');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toIncludeText();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toIncludeText(true);

expect(wrapper).toMatchElement(<Dummy />);
expect(wrapper).toMatchElement(<Dummy />, { ignoreProps: true });
expect(wrapper).toMatchElement(<Dummy />, { verbose: true });
// $FlowExpectedError[incompatible-call]
expect(wrapper).toMatchElement();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toMatchElement(true);
// $FlowExpectedError[incompatible-call]
expect(wrapper).toMatchElement(<Dummy />, { ignoreProps: 123 });
// $FlowExpectedError[incompatible-call]
expect(wrapper).toMatchElement(<Dummy />, { verbose: 123 });
// $FlowExpectedError[incompatible-call]
expect(wrapper).toMatchElement(<Dummy />, { foobar: true });

expect(wrapper).toMatchSelector('span');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toMatchSelector();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toMatchSelector(true);

// 7.x

expect(wrapper).toHaveDisplayName('marquee');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveDisplayName();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveDisplayName(true);

/**
 * @testing-library/jest-dom
 */
{
  const element = document.createElement('div');

  expect(element).toBeDisabled();
  expect(element).toBeEnabled();
  expect(element).toBeEmpty();
  expect(element).toBeEmptyDOMElement();
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  // $FlowExpectedError[incompatible-call]
  expect(element).toContainElement();
  expect(element).toContainElement(element);
  // $FlowExpectedError[incompatible-call]
  expect(element).toContainHTML();
  expect(element).toContainHTML('<div></div>');
  expect(element).toHaveAttribute('foo');
  expect(element).toHaveAttribute('foo', 'bar');
  // $FlowExpectedError[incompatible-call]: attribute name should be present
  expect(element).toHaveAttribute();
  // $FlowExpectedError[incompatible-call]: attribute name should be a string
  expect(element).toHaveAttribute(1);
  expect(element).toHaveAttribute('foo', 1);
  // $FlowExpectedError[incompatible-call]
  expect(element).toHaveClass(1);
  expect(element).toHaveClass('foo');
  expect(element).toHaveFocus();
  // $FlowExpectedError[incompatible-call]
  expect(element).toHaveFormValues();
  expect(element).toHaveFormValues({ foo: 'bar' });
  expect(element).toHaveStyle('color: blue');
  expect(element).toHaveStyle({ color: 'blue' });
  // $FlowExpectedError[incompatible-call]
  expect(element).toHaveStyle();
  expect(element).toHaveStyle('foo');
  expect(element).toHaveTextContent('123');
  // $FlowExpectedError[incompatible-call]: expected text content should be present
  expect(element).toHaveTextContent();
  // $FlowExpectedError[incompatible-call]: expected text content should be a string
  expect(element).toHaveTextContent(1);

  expect(element).toHaveDisplayValue('test');
  expect(element).toHaveDisplayValue(['foo', 'bar']);
  expect(element).toBeChecked();
  expect(element).toBeEmptyDOMElement();
  expect(element).toBePartiallyChecked();

  // $FlowExpectedError[incompatible-call]: expected description should be present
  expect(element).toHaveDescription();
  expect(element).toHaveDescription('foo');
  expect(element).toHaveDescription(/[0-9]/);
  // $FlowExpectedError[incompatible-call]
  expect(element).toHaveDescription(true);

}

{
  // in reality this would be a jquery object
  const jquery = '$(someSelector)';

  {
    expect(jquery).toExist();
    expect(jquery).not.toExist();

    expect(jquery).toHaveLength(1);
    // $FlowExpectedError[incompatible-call]: parameter required
    expect(jquery).toHaveLength();

    expect(jquery).toHaveId('username');

    expect(jquery).toHaveClass('myclass');
    expect(jquery).toHaveTag('div');
    expect(jquery).toHaveAttr('attr1');
    expect(jquery).toHaveAttr('attr1', 'value1');

    expect(jquery).toHaveProp('attr1');
    expect(jquery).toHaveProp('attr1', 'value1');

    expect(jquery).toHaveData('attr1');
    expect(jquery).toHaveData('attr1', 'value1');

    expect(jquery).toHaveText('MyText');
    expect(jquery).toHaveText(/MyTe.t/);

    expect(jquery).toHaveDescendantWithText('selector', 'text');
    expect(jquery).toHaveDescendantWithText('selector', /text/);

    expect(jquery).toHaveCss({ key: 'value' });
  }
}

{
  expect('').toBeEmpty();
  expect(1).toBeOneOf([1, 2, 3]);
  expect(null).toBeNil();

  {
    const greaterThanOneButNotThree = (n) => n > 1 && n !== 3;
    expect(100).toSatisfy(greaterThanOneButNotThree);
  }

  expect([]).toBeArray();

  expect([]).toBeArrayOfSize(0);

  expect([1, 2, 3]).toIncludeAllMembers([2, 1, 3]);

  expect([1, 2, 3]).toIncludeAnyMembers([2, 1, 3]);

  {
    const isOdd = (el) => el % 2 === 1;
    expect([1, 3, 5, 7]).toSatisfyAll(isOdd);
  }

  expect(false).toBeBoolean();
  expect(false).not.toBeTrue();

  expect(true).not.toBeFalse();
  expect(() => {}).toBeFunction();

  {
    const timeout = (n: number) => {};
    const mock1 = jest.fn(timeout(1));
    const mock2 = jest.fn(timeout(1));
    expect(mock1).toHaveBeenCalledBefore(mock2);
  }

  expect(1).toBeNumber();
  expect(NaN).toBeNaN();
  expect(1).toBeFinite();
  expect(1).toBePositive();
  expect(-1).toBeNegative();
  expect(2).toBeEven();
  expect(1).toBeOdd();
  expect(1).toBeWithin(1, 3);
  expect({}).toBeObject();
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainKey('a');
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainKeys(['a', 'b']);
  }
  {
    const o = { a: 'hello', b: 'world' };
    expect(o).toContainAllKeys(['a', 'b']);
  }
  {
    const o = { a: 'hello', b: 'world' };
    expect(o).toContainAnyKeys(['a']);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainValue('foo');
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainValues(['foo']);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainAllValues(['foo', 'bar', 'baz']);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainAnyValues(['qux', 'foo']);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainEntry(['a', 'foo']);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainEntries([['a', 'foo']]);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainAllEntries([
      ['a', 'foo'],
      ['b', 'bar'],
      ['c', 'baz'],
    ]);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainAnyEntries([
      ['a', 'qux'],
      ['a', 'foo'],
    ]);
  }
  {
    expect({ a: 1 }).toBeExtensible();
  }

  expect(Object.freeze({})).toBeFrozen();

  expect(Object.seal({})).toBeSealed();

  expect('').toBeString();
  expect('hello world').toEqualCaseInsensitive('hello world');
  expect('hello world').toStartWith('hello');
  expect('hello world').toEndWith('world');
  expect('hello world').toInclude('ell');
  expect('hello hello world').toIncludeRepeated('hello', 2);
  expect('hello world').toIncludeMultiple(['world', 'hello']);
}

{
  // Type hint becomes the returned type
  const FooModule1: string = jest.requireActual<string>('FooModule');
  // $FlowExpectedError[incompatible-type] Type hint becomes the returned type
  const FooModule2: number = jest.requireActual<string>('FooModule');
  // No type hint means we return any
  const FooModule3: boolean = jest.requireActual('FooModule');
}
