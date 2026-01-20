/**
 * pdf-layout tool - Fixed/absolute positioning layouts using Yoga flexbox.
 *
 * Best for: Dashboards, slides, certificates, flyers, and any design with precise positioning.
 * Uses Yoga layout engine for flexbox-based positioning within containers.
 *
 * All items are absolutely positioned on specific pages. Use the "page" property to target
 * different pages (e.g., page: 2 for slide decks). Pages are created as needed.
 *
 * Default margins: 0 (full canvas access for precise positioning)
 */
import { z } from 'zod';
import { type Margins } from '../../constants.ts';
import { type PDFOutput } from '../../lib/pdf-core.ts';
import { type GroupItem } from '../../schemas/layout.ts';
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
    layout: z.ZodOptional<z.ZodObject<{
        overflow: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
            auto: "auto";
            warn: "warn";
        }>>>;
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
    content: z.ZodArray<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodObject<{
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
        page: z.ZodOptional<z.ZodNumber>;
        position: z.ZodOptional<z.ZodEnum<{
            absolute: "absolute";
            relative: "relative";
        }>>;
        left: z.ZodOptional<z.ZodNumber>;
        top: z.ZodOptional<z.ZodNumber>;
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
        page: z.ZodOptional<z.ZodNumber>;
        position: z.ZodOptional<z.ZodEnum<{
            absolute: "absolute";
            relative: "relative";
        }>>;
        left: z.ZodOptional<z.ZodNumber>;
        top: z.ZodOptional<z.ZodNumber>;
        type: z.ZodLiteral<"heading">;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"image">;
        imagePath: z.ZodString;
        page: z.ZodOptional<z.ZodNumber>;
        left: z.ZodOptional<z.ZodNumber>;
        top: z.ZodOptional<z.ZodNumber>;
        width: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"rect">;
        page: z.ZodOptional<z.ZodNumber>;
        left: z.ZodNumber;
        top: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        fillColor: z.ZodOptional<z.ZodString>;
        strokeColor: z.ZodOptional<z.ZodString>;
        lineWidth: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"circle">;
        page: z.ZodOptional<z.ZodNumber>;
        left: z.ZodNumber;
        top: z.ZodNumber;
        radius: z.ZodNumber;
        fillColor: z.ZodOptional<z.ZodString>;
        strokeColor: z.ZodOptional<z.ZodString>;
        lineWidth: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"line">;
        page: z.ZodOptional<z.ZodNumber>;
        x1: z.ZodNumber;
        y1: z.ZodNumber;
        x2: z.ZodNumber;
        y2: z.ZodNumber;
        strokeColor: z.ZodOptional<z.ZodString>;
        lineWidth: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>]>, z.ZodType<GroupItem, unknown, z.core.$ZodTypeInternals<GroupItem, unknown>>]>>;
}, z.core.$strip>;
export type Input = z.infer<typeof inputSchema>;
export type Output = PDFOutput & {
    margins: Margins;
};
export default function createTool(): {
    name: string;
    config: {
        readonly title: "Create PDF Layout";
        readonly description: "Create a PDF with precise positioning using Yoga flexbox layout.\n\nBest for: Dashboards, slides, certificates, flyers, and designs requiring exact placement.\n\nAll items are positioned absolutely on specific pages. Use the \"page\" property to target different pages (e.g., page: 2 for multi-slide presentations). Pages are created as needed.\n\nUse groups for flexbox containers - they support direction, gap, justify, alignItems, and alignment properties for sophisticated layouts.\n\nDefault margins: 0 (full canvas access for precise positioning).";
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
            layout: z.ZodOptional<z.ZodObject<{
                overflow: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
                    auto: "auto";
                    warn: "warn";
                }>>>;
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
            content: z.ZodArray<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodObject<{
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
                page: z.ZodOptional<z.ZodNumber>;
                position: z.ZodOptional<z.ZodEnum<{
                    absolute: "absolute";
                    relative: "relative";
                }>>;
                left: z.ZodOptional<z.ZodNumber>;
                top: z.ZodOptional<z.ZodNumber>;
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
                page: z.ZodOptional<z.ZodNumber>;
                position: z.ZodOptional<z.ZodEnum<{
                    absolute: "absolute";
                    relative: "relative";
                }>>;
                left: z.ZodOptional<z.ZodNumber>;
                top: z.ZodOptional<z.ZodNumber>;
                type: z.ZodLiteral<"heading">;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"image">;
                imagePath: z.ZodString;
                page: z.ZodOptional<z.ZodNumber>;
                left: z.ZodOptional<z.ZodNumber>;
                top: z.ZodOptional<z.ZodNumber>;
                width: z.ZodOptional<z.ZodNumber>;
                height: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"rect">;
                page: z.ZodOptional<z.ZodNumber>;
                left: z.ZodNumber;
                top: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                fillColor: z.ZodOptional<z.ZodString>;
                strokeColor: z.ZodOptional<z.ZodString>;
                lineWidth: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"circle">;
                page: z.ZodOptional<z.ZodNumber>;
                left: z.ZodNumber;
                top: z.ZodNumber;
                radius: z.ZodNumber;
                fillColor: z.ZodOptional<z.ZodString>;
                strokeColor: z.ZodOptional<z.ZodString>;
                lineWidth: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                page: z.ZodOptional<z.ZodNumber>;
                x1: z.ZodNumber;
                y1: z.ZodNumber;
                x2: z.ZodNumber;
                y2: z.ZodNumber;
                strokeColor: z.ZodOptional<z.ZodString>;
                lineWidth: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>]>, z.ZodType<GroupItem, unknown, z.core.$ZodTypeInternals<GroupItem, unknown>>]>>;
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
        layout?: {
            overflow: "auto" | "warn";
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
        content: (GroupItem | {
            type: "image";
            imagePath: string;
            page?: number;
            left?: number;
            top?: number;
            width?: number;
            height?: number;
        } | {
            type: "rect";
            page?: number;
            left: number;
            top: number;
            width: number;
            height: number;
            fillColor?: string;
            strokeColor?: string;
            lineWidth?: number;
        } | {
            type: "circle";
            page?: number;
            left: number;
            top: number;
            radius: number;
            fillColor?: string;
            strokeColor?: string;
            lineWidth?: number;
        } | {
            type: "line";
            page?: number;
            x1: number;
            y1: number;
            x2: number;
            y2: number;
            strokeColor?: string;
            lineWidth?: number;
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
            page?: number;
            position?: "absolute" | "relative";
            left?: number;
            top?: number;
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
            page?: number;
            position?: "absolute" | "relative";
            left?: number;
            top?: number;
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
