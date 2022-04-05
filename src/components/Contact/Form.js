import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

import { toRem, btnStyles } from '../../utils.js';

import BodyText from '../BodyText';

const Form = () => {
    const [state, handleSubmit] = useForm('mzbogqdo');

    if (state.succeeded) {
        return <BodyText>Thanks for your submission!</BodyText>;
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <label htmlFor='name' hidden>
                Name
            </label>
            <Input
                id='name'
                placeholder='Name'
                name='name'
                type='text'
                required
            />
            <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
            />
            <label htmlFor='email' hidden>
                Email
            </label>
            <Input
                id='email'
                placeholder='Email'
                name='email'
                type='email'
                required
            />
            <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
            />
            <label htmlFor='message' hidden>
                Message
            </label>
            <Textarea
                id='message'
                placeholder='Message'
                name='message'
                rows='4'
            />
            <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
            />
            <Button type='submit' disabled={state.submitting}>
                Submit
            </Button>
            <ValidationError errors={state.errors} />
        </StyledForm>
    );
};

const inputStyles = [
    `
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #f7f7f7;
    color: #fff;
    display: block;
    font-family: var(--primary-font);
    font-size: ${toRem(20)};
    margin-bottom: ${toRem(16)};
    outline: none;
    padding: ${toRem(16)} 0;
    width: 100%;

    &::placeholder {
        font-family: var(--primary-font);
        font-size: ${toRem(20)};
    }
`,
];

const StyledForm = styled.form`
    width: 50%;

    @media (max-width: 980px) {
        width: 100%;
    }
`;

const Input = styled.input(inputStyles);

const Textarea = styled.textarea(inputStyles);

const Button = styled.button(btnStyles);

export default Form;
