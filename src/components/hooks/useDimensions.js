// import React, { useEffect,useRef } from "react";
// // import React from 'react';


// export const useDimension = (ref) => {
//     const dimensions = useRef({width : 0,height: 0});

//     useEffect(()=>{
//         dimensions.current.width = ref.current.offsetWidth;
//         dimensions.current.height = ref.current.offsetHeight;
//     },[]);

//     return dimensions.current
// }

// src/components/hooks/useDimensions.js
import { useEffect, useState } from "react";

export const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [ref]);

  return dimensions;
};

