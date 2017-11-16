import * as request from 'superagent'

const join = (...segs) => {
  return segs.join('/');
};

export { join, request };