// Module outputs for Storage Account
output "name" {
  description = "Name of the storage account"
  value       = azurerm_storage_account.this.name
}

output "primary_connection_string" {
  description = "Primary connection string for the storage account"
  value       = azurerm_storage_account.this.primary_connection_string
}
