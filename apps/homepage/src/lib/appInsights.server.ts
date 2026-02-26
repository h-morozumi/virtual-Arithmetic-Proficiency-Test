let isInitialized = false;

export function initServerAppInsights() {
  if (isInitialized) {
    return;
  }

  const connectionString = process.env.APPLICATIONINSIGHTS_CONNECTION_STRING;

  if (!connectionString) {
    console.warn(
      "APPLICATIONINSIGHTS_CONNECTION_STRING is not set. Application Insights is disabled."
    );
    return;
  }

  try {
    const dynamicRequire = eval("require");
    const appInsights = dynamicRequire("applicationinsights");

    appInsights
      .setup(connectionString)
      .setAutoCollectRequests(true)
      .setAutoCollectPerformance(true, true)
      .setAutoCollectExceptions(true)
      .setAutoCollectDependencies(true)
      .setAutoCollectConsole(true, true)
      .setAutoCollectPreAggregatedMetrics(true)
      .setSendLiveMetrics(true)
      .start();

    isInitialized = true;
    console.log("Application Insights initialized (server-side)");
  } catch (error) {
    console.warn("Application Insights initialization failed.", error);
  }
}
