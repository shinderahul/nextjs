// src/app/users/page.tsx
import React from "react";

type User = {
    id: number;
    name: string;
};

async function getUsers(): Promise<User[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store",
    });
    return res.json();
}

export default async function SSRUsersPage() {
    const users = await getUsers();

    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
                    Server-Side Rendered Users List
                </h1>
                <ul className="space-y-4">
                    {users.map((user) => (
                        <li
                            key={user.id}
                            data-testid="user-item"
                            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
                        >
                            <p className="text-lg font-medium text-gray-800">{user.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
