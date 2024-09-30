import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const Confettis = () => {
  const { width, height } = useWindowSize();
  const [recycle, setRecycle] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setRecycle(false), 10000); // Stop after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  return <Confetti width={width} height={height} recycle={recycle} />;
};

export default Confettis;
