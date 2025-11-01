import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const NumberSection = () => {
  const numbers = [
    { id: 1, number: "5", tittle1: "Years", tittle2: "Of Experience" },
    { id: 2, number: "710", tittle1: "Client", tittle2: "Worldwide" },
    { id: 3, number: "700", tittle1: "Happy", tittle2: "Clients" },
    { id: 4, number: "700", tittle1: "Completed", tittle2: "Projects" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container max-w-screen-xl mx-auto px-4 z-10 mt-40 grid gap-8 grid-cols-2 md:grid-cols-2 xl:grid-cols-4 items-center"
    >
      {numbers.map(({ id, number, tittle1, tittle2 }) => (
        <div className="mr-[40px] md:mt-0" key={id}>
          <div className="flex items-center">
            <h2 className="text-[40px] lg:text-[60px] font-medium text-white">
              {isVisible ? (
                <CountUp
                  start={0}
                  end={parseInt(number.replace("k", "000"))}
                  duration={2}
                />
              ) : (
                "0"
              )}
            </h2>
            <p className="pl-5 leading-[1.3] text-[10px] lg:text-[15px] lg:font-light sm:font-semibold  text-[#fff] m-0">
              {tittle1} <br />
              {tittle2}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NumberSection;
