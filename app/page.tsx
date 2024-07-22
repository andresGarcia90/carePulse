import Image from "next/image";
import Link from "next/link";
import PatienceForm from "@/components/forms/PatienceForm";
import PasskeyModal from "@/components/PasskeyModal";

export default function Home({ searchParams }: SearchParamProps) {
  const admin = searchParams?.admin === "true";

  return (
    <>
  {admin && <PasskeyModal />}
   <div className="flex h-screen max-h-screen">
    <section className="remove-screollbar container my-auto">
      {/* Todo: add otp verification */}
      <div className="sub-container max-w-[496px]">
        <Image
          src="/assets/icons/logo-full.svg"
          height={100}
          width={100}
          alt="patient"
          className="mb-12 h-10 w-fit"
        ></Image>

        <PatienceForm />
        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">2024 CarePulse</p>
          <Link href="/?admin=true" className="text-green-500">Admin</Link>
        </div>
      </div>
    </section>
    <Image 
      src="/assets/images/onboarding-img.png"
      height={1000}
      width={1000}
      alt="patient"
      className="side-img max-w-[50%]"
    />
   </div>
    </>
  );
}
