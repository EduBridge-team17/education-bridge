import {
  Handshake,
  GraduationCap,
  Building2,
  WifiOff,
  BarChart3,
  Globe,
} from "lucide-react";

import classP from "../assets/images/classP.png";
import pupils from "../assets/images/pupils.png";

const Partnership = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-neutral-300 font-secondary">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-h1 font-primary font-bold text-primary-2000">
            How We Can Work Together
          </h2>

          <p className="mt-3 text-p3 text-neutral-2000">
            Whether you're an institution, NGO, or corporate organization,
            Education Bridge provides flexible partnership models that scale impact.
          </p>
        </div>

        {/* ================= TOP CARDS ================= */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* NGOs */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
              <Handshake className="text-secondary-700" size={20} />
            </div>

            <h3 className="text-h4 font-bold font-primary text-primary-2000 mb-2">
              NGOs & Non-Profits
            </h3>

            <p className="text-p3 text-neutral-2000 leading-relaxed">
              Deliver educational content to underserved communities with measurable impact reporting.
            </p>
          </div>

          {/* Schools */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="text-secondary-700" size={20} />
            </div>

            <h3 className="text-h4 font-bold font-primary text-primary-2000 mb-2">
              Schools
            </h3>

            <p className="text-p3 text-neutral-2000 leading-relaxed">
              Digitize your curriculum and empower teachers with offline-first learning tools.
            </p>
          </div>

          {/* CSR */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
              <Building2 className="text-secondary-700" size={20} />
            </div>

            <h3 className="text-h4 font-bold font-primary text-primary-2000 mb-2">
              CSR Partners
            </h3>

            <p className="text-p3 text-neutral-2000 leading-relaxed">
              Sponsor schools and track real-time data on student performance and engagement.
            </p>
          </div>
        </div>

        {/* ================= WHY CHOOSE SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* -------- LEFT SIDE: IMAGE COLLAGE -------- */}
          <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 pb-16 lg:pb-0">

            {/* Large Image */}
            <img
              src={classP}
              alt="classroom"
              className="w-[85%] rounded-2xl shadow-lg object-cover"
            />

            {/* Small Overlapping Image */}
            <img
              src={pupils}
              alt="pupils"
              className="w-[70%] rounded-2xl shadow-lg object-cover 
                         absolute bottom-0 right-0 translate-y-1/2 
                         border-4 border-white"
            />

            {/* Orange Floating Card */}
            <div className="absolute -top-6 right-[10%] 
                            bg-orange-500 text-white 
                            rounded-xl px-6 py-5 
                            shadow-xl w-[160px]">
              <p className="text-2xl font-bold">30%</p>
              <p className="text-xs mt-1 leading-snug">
                Average improvement in student test scores
              </p>
            </div>

          </div>

          {/* -------- RIGHT SIDE: TEXT CONTENT -------- */}
          <div>
            <h2 className="text-h1 font-primary font-bold text-primary-2000">
              Why Choose Education Bridge
            </h2>

            <p className="mt-3 text-p3 text-neutral-2000 leading-relaxed">
              Built specifically for Nigerian realities, our platform ensures
              learning continues regardless of internet access or device limitations.
            </p>

            <div className="mt-8 space-y-6">

              {/* Offline */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                  <WifiOff className="text-secondary-700" size={18} />
                </div>
                <div>
                  <h4 className="text-h4 font-bold font-primary text-primary-2000">
                    Truly Offline
                  </h4>
                  <p className="text-p3 text-neutral-2000 leading-relaxed">
                    Access lessons without continuous internet connectivity.
                  </p>
                </div>
              </div>

              {/* Insights */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                  <BarChart3 className="text-secondary-700" size={18} />
                </div>
                <div>
                  <h4 className="text-h4 font-bold font-primary text-primary-2000">
                    Data-Driven Insights
                  </h4>
                  <p className="text-p3 text-neutral-2000 leading-relaxed">
                    Monitor student performance and track measurable academic improvement.
                  </p>
                </div>
              </div>

              {/* Localized */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                  <Globe className="text-secondary-700" size={18} />
                </div>
                <div>
                  <h4 className="text-h4 font-bold font-primary text-primary-2000">
                    Localized Content
                  </h4>
                  <p className="text-p3 text-neutral-2000 leading-relaxed">
                    Curriculum aligned with Nigerian academic standards.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Partnership;