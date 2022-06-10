// API Testing
import { render, screen, waitFor } from "@testing-library/react";
import { fetchAPI } from "../../../Utils/fetchAPI";
import Users from "./Users";

jest.mock("../../../Utils/fetchAPI");

/* it('fetches users via api call', async() => {
  render(<Users />);

  const userNameEl = await screen.findByText('Ervin Howell');
  expect(userNameEl).toBeInTheDocument();
}); 
*/

/* 3 Challenges / Disadvantages 
  1. Time Consuming 
  2. Availability of REST API (may be down or still in dev)
  3. No Guarantee for the sample data like the above 
*/

// Mocking API Calls
// Here's our mock data
const mockUserList = [
  {
    id: 1,
    name: "Leanne Graham",
    phone: "1-770-736-8031 x56442",
    email: 'a@b.com'
  },
  {
    id: 2,
    name: "John Williams",
    phone: "34532432",
    email: 'j@k.com'
  }
]

it('[MOCKED]: fetches userList properly via api call', async() => {
  fetchAPI.mockResolvedValue(mockUserList);
  render(<Users />);

  await waitFor( () => {
    screen.getByText('John Williams');
  });

})




