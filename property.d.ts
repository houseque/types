export interface PropertyState {
  __typename?: string;
  /**
   * @deprecated
   */
  dealId?: string | null;
  /**
   * Moving up a level
   * @deprecated
   */
  details?: PropertyDetails;
  address?: string | null;
  location?: PropertyLocation;
  sqFt?: number | null;
}

export interface PropertyLocation {
  __typename?: string;
  lat?: number;
  long?: number;
  streetNumber?: string;
  route?: string;
  city?: string;
  county?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

export interface PropertyDetails {
  __typename?: string;
  //TODO move this higher in the redux store
  name?: string | null;
  coordinates?: { __typename?: string; lat?: number; long?: number };
  address?: string | null;
  sqFt?: number | null;
}
