import { useState } from "react";

export default function ChatWindow({ user, messages, onSend }) {
  const [newMsg, setNewMsg] = useState("");

  const handleSend = () => {
    if (!newMsg.trim()) return;
    onSend(newMsg.trim());
    setNewMsg("");
  };

  return (
    <main className="flex flex-col flex-1 bg-white dark:bg-black">
      {/* Header */}
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 font-semibold text-lg">
        {user}
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.from === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                msg.from === "You"
                  ? "bg-zinc-800 text-white"
                  : "bg-zinc-200 dark:bg-zinc-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 p-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 bg-zinc-100 dark:bg-zinc-900 rounded-full px-4 py-2 focus:outline-none text-sm"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-zinc-800 dark:bg-zinc-700"
        >
          Send
        </button>
      </div>
    </main>
  );
}
