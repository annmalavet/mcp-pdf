import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { RuntimeOverrides, ServerConfig } from '../types.ts';
export declare function createStdioServer(config: ServerConfig, overrides?: RuntimeOverrides): Promise<{
    mcpServer: McpServer;
    logger: import("@mcp-z/server").Logger;
    close: () => Promise<void>;
}>;
