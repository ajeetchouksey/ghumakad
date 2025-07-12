# Terraform Infrastructure for Ghumakad

This directory contains Terraform configuration files for deploying Azure infrastructure for the Ghumakad travel planning application.

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= 1.0
- Azure CLI for local development
- Azure subscription with appropriate permissions

## Configuration Files

- `providers.tf` - Azure provider configuration and version constraints
- `main.tf` - Main infrastructure resources (Resource Group)
- `variables.tf` - Input variables for customization
- `outputs.tf` - Output values from deployed resources

## GitHub Secrets Required

For the CI/CD workflow to work properly, configure these secrets in your GitHub repository:

### Required Secrets

- `AZURE_CLIENT_ID` - Azure service principal client ID
- `AZURE_CLIENT_SECRET` - Azure service principal client secret
- `AZURE_SUBSCRIPTION_ID` - Azure subscription ID
- `AZURE_TENANT_ID` - Azure tenant ID

### Optional Secrets

- `AZURE_CREDENTIALS` - JSON object containing Azure credentials for azure/login action

### Setting up Azure Service Principal

```bash
# Create service principal
az ad sp create-for-rbac --name "ghumakad-terraform" \
  --role="Contributor" \
  --scopes="/subscriptions/{subscription-id}"

# Output will include the values needed for the secrets above
```

## Local Development

1. Install Terraform
2. Authenticate with Azure CLI:
   ```bash
   az login
   ```
3. Initialize Terraform:
   ```bash
   cd terraform
   terraform init
   ```
4. Plan changes:
   ```bash
   terraform plan
   ```
5. Apply changes:
   ```bash
   terraform apply
   ```

## CI/CD Workflow

The GitHub Actions workflow (`.github/workflows/terraform.yml`) automatically:

- **On Pull Requests**: Runs format check, validation, and plan
- **On Push to Main**: Runs full workflow including Azure login for future apply steps
- **Manual Trigger**: Can be triggered manually via workflow_dispatch

### Workflow Features

- Terraform formatting validation
- Configuration validation
- Security-conscious plan generation
- Pull request comments with results
- Azure authentication setup for deployment

## Customization

You can customize the deployment by modifying variables in `variables.tf` or by creating a `terraform.tfvars` file:

```hcl
resource_group_name = "rg-ghumakad-prod"
location           = "West US 2"
```

## Resource Naming Convention

Resources follow Azure naming conventions:
- Resource Group: `rg-ghumakad-{environment}`
- All resources are tagged with:
  - `Environment`: Development/Production
  - `Project`: Ghumakad
  - `ManagedBy`: Terraform