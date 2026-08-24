import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ClientScenarioSection } from './components/ClientScenarioSection';
import { ServicesSection } from './components/ServicesSection';
import { InfrastructureObservatorySection } from './components/InfrastructureObservatorySection';
import { OperationalDifferentiator } from './components/OperationalDifferentiator';
import { CompanyExperienceSection } from './components/CompanyExperienceSection';
import { CoverageMapSection } from './components/CoverageMapSection';
import { FaqSection } from './components/FaqSection';
import { TechnicalVisitModal } from './components/TechnicalVisitModal';
import { Footer } from './components/Footer';

export default function App() {
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [initialVisitData, setInitialVisitData] = useState<any>(undefined);

  const handleOpenVisitModal = (serviceTitle?: string, extraData?: any) => {
    setSelectedService(serviceTitle);
    setInitialVisitData(extraData);
    setVisitModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#254b7c] selection:text-white antialiased">
      {/* Header Navigation */}
      <Header
        onOpenVisitModal={handleOpenVisitModal}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenVisitModal={handleOpenVisitModal} />
        
        <CompanyExperienceSection onOpenVisitModal={handleOpenVisitModal} />
        
        <ServicesSection onOpenVisitModal={handleOpenVisitModal} />
        
        <OperationalDifferentiator />
        
        <InfrastructureObservatorySection onOpenVisitModal={handleOpenVisitModal} />
        
        <CoverageMapSection onOpenVisitModal={handleOpenVisitModal} />
        
        <ClientScenarioSection onOpenVisitModal={handleOpenVisitModal} />
        
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenVisitModal={() => handleOpenVisitModal()}
      />

      {/* Modals */}
      <TechnicalVisitModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
        preselectedService={selectedService}
        initialData={initialVisitData}
      />
    </div>
  );
}

