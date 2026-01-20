import type { Logger, MiddlewareLayer } from '@mcp-z/server';
import type { CommonRuntime, RuntimeOverrides, ServerConfig, StorageContext } from '../types.ts';
export declare function createLogger(config: ServerConfig): Logger;
export declare function createLoggingLayer(logger: Logger): MiddlewareLayer;
export declare function createStorageLayer(storageContext: StorageContext): MiddlewareLayer;
export declare function createDefaultRuntime(config: ServerConfig, overrides?: RuntimeOverrides): Promise<CommonRuntime>;
