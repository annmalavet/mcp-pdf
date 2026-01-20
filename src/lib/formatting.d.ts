/**
 * Field templates and rendering for resume generation.
 *
 * Field templates use LiquidJS to render field combinations.
 * Handlers use these for field-level rendering while maintaining structural layout.
 */
import type { FieldTemplates } from './ir/types.ts';
/**
 * Default field templates
 */
export declare const DEFAULT_FIELD_TEMPLATES: Required<FieldTemplates>;
/**
 * Format a date according to the format string
 *
 * Supported tokens:
 * - YYYY: 4-digit year (2020)
 * - YY: 2-digit year (20)
 * - MMMM: Full month name (January)
 * - MMM: Short month name (Jan)
 * - MM: 2-digit month (01)
 * - M: 1-digit month (1)
 * - DD: 2-digit day (05)
 * - D: 1-digit day (5)
 */
export declare function formatDate(dateStr: string | undefined | null, format: string): string;
/**
 * Calculate tenure in years and months between two dates
 */
export declare function calculateTenure(startDate: string | undefined | null, endDate: string | undefined | null): {
    years: number;
    months: number;
    totalMonths: number;
} | null;
/**
 * Format tenure as a human-readable string
 */
export declare function formatTenure(startDate: string | undefined | null, endDate: string | undefined | null): string;
/**
 * Merge user templates with defaults
 */
export declare function mergeFieldTemplates(userTemplates?: FieldTemplates): Required<FieldTemplates>;
/**
 * Render a field template with the given context
 */
export declare function renderField(template: string, context: Record<string, unknown>): string;
/**
 * Register LiquidJS filters for field templates.
 * Call once at startup.
 */
export declare function registerFieldFilters(): void;
