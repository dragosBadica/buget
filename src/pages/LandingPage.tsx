import React from 'react';
import HeroForm from '../components/HeroForm';
import Benefits from '../components/Benefits';
import Trust from '../components/Trust';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroForm />
      <Benefits />
      <Trust />
      <Footer />
    </div>
  );
}