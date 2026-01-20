/**
 * Template engine using LiquidJS
 * Supports: {{ field }}, {{ field | filter }}, {% if %}, {% for %}
 */
/**
 * Type for custom helper functions (LiquidJS filter style)
 * In LiquidJS: {{ value | filterName: arg1, arg2 }}
 * fn receives: (context, value, arg1, arg2)
 */
export type HelperFn = (context: Record<string, unknown>, value: string, ...args: string[]) => unknown;
/**
 * Register a custom filter
 */
export declare function registerFilter(name: string, fn: (value: unknown, ...args: unknown[]) => unknown): void;
/**
 * Register a custom helper as a LiquidJS filter
 * Usage: {{ value | helperName: arg1, arg2 }}
 */
export declare function registerHelper(name: string, fn: HelperFn): void;
/**
 * Render a template string with the given context
 */
export declare function render(template: string, context: Record<string, unknown>): string;
/**
 * Compile a template for repeated use (returns render function)
 */
export declare function compile(template: string): (context: Record<string, unknown>) => string;
