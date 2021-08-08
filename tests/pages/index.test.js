

import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Home from "../../pages/index";


describe("Home test", () => {
  test('Should match snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
});
  test("checkbox should be unChecked and next button shouldn't be in the page", () => {
    render(<Home />);
    expect(screen.getByRole('checkbox')).not.toBeChecked
    expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument
  });

  test("after click on checkBox button should appear", () => {
    render(<Home />);
    userEvent.click(screen.getByRole('checkbox'))
    expect(screen.queryByRole('button', { name: /next/i })).toBeInTheDocument
  });

  test("after click on checkBox button should appear", () => {
    render(<Home />);
    userEvent.click(screen.getByRole('checkbox'))
    userEvent.click(screen.queryByRole('button', { name: /next/i }))
  });
});



/* 
const handleSubmit = jest.fn() */