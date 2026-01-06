import client from './client';

const register = (pushToken: string) => client.post('/api/notifications/register-token', { token: pushToken });

const send = (message: string, data: any) => {
  return client.post('/api/notifications/send-notification', { message, data });
};

export default {
  register,
  send,
};
