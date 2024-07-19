import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

export default async function NewAppointment( {params: { userId }}: SearchParamProps ) {
  const patient = await getPatient(userId);
  return (
   <div className="flex h-screen max-h-screen">
    <section className="remove-screollbar container my-auto">
      <div className="sub-container max-w-[860px] flex-1 justify-between">
        <Image
          src="/assets/icons/logo-full.svg"
          height={100}
          width={100}
          alt="patient"
          className="mb-12 h-10 w-fit"
        ></Image>

        <AppointmentForm 
          patientId={patient?.$id}
          userId={userId}
          type="create"
        />
        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">2024 CarePulse</p>
          {/* <Link href="/?admin=true" className="text-green-500">Admin</Link> */}
        </div>
      </div>
    </section>
    <Image 
      src="/assets/images/appointment-img.png"
      height={1000}
      width={1000}
      alt="patient"
      className="side-img max-w-[390px] bfg-bottom"
    />
   </div>
  );
}