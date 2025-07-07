'use client';

import { useState } from "react";

interface SmartInputProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
}

export function SmartInput({ value, onChange, defaultValue }: SmartInputProps) {
    const [internal, setInternal] = useState(defaultValue || "");
    const isControlled = value !== undefined;

    return (
        <input
            value={isControlled ? value : internal}
            onChange={(e) => {
                if (isControlled) onChange?.(e);
                else setInternal(e.target.value);
            }}
            className="w-full px-4 py-2 rounded border border-gray-700 bg-gray-900 text-white focus:outline-none focus:border-green-500 transition"
            placeholder="Type here..."
        />
    );
}
