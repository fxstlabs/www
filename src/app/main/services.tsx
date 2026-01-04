export default function MainServices() {
  const services = [
    {
      title: "Manufacturing",
      href: "services/manufacturing",
      description: "High-quality manufacturing tailored to your needs.",
      image: "/images/pages/services/manufacturing/main-cover.jpg",
      className: "lg:col-span-2 lg:row-span-2",
      gradient: "from-blue-500/80 to-purple-600/80"
    },
    {
      title: "Automation",
      href: "services/automation",
      description: "Streamline your operations with our cutting-edge automation tools.",
      image: "/images/pages/services/automation/main-cover.jpg",
      className: "lg:col-span-1 lg:row-span-1",
      gradient: "from-pink-500/80 to-rose-600/80"
    },
    {
      title: "Software",
      href: "services/software",
      description: "User-centric software to power your creativity.",
      image: "/images/pages/services/software/main-cover.jpg",
      className: "lg:col-span-1 lg:row-span-1",
      gradient: "from-cyan-500/80 to-blue-600/80"
    },
    {
      title: "Quality and Process Control",
      href: "services/quality-control",
      description: "Ensuring excellence and consistency in every step of your process.",
      image: "/images/pages/services/quality-control/main-cover.jpg",
      className: "lg:col-span-1 lg:row-span-1",
      gradient: "from-emerald-500/80 to-teal-600/80"
    },
    {
      title: "Education",
      href: "services/education",
      description: "Empowering you and your team with the knowledge and skills to succeed.",
      image: "/images/pages/services/education/main-cover.jpg",
      className: "lg:col-span-2 lg:row-span-1",
      gradient: "from-amber-500/80 to-orange-600/80"
    },
  ];

  return (
      <div className="bg-stone-300" id="services">
        {/* Services Bento Grid */}

        <section className="py-16 lg:py-20 bg-stone-200 min-h-screen flex flex-col justify-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl font-display">
                Our Services
              </h2>
              <p className="mt-4 text-base lg:text-lg leading-7 text-stone-600">
                We offer a comprehensive range of services to help your business thrive in a rapidly evolving landscape.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="mx-auto mt-10 lg:mt-12 grid max-w-2xl grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:grid-rows-2" style={{ maxHeight: '600px' }}>
              {services.map((service) => (
                  <div
                      key={service.title}
                      className={`relative group overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-200/50 transition-all duration-500 hover:shadow-2xl hover:ring-stone-300 ${service.className}`}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-500`} />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Content */}
                    <a href={service.href}>
                      <div className="relative z-10 flex flex-col h-full justify-end p-6 lg:p-8">
                        <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                          <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight font-display">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-sm lg:text-base text-white/95 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Hover Arrow */}
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center text-white text-sm font-medium">
                        Learn more
                        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                        </div>
                      </div>
                    </a>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </div>
  );
}