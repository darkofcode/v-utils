import { get } from "../object/get";
import fetch from "node-fetch";

/**
 *
 * @param {string} gitRespondCode
 * @param {string} clientId
 * @param {string} clientSecrete
 * @returns {{oid:string,photo_url:string,name:string,email:string}}
 */
export async function getGithubUser(gitRespondCode, clientId, clientSecrete) {
  const code = gitRespondCode || "";
  if (!code) {
    return {};
  }
  // console.log(`from get git user:\n`, { gitRespondCode, clientId, clientSecrete });
  const gitAccessToken = await getAccessToken(code, clientId, clientSecrete);
  const user = await getUserInfo(gitAccessToken);

  return user;
}

/**
 *
 * @param {string} token
 * @returns
 */
const getUserInfo = async (token) => {
  const gitBaseApi = "https://api.github.com";
  const config = {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  // console.log("git config:\n ", config);

  // const gitUser = (await axios.get(`${gitBaseApi}/user`, config)).data;
  // const gitUserEmails = (await axios.get(`${gitBaseApi}/user/emails`, config)).data;

  const gitUser = await (await fetch(`${gitBaseApi}/user`, config)).json();
  const gitUserEmails = await (await fetch(`${gitBaseApi}/user/emails`, config)).json();
  // console.log("github getUser:\n", gitUserEmails);

  const user = {
    oid: get(gitUser, "id", "").toString(),
    photo_url: gitUser.avatar_url,
    name: gitUser.name,
    email: getUserEmail(gitUser, gitUserEmails),
  };
  return user;
};

/**
 *
 * @param {string} code
 * @param {string} clientId
 * @param {string} clientSecrete
 * @returns {string} // bearer token
 */
const getAccessToken = async (code, clientId, clientSecrete) => {
  const client_id = clientId || ""; // GITHUB_CLIENT_ID;
  const client_secret = clientSecrete || "";

  const urlParams = {
    client_id,
    client_secret,
    code,
  };
  // console.log("from getAccessToken:\n", urlParams);

  const gitAccessTokenUrl = `https://github.com/login/oauth/access_token`;

  // const gitTokenObj = (
  //   await axios.post(gitAccessTokenUrl, urlParams, {
  //     headers: { Accept: "application/json" },
  //   })
  // ).data;

  const gitTokenObj = await (
    await fetch(gitAccessTokenUrl, {
      method: "post",
      body: JSON.stringify(urlParams),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    })
  ).json();

  // console.log(`from git token:\n`, gitTokenObj);

  const gitAccessToken = gitTokenObj.access_token || "";
  const bearer = gitTokenObj.token_type || "";

  return `${bearer} ${gitAccessToken}`;
};

const getUserEmail = (gitUser, gitUserEmails) => {
  const email = gitUser.email;
  if (email && typeof email === "string") {
    return email;
  }
  const primaryEmail = get(
    gitUserEmails.find((user) => user.primary),
    "email",
    ""
  );

  if (primaryEmail) return primaryEmail;

  const userEmails = gitUserEmails.filter((user) => !user.email.includes("noreply.github.com"));
  return get(userEmails, "0.email", "");
};
