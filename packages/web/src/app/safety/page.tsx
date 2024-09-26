"use client";

import React from "react";

import { useRouter } from "next/navigation";
import LocalStorage from "@kamf-safety/web/utils/localStorage";
import SafetyLoadingFrame from "@kamf-safety/web/features/SafetyLoadingFrame";

const Safety = () => {
  const router = useRouter();
  const userId = LocalStorage.getItem("user");
  if (userId === null) {
    if (typeof window !== "undefined") {
      router.push("/login");
    }
    return null;
  }

  return <SafetyLoadingFrame userId={userId} />;
};

export default Safety;
