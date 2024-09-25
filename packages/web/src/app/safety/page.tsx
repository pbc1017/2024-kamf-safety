"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import SafetyFrame from "@kamf-safety/web/features/SafetyFrame";
import AsyncBoundary from "@kamf-safety/web/common/components/AsyncBoundary";

const Safety = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  if (localStorage.getItem("user") === null) {
    router.push("/login");
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <AsyncBoundary isLoading={loading}>
      <SafetyFrame />
    </AsyncBoundary>
  );
};

export default Safety;
