import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home', () => {
  it('deve exibir o título principal', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /Portal de Viagens/i });
    expect(heading).toBeInTheDocument();
  });
});
