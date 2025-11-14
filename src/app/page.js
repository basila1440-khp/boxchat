"use client";
import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";
import ChatWindow from "@/components/ChatWindow";

export default function Home() {
  const [selectedUser, setSelectedUser] = useState("Alice");
  const [messages, setMessages] = useState([
    { from: "Alice", text: "Hey there! How’s it going?" },
    { from: "You", text: "All good! Working on a project 🚀" },
  ]);

  const handleSend = (msg) => {
    setMessages([...messages, { from: "You", text: msg }]);
  };

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-zinc-50 font-sans">
      <ChatSidebar selectedUser={selectedUser} onSelect={setSelectedUser} />
      <ChatWindow user={selectedUser} messages={messages} onSend={handleSend} />
    </div>
  );
}
