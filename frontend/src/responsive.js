
import {css } from 'styled-components';
export const mobile =(props)=>{
  return css `
  @media only screen and (max-width:320px ){  /* this is end point of mobile */
  ${props}
}

  `;
};