import { useEffect, useState } from "react";
import StairsLoading from "./stairs-loading";

export default function Slide() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    const t = setTimeout(handleLoad, 5000);
    return () => clearTimeout(t);
    // if (document.readyState === "complete") {
    //   // Already loaded — small delay so the animation is visible
    // } else {
    //   window.addEventListener("load", handleLoad);
    //   return () => window.removeEventListener("load", handleLoad);
    // }
  }, []);

  return <StairsLoading loading={loading} />;
}
