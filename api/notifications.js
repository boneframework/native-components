import client from './client';

const register = pushToken => client.post('/api/notifications/register-token', {token: pushToken});

const send = (message, data) => {
    return client.post('/api/notifications/send-notification', {message, data})
};

export default {
    register, send
};
