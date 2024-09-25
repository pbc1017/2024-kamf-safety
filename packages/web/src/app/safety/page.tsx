"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import SafetyFrame from "@kamf-safety/web/features/SafetyFrame";
import AsyncBoundary from "@kamf-safety/web/common/components/AsyncBoundary";
import { useGetMyCount } from "@kamf-safety/web/features/services/getMyCount";

const Safety = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const userId = localStorage.getItem("user");
  if (userId === null) {
    router.push("/login");
  }

  const { data, isLoading, isError } = useGetMyCount({
    userId,
  });

  console.log(data);

  useEffect(() => {
    if (data === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
      localStorage.setItem("myI", data.myIncrement.toString());
      localStorage.setItem("myD", data.myDecrement.toString());
      console.log(localStorage.getItem("myI"));
    }
  }, [data]);

  return (
    <AsyncBoundary isLoading={loading || isLoading} isError={isError}>
      <SafetyFrame />
    </AsyncBoundary>
  );
};

export default Safety;
