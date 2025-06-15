
import Header from "@/components/Header";
import ChaptersSection from "@/components/ChaptersSection";
import ChapterDashboard from "@/components/ChapterDashboard";
import Footer from "@/components/Footer";

const Chapters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ChaptersSection />
      <ChapterDashboard />
      <Footer />
    </div>
  );
};

export default Chapters;
