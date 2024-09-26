"use client";

import React, { useEffect, useState } from "react";

import SafetyFrame from "@kamf-safety/web/features/SafetyFrame";
import AsyncBoundary from "@kamf-safety/web/common/components/AsyncBoundary";
import { useGetMyCount } from "@kamf-safety/web/features/services/getMyCount";
import LocalStorage from "@kamf-safety/web/utils/localStorage";

const SafetyLoadingFrame: React.FC<{ userId: string }> = ({ userId }) => {
  const [loading, setLoading] = useState(true);

  const { data, isLoading, isError } = useGetMyCount({
    userId,
  });

  useEffect(() => {
    if (data === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
      LocalStorage.setItem("total", data.total.toString());
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

export default SafetyLoadingFrame;
