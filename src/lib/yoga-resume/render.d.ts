/**
 * Position-based renderers for Yoga layout.
 *
 * These renderers receive computed positions from Yoga and render
 * at exact x, y coordinates. No advanceY() - all positions are pre-computed.
 */
import type { CompanyHeaderElement, CredentialListElement, DividerElement, EntryHeaderElement, FieldTemplates, GroupElement, HeaderElement, KeywordListElement, LanguageListElement, ReferenceListElement, SectionTitleElement, StructuredContentElement, TextElement } from '../ir/types.ts';
import type { TypographyOptions } from '../types/typography.ts';
import { type ComputedPosition, type Page, type PageNode, type RenderContext } from './types.ts';
/**
 * Render text element at computed position.
 */
export declare function renderTextElement(ctx: RenderContext, element: TextElement, position: ComputedPosition): void;
/**
 * Render section title at computed position.
 */
export declare function renderSectionTitle(ctx: RenderContext, element: SectionTitleElement, position: ComputedPosition): void;
/**
 * Render header element at computed position.
 */
export declare function renderHeader(ctx: RenderContext, element: HeaderElement, position: ComputedPosition): void;
/**
 * Render divider element at computed position.
 */
export declare function renderDivider(ctx: RenderContext, element: DividerElement, position: ComputedPosition): void;
/**
 * Render keyword list element at computed position.
 */
export declare function renderKeywordList(ctx: RenderContext, element: KeywordListElement, position: ComputedPosition): void;
/**
 * Render language list element at computed position.
 */
export declare function renderLanguageList(ctx: RenderContext, element: LanguageListElement, position: ComputedPosition): void;
/**
 * Render credential list element at computed position.
 */
export declare function renderCredentialList(ctx: RenderContext, element: CredentialListElement, position: ComputedPosition): void;
/**
 * Render reference list element at computed position.
 */
export declare function renderReferenceList(ctx: RenderContext, element: ReferenceListElement, position: ComputedPosition): void;
/**
 * Render a group element at computed position.
 */
export declare function renderGroup(ctx: RenderContext, _element: GroupElement, children?: PageNode[]): void;
/**
 * Render entry header element (company/position/dates only, no content).
 */
export declare function renderEntryHeader(ctx: RenderContext, element: EntryHeaderElement, position: ComputedPosition): void;
/**
 * Render a structured content element (summary + optional bullets).
 * This is the single source of truth for ALL summary+bullet rendering.
 */
export declare function renderStructuredContent(ctx: RenderContext, element: StructuredContentElement, position: ComputedPosition): void;
/**
 * Render company header element (for grouped entries).
 */
export declare function renderCompanyHeader(ctx: RenderContext, element: CompanyHeaderElement, position: ComputedPosition): void;
/**
 * Render a PageNode (element with computed position).
 */
export declare function renderPageNode(ctx: RenderContext, node: PageNode): void;
/**
 * Render a full page of nodes.
 */
export declare function renderPage(ctx: RenderContext, page: Page): void;
/**
 * Create a render context.
 */
export declare function createRenderContext(doc: PDFKit.PDFDocument, typography: TypographyOptions, fieldTemplates: Required<FieldTemplates>, emojiAvailable: boolean, parseMarkdown: boolean, hyperlinkColor: string): RenderContext;
