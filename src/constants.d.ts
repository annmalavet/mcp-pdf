/**
 * Constants for PDF generation.
 *
 * Page sizes are in points (72 points = 1 inch).
 */
/**
 * Standard page size presets.
 */
export declare const PAGE_SIZES: {
    /** US Letter: 8.5" × 11" */
    readonly LETTER: {
        readonly width: 612;
        readonly height: 792;
    };
    /** ISO A4: 210mm × 297mm */
    readonly A4: {
        readonly width: 595;
        readonly height: 842;
    };
    /** US Legal: 8.5" × 14" */
    readonly LEGAL: {
        readonly width: 612;
        readonly height: 1008;
    };
};
export type PageSizePreset = keyof typeof PAGE_SIZES;
export type PageSize = {
    width: number;
    height: number;
};
/**
 * Default page size (US Letter).
 */
export declare const DEFAULT_PAGE_SIZE: {
    readonly width: 612;
    readonly height: 792;
};
/**
 * Margin type used across PDF tools.
 */
export type Margins = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
/**
 * Default margins by page size for general PDF documents.
 * Based on standard document conventions for each paper size.
 */
export declare const DEFAULT_MARGINS_BY_SIZE: Record<PageSizePreset, Margins>;
/**
 * Get default margins for a page size.
 */
export declare function getDefaultMargins(size?: PageSizePreset): Margins;
/**
 * Default margin for general PDF documents (1 inch = 72 points).
 * @deprecated Use getDefaultMargins(size) instead for page-size-appropriate defaults.
 */
export declare const DEFAULT_MARGIN = 72;
/**
 * Default margins for resume documents.
 * Intentionally tighter than standard 1-inch margins to fit more content.
 * top/bottom: 50pt (~0.69"), left/right: 54pt (~0.75")
 */
export declare const RESUME_DEFAULT_MARGINS: Margins;
/**
 * Epsilon tolerance for floating-point comparisons in text wrapping.
 * Half a point provides reasonable precision while avoiding floating-point edge cases.
 */
export declare const WRAP_EPSILON = 0.5;
/**
 * Default font sizes for content rendering.
 */
export declare const DEFAULT_TEXT_FONT_SIZE = 12;
export declare const DEFAULT_HEADING_FONT_SIZE = 24;
