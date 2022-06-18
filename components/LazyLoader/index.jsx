import { useEffect, useState } from "react";
import Splash from "../Splash";

const LazyLoader = ({ delay = 250, ...props }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return show ? <Splash /> : null;
};

export default LazyLoader;
