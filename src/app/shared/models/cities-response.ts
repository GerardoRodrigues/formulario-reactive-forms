export type CityListResponse = string[];

export interface ICitiesResponse {
  error: boolean;
  msg: string;
  data: CityListResponse;
}
