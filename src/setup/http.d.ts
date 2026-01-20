import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { RuntimeOverrides, ServerConfig } from '../types.ts';
export declare function createHTTPServer(config: ServerConfig, overrides?: RuntimeOverrides): Promise<{
    httpServer: import("node:http").Server<typeof import("node:http").IncomingMessage, typeof import("node:http").ServerResponse>;
    mcpServer: McpServer;
    logger: import("@mcp-z/server").Logger;
    close: () => Promise<void>;
}>;
