import { useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout.
  useEffect(() => {
    if (delay !== null) {
      let id = setTimeout(savedCallback.current, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}
