import { render, screen, act } from '../../../test-utils';
import { Introtron } from '../index';

jest.useFakeTimers();

describe('Introtron', () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  test('renders initial static content correctly', () => {
    render(<Introtron />);
    
    // Check headings
    expect(screen.getByText('Hello There!')).toBeInTheDocument();
    expect(screen.getByText('My Name is')).toBeInTheDocument();
    expect(screen.getByText('Ethan')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    
    // Check story section
    expect(screen.getByText('The Story:')).toBeInTheDocument();
    expect(screen.getByText(/I'm a Frontend Developer specializing in React/)).toBeInTheDocument();
  });

  test('renders avatar image with correct attributes', () => {
    render(<Introtron />);
    
    const avatar = screen.getByAltText('Hero Avatar1');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'avatar1.png');
  });

  test('typing animation starts empty and shows text', () => {
    render(<Introtron />);
    
    // Initially, text should be empty
    const textElements = screen.getAllByText('');
    expect(textElements.length).toBeGreaterThan(0);
    
    // After some time, text should start appearing
    act(() => {
      jest.advanceTimersByTime(300); // Advance 4 characters worth of time
    });
    
    // Should find "I am" at the start
    const partialText = screen.getByText(/^I am/);
    expect(partialText).toBeInTheDocument();
  });

  test('component has correct responsive styling', () => {
    render(<Introtron />);
    
    const mainBox = screen.getByTestId('introtron-main');
    expect(mainBox).toHaveStyle({
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    });
  });
}); 