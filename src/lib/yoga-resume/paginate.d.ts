/**
 * Page break logic for Yoga-based resume layout.
 *
 * Yoga calculates positions as if everything is on one infinite page.
 * This module splits the computed layout into pages, adjusting Y positions
 * for each page.
 */
import type { Page, PageConfig, ResumeLayoutNode } from './types.ts';
/**
 * Default page configuration (US Letter with resume margins).
 */
export declare const DEFAULT_PAGE_CONFIG: PageConfig;
/**
 * Calculate the content height available on a page.
 */
export declare function getContentHeight(config: PageConfig): number;
/**
 * Calculate the content width available on a page.
 */
export declare function getContentWidth(config: PageConfig): number;
/**
 * Split layout nodes into pages.
 *
 * Algorithm:
 * 1. Process nodes in order, tracking current Y position
 * 2. When a node would overflow the page, start a new page
 * 3. Adjust Y positions so each page starts at margins.top
 *
 * @param nodes - Computed layout nodes from Yoga
 * @param config - Page configuration
 * @returns Array of pages with adjusted node positions
 */
export declare function paginateLayout(nodes: ResumeLayoutNode[], config?: PageConfig): Page[];
/**
 * Check if a node would cause a page break at the given Y position.
 * Note: nodeY should already include margins.top from Yoga layout.
 */
export declare function wouldCausePageBreak(nodeY: number, nodeHeight: number, currentPageStartY: number, config: PageConfig): boolean;
/**
 * Calculate the Y offset for a new page.
 *
 * @param nodeY - The Y position of the node that triggered the page break
 * @param config - Page configuration
 * @returns The Y offset to subtract from nodes on the new page
 */
export declare function calculateNewPageOffset(nodeY: number, config: PageConfig): number;
/**
 * Advanced pagination that handles atomic groups (wrap=false).
 *
 * When a group with wrap=false doesn't fit on the current page,
 * the entire group moves to the next page.
 *
 * For non-atomic groups, children are paginated individually to prevent
 * content from overflowing the page bottom.
 */
export declare function paginateLayoutWithAtomicGroups(nodes: ResumeLayoutNode[], config?: PageConfig): Page[];
/**
 * Calculate total document height from layout nodes.
 */
export declare function calculateTotalHeight(nodes: ResumeLayoutNode[]): number;
/**
 * Calculate the number of pages needed for a document.
 */
export declare function calculatePageCount(totalHeight: number, config: PageConfig): number;
