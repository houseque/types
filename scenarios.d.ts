type ScenariosCategory = "financing" | "rehab" | "cashflow" | "predictions";

export interface Scenario<T> {
  __typename?: string;
  name?: string | null;
  value: T;
}

export interface ScenarioState<T> {
  __typename?: string;
  scenarios: Scenario<T>[];
  currentScenarioIndex: number;
}
