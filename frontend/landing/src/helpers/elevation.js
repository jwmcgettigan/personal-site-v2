import { css } from '@emotion/core';

// Material Design Elevation

/**
 * 
 * @param {Number} dp - the distance from the surface on the z-axis using density-independent pixels (dp).  Positive dp applies outer shadows.  Negative dp applies inner shadows.
 * @param {Boolean} lighten - applies lightness to a surface through the application of a semi-transparent overlay. Adheres to material design standards.
 * @param {Boolean} unlighten - removes the applied lightness overlay.  This option may be useful for removing an overlay conditionally or with media queries.
 */
export const elevate = (dp, lighten=false, unlighten=false) => {
  const isNegative = dp < 0;

  // Applies an outer shadow if dp is positive and an inner shadow if dp is negative.
  const elevation = () => {
    const absDp = Math.abs(dp);
    const inset = (isNegative) ? 'inset ' : '';
    //TODO: Consider how to implement z-index when considering negative dp.

    return css`
      box-shadow: ${inset + shadowUmbraMap[absDp]}, ${inset + shadowPenumbraMap[absDp]}, ${inset + ambientShadowMap[absDp]};
      z-index: ${dp};
    `;
  }

  // Applies or removes a lightness overlay depending on the 'lighten' and 'unlighten' options.
  const overlay = () => {
    const backgroundColor = (isNegative) ? '0, 0, 0' : '255, 255, 255';
    //TODO: Figure out how I chose this ratio.
    const ratio = 0.16 / 24;

    if(lighten) {
      return css`
        &:after {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(${backgroundColor}, ${dp * ratio});
          pointer-events: none;
        }
      `;
    } else {
      return '';
    }
  }

  return css`
    ${elevation()};
    ${overlay()};
  `;
}


const objectMap = (obj, fn) => Object.fromEntries(
  Object.entries(obj).map(
    ([k, v], i) => [k, fn(v, k, i)]
  )
);

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