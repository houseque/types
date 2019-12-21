import { RehabState } from "./rehab";
import { PropertyState } from "./property";
import { FinancingState } from "./financing";
import { CashflowState } from "./cashflow";
import { PredictionsState } from "./predictions";

export interface UserProfile {
  id?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
}

type DealStatus = "available";

export interface Deal {
  __typename?: string;
  id?: string;
  name?: string;
  /**
   * Status for the deals availability for public search
   */
  state?: DealStatus;
  unsavedChanges?: boolean;
  photos?: string[];
  description?: string;
  rehab: RehabState;
  property: PropertyState;
  cashflow: CashflowState;
  financing: FinancingState;
  // estimate: EstimateStore;
  predictions: PredictionsState;
  timestamp?: string;
  createdBy?: UserProfile;
  /**
   * Properties not saved.
   */
  // local: LocalDealState;
}
