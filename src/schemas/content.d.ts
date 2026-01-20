/**
 * Reusable content schemas for PDF tools.
 * These schemas define the structure for content items that can be shared across tools.
 */
import { z } from 'zod';
export declare const flowingContentItemSchema: z.ZodUnion<readonly [z.ZodObject<{
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
}, z.core.$strip>]>;
export declare const positionedTextSchema: z.ZodObject<{
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
}, z.core.$strip>;
export declare const baseContentItemSchema: z.ZodUnion<readonly [z.ZodObject<{
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
}, z.core.$strip>]>;
export type FlowingContentItem = z.infer<typeof flowingContentItemSchema>;
export type BaseContentItem = z.infer<typeof baseContentItemSchema>;
