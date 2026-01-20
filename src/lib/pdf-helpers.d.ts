import type { FontConfig } from './types/typography.ts';
/**
 * PDFKit text rendering options
 */
export interface PDFTextOptions {
    x?: number;
    y?: number;
    align?: 'left' | 'center' | 'right' | 'justify';
    indent?: number;
    lineGap?: number;
    paragraphGap?: number;
    width?: number;
    underline?: boolean;
    strike?: boolean;
    oblique?: boolean | number;
    link?: string;
    characterSpacing?: number;
    wordSpacing?: number;
    continued?: boolean;
    lineBreak?: boolean;
    moveDown?: number;
}
export interface TypographyConfig {
    fontSize: number;
    fontName: string;
    fonts?: FontConfig;
    bold?: boolean;
    underline?: boolean;
    strike?: boolean;
    oblique?: boolean | number;
}
export interface ColorConfig {
    fillColor?: string;
    hyperlinkColor?: string;
}
export interface FeaturesConfig {
    enableEmoji?: boolean;
    markdown?: boolean;
}
export interface LayoutConfig {
    x?: number;
    y?: number;
    width?: number;
    align?: 'left' | 'center' | 'right' | 'justify';
    indent?: number;
}
export interface SpacingConfig {
    lineGap?: number;
    paragraphGap?: number;
    moveDown?: number;
    characterSpacing?: number;
    wordSpacing?: number;
    continued?: boolean;
    lineBreak?: boolean;
}
export interface AnnotationConfig {
    link?: string;
}
export interface TextRenderConfig {
    typography: TypographyConfig;
    color?: ColorConfig;
    features?: FeaturesConfig;
    layout?: LayoutConfig;
    spacing?: SpacingConfig;
    annotation?: AnnotationConfig;
}
/**
 * Render text with inline emoji support and markdown links
 *
 * If emoji font is available and text contains emoji, renders emoji as inline images.
 * If text contains markdown links [text](url), renders them as clickable links.
 * Otherwise, renders text normally using PDFKit.
 *
 * Supports both single-line and multi-line/wrapped text with emoji and links.
 *
 * @param doc - PDFKit document
 * @param text - Text to render (may contain emoji and markdown links)
 * @param fontSize - Font size in points
 * @param fontName - Font name to use for text
 * @param emojiAvailable - Whether emoji font is available
 * @param enableMarkdownLinks - Whether to parse and render markdown links as clickable
 * @param hyperlinkColor - Color for hyperlink text (default: #0066CC)
 * @param options - Additional PDFKit text options
 */
/**
 * Render text with grouped configuration options.
 * New API that groups related options together for better organization.
 */
export declare function renderText(doc: PDFKit.PDFDocument, text: string, config: TextRenderConfig): void;
/**
 * Calculate the rendered height of text with markdown formatting.
 *
 * This function uses the same algorithm as renderTextUnified to calculate
 * how tall the text will be when rendered, accounting for:
 * - Bold text being wider (causing more line wrapping)
 * - Italic text
 * - Mixed font styles within the same text
 *
 * This ensures measurement matches rendering exactly.
 *
 * @param doc - PDFKit document for font measurements
 * @param text - Text with optional markdown formatting
 * @param width - Available width for text wrapping
 * @param fontSize - Font size in points
 * @param lineGap - Extra space between lines
 * @param fonts - Font configuration with regular/bold/italic variants
 * @param parseMarkdown - Whether to parse markdown (default: true)
 * @returns Height in points that the rendered text will occupy
 */
export declare function measureMarkdownTextHeight(doc: PDFKit.PDFDocument, text: string, width: number, fontSize: number, lineGap: number, fonts: FontConfig, parseMarkdown?: boolean): number;
