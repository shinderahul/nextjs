import Image from 'next/image';
import Link from 'next/link';
import Navigation from './navigation';

const Header = () => {

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold flex-shrink-0">
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />
                </Link>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;