"use client";
import React, { useEffect } from "react";
import { navigate } from "@/utils/redirectAction";

type PropsType = {
  params: ParamsType;
};

type ParamsType = {
  dynamicRoute: string;
};

const Page = ({ params }: PropsType) => {
  const { dynamicRoute } = params;

  useEffect(() => {
    if (dynamicRoute === "source") {
      navigate();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-medium text-lg">{`You are on page - ${dynamicRoute}`}</h1>
      {dynamicRoute === "destination" && (
        <h3>You are redirectd from source page to destination page</h3>
      )}
    </div>
  );
};

export default Page;
