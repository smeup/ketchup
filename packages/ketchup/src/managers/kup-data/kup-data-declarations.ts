/**
 * Interface related to the formulas factory function.
 */
export interface KupDataFormulas {
    custom: (data: KupDataCustomValues) => number;
    normalDistribution: (data: KupDataNormalDistributionValues) => number;
}
/**
 * Contains all available formulas values.
 */
export type KupDataFormulasValues =
    | KupDataCustomValues
    | KupDataNormalDistributionValues;
/**
 * Values for the normal distribution formula.
 */
export interface KupDataNormalDistributionValues {
    average: number;
    variance: number;
    x: number;
}
/**
 * Values for the custom formula.
 */
export interface KupDataCustomValues {
    formula: string;
    row: { [index: string]: number };
}
