/**
 * Shared PDF utilities for all PDF tools.
 *
 * This module provides common functionality used by pdf-layout, pdf-document, and pdf-resume tools.
 */
import { z } from 'zod';
import { type PageSize, type PageSizePreset } from '../constants.ts';
import type { FontConfig } from './types/typography.ts';
/**
 * Text base properties shared between text and heading items
 */
export declare const textBaseSchema: z.ZodObject<{
    text: z.ZodOptional<z.ZodString>;
    fontSize: z.ZodOptional<z.ZodNumber>;
    bold: z.ZodOptional<z.ZodBoolean>;
    color: z.ZodOptional<z.ZodString>;
    textAlign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        justify: "justify";
        left: "left";
        right: "right";
    }>>;
    indent: z.ZodOptional<z.ZodNumber>;
    lineGap: z.ZodOptional<z.ZodNumber>;
    paragraphGap: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    moveDown: z.ZodOptional<z.ZodNumber>;
    underline: z.ZodOptional<z.ZodBoolean>;
    strike: z.ZodOptional<z.ZodBoolean>;
    oblique: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodNumber]>>;
    link: z.ZodOptional<z.ZodString>;
    characterSpacing: z.ZodOptional<z.ZodNumber>;
    wordSpacing: z.ZodOptional<z.ZodNumber>;
    continued: z.ZodOptional<z.ZodBoolean>;
    lineBreak: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type TextBaseItem = z.infer<typeof textBaseSchema>;
/**
 * Common output schema for PDF generation results
 */
export declare const pdfOutputSchema: z.ZodObject<{
    operationSummary: z.ZodString;
    itemsProcessed: z.ZodNumber;
    itemsChanged: z.ZodNumber;
    completedAt: z.ZodString;
    documentId: z.ZodString;
    filename: z.ZodString;
    uri: z.ZodString;
    sizeBytes: z.ZodNumber;
    pageCount: z.ZodOptional<z.ZodNumber>;
    warnings: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type PDFOutput = z.infer<typeof pdfOutputSchema>;
/**
 * Resolve page size from preset name or custom dimensions.
 */
export declare function resolvePageSize(size: PageSizePreset | [number, number] | undefined): PageSize;
export interface PDFDocumentOptions {
    title?: string;
    author?: string;
    subject?: string;
    pageSize?: PageSizePreset | [number, number];
    margins?: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    backgroundColor?: string;
}
export interface PDFDocumentSetup {
    doc: PDFKit.PDFDocument;
    pageSize: PageSize;
    pdfPromise: Promise<Buffer>;
    fonts: FontConfig;
    emojiAvailable: boolean;
    warnings: string[];
    actualPageCount: number;
}
/**
 * Create and configure a PDFKit document with common setup.
 *
 * Handles:
 * - Page size resolution
 * - Margins configuration
 * - Buffer accumulation
 * - Font setup
 * - Emoji support detection
 * - Background color application
 * - Page count tracking
 *
 * @param options - Document configuration options
 * @param font - Font specification (auto, built-in name, or path/URL)
 * @param contentForEmojiCheck - Content string to check for emoji characters
 * @returns Configured document and supporting utilities
 */
export declare function createPDFDocument(options: PDFDocumentOptions, font: string | undefined, contentForEmojiCheck: string): Promise<PDFDocumentSetup>;
import type { PDFTextOptions } from './pdf-helpers.ts';
/**
 * Extract PDFKit text options from a text/heading content item.
 */
export declare function extractTextOptions(item: TextBaseItem): PDFTextOptions;
/**
 * Validate text content against font capabilities.
 *
 * @param items - Array of content items to validate
 * @param regularFont - Regular font name
 * @param boldFont - Bold font name
 * @param warnings - Array to collect validation warnings
 */
export declare function validateContentText<T extends {
    type: string;
    text?: string;
    bold?: boolean;
    children?: T[];
}>(items: T[], regularFont: string, boldFont: string, warnings: string[]): void;
