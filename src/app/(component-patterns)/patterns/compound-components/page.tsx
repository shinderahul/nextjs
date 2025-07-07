import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/patterns/compoundComponents/tabs";
import Link from "next/link";

export default function CompoundComponentsPatternPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-8 flex items-center justify-center">
            <div className="w-full max-w-6xl">
                <h1 className="text-2xl font-bold text-white mb-6">Compound Components Pattern Example</h1>

                <h3 className="text-lg font-semibold text-green-400 mt-6 mb-2">What is it?</h3>
                <ul className="list-disc list-inside mb-6 text-gray-300 pl-4">
                    <li>
                        <span className="font-semibold text-white">Compound Components:</span> A React pattern where multiple components work together under a shared parent, communicating implicitly via context.
                    </li>
                    <li>
                        Each child component knows about the shared state and can read or update it, enabling flexible and expressive APIs.
                    </li>
                </ul>

                <h3 className="text-lg font-semibold text-green-400 mt-6 mb-2">Why use it?</h3>
                <ul className="list-disc list-inside mb-8 text-gray-300 pl-4">
                    <li>Enables highly flexible and declarative component APIs.</li>
                    <li>Allows consumers to compose UI freely while sharing logic/state.</li>
                    <li>Great for building things like Tabs, Accordions, Menus, and more.</li>
                </ul>
                <p className="mb-8 px-4 py-3 rounded bg-gray-800 text-gray-200 border-l-4 border-green-500 shadow">
                    <span className="font-semibold text-green-400">To read more:</span> <span className="font-mono text-sm">src/components/patterns/compoundComponents/tabs.tsx</span>
                </p>

                <Tabs defaultValue="a">
                    <TabsList>
                        <TabsTrigger value="a">Overview</TabsTrigger>
                        <TabsTrigger value="b">Usage</TabsTrigger>
                        <TabsTrigger value="c">Benefits</TabsTrigger>
                    </TabsList>
                    <TabsContent value="a">
                        <p className="text-gray-200">
                            Compound components let you build flexible UIs where parent and children communicate via React context. For example, a <span className="font-mono text-green-400">Tabs</span> component manages state, while <span className="font-mono text-green-400">TabsList</span>, <span className="font-mono text-green-400">TabsTrigger</span>, and <span className="font-mono text-green-400">TabsContent</span> consume and update that state.
                        </p>
                    </TabsContent>
                    <TabsContent value="b">
                        <p className="text-gray-200">
                            Use the pattern by wrapping related components under a parent. Each child can access or update shared state without prop drilling. Try switching tabs above to see the pattern in action!
                        </p>
                    </TabsContent>
                    <TabsContent value="c">
                        <ul className="list-disc list-inside text-gray-200 pl-4">
                            <li>Cleaner, more expressive code.</li>
                            <li>No prop drilling—children access context directly.</li>
                            <li>Easy to extend and customize.</li>
                        </ul>
                    </TabsContent>
                </Tabs>

                <div className="mt-10">
                    <Link
                        href="/component-design-patterns"
                        className="inline-block px-6 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                    >
                        ← Back to Patterns
                    </Link>
                </div>
            </div>
        </main>
    )
}