import { render, screen } from '@testing-library/react';
import Organization from './Organization';

describe('OrganizationComponent', () => {
 
  // Test Spec #1 
  it('should be available within the App', () => {
    expect(Organization).toBeDefined();
  });

  // Test Spec #2
  it(`has 'Welcome to our Organization's Official Page!'`, () => {
    render(<Organization />);
    const officialTextEl = screen.getByText(`Welcome to our Organization's Official Page!`);
    expect(officialTextEl).toBeInTheDocument();
  });

  // Test Spec #3 // styles
  it('has css style with text color green', () => {
    render(<Organization />);
    expect(screen.getByTestId('employeeCountEl')).toHaveStyle('color:green');
  });

  // Test Spec #4 // css class
  it('has button with css class btn', () => {
    render(<Organization />);
    expect(screen.getByRole('button')).toHaveClass('btn');
  });

  // Test Spec #5 // props 
  it('receives props companyName and displays in template', () => {
    render(<Organization companyName='Cognizant Technologies'/>);
    expect(screen.getByTestId('companyNameEl')).toHaveTextContent('Cognizant Technologies');
  });

  // Test Spec #6 input with placeholder 
  it('has an input with placeholder Enter Country Name', () => {
    render(<Organization />);
    expect(screen.getByPlaceholderText('Enter Country Name')).toBeTruthy();
  });
  

  // Prereq: Hooks 
  // event handlers
  // states 
  // snapshot 
  // AJAX call - mocking 
});