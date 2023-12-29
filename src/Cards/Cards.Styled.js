import styled, { css } from 'styled-components';
import theme from '../theme';

export const commonStyled = css`
  margin: 20px;
  border-radius: 5px;
  height: auto;
  padding: 10px 10px;
  width: 300px;
  background-color: ${theme.pastelCardColor};
`;

export const commonButton = css`
  background-color: ${theme.textColor};
  color: ${theme.primary};
  border: 1px solid ${theme.primary};
  cursor: pointer;
  height: 38px;
  width: 298px;
  padding: -1px 110px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 10px;
  font-family: Arial;
  font-weight: 600;
  text-transform: uppercase;

  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: ${theme.textColor};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledCardComponent = styled.div`
  font-family: Rubik, sans-serif;
  h2 {
    color: ${theme.primary};
    font-size: 18px;
    font-weight: 500;
  }

  p {
    color: ${theme.cardTextColor};
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  }
`;

export const StyledNormalCard = styled.div`
  ${commonStyled};
  display: block;
  border-radius: 5px;
  border: 3px solid ${theme.pastelCardColor};
  column-gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 129.875px;
  padding: 50px 50px;
  width: 695px;
  flex-direction: column;
  height: 109.875px;
  max-width: 300px;
  padding: 10px;
  transition: all 0.5s ease;
`;

export const labelText = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  background-color: ${theme.primary};
  color: ${theme.textColor};
  font-weight: 600;
  font-size: 14px;
  padding: 5px 10px;
`;

export const StyledBadgesCard = styled.div`
  ${commonStyled};
  position: relative;
  img {
    position: relative;
    object-fit: cover;
    border-radius: 5px;
    top: -10px;
  }
  ${labelText}

  button {
    ${commonButton};
  }
`;

export const StyledDismissCard = styled.div`
  ${commonStyled};
  position: relative;

  img {
    position: relative;
    object-fit: cover;
    border-radius: 5px;
    top: -10px;
  }

  ${({ unique }) =>
    unique !== 'badge' &&
    `
  ${labelText} {
   left:270px;
   top:26px;
  }
`}

  button {
    ${commonButton};
  }
`;

export const StyledDismissCardOverlay = styled.div`
  ${commonStyled};
  position: relative;
  ${({ unique }) =>
    unique !== 'badge' &&
    `
  ${labelText} {
   left:270px;
   top:22px;
  }
`}
  button {
    ${commonButton};
  }
`;

export const Overlay = styled.div`
  position: relative;

  img {
    margin-top: 2px;
    border-radius: 5px;
    width: 100%;
  }

  div {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    transition-timing-function: ease;
    color: rgb(246, 249, 252);
    display: block;
    font-family: Rubik, sans-serif;
    font-size: 24px;
    height: 28.5px;
  }
`;

export const StyledHorizontalCard = styled.div`
  background-color: rgb(246, 249, 252);
  border-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: Rubik, sans-serif;
  font-size: 6px;
  height: auto;
  max-width: 700px;
  padding: 10px;
  row-gap: 10px;
  transition: all 0.5s ease;

  h2 {
    color: rgb(255, 78, 84);
    display: block;
    font-family: Rubik, sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin-top: -15px;
  }

  p {
    margin-top: -7px;
  }
  button {
    ${commonButton};
    width: 580px;
  }
`;

export const Overlayed = styled.div`
  position: relative;
  height: 120.281px;
  display: block;

  img {
    border-radius: 5px;
    display: inline;
    font-family: Rubik, sans-serif;
    font-size: 6px;
    height: 70px;
    width: auto;
    overflow: hidden;
  }
`;
