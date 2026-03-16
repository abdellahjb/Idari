/* ═══════════════════════════════════════════
   IDARI — Shared Data & Utilities
   ═══════════════════════════════════════════ */

/* ── TRANSLATIONS ── */
const T = {
  fr: {
    navHome: "Accueil", navCivil: "État Civil", navBusiness: "Entreprise",
    navEdu: "Éducation", navTransport: "Transport", navSocial: "Social",
    navOffices: "Bureaux", navForms: "Formulaires", navFaq: "FAQ", navContact: "Contact",
    heroTag: "🇲🇦 Guide Officiel Maroc",
    heroTitle: "Simplifiez vos <em>démarches administratives</em>",
    heroSub: "Guides étape par étape, listes de documents, localisateur de bureaux et formulaires officiels.",
    heroBtnMain: "Explorer les procédures",
    heroBtnSec: "Trouver un bureau",
    statProcs: "Procédures",
    statOrgs: "Organismes",
    statOffices: "Bureaux",
    catsTitle: "Catégories",
    catsTag: "Démarches",
    catsSub: "Sélectionnez une catégorie pour accéder aux guides détaillés.",
    detailsBtn: "Voir le guide →",
    docsLabel: "Documents requis",
    stepsLabel: "Étapes",
    timeLabel: "Délai",
    costLabel: "Coût",
    orgLabel: "Organisme",
    req: "Obligatoire", opt: "Optionnel",
    progLabel: "documents préparés",
    saveBtn: "⭐ Sauvegarder",
    printBtn: "🖨 Imprimer",
    dlBtn: "⬇ PDF",
    officesTitle: "Trouver un bureau",
    officesTag: "Bureaux",
    officesSub: "Localisez le bureau le plus proche dans votre ville.",
    mapBtn: "Voir sur la carte",
    formsTitle: "Formulaires officiels",
    formsTag: "Téléchargements",
    formsSub: "Téléchargez les formulaires officiels à imprimer avant votre visite.",
    faqTitle: "Questions fréquentes",
    faqTag: "FAQ",
    contactTitle: "Nous contacter",
    contactTag: "Contact",
    contactSub: "Notre équipe répond dans les 24h.",
    contactName: "Votre nom",
    contactEmail: "Email",
    contactSubject: "Sujet",
    contactMsg: "Message",
    contactSend: "Envoyer le message",
    contactSubjects: ["Question sur une procédure","Problème avec un bureau","Formulaire introuvable","Autre"],
    footerNote: "Guide administratif non-officiel du Maroc. Pour toute démarche officielle, consultez les organismes compétents.",
    footerCopy: "© 2025 Idari — Ce site n'est pas affilié au gouvernement marocain.",
    breadHome: "Accueil",
    toastSaved: "✓ Procédure sauvegardée !",
    toastMsg: "✓ Message envoyé — réponse sous 24h.",
    toastDl: "Redirection vers le formulaire officiel…",
    backBtn: "← Retour",
    cityCasa: "Casablanca", cityRabat: "Rabat", cityMarra: "Marrakech", cityFes: "Fès",
  },
  ar: {
    navHome: "الرئيسية", navCivil: "الحالة المدنية", navBusiness: "المقاولات",
    navEdu: "التعليم", navTransport: "النقل", navSocial: "الشؤون الاجتماعية",
    navOffices: "المكاتب", navForms: "الاستمارات", navFaq: "الأسئلة الشائعة", navContact: "اتصل بنا",
    heroTag: "🇲🇦 دليل الإجراءات الإدارية في المغرب",
    heroTitle: "بسّط <em>إجراءاتك الإدارية</em>",
    heroSub: "أدلة خطوة بخطوة، قوائم الوثائق، مكتب قريب منك، واستمارات رسمية جاهزة للطباعة.",
    heroBtnMain: "استكشف الإجراءات",
    heroBtnSec: "ابحث عن مكتب",
    statProcs: "إجراء",
    statOrgs: "جهات",
    statOffices: "مكتب",
    catsTitle: "الفئات",
    catsTag: "الإجراءات",
    catsSub: "اختر فئة للاطلاع على الأدلة التفصيلية.",
    detailsBtn: "عرض الدليل →",
    docsLabel: "الوثائق المطلوبة",
    stepsLabel: "الخطوات",
    timeLabel: "المدة",
    costLabel: "التكلفة",
    orgLabel: "الجهة المختصة",
    req: "إلزامي", opt: "اختياري",
    progLabel: "وثيقة جاهزة",
    saveBtn: "⭐ حفظ",
    printBtn: "🖨 طباعة",
    dlBtn: "⬇ تحميل PDF",
    officesTitle: "ابحث عن مكتب",
    officesTag: "المكاتب",
    officesSub: "حدد أقرب مكتب في مدينتك لإتمام إجراءاتك.",
    mapBtn: "عرض على الخريطة",
    formsTitle: "الاستمارات الرسمية",
    formsTag: "التحميلات",
    formsSub: "حمّل الاستمارات الرسمية وطبعها قبل زيارة المكتب.",
    faqTitle: "الأسئلة الشائعة",
    faqTag: "الأسئلة الشائعة",
    contactTitle: "تواصل معنا",
    contactTag: "اتصل بنا",
    contactSub: "فريقنا يرد خلال 24 ساعة.",
    contactName: "اسمك الكامل",
    contactEmail: "البريد الإلكتروني",
    contactSubject: "الموضوع",
    contactMsg: "رسالتك",
    contactSend: "إرسال الرسالة",
    contactSubjects: ["سؤال حول إجراء","مشكلة في مكتب","استمارة غير متوفرة","أخرى"],
    footerNote: "دليل إداري غير رسمي للمغرب. للإجراءات الرسمية، يرجى التواصل مع الجهات المختصة.",
    footerCopy: "© 2025 إداري — هذا الموقع غير تابع للحكومة المغربية.",
    breadHome: "الرئيسية",
    toastSaved: "✓ تم حفظ الإجراء!",
    toastMsg: "✓ تم الإرسال — سنرد خلال 24 ساعة.",
    toastDl: "جارٍ التوجيه إلى الاستمارة الرسمية…",
    backBtn: "→ رجوع",
    cityCasa: "الدار البيضاء", cityRabat: "الرباط", cityMarra: "مراكش", cityFes: "فاس",
  }
};

/* ── PROCEDURES DATA ── */
const procedures = {
  civil: [
    {
      id:"p-civil-1",
      fr:{title:"Passeport biométrique",desc:"Obtenir ou renouveler votre passeport marocain biométrique.",org:"Direction de la Migration",steps:[{t:"Préparer les documents",d:"CIN valide, acte de naissance, 2 photos fond blanc (3.5×4.5cm) et ancien passeport si renouvellement."},{t:"Télécharger le formulaire",d:"Remplissez le formulaire disponible à la préfecture ou sur portail.gov.ma."},{t:"Se rendre à la préfecture",d:"Présentez-vous avec votre dossier complet à la Direction de la Migration."},{t:"Payer les frais",d:"Acquittez 200 MAD au guichet (timbre fiscal)."},{t:"Données biométriques",d:"Photo numérique et empreintes digitales enregistrées sur place."},{t:"Récupérer le passeport",d:"Retournez avec votre récépissé après 2 à 4 semaines."}],docs:[{l:"CIN valide (original + copie)",r:true},{l:"Acte de naissance (original)",r:true},{l:"2 photos d'identité fond blanc",r:true},{l:"Formulaire de demande rempli",r:true},{l:"Timbre fiscal 200 MAD",r:true},{l:"Ancien passeport (si renouvellement)",r:false}]},
      ar:{title:"جواز السفر البيومتري",desc:"استخراج أو تجديد جواز سفرك المغربي البيومتري.",org:"مديرية الهجرة",steps:[{t:"تجهيز الوثائق",d:"بطاقة التعريف الوطنية، شهادة الميلاد، صورتان بخلفية بيضاء، وجواز السفر القديم عند التجديد."},{t:"تحميل الاستمارة",d:"املأ استمارة الطلب المتوفرة في المقاطعة أو على بوابة portail.gov.ma."},{t:"التوجه إلى المقاطعة",d:"احضر بملفك الكامل إلى مديرية الهجرة."},{t:"دفع الرسوم",d:"أدِّ 200 درهم عند الشباك (طابع جبائي)."},{t:"تسجيل البيانات البيومترية",d:"تُلتقط صورتك الرقمية وبصمات أصابعك في عين المكان."},{t:"استلام جواز السفر",d:"عُد بوصلك بعد 2 إلى 4 أسابيع."}],docs:[{l:"بطاقة التعريف الوطنية (أصل + نسخة)",r:true},{l:"شهادة الميلاد (أصل)",r:true},{l:"صورتان بخلفية بيضاء",r:true},{l:"استمارة الطلب مملوءة",r:true},{l:"طابع جبائي 200 درهم",r:true},{l:"جواز السفر القديم (عند التجديد)",r:false}]},
      time:"2–4 semaines", cost:"200 MAD", icon:"🛂"
    },
    {
      id:"p-civil-2",
      fr:{title:"Carte nationale d'identité (CIN)",desc:"Demander ou renouveler votre CIN biométrique.",org:"DGSN / Commissariat",steps:[{t:"Rassembler les pièces",d:"Acte de naissance, 2 photos d'identité et un justificatif de domicile récent."},{t:"Se rendre au commissariat",d:"Allez au commissariat ou à la gendarmerie de votre arrondissement."},{t:"Dépôt de dossier",d:"Remettez les documents et remplissez le formulaire sur place."},{t:"Biométrie",d:"Vos empreintes et photo sont enregistrées."},{t:"Récupération",d:"Revenez chercher votre CIN après 7–15 jours ouvrables."}],docs:[{l:"Acte de naissance (original)",r:true},{l:"2 photos d'identité fond blanc",r:true},{l:"Justificatif de domicile (< 3 mois)",r:true},{l:"Ancienne CIN (si renouvellement)",r:false}]},
      ar:{title:"بطاقة التعريف الوطنية",desc:"طلب أو تجديد بطاقة التعريف الوطنية البيومترية.",org:"المديرية العامة للأمن الوطني",steps:[{t:"جمع الوثائق",d:"شهادة الميلاد، صورتان، ووثيقة إقامة حديثة."},{t:"التوجه إلى مفوضية الشرطة",d:"احضر إلى مفوضية دائرتك أو درك مكانك."},{t:"تقديم الملف",d:"سلّم الوثائق وامل الاستمارة في عين المكان."},{t:"البيانات البيومترية",d:"تُسجَّل بصماتك وصورتك."},{t:"الاستلام",d:"عُد لاستلام بطاقتك بعد 7 إلى 15 يوم عمل."}],docs:[{l:"شهادة الميلاد (أصل)",r:true},{l:"صورتان بخلفية بيضاء",r:true},{l:"وثيقة إقامة (أقل من 3 أشهر)",r:true},{l:"البطاقة القديمة (عند التجديد)",r:false}]},
      time:"7–15 jours", cost:"Gratuit", icon:"🪪"
    },
    {
      id:"p-civil-3",
      fr:{title:"Extrait d'acte de naissance",desc:"Obtenir un extrait ou copie intégrale de votre acte de naissance.",org:"Commune / Arrondissement",steps:[{t:"Identifier votre commune",d:"Le document est délivré uniquement par la commune du lieu de naissance."},{t:"Formulaire de demande",d:"Remplissez le formulaire disponible au guichet."},{t:"Déposer la demande",d:"Déposez en personne ou envoyez par courrier avec CIN et timbre fiscal."},{t:"Retrait",d:"Retirez l'acte ou recevez-le par courrier."}],docs:[{l:"CIN du demandeur (copie)",r:true},{l:"Formulaire de demande",r:true},{l:"Timbre fiscal (selon commune)",r:false}]},
      ar:{title:"مستخرج من سجل الحالة المدنية",desc:"الحصول على نسخة من شهادة الميلاد.",org:"الجماعة / المقاطعة",steps:[{t:"تحديد جماعة الميلاد",d:"تُسلَّم الوثيقة فقط من طرف جماعة مكان الولادة."},{t:"استمارة الطلب",d:"امل استمارة الطلب المتوفرة عند الشباك."},{t:"تقديم الطلب",d:"قدّم الطلب شخصياً أو أرسله بالبريد مع نسخة من بطاقتك وطابع جبائي."},{t:"الاستلام",d:"استلم الوثيقة شخصياً أو عبر البريد."}],docs:[{l:"نسخة من بطاقة التعريف",r:true},{l:"استمارة الطلب",r:true},{l:"طابع جبائي (حسب الجماعة)",r:false}]},
      time:"1–3 jours", cost:"Gratuit", icon:"📜"
    },
    {
      id:"p-civil-4",
      fr:{title:"Certificat de résidence",desc:"Obtenir un certificat officiel attestant votre adresse de résidence.",org:"Caïdat / Arrondissement",steps:[{t:"Se rendre au caïdat",d:"Allez au caïdat ou arrondissement dont dépend votre adresse."},{t:"Présenter les documents",d:"CIN + justificatif de domicile récent."},{t:"Remplir la demande",d:"Complétez le formulaire au guichet."},{t:"Retrait",d:"Le certificat est généralement remis le jour même ou le lendemain."}],docs:[{l:"CIN valide (original)",r:true},{l:"Justificatif de domicile (facture eau/électricité)",r:true},{l:"Contrat de bail (si locataire)",r:false}]},
      ar:{title:"شهادة الإقامة",desc:"الحصول على شهادة رسمية تثبت مكان إقامتك.",org:"القيادة / المقاطعة",steps:[{t:"التوجه إلى القيادة",d:"احضر إلى القيادة أو المقاطعة التابع لها عنوانك."},{t:"تقديم الوثائق",d:"بطاقة التعريف الوطنية + وثيقة إقامة حديثة."},{t:"ملء الطلب",d:"أكمل الاستمارة عند الشباك."},{t:"الاستلام",d:"تُسلَّم الشهادة في نفس اليوم أو في اليوم التالي."}],docs:[{l:"بطاقة التعريف الوطنية (أصل)",r:true},{l:"فاتورة الماء أو الكهرباء",r:true},{l:"عقد الكراء (للمستأجرين)",r:false}]},
      time:"1–2 jours", cost:"Gratuit", icon:"🏠"
    }
  ],
  business: [
    {
      id:"p-biz-1",
      fr:{title:"Création d'auto-entreprise",desc:"Enregistrer votre auto-entreprise au registre officiel.",org:"CRI / OMPIC",steps:[{t:"S'inscrire sur le portail",d:"Créez un compte sur autoentrepreneur.ma avec votre CIN et email."},{t:"Choisir l'activité",d:"Sélectionnez votre activité parmi la liste des activités éligibles."},{t:"Soumettre la demande",d:"Remplissez le formulaire et soumettez avec vos documents."},{t:"Validation CRI",d:"Le Centre Régional d'Investissement valide votre demande."},{t:"Recevoir le certificat",d:"Vous recevez votre certificat d'auto-entrepreneur par email ou au CRI."}],docs:[{l:"CIN valide (scan recto-verso)",r:true},{l:"Email professionnel actif",r:true},{l:"Formulaire de déclaration d'activité",r:true}]},
      ar:{title:"إنشاء مقاولة ذاتية",desc:"تسجيل مقاولتك الذاتية في السجل الرسمي.",org:"الجهة الجهوية للاستثمار",steps:[{t:"التسجيل في البوابة",d:"أنشئ حساباً على autoentrepreneur.ma ببطاقتك وبريدك الإلكتروني."},{t:"اختيار النشاط",d:"حدد نشاطك من قائمة الأنشطة المؤهلة."},{t:"تقديم الطلب",d:"امل الاستمارة وأرسل وثائقك."},{t:"مصادقة الجهة الجهوية",d:"تُراجع طلبك الجهة الجهوية للاستثمار."},{t:"استلام الشهادة",d:"تصلك شهادة المقاول الذاتي عبر البريد الإلكتروني أو بالجهة الجهوية."}],docs:[{l:"بطاقة التعريف الوطنية (مسح وجهين)",r:true},{l:"بريد إلكتروني فعّال",r:true},{l:"استمارة التصريح بالنشاط",r:true}]},
      time:"24h–3 jours", cost:"0 MAD", icon:"💼"
    },
    {
      id:"p-biz-2",
      fr:{title:"Création d'une SARL",desc:"Créer une société à responsabilité limitée (SARL) au Maroc.",org:"CRI / Tribunal de Commerce",steps:[{t:"Réserver le nom",d:"Déposez une demande de réservation de dénomination à l'OMPIC."},{t:"Rédiger les statuts",d:"Rédigez les statuts constitutifs (notaire ou CRI)."},{t:"Bloquer le capital",d:"Déposez le capital (min. 10 000 MAD) dans un compte bancaire bloqué."},{t:"Immatriculation RC",d:"Déposez le dossier complet au CRI."},{t:"Publication au BO",d:"Publiez un avis au Bulletin Officiel."},{t:"Obtenir l'ICE",d:"Recevez votre Identifiant Commun de l'Entreprise (ICE)."}],docs:[{l:"Statuts signés",r:true},{l:"Certificat de réservation de nom OMPIC",r:true},{l:"CIN des associés",r:true},{l:"Attestation de blocage du capital",r:true},{l:"Formulaire création CRI",r:true},{l:"Contrat de bail / domiciliation",r:true}]},
      ar:{title:"تأسيس شركة ذات مسؤولية محدودة",desc:"إنشاء شركة ذات مسؤولية محدودة في المغرب.",org:"المركز الجهوي للاستثمار",steps:[{t:"حجز الاسم التجاري",d:"قدّم طلب حجز التسمية التجارية لدى OMPIC."},{t:"صياغة النظام الأساسي",d:"حرّر النظام الأساسي لدى موثق أو الجهة الجهوية."},{t:"إيداع رأس المال",d:"أودع رأس المال (10,000 درهم على الأقل) في حساب بنكي مجمّد."},{t:"التسجيل في السجل التجاري",d:"قدّم الملف الكامل للجهة الجهوية للاستثمار."},{t:"النشر في الجريدة الرسمية",d:"انشر إشعاراً بالتأسيس في الجريدة الرسمية."},{t:"الحصول على المعرّف المشترك",d:"استلم معرّفك المشترك للمقاولة (ICE)."}],docs:[{l:"النظام الأساسي الموقَّع",r:true},{l:"شهادة حجز الاسم من OMPIC",r:true},{l:"بطاقات تعريف الشركاء",r:true},{l:"شهادة إيداع رأس المال",r:true},{l:"استمارة التأسيس",r:true},{l:"عقد الكراء أو التوطين",r:true}]},
      time:"3–7 jours", cost:"1000–3000 MAD", icon:"🏢"
    },
    {
      id:"p-biz-3",
      fr:{title:"Immatriculation à la CNSS (employeur)",desc:"Affilier votre entreprise à la Caisse Nationale de Sécurité Sociale.",org:"CNSS",steps:[{t:"Préparer le dossier",d:"Registre de commerce, statuts de société, CIN du gérant."},{t:"Se rendre à l'agence CNSS",d:"Visitez l'agence CNSS avec votre dossier complet."},{t:"Remplir la demande",d:"Complétez le formulaire d'immatriculation employeur."},{t:"Immatriculation des salariés",d:"Pour chaque salarié : CIN, contrat de travail, photo."},{t:"Numéro CNSS",d:"Vous recevez votre numéro d'affiliation sous 2 semaines."}],docs:[{l:"Registre de commerce",r:true},{l:"Statuts de la société",r:true},{l:"CIN du gérant",r:true},{l:"Formulaire CNSS",r:true},{l:"Contrats de travail (si salariés)",r:false}]},
      ar:{title:"الانخراط في CNSS (صاحب العمل)",desc:"تسجيل مقاولتك في الصندوق الوطني للضمان الاجتماعي.",org:"CNSS",steps:[{t:"تجهيز الملف",d:"السجل التجاري، النظام الأساسي، بطاقة هوية المسير."},{t:"التوجه إلى وكالة CNSS",d:"احضر إلى أقرب وكالة مع ملفك الكامل."},{t:"ملء الطلب",d:"أكمل استمارة التسجيل كمشغّل."},{t:"تسجيل الأجراء",d:"لكل أجير: بطاقة هوية، عقد عمل، صورة."},{t:"رقم CNSS",d:"تستلم رقم انخراطك خلال أسبوعين."}],docs:[{l:"السجل التجاري",r:true},{l:"النظام الأساسي للشركة",r:true},{l:"بطاقة هوية المسير",r:true},{l:"استمارة CNSS",r:true},{l:"عقود العمل (إن وُجد أجراء)",r:false}]},
      time:"1–2 semaines", cost:"Gratuit", icon:"🏥"
    }
  ],
  education: [
    {
      id:"p-edu-1",
      fr:{title:"Inscription universitaire (bac+)",desc:"S'inscrire dans une université publique après le baccalauréat.",org:"Ministère de l'Enseignement Supérieur",steps:[{t:"Orientation sur Massar",d:"Consultez vos propositions d'orientation sur massar.men.gov.ma."},{t:"Confirmer le choix",d:"Acceptez votre orientation dans les délais impartis."},{t:"Préparer le dossier",d:"Baccalauréat original, photos, formulaire d'inscription."},{t:"Paiement",d:"Payez les frais (≈400 MAD) au service de scolarité."},{t:"Carte étudiant",d:"Retirez votre carte d'étudiant en début d'année."}],docs:[{l:"Baccalauréat original + copie",r:true},{l:"Acte de naissance",r:true},{l:"CIN (copie)",r:true},{l:"4 photos d'identité",r:true},{l:"Formulaire d'inscription",r:true}]},
      ar:{title:"التسجيل الجامعي",desc:"التسجيل في جامعة عمومية بعد الحصول على الباكالوريا.",org:"وزارة التعليم العالي",steps:[{t:"التوجيه عبر مسار",d:"اطّلع على مقترحات التوجيه على massar.men.gov.ma."},{t:"تأكيد الاختيار",d:"اقبل توجيهك في الآجال المحددة."},{t:"تجهيز الملف",d:"الباكالوريا الأصلية، صور، واستمارة التسجيل."},{t:"الدفع",d:"ادفع الرسوم (حوالي 400 درهم) بمصلحة الشؤون الطلابية."},{t:"البطاقة الطلابية",d:"استلم بطاقتك الطلابية في بداية السنة."}],docs:[{l:"شهادة الباكالوريا (أصل + نسخة)",r:true},{l:"شهادة الميلاد",r:true},{l:"نسخة من بطاقة التعريف",r:true},{l:"4 صور شخصية",r:true},{l:"استمارة التسجيل",r:true}]},
      time:"Variable", cost:"400 MAD/an", icon:"🎓"
    },
    {
      id:"p-edu-2",
      fr:{title:"Bourse d'études",desc:"Demander une bourse nationale d'études supérieures.",org:"Min. Enseignement Supérieur / CNOPS",steps:[{t:"Vérifier l'éligibilité",d:"Revenus parentaux, résultats scolaires, situation familiale."},{t:"Dossier en ligne",d:"Remplissez la demande sur le portail du ministère."},{t:"Pièces justificatives",d:"Formulaire + bulletins + attestation scolarité + revenus parentaux."},{t:"Validation",d:"Votre établissement valide le dossier."},{t:"Attribution",d:"Vous êtes notifié de l'attribution ou du refus."}],docs:[{l:"Relevés de notes (dernière année)",r:true},{l:"Attestation d'inscription",r:true},{l:"Déclaration revenus parents (DGI)",r:true},{l:"CIN étudiant",r:true},{l:"Formulaire de demande",r:true}]},
      ar:{title:"منحة دراسية",desc:"التقدم لمنحة دراسية وطنية للتعليم العالي.",org:"وزارة التعليم العالي / CNOPS",steps:[{t:"التحقق من الأهلية",d:"الدخل الأسري، النتائج الدراسية، الوضع الاجتماعي."},{t:"تعبئة الطلب إلكترونياً",d:"امل الطلب على بوابة الوزارة."},{t:"الوثائق المطلوبة",d:"الاستمارة + كشف النقط + شهادة التسجيل + دخل الوالدين."},{t:"المصادقة",d:"يُصادق مؤسستك على الملف."},{t:"الإشعار بالنتيجة",d:"تُخطَر بمنح المنحة أو رفضها."}],docs:[{l:"كشف النقط (السنة الأخيرة)",r:true},{l:"شهادة التسجيل",r:true},{l:"تصريح دخل الوالدين (DGI)",r:true},{l:"بطاقة هوية الطالب",r:true},{l:"استمارة الطلب",r:true}]},
      time:"1–3 mois", cost:"Gratuit", icon:"📚"
    }
  ],
  transport: [
    {
      id:"p-trans-1",
      fr:{title:"Permis de conduire catégorie B",desc:"Obtenir votre permis de conduire de catégorie B (voiture).",org:"Ministère du Transport",steps:[{t:"Choisir une auto-école agréée",d:"Inscrivez-vous dans une auto-école agréée par le Ministère."},{t:"Formation théorique",d:"Suivez les cours de code de la route (min. 10h obligatoires)."},{t:"Examen du code",d:"Passez l'examen théorique au centre d'examen."},{t:"Formation pratique",d:"Effectuez les heures de conduite avec un moniteur agréé."},{t:"Examen de conduite",d:"Passez l'examen pratique avec un inspecteur."},{t:"Retrait du permis",d:"Retirez votre permis définitif après 4–6 semaines."}],docs:[{l:"CIN valide",r:true},{l:"Certificat médical (médecin agréé)",r:true},{l:"2 photos d'identité",r:true},{l:"Formulaire de demande permis",r:true},{l:"Attestation auto-école",r:true}]},
      ar:{title:"رخصة السياقة صنف B",desc:"استخراج رخصة سياقة السيارات الخاصة (صنف B).",org:"وزارة النقل",steps:[{t:"اختيار مدرسة سياقة معتمدة",d:"سجّل في مدرسة سياقة معتمدة لدى وزارة النقل."},{t:"التكوين النظري",d:"احضر دروس قانون الطريق (10 ساعات على الأقل)."},{t:"امتحان القانون",d:"اجتز الامتحان النظري في مركز الامتحانات."},{t:"التدريب التطبيقي",d:"قُد السيارة مع مدرب معتمد للساعات المقررة."},{t:"امتحان السياقة",d:"اجتز الامتحان التطبيقي أمام مفتش وزارة النقل."},{t:"استلام الرخصة",d:"استلم رخصتك النهائية بعد 4 إلى 6 أسابيع."}],docs:[{l:"بطاقة التعريف الوطنية",r:true},{l:"شهادة طبية (من طبيب معتمد)",r:true},{l:"صورتان شخصيتان",r:true},{l:"استمارة طلب الرخصة",r:true},{l:"شهادة مدرسة السياقة",r:true}]},
      time:"1–3 mois", cost:"700–1500 MAD", icon:"🚗"
    },
    {
      id:"p-trans-2",
      fr:{title:"Abonnement ONCF (carte Hifadha)",desc:"Souscrire à une carte d'abonnement ferroviaire ONCF.",org:"ONCF",steps:[{t:"Choisir le type d'abonnement",d:"Étudiant, sénior, famille ou professionnel selon votre profil."},{t:"Se rendre en gare",d:"Allez au guichet Hifadha dans n'importe quelle grande gare ONCF."},{t:"Remplir le formulaire",d:"Complétez la fiche de souscription."},{t:"Payer et retirer",d:"Payez et récupérez la carte immédiatement."}],docs:[{l:"CIN valide",r:true},{l:"1 photo d'identité",r:true},{l:"Justificatif de statut (étudiant/sénior si applicable)",r:false}]},
      ar:{title:"اشتراك ONCF (بطاقة حفاظة)",desc:"الاشتراك في بطاقة القطار ONCF.",org:"المكتب الوطني للسكك الحديدية",steps:[{t:"اختيار نوع الاشتراك",d:"طالب، مسن، عائلي أو مهني حسب وضعك."},{t:"التوجه إلى المحطة",d:"احضر إلى شباك حفاظة في أي محطة ONCF رئيسية."},{t:"ملء الاستمارة",d:"أكمل استمارة الاشتراك."},{t:"الدفع والاستلام",d:"ادفع واستلم البطاقة فوراً."}],docs:[{l:"بطاقة التعريف الوطنية",r:true},{l:"صورة شخصية واحدة",r:true},{l:"وثيقة الوضعية (طالب/مسن إن اقتضى)",r:false}]},
      time:"Immédiat", cost:"100–300 MAD", icon:"🚂"
    }
  ],
  social: [
    {
      id:"p-soc-1",
      fr:{title:"Inscription à l'ANAPEC",desc:"S'inscrire à l'ANAPEC pour bénéficier de l'accompagnement à l'emploi.",org:"ANAPEC",steps:[{t:"Créer un compte",d:"Inscrivez-vous sur anapec.org avec email et CIN."},{t:"Compléter le profil",d:"Ajoutez diplômes, expériences, compétences."},{t:"Déposer le CV",d:"Téléchargez votre CV en PDF."},{t:"Rendez-vous conseiller",d:"Prenez RDV avec un conseiller ANAPEC."},{t:"Plan d'action",d:"Le conseiller élabore votre plan de recherche d'emploi."}],docs:[{l:"CIN valide",r:true},{l:"CV à jour (PDF)",r:true},{l:"Diplômes et attestations",r:true},{l:"Photo d'identité",r:true}]},
      ar:{title:"التسجيل في ANAPEC",desc:"التسجيل في الوكالة الوطنية لإنعاش التشغيل للاستفادة من مرافقة التشغيل.",org:"الوكالة الوطنية لإنعاش التشغيل",steps:[{t:"إنشاء حساب",d:"سجّل على anapec.org ببريدك الإلكتروني وبطاقتك."},{t:"إتمام الملف الشخصي",d:"أضف شهاداتك وخبراتك ومهاراتك."},{t:"رفع السيرة الذاتية",d:"حمّل سيرتك الذاتية بصيغة PDF."},{t:"موعد مع المستشار",d:"احجز موعداً مع مستشار ANAPEC."},{t:"خطة العمل",d:"يُعدّ المستشار معك خطة بحث عن الشغل."}],docs:[{l:"بطاقة التعريف الوطنية",r:true},{l:"سيرة ذاتية محينة (PDF)",r:true},{l:"الشهادات والوثائق الداعمة",r:true},{l:"صورة شخصية",r:true}]},
      time:"Immédiat", cost:"Gratuit", icon:"📋"
    },
    {
      id:"p-soc-2",
      fr:{title:"Allocation chômage (Indemnité Perte d'Emploi)",desc:"Demander l'indemnité pour perte d'emploi auprès de la CNSS.",org:"CNSS",steps:[{t:"Vérifier l'éligibilité",d:"Minimum 780 jours de cotisation sur 36 mois avant le licenciement."},{t:"Dépôt dans les 60 jours",d:"Déposez votre dossier à l'agence CNSS dans les 60 jours suivant la perte d'emploi."},{t:"Instruction du dossier",d:"La CNSS examine vos droits."},{t:"Décision",d:"Vous recevez une notification d'acceptation ou refus."},{t:"Versement",d:"L'indemnité est versée mensuellement sur votre compte bancaire."}],docs:[{l:"CIN valide",r:true},{l:"Lettre de licenciement / fin de contrat",r:true},{l:"Attestation de travail",r:true},{l:"RIB bancaire",r:true},{l:"Formulaire de demande CNSS",r:true}]},
      ar:{title:"تعويض فقدان الشغل",desc:"التقدم بطلب تعويض فقدان الشغل لدى الصندوق الوطني للضمان الاجتماعي.",org:"CNSS",steps:[{t:"التحقق من الأهلية",d:"780 يوم اشتراك على الأقل خلال 36 شهراً قبل فقدان العمل."},{t:"الإيداع في 60 يوماً",d:"قدّم ملفك لوكالة CNSS خلال 60 يوماً من فقدان الشغل."},{t:"دراسة الملف",d:"يدرس الصندوق حقوقك."},{t:"القرار",d:"تُخطَر بالقبول أو الرفض."},{t:"صرف التعويض",d:"يُصرف التعويض شهرياً في حسابك البنكي."}],docs:[{l:"بطاقة التعريف الوطنية",r:true},{l:"رسالة الفصل أو انتهاء العقد",r:true},{l:"شهادة العمل",r:true},{l:"بيانات الحساب البنكي (RIB)",r:true},{l:"استمارة طلب CNSS",r:true}]},
      time:"2–4 semaines", cost:"Gratuit", icon:"💳"
    },
    {
      id:"p-soc-3",
      fr:{title:"AMO (Assurance Maladie Obligatoire)",desc:"S'affilier à l'assurance maladie via la CNSS ou la CNOPS.",org:"CNSS / CNOPS",steps:[{t:"Vérifier votre caisse",d:"Secteur privé : CNSS. Secteur public : CNOPS."},{t:"Immatriculation",d:"L'employeur vous immatricule automatiquement à la CNSS."},{t:"Obtenir la carte AMO",d:"Demandez votre carte AMO à votre agence CNSS."},{t:"Utilisation",d:"Présentez la carte AMO chez le médecin ou pharmacie pour bénéficier du remboursement."}],docs:[{l:"CIN valide",r:true},{l:"Contrat de travail",r:true},{l:"Photo d'identité",r:false}]},
      ar:{title:"التأمين الإجباري عن المرض (AMO)",desc:"الانخراط في التأمين الإجباري عن المرض عبر CNSS أو CNOPS.",org:"CNSS / CNOPS",steps:[{t:"تحديد صندوقك",d:"القطاع الخاص: CNSS. القطاع العام: CNOPS."},{t:"التسجيل",d:"يُسجّلك صاحب العمل تلقائياً في CNSS."},{t:"بطاقة AMO",d:"اطلب بطاقتك من وكالة CNSS."},{t:"الاستخدام",d:"قدّم البطاقة عند الطبيب أو الصيدلية للاستفادة من التغطية."}],docs:[{l:"بطاقة التعريف الوطنية",r:true},{l:"عقد العمل",r:true},{l:"صورة شخصية",r:false}]},
      time:"1–2 semaines", cost:"Gratuit", icon:"🏥"
    }
  ]
};

/* ── OFFICES ── */
const offices = {
  casablanca: [
    {org:"Wilaya",name:"Wilaya du Grand Casablanca",addr:"Av. Hassan II, Casablanca",tel:"0522-271-000",hours:"Lun–Ven 08h30–16h30",map:"https://maps.google.com/?q=Wilaya+Casablanca"},
    {org:"CNSS",name:"CNSS — Agence Maarif",addr:"Av. Omar Ibn Khattab, Maarif",tel:"0802-003-600",hours:"Lun–Ven 08h30–16h00",map:"https://maps.google.com/?q=CNSS+Maarif+Casablanca"},
    {org:"ANAPEC",name:"ANAPEC Casablanca Centre",addr:"Rue Ibnou Toufail, Casablanca",tel:"0522-233-041",hours:"Lun–Ven 08h30–16h30",map:"https://maps.google.com/?q=ANAPEC+Casablanca"},
    {org:"CRI",name:"CRI Grand Casablanca",addr:"Bd Mohammed V, Casablanca",tel:"0522-471-000",hours:"Lun–Ven 08h00–16h00",map:"https://maps.google.com/?q=CRI+Casablanca"},
    {org:"ONCF",name:"Gare Casa-Voyageurs",addr:"Bd Mohammed V, Casablanca",tel:"0890-203-040",hours:"06h00–23h00 (7j/7)",map:"https://maps.google.com/?q=Gare+Casa+Voyageurs"},
    {org:"Préfecture",name:"Préfecture Ain Chock",addr:"Ain Chock, Casablanca",tel:"0522-852-000",hours:"Lun–Ven 08h30–16h30",map:"https://maps.google.com/?q=Prefecture+Ain+Chock+Casablanca"},
  ],
  rabat:[
    {org:"Wilaya",name:"Wilaya de Rabat",addr:"Av. Mohammed V, Rabat",tel:"0537-720-000",hours:"Lun–Ven 08h30–16h30",map:"https://maps.google.com/?q=Wilaya+Rabat"},
    {org:"CNSS",name:"CNSS Agence Rabat",addr:"Av. Al Maghrib Al Arabi, Rabat",tel:"0802-003-600",hours:"Lun–Ven 08h30–16h00",map:"https://maps.google.com/?q=CNSS+Rabat"},
    {org:"ANAPEC",name:"ANAPEC Rabat",addr:"Hay Riad, Rabat",tel:"0537-578-700",hours:"Lun–Ven 08h30–16h30",map:"https://maps.google.com/?q=ANAPEC+Rabat"},
    {org:"ONCF",name:"Gare Rabat-Ville",addr:"Av. Mohammed V, Rabat",tel:"0890-203-040",hours:"05h30–23h00 (7j/7)",map:"https://maps.google.com/?q=Gare+Rabat+Ville"},
    {org:"CRI",name:"CRI Rabat-Salé",addr:"Hay Riad, Rabat",tel:"0537-570-100",hours:"Lun–Ven 08h00–16h00",map:"https://maps.google.com/?q=CRI+Rabat"},
  ],
  marrakech:[
    {org:"Wilaya",name:"Wilaya de Marrakech",addr:"Av. Mohammed VI, Marrakech",tel:"0524-420-000",hours:"Lun–Ven 08h30–16h30",map:"https://maps.google.com/?q=Wilaya+Marrakech"},
    {org:"CNSS",name:"CNSS Agence Marrakech",addr:"Av. Mohammed VI, Marrakech",tel:"0802-003-600",hours:"Lun–Ven 08h30–16h00",map:"https://maps.google.com/?q=CNSS+Marrakech"},
    {org:"ANAPEC",name:"ANAPEC Marrakech",addr:"Guéliz, Marrakech",tel:"0524-448-900",hours:"Lun–Ven 08h30–16h30",map:"https://maps.google.com/?q=ANAPEC+Marrakech"},
    {org:"ONCF",name:"Gare de Marrakech",addr:"Av. Hassan II, Marrakech",tel:"0890-203-040",hours:"06h00–22h00 (7j/7)",map:"https://maps.google.com/?q=Gare+Marrakech"},
  ],
  fes:[
    {org:"Wilaya",name:"Wilaya de Fès",addr:"Av. Hassan II, Fès",tel:"0535-624-000",hours:"Lun–Ven 08h30–16h30",map:"https://maps.google.com/?q=Wilaya+Fes"},
    {org:"CNSS",name:"CNSS Agence Fès",addr:"Av. Allal El Fassi, Fès",tel:"0802-003-600",hours:"Lun–Ven 08h30–16h00",map:"https://maps.google.com/?q=CNSS+Fes"},
    {org:"ANAPEC",name:"ANAPEC Fès",addr:"Narjiss, Fès",tel:"0535-654-900",hours:"Lun–Ven 08h30–16h30",map:"https://maps.google.com/?q=ANAPEC+Fes"},
    {org:"ONCF",name:"Gare de Fès",addr:"Av. des Almohades, Fès",tel:"0890-203-040",hours:"06h00–22h00 (7j/7)",map:"https://maps.google.com/?q=Gare+Fes"},
  ]
};

/* ── FORMS ── */
const forms = [
  {icon:"🛂",title:"Demande de passeport",org:"Direction Migration",size:"PDF · 120 KB",url:"https://portail.gov.ma"},
  {icon:"🪪",title:"Demande de CIN",org:"DGSN",size:"PDF · 95 KB",url:"https://portail.gov.ma"},
  {icon:"🏥",title:"Immatriculation CNSS employeur",org:"CNSS",size:"PDF · 210 KB",url:"https://cnss.ma"},
  {icon:"💼",title:"Déclaration auto-entrepreneur",org:"CRI / OMPIC",size:"PDF · 80 KB",url:"https://autoentrepreneur.ma"},
  {icon:"🎓",title:"Inscription universitaire",org:"Min. Enseignement Sup.",size:"PDF · 150 KB",url:"https://massar.men.gov.ma"},
  {icon:"🚗",title:"Demande permis de conduire",org:"Min. Transport",size:"PDF · 180 KB",url:"https://portail.gov.ma"},
  {icon:"💳",title:"Demande allocation chômage",org:"CNSS",size:"PDF · 200 KB",url:"https://cnss.ma"},
  {icon:"🏠",title:"Certificat de résidence",org:"Arrondissement",size:"PDF · 60 KB",url:"https://portail.gov.ma"},
  {icon:"🏢",title:"Création SARL — dossier CRI",org:"CRI",size:"PDF · 350 KB",url:"https://cri.ma"},
  {icon:"🚂",title:"Abonnement ONCF Hifadha",org:"ONCF",size:"PDF · 90 KB",url:"https://oncf.ma"},
  {icon:"📋",title:"Fiche inscription ANAPEC",org:"ANAPEC",size:"PDF · 110 KB",url:"https://anapec.org"},
  {icon:"📜",title:"Extrait acte de naissance",org:"Commune",size:"PDF · 70 KB",url:"https://portail.gov.ma"},
];

const forms_ar = [
  {icon:"🛂",title:"طلب جواز السفر",org:"مديرية الهجرة",size:"PDF · 120 KB",url:"https://portail.gov.ma"},
  {icon:"🪪",title:"طلب بطاقة التعريف",org:"المديرية العامة للأمن",size:"PDF · 95 KB",url:"https://portail.gov.ma"},
  {icon:"🏥",title:"تسجيل صاحب العمل في CNSS",org:"CNSS",size:"PDF · 210 KB",url:"https://cnss.ma"},
  {icon:"💼",title:"تصريح المقاول الذاتي",org:"الجهة الجهوية",size:"PDF · 80 KB",url:"https://autoentrepreneur.ma"},
  {icon:"🎓",title:"التسجيل الجامعي",org:"وزارة التعليم العالي",size:"PDF · 150 KB",url:"https://massar.men.gov.ma"},
  {icon:"🚗",title:"طلب رخصة السياقة",org:"وزارة النقل",size:"PDF · 180 KB",url:"https://portail.gov.ma"},
  {icon:"💳",title:"طلب تعويض فقدان الشغل",org:"CNSS",size:"PDF · 200 KB",url:"https://cnss.ma"},
  {icon:"🏠",title:"شهادة الإقامة",org:"المقاطعة",size:"PDF · 60 KB",url:"https://portail.gov.ma"},
  {icon:"🏢",title:"تأسيس ش.م.م — ملف المركز الجهوي",org:"الجهة الجهوية",size:"PDF · 350 KB",url:"https://cri.ma"},
  {icon:"🚂",title:"اشتراك ONCF حفاظة",org:"المكتب الوطني للسكك الحديدية",size:"PDF · 90 KB",url:"https://oncf.ma"},
  {icon:"📋",title:"استمارة التسجيل في ANAPEC",org:"ANAPEC",size:"PDF · 110 KB",url:"https://anapec.org"},
  {icon:"📜",title:"مستخرج من سجل الحالة المدنية",org:"الجماعة",size:"PDF · 70 KB",url:"https://portail.gov.ma"},
];

/* ── FAQs ── */
const faqs = {
  fr:[
    {q:"Dois-je prendre rendez-vous avant de me rendre dans un bureau ?",a:"Pour la plupart des démarches, il est recommandé de prendre rendez-vous en ligne via portail.gov.ma ou directement par téléphone. Certains services acceptent les visites sans rendez-vous."},
    {q:"Mes documents étrangers doivent-ils être traduits ?",a:"Les documents doivent être en arabe ou en français. Toute autre langue nécessite une traduction certifiée par un traducteur assermenté."},
    {q:"Puis-je mandater quelqu'un pour effectuer une démarche ?",a:"Oui, avec une procuration légalisée. La personne mandatée doit présenter la procuration originale, sa CIN et tous vos documents."},
    {q:"Combien coûte une légalisation de signature ?",a:"La légalisation de signature est gratuite dans les arrondissements. Vous devez vous présenter en personne avec votre CIN."},
    {q:"Comment suivre l'avancement de mon dossier ?",a:"Sur portail.gov.ma avec votre numéro de récépissé. Pour la CNSS, utilisez cnss.ma ou l'application mobile CNSS."},
    {q:"Que faire face à une demande de corruption ?",a:"Ne payez jamais de montants non officiels. Signalez tout acte sur le portail INPPLC ou via le numéro vert 0801-00-3300."},
    {q:"Les photos d'identité ont-elles des normes précises ?",a:"Oui : récentes (< 6 mois), fond blanc uni, format 3.5×4.5 cm, sans lunettes, regard direct, visage bien visible."},
    {q:"Les étrangers résidant au Maroc peuvent-ils utiliser ces services ?",a:"Oui, avec titre de séjour valide (carte résident ou visa). Certaines démarches nécessitent une inscription consulaire."},
  ],
  ar:[
    {q:"هل يجب الحجز لموعد قبل التوجه إلى المكتب؟",a:"يُنصح بحجز موعد عبر portail.gov.ma أو بالهاتف لمعظم الإجراءات. بعض الخدمات تقبل الحضور المباشر دون موعد مسبق."},
    {q:"هل يجب ترجمة وثائقي الأجنبية؟",a:"يجب أن تكون الوثائق بالعربية أو الفرنسية. كل وثيقة بلغة أخرى تستلزم ترجمة معتمدة من مترجم محلَّف."},
    {q:"هل يمكنني توكيل شخص للقيام بإجراءاتي؟",a:"نعم، بتوكيل رسمي مُصادق عليه. يجب على الوكيل تقديم التوكيل الأصلي وبطاقة هويته وجميع وثائقك."},
    {q:"كم يكلف تصحيح الإمضاء؟",a:"تصحيح الإمضاء مجاني في المقاطعات. يجب الحضور شخصياً مع بطاقة التعريف الوطنية."},
    {q:"كيف أتابع تقدم ملفي؟",a:"عبر portail.gov.ma بإدخال رقم الوصل. لـCNSS، استخدم cnss.ma أو تطبيق CNSS الجوال."},
    {q:"ماذا أفعل في حال طُلب مني رشوة؟",a:"لا تدفع أي مبلغ غير رسمي. بلّغ عن أي فعل فساد عبر بوابة INPPLC أو الرقم المجاني 0801-00-3300."},
    {q:"هل للصور الشخصية مواصفات محددة؟",a:"نعم: حديثة (أقل من 6 أشهر)، خلفية بيضاء، مقاس 3.5×4.5 سم، بدون نظارات، نظرة مباشرة، وجه ظاهر بوضوح."},
    {q:"هل يمكن للأجانب المقيمين في المغرب الاستفادة من هذه الخدمات؟",a:"نعم، ببطاقة الإقامة أو التأشيرة السارية. بعض الإجراءات تستلزم تسجيلاً قنصلياً."},
  ]
};

/* ── CATEGORIES META ── */
const catMeta = {
  civil:    {icon:"🪪", colorClass:"ci-red",    fr:{label:"État Civil",    desc:"Passeport, CIN, actes d'état civil"},           ar:{label:"الحالة المدنية",   desc:"جواز السفر، بطاقة التعريف، سجلات الحالة المدنية"}},
  business: {icon:"💼", colorClass:"ci-gold",   fr:{label:"Entreprise",    desc:"Création SARL, auto-entrepreneur, CNSS"},        ar:{label:"المقاولات",        desc:"تأسيس الشركات، المقاول الذاتي، CNSS"}},
  education:{icon:"🎓", colorClass:"ci-green",  fr:{label:"Éducation",     desc:"Inscription universitaire, bourses"},             ar:{label:"التعليم",          desc:"التسجيل الجامعي، المنح الدراسية"}},
  transport:{icon:"🚗", colorClass:"ci-blue",   fr:{label:"Transport",     desc:"Permis de conduire, ONCF, cartes"},               ar:{label:"النقل",            desc:"رخصة السياقة، ONCF، بطاقات النقل"}},
  social:   {icon:"🤝", colorClass:"ci-purple", fr:{label:"Social",        desc:"ANAPEC, chômage, assurance maladie"},             ar:{label:"الشؤون الاجتماعية",desc:"ANAPEC، فقدان الشغل، التأمين الصحي"}},
};

/* ── UTILS ── */
let currentLang = localStorage.getItem('idari-lang') || 'fr';

function getLang() { return currentLang; }

function setLang(l) {
  currentLang = l;
  localStorage.setItem('idari-lang', l);
  document.body.classList.toggle('rtl', l === 'ar');
  document.documentElement.lang = l;
  document.documentElement.dir  = l === 'ar' ? 'rtl' : 'ltr';
  if (typeof applyLang === 'function') applyLang(l);
}

function initLang() {
  const l = currentLang;
  document.body.classList.toggle('rtl', l === 'ar');
  document.documentElement.lang = l;
  document.documentElement.dir  = l === 'ar' ? 'rtl' : 'ltr';
}

function showToast(msg) {
  const t = document.getElementById('idari-toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

function toggleDoc(pid, idx) {
  const chk = document.getElementById(`chk-${pid}-${idx}`);
  const lbl = document.getElementById(`lbl-${pid}-${idx}`);
  if (!chk) return;
  chk.classList.toggle('checked');
  lbl.classList.toggle('checked');
  updateProgress(pid);
}

function updateProgress(pid) {
  const allChks = document.querySelectorAll(`[id^="chk-${pid}-"]`);
  const done = [...allChks].filter(c => c.classList.contains('checked')).length;
  const total = allChks.length;
  const pct = total ? Math.round(done / total * 100) : 0;
  const bar = document.getElementById(`prog-${pid}`);
  const lbl = document.getElementById(`prog-lbl-${pid}`);
  if (bar) bar.style.width = pct + '%';
  if (lbl) lbl.textContent = `${done}/${total} ${T[getLang()].progLabel}`;
}

function buildNav(activePage) {
  const l = getLang();
  const t = T[l];
  const pages = [
    {key:'index',    label:t.navHome,      href:'../index.html'},
    {key:'civil',    label:t.navCivil,     href:'civil.html'},
    {key:'business', label:t.navBusiness,  href:'business.html'},
    {key:'education',label:t.navEdu,       href:'education.html'},
    {key:'transport',label:t.navTransport, href:'transport.html'},
    {key:'social',   label:t.navSocial,    href:'social.html'},
    {key:'offices',  label:t.navOffices,   href:'offices.html'},
    {key:'forms',    label:t.navForms,     href:'forms.html'},
    {key:'faq',      label:t.navFaq,       href:'faq.html'},
  ];
  return `
  <nav class="navbar navbar-expand-lg idari-nav">
    <div class="container">
      <a class="navbar-brand" href="../index.html">
        <div class="nav-flag"></div>
        <span class="brand-ar">إداري</span><span class="brand-sep">|</span>Idari
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto gap-1">
          ${pages.map(p=>`<li class="nav-item"><a class="nav-link${p.key===activePage?' active':''}" href="${p.href}">${p.label}</a></li>`).join('')}
        </ul>
        <div class="d-flex align-items-center gap-2 mt-2 mt-lg-0">
          <button class="lang-btn" onclick="setLang(getLang()==='fr'?'ar':'fr')" id="lang-toggle">${l==='fr'?'عربي':'Français'}</button>
          <a class="nav-link nav-contact-btn" href="contact.html">${t.navContact}</a>
        </div>
      </div>
    </div>
  </nav>`;
}

function buildFooter() {
  const l = getLang();
  const t = T[l];
  return `
  <footer class="idari-footer">
    <div class="container">
      <div class="footer-flag">
        <div class="flag-seg" style="background:#C0392B"></div>
        <div class="flag-seg" style="background:#1A6B3A"></div>
        <div class="flag-seg" style="background:#C0392B"></div>
      </div>
      <div class="footer-brand mb-1">إداري <span>Idari</span></div>
      <p class="mb-2" style="font-size:.8rem">${t.footerNote}</p>
      <div class="footer-links mb-2">
        <a href="civil.html">${t.navCivil}</a>
        <a href="business.html">${t.navBusiness}</a>
        <a href="education.html">${t.navEdu}</a>
        <a href="transport.html">${t.navTransport}</a>
        <a href="social.html">${t.navSocial}</a>
        <a href="offices.html">${t.navOffices}</a>
        <a href="forms.html">${t.navForms}</a>
        <a href="faq.html">${t.navFaq}</a>
        <a href="contact.html">${t.navContact}</a>
      </div>
      <div style="font-size:.72rem;color:rgba(255,255,255,.3)">${t.footerCopy}</div>
    </div>
  </footer>
  <div class="idari-toast" id="idari-toast"></div>`;
}

function buildProcCards(cat) {
  const l = getLang();
  const t = T[l];
  const procs = procedures[cat] || [];
  if (!procs.length) return '<p class="text-muted">Aucune procédure.</p>';
  return procs.map(p => {
    const d = p[l];
    return `
    <div class="col-md-6 col-lg-4 mb-4 fade-up">
      <div class="proc-card h-100">
        <div class="proc-card-org">${d.org}</div>
        <div class="d-flex align-items-center gap-2 mb-2">
          <span style="font-size:1.3rem">${p.icon}</span>
          <h5 class="mb-0">${d.title}</h5>
        </div>
        <p>${d.desc}</p>
        <div class="mb-2">
          <span class="proc-pill">⏱ ${p.time}</span>
          <span class="proc-pill">💰 ${p.cost}</span>
        </div>
        <button class="proc-btn" onclick="openProcModal('${p.id}','${cat}')">
          ${t.detailsBtn}
        </button>
      </div>
    </div>`;
  }).join('');
}

function buildProcModal(pid, cat) {
  const l = getLang();
  const t = T[l];
  const p = (procedures[cat]||[]).find(x=>x.id===pid);
  if (!p) return;
  const d = p[l];
  document.getElementById('modal-org').textContent = d.org;
  document.getElementById('modal-title').textContent = d.title;
  document.getElementById('modal-body').innerHTML = `
    <p class="mb-3" style="font-size:.88rem;color:var(--ink-mid)">${d.desc}</p>
    <div class="info-pill-row">
      <div class="info-pill"><span>⏱</span> ${t.timeLabel}: <strong>${p.time}</strong></div>
      <div class="info-pill"><span>💰</span> ${t.costLabel}: <strong>${p.cost}</strong></div>
    </div>
    <h6 class="mt-3 mb-2" style="font-size:.75rem;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-muted)">${t.stepsLabel}</h6>
    <div class="mb-3">
      ${d.steps.map((s,i)=>`
        <div class="step-item">
          <div class="step-num">${i+1}</div>
          <div><div class="step-title">${s.t}</div><div class="step-desc">${s.d}</div></div>
        </div>`).join('')}
    </div>
    <h6 class="mb-2" style="font-size:.75rem;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-muted)">${t.docsLabel}</h6>
    <div class="progress-wrap mb-1"><div class="progress-fill" id="prog-${pid}" style="width:0%"></div></div>
    <div class="mb-2" style="font-size:.75rem;color:var(--ink-muted)" id="prog-lbl-${pid}">0/${d.docs.length} ${t.progLabel}</div>
    <div class="mb-3">
      ${d.docs.map((doc,i)=>`
        <div class="doc-item" onclick="toggleDoc('${pid}',${i})">
          <div class="doc-check" id="chk-${pid}-${i}"></div>
          <span class="doc-label flex-grow-1" id="lbl-${pid}-${i}">${doc.l}</span>
          <span class="${doc.r?'badge-req':'badge-opt'}">${doc.r?t.req:t.opt}</span>
        </div>`).join('')}
    </div>
    <div class="d-flex gap-2 flex-wrap">
      <button class="btn-idari-primary" style="font-size:.8rem;padding:8px 16px" onclick="showToast('${t.toastSaved}')">${t.saveBtn}</button>
      <button class="btn-idari-secondary" style="font-size:.8rem;padding:8px 16px" onclick="window.print()">${t.printBtn}</button>
    </div>`;
  const modal = new bootstrap.Modal(document.getElementById('procModal'));
  modal.show();
}

function openProcModal(pid, cat) {
  buildProcModal(pid, cat);
}
