variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
}

variable "location" {
  description = "Azure region for the App Service Plan"
  type        = string
}

variable "prefix" {
  description = "Prefix for all resource names"
  type        = string
}
