/**
 * Transform phase: Resume JSON + SectionsConfig → LayoutDocument (IR)
 *
 * This is the first phase of the resume PDF pipeline. It transforms
 * the resume JSON data into an intermediate representation (IR) that
 * can be rendered by type-specific handlers.
 */
import type { ResumeSchema } from '../../../assets/resume.ts';
import type { LayoutDocument, SectionsConfig } from './types.ts';
/**
 * Get a nested value from an object using dot notation
 */
export declare function getNestedValue(obj: Record<string, unknown>, path: string): unknown;
/**
 * Main transform function: Resume + SectionsConfig → LayoutDocument
 */
export declare function transformToLayout(resume: ResumeSchema, config: SectionsConfig): LayoutDocument;
/**
 * Default sections config matching the original section order
 */
export declare const DEFAULT_SECTIONS: SectionsConfig;
