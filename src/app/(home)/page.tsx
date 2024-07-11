// import Image from "next/image";
import Banner from "./components/Banner";
import BookList from "./components/BookList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

// export const dynamic = 'force-dynamic';

export default  function Home() {


  return (
    <>
      <Banner/>
      <Suspense fallback={<Loading/>}>
        <BookList/>
      </Suspense>
    </>
  );
}
