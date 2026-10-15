import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, Cpu, HardDrive, Smartphone, Sparkles, Check, 
  Terminal, ShieldCheck, AlertTriangle, Fingerprint, RefreshCw, Copy, CheckCircle2 
} from 'lucide-react';
import { WizardStep, StudentFormData, ScannerLog } from '../types';
import PrankCustomize from './PrankCustomize';

interface EligibilityCheckerProps {
  initialFriendName?: string;
}

export default function EligibilityChecker({ initialFriendName }: EligibilityCheckerProps) {
  const [step, setStep] = useState<WizardStep>('FORM');
  const [formData, setFormData] = useState<StudentFormData>({
    fullName: initialFriendName || '',
    rollNumber: '',
    institution: '',
    academicLevel: 'UNDERGRAD',
    gpa: '',
    preferredModel: 'TITANBOOK_PRO_15',
    preferredColor: 'SLATE_GRAY',
    hoursStudied: 4,
  });

  const [scanProgress, setScanProgress] = useState(0);
  const [currentLogs, setCurrentLogs] = useState<string[]>([]);
  const [activeLogIndex, setActiveLogIndex] = useState(0);
  
  // Calibration State
  const [calibrating, setCalibrating] = useState(false);
  const [calibrationProgress, setCalibrationProgress] = useState(0);
  const calibrationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const logs: ScannerLog[] = [
    { id: 1, text: '🔍 Initializing security handshake with regional network gateways...', status: 'info', delay: 400 },
    { id: 2, text: '🔑 Establishing SSL-encrypted tunneling (AES-256-GCM)...', status: 'success', delay: 700 },
    { id: 3, text: '🌐 Parsing school/institution record registers...', status: 'info', delay: 1100 },
    { id: 4, text: `🏫 Checking academic status of "${formData.institution || 'Enrolled Student'}"...`, status: 'info', delay: 1500 },
    { id: 5, text: '📈 Extracting national student database records...', status: 'info', delay: 1900 },
    { id: 6, text: `🎓 Verified enrollment credentials & student serial ID...`, status: 'success', delay: 2300 },
    { id: 7, text: `📊 Comparing GPA of ${formData.gpa || '3.80'} with national merit thresholds...`, status: 'info', delay: 2800 },
    { id: 8, text: '✨ MERIT CRITERIA EXCEEDED: Student categorized as "Highly Outstanding"!', status: 'success', delay: 3200 },
    { id: 9, text: '📦 Cross-checking physical stock reserves at nearest fulfillment facility...', status: 'info', delay: 3700 },
    { id: 10, text: `🛡️ Reserving hardware: ${formData.preferredModel === 'TITANBOOK_PRO_15' ? 'TitanBook Pro 15"' : 'QuantumBook Air 14"'} (${formData.preferredColor})`, status: 'success', delay: 4200 },
    { id: 11, text: '📝 Pre-registration parameters signed. Handing over to regional dispatcher...', status: 'success', delay: 4800 },
  ];

  // Run scanning animation when step is set to SCANNING
  useEffect(() => {
    if (step !== 'SCANNING') return;

    setScanProgress(0);
    setCurrentLogs([]);
    setActiveLogIndex(0);

    const logPromises = logs.map((log) => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          setCurrentLogs((prev) => [...prev, log.text]);
          // Scale progress with logs
          setScanProgress(Math.min(100, Math.floor((log.id / logs.length) * 100)));
          resolve();
        }, log.delay);
      });
    });

    Promise.all(logPromises).then(() => {
      setTimeout(() => {
        setStep('APPROVED');
      }, 800);
    });

  }, [step]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.institution.trim()) {
      alert('Please fill out all required fields to verify your digital quota.');
      return;
    }
    setStep('SCANNING');
  };

  // Calibration Press handlers
  const handleCalibrationStart = () => {
    setCalibrating(true);
    setCalibrationProgress(0);
    
    calibrationIntervalRef.current = setInterval(() => {
      setCalibrationProgress((prev) => {
        if (prev >= 100) {
          if (calibrationIntervalRef.current) clearInterval(calibrationIntervalRef.current);
          setTimeout(() => {
            setStep('PRANK');
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const handleCalibrationEnd = () => {
    setCalibrating(false);
    if (calibrationIntervalRef.current) {
      clearInterval(calibrationIntervalRef.current);
    }
    if (calibrationProgress < 100) {
      setCalibrationProgress(0);
    }
  };

  // Cleanup calibration on unmount
  useEffect(() => {
    return () => {
      if (calibrationIntervalRef.current) clearInterval(calibrationIntervalRef.current);
    };
  }, []);

  const resetAll = () => {
    setStep('FORM');
    setFormData({
      fullName: '',
      rollNumber: '',
      institution: '',
      academicLevel: 'UNDERGRAD',
      gpa: '',
      preferredModel: 'TITANBOOK_PRO_15',
      preferredColor: 'SLATE_GRAY',
      hoursStudied: 4,
    });
    setScanProgress(0);
    setCalibrationProgress(0);
    setCalibrating(false);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12 scroll-mt-24" id="checker">
      <div className="w-full bg-white rounded-none border border-slate-200 shadow-md overflow-hidden">
        
        {/* Portal Header */}
        <div className="bg-gov-blue text-white py-4 px-6 md:px-8 border-b border-emerald-950 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-mono text-[10px] text-emerald-200 tracking-wider">SYSTEM SECURE // PORTAL-901</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-200">
            Pre-Approval Evaluation
          </span>
        </div>

        <div className="p-6 md:p-10">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: EVALUATION FORM */}
            {step === 'FORM' && (
              <motion.div
                key="step-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col gap-8"
              >
                <div className="text-center">
                  <h2 className="text-3xl md:text-4.5xl font-serif font-black text-slate-900 tracking-tighter">
                    Student Academic Quota Evaluation Form
                  </h2>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mt-2">
                    Submit your academic parameters to check physical device availability in your regional district.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6" id="eligibility-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="full-name" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                        Full Name (as on student ID) <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="full-name"
                        type="text"
                        required
                        placeholder="Johnathan Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="p-3 border border-slate-300 rounded-none text-sm focus:ring-1 focus:ring-gov-accent focus:border-gov-accent outline-none transition-all"
                      />
                    </div>

                    {/* Roll Number */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="roll-number" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                        Student ID / Registration Roll No <span className="text-slate-400">(optional)</span>
                      </label>
                      <input
                        id="roll-number"
                        type="text"
                        placeholder="e.g. STU-2026-9812"
                        value={formData.rollNumber}
                        onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                        className="p-3 border border-slate-300 rounded-none text-sm focus:ring-1 focus:ring-gov-accent focus:border-gov-accent outline-none transition-all"
                      />
                    </div>

                    {/* Educational Institution */}
                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label htmlFor="institution" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                        Enrolled School / University Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="institution"
                        type="text"
                        required
                        placeholder="State University of Information Technology"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="p-3 border border-slate-300 rounded-none text-sm focus:ring-1 focus:ring-gov-accent focus:border-gov-accent outline-none transition-all"
                      />
                    </div>

                    {/* Academic Level */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="academic-level" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                        Current Academic Level <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="academic-level"
                        value={formData.academicLevel}
                        onChange={(e) => setFormData({ ...formData, academicLevel: e.target.value })}
                        className="p-3 border border-slate-300 rounded-none text-sm focus:ring-1 focus:ring-gov-accent focus:border-gov-accent outline-none bg-white cursor-pointer"
                      >
                        <option value="HIGH_SCHOOL">High School / Matriculation</option>
                        <option value="COLLEGE">Higher Secondary / College</option>
                        <option value="UNDERGRAD">Undergraduate / Bachelors</option>
                        <option value="POSTGRAD">Postgraduate / Masters &amp; PhD</option>
                      </select>
                    </div>

                    {/* GPA / Marks */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="gpa" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                        Current GPA or Academic Score <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="gpa"
                        type="text"
                        required
                        placeholder="e.g. 3.85 / 4.00 or 88%"
                        value={formData.gpa}
                        onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                        className="p-3 border border-slate-300 rounded-none text-sm focus:ring-1 focus:ring-gov-accent focus:border-gov-accent outline-none transition-all"
                      />
                    </div>

                    {/* Laptop Hardware Selection Card */}
                    <div className="flex flex-col gap-1.5 md:col-span-2 border-t border-slate-200 pt-4 mt-2">
                      <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                        Preferred Hardware Model
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        {/* Option 1: TitanBook */}
                        <div
                          onClick={() => setFormData({ ...formData, preferredModel: 'TITANBOOK_PRO_15' })}
                          className={`p-4 rounded-none border cursor-pointer flex flex-col gap-2 transition-all ${
                            formData.preferredModel === 'TITANBOOK_PRO_15'
                              ? 'border-gov-accent bg-emerald-50/15'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                          id="hw-titanbook-card"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-sm text-slate-900 font-serif italic">TitanBook Pro 15"</span>
                            {formData.preferredModel === 'TITANBOOK_PRO_15' && (
                              <span className="h-4 w-4 bg-gov-accent text-white rounded-full flex items-center justify-center text-[10px]">✓</span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 leading-normal">
                            High-fidelity core designed for programming, simulation, and multi-threaded calculations.
                          </p>
                          <div className="flex gap-2 text-[9px] text-slate-500 font-mono mt-1">
                            <span className="bg-slate-50 px-2 py-0.5 rounded-none border border-slate-100 flex items-center gap-1"><Cpu className="w-3 h-3 text-gov-accent" /> Core i9</span>
                            <span className="bg-slate-50 px-2 py-0.5 rounded-none border border-slate-100 flex items-center gap-1"><HardDrive className="w-3 h-3 text-gov-accent" /> 32GB RAM</span>
                          </div>
                        </div>

                        {/* Option 2: QuantumBook */}
                        <div
                          onClick={() => setFormData({ ...formData, preferredModel: 'QUANTUMBOOK_AIR_14' })}
                          className={`p-4 rounded-none border cursor-pointer flex flex-col gap-2 transition-all ${
                            formData.preferredModel === 'QUANTUMBOOK_AIR_14'
                              ? 'border-gov-accent bg-emerald-50/15'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                          id="hw-quantumbook-card"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-sm text-slate-900 font-serif italic">QuantumBook Air 14"</span>
                            {formData.preferredModel === 'QUANTUMBOOK_AIR_14' && (
                              <span className="h-4 w-4 bg-gov-accent text-white rounded-full flex items-center justify-center text-[10px]">✓</span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 leading-normal">
                            Lightweight and power-efficient profile. Optimal companion for writing and daily lectures.
                          </p>
                          <div className="flex gap-2 text-[9px] text-slate-500 font-mono mt-1">
                            <span className="bg-slate-50 px-2 py-0.5 rounded-none border border-slate-100 flex items-center gap-1"><Cpu className="w-3 h-3 text-gov-accent" /> Ryzen 7</span>
                            <span className="bg-slate-50 px-2 py-0.5 rounded-none border border-slate-100 flex items-center gap-1"><HardDrive className="w-3 h-3 text-gov-accent" /> 16GB RAM</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Color selection */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="pref-color" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                        Hardware Exterior Color <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="pref-color"
                        value={formData.preferredColor}
                        onChange={(e) => setFormData({ ...formData, preferredColor: e.target.value })}
                        className="p-3 border border-slate-300 rounded-none text-sm focus:ring-1 focus:ring-gov-accent focus:border-gov-accent outline-none bg-white cursor-pointer"
                      >
                        <option value="SLATE_GRAY">Slate Gray (Executive Matte)</option>
                        <option value="PLATINUM_SILVER">Platinum Silver (Metallic)</option>
                        <option value="MIDNIGHT_GOLD">Midnight Gold (Limited Edition)</option>
                      </select>
                    </div>

                    {/* Study Hours Slider */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                        <span>Daily Academic Study Hours</span>
                        <span className="text-gov-accent font-mono font-black">{formData.hoursStudied} Hours / Day</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="16"
                        value={formData.hoursStudied}
                        onChange={(e) => setFormData({ ...formData, hoursStudied: parseInt(e.target.value) })}
                        className="h-2 bg-slate-200 rounded-none appearance-none cursor-pointer accent-gov-accent mt-4"
                      />
                    </div>

                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gov-accent text-white font-sans font-black py-4 rounded-none text-xs tracking-widest uppercase hover:bg-blue-800 transition-all shadow-md mt-6 cursor-pointer"
                    id="submit-evaluation-btn"
                  >
                    Evaluate Digital Eligibility Status
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 2: ANIMATED SCANNING */}
            {step === 'SCANNING' && (
              <motion.div
                key="step-scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center py-6"
              >
                <div className="w-16 h-16 bg-emerald-50/50 flex items-center justify-center border border-gov-accent animate-spin relative mb-6">
                  <Laptop className="w-8 h-8 text-gov-accent" />
                </div>

                <h3 className="text-2xl md:text-3xl font-serif font-black text-slate-900 text-center tracking-tight">
                  Conducting Verification Matrix Scan...
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 text-center mt-2">
                  Communicating securely with high-level academic registers. Please hold.
                </p>

                {/* Main Progress Bar */}
                <div className="w-full max-w-lg bg-slate-100 h-3 rounded-none overflow-hidden mt-8 border border-slate-200">
                  <motion.div
                    className="bg-gov-accent h-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${scanProgress}%` }}
                    transition={{ ease: 'easeInOut' }}
                  />
                </div>
                <span className="text-xs font-mono font-black text-gov-accent mt-3">
                  {scanProgress}% COMPLETE
                </span>

                {/* Console Log Terminal Box */}
                <div className="w-full max-w-xl bg-slate-900 rounded-none p-4 border border-slate-800 text-xs font-mono text-emerald-400 mt-8 shadow-inner overflow-hidden h-48 flex flex-col justify-end" id="scanning-terminal">
                  <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2 mb-2 text-slate-500">
                    <Terminal className="w-4 h-4" />
                    <span>SECURE ACADEMIC LOG INTERNET PROTOCOL</span>
                  </div>
                  <div className="flex flex-col gap-1.5 overflow-y-auto max-h-36 font-sans">
                    {currentLogs.map((log, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[11px] leading-relaxed flex items-start gap-1.5"
                      >
                        <span className="text-emerald-600 font-mono">▸</span>
                        <span className="text-slate-200">{log}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: PRE-APPROVED SHIELD */}
            {step === 'APPROVED' && (
              <motion.div
                key="step-approved"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-8 py-4"
              >
                {/* Merit Ribbon/Badge */}
                <div className="relative">
                  <div className="h-24 w-24 bg-emerald-50 rounded-full border-4 border-emerald-500 flex items-center justify-center">
                    <ShieldCheck className="w-14 h-14 text-emerald-600" />
                  </div>
                  <div className="absolute top-16 -right-2 bg-gov-blue text-white font-black font-mono text-[9px] py-1 px-2.5 rounded-none border border-emerald-950 shadow-sm">
                    100% MERIT MATCH
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl md:text-4.5xl font-serif font-black text-slate-900 tracking-tighter">
                    Digital Allocation Quota: APPROVED
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mt-2 max-w-xl mx-auto leading-normal">
                    Excellent standing detected! A hardware resource has been securely mapped to your student profile details.
                  </p>
                </div>

                {/* Approved Hardware details */}
                <div className="w-full max-w-xl bg-slate-50 border border-slate-200 rounded-none p-6 flex flex-col md:flex-row gap-6 items-center shadow-xs" id="approved-spec-card">
                  <div className="p-5 bg-white border border-slate-200 rounded-none text-gov-accent shadow-xs shrink-0 flex items-center justify-center">
                    <Laptop className="w-16 h-16" />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <span className="text-lg font-black text-slate-900 font-serif italic">
                        {formData.preferredModel === 'TITANBOOK_PRO_15' ? 'TitanBook Pro 15"' : 'QuantumBook Air 14"'}
                      </span>
                      <span className="bg-emerald-50 text-emerald-800 font-bold text-[9px] px-2.5 py-1 rounded-none uppercase font-mono border border-emerald-100">
                        IN STOCK
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-500 mt-2 font-sans">
                      <div>🛠️ Processor: <strong className="text-slate-800">{formData.preferredModel === 'TITANBOOK_PRO_15' ? 'Core i9 vPro 5.2GHz' : 'Ryzen 7 Pro'}</strong></div>
                      <div>💾 Memory: <strong className="text-slate-800">{formData.preferredModel === 'TITANBOOK_PRO_15' ? '32GB LPDDR5X' : '16GB DDR5'}</strong></div>
                      <div>🎨 Exterior: <strong className="text-slate-800">{formData.preferredColor.replace('_', ' ')}</strong></div>
                      <div>📦 Class Alloc: <strong className="text-slate-800">Merit VIP</strong></div>
                    </div>
                  </div>
                </div>

                {/* INSTRUCTION FOR CALIBRATION PRANK TRIGGER */}
                <div className="w-full max-w-xl bg-amber-50/50 border border-amber-200 p-6 rounded-none flex flex-col items-center text-center gap-4" id="calibration-box">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-[10px] uppercase tracking-widest font-sans">
                    <Fingerprint className="w-5 h-5 text-amber-700 animate-pulse" />
                    Security Stage 2: Hardware Touchpad Calibration
                  </div>
                  <p className="text-xs text-amber-800 leading-relaxed max-w-md font-sans">
                    To prevent automated scraping bots and to calibrate your future mouse trackpad for optimal hand pressure, <strong>press and hold</strong> your finger on the scanner block below until calibration reaches 100%.
                  </p>

                  {/* Calibration Fingerprint Hold pad */}
                  <div className="flex flex-col items-center gap-2 mt-2">
                    <button
                      onMouseDown={handleCalibrationStart}
                      onMouseUp={handleCalibrationEnd}
                      onMouseLeave={handleCalibrationEnd}
                      onTouchStart={handleCalibrationStart}
                      onTouchEnd={handleCalibrationEnd}
                      className={`relative w-24 h-24 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all border-4 select-none ${
                        calibrating
                          ? 'border-emerald-500 bg-emerald-50 scale-95 shadow-inner'
                          : 'border-amber-500 bg-white hover:bg-amber-50/40 shadow-sm'
                      }`}
                      style={{ touchAction: 'none' }}
                      id="calibration-pad"
                    >
                      <Fingerprint className={`w-12 h-12 transition-all ${calibrating ? 'text-emerald-600 scale-110' : 'text-amber-600'}`} />
                      
                      {/* Radial Progress indicator */}
                      {calibrating && (
                        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                          <circle
                            cx="44"
                            cy="44"
                            r="42"
                            stroke="#10B981"
                            strokeWidth="4"
                            fill="transparent"
                            strokeDasharray="264"
                            strokeDashoffset={264 - (264 * calibrationProgress) / 100}
                            className="transition-all"
                          />
                        </svg>
                      )}
                    </button>
                    <span className="text-xs font-mono font-bold text-slate-600 mt-2">
                      {calibrating ? `CALIBRATING: ${calibrationProgress}%` : 'PRESS & HOLD SCANNER'}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: JOKE REVEAL (THE CLIMAX) */}
            {step === 'PRANK' && (
              <motion.div
                key="step-prank"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }}
                className="flex flex-col items-center text-center gap-6"
              >
                {/* Sparkle burst icon */}
                <div className="h-16 w-16 bg-amber-50 rounded-none flex items-center justify-center text-amber-700 border border-amber-300 animate-bounce">
                  <Sparkles className="w-8 h-8" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl md:text-5xl font-serif font-black text-[#B45309] uppercase tracking-tighter">
                    🎉 HA! GOTCHA! 🎉
                  </h3>
                  <p className="text-base font-bold text-slate-900">
                    This is 100% a friendly joke/prank website!
                  </p>
                  <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto mt-2 leading-relaxed">
                    Don't worry, we got you good! No data was saved, collected, or submitted to any server anywhere in the solar system. All values entered remained strictly on your screen!
                  </p>
                </div>

                {/* Funny Prank Meme GIF */}
                <div className="w-full max-w-sm overflow-hidden border border-amber-200 shadow-xs bg-white p-1" id="prank-meme-container">
                  <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FnZ3V2ZTE0Mm91OXFmMXM4djR3Y3JpdjR2N3JiNW1qaXZsYWRqOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ILx3tjWgaP0cjUf0Wx/giphy.gif"
                    alt="Pranked Meme"
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                    id="prank-meme-gif"
                  />
                </div>

                {/* Recap of Entered details as proof */}
                <div className="w-full max-w-lg bg-slate-50 border border-slate-200 rounded-none p-5 text-left flex flex-col gap-2 shadow-xs" id="prank-recap-box">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                    🛡️ Proof of Client-Side Privacy:
                  </span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-600 pt-2 font-mono">
                    <div>Your Input Name:</div>
                    <div className="font-bold text-gov-accent truncate">{formData.fullName}</div>
                    <div>Chosen Laptop:</div>
                    <div className="font-bold text-gov-accent">{formData.preferredModel.replace('_', ' ')}</div>
                    <div>Institution:</div>
                    <div className="font-bold text-gov-accent truncate">{formData.institution}</div>
                    <div>Academic Score:</div>
                    <div className="font-bold text-gov-accent">{formData.gpa}</div>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2 font-sans italic leading-relaxed">
                    * The inputs above stayed completely inside your web browser memory. Feel free to close the tab or refresh; the parameters will disappear immediately.
                  </p>
                </div>

                {/* Share Link Customize Panel */}
                <PrankCustomize currentUrl={window.location.href} />

                {/* Reset button to retry */}
                <button
                  onClick={resetAll}
                  className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-gov-accent transition-colors mt-4 cursor-pointer uppercase tracking-wider"
                  id="reset-prank-btn"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Check Another Name
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
