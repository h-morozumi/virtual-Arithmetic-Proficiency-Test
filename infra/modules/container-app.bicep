// ============================================================================
// Container App
// ============================================================================

@description('Name of the Container App')
param name string

@description('Azure region for the resource')
param location string

@description('Resource ID of the Container Apps Environment')
param containerAppsEnvironmentId string

@description('Container image to deploy')
param containerImage string

@description('Target port for ingress')
param targetPort int = 3000

@description('Environment variables for the container')
param env array = []

@description('CPU cores allocated to the container')
param cpu string = '0.5'

@description('Memory allocated to the container')
param memory string = '1Gi'

@description('Minimum number of replicas')
param minReplicas int = 0

@description('Maximum number of replicas')
param maxReplicas int = 3

// ============================================================================
// Container App
// ============================================================================

resource containerApp 'Microsoft.App/containerApps@2024-03-01' = {
  name: name
  location: location
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    managedEnvironmentId: containerAppsEnvironmentId
    configuration: {
      ingress: {
        external: true
        targetPort: targetPort
        allowInsecure: false
        transport: 'auto'
      }
    }
    template: {
      containers: [
        {
          name: 'app'
          image: containerImage
          env: env
          resources: {
            cpu: json(cpu)
            memory: memory
          }
        }
      ]
      scale: {
        minReplicas: minReplicas
        maxReplicas: maxReplicas
      }
    }
  }
}

// ============================================================================
// Outputs
// ============================================================================

output id string = containerApp.id
output name string = containerApp.name
output fqdn string = containerApp.properties.configuration.ingress.fqdn
output identityPrincipalId string = containerApp.identity.principalId
