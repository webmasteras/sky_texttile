"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";

const API_URL = "https://skytextiles.in/api/v1/event/get-all";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(API_URL);

        console.log("API Response:", res.data);

        // ✅ FIXED HERE
        const eventsData = res.data?.data;

        setEvents(Array.isArray(eventsData) ? eventsData : []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleRowClick = (eventid) => {
    router.push(`/events/${eventid}`);
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "80px",
          marginBottom: "80px",
          minHeight: "60vh",
        }}
      >
        <div style={{ width: "75%" }}>
          {loading ? (
            <h2>Loading events...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : events.length === 0 ? (
            <h2>No events found</h2>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "30px",
                marginTop: "30px",
              }}
            >
              {events.map((event) => (
                <div
                  key={event._id}
                  onClick={() => handleRowClick(event._id)}
                  style={{
                    cursor: "pointer",
                    border: "1px solid #eee",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "#fff",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                    transition: "0.25s",
                  }}
                >
                  <img
                    src={event.image || "/no-image.png"}
                    alt={event.title}
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />

                  <div style={{ padding: "15px" }}>
                    <h3
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        margin: 0,
                      }}
                    >
                      {event.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}