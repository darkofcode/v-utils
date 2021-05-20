import { useState } from "react";

function useLocalStorage(key, initValue) {
  const storage = localStorage;
  const [doc, setDoc] = useState(getLocal(key, initValue));
  const updateDoc = (v) => {
    const r = typeof v === "function" ? v(getLocal(key, "")) : v;
    setDoc(v);

    storage.setItem(key, JSON.stringify(r));
  };
  // useEffect(() => {
  //   let preDoc = getLocal(key);
  //   if (preDoc !== undefined || preDoc !== "") return;
  //   updateDoc(initValue);
  // }, []); //eslint-disable-line
  return [doc, updateDoc];
}

const getLocal = (key, v = "") => {
  let preDoc = localStorage.getItem(key);
  preDoc = preDoc !== null ? JSON.parse(preDoc) : v;
  return preDoc;
};

export default useLocalStorage;
