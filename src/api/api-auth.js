import axios from 'axios';

export const baseUrl = axios.create({
    baseURL: 'http://206.189.91.54/api/v1/'
})

export const userRegistration = async ({email, password, password_confirmation}) => {
    try {
        const response =  await baseUrl.post('auth/', {
            email, password, password_confirmation
        })
        return response;
    } catch (error) {
        return error;
    }
}

export const userLogin = async ({email, password}) => {
    try {
        const response = await baseUrl.post('auth/sign_in/', {
            email, password
        })
        return response;
    } catch (error) {
        return error;
    }
}