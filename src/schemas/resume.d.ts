/**
 * Reusable resume schemas for PDF tools.
 * These schemas define the structure for resume-specific configuration.
 */
import { z } from 'zod';
export declare const sectionConfigSchema: z.ZodObject<{
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
}, z.core.$strip>;
export declare const dividerConfigSchema: z.ZodObject<{
    type: z.ZodLiteral<"divider">;
    thickness: z.ZodOptional<z.ZodNumber>;
    color: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const fieldTemplatesSchema: z.ZodOptional<z.ZodObject<{
    location: z.ZodOptional<z.ZodString>;
    dateRange: z.ZodOptional<z.ZodString>;
    degree: z.ZodOptional<z.ZodString>;
    credential: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    skill: z.ZodOptional<z.ZodString>;
    contactLine: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export declare const sectionsConfigSchema: z.ZodOptional<z.ZodObject<{
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
export declare const columnConfigSchema: z.ZodObject<{
    width: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    sections: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const resumeLayoutSchema: z.ZodOptional<z.ZodObject<{
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
export declare const stylingSchema: z.ZodOptional<z.ZodObject<{
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
