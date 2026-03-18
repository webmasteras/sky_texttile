"use client";
import { apiV1Url } from "@/app/constants/api";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

export default function EditSubAdmin() {
  const router = useRouter();
  const { id } = useParams(); // ✅ get id from URL

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(apiV1Url(`/user/${id}`))
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit User: {data.name}</h1>
      {/* Your form here */}
    </div>
  );
}
