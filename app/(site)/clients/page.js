// import Clients from "@/app/components/clients/Clients";
// import axios from "axios";

// let data;
// const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       "https://skytextiles.in/api/v1/seo/getByPageName?pagename=clients"
//     );

//     data = response.data.message;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// const main = async () => {
//   await fetchData();

//   return {
//     title: data?.title,
//     description: data?.description,
//     keywords: data?.keywords,
//   };
// };
// export const metadata = await main();

// export default function index() {
//   return <Clients />;
// }

import Clients from "@/app/components/clients/Clients";

export const dynamic = "force-dynamic"; // Ensures the page is always dynamic

export async function generateMetadata() {
  let metaData = {
    title: "",
    description: "",
    keywords: "",
  };

  try {
    const response = await fetch(
      "https://skytextiles.in/api/v1/seo/getByPageName?pagename=clients",
      {
        cache: "no-store", // Fetches fresh data every time
      }
    );
    const data = await response.json();

    if (data?.message) {
      metaData = {
        title: data.message.title || "",
        description: data.message.description || "",
        keywords: data.message.keywords || "",
      };
    }
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }

  return {
    title: metaData.title,
    description: metaData.description,
    keywords: metaData.keywords,
  };
}



export default async function Page() {
  let pageData = {
    h1: "",
    h2: "",
    bold: "",
    italic: "",
  };

  // Fetching the H1 and H2 data
  try {
    const response = await fetch(
      "https://skytextiles.in/api/v1/seo/getByPageName?pagename=clients",
      {
        cache: "no-store", // Fetch fresh data every time
      }
    );
    const data = await response.json();

    if (data?.message) {
      pageData = {
        h1: data.message.h1 || "",
        h2: data.message.h2 || "",
        bold: data.message.bold || "",
        italic: data.message.italic || "",
      };
    }
  } catch (error) {
    console.error("Error fetching page data:", error);
  }

  return (
    <>
      <h1 style={{ display: "none" }}>{pageData.h1}</h1>
      <h2 style={{ display: "none" }}>{pageData.h2}</h2>
      <b style={{ display: "none" }}>{pageData.bold}</b>
      <i style={{ display: "none" }}>{pageData.italic}</i>
      <Clients />
    </>
  );
}