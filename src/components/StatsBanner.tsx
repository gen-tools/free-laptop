import React, { useEffect, useState } from 'react';
import { Award, Laptop, Users, Landmark, HeartPulse } from 'lucide-react';

export default function StatsBanner() {
  const [distributedCount, setDistributedCount] = useState(412483);
  const [activeUsersToday, setActiveUsersToday] = useState(24812);

  // Increment counters periodically to simulate a busy official backend
  useEffect(() => {
    const interval = setInterval(() => {
      setDistributedCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
      setActiveUsersToday((prev) => prev + Math.floor(Math.random() * 2) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      id: 'stat-allocated',
      icon: <Landmark className="w-6 h-6 text-gov-accent" />,
      value: '$350,000,000',
      label: 'Fund Allocation',
      desc: 'FY2026 Digital Equality Budget',
    },
    {
      id: 'stat-delivered',
      icon: <Laptop className="w-6 h-6 text-gov-accent" />,
      value: distributedCount.toLocaleString(),
      label: 'Devices Issued',
      desc: 'Nationwide dispatch tracked in real-time',
    },
    {
      id: 'stat-students',
      icon: <Users className="w-6 h-6 text-gov-accent" />,
      value: activeUsersToday.toLocaleString(),
      label: 'Applicants Verified',
      desc: 'Active database sessions today',
    },
    {
      id: 'stat-merit',
      icon: <Award className="w-6 h-6 text-gov-accent" />,
      value: '94.2%',
      label: 'Approval Rate',
      desc: 'GPA and academic parameters verified',
    },
  ];

  const recentApprovals = [
    'Sarah J. (Boston University) - Approved TitanBook Pro',
    'Arjun M. (Stanford University) - Approved TitanBook Pro',
    'Xiao L. (MIT) - Approved QuantumBook Air',
    'Carlos R. (UT Austin) - Approved TitanBook Pro',
    'Elena K. (University of Chicago) - Approved QuantumBook Air',
    'Fatima A. (NYU) - Approved TitanBook Pro',
  ];

  return (
    <section className="w-full bg-slate-50 border-y border-slate-200 py-12 px-6 md:px-12" id="gov-stats">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-none border border-slate-200 flex items-start gap-4 hover:border-gov-accent transition-all"
              id={stat.id}
            >
              <div className="p-2.5 bg-slate-50 rounded-none border border-slate-100 shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3.5xl font-serif font-black text-slate-900 tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mt-2">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-400 mt-1 leading-normal">
                  {stat.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Status Ticker */}
        <div className="bg-gov-blue text-white py-3.5 px-6 rounded-none border border-emerald-950 overflow-hidden flex items-center shadow-xs" id="gov-ticker">
          <div className="bg-red-600 text-white font-bold text-[9px] px-2 py-1 shrink-0 uppercase tracking-widest animate-pulse flex items-center gap-1.5 mr-6">
            <span className="h-1.5 w-1.5 rounded-full bg-white inline-block"></span>
            LIVE APPROVALS
          </div>
          <div className="relative flex overflow-x-hidden w-full text-xs font-mono text-slate-200">
            <div className="animate-marquee whitespace-nowrap flex gap-12">
              {recentApprovals.map((approval, index) => (
                <span key={index} className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> {approval}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
