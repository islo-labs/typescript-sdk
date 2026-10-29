import { Islo } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

test("starts and reads a saved Agent run", async () => {
    const server = mockServerPool.createServer();
    server
        .mockEndpoint()
        .post("/factories/team/agents/verifier/sessions")
        .jsonBody({ message: "Verify PR" })
        .respondWith()
        .statusCode(201)
        .jsonBody({ job_run_id: "run-1", region: "test", sandbox_name: "sandbox", session_name: "session" })
        .build();
    server
        .mockEndpoint()
        .get("/factories/team/agents/verifier/sessions/run-1")
        .respondWith()
        .statusCode(200)
        .jsonBody({ run_id: "run-1", status: "succeeded", output: "Passed", error: null })
        .build();
    const client = new Islo({
        apiKey: "test",
        environment: { control: server.baseUrl, compute: server.baseUrl },
    });
    const session = await client.agents.startFactoryAgentSession({
        factory: "team",
        name: "verifier",
        message: "Verify PR",
    });
    const result = await client.agents.getFactoryAgentRun({
        factory: "team",
        name: "verifier",
        job_run_id: session.job_run_id,
    });
    expect(result.output).toBe("Passed");
});
