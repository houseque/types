import { ScenarioState } from "./scenarios";

//Purchase makes more sense here.

export interface AmortizationPayment {
  principal: number;
  interest: number;
  currentBalance: number;
  payment?: number;
  paymentNumber: number;
  period: number;
}

type RateType = "arm" | "frm";
type ARMType = "5/1" | "3/1" | "7/1" | "10/1";
//Warn about prepayment penalties

//Down payment can be inferred
export interface Mortgage {
  __typename?: string;
  //Loan maybe?
  rateType?: RateType;
  armType?: ARMType | null;
  /**
   * Determines whether the loan payment is made once, twice, or four times a month.
   */
  paymentFrequency?: number;
  interestOnly?: boolean;
  closingCosts?: number;
  term?: number;
  downPayment: number;
  rate: number;
  financeClosingCosts?: boolean;
  refinance?: Refinance | null;
}

export interface Refinance extends Mortgage {
  /**
   * After how long will you refinance the original loan.
   * @unit {months}
   */
  refinanceAfter: number;
}

export interface IndividualPurchaseState {
  __typename?: string;
  closingCosts?: number | null;
  loans: Mortgage[];
  price?: number | null;
}

export interface FinancingState
  extends ScenarioState<IndividualPurchaseState> {}
