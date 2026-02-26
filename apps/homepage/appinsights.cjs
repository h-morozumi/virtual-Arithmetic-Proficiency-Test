if (!global.__APPINSIGHTS_INITIALIZED) {
  const connectionString = process.env.APPLICATIONINSIGHTS_CONNECTION_STRING;

  if (connectionString) {
    try {
      const appInsights = require("applicationinsights");
      const roleName =
        process.env.APPLICATIONINSIGHTS_ROLE_NAME || "homepage-containerapp";

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

      appInsights.defaultClient.config.samplingPercentage = 100;
      appInsights.defaultClient.context.tags[
        appInsights.defaultClient.context.keys.cloudRole
      ] = roleName;

      appInsights.defaultClient.trackTrace({
        message: "Application Insights preload startup telemetry",
        properties: {
          roleName,
          runtime: "nodejs",
          source: "node-options-preload",
        },
      });

      global.__APPINSIGHTS_INITIALIZED = true;
      console.log("Application Insights preloaded before Next.js server startup");
    } catch (error) {
      console.warn("Application Insights preload initialization failed.", error);
    }
  } else {
    console.warn(
      "APPLICATIONINSIGHTS_CONNECTION_STRING is not set. Application Insights preload is disabled."
    );
  }
}
