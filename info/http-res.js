const httpRes = {
  info: 100, // barely use
  // success
  create: 201,
  read: 202,
  update: 200,
  delete: 204,

  // client error
  badRequest: 400, // invalidation form
  unauthorized: 401, // not registered user
  forbidden: 403, // not for every user
  notFound: 404, // no content found

  //server error
  serverError: 500,
};

export default httpRes;
