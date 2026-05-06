# Reference
## sandboxes
<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">listSandboxes</a>({ ...params }) -> IsloApi.PaginatedSandboxResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List and filter sandboxes for the authenticated tenant.
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

Create a new sandbox with the specified configuration.
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

**request:** `IsloApi.SandboxCreate` 
    
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">getSandboxByIdSandboxesByIdSandboxIdGet</a>({ ...params }) -> IsloApi.SandboxResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details of a specific sandbox by stable public ID, including deleted sandboxes.
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
await client.sandboxes.getSandboxByIdSandboxesByIdSandboxIdGet({
    sandbox_id: "sandbox_id"
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

**request:** `IsloApi.GetSandboxByIdSandboxesByIdSandboxIdGetRequest` 
    
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

Get details of a specific sandbox by name.
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">deleteSandbox</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mark a sandbox for deletion. VM teardown happens asynchronously.
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">stopSandbox</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Stop a sandbox. VM teardown happens asynchronously; the record stays visible.
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">pauseSandbox</a>({ ...params }) -> IsloApi.SandboxResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Snapshot the sandbox VM state to disk and free CPU/memory. The sandbox can be resumed later.
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

Resume a paused sandbox from its local snapshot.
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">promoteSandboxCache</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Promote the sandbox's tool cache to golden cache for reuse.
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
await client.sandboxes.promoteSandboxCache({
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

**request:** `IsloApi.PromoteSandboxCacheRequest` 
    
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">listSessions</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List active persistent sessions in a sandbox.
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">createSession</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a persistent session in a sandbox.
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
    body: {
        "key": "value"
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

Kill a persistent session in a sandbox.
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
    session_name: "session_name"
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">listExecSessions</a>({ ...params }) -> IsloApi.ExecSessionResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all exec sessions for a sandbox.
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
await client.sandboxes.listExecSessions({
    sandbox_id: "sandbox_id"
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

**request:** `IsloApi.ListExecSessionsRequest` 
    
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">getExecSessionAsciinema</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return logs for a specific exec session in asciinema v2 format for playback.
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
await client.sandboxes.getExecSessionAsciinema({
    sandbox_id: "sandbox_id",
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

**request:** `IsloApi.GetExecSessionAsciinemaRequest` 
    
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">getExecSessionLogs</a>({ ...params }) -> IsloApi.ExecLogsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return raw logs for a specific exec session.
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
await client.sandboxes.getExecSessionLogs({
    sandbox_id: "sandbox_id",
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

**request:** `IsloApi.GetExecSessionLogsRequest` 
    
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">listAgentSessions</a>({ ...params }) -> IsloApi.AgentSessionResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all Claude agent sessions for a sandbox, ordered by most recent first.
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
await client.sandboxes.listAgentSessions({
    sandbox_id: "sandbox_id"
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

**request:** `IsloApi.ListAgentSessionsRequest` 
    
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">getAgentSessionEvents</a>({ ...params }) -> IsloApi.AgentSessionEventResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return all trace events for a specific agent session, ordered by timestamp.
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
await client.sandboxes.getAgentSessionEvents({
    sandbox_id: "sandbox_id",
    session_name: "session_name"
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

**request:** `IsloApi.GetAgentSessionEventsRequest` 
    
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">downloadFile</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Download a single file from a sandbox.
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">uploadFile</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a single file into a sandbox.
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">downloadArchive</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Download a directory from a sandbox as a tar.gz archive.
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">uploadArchive</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a tar.gz archive and extract it into a sandbox directory.
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">execInSandbox</a>({ ...params }) -> IsloApi.ExecResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Execute a command inside a sandbox by name.
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
    body: {
        command: ["command"]
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

**request:** `IsloApi.ExecInSandboxRequest` 
    
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

Poll the result of a previously started exec command.
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

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">execInSandboxStream</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Execute a command inside a sandbox and stream stdout/stderr as SSE.
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
await client.sandboxes.execInSandboxStream({
    sandbox_name: "sandbox_name",
    body: {
        command: ["command"]
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

**request:** `IsloApi.ExecInSandboxStreamRequest` 
    
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

## Snapshots
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
    sandbox_id: "sandbox_id"
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

## Credits
<details><summary><code>client.credits.<a href="/src/api/resources/credits/client/Client.ts">getCreditBalance</a>() -> IsloApi.CreditBalance</code></summary>
<dl>
<dd>

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

<details><summary><code>client.credits.<a href="/src/api/resources/credits/client/Client.ts">createCreditCheckout</a>({ ...params }) -> IsloApi.CreateCheckoutResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credits.createCreditCheckout({
    amount_cents: 1
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

**request:** `IsloApi.CreateCheckoutRequest` 
    
</dd>
</dl>

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

<details><summary><code>client.credits.<a href="/src/api/resources/credits/client/Client.ts">handlePaddleWebhook</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credits.handlePaddleWebhook({
    "paddle-signature": "paddleSignature",
    body: {
        "key": "value"
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

**request:** `IsloApi.HandlePaddleWebhookRequest` 
    
</dd>
</dl>

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

List available preset providers and their pre-provisioned Descope apps.

The ``apps`` array carries every (auth_method, scope) -> app_id combo a
preset supports, so the modal can resolve the right ``app_id`` locally
and skip a server round-trip on the connect path.
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

