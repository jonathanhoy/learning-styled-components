import { css } from 'styled-components';

// media query object
export const size = {
  small: 400,
  med: 960,
  large: 1140
}

// media query function
export const media = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc;
}, {});