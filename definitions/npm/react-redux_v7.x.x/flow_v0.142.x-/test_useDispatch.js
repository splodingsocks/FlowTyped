// @flow
import { describe, it } from 'flow-typed-test';
import React from 'react';
import { useDispatch } from 'react-redux';

type Action = {|
  type: 'action',
|};
type Dispatch = Action => Action;

describe('useDispatch', () => {
  it('returns type `Dispatch` which accepts only type `Action` as param', () => {
    function Com() {
      const dispatch = useDispatch<Dispatch>();
      return (
        <button
          onClick={function() {
            const action = dispatch({ type: 'action' });
            (action.type: string);
            // $FlowExpectedError[incompatible-cast] will be number because of passed generic
            (action.type: number);
          }}
        >
          Dispatch time
        </button>
      );
    }
  });

  it('errors if returned type is passed invalid Action', () => {
    function Com() {
      const dispatch = useDispatch<Dispatch>();
      return (
        <div
          onClick={() => {
            // $FlowExpectedError[incompatible-call]: return value of `useDispatch` should make `Dispatch` and expect an `Action`.
            dispatch();
          }}
        >
          Dispatch time
        </div>
      );
    }
  });

  it('handles action creator passed in and is typed', () => {
    function Com() {
      const dispatch = useDispatch();
      return (
        <button
          onClick={function() {
            const action = dispatch({ anything: 'string' });
            (action.anything: string);
            // $FlowExpectedError[incompatible-cast] will be number because of passed action
            (action.anything: number);
          }}
        >
          Dispatch time
        </button>
      );
    }
  });

  it('handles thunks being passed to return the right value', () => {
    function Com() {
      const thunkAction = () => (dispatch) => {
        return '';
      }
      const dispatch = useDispatch();
      return (
        <div
          onClick={() => {
            const a = dispatch(thunkAction());
            a.toString();
            // $FlowExpectedError[incompatible-cast] it will return a string, not any which could be cast to number
            (a: number)
          }}
        >
          Dispatch time
        </div>
      );
    }
  });

  it('handles thunks defined as a promise to keep their type', (done) => {
    function Com() {
      const thunkPromiseAction = () => (dispatch) => new Promise((resolve) => {
        resolve('');
      });
      const dispatch = useDispatch();
      return (
        <div
          onClick={() => {
            dispatch(thunkPromiseAction()).then((a) => {
              a.toString();
              // $FlowExpectedError[incompatible-cast] it will return a string, not any which could be cast to number
              (a: number)
              done();
            });
          }}
        >
          Dispatch time
        </div>
      );
    }
  });
});
