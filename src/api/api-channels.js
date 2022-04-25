import axios from 'axios';

let axiosFetch =  axios.create({
    baseURL: 'http://206.189.91.54/api/v1'
})


//creat channel
export const channelCreate = async ({ name, user_ids }) => {
    let headers = JSON.parse(sessionStorage.getItem('userLoggedInDetails'))
    
    try {
        const response = await axiosFetch.post(
            '/channels/', 
            {
                name, 
                user_ids },
            {
                headers: {
                    "access-token": headers['access-token'],
                    client: headers.client,
                    expiry: headers.expiry,
                    uid: headers.uid
                }
            })
        return response;
    } catch (error) {
        return error;
    }
}

//Getting all channels
export const channelsGet = async ({ token, client, expiry, uid }) => {
    try {
        const response = await axiosFetch.get(
            '/channels/',
            {
                headers: {
                    "access-token": token,
                    client,
                    expiry,
                    uid
                }
            })
        return response;
    } catch (error) {
        return error;
    }
}

//Get all owned channels
export const channelsOwnedGet = async ({ token, client, expiry, uid }) => {
    try {
        const response = await axiosFetch.get(
            '/channel/owned',
            {
                headers: {
                    "access-token": token,
                    client,
                    expiry,
                    uid
                }
            }
            )
        return response;
    } catch (error) {
        return error;
    }
}

// Connect to API to get channel details via channel ID
export const channelDetailsGet = async ({channelId, headers: {token, client, expiry, uid}}) => {
    try {
        const response = await axiosFetch.get(
            `/channels/${channelId}/`,
            {
                headers: {
                    "access-token": token,
                    client,
                    expiry,
                    uid
                }
            })
        return response;
    } catch (error) {
        return error;
    }
}

// Connect to API to add members to a channel
export const channelAddMember = async ({id, member_id}) => {
    let headers = JSON.parse(sessionStorage.getItem('userLoggedInDetails'))

    try {
        const response = await axiosFetch.post(
            `/channel/add_member/`,
            {
                id,
                member_id
            },
            {
                headers: {
                    "access-token": headers['access-token'],
                    client: headers.client,
                    expiry: headers.expiry,
                    uid: headers.uid
                }
            })
            console.log(response);
            return response;
    } catch (error) {
        console.log(error)
        return error;
    }
}

// Connect to API to search for a particular user
export const getUser = async ({id, headers: {token, client, expiry, uid}}) => {
    return axiosFetch.get(
        `/users/`,
        {
            headers: {
                "access-token": token,
                client,
                expiry,
                uid
            }
        })
        .then(response => response)
        .then(res => {
            return res.data.data.filter(data => data.id === id)
        })
        .catch(error => error)
}