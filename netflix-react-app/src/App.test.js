// Testing Pattern: AAA - Arrange, Act, Assert 
// Let's take up app comp for testing 
// Arranging (A)
import { render, screen } from '@testing-library/react';
import App from './App';

// group of related test specs - TEST SUITE
xdescribe('AppComponent', () => {

  // test specs/ test cases 
  test('should render app comp', ()=>{
    // Assert (A)
    expect(App).toBeTruthy(); 
  });

  // test specs/ test cases 
  it(`should have 'Welcome to Netflix!' text`, () => {
    // Act (A)
    render(<App />); // lets render the app comp 
    // let's query thru the dom elements 
    const welcomeTextEl = screen.getByText('Welcome to Netflix!');

    // Assert (A)
    expect(welcomeTextEl).toBeInTheDocument();
  })

});






