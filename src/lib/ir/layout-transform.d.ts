/**
 * Layout Transform: IR Elements + LayoutConfig → Two-Column Layout Structure
 *
 * This module takes the IR elements from transform.ts and reorganizes them
 * based on the layout configuration (single-column or two-column).
 *
 * For single-column: Returns elements as-is (no transformation needed)
 * For two-column: Wraps elements in column groups based on section assignment
 */
import type { LayoutConfig } from '../resume-pdf-generator.ts';
import type { DividerConfig, LayoutElement, SectionConfig } from './types.ts';
/**
 * Column layout with assigned IR elements
 */
export interface ColumnLayout {
    /** Column width - number (points) or string (percentage) */
    width?: string | number;
    /** IR elements assigned to this column */
    elements: LayoutElement[];
}
/**
 * Two-column layout structure
 */
export interface TwoColumnLayout {
    style: 'two-column';
    /** Gap between columns in points */
    gap: number;
    /** Left/sidebar column */
    left: ColumnLayout;
    /** Right/main column */
    right: ColumnLayout;
}
/**
 * Single-column layout structure (just elements in flow order)
 */
export interface SingleColumnLayout {
    style: 'single-column';
    /** All elements in original order */
    elements: LayoutElement[];
}
/**
 * Layout result - either single or two-column
 */
export type ResumeLayout = SingleColumnLayout | TwoColumnLayout;
/**
 * Transform IR elements to a layout structure based on configuration.
 *
 * @param elements - IR elements from transform.ts
 * @param sections - Section configurations (for source path mapping)
 * @param layoutConfig - Layout configuration (single-column or two-column)
 * @returns Layout structure ready for rendering
 */
export declare function transformToResumeLayout(elements: LayoutElement[], _sections: (SectionConfig | DividerConfig)[], layoutConfig?: LayoutConfig): ResumeLayout;
/**
 * Type guard for two-column layout
 */
export declare function isTwoColumnLayout(layout: ResumeLayout): layout is TwoColumnLayout;
/**
 * Type guard for single-column layout
 */
export declare function isSingleColumnLayout(layout: ResumeLayout): layout is SingleColumnLayout;
