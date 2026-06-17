# Reference
## tenants
<details><summary><code>client.tenants.<a href="/src/api/resources/tenants/client/Client.ts">listTenantComputeRegions</a>() -> IsloApi.TenantRegionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return the compute regions the authenticated tenant may use, including the API and WebSocket base URLs for each region.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.listTenantComputeRegions();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TenantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Credits
<details><summary><code>client.credits.<a href="/src/api/resources/credits/client/Client.ts">getCreditBalance</a>() -> IsloApi.CreditBalance</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return the tenant's available prepaid credit balance in cents.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credits.getCreditBalance();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `CreditsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## integrations
<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">listIntegrationProviders</a>() -> IsloApi.IntegrationProvidersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return the integration providers available to connect from Islo, including the supported authentication methods and connection scopes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.listIntegrationProviders();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `IntegrationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">listIntegrations</a>() -> IsloApi.IntegrationListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the integrations the user/tenant has connected.

Includes preset providers (from the PROVIDERS registry) and tenant-scoped
custom outbound apps (filtered out of Descope's load_all_applications).
Returns one entry per connected (provider, scope, auth_type) slot, so a
provider with both a personal api_key and a personal oauth token will
appear twice. Disconnected slots are not emitted; clients that need a
list of available-but-not-connected providers should call
``GET /integrations/providers`` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.listIntegrations();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `IntegrationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">listCustomServices</a>() -> IsloApi.CustomServicesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List custom service definitions in the current tenant (catalog view).

Returns every custom Descope app belonging to the tenant regardless of
connection status, so the Add Integration picker can surface them for
any tenant member to connect to. Connection state (per-user/per-workspace
tokens) lives on ``GET /integrations``; this endpoint is purely the
service catalog.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.listCustomServices();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `IntegrationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">createCustomService</a>({ ...params }) -> IsloApi.CustomServiceCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a tenant-scoped custom Descope outbound app.

Returns the ``app_id`` so the frontend can immediately kick off the
connect flow (OAuth) or surface the API key form. Presets do not pass
through this endpoint -- their app ids come straight from
``GET /integrations/providers``.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.createCustomService({
    custom: {
        name: "name",
        slug: "slug"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.CustomServiceCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IntegrationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">disconnectCustomIntegration</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Disconnect a custom integration by its Descope app ID.

Authorization is by deterministic-ID prefix: only apps whose ID matches
``cust-{tenant-prefix}-`` are accepted, which scopes the operation to the
caller's workspace without a DB lookup. ``scope`` selects which side's
tokens to revoke (per-user vs tenant-wide); ``delete_app=true`` removes
the Descope app entirely (affects every user in the workspace).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.disconnectCustomIntegration({
    descope_app_id: "descope_app_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.DisconnectCustomIntegrationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IntegrationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">getIntegrationStatus</a>({ ...params }) -> IsloApi.IntegrationDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the detailed status of a specific integration.

Returns both user-level and tenant-level connection status independently.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.getIntegrationStatus({
    provider: "provider"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.GetIntegrationStatusRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IntegrationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">disconnectIntegration</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Disconnect/revoke an integration.

Args:
    provider: Provider name
    level: Which level to disconnect (USER or TENANT)
    auth_type: Optional. Defaults to provider's primary type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.disconnectIntegration({
    provider: "provider"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.DisconnectIntegrationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IntegrationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## gateway-profiles
<details><summary><code>client.gatewayProfiles.<a href="/src/api/resources/gatewayProfiles/client/Client.ts">listGatewayProfiles</a>() -> IsloApi.GatewayProfileResponse[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.gatewayProfiles.listGatewayProfiles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `GatewayProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.gatewayProfiles.<a href="/src/api/resources/gatewayProfiles/client/Client.ts">createGatewayProfile</a>({ ...params }) -> IsloApi.GatewayProfileResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.gatewayProfiles.createGatewayProfile({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.GatewayProfileCreate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GatewayProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.gatewayProfiles.<a href="/src/api/resources/gatewayProfiles/client/Client.ts">getGatewayProfile</a>({ ...params }) -> IsloApi.GatewayProfileDetailResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.gatewayProfiles.getGatewayProfile({
    profile_id: "profile_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.GetGatewayProfileRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GatewayProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.gatewayProfiles.<a href="/src/api/resources/gatewayProfiles/client/Client.ts">deleteGatewayProfile</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.gatewayProfiles.deleteGatewayProfile({
    profile_id: "profile_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.DeleteGatewayProfileRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GatewayProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.gatewayProfiles.<a href="/src/api/resources/gatewayProfiles/client/Client.ts">updateGatewayProfile</a>({ ...params }) -> IsloApi.GatewayProfileResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.gatewayProfiles.updateGatewayProfile({
    profile_id: "profile_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.GatewayProfileUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GatewayProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.gatewayProfiles.<a href="/src/api/resources/gatewayProfiles/client/Client.ts">createGatewayRule</a>({ ...params }) -> IsloApi.GatewayRuleResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.gatewayProfiles.createGatewayRule({
    profile_id: "profile_id",
    host_pattern: "host_pattern"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.GatewayRuleCreate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GatewayProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.gatewayProfiles.<a href="/src/api/resources/gatewayProfiles/client/Client.ts">deleteGatewayRule</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.gatewayProfiles.deleteGatewayRule({
    profile_id: "profile_id",
    rule_id: "rule_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.DeleteGatewayRuleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GatewayProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.gatewayProfiles.<a href="/src/api/resources/gatewayProfiles/client/Client.ts">updateGatewayRule</a>({ ...params }) -> IsloApi.GatewayRuleResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.gatewayProfiles.updateGatewayRule({
    profile_id: "profile_id",
    rule_id: "rule_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.GatewayRuleUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GatewayProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.gatewayProfiles.<a href="/src/api/resources/gatewayProfiles/client/Client.ts">reorderGatewayRules</a>({ ...params }) -> IsloApi.GatewayRuleResponse[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.gatewayProfiles.reorderGatewayRules({
    profile_id: "profile_id",
    rules: [{
            rule_id: "rule_id",
            priority: 1
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.RuleReorderRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GatewayProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CloudRoles
<details><summary><code>client.cloudRoles.<a href="/src/api/resources/cloudRoles/client/Client.ts">listCloudRoles</a>() -> IsloApi.CloudRoleResponse[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cloudRoles.listCloudRoles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `CloudRolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cloudRoles.<a href="/src/api/resources/cloudRoles/client/Client.ts">createCloudRole</a>({ ...params }) -> IsloApi.CloudRoleResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cloudRoles.createCloudRole({
    provider: "aws",
    role_arn: "role_arn"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.CloudRoleCreate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CloudRolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cloudRoles.<a href="/src/api/resources/cloudRoles/client/Client.ts">getCloudRole</a>({ ...params }) -> IsloApi.CloudRoleResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cloudRoles.getCloudRole({
    role_id: "role_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.GetCloudRoleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CloudRolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cloudRoles.<a href="/src/api/resources/cloudRoles/client/Client.ts">deleteCloudRole</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cloudRoles.deleteCloudRole({
    role_id: "role_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.DeleteCloudRoleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CloudRolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cloudRoles.<a href="/src/api/resources/cloudRoles/client/Client.ts">updateCloudRole</a>({ ...params }) -> IsloApi.CloudRoleResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cloudRoles.updateCloudRole({
    role_id: "role_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.CloudRoleUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CloudRolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## inference
<details><summary><code>client.inference.<a href="/src/api/resources/inference/client/Client.ts">listInferenceModels</a>() -> IsloApi.InferenceModelsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inference.listInferenceModels();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `InferenceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## sandboxes
<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">listSandboxes</a>({ ...params }) -> IsloApi.PaginatedSandboxResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List sandboxes for the authenticated tenant with optional filters and pagination.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.listSandboxes();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.ListSandboxesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">createSandbox</a>({ ...params }) -> IsloApi.SandboxResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new sandbox for the authenticated tenant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.createSandbox();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.CreateSandboxRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">getSandboxById</a>({ ...params }) -> IsloApi.SandboxResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return details for a sandbox by public ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.getSandboxById({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.GetSandboxByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">getSandbox</a>({ ...params }) -> IsloApi.SandboxResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return details for a sandbox by name.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.getSandbox({
    sandbox_name: "sandbox_name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.GetSandboxRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">deleteSandbox</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a sandbox and clean up its running VM, if any.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.deleteSandbox({
    sandbox_name: "sandbox_name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.DeleteSandboxRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">execInSandbox</a>({ ...params }) -> IsloApi.ExecResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start a command in a sandbox and return an exec ID for polling results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.execInSandbox({
    sandbox_name: "sandbox_name",
    command: ["command"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.ExecRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">getExecResult</a>({ ...params }) -> IsloApi.ExecResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return the captured result for a previously started sandbox command.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.getExecResult({
    sandbox_name: "sandbox_name",
    exec_id: "exec_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.GetExecResultRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">downloadFile</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Download a file from a sandbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.downloadFile({
    sandbox_name: "sandbox_name",
    path: "path"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.DownloadFileRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">uploadFile</a>({ ...params }) -> IsloApi.FileUploadStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a file to a path inside a sandbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.uploadFile({
    sandbox_name: "sandbox_name",
    path: "path"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.UploadFileRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">downloadArchive</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Download a sandbox directory as an archive.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.downloadArchive({
    sandbox_name: "sandbox_name",
    path: "path"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.DownloadArchiveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">uploadArchive</a>({ ...params }) -> IsloApi.FileUploadStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload and extract an archive into a sandbox directory.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.uploadArchive({
    sandbox_name: "sandbox_name",
    path: "path"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.UploadArchiveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">pauseSandbox</a>({ ...params }) -> IsloApi.SandboxResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pause a running sandbox VM.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.pauseSandbox({
    sandbox_name: "sandbox_name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.PauseSandboxRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">resumeSandbox</a>({ ...params }) -> IsloApi.SandboxResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resume a paused sandbox VM.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.resumeSandbox({
    sandbox_name: "sandbox_name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.ResumeSandboxRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">listSessions</a>({ ...params }) -> IsloApi.ListSessionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List persistent shell sessions in a sandbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.listSessions({
    sandbox_name: "sandbox_name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.ListSessionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">createSession</a>({ ...params }) -> IsloApi.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a persistent shell session in a sandbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.createSession({
    sandbox_name: "sandbox_name",
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.CreateSessionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">killSession</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Terminate a persistent shell session in a sandbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.killSession({
    sandbox_name: "sandbox_name",
    session: "session"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.KillSessionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">stopSandbox</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Stop the sandbox VM while keeping the sandbox record available.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.stopSandbox({
    sandbox_name: "sandbox_name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.StopSandboxRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SandboxesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## shares
<details><summary><code>client.shares.<a href="/src/api/resources/shares/client/Client.ts">listShares</a>({ ...params }) -> IsloApi.ShareResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List active public shares for a sandbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shares.listShares({
    sandbox_name: "sandbox_name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.ListSharesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SharesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.shares.<a href="/src/api/resources/shares/client/Client.ts">createShare</a>({ ...params }) -> IsloApi.ShareResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a temporary public share for a sandbox port.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shares.createShare({
    sandbox_name: "sandbox_name",
    port: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.CreateShareRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SharesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.shares.<a href="/src/api/resources/shares/client/Client.ts">revokeShare</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revoke a sandbox port share.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shares.revokeShare({
    sandbox_name: "sandbox_name",
    share_id: "share_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.RevokeShareRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SharesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## snapshots
<details><summary><code>client.snapshots.<a href="/src/api/resources/snapshots/client/Client.ts">listSnapshots</a>({ ...params }) -> IsloApi.PaginatedSnapshotResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all snapshots for the current tenant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapshots.listSnapshots();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.ListSnapshotsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SnapshotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.snapshots.<a href="/src/api/resources/snapshots/client/Client.ts">createSnapshot</a>({ ...params }) -> IsloApi.SnapshotResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a snapshot from a running sandbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapshots.createSnapshot({
    sandbox_name: "sandbox_name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.SnapshotCreate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SnapshotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.snapshots.<a href="/src/api/resources/snapshots/client/Client.ts">getSnapshot</a>({ ...params }) -> IsloApi.SnapshotResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get snapshot details by name.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapshots.getSnapshot({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.GetSnapshotRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SnapshotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.snapshots.<a href="/src/api/resources/snapshots/client/Client.ts">deleteSnapshot</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a snapshot by name.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapshots.deleteSnapshot({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.DeleteSnapshotRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SnapshotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## webhooks
<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">listIncomingWebhooks</a>() -> IsloApi.IncomingWebhook[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List active incoming webhooks for the tenant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.listIncomingWebhooks();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">createIncomingWebhook</a>({ ...params }) -> IsloApi.IncomingWebhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a tenant-scoped incoming webhook receiver. The receiver URL accepts external webhook deliveries and routes them to a resolved sandbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.createIncomingWebhook({
    auth: {
        auth_type: "none"
    },
    idempotency: {
        source: "header",
        name: "name"
    },
    name: "name",
    target: {
        target_type: "fixed_sandbox_name",
        sandbox_name: "sandbox_name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.IncomingWebhookCreate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">getIncomingWebhook</a>({ ...params }) -> IsloApi.IncomingWebhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get one incoming webhook by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.getIncomingWebhook({
    webhook_id: "webhook_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.GetIncomingWebhookRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">deleteIncomingWebhook</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Soft-delete an incoming webhook receiver.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.deleteIncomingWebhook({
    webhook_id: "webhook_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.DeleteIncomingWebhookRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">updateIncomingWebhook</a>({ ...params }) -> IsloApi.IncomingWebhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Partially update an incoming webhook receiver. Provided top-level fields replace the existing values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.updateIncomingWebhook({
    webhook_id: "webhook_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IsloApi.IncomingWebhookUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

