'use client'
// Tabs.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type TabsContextType = {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function Tabs({ children, defaultValue = "" }: { children: ReactNode; defaultValue?: string }) {
    const [activeTab, setActiveTab] = useState<string>(defaultValue);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabsContext.Provider>
    );
}

export function TabsList({ children }: { children: ReactNode }) {
    return <div className="flex gap-2 mb-4">{children}</div>;
}

export function TabsTrigger({ value, children }: { value: string; children: ReactNode }) {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error("Tabs.Trigger must be used within a Tabs component");
    }
    const { activeTab, setActiveTab } = context;
    const isActive = activeTab === value;
    return (
        <button
            onClick={() => setActiveTab(value)}
            className={`px-4 py-2 rounded transition font-semibold ${isActive
                ? "bg-green-600 text-white shadow"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            type="button"
        >
            {children}
        </button>
    );
}

export function TabsContent({ value, children }: { value: string; children: ReactNode }) {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error("Tabs.Content must be used within a Tabs component");
    }
    const { activeTab } = context;
    return activeTab === value ? (
        <div className="p-4 bg-gray-900 rounded shadow">{children}</div>
    ) : null;
}
