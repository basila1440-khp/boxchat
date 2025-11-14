"use client";
import { useState } from "react";

export default function basila() {
  const [selectedUser, setSelectedUser] = useState("Alice");
  const [messages, setMessages] = useState([
    { from: "Alice", text: "Hey there! How’s it going?" },
    { from: "You", text: "All good! Working on a project 🚀" },
  ]);
  const [newMsg, setNewMsg] = useState("");

  const users = ["Alice", "Bob", "Charlie", "Diana"];

  const handleSend = () => {
    if (!newMsg.trim()) return;
    setMessages([...messages, { from: "You", text: newMsg }]);
    setNewMsg("");
  };

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-zinc-50 font-sans">
      {/* Left Sidebar - User List */}
      
    basila page 
    </div>
  );
}
