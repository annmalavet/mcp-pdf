/**
 * Resume PDF generator using Yoga layout engine with emoji support
 */
import type { ResumeSchema } from '../../assets/resume.ts';
import { type Margins, type PageSizePreset } from '../constants.ts';
import type { Logger } from '../types.ts';
import type { FieldTemplates, SectionsConfig } from './ir/types.ts';
import type { TypographyOptions } from './types/typography.ts';
export type { ResumeSchema };
/**
 * Column configuration for two-column layouts
 */
export interface ColumnConfig {
    /** Column width as percentage ("30%") or points (150) */
    width?: string | number;
    /** Source paths of sections for this column */
    sections: string[];
}
/**
 * Layout configuration for spatial arrangement
 */
export interface LayoutConfig {
    /** Layout style: single-column (default) or two-column */
    style?: 'single-column' | 'two-column';
    /** Column configuration for two-column layout */
    columns?: {
        left?: ColumnConfig;
        right?: ColumnConfig;
    };
    /** Gap between columns in points (default: 30) */
    gap?: number;
}
/**
 * Render options for resume PDF generation
 */
export interface RenderOptions {
    /** Custom typography settings */
    typography?: Partial<TypographyOptions>;
    /** Sections configuration (section order, titles, etc.) */
    sections?: SectionsConfig;
    /** Field templates for customizing field-level rendering (dates, locations, etc.) */
    fieldTemplates?: FieldTemplates;
    /** Font specification (path, URL, 'auto', or standard font name) */
    font?: string;
    /** Layout configuration for spatial arrangement (single-column or two-column) */
    layout?: LayoutConfig;
    /** Page size preset (default: LETTER) */
    pageSize?: PageSizePreset;
    /** Page background color (hex like "#fffff0" or named color). Default: white. */
    backgroundColor?: string;
    /** Explicit margins (if provided, overrides default resume margins) */
    margins?: Margins;
    /** Whether to parse markdown */
    parseMarkdown?: boolean;
    /** Color for hyperlink text (default: #0066CC) */
    hyperlinkColor?: string;
}
/**
 * Renders a resume to PDF buffer using the transform → render pipeline
 */
export declare function generateResumePDFBuffer(resume: ResumeSchema, options: RenderOptions, logger: Logger): Promise<Buffer>;
export { DEFAULT_SECTIONS } from './ir/transform.ts';
export type { FieldTemplates, SectionsConfig } from './ir/types.ts';
export type { TypographyOptions } from './types/typography.ts';
export { DEFAULT_TYPOGRAPHY } from './types/typography.ts';
