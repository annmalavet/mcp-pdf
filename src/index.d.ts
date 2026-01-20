import type { ServerConfig } from './types.ts';
export * as fonts from './lib/fonts.ts';
export * as mcp from './mcp/index.ts';
export * as schemas from './schemas/index.ts';
export * as setup from './setup/index.ts';
export * from './types.ts';
export declare function startServer(config: ServerConfig): Promise<void>;
export default function main(): Promise<void>;
