import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100%;
  ${({ theme }) => css`
    background: ${theme.colors.primary};
  `}
`;

export const LogoWrapper = styled.div`
  margin-top: 20rem;
`;

export const WrapperTexts = styled.h2`
  font-size: 2.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: italic;
  color: #fafafa;
  text-align: center;
  animation: blink 2s;

  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
