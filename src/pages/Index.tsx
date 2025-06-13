
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DatabaseSection from "@/components/DatabaseSection";
import ProfilesSection from "@/components/ProfilesSection";
import CompaniesSection from "@/components/CompaniesSection";
import EventsSection from "@/components/EventsSection";
import ChaptersSection from "@/components/ChaptersSection";
import DigitalCardSection from "@/components/DigitalCardSection";
import ChapterDashboard from "@/components/ChapterDashboard";
import NetworkSection from "@/components/NetworkSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <DatabaseSection />
      <ProfilesSection />
      <CompaniesSection />
      <EventsSection />
      <ChaptersSection />
      <DigitalCardSection />
      <ChapterDashboard />
      <NetworkSection />
      <Footer />
    </div>
  );
};

export default Index;
