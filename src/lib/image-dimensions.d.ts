/**
 * Image dimension utilities for PDF generation.
 *
 * Follows the React Native pattern:
 * - Local files: Read intrinsic dimensions from file headers
 * - Network images: Require explicit dimensions (throw error otherwise)
 */
export interface ImageDimensions {
    width: number;
    height: number;
}
/**
 * Resolve image dimensions with explicit overrides.
 *
 * Priority:
 * 1. Explicit width/height from user
 * 2. Intrinsic dimensions from file (local files only)
 * 3. Throw error if dimensions cannot be determined
 *
 * If only width or height is provided, the other is calculated from aspect ratio
 * (if intrinsic dimensions are available).
 *
 * @param imagePath - Path or URL to image
 * @param explicitWidth - User-provided width (optional)
 * @param explicitHeight - User-provided height (optional)
 * @returns Resolved dimensions
 * @throws Error if dimensions cannot be determined
 */
export declare function resolveImageDimensions(imagePath: string, explicitWidth?: number, explicitHeight?: number): ImageDimensions;
