/**
 * Yoga Layout Integration
 *
 * Provides flexbox layout calculations using Facebook's Yoga layout engine.
 * This module translates our content schema into Yoga nodes, calculates layout,
 * and returns computed positions for rendering.
 *
 * Note: Uses lazy dynamic import to support CJS builds (yoga-layout is ESM-only).
 */
/**
 * Layout properties for groups (flexbox container)
 */
export interface FlexboxProperties {
    /** Flex direction: column (default) or row */
    direction?: 'column' | 'row';
    /** Gap between children in points */
    gap?: number;
    /** Flex grow factor for this item */
    flex?: number;
    /** Main axis alignment */
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    /** Cross axis alignment for children */
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    /** Self alignment (overrides parent's alignItems) */
    align?: 'start' | 'center' | 'end';
    /** Width - number (points) or string (percentage like "50%") */
    width?: number | string;
    /** Height - number (points) or string (percentage like "50%") */
    height?: number | string;
    /** Padding */
    padding?: number | {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
}
/**
 * Layout node representing a content item with computed position
 */
export interface LayoutNode {
    /** Computed left position */
    x: number;
    /** Computed top position */
    y: number;
    /** Computed width */
    width: number;
    /** Computed height */
    height: number;
    /** Original content item reference */
    content: unknown;
    /** Child layout nodes */
    children?: LayoutNode[];
}
/**
 * Content item with flexbox properties for layout calculation
 */
export interface LayoutContent {
    type: string;
    /** Position mode: 'relative' (default) stays in flow, 'absolute' removes from flow */
    position?: 'relative' | 'absolute';
    /** Horizontal position (CSS-style) - absolute coord if position='absolute', offset from flow position otherwise */
    left?: number;
    /** Vertical position (CSS-style) - absolute coord if position='absolute', offset from flow position otherwise */
    top?: number;
    /** Flexbox properties */
    direction?: 'column' | 'row';
    gap?: number;
    flex?: number;
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    align?: 'start' | 'center' | 'end';
    width?: number | string;
    height?: number | string;
    padding?: number | {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    /** Children for group type */
    children?: LayoutContent[];
    /** Allow any other properties (visual props, text content, etc.) */
    [key: string]: unknown;
}
/**
 * Height measurer function type
 * Called by layout engine to measure text/image heights
 */
export type HeightMeasurer = (content: LayoutContent, availableWidth: number) => number;
/**
 * Width measurer function type
 * Called by layout engine to measure natural text width (for row layouts)
 */
export type WidthMeasurer = (content: LayoutContent) => number;
/**
 * Calculate layout for content items
 *
 * @param content - Content items to lay out
 * @param pageWidth - Page width in points
 * @param pageHeight - Page height in points (optional, for percentage heights)
 * @param measureHeight - Function to measure content height
 * @param margins - Page margins
 * @param measureWidth - Optional function to measure content width (for row layouts with space-between)
 * @returns Layout tree with computed positions
 */
export declare function calculateLayout(content: LayoutContent[], pageWidth: number, pageHeight: number | undefined, measureHeight: HeightMeasurer, margins: {
    top: number;
    right: number;
    bottom: number;
    left: number;
}, measureWidth?: WidthMeasurer): Promise<LayoutNode[]>;
/**
 * Calculate layout for a single group, useful for self-centering
 *
 * @param group - Group content to lay out
 * @param containerWidth - Container width for centering calculation
 * @param measureHeight - Function to measure content height
 * @param measureWidth - Optional function to measure content width (for row layouts)
 * @returns Layout node with computed position
 */
export declare function calculateGroupLayout(group: LayoutContent, containerWidth: number, measureHeight: HeightMeasurer, measureWidth?: WidthMeasurer): Promise<LayoutNode>;
