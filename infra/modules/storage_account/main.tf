// Module: Storage Account
resource "azurerm_storage_account" "this" {
  name                     = "${var.prefix}-sa"
  resource_group_name      = var.resource_group_name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"
  // enable_https_traffic_only removed: unsupported attribute in this provider version
}
