<section id="about" className="py-20 bg-background-primary">
  <div className="max-w-5xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
        The Story Behind SimplifAI
      </h2>
    </div>

    {/* Mission Statement */}
    <div className="max-w-3xl mx-auto mb-16">
      <p className="text-xl md:text-2xl text-text-primary leading-relaxed text-center">
        SimplifAI started with a mission: to help businesses overcome tedious processes and missed opportunities by building tools that make everyday work easier and more efficient.
      </p>
    </div>

    {/* Stats/Results Grid */}
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {/* ... unchanged grid/card content ... */}
    </div>

    {/* CTA */}
    <div className="text-center">
      <button
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="group bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-accent transition-all duration-300 inline-flex items-center space-x-2 shadow-xl"
      >
        <span>See What We Do</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>

  </div>
</section>
