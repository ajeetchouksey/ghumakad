// Terraform variables for Ghumakad infrastructure
// tf_version directive removed: not valid HCL syntax. See https://developer.hashicorp.com/terraform/language/style for guidelines.

variable "location" {
  description = "Azure region for all resources"
  type        = string
  default     = "eastus"
}

variable "resource_group_name" {
  description = "Name of the Azure resource group"
  type        = string
  default     = "ghumakad-rg"
}

variable "prefix" {
  description = "Prefix for resource names"
  type        = string
  default     = "ghumakad"
}
