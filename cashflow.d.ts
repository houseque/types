import { ScenarioState } from "./scenarios";

type CashflowType = "expense" | "income";

type IncomeTag = "rent" | "other";
type ExpenseTag =
  | "other"
  | "pmi"
  | "insurance"
  | "taxes"
  | "repairs"
  | "capex"
  | "vacancy"
  | "electric"
  | "hoa"
  | "sanitation"
  | "management"
  | "water";
// CashflowTag

export interface IndividualCashflowState {
  __typename?: string;
  income: Income[];
  expenses: Expense[];
}

export interface CashflowState extends ScenarioState<IndividualCashflowState> {}

export type CashflowOptionType = "fixed" | "percent";

// export interface CashflowOptions<T extends ExpenseTag | IncomeTag> {
// 	name: string;
// 	// explanation?: Explanations;
// 	tag: T;
// 	description?: string;
// 	type?: CashflowOptionType;
// 	value?: number;
// }

export interface CashflowEntryBase {
  __typename?: string;
  type?: CashflowType;
  amount: number;
  notes?: string;
  tag: string;
  /**
   * Whether this is a percent based cashflow, or a fixed price
   */
  amountType?: CashflowOptionType;
}

export interface Income extends CashflowEntryBase {
  tag: IncomeTag;
}

export interface Expense extends CashflowEntryBase {
  tag: ExpenseTag;
}
