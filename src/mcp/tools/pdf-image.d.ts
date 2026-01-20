/**
 * pdf-image tool - Generate PNG image(s) from PDF pages.
 *
 * Best for: Viewing PDF output without opening external apps.
 * Returns PNG images of specified pages at controllable resolution.
 *
 * For minimal context usage, use viewportScale 0.25 (thumbnail) or 0.5 (preview).
 * Full scale (1.0) provides detailed view but larger file size.
 */
import { z } from 'zod';
import type { StorageExtra } from '../../types.ts';
declare const inputSchema: z.ZodObject<{
    pdfPath: z.ZodString;
    pages: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodArray<z.ZodNumber>, z.ZodLiteral<"all">]>>;
    viewportScale: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
declare const outputSchema: z.ZodObject<{
    images: z.ZodArray<z.ZodObject<{
        imagePath: z.ZodString;
        uri: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        pageNumber: z.ZodNumber;
        fileSizeBytes: z.ZodNumber;
    }, z.core.$strip>>;
    totalPages: z.ZodNumber;
}, z.core.$strip>;
export type Input = z.infer<typeof inputSchema>;
export type Output = z.infer<typeof outputSchema>;
export default function createTool(): {
    name: string;
    config: {
        readonly title: "Convert PDF to Image";
        readonly description: "Generate PNG image(s) from PDF pages.\n\nUse this to visually verify PDF output without opening external applications.\n\n**Pages Options:**\n- Single page: `pages: 1` or `pages: 3`\n- Multiple pages: `pages: [1, 3, 5]`\n- All pages: `pages: \"all\"`\n- Default: page 1 only\n\n**Viewport Scale Recommendations:**\n- **0.25 (thumbnail)**: ~150px wide, smallest file (~15-30KB). Use for quick verification.\n- **0.5 (preview)**: ~300px wide, good balance (~40-80KB). **Recommended default.**\n- **1.0 (full)**: ~612px wide, detailed view (~150-300KB). Use when details matter.\n\nLower scales produce smaller files, reducing context usage when sharing images.";
        readonly inputSchema: z.ZodObject<{
            pdfPath: z.ZodString;
            pages: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodArray<z.ZodNumber>, z.ZodLiteral<"all">]>>;
            viewportScale: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        readonly outputSchema: z.ZodObject<{
            images: z.ZodArray<z.ZodObject<{
                imagePath: z.ZodString;
                uri: z.ZodString;
                width: z.ZodNumber;
                height: z.ZodNumber;
                pageNumber: z.ZodNumber;
                fileSizeBytes: z.ZodNumber;
            }, z.core.$strip>>;
            totalPages: z.ZodNumber;
        }, z.core.$strip>;
    };
    handler: (args: {
        pdfPath: string;
        pages?: number | "all" | number[];
        viewportScale?: number;
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
