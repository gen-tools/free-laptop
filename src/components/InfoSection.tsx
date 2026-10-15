import React from 'react';
import { BookOpen, CheckCircle, HelpCircle, FileText, Calendar, Truck } from 'lucide-react';

export default function InfoSection() {
  const steps = [
    {
      icon: <FileText className="w-6 h-6 text-gov-accent" />,
      title: '1. Online Evaluation',
      desc: 'Fill out the digital academic validation form on this portal to check instant regional quotas.',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-gov-accent" />,
      title: '2. Auto-Merit Review',
      desc: 'Our neural alignment filters cross-check details with high-level educational databases.',
    },
    {
      icon: <Truck className="w-6 h-6 text-gov-accent" />,
      title: '3. Verification & Dispatch',
      desc: 'Approved devices are safely wrapped and delivered to your institution within 14 working days.',
    },
  ];

  const criteria = [
    'Enrolled in an accredited public or private educational institution (School, College, or University).',
    'Minimum cumulative GPA of 2.50 or an academic standing scoring above 70%.',
    'No prior laptop or computing devices received from federal digital distribution programs.',
    'Valid student ID card, registration serial, and enrollment certificate.',
  ];

  const faqs = [
    {
      q: 'Is there any application fee for the laptop distribution program?',
      a: 'Absolutely not. This is a fully funded national digital equality scheme. Any portal or individual asking for processing fees or credit card numbers is fraudulent.',
    },
    {
      q: 'Can students under 18 years of age apply?',
      a: 'Yes! Enrolled secondary and higher school students can apply with their standard student registration identification key, verified by a guardian.',
    },
    {
      q: 'Which laptop models are being distributed in 2026?',
      a: 'Depending on academic level, we distribute the QuantumBook Air 14 (school/college) and the high-performance TitanBook Pro 15 (engineering/undergrad/research).',
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white flex flex-col gap-16" id="guidelines">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
        
        {/* Step-by-Step Distribution Process */}
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4.5xl font-serif font-black text-slate-900 tracking-tighter">
              How the Dispatch Program Works
            </h2>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mt-2">
              Three simple phases to secure, sanitize, and dispatch student computing assets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-6 rounded-none flex flex-col items-center text-center transition-all"
                id={`step-card-${idx}`}
              >
                <div className="p-4 bg-white shadow-xs rounded-none border border-slate-200 mb-4">
                  {step.icon}
                </div>
                <h3 className="font-bold text-base text-slate-900 font-serif italic">{step.title}</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Optimized Content Section */}
        <div className="bg-emerald-50/30 border border-emerald-100 p-8 md:p-12 rounded-none flex flex-col gap-6" id="seo-info-panel">
          <div className="border-b border-emerald-100 pb-4">
            <h2 className="text-2xl md:text-3.5xl font-serif font-black text-slate-900 tracking-tight">
              About the National Free Laptop Scheme 2026
            </h2>
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-800 mt-1">
              Official Digital Empowerment Guidelines & Initiative Overview
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-700 text-sm leading-relaxed">
            <div className="space-y-4">
              <p>
                Access to modern computing tools is an absolute necessity for quality education. To support students across academic levels, the 2026 initiative provides eligible applicants with a personal computer. Under the modern <strong className="text-slate-900 font-medium">free laptop scheme</strong>, scholars are assessed for hardware allocation based on merit, school registration, and stream requirements.
              </p>
              <p>
                Providing a <strong className="text-slate-900 font-medium">free laptop by government</strong> programs aims to ensure that no student falls behind due to a lack of technology. Every recipient receives a fully equipped, high-performance device that meets current digital literacy standards, perfect for research, development, and standard homework assignments.
              </p>
              <p>
                Through the digital outreach under the central <strong className="text-slate-900 font-medium">free laptop by government in India</strong> guidelines, regional distribution centers manage the shipping and delivery directly to schools and colleges. This eliminates overhead and ensures that hardware reaches tier-2 and tier-3 communities transparently.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Interested candidates can complete their verification process through the <strong className="text-slate-900 font-medium">free laptop scheme 2026 online apply</strong> page here. Our real-time evaluation wizard immediately maps applicant profiles, school credentials, and major fields of study to the correct hardware specifications.
              </p>
              <p>
                As part of the continuous rollout of the <strong className="text-slate-900 font-medium">free laptop scheme 2026</strong>, device allotments are prioritized based on academic achievement, socio-economic factors, and resource availability. We encourage all registered students to review their details carefully and submit their evaluations today.
              </p>
              <div className="p-4 bg-white border border-emerald-200/60 rounded-none text-xs text-emerald-800 font-medium">
                🔒 <strong>Portal Safety Verification:</strong> This is a secure portal. All applications submitted are processed in alignment with national academic device distribution frameworks.
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria & Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" id="institutes">
          <div className="bg-slate-50 border border-slate-200 rounded-none p-8 flex flex-col gap-6" id="eligibility-details-box">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <BookOpen className="w-6 h-6 text-gov-accent" />
              <h3 className="text-lg md:text-xl font-serif font-black text-slate-900 tracking-tight">
                Merit-Based Eligibility Rules
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {criteria.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                  <span className="text-emerald-600 shrink-0 mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-amber-50/50 rounded-none border border-amber-200 text-xs text-amber-800 leading-relaxed">
              <strong>Notice:</strong> High-performance devices (TitanBook Pro) require GPA verification from the respective dean's portal upon step validation.
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="flex flex-col gap-6" id="faqs">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <HelpCircle className="w-6 h-6 text-gov-accent" />
              <h3 className="text-lg md:text-xl font-serif font-black text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="flex flex-col gap-2" id={`faq-${idx}`}>
                  <h4 className="font-bold text-sm text-slate-900 md:text-base font-serif italic">
                    {faq.q}
                  </h4>
                  <p className="text-xs text-slate-500 md:text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
