// Terraform variables for Ghumakad infrastructure
tf_version = "// Follow Terraform style guide: https://developer.hashicorp.com/terraform/language/style"

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
