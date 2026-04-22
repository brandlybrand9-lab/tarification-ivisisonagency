import { motion, AnimatePresence } from 'motion/react';
import { Rocket, Settings, Trophy, Handshake, TrendingUp, Palette, Monitor, X, MessageCircle, ShoppingCart, Users, ChevronLeft, ChevronRight, Sparkles, ExternalLink, Globe } from 'lucide-react';
import React, { useState } from 'react';

const translations = {
  fr: {
    exclusive: "Offres exclusives",
    title: "Prix de Sponsoring",
    subtitle: "Choisissez le pack le plus adapté à la croissance de votre projet, et profitez de notre expertise pour obtenir les meilleurs résultats.",
    popular: "Le plus plébiscité",
    currency: "DZD",
    durations: { startup: "1 Semaine", growth: "2 Semaines", leader: "3 Semaines", custom: "1 Mois" },
    btnMore: "En savoir plus",
    btnContact: "Contactez-nous",
    contentTitle: "Création de contenu",
    contentDesc: "Contenu créatif personnalisé selon la taille et les besoins de votre projet.",
    from: "À partir de",
    webTitle: "Création de site web",
    webDesc: "Développement sur-mesure (Sites vitrines, E-commerce, Landing pages).",
    ctaTitle: "Intéressé par toutes nos offres ?",
    ctaBtn: "Discutons de votre projet",
    waMessageCustom: "Bonjour, je veux faire un pack sur-mesure pour mon projet.",
    waMessagePack: "Bonjour, je suis intéressé(e) par le ",
    portfolioTitle: "Notre Portfolio",
    portfolioDesc: "Découvrez nos réalisations, nos créations et nos performances réelles.",
    adsTitle: "Résultats Ads",
    adsDesc: "Performances concrètes et ROI générés pour nos clients via Meta Ads.",
    btnAds: "Voir les résultats",
    creativeTitle: "Portfolio Créatif",
    creativeDesc: "Découvrez nos créations visuelles, designs réseaux sociaux et branding.",
    btnTelegram: "Voir sur Telegram",
    sitesTitle: "Sites Web",
    sitesDesc: "Explorez nos créations e-commerce et vitrines développées sur-mesure.",
    modalTitle: "Performances Récentes",
    status: "Statut : Terminé",
    costPerResult: "Coût par résultat",
    spend: "Dépense",
    modalFooter: "\"Ces statistiques proviennent directement de nos tableaux de bord publicitaires Meta Ads. Elles démontrent notre capacité à générer un volume élevé de prospects et de ventes à un coût d'acquisition extrêmement bas pour nos clients.\"",
    campInteraction: "Campagne Interaction",
    campVentes: "Campagne Ventes",
    campProspects: "Campagne Prospects",
    conv: "Conversations",
    achats: "Achats",
    prospects: "Prospects"
  },
  ar: {
    exclusive: "عروض حصرية",
    title: "أسعار الرعاية",
    subtitle: "اختر الباقة الأنسب لنمو وتطور مشروعك، واستفد من خبرتنا في تحقيق أفضل النتائج.",
    popular: "الأكثر طلباً",
    currency: "د.ج",
    durations: { startup: "أسبوع واحد", growth: "أسبوعين", leader: "3 أسابيع", custom: "شهر واحد" },
    btnMore: "لمعرفة المزيد",
    btnContact: "اتصل بنا",
    contentTitle: "صناعة المحتوى",
    contentDesc: "محتوى إبداعي مخصص حسب حجم واحتياجات مشروعك.",
    from: "ابتداءً من",
    webTitle: "تصميم المواقع",
    webDesc: "تطوير مواقع مخصصة (متاجر إلكترونية، صفحات هبوط، مواقع بمواصفات خاصة).",
    ctaTitle: "مهتم بجميع عروضنا؟",
    ctaBtn: "ناقش مشروعك معنا",
    waMessageCustom: "مرحباً، أريد عمل باقة (Pack) مخصصة لمشروعي.",
    waMessagePack: "مرحباً، أنا مهتم بـ ",
    portfolioTitle: "معرض أعمالنا",
    portfolioDesc: "اكتشف إنجازاتنا، إبداعاتنا، ونتائجنا الحقيقية للمشاريع السابقة.",
    adsTitle: "نتائج الإعلانات",
    adsDesc: "أداء ملموس وعائد استثمار (ROI) حقيقي حققناه لعملائنا عبر إعلانات ميتا.",
    btnAds: "مشاهدة النتائج",
    creativeTitle: "معرض التصاميم",
    creativeDesc: "اكتشف تصاميمنا البصرية، منشورات الشبكات الاجتماعية، والهويات البصرية.",
    btnTelegram: "مشاهدة على تليجرام",
    sitesTitle: "المواقع الإلكترونية",
    sitesDesc: "تصفح المتاجر الإلكترونية والمواقع التي قمنا بتطويرها.",
    modalTitle: "الأداء الأخير (فيسبوك/إنستجرام)",
    status: "الحالة: مكتمل",
    costPerResult: "التكلفة لكل نتيجة",
    spend: "الإنفاق",
    modalFooter: '"هذه الإحصائيات مأخوذة مباشرة من لوحات تحكم أعمالنا على Meta Ads. إنها تثبت قدرتنا على جلب عدد كبير من العملاء والمبيعات بتكلفة استحواذ منخفضة للغاية عملائنا."',
    campInteraction: "حملة تفاعل",
    campVentes: "حملة مبيعات",
    campProspects: "حملة عملاء محتملين",
    conv: "رسائل",
    achats: "مشتريات",
    prospects: "عملاء محتملون"
  }
};

export default function App() {
  const [showAdsModal, setShowAdsModal] = useState(false);
  const [lang, setLang] = useState<'ar' | 'fr'>('ar');

  const t = translations[lang];
  const isRtl = lang === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  // Dynamic Data depending on language
  const adResults = [
    { name: t.campInteraction, results: '3 549', type: t.conv, cost: '0,04 $US', spend: '149,60 $US', icon: MessageCircle, colorClass: 'bg-blue-500/20 text-blue-400 border border-blue-500/20' },
    { name: t.campInteraction, results: '1 746', type: t.conv, cost: '0,07 $US', spend: '115,49 $US', icon: MessageCircle, colorClass: 'bg-blue-500/20 text-blue-400 border border-blue-500/20' },
    { name: t.campVentes, results: '144', type: t.achats, cost: '0,79 $US', spend: '113,58 $US', icon: ShoppingCart, colorClass: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20' },
    { name: t.campInteraction, results: '1 363', type: t.conv, cost: '0,02 $US', spend: '38,83 $US', icon: MessageCircle, colorClass: 'bg-blue-500/20 text-blue-400 border border-blue-500/20' },
    { name: t.campInteraction, results: '876', type: t.conv, cost: '0,05 $US', spend: '45,38 $US', icon: MessageCircle, colorClass: 'bg-blue-500/20 text-blue-400 border border-blue-500/20' },
    { name: t.campInteraction, results: '927', type: t.conv, cost: '0,10 $US', spend: '96,20 $US', icon: MessageCircle, colorClass: 'bg-blue-500/20 text-blue-400 border border-blue-500/20' },
    { name: t.campVentes, results: '17', type: t.achats, cost: '0,84 $US', spend: '14,21 $US', icon: ShoppingCart, colorClass: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20' },
    { name: t.campProspects, results: '457', type: t.prospects, cost: '0,04 $US', spend: '16,39 $US', icon: Users, colorClass: 'bg-purple-500/20 text-purple-400 border border-purple-500/20' },
  ];

  const pricingPacks = [
    {
      id: 'startup',
      title: 'Pack Startup',
      price: '10000',
      currency: t.currency,
      duration: t.durations.startup,
      buttonText: t.btnMore,
      icon: Rocket,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50 leading-none',
      isPopular: false,
    },
    {
      id: 'growth',
      title: 'Pack Growth',
      price: '18000',
      currency: t.currency,
      duration: t.durations.growth,
      buttonText: t.btnMore,
      icon: Settings,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50 leading-none',
      isPopular: false,
    },
    {
      id: 'leader',
      title: 'Pack Leader',
      price: '25000',
      currency: t.currency,
      duration: t.durations.leader,
      buttonText: t.btnMore,
      icon: Trophy,
      iconColor: 'text-white',
      iconBg: 'bg-gradient-to-br from-[#2541b2] to-blue-600 shadow-xl shadow-[#2541b2]/30',
      isPopular: true,
    },
    {
      id: 'custom',
      title: 'Pack Custom',
      price: '32000',
      currency: t.currency,
      duration: t.durations.custom,
      buttonText: t.btnContact,
      icon: Handshake,
      iconColor: 'text-slate-800',
      iconBg: 'bg-slate-100 leading-none',
      isPopular: false,
    },
  ];

  return (
    <div className={`min-h-screen bg-[#f8fafc] relative overflow-hidden font-tajawal pb-24 selection:bg-[#2541b2] selection:text-white transition-all duration-300 ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* Backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tl from-[#2541b2]/10 to-cyan-400/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

      {/* Language Switcher */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-50">
        <div></div> {/* Spacer */}
        <div className="bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-slate-200 p-1 flex items-center">
          <button 
            onClick={() => setLang('fr')}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors flex items-center gap-2 ${lang === 'fr' ? 'bg-[#2541b2] text-white' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            FR
          </button>
          <button 
            onClick={() => setLang('ar')}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors flex items-center gap-2 ${lang === 'ar' ? 'bg-[#2541b2] text-white' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            العربية
            {lang === 'ar' && <Globe className="w-3 h-3" />}
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24">
        
        {/* Modern Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ key: lang, duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#2541b2] text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>{t.exclusive}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight" dir={dir}>
            {t.title}
          </h1>
          <p className="text-slate-500 mt-6 font-medium text-lg max-w-xl mx-auto" dir={dir}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pricingPacks.map((pack, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, ease: "easeOut" }}
              key={pack.id + lang}
              className={`bg-white/80 backdrop-blur-3xl rounded-[2.5rem] p-6 sm:p-8 shadow-[0_4px_24px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_48px_rgb(37,65,178,0.08)] border flex flex-col items-center relative z-20 group transition-all duration-500 ${
                pack.isPopular 
                  ? 'border-[#2541b2]/10 ring-2 ring-[#2541b2]/5 md:-translate-y-4 z-30 bg-white/95' 
                  : 'border-white/60 hover:border-[#2541b2]/10'
              }`}
            >
              {pack.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2541b2] to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap tracking-wide uppercase" dir={dir}>
                  {t.popular}
                </div>
              )}

              {/* Card Header */}
              <div className="flex flex-col items-center justify-center gap-3 mb-6 w-full text-center">
                <div className={`p-3 rounded-2xl ${pack.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                  <pack.icon className={`w-6 h-6 stroke-[2px] ${pack.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{pack.title}</h3>
              </div>

              {/* Price */}
              <div className={`mb-3 flex items-baseline justify-center gap-1.5 w-full ${isRtl ? 'flex-row' : 'flex-row'}`} dir="ltr">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                  {pack.price}
                </span>
                <span className="text-xl font-bold text-slate-400">{pack.currency}</span>
              </div>

              {/* Duration */}
              <div className="mb-8 w-full text-center">
                <span className="text-[#2541b2] font-semibold bg-blue-50/50 border border-blue-100/50 inline-block px-4 py-1 rounded-full text-sm" dir={dir}>
                  {pack.duration}
                </span>
              </div>

              {/* Action Button */}
              <a
                href={`https://wa.me/213798184727?text=${encodeURIComponent(t.waMessagePack + pack.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-6 rounded-[1.25rem] font-bold text-base transition-all active:scale-95 flex items-center justify-center gap-2 mt-auto ${
                  pack.isPopular 
                    ? 'bg-[#2541b2] text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5' 
                    : pack.id === 'custom'
                      ? 'bg-slate-900 text-white shadow-md hover:bg-slate-800 hover:-translate-y-0.5'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60 hover:-translate-y-0.5'
                }`}
                dir={dir}
              >
                {pack.buttonText}
                {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bento Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ key: lang, duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:border-green-500/30 transition-colors group flex flex-col items-center md:items-start text-center md:text-start" dir={dir}>
            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6 border border-green-100 group-hover:scale-110 transition-transform">
              <Palette className="w-7 h-7 text-green-600" />
            </div>
            <h4 className="text-slate-900 font-bold text-2xl mb-3">{t.contentTitle}</h4>
            <p className="text-slate-500 font-medium mb-8">
              {t.contentDesc}
            </p>
            <div className={`mt-auto pt-5 border-t border-slate-100 w-full ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="text-sm font-semibold text-green-600 mb-1 tracking-wide uppercase">{t.from}</div>
              <div className={`flex flex-wrap items-center gap-1.5 text-2xl font-black text-slate-900 tracking-tight ${isRtl ? 'justify-end' : 'justify-start'}`}>
                <div className="flex items-baseline gap-1" dir="ltr">
                  <span>4 000</span> <span className="text-base font-bold text-slate-500">{t.currency}</span>
                </div>
                <span className="text-slate-300 font-normal">-</span>
                <div className="flex items-baseline gap-1" dir="ltr">
                  <span>20 000</span> <span className="text-base font-bold text-slate-500">{t.currency}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:border-blue-500/30 transition-colors group flex flex-col items-center md:items-start text-center md:text-start" dir={dir}>
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100 group-hover:scale-110 transition-transform">
              <Monitor className="w-7 h-7 text-blue-600" />
            </div>
            <h4 className="text-slate-900 font-bold text-2xl mb-3">{t.webTitle}</h4>
            <p className="text-slate-500 font-medium mb-8">
              {t.webDesc}
            </p>
            <div className={`mt-auto pt-5 border-t border-slate-100 w-full ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="text-sm font-semibold text-blue-600 mb-1 tracking-wide uppercase">{t.from}</div>
              <div className={`flex flex-wrap items-center gap-1.5 text-2xl font-black text-slate-900 tracking-tight ${isRtl ? 'justify-end' : 'justify-start'}`}>
                <div className="flex items-baseline gap-1" dir="ltr">
                  <span>20 000</span> <span className="text-base font-bold text-slate-500">{t.currency}</span>
                </div>
                <span className="text-slate-300 font-normal">-</span>
                <div className="flex items-baseline gap-1" dir="ltr">
                  <span>100 000</span> <span className="text-base font-bold text-slate-500">{t.currency}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="md:col-span-2 mt-2 bg-[#0f172a] text-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl overflow-hidden relative group">
            <div className={`absolute top-0 ${isRtl ? 'left-0 transform -translate-x-1/3' : 'right-0 transform translate-x-1/3'} w-[500px] h-[500px] bg-gradient-to-bl from-[#2541b2]/40 to-transparent rounded-full blur-3xl -translate-y-1/3 group-hover:scale-110 transition-transform duration-1000 ease-out pointer-events-none`}></div>
            <div className={`absolute bottom-0 ${isRtl ? 'right-0 transform translate-x-1/3' : 'left-0 transform -translate-x-1/3'} w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl translate-y-1/3 group-hover:scale-110 transition-transform duration-1000 ease-out pointer-events-none`}></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10" dir={dir}>
              <div className={`text-center w-full ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-4xl font-black mb-4 tracking-tight">
                  {t.ctaTitle}
                </h3>
                <p className={`text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto ${isRtl ? 'md:ml-auto md:mr-0' : 'md:ml-0 md:mr-auto'}`}>
                  {lang === 'ar' ? (
                    <>
                    يمكننا تصميم <strong className="text-white bg-white/10 px-2 py-0.5 rounded-md">باقة متكاملة (Pack)</strong> مخصصة لك بالكامل. <br className="hidden md:block" />
                    أخبرنا عن مشروعك، وسنخبرك كيف يمكننا مساعدتك على أفضل وجه!
                    </>
                  ) : (
                    <>
                    Nous pouvons concevoir un <strong className="text-white bg-white/10 px-2 py-0.5 rounded-md">Pack complet</strong> sur-mesure pour vous. <br className="hidden md:block" />
                    Parlez-nous de votre projet, et nous vous dirons comment nous pouvons vous aider !
                    </>
                  )}
                </p>
              </div>
              <a 
                href={`https://wa.me/213798184727?text=${encodeURIComponent(t.waMessageCustom)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center justify-center gap-3 bg-white text-[#0f172a] hover:bg-gray-100 focus:ring-4 focus:ring-white/20 font-bold py-5 px-10 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 text-lg w-full md:w-auto z-10"
              >
                <Handshake className="w-6 h-6 text-[#2541b2]" />
                {t.ctaBtn}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Portfolios Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ key: lang, duration: 0.7, delay: 0.3 }}
          className="max-w-5xl mx-auto mt-32 text-center"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 inline-block relative tracking-tight" dir={dir}>
              {t.portfolioTitle}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1.5 bg-[#2541b2] rounded-full opacity-80"></div>
            </h2>
            <p className="text-slate-500 mt-6 font-medium text-lg" dir={dir}>{t.portfolioDesc}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.adsTitle}</h3>
              <p className="text-slate-500 mb-8 text-center font-medium leading-relaxed">
                {t.adsDesc}
              </p>
              <button 
                onClick={() => setShowAdsModal(true)}
                className={`mt-auto px-8 py-3.5 bg-blue-50 text-blue-700 font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-colors w-full flex justify-center items-center gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <ExternalLink className="w-4 h-4" />
                {t.btnAds}
              </button>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300 group flex flex-col items-center">
              <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <Palette className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.creativeTitle}</h3>
              <p className="text-slate-500 mb-8 text-center font-medium leading-relaxed">
                {t.creativeDesc}
              </p>
              <a 
                href="https://t.me/+416kwGyh8VEzMDBk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`mt-auto px-8 py-3.5 bg-purple-50 text-purple-700 font-bold rounded-2xl hover:bg-purple-600 hover:text-white transition-colors w-full flex justify-center items-center gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <ExternalLink className="w-4 h-4" />
                {t.btnTelegram}
              </a>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300 group flex flex-col items-center">
              <div className="w-20 h-20 bg-teal-50 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <Monitor className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.sitesTitle}</h3>
              <p className="text-slate-500 mb-8 text-center font-medium leading-relaxed">
                {t.sitesDesc}
              </p>
              <div className="flex flex-wrap gap-2 justify-center mt-auto w-full" dir="ltr">
                {[
                  { name: 'Proud Collection', url: 'https://proud-collection.vercel.app/' },
                  { name: 'Snap Plus DZ', url: 'https://snap-plus-dz.vercel.app/' },
                  { name: 'Lecmo', url: 'https://www.lecmooud.com/' },
                  { name: 'Colins Algiers', url: 'https://colinsalgiers.store/' },
                  { name: 'White Aura', url: 'https://white-aura.vercel.app/' },
                  { name: 'Fidali', url: 'https://fidali.vercel.app/' }
                ].map(site => (
                  <a 
                    key={site.name} 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-bold px-3 py-2 border border-teal-100 bg-teal-50/50 text-teal-800 rounded-xl hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all hover:-translate-y-0.5"
                  >
                    {site.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Ads Results Modal */}
      <AnimatePresence>
        {showAdsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAdsModal(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className={`bg-[#0f172a] border border-slate-700/60 w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl shadow-black/50 overflow-hidden flex flex-col relative z-10 ${isRtl ? 'text-right' : 'text-left'}`}
              dir={dir}
            >
              <div className={`p-6 md:p-8 border-b border-slate-800 flex items-center bg-[#0f172a] sticky top-0 z-10 ${isRtl ? 'flex-row-reverse justify-between' : 'justify-between'}`}>
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <div className="bg-blue-500/20 p-2.5 rounded-xl border border-blue-500/30 shrink-0">
                    <TrendingUp className="text-blue-400 w-6 h-6" />
                  </div>
                  {t.modalTitle}
                </h3>
                <button 
                  onClick={() => setShowAdsModal(false)}
                  className="p-3 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-full transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {adResults.map((ad, idx) => (
                    <motion.div 
                      key={idx + lang}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-[#1e293b]/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-colors"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-xl shadow-inner shrink-0 ${ad.colorClass}`}>
                          <ad.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs md:text-sm">{ad.name}</h4>
                          <p className={`text-slate-400 text-xs mt-1 flex items-center gap-1 ${isRtl ? 'flex-row' : ''}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0"></span>
                            {t.status}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <p className="text-white font-black text-xl md:text-2xl">{ad.results}</p>
                          <p className="text-slate-400 text-[11px] font-medium leading-tight mt-1">
                            {ad.type}
                          </p>
                        </div>
                        <div className={`${isRtl ? 'border-r pr-4' : 'border-l pl-4'} border-slate-700/60`}>
                          <p className="text-white font-black text-xl md:text-2xl">{ad.cost}</p>
                          <p className="text-slate-400 text-[11px] font-medium leading-tight mt-1">{t.costPerResult}</p>
                        </div>
                        <div className={`${isRtl ? 'border-r pr-4' : 'border-l pl-4'} border-slate-700/60`}>
                          <p className="text-white font-black text-xl md:text-2xl">{ad.spend}</p>
                          <p className="text-slate-400 text-[11px] font-medium leading-tight mt-1">{t.spend}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, key: lang }}
                  className="mt-8 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-6"
                >
                  <p className="text-blue-200 text-sm md:text-base font-medium text-center leading-relaxed max-w-3xl mx-auto">
                    {t.modalFooter}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
