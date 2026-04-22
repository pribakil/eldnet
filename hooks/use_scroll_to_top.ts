import React, { useEffect, useState } from "react";

const useScrollToTop = () => {
  const [shouldScrollToTop, setSchouldScrollToTop] = useState<boolean>(false);

  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setSchouldScrollToTop(false);
    }
  }, [shouldScrollToTop]);
  return {
    setSchouldScrollToTop,
  };
};

export default useScrollToTop;
