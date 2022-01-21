/**
 * Interface related to the formulas factory function.
 */
export interface KupDataFormulas {
    normalDistribution: (data: KupDataNormalDistributionValues) => number;
}
/**
 * Contains all available formulas values.
 */
export type KupDataFormulasValues = KupDataNormalDistributionValues;
/**
 * Values for the normal distribution formula.
 */
export interface KupDataNormalDistributionValues {
    average: number;
    variance: number;
    x: number;
}
