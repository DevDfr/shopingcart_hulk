import axios from 'axios'
import { message } from 'antd';
import { IAuth } from '../../interfaces';

const keyApp = process.env.REACT_APP_API_KEY

export const signIn = (credentials: IAuth) => {

    axios({
        method: 'POST',
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${keyApp}`, 
        data: {
            email: credentials.username,
            password: credentials.password,
            returnSecureToken: true
        }
        }).then(res => {

            localStorage.setItem('token', res.data.idToken)
            window.location.href = '/'
            
        }).catch(err => {
            message.error('Credenciales invalidas');
        })

}

export const signUp = (credentials: IAuth) => {
        
    axios({
        method: 'POST',
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${keyApp}`, 
        data: {
            email: credentials.username,
            password: credentials.password,
            returnSecureToken: true
        }
        }).then(res => {

            message.success(`${res.data.email} registrado con exito!`);
            
        }).catch(err => {
            message.error('Registra un correo electronico valido');
        })

}

export const signOut = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
}

