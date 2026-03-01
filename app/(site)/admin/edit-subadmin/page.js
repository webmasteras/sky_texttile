"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

export default function EditSubAdmin() {
  const router = useRouter();
  const { id } = useParams(); // ✅ get id from URL

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://skytextiles.in/api/v1/user/${id}`)
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
