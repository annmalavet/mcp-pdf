/**
 * Height measurement functions for Yoga-based resume layout.
 *
 * These functions measure the height of each IR element type
 * for Yoga layout calculation. All measurements are in points.
 *
 * IMPORTANT: Text with markdown bold (**text**) is rendered with Helvetica-Bold,
 * which is wider than Helvetica. This causes more line wrapping and taller output.
 * Measurement functions must account for this by using bold font when markdown
 * bold is present to avoid page overflow.
 */
import type { CompanyHeaderElement, CredentialListElement, DividerElement, EntryHeaderElement, EntryListElement, FieldTemplates, GroupElement, HeaderElement, KeywordListElement, LanguageListElement, LayoutElement, ReferenceListElement, SectionTitleElement, StructuredContentElement, TextElement } from '../ir/types.ts';
import type { TypographyOptions } from '../types/typography.ts';
import { type MeasureContext } from './types.ts';
/**
 * Measure text element height.
 */
export declare function measureText(ctx: MeasureContext, element: TextElement): number;
/**
 * Measure section title element height.
 */
export declare function measureSectionTitle(ctx: MeasureContext, element: SectionTitleElement): number;
/**
 * Measure header element height.
 */
export declare function measureHeader(ctx: MeasureContext, element: HeaderElement): number;
/**
 * Measure divider element height.
 */
export declare function measureDivider(_ctx: MeasureContext, element: DividerElement): number;
/**
 * Measure entry header element height (company/position/dates only, no content).
 */
export declare function measureEntryHeader(ctx: MeasureContext, element: EntryHeaderElement): number;
/**
 * Measure structured content element height (summary + optional bullets).
 * This is the single source of truth for all summary+bullet height measurement.
 */
export declare function measureStructuredContent(ctx: MeasureContext, element: StructuredContentElement): number;
/**
 * Measure company header element height (for grouped entries).
 */
export declare function measureCompanyHeaderElement(ctx: MeasureContext, element: CompanyHeaderElement): number;
/**
 * Measure entry list element height.
 */
export declare function measureEntryList(ctx: MeasureContext, element: EntryListElement): number;
/**
 * Create a measure context from PDF document and typography.
 */
export declare function measureKeywordList(ctx: MeasureContext, element: KeywordListElement): number;
/**
 * Measure language list element height.
 */
export declare function measureLanguageList(ctx: MeasureContext, element: LanguageListElement): number;
/**
 * Measure credential list element height.
 */
export declare function measureCredentialList(ctx: MeasureContext, element: CredentialListElement): number;
/**
 * Measure reference list element height.
 */
export declare function measureReferenceList(ctx: MeasureContext, element: ReferenceListElement): number;
/**
 * Measure group element height (sum of children).
 */
export declare function measureGroup(ctx: MeasureContext, element: GroupElement): number;
/**
 * Measure any layout element height.
 * This is the main entry point for height measurement.
 */
export declare function measureElement(ctx: MeasureContext, element: LayoutElement): number;
/**
 * Create a measure context from PDF document and typography.
 */
export declare function createMeasureContext(doc: PDFKit.PDFDocument, typography: TypographyOptions, fieldTemplates: Required<FieldTemplates>, emojiAvailable: boolean, width: number): MeasureContext;
