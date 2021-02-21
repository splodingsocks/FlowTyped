/* @flow */

const namelessSpy = jasmine.createSpy();
const spy = jasmine.createSpy('mySpy');
expect(namelessSpy).toHaveBeenCalledBefore(spy);
// $FlowExpectedError[incompatible-call]
expect(namelessSpy).toHaveBeenCalledBefore(1);

// $FlowExpectedError[incompatible-call]
const badName = jasmine.createSpy(12);

spy.calls.allArgs();
spy.calls.all();
spy.calls.mostRecent();
spy.calls.first();
spy.calls.any();
spy.calls.count();
spy.calls.reset();

spy.and.callFake(() => {});

// $FlowExpectedError[incompatible-call]
spy.and.callFake();

spy.and.callThrough();
spy.and.identity;
spy.and.returnValue(undefined);
spy.and.returnValue(null);
spy.and.returnValue({});
spy.and.returnValues({}, null, 12);
spy.and.stub();
spy.and.throwError('a bad thing happened');
spy.and.throwError();
