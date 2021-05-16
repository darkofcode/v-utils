import { useEffect, useState } from "react";
import useScript from "./use-script";
import { get } from "../../js-functions/object/get";

/**
 *
 * @param {{version:string,packages:string[],language:string}} param0 version="current", packages=["corechart"], language="en"
 * @return {any} google object
 */
export default function useGoogleChart({ version = "current", packages = ["corechart"], language = "en" } = {}) {
  // const { packages = ["corechart"], language = "en" } = loadOptions;
  const googleChartLoading = useScript("https://www.gstatic.com/charts/loader.js");
  const [googleViz, setGoogleViz] = useState(null);

  useEffect(() => {
    const loadGoogle = async () => {
      try {
        if (googleChartLoading === "ready") {
          // console.trace({ packages, version, language });
          const g = window.google;
          const newPackages = getLoadingNewPackages(g, packages);
          if (newPackages.length) {
            // console.log("add new package", newPackages);
            await g.charts.load(version, { packages: newPackages, language });
          }

          setGoogleViz(g);
        }
      } catch (error) {}
    };
    loadGoogle();
  }, [googleChartLoading, packages, language, version]);
  return googleViz;
}

const getLoadingNewPackages = (g, chartNames) => {
  let keys = Object.keys(get(g, "visualization", {}));
  keys = keys.map((k) => k.toLocaleLowerCase());
  let newPackages = [];
  chartNames.forEach((name) => {
    if (!keys.includes(name.toLocaleLowerCase())) {
      newPackages.push(name);
    }
  });
  return newPackages;
};
