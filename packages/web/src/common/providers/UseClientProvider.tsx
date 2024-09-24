"use client";

/**
 * @file UseClientProvider.tsx
 * @description This file provides a provider that can be used to wrap components that use client-side rendering.
 */

import React, { useEffect } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import theme from "@kamf-safety/web/styles/themes";

export const UseClientProvider: React.FC<React.PropsWithChildren> = ({
  children = <div />,
}) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime

            // above 0 to avoid refetching immediately on the client

            staleTime: 60 * 1000,
          },
        },
      }),
  );

  useEffect(() => {
    // Channel Talk
    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey: "9a81422c-9f67-4a6a-bfb3-8f8af402a366",
    });
  }, []);

  return (
    <main>
      {/* @ts-expect-error-next-line */}
      <StyledProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </StyledProvider>
    </main>
  );
};
