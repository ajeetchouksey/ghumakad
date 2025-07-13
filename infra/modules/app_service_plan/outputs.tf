// Module outputs for App Service Plan
output "id" {
  description = "ID of the App Service Plan"
  value       = azurerm_app_service_plan.this.id
}

output "name" {
  description = "Name of the App Service Plan"
  value       = azurerm_app_service_plan.this.name
}
