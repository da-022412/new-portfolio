import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

import { toRem } from '../../utils.js';

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
    border: 0;
    border-bottom: 2px solid #f7f7f7;
    color: 
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
`;

const Input = styled.input(inputStyles);

const Textarea = styled.textarea(inputStyles);

const Button = styled.button`
    background-color: transparent;
    border: none;
    color: var(--color-text);
    display: block;
    font-family: var(--primary-font);
    font-size: var(--body-text);
    margin: ${toRem(20)} 0;
    padding: 0;
    position: relative;
    text-decoration: none;

    &:after {
        background-color: #000;
        bottom: -4px;
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        width: 100%;
        transition: height 0.3s ease;
        z-index: -1;
    }

    &:hover {
        color: #fff;
        cursor: pointer;
    }

    &:hover:after {
        height: calc(100% + 4px);
    }
`;

export default Form;
