import { render, screen } from '../../../test-utils';
import { Skills } from '../index';

describe('Skills', () => {
  test('renders all section headings', () => {
    render(<Skills />);
    
    expect(screen.getByText('Technologies')).toBeInTheDocument();
    expect(screen.getByText('Workflow and Leadership')).toBeInTheDocument();
    expect(screen.getByText('Interests')).toBeInTheDocument();
  });

  test('renders technology skills correctly', () => {
    render(<Skills />);
    
    const techSkills = [
      'React & React Native',
      'Chakra UI & Tailwind CSS',
      'Node and Express',
      'Typescript & ES6',
      'Github & Gitlab',
      'Jest and Cypress'
    ];

    techSkills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  test('renders workflow and leadership skills correctly', () => {
    render(<Skills />);
    
    const workflowSkills = [
      'Mentoring and Code Review',
      'Collaboration and Communication',
      'Documentation and Design',
      'Jira and Ticketing',
      'Agile & Scrum Methodologies',
      'Performance Optimization'
    ];

    workflowSkills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  test('renders interests correctly', () => {
    render(<Skills />);
    
    const interests = [
      'Terrible at Golf',
      'Beats the S&P 500 every year',
      'Avid Gym Goer',
      'Secretly Enjoys Leet Coding ^_^',
      'League of Legends',
      'Discord Community Engagement'
    ];

    interests.forEach(interest => {
      expect(screen.getByText(interest)).toBeInTheDocument();
    });
  });

  test('renders with correct layout structure', () => {
    render(<Skills />);
    
    const mainBox = screen.getByTestId('skills-container');
    expect(mainBox).toHaveStyle({
      width: '100vw',
      minHeight: '40vh',
      backgroundColor: 'var(--chakra-colors-gray-100)'
    });
  });
}); 