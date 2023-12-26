import styled, { css } from 'styled-components';

const sizes = {
  circle: { widths: '150px', heights: '150px' },
  square: { widths: '150px', heights: '150px' },
  response: { widths: '100%', heights: '100%' },
};

export const StyledImagesComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  height: auto;

  img {
    margin: auto;
    ${({ type }) =>
      type &&
      css`
        width: ${sizes[type].widths || 'auto'};
        height: ${sizes[type].heights || 'auto'};
      `};

    ${({ type }) =>
      type === 'square' &&
      css`
        object-fit: cover;
        overflow-clip-margin: content-box;
        overflow-x: clip;
        overflow-y: clip;
      `};

    ${({ type }) =>
      type === 'circle' &&
      css`
        border-radius: 50%;
        overflow: hidden;
        margin: 0 5px;
      `};

    ${({ type }) =>
      type === 'response' &&
      css`
        object-fit: cover;
        width: 100%;
        height: auto;

        @media (min-width: 769px) {
          width: 800px;
          height: 480px;
        }

        padding: 10px;
        margin: 10px;
      `};
  }
`;

export default StyledImagesComponent;
