import { GenderType } from "@/lib/types/account/gender";

export interface CreateHostAccountRequest {
  host_name: string;
  password: string;
  email: string;
}

export interface CreateHostAccountResponse {
  error_codes: number[];
}

export interface CreateGuestAccountRequest {
  guest_first_name: string;
  guest_last_name: string;
  guest_nickname: string | null;
  birth_date: string;
  gender: GenderType;
  password: string;
  host_name: string;
}

export interface CreateGuestAccountResponse {
  error_codes: number[];
}
