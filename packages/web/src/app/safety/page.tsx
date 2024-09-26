"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import SafetyFrame from "@kamf-safety/web/features/SafetyFrame";
import AsyncBoundary from "@kamf-safety/web/common/components/AsyncBoundary";
import { useGetMyCount } from "@kamf-safety/web/features/services/getMyCount";
import LocalStorage from "@kamf-safety/web/utils/localStorage";

const Safety = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const userId = LocalStorage.getItem("user");
  if (userId === null && typeof window !== "undefined") {
    router.push("/login");
  }

  const { data, isLoading, isError } = useGetMyCount({
    userId: userId || "",
  });

  useEffect(() => {
    if (data === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
      if (LocalStorage.getItem("myI") === null) {
        LocalStorage.setItem("myI", data.myIncrement.toString());
      }
      if (LocalStorage.getItem("myD") === null) {
        LocalStorage.setItem("myD", data.myDecrement.toString());
      }
    }
  }, [data]);

  return (
    <AsyncBoundary isLoading={loading || isLoading} isError={isError}>
      <SafetyFrame />
    </AsyncBoundary>
  );
};

export default Safety;
