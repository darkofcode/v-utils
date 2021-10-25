import { OAuth2Client } from "google-auth-library";
import { get } from "../object/get";

/**
 *
 * @param {string} token
 * @param {string} clientId
 * @returns
 */
const verifyGoogleToken = async (token, clientId) => {
  if (!token || !clientId) return false;

  const client = new OAuth2Client(clientId);
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: clientId, // Specify the CLIENT_ID of the app that accesses the backend
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const googleAccessToken = ticket.getPayload();
  const nowSecond = +(new Date().getTime() / 1000).toFixed(0);
  if (
    nowSecond > +get(googleAccessToken, "exp", 0) ||
    get(googleAccessToken, "aud", "") !== clientId ||
    !googleAccessToken["sub"]
  ) {
    return false;
  }

  return {
    id: `g_${googleAccessToken["sub"]}`,
    name: googleAccessToken["name"],
    email: googleAccessToken.email,
    is_email_verified: googleAccessToken.email_verified,
    photo_url: googleAccessToken.picture,
    provider: "google",
  };
};

const verifyGoogleCookie = (cookies, body) => {
  const csrf_token_cookie = get(cookies, "g_csrf_token", "");
  const csrf_token_body = get(body, "g_csrf_token", "");

  if (!csrf_token_cookie || !csrf_token_body || csrf_token_cookie !== csrf_token_body) {
    return false;
  }
  return true;
};

export { verifyGoogleToken, verifyGoogleCookie };
