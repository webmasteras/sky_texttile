"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";

export default function EventGalleryPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!eventId) return;

    const fetchEvent = async () => {
      try {
        const res = await axios.get(
          "https://skytextiles.in/api/v1/event/get-all"
        );

        console.log("Single Page API:", res.data);

        const allEvents = res.data?.data; // ✅ FIXED

        if (Array.isArray(allEvents)) {
          const found = allEvents.find(
            (ev) => ev._id.toString() === eventId.toString()
          );
          setEvent(found || null);
        } else {
          setEvent(null);
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setEvent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading)
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        Loading event...
      </p>
    );

  if (!event)
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        Event not found
      </p>
    );

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <main
        style={{
          margin: "0 auto",
          flex: 1,
          maxWidth: "1400px",
          paddingTop: "100px",
          paddingBottom: "60px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {event.images && event.images.length > 0 ? (
          <div className="gallery-grid">
            {event.images.map((img, index) => (
              <a
                key={index}
                href={img}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-item"
              >
                <img
                  src={img}
                  alt={`Event Image ${index + 1}`}
                  className="gallery-image"
                />
              </a>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px", color: "#777" }}>
            No gallery images available.
          </p>
        )}
      </main>

      <Footer />

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .gallery-item {
          display: block;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.2);
        }

        .gallery-image {
          width: 100%;
          height: 350px;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .gallery-image {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
}



// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";

// import Navbar from "@/app/components/navbar/Navbar";
// import Footer from "@/app/components/footer/Footer";

// export default function EventGalleryPage() {
//   const { eventId } = useParams();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!eventId) return;

//     axios
//       .get("https://skytextiles.in/api/v1/event/get-all")
//       .then((res) => {
//         const allEvents = res.data.message;
//         // const found = allEvents.find((ev) => ev._id === eventId);
//         const found = allEvents.find(
//   (ev) => ev._id.toString() === decodeURIComponent(eventId.trim())
// );
//         setEvent(found || null);
//       })
//       .catch((err) => console.error("Error fetching events:", err))
//       .finally(() => setLoading(false));
//   }, [eventId]);

//   if (loading)
//     return (
//       <p style={{ textAlign: "center", marginTop: "50px" }}>
//         Loading event...
//       </p>
//     );

//   if (!event)
//     return (
//       <p style={{ textAlign: "center", marginTop: "50px" }}>
//         Event not found
//       </p>
//     );

//   return (
//     <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//       <Navbar />

//       <main
//         style={{
//           margin: "0 auto",
//           flex: 1,
//           maxWidth: "1400px",
//           paddingTop: "100px",
//           paddingBottom: "60px",
//           paddingLeft: "20px",
//           paddingRight: "20px",
//         }}
//       >
//         {event.images && event.images.length > 0 ? (
//           <div className="gallery-grid">
//             {event.images.map((img, index) => (
//               <a
//                 key={index}
//                 href={img}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="gallery-item"
//               >
//                 <img
//                   src={img}
//                   alt={`Event Image ${index + 1}`}
//                   className="gallery-image"
//                 />
//               </a>
//             ))}
//           </div>
//         ) : (
//           <p style={{ textAlign: "center", marginTop: "20px", color: "#777" }}>
//             No gallery images available.
//           </p>
//         )}
//       </main>

//       <Footer />

//       {/* CSS */}
//       <style jsx>{`
//         .gallery-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }

//         .gallery-item {
//           display: block;
//           overflow: hidden;
//           border-radius: 10px;
//           box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .gallery-item:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 10px 22px rgba(0, 0, 0, 0.2);
//         }

//         .gallery-image {
//           width: 100%;
//           height: 350px;
//           object-fit: cover;
//           display: block;
//           transition: transform 0.4s ease;
//         }

//         .gallery-item:hover .gallery-image {
//           transform: scale(1.05);
//         }

//         /* Mobile View */
//         @media (max-width: 768px) {
//           .gallery-grid {
//             grid-template-columns: 1fr;
//           }

//           .gallery-image {
//             height: 250px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
