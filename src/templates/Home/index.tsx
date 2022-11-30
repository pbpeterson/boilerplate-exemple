import { Logo } from '@/components/Logo/index';
import type { HomeProps } from '@/pages/index';
import * as S from './styles';

export const HomeTemplate = ({ textInfo }: HomeProps) => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.WrapperTexts>{textInfo}</S.WrapperTexts>
    </S.Wrapper>
  );
};
