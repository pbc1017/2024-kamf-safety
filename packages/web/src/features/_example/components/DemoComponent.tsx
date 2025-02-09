"use client";

import React from "react";

import AsyncBoundary from "@kamf-safety/web/common/components/AsyncBoundary";
import useExampleStore from "@kamf-safety/web/common/providers/store/useExampleStore";
import { getTemporaryClubSubfeature } from "../services/getTemporaryClubSubfeature";

const DemoComponent: React.FC = () => {
  const { data, isLoading, isError, refetch } = getTemporaryClubSubfeature(
    "1",
    "2",
    "3",
    "4",
  );

  const { value, increment } = useExampleStore();

  return (
    <div>
      <h1>Demo Component</h1>
      <p>This is a demo component</p>
      <AsyncBoundary isLoading={isLoading} isError={isError}>
        <div>
          Name: {data?.name} Age: {data?.age}
        </div>
      </AsyncBoundary>
      <button type="button" onClick={() => refetch}>
        Refetch
      </button>

      <br />
      <div>
        <h1>Global State</h1>
        <p>Current value is: {value}</p>

        <button type="button" onClick={() => increment()}>
          {" "}
          increment!
        </button>
      </div>
    </div>
  );
};

export default DemoComponent;
