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
  avatar?: string;
};

type Appointment = {
  _id: string;
  patientId: string;
  date: string;
  time: string;
};

export default function AdminDashboard() {
  const router = useRouter();

  const [patients, setPatients] = useState<Patient[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Patient | null>(null);
  const [commentText, setCommentText] = useState("");
  const [apptDate, setApptDate] = useState("");
  const [apptTime, setApptTime] = useState("");

 
  const fetchPatients = async () => {
    const res = await fetch(`/api/patients?search=${encodeURIComponent(search)}`);
    const data = await res.json();
    setPatients(data.patients || []);
  };

  const fetchAppointments = async () => {
    const res = await fetch("/api/appointments?upcoming=true");
    const data = await res.json();
    setAppointments(data.appointments || []);
  };

  useEffect(() => {
    fetchPatients();
    fetchAppointments();
  }, [search]);

  
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this patient?")) return;
    await fetch(`/api/patients/${id}`, { method: "DELETE" });
    toast.success("Patient deleted");
    fetchPatients();
  };

  const handleAddComment = async () => {
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
  };

  const handleSchedule = async () => {
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
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const getNextAppointment = (id: string) => {
    const next = appointments
      .filter((a) => a.patientId === id)
      .sort(
        (a, b) =>
          new Date(a.date + " " + a.time).getTime() -
          new Date(b.date + " " + b.time).getTime()
      )[0];
    return next ? `${next.date} ${next.time}` : "No upcoming";
  };

  const totalComments = patients.reduce(
    (acc, p) => acc + (p.adminComments?.length || 0),
    0
  );

 
  return (
    <div className="min-h-screen w-full bg-slate-100 p-8">
      <Toaster position="top-right" />

      <div className="flex justify-end mb-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-5 py-2 bg-[#1D4077] text-white rounded-lg hover:bg-[#3566B2]"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

   
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-[#1D4077]">
          Admin Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Manage patients, appointments & comments
        </p>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Stat title="Patients" value={patients.length} icon={<User />} />
        <Stat title="Appointments" value={appointments.length} icon={<Calendar />} />
        <Stat title="Comments" value={totalComments} icon={<MessageCircle />} />
      </div>

     
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <div className="relative">
          <User className="absolute left-3 top-3 text-gray-400" />
          <input
            placeholder="Search patients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-300"
          />
        </div>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((p) => {
          const urgent =
            !!p.query || p.disease?.toLowerCase().includes("critical");

          return (
            <div
              key={p._id}
              className={`bg-white rounded-xl shadow p-5 border ${
                urgent ? "border-red-400" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={p.avatar || "/icons/avatar-placeholder.png"}
                  className="h-12 w-12 rounded-full border"
                />
                <div>
                  <h2 className="font-semibold">{p.name}</h2>
                  <p className="text-sm text-gray-500">{p.age} years</p>
                </div>
                {urgent && (
                  <span className="ml-auto text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                    Urgent
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600">
                <strong>Disease:</strong> {p.disease || "N/A"}
              </p>

              <p className="text-sm mt-1">
                <strong>Next Appointment:</strong>{" "}
                <span className="text-indigo-600">
                  {getNextAppointment(p._id)}
                </span>
              </p>

              <div className="flex gap-2 mt-5">
                <ActionBtn label="Comment" onClick={() => setSelected(p)} />
                <ActionBtn label="Schedule" onClick={() => setSelected(p)} />
                <ActionBtn
                  label="Delete"
                  danger
                  onClick={() => handleDelete(p._id)}
                />
              </div>
            </div>
          );
        })}
      </div>

    
      {selected && (
        <Modal>
          <h3 className="text-lg font-semibold mb-3">
            Patient Action
          </h3>

          <textarea
            placeholder="Admin comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full border p-3 rounded mb-3"
          />

          <div className="flex gap-2 mb-4">
            <input
              type="date"
              value={apptDate}
              onChange={(e) => setApptDate(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <input
              type="time"
              value={apptTime}
              onChange={(e) => setApptTime(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              onClick={() => setSelected(null)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleAddComment}
              className="px-4 py-2 bg-[#1D4077] text-white rounded"
            >
              Save
            </button>
            <button
              onClick={handleSchedule}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Schedule
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}



function Stat({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
      <div className="text-indigo-600">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

function ActionBtn({
  label,
  onClick,
  danger,
}: {
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2 rounded text-sm ${
        danger
          ? "bg-red-500 text-white"
          : "bg-[#1D4077] text-white"
      }`}
    >
      {label}
    </button>
  );
}

function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg">
        {children}
      </div>
    </div>
  );
}
