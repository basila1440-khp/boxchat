import { useState } from "react";
// import { Search } from "lucide-react";

export default function ChatSidebar({ selectedUser, onSelect }) {
  const [query, setQuery] = useState("");
  const users = [
    { name: "Alice", avatar: "🧑‍💻", status: "Online" },
    { name: "Bob", avatar: "🎨", status: "Offline" },
    { name: "Charlie", avatar: "🧠", status: "Away" },
    { name: "Diana", avatar: "💬", status: "Online" },
  ];

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <aside className="w-1/3 max-w-sm border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <h2 className="font-semibold text-lg">Chats</h2>
        <button className="text-sm px-3 py-1 bg-zinc-900 text-white dark:bg-zinc-800 rounded-full hover:bg-zinc-700 transition">
          +
        </button>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-full px-3 py-2">
          {/* <Search size={16} className="opacity-50 mr-2" /> */}
          <input
            type="text"
            placeholder="Search users..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto">
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {filtered.map((user) => (
            <li
              key={user.name}
              onClick={() => onSelect(user.name)}
              className={`flex items-center gap-3 p-3 cursor-pointer transition-all duration-150 hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                selectedUser === user.name
                  ? "bg-zinc-100 dark:bg-zinc-800"
                  : ""
              }`}
            >
              {/* Avatar */}
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-700 text-lg">
                {user.avatar}
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1">
                <span className="font-medium text-sm">{user.name}</span>
                <span
                  className={`text-xs ${
                    user.status === "Online"
                      ? "text-green-500"
                      : user.status === "Away"
                      ? "text-yellow-500"
                      : "text-zinc-500"
                  }`}
                >
                  {user.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
