/**
 * text-measure tool - Measure text dimensions before rendering.
 *
 * Best for: Planning layouts by measuring text width/height before rendering.
 * Returns exact dimensions based on font, size, and text content.
 */
import { z } from 'zod';
declare const inputSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        text: z.ZodString;
        fontSize: z.ZodOptional<z.ZodNumber>;
        bold: z.ZodOptional<z.ZodBoolean>;
        width: z.ZodOptional<z.ZodNumber>;
        lineGap: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    font: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const outputSchema: z.ZodObject<{
    measurements: z.ZodArray<z.ZodObject<{
        text: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        fontSize: z.ZodNumber;
        font: z.ZodString;
    }, z.core.$strip>>;
    font: z.ZodString;
}, z.core.$strip>;
export type Input = z.infer<typeof inputSchema>;
export type Output = z.infer<typeof outputSchema>;
export default function createTool(): {
    name: string;
    config: {
        readonly title: "Measure Text Dimensions";
        readonly description: "Measure text width and height before rendering.\n\nReturns exact dimensions based on font, font size, and text content. Use this to:\n- Calculate text width to set proper container sizes\n- Determine if text will fit in a given space\n- Plan multi-line layouts by specifying width constraint\n\nWidth is measured as single-line natural width. Height accounts for text wrapping when width is specified.";
        readonly inputSchema: z.ZodObject<{
            items: z.ZodArray<z.ZodObject<{
                text: z.ZodString;
                fontSize: z.ZodOptional<z.ZodNumber>;
                bold: z.ZodOptional<z.ZodBoolean>;
                width: z.ZodOptional<z.ZodNumber>;
                lineGap: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            font: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        readonly outputSchema: z.ZodObject<{
            measurements: z.ZodArray<z.ZodObject<{
                text: z.ZodString;
                width: z.ZodNumber;
                height: z.ZodNumber;
                fontSize: z.ZodNumber;
                font: z.ZodString;
            }, z.core.$strip>>;
            font: z.ZodString;
        }, z.core.$strip>;
    };
    handler: (args: {
        items: {
            text: string;
            fontSize?: number;
            bold?: boolean;
            width?: number;
            lineGap?: number;
        }[];
        font?: string;
    }) => Promise<{
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
