/**
 * pdf-document tool - Flowing documents with PDFKit native text flow.
 *
 * Best for: Reports, articles, letters, contracts, and any document with flowing text.
 * Uses PDFKit's native text flow with automatic pagination.
 *
 * Content flows sequentially from top to bottom, automatically breaking across pages.
 * No positioning required - just write content and it flows naturally.
 *
 * Default margins: 72pt (1 inch) for standard document formatting.
 */
import { z } from 'zod';
import type { StorageExtra } from '../../types.ts';
declare const inputSchema: z.ZodObject<{
    filename: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodString>;
    font: z.ZodOptional<z.ZodString>;
    markdown: z.ZodOptional<z.ZodBoolean>;
    color: z.ZodOptional<z.ZodObject<{
        background: z.ZodOptional<z.ZodString>;
        hyperlink: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    pageSetup: z.ZodOptional<z.ZodObject<{
        size: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            A4: "A4";
            LEGAL: "LEGAL";
            LETTER: "LETTER";
        }>, z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>]>>;
        margins: z.ZodOptional<z.ZodObject<{
            top: z.ZodNumber;
            bottom: z.ZodNumber;
            left: z.ZodNumber;
            right: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    content: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        text: z.ZodOptional<z.ZodString>;
        fontSize: z.ZodOptional<z.ZodNumber>;
        bold: z.ZodOptional<z.ZodBoolean>;
        color: z.ZodOptional<z.ZodString>;
        textAlign: z.ZodOptional<z.ZodEnum<{
            center: "center";
            justify: "justify";
            left: "left";
            right: "right";
        }>>;
        indent: z.ZodOptional<z.ZodNumber>;
        lineGap: z.ZodOptional<z.ZodNumber>;
        paragraphGap: z.ZodOptional<z.ZodNumber>;
        width: z.ZodOptional<z.ZodNumber>;
        moveDown: z.ZodOptional<z.ZodNumber>;
        underline: z.ZodOptional<z.ZodBoolean>;
        strike: z.ZodOptional<z.ZodBoolean>;
        oblique: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodNumber]>>;
        link: z.ZodOptional<z.ZodString>;
        characterSpacing: z.ZodOptional<z.ZodNumber>;
        wordSpacing: z.ZodOptional<z.ZodNumber>;
        continued: z.ZodOptional<z.ZodBoolean>;
        lineBreak: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"text">;
    }, z.core.$strip>, z.ZodObject<{
        text: z.ZodOptional<z.ZodString>;
        fontSize: z.ZodOptional<z.ZodNumber>;
        bold: z.ZodOptional<z.ZodBoolean>;
        color: z.ZodOptional<z.ZodString>;
        textAlign: z.ZodOptional<z.ZodEnum<{
            center: "center";
            justify: "justify";
            left: "left";
            right: "right";
        }>>;
        indent: z.ZodOptional<z.ZodNumber>;
        lineGap: z.ZodOptional<z.ZodNumber>;
        paragraphGap: z.ZodOptional<z.ZodNumber>;
        width: z.ZodOptional<z.ZodNumber>;
        moveDown: z.ZodOptional<z.ZodNumber>;
        underline: z.ZodOptional<z.ZodBoolean>;
        strike: z.ZodOptional<z.ZodBoolean>;
        oblique: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodNumber]>>;
        link: z.ZodOptional<z.ZodString>;
        characterSpacing: z.ZodOptional<z.ZodNumber>;
        wordSpacing: z.ZodOptional<z.ZodNumber>;
        continued: z.ZodOptional<z.ZodBoolean>;
        lineBreak: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"heading">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"image">;
        imagePath: z.ZodString;
        width: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        align: z.ZodOptional<z.ZodEnum<{
            center: "center";
            left: "left";
            right: "right";
        }>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"divider">;
        color: z.ZodOptional<z.ZodString>;
        thickness: z.ZodOptional<z.ZodNumber>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"spacer">;
        height: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"pageBreak">;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type Input = z.infer<typeof inputSchema>;
export default function createTool(): {
    name: string;
    config: {
        readonly title: "Create PDF Document";
        readonly description: "Create a flowing PDF document with automatic pagination.\n\nBest for: Reports, articles, letters, contracts, and documents with sequential content.\n\nContent flows naturally from top to bottom. Pages break automatically when content exceeds page height. Use \"pageBreak\" to force page breaks, \"divider\" for horizontal rules, and \"spacer\" for vertical spacing.\n\nSupported content types:\n- text: Body text with optional formatting (bold, italic, color, alignment)\n- heading: Section headings (larger font, bold by default)\n- image: Inline images that flow with content\n- divider: Horizontal line separators\n- spacer: Vertical whitespace\n- pageBreak: Force new page\n\nDefault margins: Varies by page size (e.g., 72pt/1\" for Letter, ~56pt for A4).";
        readonly inputSchema: z.ZodObject<{
            filename: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            author: z.ZodOptional<z.ZodString>;
            font: z.ZodOptional<z.ZodString>;
            markdown: z.ZodOptional<z.ZodBoolean>;
            color: z.ZodOptional<z.ZodObject<{
                background: z.ZodOptional<z.ZodString>;
                hyperlink: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            pageSetup: z.ZodOptional<z.ZodObject<{
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    A4: "A4";
                    LEGAL: "LEGAL";
                    LETTER: "LETTER";
                }>, z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>]>>;
                margins: z.ZodOptional<z.ZodObject<{
                    top: z.ZodNumber;
                    bottom: z.ZodNumber;
                    left: z.ZodNumber;
                    right: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            content: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                text: z.ZodOptional<z.ZodString>;
                fontSize: z.ZodOptional<z.ZodNumber>;
                bold: z.ZodOptional<z.ZodBoolean>;
                color: z.ZodOptional<z.ZodString>;
                textAlign: z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    justify: "justify";
                    left: "left";
                    right: "right";
                }>>;
                indent: z.ZodOptional<z.ZodNumber>;
                lineGap: z.ZodOptional<z.ZodNumber>;
                paragraphGap: z.ZodOptional<z.ZodNumber>;
                width: z.ZodOptional<z.ZodNumber>;
                moveDown: z.ZodOptional<z.ZodNumber>;
                underline: z.ZodOptional<z.ZodBoolean>;
                strike: z.ZodOptional<z.ZodBoolean>;
                oblique: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodNumber]>>;
                link: z.ZodOptional<z.ZodString>;
                characterSpacing: z.ZodOptional<z.ZodNumber>;
                wordSpacing: z.ZodOptional<z.ZodNumber>;
                continued: z.ZodOptional<z.ZodBoolean>;
                lineBreak: z.ZodOptional<z.ZodBoolean>;
                type: z.ZodLiteral<"text">;
            }, z.core.$strip>, z.ZodObject<{
                text: z.ZodOptional<z.ZodString>;
                fontSize: z.ZodOptional<z.ZodNumber>;
                bold: z.ZodOptional<z.ZodBoolean>;
                color: z.ZodOptional<z.ZodString>;
                textAlign: z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    justify: "justify";
                    left: "left";
                    right: "right";
                }>>;
                indent: z.ZodOptional<z.ZodNumber>;
                lineGap: z.ZodOptional<z.ZodNumber>;
                paragraphGap: z.ZodOptional<z.ZodNumber>;
                width: z.ZodOptional<z.ZodNumber>;
                moveDown: z.ZodOptional<z.ZodNumber>;
                underline: z.ZodOptional<z.ZodBoolean>;
                strike: z.ZodOptional<z.ZodBoolean>;
                oblique: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodNumber]>>;
                link: z.ZodOptional<z.ZodString>;
                characterSpacing: z.ZodOptional<z.ZodNumber>;
                wordSpacing: z.ZodOptional<z.ZodNumber>;
                continued: z.ZodOptional<z.ZodBoolean>;
                lineBreak: z.ZodOptional<z.ZodBoolean>;
                type: z.ZodLiteral<"heading">;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"image">;
                imagePath: z.ZodString;
                width: z.ZodOptional<z.ZodNumber>;
                height: z.ZodOptional<z.ZodNumber>;
                align: z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    left: "left";
                    right: "right";
                }>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"divider">;
                color: z.ZodOptional<z.ZodString>;
                thickness: z.ZodOptional<z.ZodNumber>;
                marginTop: z.ZodOptional<z.ZodNumber>;
                marginBottom: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"spacer">;
                height: z.ZodNumber;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"pageBreak">;
            }, z.core.$strip>]>>;
        }, z.core.$strip>;
        readonly outputSchema: z.ZodObject<{
            result: z.ZodObject<{
                operationSummary: z.ZodString;
                itemsProcessed: z.ZodNumber;
                itemsChanged: z.ZodNumber;
                completedAt: z.ZodString;
                documentId: z.ZodString;
                filename: z.ZodString;
                uri: z.ZodString;
                sizeBytes: z.ZodNumber;
                pageCount: z.ZodOptional<z.ZodNumber>;
                warnings: z.ZodOptional<z.ZodArray<z.ZodString>>;
                margins: z.ZodObject<{
                    top: z.ZodNumber;
                    bottom: z.ZodNumber;
                    left: z.ZodNumber;
                    right: z.ZodNumber;
                }, z.core.$strip>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    };
    handler: (args: {
        filename?: string;
        title?: string;
        author?: string;
        font?: string;
        markdown?: boolean;
        color?: {
            background?: string;
            hyperlink?: string;
        };
        pageSetup?: {
            size?: "A4" | "LEGAL" | "LETTER" | [number?, number?, ...unknown[]];
            margins?: {
                top: number;
                bottom: number;
                left: number;
                right: number;
            };
        };
        content: ({
            type: "image";
            imagePath: string;
            width?: number;
            height?: number;
            align?: "center" | "left" | "right";
        } | {
            type: "divider";
            color?: string;
            thickness?: number;
            marginTop?: number;
            marginBottom?: number;
        } | {
            type: "spacer";
            height: number;
        } | {
            type: "pageBreak";
        } | {
            text?: string;
            fontSize?: number;
            bold?: boolean;
            color?: string;
            textAlign?: "center" | "justify" | "left" | "right";
            indent?: number;
            lineGap?: number;
            paragraphGap?: number;
            width?: number;
            moveDown?: number;
            underline?: boolean;
            strike?: boolean;
            oblique?: number | boolean;
            link?: string;
            characterSpacing?: number;
            wordSpacing?: number;
            continued?: boolean;
            lineBreak?: boolean;
            type: "text";
        } | {
            text?: string;
            fontSize?: number;
            bold?: boolean;
            color?: string;
            textAlign?: "center" | "justify" | "left" | "right";
            indent?: number;
            lineGap?: number;
            paragraphGap?: number;
            width?: number;
            moveDown?: number;
            underline?: boolean;
            strike?: boolean;
            oblique?: number | boolean;
            link?: string;
            characterSpacing?: number;
            wordSpacing?: number;
            continued?: boolean;
            lineBreak?: boolean;
            type: "heading";
        })[];
    }, extra: StorageExtra) => Promise<{
        [x: string]: unknown;
        _meta?: {
            [x: string]: unknown;
            progressToken?: string | number;
            "io.modelcontextprotocol/related-task"?: {
                taskId: string;
            };
        };
        content: ({
            type: "text";
            text: string;
            annotations?: {
                audience?: ("assistant" | "user")[];
                priority?: number;
                lastModified?: string;
            };
            _meta?: {
                [x: string]: unknown;
            };
        } | {
            type: "image";
            data: string;
            mimeType: string;
            annotations?: {
                audience?: ("assistant" | "user")[];
                priority?: number;
                lastModified?: string;
            };
            _meta?: {
                [x: string]: unknown;
            };
        } | {
            type: "audio";
            data: string;
            mimeType: string;
            annotations?: {
                audience?: ("assistant" | "user")[];
                priority?: number;
                lastModified?: string;
            };
            _meta?: {
                [x: string]: unknown;
            };
        } | {
            uri: string;
            description?: string;
            mimeType?: string;
            annotations?: {
                audience?: ("assistant" | "user")[];
                priority?: number;
                lastModified?: string;
            };
            _meta?: {
                [x: string]: unknown;
            };
            icons?: {
                src: string;
                mimeType?: string;
                sizes?: string[];
                theme?: "dark" | "light";
            }[];
            name: string;
            title?: string;
            type: "resource_link";
        } | {
            type: "resource";
            resource?: {
                uri: string;
                mimeType?: string;
                _meta?: {
                    [x: string]: unknown;
                };
                text: string;
            } | {
                uri: string;
                mimeType?: string;
                _meta?: {
                    [x: string]: unknown;
                };
                blob: string;
            };
            annotations?: {
                audience?: ("assistant" | "user")[];
                priority?: number;
                lastModified?: string;
            };
            _meta?: {
                [x: string]: unknown;
            };
        })[];
        structuredContent?: {
            [x: string]: unknown;
        };
        isError?: boolean;
    }>;
};
export {};
