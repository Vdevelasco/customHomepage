import React, { useState, useEffect } from "react";
import "../App.css";

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="text-center">
      <p className="text-7xl text-white font-montserrat font-bold">{formattedTime}</p>
    </div>
  );
};

export default Clock;
