/**
 * Reusable layout schemas for PDF tools.
 * These schemas define the structure for layout-related configuration.
 */
import { z } from 'zod';
import type { BaseContentItem } from './content.ts';
export declare const sizeSchema: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
export declare const borderSchema: z.ZodObject<{
    color: z.ZodString;
    width: z.ZodNumber;
}, z.core.$strip>;
export declare const paddingSchema: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
    top: z.ZodOptional<z.ZodNumber>;
    right: z.ZodOptional<z.ZodNumber>;
    bottom: z.ZodOptional<z.ZodNumber>;
    left: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>]>;
export declare const groupSchema: z.ZodType<GroupItem>;
export interface GroupItem {
    type: 'group';
    page?: number;
    position?: 'absolute' | 'relative';
    left?: number;
    top?: number;
    width?: number | string;
    height?: number | string;
    direction?: 'column' | 'row';
    gap?: number;
    flex?: number;
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    align?: 'start' | 'center' | 'end';
    padding?: number | {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    background?: string;
    border?: {
        color: string;
        width: number;
    };
    children: ContentItem[];
}
export declare const contentItemSchema: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodObject<{
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
}, z.core.$strip>]>, z.ZodType<GroupItem, unknown, z.core.$ZodTypeInternals<GroupItem, unknown>>]>;
export type ContentItem = BaseContentItem | GroupItem;
export declare const layoutSchema: z.ZodOptional<z.ZodObject<{
    overflow: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        auto: "auto";
        warn: "warn";
    }>>>;
}, z.core.$strip>>;
