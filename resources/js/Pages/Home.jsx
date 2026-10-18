import { Head } from '@inertiajs/react';
import { NoiseOverlay } from '@/Components/common/NoiseOverlay';
import { ScrollProgressBar } from '@/Components/common/ScrollProgressBar';
import { FloatingWhatsApp } from '@/Components/common/FloatingWhatsApp';
import { Navbar } from '@/Components/layout/Navbar';
import { Footer } from '@/Components/layout/Footer';
import { HeroSection } from '@/Components/home/HeroSection';
import { TransportSection } from '@/Components/home/TransportSection';
import { StaysSection } from '@/Components/home/StaysSection';
import { LaundrySection } from '@/Components/home/LaundrySection';
import { AboutSection } from '@/Components/home/AboutSection';
import { Gallery } from '@/Components/home/Gallery';

export default function Home({ stays = [], laundryServices = [] }) {
    return (
        <>
            <Head title="ZAI Tours & Stays — Move. Stay. Fresh." />

            <div className="relative min-h-screen bg-[#0E0E0F] text-[#F5F1EB] antialiased selection:bg-[#FF5A2C] selection:text-white overflow-x-hidden max-w-[100vw] pt-[57px]">
                {/* Noise background texture */}
                <NoiseOverlay />

                {/* Top scroll reading progress bar */}
                <ScrollProgressBar />

                {/* Main navigation */}
                <Navbar />

                {/* Main content sections */}
                <main>
                    <HeroSection />
                    <TransportSection />
                    <StaysSection stays={stays} />
                    <LaundrySection laundryServices={laundryServices} />
                    <AboutSection />
                    <Gallery />
                </main>

                {/* Footer and contact section */}
                <Footer />

                {/* Floating fast contact button */}
                <FloatingWhatsApp />
            </div>
        </>
    );
}
