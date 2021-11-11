import Form from './Form';
import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('should render the form', () => {
    //1.Arrange 
    render(<Form/>);
    //2.Act 
    const form =screen.findByRole("form");
    //3.Assertive 
    expect(form).toBeInTheDocument();
});