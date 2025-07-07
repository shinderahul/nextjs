export async function generateMetadata() {
    return {
        title: "Component Design Patterns | ArchitectKit",
        description: "Explore common React component design patterns.",
    };
}

const patterns = [
    {
        title: "Container/Presentational",
        description: "Separate logic (container) from UI (presentational) for reusable, testable components.",
        link: "/patterns/container-presentational",
    },
    {
        title: "Compound Components",
        description: "Allow components to communicate and share state implicitly via composition.",
        link: "/patterns/compound-components",
    },
    {
        title: "Controlled vs Uncontrolled Input",
        description: "Compare React input patterns: controlled (state managed by React) vs uncontrolled (state managed by the DOM).",
        link: "/patterns/controlled-vs-uncontrolled",
    },
    {
        title: "Prop Getters Hook",
        description: "Share code between components using a prop whose value is a function. This pattern lets hooks return helper functions that merge internal logic with user-provided props.",
        link: "/patterns/prop-getters-hook",
    },
];

export default function ComponentDesignPatterns() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-8 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white mb-10">Component Design Patterns</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                {patterns.map((pattern) => (
                    <div
                        key={pattern.title}
                        className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col shadow-lg"
                    >
                        <h2 className="text-xl font-bold text-white mb-2">{pattern.title}</h2>
                        <p className="text-gray-300 mb-4">{pattern.description}</p>
                        <a
                            href={pattern.link}
                            className="self-start px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                        >
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
}
