export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const module = await import("./lib/appInsights.server");
    module.initServerAppInsights();
  }
}
