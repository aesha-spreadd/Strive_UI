import styled, { css } from 'styled-components';
import theme from '../theme';

export const StyledCommon = css`
  margin: 20px;
  border-radius: 5px;
  height: auto;
  padding: 10px 10px;
  max-width: 300px;
  width: 100%;
  background-color: ${theme.pastelCardColor};
`;

export const StyledCommonButton = css`
  background-color: ${theme.textColor};
  color: ${theme.primary};
  border: 1px solid ${theme.primary};
  cursor: pointer;
  width: 100%;
  max-width: 600px;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 10px 0 0;
  font-weight: 600;
  text-transform: uppercase;

  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: ${theme.textColor};
  }
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
    line-height: 20px;
  }
`;

export const StyledNormalCard = styled.div`
  ${StyledCommon};
  display: block;
  border: 3px solid ${theme.pastelCardColor};
  width: 100%;
  max-width: 300px;
`;

export const label = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  background-color: ${theme.primary};
  color: ${theme.textColor};
  font-weight: 600;
  font-size: 14px;
  padding: 5px 10px;
`;

export const closeIcon = styled.div`
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
  ${StyledCommon};
  position: relative;
  img {
    border-radius: 5px;
  }

  ${label}

  button {
    ${StyledCommonButton};
  }
`;

export const StyledDismissCard = styled.div`
  ${StyledCommon};
  position: relative;

  img {
    position: relative;
    object-fit: cover;
    border-radius: 5px;
  }

  ${closeIcon} {
    left: 270px;
  }

  button {
    ${StyledCommonButton};
  }
`;

export const StyledDismissCardOverlay = styled.div`
  ${StyledCommon};
  position: relative;

  ${closeIcon} {
    left: 270px;
  }
  button {
    ${StyledCommonButton};
  }
`;

export const StyledOverlay = styled.div`
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
    color: ${theme.textColor};
    display: block;
    font-size: 24px;
    height: 28px;
  }
`;

export const StyledHorizontalCard = styled.div`
  background-color: ${theme.textColor};
  border-radius: 5px;
  gap: 10px;
  display: flex;
  width: 100%;
  font-size: 6px;
  height: auto;
  max-width: 700px;
  padding: 10px;

  h2 {
    color: ${theme.primary};
    display: block;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }

  button {
    ${StyledCommonButton};
    width: 580px;
  }
`;

export const StyledOverlayed = styled.div`
  position: relative;
  max-height: 120px;
  height: auto;
  display: block;

  img {
    border-radius: 5px;
    display: inline;
    font-size: 6px;
    max-height: 170px;
    height: auto;
    width: 100%;
    overflow: hidden;
  }
`;
