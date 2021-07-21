// @flow

import * as React from 'React'
import Measure from 'react-measure'

const fail = () => (
  // $ExpectError
  <Measure bounds={'string'} />
)
