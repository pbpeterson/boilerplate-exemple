import styled from 'styled-components';

export const LogoWrapper = styled.div`
  @keyframes drawing {
    100% {
      stroke-dashoffset: 0;
    }
  }

  svg {
    stroke-dasharray: 150;
    animation: rotate 3.5s infinite;
  }

  svg path {
    fill: none;
    stroke: #272f9b;
    stroke-dasharray: 120;
    stroke-dashoffset: 120;
    stroke-linecap: round;
    animation: drawing 3s forwards normal;
  }
`;
