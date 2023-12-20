import styled from 'styled-components';
import theme from '../theme';

const sizes = {
  h1: {
    fontSize: '3rem',
    fontWeight: '800',
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: '700',
  },
  h3: {
    fontSize: '1.8rem',
    fontWeight: '600',
  },
  h4: {
    fontSize: '1.4rem',
    fontWeight: '500',
  },
  h5: {
    fontSize: '1.2rem',
    fontWeight: '500',
  },
  h6: {
    fontSize: '1rem',
    fontWeight: '400',
  },
};

export const StyledTypographyComponent = styled.div`
  font-family: 'Rubik', sans-serif;
  margin-top: 5px;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  color: ${({ typeColor }) => theme[typeColor] || theme.textLinkColors};

  ${({ as }) => `
    font-size: ${sizes[as]?.fontSize};
    font-weight: ${sizes[as]?.fontWeight};
  `}
`;
