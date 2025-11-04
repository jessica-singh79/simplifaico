function App() {
  return (
    <div className="relative min-h-screen">
      <NavBarDemo />

      {/* Hero Section */}
      <section className="relative z-10">
        <Hero />
      </section>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
        <About />
        <Services />
        <WhySimplifAISection />
        <Footer />
      </div>
    </div>
  );
}
