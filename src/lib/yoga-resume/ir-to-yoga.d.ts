/**
 * Transform IR elements to Yoga layout nodes.
 *
 * This module bridges the IR (Intermediate Representation) from resume
 * transformation with the Yoga layout engine.
 */
import type { FieldTemplates, LayoutElement } from '../ir/types.ts';
import type { TypographyOptions } from '../types/typography.ts';
import type { LayoutContent } from '../yoga-layout.ts';
import type { PageConfig, ResumeLayoutNode } from './types.ts';
/**
 * Transform a LayoutDocument to Yoga layout nodes.
 */
export declare function transformToYogaNodes(elements: LayoutElement[]): LayoutContent[];
/**
 * Calculate layout for IR elements using Yoga.
 *
 * This is the main entry point for Yoga-based layout calculation.
 *
 * @param doc - PDFKit document for measurements
 * @param elements - IR elements to lay out
 * @param typography - Typography options
 * @param fieldTemplates - Field templates for rendering
 * @param emojiAvailable - Whether emoji rendering is available
 * @param config - Page configuration
 * @returns Layout nodes with computed positions and the original IR elements
 */
export declare function calculateResumeLayout(doc: PDFKit.PDFDocument, elements: LayoutElement[], typography: TypographyOptions, fieldTemplates: Required<FieldTemplates>, emojiAvailable: boolean, config?: PageConfig): Promise<ResumeLayoutNode[]>;
/**
 * Configuration for two-column layout.
 */
export interface TwoColumnLayoutConfig {
    gap: number;
    left: {
        width?: number | string;
        elements: LayoutElement[];
    };
    right: {
        width?: number | string;
        elements: LayoutElement[];
    };
}
/**
 * Calculate layout for two-column resume layout.
 *
 * Creates a single unified Yoga tree with left and right columns,
 * computing all positions in one pass.
 */
export declare function calculateTwoColumnLayout(doc: PDFKit.PDFDocument, layout: TwoColumnLayoutConfig, typography: TypographyOptions, fieldTemplates: Required<FieldTemplates>, emojiAvailable: boolean, config?: PageConfig): Promise<{
    left: ResumeLayoutNode[];
    right: ResumeLayoutNode[];
    columnPositions: {
        leftX: number;
        leftWidth: number;
        rightX: number;
        rightWidth: number;
    };
}>;
