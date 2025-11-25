import React, { useEffect, useState, useRef } from "react";
import Maskgroup from "../../../assets/HomepageImgs/OurImpact/Maskgroup.png";
import BaseLine from "../../../component/BaseLine";
import circal from "../../../assets/HomepageImgs/Circal.svg";

const data = [
  { id: 1, title: "190+", subtitle: "Students Supported" },
  { id: 2, title: "40+", subtitle: "Years of Experience" },
  { id: 3, title: "100+", subtitle: "Students Employed" },
  { id: 4, title: "1000+", subtitle: "Lives Touched" },
];

const Counter = ({ title, subtitle, trigger }) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;

    let start = 0;
    const end = parseInt(title.replace(/[^0-9]/g, ""));
    const duration = 3000;
    const increment = end / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
  }, [trigger, title]);

  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="relative w-[180px] h-[180px] mx-auto flex items-center justify-center">
        <img src={circal} alt="circle" className="absolute inset-0 w-full h-full" />
        <h1 className="text-3xl font-bold text-white z-10">{count}+</h1>
      </div>
      <h2 className="text-white font-bold">{subtitle}</h2>
    </div>
  );
};

const OurImpact = () => {
  const sectionRef = useRef(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTrigger(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundImage: `url(${Maskgroup})` }}
      className="rounded-2xl m-2 py-10 md:py-20 bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row md:space-x-6 items-center">
        <div className="w-full md:w-4/12 space-y-4">
          <h1 className="text-white text-start">Our Impact</h1>
          <h2 className="text-white font-bold">Quick, inspiring statistics</h2>
          <p className="w-[90%]">
            Empowering blind students through education, employment, and lifelong impact.
          </p>
          <BaseLine className="bg-white ms-0" />
        </div>

        <div className="w-full md:w-8/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10 md:mt-0">
          {data.map((item) => (
            <Counter key={item.id} title={item.title} subtitle={item.subtitle} trigger={trigger} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
