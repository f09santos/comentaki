import React, {useContext, useState } from 'react'
import { AuthContext } from './auth'

const SignInUser = () => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({email: '', passwd: ''})
    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]:evt.target.value
        })
    }
    if (auth.user !== null) {
        return null
    }
    return(
        <>
        <h3>Entrar na sua conta:</h3>
        {
            auth.signInUser.signInUserState.error !== '' &&
            <p>{auth.signInUser.signInUserState.error}</p>
        }
        
        <input type='text' placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} />
        <input type='password' placeholder='Sua Senha' value={form.passwd} onChange={onChange('passwd')} />
        <button onClick={() => {
            auth.signInUser.signInUser(form.email, form.passwd)
        }}>Entrar</button>
        </>
    )

}
export default SignInUser