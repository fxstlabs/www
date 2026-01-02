import { Target, Eye } from "lucide-react";

export default function AboutUs() {
  return (
      <div className="bg-stone-50">
        {/* About Us Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
                About Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                We are dedicated to providing the best tools for creators. Our journey began with a simple idea: to make technology accessible and useful for everyone.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {/* Mission */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-lg ring-1 ring-stone-200/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -z-0" />
                <div className="relative z-10">
                  <div className="inline-flex rounded-xl bg-white p-3 shadow-sm ring-1 ring-stone-200">
                    <Target className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold leading-8 text-stone-900">
                    Our Mission
                  </h3>
                  <p className="mt-4 text-base leading-7 text-stone-700">
                    To empower individuals and businesses with innovative solutions that simplify complex problems and foster creativity.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg ring-1 ring-stone-200/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl -z-0" />
                <div className="relative z-10">
                  <div className="inline-flex rounded-xl bg-white p-3 shadow-sm ring-1 ring-stone-200">
                    <Eye className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold leading-8 text-stone-900">
                    Our Vision
                  </h3>
                  <p className="mt-4 text-base leading-7 text-stone-700">
                    A world where technology seamlessly integrates into daily life, enabling limitless possibilities and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}