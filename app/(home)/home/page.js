"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
const BodyMain = () => {
  const [data, setData] = useState({
    revenue: null,
    salesReturn: null,
    purchase: null,
    income: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setData({
        revenue: "30,000",
        salesReturn: "30,000",
        purchase: "30,000",
        income: "30,000",
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-gray justify-center items-center">
      <div className="flex flex-col w-[80%] pl-[250px]">
        {" "}
        <div className="flex flex-wrap justify-evenly p-10"></div>
        ggg
        <div className="mt-[1000px]"></div> {/* Evaluate necessity */}
      </div>
    </div>
  );
};

export default BodyMain;
