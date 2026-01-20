import type { PDFTextOptions } from './pdf-helpers.ts';
import type { LayoutContent } from './yoga-layout.ts';
/**
 * Content measurement utilities for determining heights before rendering.
 *
 * These functions measure content without modifying the document,
 * enabling Yoga layout to make informed page break decisions.
 */
/**
 * Measure the height of text content (with or without emoji).
 *
 * @param doc - PDFKit document (used for font metrics)
 * @param text - Text to measure
 * @param fontSize - Font size in points
 * @param fontName - Font name for metrics
 * @param emojiAvailable - Whether emoji rendering is available
 * @param options - Text layout options (width, lineGap, indent, etc.)
 * @returns Height in points
 */
export declare function measureTextHeight(doc: PDFKit.PDFDocument, text: string, fontSize: number, fontName: string, emojiAvailable: boolean, options?: PDFTextOptions): number;
/**
 * Measure the natural width of text content (for row layouts).
 *
 * @param doc - PDFKit document (used for font metrics)
 * @param text - Text to measure
 * @param fontSize - Font size in points
 * @param fontName - Font name for metrics
 * @param emojiAvailable - Whether emoji rendering is available
 * @returns Width in points
 */
export declare function measureTextWidth(doc: PDFKit.PDFDocument, text: string, fontSize: number, fontName: string, emojiAvailable: boolean): number;
/**
 * Create a width measurer function that can extract font info from LayoutContent.
 *
 * @param doc - PDFKit document
 * @param regularFont - Name of regular font
 * @param boldFont - Name of bold font
 * @param emojiAvailable - Whether emoji rendering is available
 * @returns Width measurer function compatible with yoga-layout
 */
export declare function createWidthMeasurer(doc: PDFKit.PDFDocument, regularFont: string, boldFont: string, emojiAvailable: boolean): (content: LayoutContent) => number;
/**
 * Measure the height of an image element.
 *
 * @param specifiedHeight - Explicit height if provided
 * @param specifiedWidth - Explicit width if provided (used for aspect ratio)
 * @param naturalWidth - Natural image width (if known)
 * @param naturalHeight - Natural image height (if known)
 * @returns Height in points
 */
export declare function measureImageHeight(specifiedHeight?: number, specifiedWidth?: number, naturalWidth?: number, naturalHeight?: number): number;
/**
 * Measure the height of a rectangle element.
 */
export declare function measureRectHeight(height: number): number;
/**
 * Measure the height of a circle element (diameter).
 */
export declare function measureCircleHeight(radius: number): number;
/**
 * Measure the height of a line element.
 */
export declare function measureLineHeight(y1: number, y2: number): number;
/**
 * Spacing measurement helper - convert moveDown lines to points.
 *
 * @param doc - PDFKit document (for line height calculation)
 * @param moveDown - Number of lines to move down
 * @returns Height in points
 */
export declare function measureMoveDown(doc: PDFKit.PDFDocument, moveDown: number): number;
/**
 * Measure total height of a content group (for wrap: false blocks).
 *
 * @param items - Array of content items
 * @param measureItem - Function to measure individual items
 * @returns Total height in points
 */
export declare function measureGroupHeight<T>(items: T[], measureItem: (item: T) => number): number;
