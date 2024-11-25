"use client";
import Image from "next/image";
import "./style.css";
import "use react";

export default function Home() {
  let counter = 0;
  const handleClick = () => {
    counter = counter + 1;
    console.log(counter);
  };

  return (
    <div>
      {counter}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
