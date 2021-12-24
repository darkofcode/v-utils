/**
 * 
 * @param {set} set 
 * @param {(any)=>Promise<void>} fn 
 * @param {string|string[]|undefined} loading
 * @param {boolean?} logError
 * @example 
    thSignIn: zusThunk(async (set,googlePayload) => {
        // set({ loading: true }); // no need to add
        const user = (await axios.post("/login/google", googlePayload)).data as tUser;
        set({ user });
        // set({ loading: false }); // no need to add
        // no need to handle error
      }),
 * 
 * @returns {VoidFunction}
 */
export const zusThunk = (set, fn, loading = "loading", logError = true) =>
  function asyncFunction(...args) {
    return Promise.resolve(
      (async function () {
        const loadings = getLoading(loading);
        for (let loading of loadings) {
          set({ [loading]: true });
        }
        await fn(...args);
        for (let loading of loadings) {
          set({ [loading]: false });
        }
      })()
    ).catch((err) => {
      const loadings = getLoading(loading);
      for (let loading of loadings) {
        set({ [loading]: false });
      }
      if (logError) {
        console.log("from zustand error handler:\n", err);
      }
    });
  };

/**
 *
 * @param {string | string[]} loading
 * @returns {string[]}
 */
const getLoading = (loading) => {
  if (!loading) return ["loading"];
  return typeof loading === "string" ? loading.replace(/\s/gi, "").split(",") : loading;
};
