import { render } from '../../../test-utils';
import { Navbar } from '../index';

describe('Navbar', () => {
  it('renders social media links', () => {
    const { container } = render(<Navbar />);
    const links = container.querySelectorAll('a');
    expect(links).toHaveLength(4); // GitHub, YouTube, LinkedIn, and Email links
  });

  it('renders with correct styling', () => {
    const { container } = render(<Navbar />);
    const navbar = container.querySelector('div > div'); // The Flex container
    expect(navbar).toHaveStyle({
      background: 'linear-gradient(135deg, #0d1b2a 50%, #1b263b 75%, #162a45 100%)'
    });
  });
}); 