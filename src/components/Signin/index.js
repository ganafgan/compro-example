import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormLabel,
    Text,
    FormH1,
    FormInput,
    FormButton

} from './SigninElement'

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Dolla</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Signin to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>    
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
