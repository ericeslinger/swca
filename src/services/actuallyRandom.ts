import getRandomValues from 'get-random-values';

const MAX_RANDOM = Math.pow(2, 32);

export function randInt(max: number) {
  const reqArray = new Uint32Array(2);
  getRandomValues(reqArray);
  const ret = reqArray[0];
  // we only make one attempt to avoid modulo bias.
  // for values of max that are much smaller than 2^32, this is fine
  // do not use this function for values of max larger than 2^30 or so.
  if (ret >= MAX_RANDOM - (MAX_RANDOM % max)) {
    return reqArray[1] % max;
  } else {
    return reqArray[0] % max;
  }
}

export function randItem<T>(ary: T[]): T {
  return ary[randInt(ary.length)];
}
