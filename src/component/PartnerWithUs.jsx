import {
  Handshake,
  GraduationCap,
  Building2,
  CheckCircle2,
  ArrowRight,
  WifiOff,
  BarChart3,
  Globe,
} from "lucide-react";

import pupils from "../assets/images/pupils.png";
import classP from "../assets/images/classP.png";


const Partnership= () => {
  return (
    <section id ='partnership' className="bg-neutral-200 py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-28">

        <div>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-2000">
              How We Can Work Together
            </h2>
            <p className="mt-3 text-sm md:text-base text-neutral-2000">
              Whether you're an educational institution, a non-profit, or a
              corporation, there's a place for you in our ecosystem.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

           
            <div className="bg-neutral-100 rounded-2xl p-8 shadow-sm flex flex-col">
              <Handshake className="text-blue-600 mb-5" size={26} />

              <h3 className="text-lg font-semibold text-primary-2000 mb-3">
                NGOs & Non-Profits
              </h3>

              <p className="text-sm text-neutral-2000 leading-relaxed mb-6">
                Amplify your impact in rural communities using our scalable
                digital education infrastructure.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-orange-500 mt-0.5" />
                  <span className="text-sm text-neutral-2000">
                    Scalable content distribution
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-orange-500 mt-0.5" />
                  <span className="text-sm text-neutral-2000">
                    Impact measurement tools
                  </span>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-1 text-orange-500 text-sm font-medium cursor-pointer">
                Partner as NGO
                <ArrowRight size={14} />
              </div>
            </div>

            <div className="bg-neutral-100 rounded-2xl p-8 shadow-sm flex flex-col">
              <GraduationCap className="text-orange-600 mb-5" size={26} />

              <h3 className="text-lg font-semibold text-primary-2000 mb-3">
                Schools
              </h3>

              <p className="text-sm text-neutral-2000 leading-relaxed mb-6">
                Digitize your curriculum without internet dependency and empower
                students with modern learning tools.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-orange-500 mt-0.5" />
                  <span className="text-sm text-neutral-2000">
                    Offline-first digital library
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-orange-500 mt-0.5" />
                  <span className="text-sm text-neutral-2000">
                    Teacher training modules
                  </span>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-1 text-orange-500 text-sm font-medium cursor-pointer">
                Equip Your School
                <ArrowRight size={14} />
              </div>
            </div>
            <div className="bg-neutral-100 rounded-2xl p-8 shadow-sm flex flex-col">
              <Building2 className="text-green-600 mb-5" size={26} />

              <h3 className="text-lg font-semibold text-primary-2000 mb-3">
                CSR Partners
              </h3>

              <p className="text-sm text-neutral-2000 leading-relaxed mb-6">
                Meet sustainability goals while sponsoring measurable
                educational impact across communities.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-orange-500 mt-0.5" />
                  <span className="text-sm text-neutral-2000">
                    Detailed impact reporting
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-orange-500 mt-0.5" />
                  <span className="text-sm text-neutral-2000">
                    Brand visibility in communities
                  </span>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-1 text-orange-500 text-sm font-medium cursor-pointer">
                Sponsor Change
                <ArrowRight size={14} />
              </div>
            </div>

          </div>
        </div>

       
        {/* WHY CHOOSE US */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
         
          <div className="space-y-6">
            <img
              src={pupils}
              alt="Education technology"
              className="rounded-2xl object-cover w-full h-64 md:h-80"
            />

            <div className="grid grid-cols-2 gap-6">
              <img
                src={classP}
                alt="Students learning"
                className="rounded-2xl object-cover h-40 w-full"
              />

              <div className="bg-secondary-700 text-white rounded-2xl flex flex-col items-center justify-center p-6 text-center">
                <p className="text-3xl font-bold">30%</p>
                <p className="text-sm mt-2">
                  Improvement in test scores within 6 months
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-2000">
              Why Choose Us
            </h2>

            <p className="mt-4 text-sm md:text-base text-neutral-2000 leading-relaxed">
              We provide a complete ecosystem built for low-connectivity
              environments. Our infrastructure ensures access, measurement, and
              long-term impact.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex gap-4">
                <WifiOff className="text-secondary-700 mt-1" size={22} />
                <div>
                  <h4 className="font-semibold text-primary-2000">
                    Truly Offline
                  </h4>
                  <p className="text-sm text-neutral-2000">
                    Learn uninterrupted without internet connectivity.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <BarChart3 className="text-secondary-700 mt-1" size={22} />
                <div>
                  <h4 className="font-semibold text-primary-2000">
                    Data-Driven Impact
                  </h4>
                  <p className="text-sm text-neutral-2000">
                    Track performance and engagement in real time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Globe className="text-secondary-700 mt-1" size={22} />
                <div>
                  <h4 className="font-semibold text-primary-2000">
                    Localized Curriculum
                  </h4>
                  <p className="text-sm text-neutral-2000">
                    Content aligned with national standards and local context.
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