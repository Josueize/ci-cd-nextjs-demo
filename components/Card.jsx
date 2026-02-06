"use client";

export default function Card({ title, description, children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {description && <p className="text-gray-700 mb-4">{description}</p>}
      {children}
    </div>
  );
}
