'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';
import { Coca } from '@/assets/images';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { setSession, clearSession } from '@/store/slice/sessionSlice';

const Header = () => {
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state) => state.user.user);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const pathname = usePathname();

    useEffect(() => {
        if (session) {
            dispatch(setSession({ user: session.user }));
        } else {
            dispatch(clearSession());
        }
    }, [session, dispatch]);

    useEffect(() => {
        setActiveLink(pathname);
    }, [pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (path) => {
        setActiveLink(path);
        setIsMenuOpen(false);
    };

    return (
        <header className="relative z-99">
            <div className="container mx-auto flex items-center justify-between py-6">
                <div className="flex items-center">
                    <Link href="/">
                        <Image src={Coca} alt="Coca Logo" />
                    </Link>
                </div>
                <nav className="hidden lg:flex">
                    <ul className="flex p-0 list-none m-0 space-x-4">
                        <li>
                            <Link
                                href="/"
                                className={`px-6 py-2 text-black font-medium no-underline hover:text-orange-500 ${activeLink === '/' ? 'rounded-full bg-black text-white mb-2' : ''
                                    }`}
                                onClick={() => handleLinkClick('/')}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/features"
                                className={`px-6 py-2 text-black font-medium no-underline hover:text-orange-500 ${activeLink === '/features' ? 'rounded-full bg-black text-white mb-2' : ''
                                    }`}
                                onClick={() => handleLinkClick('/features')}
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pricing"
                                className={`px-6 py-2 text-black font-medium no-underline hover:text-orange-500 ${activeLink === '/pricing' ? 'rounded-full bg-black text-white mb-2' : ''
                                    }`}
                                onClick={() => handleLinkClick('/pricing')}
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className={`px-6 py-2 text-black font-medium no-underline hover:text-orange-500 ${activeLink === '/blog' ? 'rounded-full bg-black text-white mb-2' : ''
                                    }`}
                                onClick={() => handleLinkClick('/blog')}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/resource"
                                className={`px-6 py-2 text-black font-medium no-underline hover:text-orange-500 ${activeLink === '/resource' ? 'rounded-full bg-black text-white mb-2' : ''
                                    }`}
                                onClick={() => handleLinkClick('/resource')}
                            >
                                Resource
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    {isAuthenticated ? (
                        <>
                            <div className="flex items-center space-x-2">
                                {user?.image && (
                                    <div className="border border-color-gray-200 rounded-full p-1">
                                        <Image
                                            src={user.image}
                                            alt={user.name}
                                            width={32}
                                            height={32}
                                            className="rounded-full"
                                        />
                                    </div>
                                )}
                                <span className="font-medium">{user.name}</span>
                            </div>
                            <button className="btn" onClick={() => signOut()}>
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <button className="btn" onClick={() => signIn('google')}>
                            Sign In
                        </button>
                    )}
                    <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
                        <FaBars className="text-black text-2xl" />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-50 border-t border-t-gray-200">
                    <ul className="flex flex-col items-center space-y-4 py-8">
                        <li>
                            <Link
                                href="/"
                                className={`px-6 py-2 text-black font-medium no-underline hover:text-orange-500 ${activeLink === '/' ? 'rounded-full bg-black text-white flex mb-1' : ''
                                    }`}
                                onClick={() => handleLinkClick('/')}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/features"
                                className={`px-6 py-2 text-black font-medium no-underline hover:text-orange-500 ${activeLink === '/features' ? 'rounded-full bg-black text-white flex mb-1' : ''
                                    }`}
                                onClick={() => handleLinkClick('/features')}
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pricing"
                                className={`px-6 py-2 text-black font-medium no-underline hover:text-orange-500 ${activeLink === '/pricing' ? 'rounded-full bg-black text-white flex mb-1' : ''
                                    }`}
                                onClick={() => handleLinkClick('/pricing')}
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className={`px-6 py-2 text-black font-medium no-underline hover:text-orange-500 ${activeLink === '/blog' ? 'rounded-full bg-black text-white flex mb-1' : ''
                                    }`}
                                onClick={() => handleLinkClick('/blog')}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/resource"
                                className={`px-6 py-2 text-black font-medium no-underline hover:text-orange-500 ${activeLink === '/resource' ? 'rounded-full bg-black text-white flex mb-1' : ''
                                    }`}
                                onClick={() => handleLinkClick('/resource')}
                            >
                                Resource
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;