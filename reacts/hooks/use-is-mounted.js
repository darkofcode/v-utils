import { useRef, useEffect } from "react";

export function useIsMountedRef() {
  const isMounted = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  return isMounted;
}
