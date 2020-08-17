import { bp, mq } from './mediaQueries';
import { elevate } from './elevation';
import { color } from './color';

const exists = (any) => any != null;

export {
  bp, mq,
  elevate,
  exists,
  color
}