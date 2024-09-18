'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/assets/images';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import {Newsletter} from '../blocks';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-4 md:px-6 lg:px-8">
            <div className="bg-[#1b1b1e] text-white">
                <div className="container mx-auto py-16 px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 pt-8 pb-4">
                        <div className="flex flex-col justify-between">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-medium mb-8">Don&apos;t Miss This Exclusive Opportunity</h2>
                                <p className="text-lg">Enter your email address and start connecting with a better business world using our POS products.</p>
                            </div>
                        </div>
                        <div className="flex items-end md:justify-end">
                            <Newsletter />
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-14">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <Link href="/" className="flex items-center mb-4 md:mb-0">
                                <Image src={Logo} alt="Coca Logo" className="mr-2" />
                            </Link>
                            <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-6 md:mb-0">
                                <Link href="/features" className="text-sm hover:text-[#FF5C00] mb-2 md:mb-0">Features</Link>
                                <Link href="/pricing" className="text-sm hover:text-[#FF5C00] mb-2 md:mb-0">Pricing</Link>
                                <Link href="/blog" className="text-sm hover:text-[#FF5C00] mb-2 md:mb-0">Blog</Link>
                                <Link href="/resource" className="text-sm hover:text-[#FF5C00] mb-2 md:mb-0">Resource</Link>
                                <Link href="/terms" className="text-sm hover:text-[#FF5C00] mb-2 md:mb-0">Terms & Conditions</Link>
                                <Link href="/privacy" className="text-sm hover:text-[#FF5C00]">Privacy Policy</Link>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between md:mt-8">
                            <div className="text-sm text-gray-400 pt-4 pb-8 md:pb-0">© {currentYear} Coca, Inc. All rights reserved.</div>
                            <div className="flex items-center space-x-8 bg-[#232329] rounded-full py-4 px-6">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white inline-flex hover:text-[#FF5C00]">
                                    <FaFacebookF className="text-[24px]" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white inline-flex hover:text-[#FF5C00]">
                                    <FaInstagram className="text-[24px]" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white inline-flex hover:text-[#FF5C00]">
                                    <FaTwitter className="text-[24px]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
