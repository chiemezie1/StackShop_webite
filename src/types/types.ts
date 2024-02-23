export type ErrorResponse = {
  code: string;
  message?: string;
  issues?: { message: string }[];
};

export type UserInfo = {
  email?: string;
  country?: string;
  givenName?: string;
  familyName?: string;
  phoneNumber?: string;
  postalCode?: string;
  streetAddress?: string;
  locality?: string;
  birthdate?: string;
  gender?: string;
};
