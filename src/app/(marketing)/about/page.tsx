import AboutContent from "@/components/aboutContent";

export async function generateMetadata() {
    return {
        title: "About | ArchitectKit",
        description: "Learn more about ArchitectKit, our mission, and the team behind it.",
    };
}

export default function About() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-8">
            <AboutContent />
        </main>
    );
}
