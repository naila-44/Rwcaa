"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { User, Calendar, MessageCircle, Trash2, LogOut } from "lucide-react";

type Patient = {
  _id: string;
  name: string;
  age: number;
  disease?: string;
  query?: string;
  adminComments?: Array<{ text: string }>;
};

type Appointment = {
  _id: string;
  patientId: string;
  date: string;
  time: string;
};

export default function AdminDashboard() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Patient | null>(null);
  const [commentText, setCommentText] = useState("");
  const [apptDate, setApptDate] = useState("");
  const [apptTime, setApptTime] = useState("");
  const router = useRouter();

  async function fetchPatients() {
    setLoading(true);
    const res = await fetch(
      `/api/patients?page=${page}&limit=12&search=${encodeURIComponent(search)}`
    );
    const data = await res.json();
    setPatients(data.patients || []);
    setPages(data.pages || 1);
    setLoading(false);
  }

  async function fetchAppointments() {
    const res = await fetch("/api/appointments?upcoming=true");
    const data = await res.json();
    setAppointments(data.appointments || []);
  }

  useEffect(() => {
    fetchPatients();
    fetchAppointments();

    const interval = setInterval(() => {
      fetchPatients();
      fetchAppointments();
    }, 30000);

    return () => clearInterval(interval);
  }, [page, search]);

  async function handleDelete(id: string) {
    if (!confirm("Delete patient?")) return;
    await fetch(`/api/patients/${id}`, { method: "DELETE" });
    toast.success("Patient deleted");
    fetchPatients();
  }

  async function handleAddComment() {
    if (!selected) return;
    await fetch(`/api/patients/${selected._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: commentText }),
    });
    toast.success("Comment added");
    setSelected(null);
    setCommentText("");
    fetchPatients();
  }

  async function handleSchedule() {
    if (!selected) return;
    await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patientId: selected._id,
        date: apptDate,
        time: apptTime,
      }),
    });
    toast.success("Appointment scheduled");
    setSelected(null);
    setApptDate("");
    setApptTime("");
    fetchAppointments();
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  const getNextAppointment = (id: string) => {
    const a = appointments
      .filter((x) => x.patientId === id)
      .sort(
        (a, b) =>
          new Date(a.date + " " + a.time).getTime() -
          new Date(b.date + " " + b.time).getTime()
      )[0];
    return a ? `${a.date} ${a.time}` : "No upcoming";
  };

  const totalComments = patients.reduce(
    (acc, p) => acc + (p.adminComments?.length || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef3ff] to-[#dbe6ff] p-6">
      <Toaster position="top-right" />

    
      <div className="flex justify-between items-center mb-6 ">
        <div>
          <h1 className="text-4xl font-bold text-[#1D4077]">Admin Dashboard</h1>
          <div className="flex items-center gap-2 text-green-500 text-sm">
            <span className="h-2 w-2 bg-green-500 rounded-full "></span>
            Live
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-[#1D4077] text-white rounded-lg hover:bg-[#3566B2]"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <Stat title="Patients" value={patients.length} />
        <Stat title="Appointments" value={appointments.length} />
        <Stat title="Comments" value={totalComments} />
      </div>

    
      <input
        placeholder="Search patients..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="w-full mb-6 p-3 rounded-lg border shadow"
      />

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-48 bg-gray-200 animate-pulse rounded-xl" />
          ))}
        </div>
      )}

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((p) => {
          const urgent =
            !!p.query || p.disease?.toLowerCase().includes("critical");

          return (
            <div
              key={p._id}
              className={`bg-white p-5 rounded-xl shadow-lg transition hover:scale-105 ${
                urgent ? "border-2 border-red-500 animate-pulse" : ""
              }`}
            >
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <User size={18} /> {p.name}
              </h2>

              <p className="text-sm text-gray-600">Age: {p.age}</p>
              <p className="text-sm text-gray-600">
                Disease: {p.disease || "N/A"}
              </p>
              <p className="text-sm mt-2 font-semibold">
                Next: {getNextAppointment(p._id)}
              </p>

              <div className="flex gap-2 mt-4">
                <ActionBtn icon={<MessageCircle size={14} />} label="Comment" onClick={() => setSelected(p)} />
                <ActionBtn icon={<Calendar size={14} />} label="Schedule" onClick={() => setSelected(p)} />
                <ActionBtn icon={<Trash2 size={14} />} label="Delete" onClick={() => handleDelete(p._id)} />
              </div>
            </div>
          );
        })}
      </div>

    
      {selected && (
        <Modal>
          <h3 className="text-lg font-semibold mb-2">Comment for {selected.name}</h3>
          <textarea
            className="w-full border p-2 rounded mb-3"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <ModalActions
            onCancel={() => setSelected(null)}
            onConfirm={handleAddComment}
          />
        </Modal>
      )}
    </div>
  );
}



function Stat({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <p className="text-gray-500">{title}</p>
      <p className="text-3xl font-bold text-[#1D4077]">{value}</p>
    </div>
  );
}

function ActionBtn({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-[#1D4077] text-white rounded hover:bg-[#3566B2]"
    >
      {icon} {label}
    </button>
  );
}

function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        {children}
      </div>
    </div>
  );
}

function ModalActions({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="flex justify-end gap-2">
      <button onClick={onCancel} className="px-4 py-2 border rounded">
        Cancel
      </button>
      <button
        onClick={onConfirm}
        className="px-4 py-2 bg-[#1D4077] text-white rounded"
      >
        Save
      </button>
    </div>
  );
}
