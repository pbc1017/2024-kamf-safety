import type { Metadata } from "next";

import classNames from "classnames";

import "@kamf-safety/web/styles/globals.css";

import { pretendard, raleway } from "@kamf-safety/web/styles/fonts/googleFonts";
import StyledComponentsRegistry from "@kamf-safety/web/common/libs/styledComponents/StyledComponentRegistry";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { UseClientProvider } from "@kamf-safety/web/common/providers/UseClientProvider";
import ResponsiveContent from "@kamf-safety/web/common/components/Responsive";
import Header from "@kamf-safety/web/common/components/Header";

export const metadata: Metadata = {
  title: "2024 KAMF Safety",
  description: "Frontend Standard Stack v1.0.0",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html
    lang="ko-KR"
    className={classNames(pretendard.variable, raleway.variable)}
  >
    <body>
      <AppRouterCacheProvider>
        <StyledComponentsRegistry>
          <UseClientProvider>
            <Header />
            <ResponsiveContent>{children}</ResponsiveContent>
          </UseClientProvider>
        </StyledComponentsRegistry>
      </AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;
