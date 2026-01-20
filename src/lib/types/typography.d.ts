/**
 * Typography and styling types for resume PDF generation.
 */
export interface FontStyle {
    fontSize: number;
}
export interface SpacingStyle {
    marginTop?: number;
    marginBottom?: number;
}
export interface LetterSpacingStyle {
    letterSpacing?: number;
}
export interface ColorStyle {
    color?: string;
}
export interface LineHeightStyle {
    lineHeight?: number;
}
export interface WidthStyle {
    width: number;
}
export interface IndentStyle {
    indent: number;
}
export interface ThicknessStyle {
    thickness?: number;
}
export type HeaderNameStyle = FontStyle & SpacingStyle & LetterSpacingStyle;
export type HeaderContactStyle = FontStyle & LetterSpacingStyle;
export interface HeaderStyle extends SpacingStyle {
    name: HeaderNameStyle;
    contact: HeaderContactStyle;
}
export type SectionTitleStyle = FontStyle & SpacingStyle & LetterSpacingStyle & {
    underlineGap?: number;
    underlineThickness?: number;
};
export type EntryPositionStyle = FontStyle & SpacingStyle;
export type EntryCompanyStyle = FontStyle & ColorStyle;
export type EntryLocationStyle = FontStyle & ColorStyle;
export type EntryDateStyle = WidthStyle;
export interface EntryStyle {
    position: EntryPositionStyle;
    company: EntryCompanyStyle;
    location: EntryLocationStyle;
    date: EntryDateStyle;
}
export type BulletStyle = IndentStyle;
export type QuoteStyle = IndentStyle;
export type DividerStyle = SpacingStyle & ThicknessStyle & ColorStyle;
export interface ContentStyle {
    fontSize: number;
    lineHeight: number;
    marginTop: number;
    marginBottom: number;
    paragraphMarginBottom: number;
    bulletGap: number;
    bulletMarginBottom: number;
    bulletIndent: number;
    itemMarginBottom: number;
    entrySpacing: number;
}
export interface EntryHeaderStyle {
    lineSpacing: number;
    marginBottom: number;
}
export interface FontConfig {
    regular: string;
    bold: string;
    italic: string;
    boldItalic?: string;
}
export interface TypographyOptions {
    fonts: FontConfig;
    header: HeaderStyle;
    sectionTitle: SectionTitleStyle;
    content: ContentStyle;
    entryHeader: EntryHeaderStyle;
    entry: EntryStyle;
    quote: QuoteStyle;
    divider: DividerStyle;
}
export interface ResolvedTextStyle {
    fontSize: number;
    lineGap: number;
    paragraphMarginBottom: number;
    itemMarginBottom: number;
    blockMarginBottom: number;
}
export declare const DEFAULT_TYPOGRAPHY: TypographyOptions;
