"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

type PropsType = {
  params: ParamsType;
};

type ParamsType = {
  dynamicRoute: string;
};

const Page = ({ params }: PropsType) => {
  const router = useRouter();
  const { dynamicRoute } = params;

  useEffect(() => {
    if (dynamicRoute === "source") {
      fetch("/api/redirect")
        .then((response) => {
          if (response.status === 308) {
            const location = response.headers.get("Location");
            if (location) {
              window.location.href = location;
            }
          } else {
            throw new Error("Failed to redirect");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [dynamicRoute, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-medium text-lg">{`You are on page - ${dynamicRoute}`}</h1>
      {dynamicRoute === "destination" && (
        <h3>You are redirectd from source page to destination page with status code</h3>
      )}
    </div>
  );
};

export default Page;
