import client from './client';

const activateAccount = (email: string, token: string, clientId: string, password: string) => client.post('/api/user/activate', { email, token, clientId, password });
const getProfile = (token: string) => client.get('/api/user/profile', {}, {
  headers: { Authorization: 'Bearer ' + token },
});
const register = (userInfo: any) => client.post('/api/user/register', userInfo);
const resendactivationEmail = (email: string) => client.post('/api/user/resend-activation-email', { email });
const updateProfile = (profileInfo: any) => client.put('/api/user/profile', profileInfo);
const validateEmailToken = (email: string, token: string) => client.post('/api/user/validate-email-token', { email, token });
const uploadUserImage = (formData: any) => client.post('/api/user/image', formData, {
  headers: { 'Content-Type': 'multipart/form-data' },
});
const userImage = () => client.get('/api/user/image');
const userSettings = () => client.get('/api/user/settings');
const updateUserSettings = (settings: any) => client.put('/api/user/settings', settings);
const uploadUserBackgroundImage = (formData: any) => client.post('/api/user/background-image', formData, {
  headers: { 'Content-Type': 'multipart/form-data' },
});
const userBackgroundImage = () => client.get('/api/user/background-image');

export default {
  activateAccount,
  getProfile,
  register,
  resendactivationEmail,
  updateProfile,
  uploadUserImage,
  uploadUserBackgroundImage,
  userBackgroundImage,
  userImage,
  userSettings,
  updateUserSettings,
  validateEmailToken,
};
