import React, { useState } from 'react';
import { Share2, Copy, Check, MessageSquare, Send, Heart } from 'lucide-react';

interface PrankCustomizeProps {
  currentUrl: string;
}

export default function PrankCustomize({ currentUrl }: PrankCustomizeProps) {
  const [friendName, setFriendName] = useState('');
  const [copied, setCopied] = useState(false);
  const [customLink, setCustomLink] = useState('');

  const generateLink = (name: string) => {
    if (!name.trim()) {
      setCustomLink('');
      return;
    }
    const cleanName = encodeURIComponent(name.trim());
    // Parse the current base url (without search params)
    const baseUrl = currentUrl.split('?')[0];
    setCustomLink(`${baseUrl}?name=${cleanName}`);
  };

  const handleCopy = () => {
    if (!customLink) return;
    navigator.clipboard.writeText(customLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    if (!customLink) return;
    const text = `Hey! The Government is giving free brand-new laptops to students in 2026! I saw they reserved one specifically under your name! Check here and verify your details to claim it: ${customLink}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleShareTelegram = () => {
    if (!customLink) return;
    const text = `Hey! The Government is giving free brand-new laptops to students in 2026! Check if you are eligible here: ${customLink}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(customLink)}&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-50/50 p-6 md:p-8 rounded-none border border-slate-200 shadow-xs mt-8 flex flex-col gap-6" id="prank-customize-panel">
      <div className="flex items-start gap-4 text-left">
        <div className="p-3 bg-blue-50/40 rounded-none border border-blue-100 text-gov-accent shrink-0">
          <Share2 className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-serif font-black text-slate-900 tracking-tight">
            Prank Your Friends / Classmates!
          </h3>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            Create a highly customized link. When your friend opens it, their name will be prominently featured on the official banner, making the prank 10x more believable!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-end text-left">
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="friend-name-input" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
            Enter Friend's Full Name:
          </label>
          <input
            id="friend-name-input"
            type="text"
            placeholder="e.g. John Doe, Sarah Miller..."
            value={friendName}
            onChange={(e) => {
              setFriendName(e.target.value);
              generateLink(e.target.value);
            }}
            className="w-full p-3 border border-slate-300 rounded-none text-sm focus:ring-1 focus:ring-gov-accent focus:border-gov-accent outline-none bg-white transition-all"
          />
        </div>

        {friendName && (
          <button
            onClick={() => generateLink(friendName)}
            className="w-full md:w-auto bg-gov-accent text-white font-sans font-black py-3.5 px-6 rounded-none text-xs tracking-widest uppercase hover:bg-blue-800 transition-all shrink-0"
            id="gen-prank-link-btn"
          >
            Generate Link
          </button>
        )}
      </div>

      {customLink && (
        <div className="bg-white p-4 rounded-none border border-slate-200 flex flex-col gap-3 text-left" id="generated-link-box">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Your Custom Prank Link:</span>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="text"
                readOnly
                value={customLink}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-none text-xs font-mono text-slate-700 select-all focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className="p-2.5 bg-slate-100 hover:bg-slate-200 rounded-none border border-slate-200 text-slate-700 transition-colors shrink-0 flex items-center justify-center"
                title="Copy Link"
                id="copy-prank-link-btn"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            <button
              onClick={handleShareWhatsApp}
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans font-bold py-2.5 px-4 rounded-none text-xs transition-all shadow-xs cursor-pointer"
              id="share-whatsapp-btn"
            >
              <MessageSquare className="w-4 h-4" />
              Share on WhatsApp
            </button>
            <button
              onClick={handleShareTelegram}
              className="flex items-center gap-2 bg-[#0088cc] hover:bg-[#0077b3] text-white font-sans font-bold py-2.5 px-4 rounded-none text-xs transition-all shadow-xs cursor-pointer"
              id="share-telegram-btn"
            >
              <Send className="w-4 h-4" />
              Share on Telegram
            </button>
          </div>
        </div>
      )}

      <div className="text-center pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-slate-400">
        <span>Made for good laughs and smiles!</span>
        <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
      </div>
    </div>
  );
}
