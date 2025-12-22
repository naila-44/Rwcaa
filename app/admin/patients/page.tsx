// app/admin/patients/new/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPatient() {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [disease, setDisease] = useState("");
  const [query, setQuery] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age, disease, query }),
    });
    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      alert("Error creating");
    }
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Patient</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full p-2 border mb-3 rounded" required />
        <input value={age} onChange={(e) => setAge(Number(e.target.value) || "")} placeholder="Age" type="number" className="w-full p-2 border mb-3 rounded" required />
        <input value={disease} onChange={(e) => setDisease(e.target.value)} placeholder="Disease" className="w-full p-2 border mb-3 rounded" required />
        <textarea value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Query / notes" className="w-full p-2 border mb-3 rounded" />
        <div className="flex gap-2 justify-end">
          <button type="button" onClick={() => router.back()} className="px-3 py-1 border rounded">Cancel</button>
          <button type="submit" className="px-3 py-1 bg-green-600 text-white rounded">Create</button>
        </div>
      </form>
    </div>
  );
}
