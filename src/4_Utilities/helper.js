/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import './color';
import { color } from './color';

// Media Queries ==============================================================

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

// Material Design Elevation ==================================================

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

export const zDepth = (elevation, lighten=false, unlighten=false) => {
  //! the class/element that you put this in needs to be: "position: relative;"
  const ratio = 0.16 / 24;
  const isNegative = elevation < 0;

  const boxShadow = () => {
    const absElevation = Math.abs(elevation);
    const inset = (isNegative) ? 'inset ' : '';

    return (`
      box-shadow: ${inset + shadowUmbraMap[absElevation]}, ${inset + shadowPenumbraMap[absElevation]}, ${inset + ambientShadowMap[absElevation]};
    `)
  }

  const overlay = () => {
    const backgroundColor = (isNegative) ? '0, 0, 0' : '255, 255, 255';

    return (`
      &:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(${backgroundColor}, ${elevation * ratio});
        pointer-events: none;
      }
    `)
  }

  /*
  return css(`
  //${boxShadow};
  //${lighten && overlay};
  `)*/
  return boxShadow() + '\n' + (lighten ? overlay() : (unlighten ? '&:after {all: unset;}' : ''));
}


export const clone = v => JSON.parse(JSON.stringify(v));


/*
function hexToRgb(hex) {
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;
  return [r, g, b];
}

function relativeLuminance(R8bit, G8bit, B8bit) {
  // from http://www.w3.org/TR/WCAG20/#relativeluminancedef
  var RsRGB = R8bit/255;
  var GsRGB = G8bit/255;
  var BsRGB = B8bit/255;

  var R = (RsRGB <= 0.03928) ? RsRGB/12.92 : Math.pow((RsRGB+0.055)/1.055, 2.4);
  var G = (GsRGB <= 0.03928) ? GsRGB/12.92 : Math.pow((GsRGB+0.055)/1.055, 2.4);
  var B = (BsRGB <= 0.03928) ? BsRGB/12.92 : Math.pow((BsRGB+0.055)/1.055, 2.4);

  // For the sRGB colorspace, the relative luminance of a color is defined as: 
  var L = 0.2126 * R + 0.7152 * G + 0.0722 * B;

  return L;
}

function luminanace(r, g, b) {
  var a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928
          ? v / 12.92
          : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(rgb1, rgb2) {
  var lum1 = luminanace(rgb1[0], rgb1[1], rgb1[2]);
  var lum2 = luminanace(rgb2[0], rgb2[1], rgb2[2]);
  var brightest = Math.max(lum1, lum2);
  var darkest = Math.min(lum1, lum2);
  return (brightest + 0.05)
       / (darkest + 0.05);
}



export const textColor = (backgroundColor) => {
  // 1. determine if textColor will be white or black based on backgroundColor
  // 2. calculate the required opacity to achieve the desired contrast between textColor and backgroundColor
  // 3. apply opacity to textColor and return textColor
  const bcRGB = hexToRgb(backgroundColor);
  //const bcLuminance = luminance(...bcRGB);
  const bcLuminosity = '';
  const bcBrightness = Math.round(((parseInt(bcRGB[0]) * 299) +
                      (parseInt(bcRGB[1]) * 587) +
                      (parseInt(bcRGB[2]) * 114)) / 1000);
                      
  let textColour = (bcBrightness > 125) ? [0, 0, 0] : [255, 255, 255];
  let contrasT = contrast(bcRGB, textColour);
  //console.log(contrasT);
}*/


//textColor('#000000')