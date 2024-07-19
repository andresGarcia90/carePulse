declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
declare type Gender = "Male" | "Female" | "Other";

declare type Status = "pending" | "scheduled" | "cancelled";

declare interface AppointmentParams {
  userId: string;
  patient: string;
  primaryPhysician: string;
  schedule: Date;
  reason: string | undefined;
  note: string | undefined;
  status: Status;
}
