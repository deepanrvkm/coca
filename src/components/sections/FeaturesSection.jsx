'use client';

import React, { useState, useEffect } from 'react';
import FeatureBlock from '../blocks/FeatureBlock';
import LoadingPage from '@/app/loading';

const FeaturesSection = () => {
    const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/features');
                const data = await response.json();
                if (Array.isArray(data)) {
                    setFeatures(data);
                } else {
                    throw new Error('Invalid data format: expected an array');
                }
            } catch (error) {
                console.error('Error fetching features:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFeatures();
    }, []);

    if (loading) return <LoadingPage />;

    return (
        <section className="features py-16">
            <div className="container mx-auto">
                <h2 className="mb-8 text-4xl md:text-5xl xl:text-6xl font-medium text-[#19191C] xl:w-[70%]">
                    Complementary features for your business needs
                </h2>

                {features.map((feature, index) => (
                    <FeatureBlock key={index} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
