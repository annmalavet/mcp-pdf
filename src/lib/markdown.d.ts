/**
 * Markdown parsing utilities using micromark via mdast
 * Provides robust markdown tokenization for PDF rendering
 */
/**
 * Token types for styled text segments
 */
export type Token = {
    type: 'text';
    text: string;
} | {
    type: 'bold';
    text: string;
} | {
    type: 'italic';
    text: string;
} | {
    type: 'boldItalic';
    text: string;
} | {
    type: 'link';
    text: string;
    url: string;
};
/**
 * Tokenize markdown text into styled tokens using micromark
 *
 * Supports:
 * - **bold** or __bold__
 * - *italic* or _italic_
 * - ***bold+italic*** or ___bold+italic___
 * - [link text](url)
 *
 * @param markdown - Text with markdown syntax
 * @returns Array of tokens
 */
export declare function tokenizeMarkdown(markdown: string): Token[];
/**
 * Styled segment for PDF rendering
 */
export interface StyledSegment {
    type: 'text' | 'link';
    content: string;
    bold: boolean;
    italic: boolean;
    url?: string;
}
/**
 * Convert markdown tokens to styled segments for PDF rendering
 *
 * @param tokens - Markdown tokens from tokenizeMarkdown
 * @returns Array of segments with styling information
 */
export declare function tokensToStyledSegments(tokens: Token[]): StyledSegment[];
