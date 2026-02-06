"use client";

import DemoCard from '../components/DemoCard';

export default function Home() {
  const handleClick = () => {
    alert("Button clicked! CI/CD demo is working 🚀");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-6">
      <h1 className="text-3xl font-bold">MEU CI/CD Demo – Next.js App</h1>
      <p className="text-lg">Welcome to Josue CI/CD demo app!</p>

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Click Me
      </button>

      <DemoCard />

      <footer className="mt-6 text-sm text-gray-500">
        © 2026 Josue CI/CD Demo App. All rights reserved.
      </footer>
    </div>
  );
}
