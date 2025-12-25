"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

export default function AdminAuthPage() {
  const router = useRouter();
  const [adminExists, setAdminExists] = useState<boolean | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    adminSecret: "",
  });
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await fetch("/api/auth/check-admin");
        const data = await res.json();
        setAdminExists(data.adminExists);
        setIsRegistering(!data.adminExists); 
      } catch (err) {
        toast.error("Failed to check admin status");
      }
    };
    checkAdmin();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.adminSecret) {
      toast.error("All fields are required");
      return;
    }
    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Registration failed");
        return;
      }
      toast.success("Admin registered successfully!");
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

 
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error("Email and password required");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Login failed");
        return;
      }
      localStorage.setItem("token", data.token);
      toast.success("Login successful");
      router.push("/dashboard");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (adminExists === null) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={isRegistering ? handleRegister : handleLogin}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center mb-2">
          {isRegistering ? "Admin Registration" : "Admin Login"}
        </h2>
        {isRegistering && (
          <>
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg"
              required
            />
            <input
              name="adminSecret"
              type="password"
              placeholder="Admin Secret Key"
              value={form.adminSecret}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg"
              required
            />
          </>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg"
          required
        />

        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-900 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800 transition"
        >
          {loading ? (isRegistering ? "Registering..." : "Logging in...") : isRegistering ? "Register " : "Login"}
        </button>

        {adminExists && (
          <p className="text-center text-gray-500 mt-2">
            {isRegistering ? "Already an admin?" : "Need to register first?"}{" "}
            <button
              type="button"
              className="text-indigo-900 font-semibold"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? "Login here" : "Register"}
            </button>
          </p>
        )}
      </form>
    </div>
  );
}
