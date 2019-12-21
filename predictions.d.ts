import { ScenarioState } from "./scenarios";

//To add the lists, just add properties later to account for itemized
export interface Prediction {
  __typename?: string;
  periodicRentVariance?: number | null;
  periodicPropertyAppraisal?: number | null;
  eventualSellingCosts?: number | null;
  periodicExpenseAppreciation?: number | null;

  /**
   * Number of months to hold the unit, leave blank for indefinite.
   * After which, we assume sale at ARV, appreciated (given years have passed).
   * @units {Months}
   * @deprecated maybe?
   */
  holdFor?: number | null;
}

export interface PredictionsState extends ScenarioState<Prediction> {}
