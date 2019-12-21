import { ScenarioState } from "./scenarios";

export interface RehabStateInstance {
  __typename?: string;
  rehabCosts?: number;
  /**
   * After Repair Value
   * @definition After completing the work, this is how much the property now worth.
   */
  arv?: number | null;
  /**
   * How much money besides the rehab this will cost you, maybe fees on loans etc.
   */
  holdingCosts?: number;

  /**
   * How long will the rehab take?
   * @unit {Days}
   */
  duration?: number;
  /**
   * Does this impact vacancy, if so how much?
   * @unit {Decimal}
   * @range {0.0 - 1.0}
   * @example 1 meaning full vacancy during work, 0 meaning no impact
   */
  vacancyPenalty?: number;
}

export interface RehabState extends ScenarioState<RehabStateInstance> {}
