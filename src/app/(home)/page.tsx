
import Banner from "./components/Banner";
import BookList from "./components/BookList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

// export const dynamic = 'force-dynamic';

export default async function Home() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/books/list`,{ cache: 'no-store' });

    console.log("BookList:: ",response);

    if (!response.ok) {
        throw new Error("An error occurred while fetching the data");
    }
    const books = await response.json();
    console.log(books);

  return (
    <>
      <Banner/>
      <Suspense fallback={<Loading/>}>
        <BookList/>
      </Suspense>
    </>
  );
}
