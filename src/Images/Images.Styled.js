import styled, { css } from 'styled-components';

const sizes = {
  circle: { widths: '150px', heights: '150px' },
  square: { widths: '150px', heights: '150px' },
  response: { widths: '100%', heights: '100%' },
};

export const StyledImagesComponent = styled.div`
  gap: 1rem;
  justify-content: center;
  align-items: center;
  height: auto;

  img {
    margin: auto;
    ${({ shape }) =>
      shape &&
      css`
        width: ${sizes[shape].widths || 'auto'};
        height: ${sizes[shape].heights || 'auto'};
      `};

    ${({ shape }) =>
      shape === 'square' &&
      css`
        object-fit: cover;
        overflow-clip-margin: content-box;
        overflow-x: clip;
        overflow-y: clip;
      `};

    ${({ shape }) =>
      shape === 'circle' &&
      css`
        border-radius: 50%;
        overflow: hidden;
        margin: 0 5px;
      `};

    ${({ shape }) =>
      shape === 'response' &&
      css`
        object-fit: cover;
        width: 100%;
        height: auto;
        padding: 10px;
        margin: 10px;

        @media (max-width: 769px) {
          width: 100%;
          height: auto;
        }
      `};
  }
`;
