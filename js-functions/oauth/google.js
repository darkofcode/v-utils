// import axios from "axios";
import { get } from "../object/get";
import { OAuth2Client } from "google-auth-library";
import fetch from "node-fetch";

/**
 *
 * @typedef {{oid:string,photo_url:string,name:string,email:string}} tUser
 *
 */

/**
 *
 * @param {string} googleRespondCode
 * @param {string} clientId
 * @param {string} clientSecrete
 * @param {string} redirect_uri
 * @returns {{oid:string,photo_url:string,name:string,email:string}}
 */
export async function getGoogleUser(googleRespondCode, clientId, clientSecrete, redirect_uri) {
  const code = googleRespondCode || "";
  if (!code) {
    return {};
  }

  const gitAccessToken = await getAccessToken(code, clientId, clientSecrete, redirect_uri);
  const user = await getUserByIdToken(gitAccessToken.id_token, clientId);

  return user;
}

/**
 *
 * @param {string} token
 * @returns {tUser}
 */
const getUserInfoByEndPoint = async (token) => {
  const baseApi = "https://www.googleapis.com/oauth2/v3/userinfo";
  const config = {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  // const authUser = (await axios.get(baseApi, config)).data;

  const authUser = await (await fetch(baseApi, config)).json();
  // console.log(`from get google user`, {
  //   token,
  //   authUser,
  // });

  const user = {
    oid: get(authUser, "sub", "").toString(),
    photo_url: authUser.picture,
    name: authUser.name,
    email: getUserEmail(authUser),
  };
  return user;
};

/**
 *
 * @param {string} idToken
 * @param {string} client_id
 * @returns {tUser}
 *
 */
const getUserByIdToken = async (idToken, client_id) => {
  const client = new OAuth2Client(client_id);
  const ticket = await client.verifyIdToken({
    idToken,
    audience: client_id,
  });
  const payload = ticket.getPayload();

  // console.log(`from verify google id token:\n`, payload);
  const user = {
    oid: get(payload, "sub", "").toString(),
    photo_url: payload.picture,
    name: payload.name,
    email: getUserEmail(payload.email),
  };
  return user;
};

/**
 *
 * @param {string} code
 * @param {string} clientId
 * @param {string} clientSecrete
 * @returns {{access_token:string,expires_in:number,token_type:'Bearer',scope:string,refresh_token?:string,id_token?:string}} // bearer token
 */

const getAccessToken = async (code, clientId, clientSecrete, redirect_uri) => {
  const client_id = clientId || ""; // GITHUB_CLIENT_ID;
  const client_secret = clientSecrete || "";

  const urlParams = {
    client_id,
    client_secret,
    code,
    grant_type: "authorization_code",
    redirect_uri,
  };
  // console.log("from getAccessToken:\n", urlParams);

  const accessTokenUrl = `https://oauth2.googleapis.com/token`;

  // const resTokenObj = (
  //   await axios.post(accessTokenUrl, urlParams, {
  //     headers: { Accept: "application/json" },
  //   })
  // ).data;

  const resTokenObj = await (
    await fetch(accessTokenUrl, {
      method: "post",
      body: JSON.stringify(urlParams),
      headers: { Accept: "application/json", Accept: "application/json" },
    })
  ).json();
  // console.log(`from access token:\n`, resTokenObj);
  return resTokenObj;
};

const getUserEmail = (gitUser) => {
  const email = gitUser.email;
  if (email && typeof email === "string") {
    return email;
  }

  return Array.isArray(email) ? email[0] : "";
};
