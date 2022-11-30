import { Logo } from '../../components/Logo';
import * as S from './styles';

export const HomeTemplate = () => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.WrapperTexts>We will change your life with technology!</S.WrapperTexts>
    </S.Wrapper>
  );
};
