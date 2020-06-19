/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const bp = {
  "phone-small":  375,
  "phone":        400,
  "phone-wide":   480,
  "phablet":      560,
  "tablet-small": 640,
  "tablet":       768,
  "tablet-wide":  992,
  "desktop":      1248,
  "desktop-wide": 1440
}

export const mq = (n, type='min') => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (${type}-width: ${size}px)`];
    return acc;
  }, []);
  return result;
};

export const lighten = (color, percent) => {
  var num = parseInt(color.replace("#",""),16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = (num >> 8 & 0x00FF) + amt,
    G = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
};

const objectMap = (obj, fn) => Object.fromEntries(
  Object.entries(obj).map(
    ([k, v], i) => [k, fn(v, k, i)]
  )
)

const shadowUmbraColor = 'rgba(0, 0, 0, .14)';
const shadowPenumbraColor = 'rgba(0, 0, 0, .12)';
const ambientShadowColor = 'rgba(0, 0, 0, .20)';

const shadowUmbraMap = objectMap({
  0: '0 0 0',
  1: '0 2px 0',
  2: '0 4px 0',
  3: '1px 6px 0',
  4: '2px 4px 0',
  5: '4px 6px 0',
  6: '6px 10px 0',
  7: '6px 10px 0',
  8: '8px 10px 1px',
  9: '9px 12px 2px',
  10: '10px 13px 2px',
  11: '11px 14px 2px',
  12: '12px 16px 2px',
  13: '13px 18px 2px',
  14: '14px 21px 2px',
  15: '15px 22px 2px',
  16: '16px 23px 2px',
  17: '17px 24px 2px',
  18: '18px 25px 3px',
  19: '19px 26px 3px',
  20: '20px 28px 3px',
  21: '21px 30px 3px',
  22: '22px 32px 3px',
  23: '23px 36px 3px',
  24: '24px 38px 3px'
}, v => '0 ' + v + ' ' + shadowUmbraColor);

const shadowPenumbraMap = objectMap({
  0: '0 0 0',
  1: '2px 2px 0',
  2: '3px 4px 0',
  3: '3px 4px 0',
  4: '4px 5px 0',
  5: '4px 5px 0',
  6: '1px 18px 0',
  7: '2px 18px 1px',
  8: '3px 14px 2px',
  9: '3px 18px 3px',
  10: '4px 16px 3px',
  11: '4px 18px 3px',
  12: '5px 22px 4px',
  13: '5px 26px 4px',
  14: '5px 29px 4px',
  15: '6px 34px 5px',
  16: '6px 30px 5px',
  17: '6px 36px 5px',
  18: '7px 33px 6px',
  19: '7px 37px 6px',
  20: '8px 34px 6px',
  21: '8px 39px 7px',
  22: '9px 38px 7px',
  23: '9px 40px 7px',
  24: '9px 46px 8px'
}, v => '0 ' + v + ' ' + shadowPenumbraColor);

const ambientShadowMap = objectMap({
  0: '0 0 0',
  1: '1px 3px 0',
  2: '1px 5px 0',
  3: '1px 7px 0',
  4: '1px 8px 0',
  5: '1px 10px 0',
  6: '3px 5px 0',
  7: '3px 8px 0',
  8: '4px 15px 0',
  9: '5px 11px 0',
  10: '5px 14px 0',
  11: '6px 10px 0',
  12: '6px 13px 0',
  13: '7px 10px 0',
  14: '7px 12px 0',
  15: '7px 14px 0',
  16: '8px 13px 0',
  17: '8px 15px 0',
  18: '9px 11px 0',
  19: '9px 13px 0',
  20: '9px 15px 0',
  21: '10px 12px 0',
  22: '10px 15px 0',
  23: '11px 13px 0',
  24: '11px 15px 0'
}, v => '0 ' + v + ' ' + ambientShadowColor);

export const zDepth = (elevation, lighten=false) => {
  //! the class/element that you put this in needs to be: "position: relative;"
  const ratio = 0.16 / 24;
  const boxShadow = `
  box-shadow: ${shadowUmbraMap[elevation]}, ${shadowPenumbraMap[elevation]}, ${ambientShadowMap[elevation]};
  `
  const overlay = `
  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    //right: 0;
    //bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,${elevation * ratio});
    pointer-events: none;
  }
  `
  /*
  return css(`
  //${boxShadow};
  //${lighten && overlay};
  `)*/
  return boxShadow + '\n' + (lighten ? overlay : '');
}