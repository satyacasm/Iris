import { getServerSession } from "next-auth";
import Link from "next/link";
import { SignOut } from "@/app/components/AuthButtons";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    return <Link href="/user/auth/signin">Sign In</Link>;
  }

  return (
    <>
      <p className="text-3xl">
        Welcome to the App, {session?.user?.name}! You&apos;re authenticated!
      </p>
      <SignOut />
    </>
  );
}