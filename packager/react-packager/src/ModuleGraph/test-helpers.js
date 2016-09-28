/**
 * Copyright (c) 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

const stub = require('sinon/lib/sinon/stub');

exports.fn = () => {
  const s = stub();
  const f = jest.fn(s);
  f.stub = s;
  return f;
};
