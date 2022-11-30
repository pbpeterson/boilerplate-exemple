import { Meta } from '@storybook/react';
import { Logo } from '.';

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
} as Meta;

export const GuidanceLogo = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      height: '100vh',
    }}
  >
    <Logo />
  </div>
);
