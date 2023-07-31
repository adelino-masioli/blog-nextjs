import { render, screen } from '@testing-library/react';

import { Logo } from './Logo';

describe('Logo', () => {
  it('should render logo', () => {
    render(<Logo />);

    const logoText = screen.getByRole('heading', { name: 'Logo' });

    expect(logoText).toBeVisible();
  });
});
