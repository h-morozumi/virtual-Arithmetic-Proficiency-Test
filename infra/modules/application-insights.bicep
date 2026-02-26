// ============================================================================
// Application Insights
// ============================================================================

@description('Name of the Application Insights resource')
param name string

@description('Azure region for the resource')
param location string

@description('Resource ID of the Log Analytics workspace')
param logAnalyticsWorkspaceId string

resource applicationInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: name
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalyticsWorkspaceId
  }
}

output id string = applicationInsights.id
output name string = applicationInsights.name
output connectionString string = applicationInsights.properties.ConnectionString
output instrumentationKey string = applicationInsights.properties.InstrumentationKey
