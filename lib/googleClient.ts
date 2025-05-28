import { JWT } from 'google-auth-library';

const scopes = ['https://www.googleapis.com/auth/cloud-healthcare'];

export function getGoogleAuthClient() {
  return new JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes,
  });
}
