import axios from "axios";
import { sanitize } from "../object/sanitize";
import { round } from "../numbers/round";
import { get } from "../object/get";
import { isEmpty } from "../object/is-empty";
import { formData } from "../object/form-data";

const cleanData = (data) => {
  return JSON.stringify(sanitize(data));
};

const getContentType = (config) => {
  const data = config.data;
  return data instanceof FormData ? "multipart/form-data" : "application/json";
};

const CancelToken = axios.CancelToken;
const source = CancelToken.source;
let axiosInterceptRequest = null;
let axiosInterceptResponse = null;

/**
 *
 * @typedef {import('axios').AxiosRequestConfig<any> & {meta:any}} tRequest
 *
 */

/**
 * strip away (await axios.get(url)).data ->
 * (await axios.get(url)) will return whatever
 * the server send
 * @param {{timeout?:number,state?:string,token?:string,baseApi?:string,onSuccess?:(msg:string)=>Void,onError?:(msg:string)=>Void}} _props
 * @returns
 */
export default function axiosWrapper(_props) {
  const props = isEmpty(_props) ? {} : _props;
  const state = get(props, "state", "uvAxios");
  const token = get(props, "token", "");
  const baseApi = get(props, "baseApi", "");
  const timeout = get(props, "timeout", 5000);
  const _onSuccess = get(props, "onSuccess", () => {});
  const _onError = get(props, "onError", () => {});

  if (axios[state] === getPropsState(props)) return axios;

  // axios.defaults.baseURL = BASE_URL;

  const notify = (isSuccess, message) => {
    // const toastId = !!axiosInterceptResponse ? axiosInterceptResponse : 0;
    if (isSuccess) {
      _onSuccess(message);
      return;
    } else {
      _onError(message);
      return;
    }
  };

  console.log(`axios interceptor run`, {
    axiosInterceptRequest,
    axiosInterceptResponse,
  });
  if (!!axiosInterceptRequest || axiosInterceptRequest === 0) {
    // console.log(`from block request `, axiosInterceptRequest);
    axios.interceptors.request.eject(axiosInterceptRequest);
  }
  if (!!axiosInterceptResponse || axiosInterceptResponse === 0) {
    // console.log(`from block request `, axiosInterceptResponse);
    axios.interceptors.response.eject(axiosInterceptResponse);
  }
  // console.log(`axios interceptor after eject`);
  axiosInterceptRequest = axios.interceptors.request.use(
    /**
     *
     * @param {tRequest} config
     * @returns
     */
    function (config) {
      // Do something before request is sent
      // console.log(`old config`, config);

      const setupBaseUrl = config.baseURL;
      config.baseURL = setupBaseUrl !== undefined ? setupBaseUrl : baseApi;
      config.cancelToken = source.token;
      config.headers = {
        Authorization: "Bearer " + token,
        "Content-Type": getContentType(config),
        "Access-Control-Allow-Origin": "*",
      };
      config.timeout = timeout;

      config.transformRequest = [
        (data, headers) => {
          if (config.method === "get" || config.method === "GET") {
            return data;
          }
          if (data instanceof FormData) {
            const sanityData = sanitize(formData.toJson(data));
            return formData.toFormData(sanityData);
          }

          return cleanData(data);
        },
      ];

      console.log(`request config`, { config, ct: getContentType(config) });
      config.meta = config.meta || {};
      config.meta.requestStartedAt = new Date().getTime();
      return config;
    },
    function (err) {
      return onError(err);
    }
  );

  // Add a response interceptor
  axiosInterceptResponse = axios.interceptors.response.use(
    function (response) {
      // const { data = {}, status } = response;
      const data = get(response, "data", {});
      const status = get(response, "status");

      const size = `${round(JSON.stringify(data).length / 1e3)} Kb`;
      const path = get(response, "config.url", "");
      const time = `${new Date().getTime() - +get(response, "config.meta.requestStartedAt", "")} ms`;
      console.log(`respond data`, { response, data, status, size, path, time });
      if (data.message && data.isSuccess) {
        notify(true, data.message);
      }
      // return objKeyToCamel(data, { removeKeyIfNull: false });
      return sanitize(data);
    },
    function (err) {
      return onError(err);
    }
  );
  const onError = (err) => {
    return new Promise((resolve, reject) => {
      if (typeof axios.isCancel === "function" && axios.isCancel(err)) {
        notify(false, err.message);
        reject(err);
      }
      const response = err.response ? err.response : err.request;
      // const { data = {}, status } = response || {};
      const data = get(response, "data", {});
      const status = get(response, "status");

      console.log(`error response`, { response, data, status });
      notify(false, data.message || "Unknown Error!");
      reject(response);
    });
  };

  axios[state] = getPropsState(props);

  return axios;
}

const getPropsState = (props) => {
  const state = get(props, "state", "uvAxios");
  const token = get(props, "token", "");
  const baseApi = get(props, "baseApi", "");

  return [state, token, baseApi].join("---");
};
