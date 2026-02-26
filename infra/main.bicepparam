using './main.bicep'

param environmentName = readEnvironmentVariable('AZURE_ENV_NAME', 'dev')
param ghcrOwner = readEnvironmentVariable('GHCR_OWNER', 'h-morozumi')
param ghcrImageTag = readEnvironmentVariable('GHCR_IMAGE_TAG', 'latest')
