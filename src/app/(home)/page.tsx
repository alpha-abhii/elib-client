// import Image from "next/image";
import Banner from "./components/Banner";
import BookList from "./components/BookList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

// export const dynamic = 'force-dynamic';

export default async function Home() {
  // const response = await fetch(`${process.env.BACKEND_URL}/books/list`,{ cache: 'no-store' });

  // console.log("BookList:: ",response);
  console.log(`${process.env.BACKEND_URL}`)

  return (
    <>
      <Banner/>
      <Suspense fallback={<Loading/>}>
        <BookList/>
      </Suspense>
    </>
  );
}
