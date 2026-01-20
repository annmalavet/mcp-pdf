/**
 * pdf-resume tool - Professional resume PDF from JSON Resume format.
 *
 * Best for: Resumes and CVs using the JSON Resume standard.
 * Uses its own specialized rendering system with section-based layout.
 *
 * Features:
 * - JSON Resume format validation
 * - Single-column or two-column layouts
 * - LiquidJS templates for custom field formatting
 * - Typography customization
 * - Automatic section rendering based on data shape
 */
import { z } from 'zod';
import type { StorageExtra } from '../../types.ts';
declare const inputSchema: z.ZodObject<{
    filename: z.ZodOptional<z.ZodString>;
    resume: z.ZodRecord<z.ZodString, z.ZodAny>;
    font: z.ZodOptional<z.ZodString>;
    markdown: z.ZodOptional<z.ZodBoolean>;
    color: z.ZodOptional<z.ZodObject<{
        background: z.ZodOptional<z.ZodString>;
        hyperlink: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    pageSize: z.ZodOptional<z.ZodEnum<{
        A4: "A4";
        LEGAL: "LEGAL";
        LETTER: "LETTER";
    }>>;
    sections: z.ZodOptional<z.ZodObject<{
        sections: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            source: z.ZodString;
            render: z.ZodOptional<z.ZodEnum<{
                "credential-list": "credential-list";
                "entry-list": "entry-list";
                header: "header";
                "keyword-list": "keyword-list";
                "language-list": "language-list";
                "reference-list": "reference-list";
                "summary-highlights": "summary-highlights";
                text: "text";
            }>>;
            title: z.ZodOptional<z.ZodString>;
            template: z.ZodOptional<z.ZodString>;
            showTenure: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"divider">;
            thickness: z.ZodOptional<z.ZodNumber>;
            color: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>;
        fieldTemplates: z.ZodOptional<z.ZodObject<{
            location: z.ZodOptional<z.ZodString>;
            dateRange: z.ZodOptional<z.ZodString>;
            degree: z.ZodOptional<z.ZodString>;
            credential: z.ZodOptional<z.ZodString>;
            language: z.ZodOptional<z.ZodString>;
            skill: z.ZodOptional<z.ZodString>;
            contactLine: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    layout: z.ZodOptional<z.ZodObject<{
        style: z.ZodDefault<z.ZodEnum<{
            "single-column": "single-column";
            "two-column": "two-column";
        }>>;
        columns: z.ZodOptional<z.ZodObject<{
            left: z.ZodOptional<z.ZodObject<{
                width: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                sections: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            right: z.ZodOptional<z.ZodObject<{
                width: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                sections: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        gap: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    }, z.core.$strip>>;
    styling: z.ZodOptional<z.ZodObject<{
        fontSize: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodNumber>;
            heading: z.ZodOptional<z.ZodNumber>;
            subheading: z.ZodOptional<z.ZodNumber>;
            body: z.ZodOptional<z.ZodNumber>;
            contact: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        spacing: z.ZodOptional<z.ZodObject<{
            afterName: z.ZodOptional<z.ZodNumber>;
            afterHeading: z.ZodOptional<z.ZodNumber>;
            afterSubheading: z.ZodOptional<z.ZodNumber>;
            afterText: z.ZodOptional<z.ZodNumber>;
            betweenSections: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        margins: z.ZodOptional<z.ZodObject<{
            top: z.ZodOptional<z.ZodNumber>;
            bottom: z.ZodOptional<z.ZodNumber>;
            left: z.ZodOptional<z.ZodNumber>;
            right: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        alignment: z.ZodOptional<z.ZodObject<{
            header: z.ZodOptional<z.ZodEnum<{
                center: "center";
                left: "left";
                right: "right";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const outputSchema: z.ZodObject<{
    operationSummary: z.ZodString;
    itemsProcessed: z.ZodNumber;
    itemsChanged: z.ZodNumber;
    completedAt: z.ZodString;
    documentId: z.ZodString;
    filename: z.ZodString;
    uri: z.ZodString;
    sizeBytes: z.ZodNumber;
    margins: z.ZodObject<{
        top: z.ZodNumber;
        bottom: z.ZodNumber;
        left: z.ZodNumber;
        right: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Input = z.input<typeof inputSchema>;
export type Output = z.infer<typeof outputSchema>;
export default function createTool(): {
    name: string;
    config: {
        readonly title: "Generate Resume PDF";
        readonly description: "Generate a professional resume PDF from JSON Resume format. Supports layout customization, date/locale formatting, styling, fonts, and automatic page breaks.";
        readonly inputSchema: z.ZodObject<{
            filename: z.ZodOptional<z.ZodString>;
            resume: z.ZodRecord<z.ZodString, z.ZodAny>;
            font: z.ZodOptional<z.ZodString>;
            markdown: z.ZodOptional<z.ZodBoolean>;
            color: z.ZodOptional<z.ZodObject<{
                background: z.ZodOptional<z.ZodString>;
                hyperlink: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            pageSize: z.ZodOptional<z.ZodEnum<{
                A4: "A4";
                LEGAL: "LEGAL";
                LETTER: "LETTER";
            }>>;
            sections: z.ZodOptional<z.ZodObject<{
                sections: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    source: z.ZodString;
                    render: z.ZodOptional<z.ZodEnum<{
                        "credential-list": "credential-list";
                        "entry-list": "entry-list";
                        header: "header";
                        "keyword-list": "keyword-list";
                        "language-list": "language-list";
                        "reference-list": "reference-list";
                        "summary-highlights": "summary-highlights";
                        text: "text";
                    }>>;
                    title: z.ZodOptional<z.ZodString>;
                    template: z.ZodOptional<z.ZodString>;
                    showTenure: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>, z.ZodObject<{
                    type: z.ZodLiteral<"divider">;
                    thickness: z.ZodOptional<z.ZodNumber>;
                    color: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>]>>>;
                fieldTemplates: z.ZodOptional<z.ZodObject<{
                    location: z.ZodOptional<z.ZodString>;
                    dateRange: z.ZodOptional<z.ZodString>;
                    degree: z.ZodOptional<z.ZodString>;
                    credential: z.ZodOptional<z.ZodString>;
                    language: z.ZodOptional<z.ZodString>;
                    skill: z.ZodOptional<z.ZodString>;
                    contactLine: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            layout: z.ZodOptional<z.ZodObject<{
                style: z.ZodDefault<z.ZodEnum<{
                    "single-column": "single-column";
                    "two-column": "two-column";
                }>>;
                columns: z.ZodOptional<z.ZodObject<{
                    left: z.ZodOptional<z.ZodObject<{
                        width: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                        sections: z.ZodArray<z.ZodString>;
                    }, z.core.$strip>>;
                    right: z.ZodOptional<z.ZodObject<{
                        width: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                        sections: z.ZodArray<z.ZodString>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                gap: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
            }, z.core.$strip>>;
            styling: z.ZodOptional<z.ZodObject<{
                fontSize: z.ZodOptional<z.ZodObject<{
                    name: z.ZodOptional<z.ZodNumber>;
                    heading: z.ZodOptional<z.ZodNumber>;
                    subheading: z.ZodOptional<z.ZodNumber>;
                    body: z.ZodOptional<z.ZodNumber>;
                    contact: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                spacing: z.ZodOptional<z.ZodObject<{
                    afterName: z.ZodOptional<z.ZodNumber>;
                    afterHeading: z.ZodOptional<z.ZodNumber>;
                    afterSubheading: z.ZodOptional<z.ZodNumber>;
                    afterText: z.ZodOptional<z.ZodNumber>;
                    betweenSections: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                margins: z.ZodOptional<z.ZodObject<{
                    top: z.ZodOptional<z.ZodNumber>;
                    bottom: z.ZodOptional<z.ZodNumber>;
                    left: z.ZodOptional<z.ZodNumber>;
                    right: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                alignment: z.ZodOptional<z.ZodObject<{
                    header: z.ZodOptional<z.ZodEnum<{
                        center: "center";
                        left: "left";
                        right: "right";
                    }>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
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
        resume: Record<string, any>;
        font?: string;
        markdown?: boolean;
        color?: {
            background?: string;
            hyperlink?: string;
        };
        pageSize?: "A4" | "LEGAL" | "LETTER";
        sections?: {
            sections?: ({
                source: string;
                render?: "credential-list" | "entry-list" | "header" | "keyword-list" | "language-list" | "reference-list" | "summary-highlights" | "text";
                title?: string;
                template?: string;
                showTenure?: boolean;
            } | {
                type: "divider";
                thickness?: number;
                color?: string;
            })[];
            fieldTemplates?: {
                location?: string;
                dateRange?: string;
                degree?: string;
                credential?: string;
                language?: string;
                skill?: string;
                contactLine?: string;
            };
        };
        layout?: {
            style?: "single-column" | "two-column";
            columns?: {
                left?: {
                    width?: string | number;
                    sections: string[];
                };
                right?: {
                    width?: string | number;
                    sections: string[];
                };
            };
            gap?: number;
        };
        styling?: {
            fontSize?: {
                name?: number;
                heading?: number;
                subheading?: number;
                body?: number;
                contact?: number;
            };
            spacing?: {
                afterName?: number;
                afterHeading?: number;
                afterSubheading?: number;
                afterText?: number;
                betweenSections?: number;
            };
            margins?: {
                top?: number;
                bottom?: number;
                left?: number;
                right?: number;
            };
            alignment?: {
                header?: "center" | "left" | "right";
            };
        };
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
