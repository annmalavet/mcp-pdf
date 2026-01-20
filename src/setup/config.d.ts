import type { ServerConfig } from '../types.ts';
/**
 * Handle --version and --help flags before config parsing.
 * These should work without requiring any configuration.
 */
export declare function handleVersionHelp(args: string[]): {
    handled: boolean;
    output?: string;
};
/**
 * Parse PDF server configuration from CLI arguments and environment.
 */
export declare function parseConfig(args: string[], env: Record<string, string | undefined>): ServerConfig;
/**
 * Build production configuration from process globals.
 * Entry point for production server.
 */
export declare function createConfig(): ServerConfig;
