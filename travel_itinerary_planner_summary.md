
# 🧳 Travel Itinerary Planner – Product Overview

## 🌟 Vision
A web-based itinerary planner that helps users plan trips from start to finish, including:
- Travel options (to/from destination)
- Local transport
- Attractions and activities
- Food and dining
- Stay recommendations
- Personalized suggestions for:
  - Couples
  - Solo travelers
  - Families with kids
  - Elderly travelers

---

## ☁️ Azure Setup for Minimal Cost

### 🧱 Architecture with Free/Low-Cost Azure Services

| Component         | Azure Service              | Free Tier? | Notes |
|------------------|----------------------------|------------|-------|
| **Frontend**      | Azure Static Web Apps       | ✅ Yes     | Ideal for React/Next.js with GitHub integration |
| **Backend**       | Azure Functions (Consumption Plan) | ✅ Yes | Serverless, pay-per-use, generous free tier |
| **Database**      | Azure Cosmos DB (Free Tier) or Azure SQL (Basic Tier) | ✅ Yes | Cosmos DB offers a free tier for development |
| **Authentication**| Azure AD B2C                | ✅ Yes     | Free for up to 50,000 monthly active users |
| **AI/ML**         | Azure OpenAI                | ❌ No      | Use mock data or simulate during development |
| **Maps & Location**| Azure Maps                 | ✅ Yes     | 250,000 map renders/month free |
| **Storage**       | Azure Blob Storage          | ✅ Yes     | 5 GB free in the first 12 months |
| **Monitoring**    | Azure Monitor (Basic)       | ✅ Yes     | Basic logs and metrics are free |

---

### 🛠️ Cost-Saving Tips

- Use **GitHub Actions** (free for public repos) for CI/CD.
- Limit **Azure OpenAI** usage or simulate with mock data.
- Use **local emulators** for Cosmos DB and Azure Functions during development.
- Set **spending alerts** in Azure Cost Management.

---

### 🚀 Suggested Learning Path

1. Build your frontend using **React or Next.js**
2. Deploy to **Azure Static Web Apps**
3. Create serverless APIs using **Azure Functions**
4. Connect to **Cosmos DB** for storing itineraries
5. Add **Azure Maps** for routes and attractions
6. Integrate **Azure AD B2C** for user login
7. *(Optional)* Add **Azure OpenAI** for itinerary generation
