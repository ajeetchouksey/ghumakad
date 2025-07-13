// Module: App Service Plan for Azure Functions
// Follows HashiCorp style guide: https://developer.hashicorp.com/terraform/language/style

resource "azurerm_app_service_plan" "this" {
  name                = "${var.prefix}-plan"
  location            = var.location
  resource_group_name = var.resource_group_name
  kind                = "FunctionApp"

  sku {
    tier = "Dynamic"
    size = "Y1"
  }
}
