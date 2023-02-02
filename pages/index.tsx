import Head from "next/head";
import Link from "next/link";
import { CustomButton } from "../theme/component/Button";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CRUD Functionality</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center h-screen">
        <Link href="/home">
          <CustomButton variant="contained">Go to Home</CustomButton>
        </Link>
      </main>
    </div>
  );
}

