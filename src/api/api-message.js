import axios from 'axios'

const headers = JSON.parse(sessionStorage.getItem('userLoggedInDetails'))

const axiosFetch = headers
  ? axios.create({
      baseURL: 'http://206.189.91.54/api/v1',
      headers: {
        'access-token': headers['access-token'],
        client: headers['client'],
        expiry: headers['expiry'],
        uid: headers['uid'],
      },
    })
  : null

export const sendMessage = async ({ receiver_id, receiver_class, body }) => {
  try {
    const response = await axiosFetch.post('/messages', {
      receiver_id,
      receiver_class,
      body,
    })
    return response
  } catch (error) {
    return error
  }
}

export const getMessages = async ({ receiver_id, receiver_class }) => {
  try {
    const response = await axiosFetch.get('/messages', {
      params: { receiver_class, receiver_id },
    })
    return response
  } catch (error) {
    return error
  }
}
