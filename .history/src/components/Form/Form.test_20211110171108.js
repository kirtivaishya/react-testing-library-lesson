import Form from './Form';
import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it.skip('should render the form', () => {
    //1.Arrange 
    render(<Form/>);
    //2.Act 
    const form =screen.getByRole("form");
    //3.Assertive 
    expect(form).toBeInTheDocument();
});

it.skip('should render the input', () => {
    //1.Arrange 
    render(<Form/>);
    //2.Act 
    const nameInput =screen.getByRole("textbox",{name:/name/i});
    const nameEmail =screen.getByRole("textbox",{name:/email/i});
    const emailInput = screen.getByPlaceholderText(/e.g. test@test.com/i)
    const inputs = screen.getAllByRole("textbox");
    inputs.forEach(element => {
        expect(element).toBeInTheDocument();
        
    });
    //3.Assertive 
    expect(nameEmail).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeTruthy();
});

it('should render the success ', () => {
    const button = screen.getByRole("button",{name:/Sign In/i});

    userEvent.click(button);
   const successText= screen.queryByText(/Thank you for submitting! We'll be in touch/i);
   expect().toBeFalsy();
});