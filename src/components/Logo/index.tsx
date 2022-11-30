import * as S from './styles';

export const Logo = () => {
  return (
    <S.LogoWrapper>
      <svg
        width="200"
        height="200"
        viewBox="0 0 51 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="26" cy="25" r="23" stroke="#272f9b" strokeWidth="4" />
        <path
          d="M41.5 10L6 26L25 28.5L28 43.5L41.5 10Z"
          stroke="#272f9b"
          strokeWidth="3"
        />
      </svg>
    </S.LogoWrapper>
  );
};
