import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders jumbotron text', () => {
  render(<App />);
  const linkElement = screen.getByText(/unofficial nba/i);
  expect(linkElement).toBeInTheDocument();
  // screen.debug()
});

test('should render favourite', () => {
  render(<App/>)
  const favButton = screen.getByRole("favourite-button")
  fireEvent.click(favButton)
  screen.getByText("Your Favourites")
})

test('should go back to home when clicking home button at favourite page', () => {
  render(<App/>)
  const favButton = screen.getByRole("favourite-button")
  const homeButton = screen.getByRole("home-button")
  fireEvent.click(favButton)
  fireEvent.click(homeButton)
  screen.getByRole("card-gallery")
})

// test('menampilkan data card dari fetch', async () => {
//   await act( async () => render(<App />))
//   await waitFor( async () => screen.findByRole("team-card"), {timeout: 3000} )
//   // screen.debug()
// })
