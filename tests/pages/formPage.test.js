/**
 * @jest-environment jsdom
 */
 import {render, screen, waitForElementToBeRemoved} from '../../utils/test-utils'
 import userEvent from '@testing-library/user-event';
 import FormPage from "../../pages/formPage";


test('Should match snapshot', () => {
    const { asFragment } = render(<FormPage />);
    expect(asFragment()).toMatchSnapshot();
});
test("password checks should be red and next button should be disabled", () => {
    render(<FormPage />);
    expect(screen.getByText(/min 8 characters/i)).toHaveClass('text-red-500')
    expect(screen.getByText(/at least 1 symbol/i)).toHaveClass('text-red-500')
    expect(screen.getByText(/at least 1 capital letter/i)).toHaveClass('text-red-500')
    expect(screen.getByRole('button', {  name: /next/i})).toHaveAttribute('disabled')
});

test("min 8 character should change to green if you type 8 characters", () => {
    render(<FormPage />);
    expect(screen.getByText(/min 8 characters/i)).toHaveClass('text-red-500')
    userEvent.type(screen.getByPlaceholderText(/new password/i), 'loremipss');
    expect(screen.getByText(/min 8 characters/i)).toHaveClass('text-green-500')
    expect(screen.getByRole('button', {  name: /next/i})).toHaveAttribute('disabled')
}); 

test("At least 1 symbols should change to green", () => {
    render(<FormPage />);
    expect(screen.getByText(/at least 1 symbol/i)).toHaveClass('text-red-500')
    userEvent.type(screen.getByPlaceholderText(/new password/i), '$');
    expect(screen.getByText(/at least 1 symbol/i)).toHaveClass('text-green-500')
    expect(screen.getByRole('button', {  name: /next/i})).toHaveAttribute('disabled')
}); 

test("At least 1 capital letter should change to green", () => {
    render(<FormPage />);
    expect(screen.getByText(/at least 1 capital letter/i)).toHaveClass('text-red-500')
    userEvent.type(screen.getByPlaceholderText(/new password/i), 'P');
    expect(screen.getByText(/at least 1 capital letter/i)).toHaveClass('text-green-500')
    expect(screen.getByRole('button', {  name: /next/i})).toHaveAttribute('disabled')
}); 

test("All checks should be green and button still disabled", () => {
    render(<FormPage />);
    expect(screen.getByText(/min 8 characters/i)).toHaveClass('text-red-500')
    expect(screen.getByText(/at least 1 symbol/i)).toHaveClass('text-red-500')
    expect(screen.getByText(/at least 1 capital letter/i)).toHaveClass('text-red-500')

    userEvent.type(screen.getByPlaceholderText(/new password/i), 'Nahuel!"');

    expect(screen.getByText(/min 8 characters/i)).toHaveClass('text-green-500')
    expect(screen.getByText(/at least 1 symbol/i)).toHaveClass('text-green-500')
    expect(screen.getByText(/at least 1 capital letter/i)).toHaveClass('text-green-500')
    expect(screen.getByRole('button', {  name: /next/i})).toHaveAttribute('disabled')
}); 

test("All checks should be green and button still disabled", () => {
    render(<FormPage />);
    expect(screen.getByText(/min 8 characters/i)).toHaveClass('text-red-500')
    expect(screen.getByText(/at least 1 symbol/i)).toHaveClass('text-red-500')
    expect(screen.getByText(/at least 1 capital letter/i)).toHaveClass('text-red-500')

    userEvent.type(screen.getByPlaceholderText(/new password/i), 'Nahuel!"');

    expect(screen.getByText(/min 8 characters/i)).toHaveClass('text-green-500')
    expect(screen.getByText(/at least 1 symbol/i)).toHaveClass('text-green-500')
    expect(screen.getByText(/at least 1 capital letter/i)).toHaveClass('text-green-500')
    expect(screen.getByRole('button', {  name: /next/i})).toHaveAttribute('disabled')
}); 

test("typing diferent password 'Same password' should stay red and button disabled", () => {
    render(<FormPage />);
    expect(screen.getByText(/same password/i)).toHaveClass('text-red-500')
    
    userEvent.type(screen.getByPlaceholderText(/new password/i), 'Nahuel!"');
    userEvent.type(screen.getByPlaceholderText(/confirm/i), 'Nahuel"');

    expect(screen.getByText(/same password/i)).toHaveClass('text-red-500')
    expect(screen.getByRole('button', {  name: /next/i})).toHaveAttribute('disabled')
}); 

test("typing same password 'Same password' should change to green and button should be enable", async () => {
    render(<FormPage />);
    expect(screen.getByText(/same password/i)).toHaveClass('text-red-500')
    
    userEvent.type(screen.getByPlaceholderText(/new password/i), 'Nahuel!"');
    userEvent.type(screen.getByPlaceholderText(/confirm/i), 'Nahuel!"');

    expect(screen.getByText(/same password/i)).toHaveClass('text-green-500')
    expect(screen.getByRole('button', {  name: /next/i})).not.toHaveAttribute('disabled')
    userEvent.click(screen.getByRole('button', {  name: /next/i}))
}); 
