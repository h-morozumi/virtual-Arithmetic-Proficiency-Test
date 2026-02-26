// targetScope = 'resourceGroup' (default)

// ============================================================================
// Parameters
// ============================================================================

@description('Name of the environment (e.g., dev, prod)')
param environmentName string

@description('Primary location for all resources')
param location string = resourceGroup().location

@description('GitHub Container Registry owner (GitHub user or org)')
param ghcrOwner string

@description('Container image tag to deploy')
param ghcrImageTag string = 'latest'

// ============================================================================
// Variables
// ============================================================================

var abbrs = loadJsonContent('abbreviations.json')
var resourceToken = toLower(uniqueString(subscription().id, environmentName, location))
var ghcrLoginServer = 'ghcr.io'
var ghcrImageName = '${toLower(ghcrOwner)}/virtual-arithmetic-proficiency-test/homepage'

// ============================================================================
// Modules
// ============================================================================

module logAnalytics 'modules/log-analytics.bicep' = {
  name: 'log-analytics'
  params: {
    name: '${abbrs.logAnalyticsWorkspace}${resourceToken}'
    location: location
  }
}

module containerAppsEnvironment 'modules/container-apps-environment.bicep' = {
  name: 'container-apps-environment'
  params: {
    name: '${abbrs.containerAppsEnvironment}${resourceToken}'
    location: location
    logAnalyticsWorkspaceId: logAnalytics.outputs.id
  }
}

module applicationInsights 'modules/application-insights.bicep' = {
  name: 'application-insights'
  params: {
    name: '${abbrs.applicationInsights}${resourceToken}'
    location: location
    logAnalyticsWorkspaceId: logAnalytics.outputs.id
  }
}

module homepageApp 'modules/container-app.bicep' = {
  name: 'container-app-homepage'
  params: {
    name: '${abbrs.containerApp}homepage-${resourceToken}'
    location: location
    containerAppsEnvironmentId: containerAppsEnvironment.outputs.id
    containerImage: '${ghcrLoginServer}/${ghcrImageName}:${ghcrImageTag}'
    targetPort: 3000
    env: [
      { name: 'NODE_ENV', value: 'production' }
      { name: 'HOSTNAME', value: '0.0.0.0' }
      { name: 'PORT', value: '3000' }
      { name: 'APPLICATIONINSIGHTS_ROLE_NAME', value: 'homepage-containerapp' }
      { name: 'APPLICATIONINSIGHTS_CONNECTION_STRING', value: applicationInsights.outputs.connectionString }
      { name: 'NEXT_PUBLIC_APPLICATIONINSIGHTS_CONNECTION_STRING', value: applicationInsights.outputs.connectionString }
    ]
  }
}

// ============================================================================
// Outputs
// ============================================================================

output AZURE_CONTAINER_APPS_ENVIRONMENT_NAME string = containerAppsEnvironment.outputs.name
output APPLICATION_INSIGHTS_NAME string = applicationInsights.outputs.name
output APPLICATION_INSIGHTS_CONNECTION_STRING string = applicationInsights.outputs.connectionString
output HOMEPAGE_APP_NAME string = homepageApp.outputs.name
output HOMEPAGE_APP_FQDN string = homepageApp.outputs.fqdn
output HOMEPAGE_ENDPOINT string = 'https://${homepageApp.outputs.fqdn}'
