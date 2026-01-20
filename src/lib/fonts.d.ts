import type { FontConfig } from './types/typography.ts';
export type { FontConfig } from './types/typography.ts';
export declare const PDF_STANDARD_FONTS: readonly ["Courier", "Courier-Bold", "Courier-Oblique", "Courier-BoldOblique", "Helvetica", "Helvetica-Bold", "Helvetica-Oblique", "Helvetica-BoldOblique", "Times-Roman", "Times-Bold", "Times-Italic", "Times-BoldItalic", "Symbol", "ZapfDingbats"];
export type PDFStandardFont = (typeof PDF_STANDARD_FONTS)[number];
/**
 * Type guard to check if a string is a PDF standard font
 */
export declare function isPDFStandardFont(font: string): font is PDFStandardFont;
/**
 * Detect if text contains Unicode characters beyond ASCII + Latin-1
 * Returns true if font needs Unicode support (emoji, CJK, Cyrillic, Arabic, etc.)
 */
export declare function needsUnicodeFont(text: string): boolean;
/**
 * Detect if text contains emoji characters that need special rendering
 *
 * Uses the industry-standard emoji-regex package to detect all valid emoji
 * as per the Unicode Standard, including:
 * - ZWJ sequences (👨‍💼, 🧘‍♂️)
 * - Variation selectors (️)
 * - Skin tone modifiers (🏻-🏿)
 * - Flag sequences (🇺🇸)
 * - Keycap sequences (0️⃣-9️⃣, #️⃣, *️⃣)
 * - All other emoji per Unicode Standard
 *
 * @param text - Text to check for emoji
 * @returns True if text contains emoji
 */
export declare function hasEmoji(text: string): boolean;
/**
 * Auto-detect a system font with Unicode support
 * Returns path to first found Unicode-capable font, or null if none found
 * Prioritizes fonts with known CJK (Chinese/Japanese/Korean) support
 */
export declare function getSystemFont(): string | null;
/**
 * Resolve font specification to actual font path or name
 * Supports: PDF standard fonts, absolute paths, URLs, 'auto' detection
 * Returns null if font cannot be resolved (caller should use fallback)
 * Throws error if URL download fails
 */
export declare function resolveFont(fontSpec: string): Promise<string | null>;
/**
 * Setup fonts for PDF document
 * Resolves font specification and registers with PDFKit
 * Returns FontConfig with regular/bold/oblique variants
 * Falls back to Helvetica if font resolution or registration fails
 */
export declare function setupFonts(_doc: PDFKit.PDFDocument, fontSpec: string | undefined): Promise<FontConfig>;
export interface CharacterValidationResult {
    hasUnsupportedCharacters: boolean;
    warnings: string[];
    unsupportedChars: Map<string, number>;
}
/**
 * Validate text against a specific font's glyph coverage
 *
 * For standard PDF fonts: checks WinAnsi range (0x20-0xFF)
 * For custom fonts: uses fontkit to check actual glyph support
 *
 * @param text - Text to validate
 * @param fontName - Font name (e.g., 'Helvetica', 'CustomFont')
 * @param fontPath - Path to font file (required for custom fonts)
 * @returns Validation result with warnings
 */
export declare function validateTextForFont(text: string, fontName: string, fontPath: string | undefined): CharacterValidationResult;
