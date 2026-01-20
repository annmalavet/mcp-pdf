/**
 * Register the emoji font with @napi-rs/canvas
 * This should be called once at application startup
 * Returns false if font file not found or registration fails
 */
export declare function registerEmojiFont(): boolean;
/**
 * Emoji metrics returned from measurement
 */
export interface EmojiMetrics {
    width: number;
    height: number;
    /** Offset from text baseline to center emoji vertically with text */
    baselineOffset: number;
}
/**
 * Measure emoji dimensions using canvas text metrics.
 * Returns actual measured dimensions instead of guessing.
 *
 * @param emoji - The emoji character to measure
 * @param fontSize - The font size in points
 * @returns Metrics object with width, height, and baseline offset
 */
export declare function measureEmoji(emoji: string, fontSize: number): EmojiMetrics;
/**
 * Render a single emoji character to a PNG buffer
 *
 * @param emoji - The emoji character to render
 * @param size - The font size (canvas will be sized to fit)
 * @returns PNG buffer, or null if font not available or rendering fails
 */
export declare function renderEmojiToBuffer(emoji: string, size: number): Buffer | null;
/**
 * Split text into segments of regular text and emoji characters
 *
 * Uses the industry-standard emoji-regex package to detect all valid emoji
 * as per the Unicode Standard. Handles:
 * - ZWJ sequences (👨‍💼, 🧘‍♂️)
 * - Variation selectors (️)
 * - Skin tone modifiers (🏻-🏿)
 * - Flag sequences (🇺🇸)
 * - Keycap sequences (0️⃣-9️⃣, #️⃣, *️⃣)
 * - All other emoji per Unicode Standard
 *
 * @param text - Input text containing mixed content
 * @returns Array of segments with type indicator
 */
export declare function splitTextAndEmoji(text: string): Array<{
    type: 'text' | 'emoji';
    content: string;
}>;
