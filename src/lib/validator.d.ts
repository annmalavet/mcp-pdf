/**
 * Resume JSON Schema validator using AJV
 */
/**
 * Validation result type
 */
export interface ValidationResult {
    valid: boolean;
    errors?: string[];
}
/**
 * Validate a resume object against the JSON Resume schema
 */
export declare function validateResume(resume: unknown): ValidationResult;
