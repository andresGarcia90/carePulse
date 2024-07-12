declare type Gender = "Male" | "Female" | "Other";

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}