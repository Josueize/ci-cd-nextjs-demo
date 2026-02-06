"use client";

export default function DemoCard() {
  const handleCardAction = () => {
    alert("Card action clicked!");
  };

  return (
    <div className="border rounded-lg p-4 w-80 shadow">
      <h2 className="font-semibold text-xl mb-2">Demo Card</h2>
      <p className="mb-4">This is an example card to show structured content.</p>
      <button
        onClick={handleCardAction}
        className="text-blue-500 hover:underline"
      >
        Card Action
      </button>
    </div>
  );
}
