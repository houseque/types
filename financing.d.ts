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
  /**
   * Generally based on another loan, but this gives us flexibility
   */
  amount?: number;
  term?: number;
  downPayment: number;
  rate: number;
  financeClosingCosts?: boolean;
  refinance?: Refinance | null;

  /**
   * How many months before you take out the loan?
   */
  financeAfter?: number;

  /**
   * Some lenders, and hard money lenders allow you to borrow against the ARV
   */
  borrowAgainstArv?: boolean;
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
