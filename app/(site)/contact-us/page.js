// import Touch from "@/app/components/getintouch/Touch";
// import axios from "axios";


// let data;
// const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       "https://skytextiles.in/api/v1/seo/getByPageName?pagename=contactUs"
//     );
//     // setData(response.data.message); // Assuming the response data is an array

//     data = response.data.message;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// const main = async () => {
//   await fetchData();
//   console.log(data); // This will now log the fetched data

//   return {
//     title: data?.title,
//     description: data?.description,
//     keywords: data?.keywords,
//   };
// };
// export const metadata = await main();

// export default function index() {
//   return (
//     <>
//       <h1 style={{ display: "none" }}>
//         Best Ahmedabad, Gujarat, India & Asia Textile Manufacturing Company: SKY
//         Textiles
//       </h1>
//       <h2 style={{ display: "none" }}>
//         Sky textiles India Pvt Ltd. your one-stop solution for design,
//         production, and sales of high-quality apparel. Partner with us for
//         innovative, dependable products. Contact us today.
//       </h2>
//       <h2 style={{ display: "none" }}>Contact - Sky Textiles</h2>
//       <h2 style={{ display: "none" }}>Come find us</h2>
//       <h2 style={{ display: "none" }}>Where to now?</h2>
//       <h2 style={{ display: "none" }}>What are We?</h2>
//       <h2 style={{ display: "none" }}>Who are we?</h2>
//       <h2 style={{ display: "none" }}>Our Start</h2>
//       <h2 style={{ display: "none" }}>Where are we now?</h2>
//       <h2 style={{ display: "none" }}>
//         We are a value-driven firm that is quite commendable
//       </h2>
//       <h2 style={{ display: "none" }}>Our vision & mission says it all</h2>
//       <h2 style={{ display: "none" }}>Fashion on sustainable grounds</h2>
//       <h2 style={{ display: "none" }}>Catering to a broad clothing market</h2>
//       <h2 style={{ display: "none" }}>Where to now?</h2>

//       <Touch />
//     </>
//   );
// }


import Touch from "@/app/components/getintouch/Touch";

export const dynamic = "force-dynamic"; // Ensures the page is always dynamic

export async function generateMetadata() {
  let metaData = {
    title: "",
    description: "",
    keywords: "",
  };

  try {
    const response = await fetch(
      "https://skytextiles.in/api/v1/seo/getByPageName?pagename=contactUs",
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
      "https://skytextiles.in/api/v1/seo/getByPageName?pagename=contactUs",
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
      <Touch />
    </>
  );
}