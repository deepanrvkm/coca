'use client'
import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscription = async () => {
        if (!email) {
            setMessage('Please enter a valid email address.');
            return;
        }

        try {
            const response = await axios.post('/api/subscribe', { email });

            if (response.status === 200) {
                setMessage('Successfully subscribed!');
                setEmail('');
            } else {
                setMessage('Failed to subscribe. Please try again.');
            }
        } catch (error) {
            console.error('Error subscribing:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="relative w-full lg:w-[90%] h-[64px]">
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 px-8 rounded-full bg-[#232329] text-white w-full h-full focus:outline-none border border-[#35353d]"
            />
            <button
                onClick={handleSubscription}
                className="absolute right-[6px] top-1/2 transform -translate-y-1/2 bg-[#FF5C00] text-white h-[52px] px-8 rounded-full hover:bg-[#e35500]"
            >
                Subscribe
            </button>
            {message && <p className="text-sm text-red-500 mt-2 pl-8">{message}</p>}
        </div>
    );
};

export default Newsletter;
