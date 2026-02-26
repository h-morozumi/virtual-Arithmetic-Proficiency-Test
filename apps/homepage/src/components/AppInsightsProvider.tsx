"use client";

import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { useEffect, useRef } from "react";

interface AppInsightsProviderProps {
  connectionString: string | undefined;
  children: React.ReactNode;
}

export function AppInsightsProvider({
  connectionString,
  children,
}: AppInsightsProviderProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!connectionString || initialized.current) return;

    const appInsights = new ApplicationInsights({
      config: {
        connectionString,
        enableAutoRouteTracking: true,
        enableCorsCorrelation: true,
        enableRequestHeaderTracking: true,
        enableResponseHeaderTracking: true,
      },
    });

    appInsights.loadAppInsights();
    appInsights.trackPageView();
    initialized.current = true;

    console.log("Application Insights initialized (client-side)");
  }, [connectionString]);

  return <>{children}</>;
}
