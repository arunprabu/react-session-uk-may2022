import { fireEvent, render, screen } from '@testing-library/react';
import Organization from './Organization';
import renderer from 'react-test-renderer';

describe('OrganizationComponent', () => {
 
  // Test Spec #1 
  it('should be available within the App', () => {
    expect(Organization).toBeDefined();
  });

  // Test Spec #2
  it(`has 'Welcome to our Organization's Official Page!'`, () => {
    render(<Organization />);
    const officialTextEl = screen.getByText(`Welcome to our Organization's Official Page!!!`);
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

  // Test Spec #7 - checking if the input el is working with onChange event and states
  it('should update country onChange Event', () => {
    render(<Organization />);
    // find the input element to handle onChange 
    const countryInput = screen.getByPlaceholderText('Enter Country Name');
    // now checking whether onChange is working or not
    // mock fire change event with the mock value 
    fireEvent.change(countryInput, { target: { value: 'Canada'}} );
    // finally checking if the input element is showing the entered country in JSX
    expect(countryInput.value).toBe('Canada');
    expect(screen.getByTestId('visitEl')).toHaveTextContent(`Visit Cognizant Canada Website`);
  });
  
  // snapshot testing
  it('should have right company snapshot', () => {
    // to take a snapshot we need a tool - react-test-renderer (npm i react-test-renderer@17.0.2 -D)
    // taking a snapshot and converting it to JSON
    // [RECOMMENDED]: Take snapshot with necessary props
    const snapshotJSON = renderer.create(<Organization companyName='Cognizant Technologies'/>).toJSON();
    // lets assert with a matcher -- toMatchSnapshot() from jest 
    expect(snapshotJSON).toMatchSnapshot();
  });

  // AJAX call - mocking 
  
});