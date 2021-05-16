import { computed, thunk } from "easy-peasy";
import { get } from "../object/get";

const tcThunk = (fn) =>
  thunk((actions, payload, helper) => {
    return Promise.resolve(fn(actions, payload, helper)).catch((err) => {
      actions.setState(["loading", false]);
      console.log("from easy peasy thunk error handler:\n", err);
    });
  });

const gState = (storePath, resultPath, defaultValue) => (fn) =>
  computed([(_) => 1, (_, gStore) => get(gStore, storePath)], (_, r) => {
    const result = resultPath ? get(r, resultPath, defaultValue) : r;
    return fn ? fn(result) : result;
  });

const thunkV2 = (fn) =>
  thunk((actions, payload, helper) => {
    return Promise.resolve(
      (async function () {
        // console.log(`from thunk v2 await`, { actions, payload, helper });
        actions.setState(["loading", true]);
        await fn(actions, payload, helper);
        actions.setState(["loading", false]);
      })()
    ).catch((err) => {
      actions.setState(["loading", false]);
      console.log("from easy peasy thunk error handler:\n", err);
    });
  });

export { tcThunk, gState, thunkV2 };
