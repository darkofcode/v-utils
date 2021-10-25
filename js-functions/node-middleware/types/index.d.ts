export type authToken = {
  id: string;
  name: string;
  email: string;
  is_email_verified: boolean;
  photo_url: string;
  provider: string;
};
export type verifyGoogleToken = authToken | false;
