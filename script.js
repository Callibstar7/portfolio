const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  });
});

const translations = {
  fr: {
    'A little more room to breathe.': 'Un peu plus d’espace pour respirer.',
    'Get your free estimate': 'Obtenez votre devis gratuit',
    'Little Nest Home Care, home': 'Little Nest Home Care, accueil',
    'Open navigation': 'Ouvrir la navigation',
    'Close navigation': 'Fermer la navigation',
    'Main navigation': 'Navigation principale',
    'Services': 'Services', 'About us': 'À propos', 'Kind words': 'Témoignages', 'Let’s talk': 'Parlons-en',
    'YOUR NEIGHBORHOOD HOME CARE TEAM': 'VOTRE ÉQUIPE LOCALE D’ENTRETIEN À DOMICILE',
    'Come home': 'Rentrez chez vous', 'to': 'au ', 'calm.': 'calme.',
    'A clean, cared-for home changes how your whole week feels. We make it easier to find your footing, catch your breath, and get back to what matters.': 'Une maison propre et bien entretenue change toute votre semaine. Nous vous aidons à souffler et à retrouver du temps pour l’essentiel.',
    'Find your kind of clean': 'Trouvez le ménage qui vous convient', 'See what we do': 'Découvrez nos services',
    'Five out of five stars': 'Cinq étoiles sur cinq', 'Kind words from 120+ local homes': 'Les avis de plus de 120 foyers du quartier',
    'Sunlit, thoughtfully cared-for living room': 'Salon lumineux et soigneusement entretenu', 'GOOD CARE.': 'UN SERVICE SOIGNÉ.', 'GOOD DAYS.': 'DE BELLES JOURNÉES.',
    'MADE FOR REAL LIFE': 'PENSÉ POUR LE QUOTIDIEN', 'A softer start to your week': 'Une semaine qui commence en douceur',
    'LOCAL PEOPLE. THOUGHTFUL CARE.': 'UNE ÉQUIPE LOCALE. UN SERVICE ATTENTIONNÉ.', 'SCROLL TO EXPLORE': 'FAITES DÉFILER POUR DÉCOUVRIR', 'SERVING OUR COMMUNITY SINCE 2018': 'AU SERVICE DU QUARTIER DEPUIS 2018',
    'GOOD CARE, YOUR WAY': 'UN SERVICE ADAPTÉ À VOS BESOINS', 'What would make': 'Qu’est-ce qui rendrait', 'home feel': 'votre maison plus ', 'better?': 'agréable ?',
    'Every home and every week is different. Pick the kind of help you need, and we’ll take care of the details.': 'Chaque maison et chaque semaine sont différentes. Choisissez le service qu’il vous faut, nous nous occupons du reste.',
    '01 / RESET': '01 / GRAND MÉNAGE', 'The feel-good clean': 'Le grand ménage fraîcheur', 'A thorough refresh for the rooms you live in most. We take care of the buildup, the little corners, and everything in between.': 'Un nettoyage en profondeur des pièces que vous utilisez le plus. Nous nous occupons des recoins et des détails.', 'Explore a home clean': 'Découvrir le grand ménage',
    '02 / KEEP UP': '02 / ENTRETIEN', 'Your regular reset': 'Votre entretien régulier', 'A reliable weekly, fortnightly, or monthly visit. A familiar face, a home that stays on top of itself, and one less thing to plan.': 'Une visite fiable chaque semaine, toutes les deux semaines ou chaque mois. Une maison toujours nette, sans souci de planification.', 'Find your rhythm': 'Choisir votre rythme',
    '03 / BIG MOMENT': '03 / NOUVEAU DÉPART', 'Fresh starts': 'Un nouveau départ', 'Moving in, moving out, or getting ready for a new chapter? We’ll help make the next step feel lighter.': 'Vous emménagez, déménagez ou préparez un nouveau chapitre ? Nous vous aidons à aborder la suite sereinement.', 'Plan a fresh start': 'Préparer un nouveau départ',
    'Not sure where to start? Tell us what’s on your mind and we’ll help you figure it out.': 'Vous ne savez pas par où commencer ? Parlez-nous de vos besoins et nous vous guiderons.',
    'A home care professional preparing supplies for a visit': 'Une professionnelle de l’entretien prépare ses produits avant une visite', 'THE LITTLE NEST DIFFERENCE · EST. 2018': 'LA TOUCHE LITTLE NEST · DEPUIS 2018',
    'A GOOD THING, DONE THOUGHTFULLY': 'UN SERVICE ATTENTIONNÉ, EN TOUTE SIMPLICITÉ', 'We believe home should feel like': 'Nous pensons que chez vous doit être ', 'your place.': 'votre cocon.',
    'At Little Nest Home Care, we make it easier to enjoy a clean, cared-for home. Our friendly local team provides thoughtful one-time and regular cleaning, with visits shaped around your home, schedule, and priorities.': 'Chez Little Nest Home Care, nous vous aidons à profiter d’une maison propre et accueillante. Notre équipe locale propose des ménages ponctuels ou réguliers, adaptés à votre logement, votre emploi du temps et vos priorités.',
    'People you can trust': 'Une équipe de confiance', 'Vetted, kind, and consistent': 'Vérifiée, attentionnée et fiable', 'Care that fits your life': 'Un service adapté à votre quotidien', 'Flexible visits, no fuss': 'Des visites flexibles, en toute simplicité', 'Get to know us': 'Découvrez notre équipe',
    'A FEW KIND WORDS': 'QUELQUES TÉMOIGNAGES', '5.0 FROM LOCAL CLIENTS': '5,0 SELON NOS CLIENTS',
    '“I walk through the door after work and can finally ': '« En rentrant du travail, je peux enfin ', 'exhale.': 'souffler.', 'It’s such a small thing that makes a huge difference.”': 'C’est un petit geste qui change beaucoup de choses. »', 'Regular home clean client': 'Client régulier',
    'YOUR NEXT STEP STARTS HERE': 'VOTRE PROCHAINE ÉTAPE COMMENCE ICI', 'Let’s make home': 'Faisons de votre maison', 'feel': 'à nouveau ', 'good again.': 'accueillante.',
    'Tell us a little about what you need. We’ll get back to you within one business day with a friendly, no-pressure estimate.': 'Dites-nous ce qu’il vous faut. Nous vous répondrons sous un jour ouvré avec un devis personnalisé et sans engagement.',
    'CALL US': 'APPELEZ-NOUS', 'EMAIL US': 'ÉCRIVEZ-NOUS', 'FIND US AROUND': 'NOTRE ZONE', 'Your town & nearby neighborhoods': 'Votre ville et les quartiers voisins',
    'Request a free estimate': 'Demander un devis gratuit', 'Usually takes about a minute': 'Cela prend environ une minute', 'Your name': 'Votre nom', 'Email address': 'Adresse e-mail',
    'What kind of help are you looking for?': 'De quel service avez-vous besoin ?', 'Choose a service': 'Choisissez un service', 'One-time home clean': 'Ménage ponctuel', 'Regular home clean': 'Ménage régulier', 'Move-in / move-out clean': 'Ménage d’emménagement ou de déménagement', 'Something else': 'Autre demande',
    'Anything else we should know?': 'Autre chose à nous signaler ?', 'OPTIONAL': 'FACULTATIF', 'Send my request': 'Envoyer ma demande', 'No pressure, no spam. Just a real person getting back to you.': 'Sans engagement ni spam. Une vraie personne vous répondra.',
    'LOCAL CARE FOR THE PLACE YOU CALL HOME.': 'UN SERVICE LOCAL POUR VOTRE CHEZ-VOUS.', 'BACK TO TOP ↑': 'RETOUR EN HAUT ↑', '© 2026 Little Nest Home Care. Made with care.': '© 2026 Little Nest Home Care. Fait avec soin.',
    'LANGUAGE': 'LANGUE', 'Choose language': 'Choisir la langue', 'Thanks! This sample form is ready to connect to your email or booking service.': 'Merci ! Ce formulaire est prêt à être relié à votre messagerie ou à votre service de réservation.',
    'e.g. Jamie Taylor': 'ex. Jamie Taylor', 'A little about your home, timing, or questions…': 'Quelques mots sur votre maison, vos disponibilités ou vos questions…'
  },
  es: {
    'A little more room to breathe.': 'Un poco más de espacio para respirar.',
    'Get your free estimate': 'Solicita tu presupuesto gratis',
    'Little Nest Home Care, home': 'Little Nest Home Care, inicio',
    'Open navigation': 'Abrir navegación', 'Close navigation': 'Cerrar navegación', 'Main navigation': 'Navegación principal',
    'Services': 'Servicios', 'About us': 'Sobre nosotros', 'Kind words': 'Opiniones', 'Let’s talk': 'Hablemos',
    'YOUR NEIGHBORHOOD HOME CARE TEAM': 'TU EQUIPO LOCAL DE LIMPIEZA DEL HOGAR',
    'Come home': 'Vuelve a casa', 'to': 'con ', 'calm.': 'tranquilidad.',
    'A clean, cared-for home changes how your whole week feels. We make it easier to find your footing, catch your breath, and get back to what matters.': 'Una casa limpia y cuidada puede cambiar toda tu semana. Te ayudamos a respirar con calma y dedicar tiempo a lo que más importa.',
    'Find your kind of clean': 'Encuentra el servicio ideal', 'See what we do': 'Descubre nuestros servicios',
    'Five out of five stars': 'Cinco estrellas de cinco', 'Kind words from 120+ local homes': 'Opiniones de más de 120 hogares de la zona',
    'Sunlit, thoughtfully cared-for living room': 'Sala luminosa y cuidadosamente atendida', 'GOOD CARE.': 'BUEN CUIDADO.', 'GOOD DAYS.': 'BUENOS DÍAS.',
    'MADE FOR REAL LIFE': 'PENSADO PARA LA VIDA REAL', 'A softer start to your week': 'Empieza la semana con más calma',
    'LOCAL PEOPLE. THOUGHTFUL CARE.': 'GENTE LOCAL. ATENCIÓN CON CARIÑO.', 'SCROLL TO EXPLORE': 'DESLIZA PARA EXPLORAR', 'SERVING OUR COMMUNITY SINCE 2018': 'AL SERVICIO DE LA COMUNIDAD DESDE 2018',
    'GOOD CARE, YOUR WAY': 'CUIDADO A TU MANERA', 'What would make': '¿Qué haría que tu', 'home feel': 'hogar se sintiera ', 'better?': 'mejor?',
    'Every home and every week is different. Pick the kind of help you need, and we’ll take care of the details.': 'Cada hogar y cada semana son diferentes. Elige la ayuda que necesitas y nos ocuparemos de los detalles.',
    '01 / RESET': '01 / RENOVAR', 'The feel-good clean': 'Una limpieza que se nota', 'A thorough refresh for the rooms you live in most. We take care of the buildup, the little corners, and everything in between.': 'Una limpieza a fondo de las habitaciones que más usas. Nos ocupamos de la suciedad acumulada, los rincones y todos los detalles.', 'Explore a home clean': 'Ver limpieza del hogar',
    '02 / KEEP UP': '02 / MANTENER', 'Your regular reset': 'Tu limpieza habitual', 'A reliable weekly, fortnightly, or monthly visit. A familiar face, a home that stays on top of itself, and one less thing to plan.': 'Una visita semanal, quincenal o mensual de confianza. Una cara conocida, una casa siempre al día y una cosa menos que organizar.', 'Find your rhythm': 'Elige tu frecuencia',
    '03 / BIG MOMENT': '03 / NUEVA ETAPA', 'Fresh starts': 'Un nuevo comienzo', 'Moving in, moving out, or getting ready for a new chapter? We’ll help make the next step feel lighter.': '¿Te mudas o comienzas una nueva etapa? Te ayudamos a que el siguiente paso sea más sencillo.', 'Plan a fresh start': 'Preparar un nuevo comienzo',
    'Not sure where to start? Tell us what’s on your mind and we’ll help you figure it out.': '¿No sabes por dónde empezar? Cuéntanos qué necesitas y te ayudaremos a decidir.',
    'A home care professional preparing supplies for a visit': 'Una profesional prepara sus productos antes de una visita', 'THE LITTLE NEST DIFFERENCE · EST. 2018': 'EL TOQUE LITTLE NEST · DESDE 2018',
    'A GOOD THING, DONE THOUGHTFULLY': 'UN BUEN SERVICIO, HECHO CON CUIDADO', 'We believe home should feel like': 'Creemos que tu hogar debe sentirse como ', 'your place.': 'tu lugar.',
    'At Little Nest Home Care, we make it easier to enjoy a clean, cared-for home. Our friendly local team provides thoughtful one-time and regular cleaning, with visits shaped around your home, schedule, and priorities.': 'En Little Nest Home Care, te ayudamos a disfrutar de un hogar limpio y cuidado. Nuestro amable equipo local ofrece limpiezas puntuales y periódicas, adaptadas a tu casa, horario y prioridades.',
    'People you can trust': 'Personas de confianza', 'Vetted, kind, and consistent': 'Verificadas, amables y constantes', 'Care that fits your life': 'Un servicio que se adapta a ti', 'Flexible visits, no fuss': 'Visitas flexibles y sin complicaciones', 'Get to know us': 'Conócenos',
    'A FEW KIND WORDS': 'ALGUNAS OPINIONES', '5.0 FROM LOCAL CLIENTS': '5,0 DE CLIENTES LOCALES',
    '“I walk through the door after work and can finally ': '«Al llegar a casa después del trabajo, por fin puedo ', 'exhale.': 'respirar.', 'It’s such a small thing that makes a huge difference.”': 'Es algo pequeño que marca una gran diferencia.»', 'Regular home clean client': 'Cliente habitual',
    'YOUR NEXT STEP STARTS HERE': 'TU SIGUIENTE PASO EMPIEZA AQUÍ', 'Let’s make home': 'Hagamos de tu casa', 'feel': 'un lugar ', 'good again.': 'agradable otra vez.',
    'Tell us a little about what you need. We’ll get back to you within one business day with a friendly, no-pressure estimate.': 'Cuéntanos qué necesitas. Te responderemos en un día laborable con un presupuesto amable y sin compromiso.',
    'CALL US': 'LLÁMANOS', 'EMAIL US': 'ESCRÍBENOS', 'FIND US AROUND': 'ZONA DE SERVICIO', 'Your town & nearby neighborhoods': 'Tu ciudad y los barrios cercanos',
    'Request a free estimate': 'Solicita un presupuesto gratis', 'Usually takes about a minute': 'Solo te llevará un minuto', 'Your name': 'Tu nombre', 'Email address': 'Correo electrónico',
    'What kind of help are you looking for?': '¿Qué tipo de ayuda buscas?', 'Choose a service': 'Elige un servicio', 'One-time home clean': 'Limpieza puntual del hogar', 'Regular home clean': 'Limpieza periódica del hogar', 'Move-in / move-out clean': 'Limpieza por mudanza', 'Something else': 'Otra cosa',
    'Anything else we should know?': '¿Hay algo más que debamos saber?', 'OPTIONAL': 'OPCIONAL', 'Send my request': 'Enviar mi solicitud', 'No pressure, no spam. Just a real person getting back to you.': 'Sin presión ni mensajes no deseados. Una persona real te responderá.',
    'LOCAL CARE FOR THE PLACE YOU CALL HOME.': 'ATENCIÓN LOCAL PARA EL LUGAR QUE LLAMAS HOGAR.', 'BACK TO TOP ↑': 'VOLVER ARRIBA ↑', '© 2026 Little Nest Home Care. Made with care.': '© 2026 Little Nest Home Care. Hecho con cariño.',
    'LANGUAGE': 'IDIOMA', 'Choose language': 'Elegir idioma', 'Thanks! This sample form is ready to connect to your email or booking service.': '¡Gracias! Este formulario está listo para conectarse con tu correo o servicio de reservas.',
    'e.g. Jamie Taylor': 'p. ej., Jamie Taylor', 'A little about your home, timing, or questions…': 'Cuéntanos sobre tu hogar, horarios o dudas…'
  },
  de: {
    'A little more room to breathe.': 'Ein bisschen mehr Raum zum Durchatmen.', 'Get your free estimate': 'Kostenloses Angebot anfordern', 'Little Nest Home Care, home': 'Little Nest Home Care, Startseite',
    'Open navigation': 'Navigation öffnen', 'Close navigation': 'Navigation schließen', 'Main navigation': 'Hauptnavigation', 'Services': 'Leistungen', 'About us': 'Über uns', 'Kind words': 'Kundenstimmen', 'Let’s talk': 'Sprechen wir',
    'YOUR NEIGHBORHOOD HOME CARE TEAM': 'IHR LOKALES TEAM FÜR HAUSREINIGUNG', 'Come home': 'Kommen Sie nach Hause', 'to': 'zur ', 'calm.': 'Ruhe.',
    'A clean, cared-for home changes how your whole week feels. We make it easier to find your footing, catch your breath, and get back to what matters.': 'Ein sauberes, gepflegtes Zuhause verändert Ihre ganze Woche. Wir helfen Ihnen, durchzuatmen und mehr Zeit für das Wesentliche zu haben.',
    'Find your kind of clean': 'Finden Sie die passende Reinigung', 'See what we do': 'Unsere Leistungen ansehen', 'Five out of five stars': 'Fünf von fünf Sternen', 'Kind words from 120+ local homes': 'Lob von über 120 Haushalten aus der Nachbarschaft',
    'Sunlit, thoughtfully cared-for living room': 'Sonniges, liebevoll gepflegtes Wohnzimmer', 'GOOD CARE.': 'GUTE PFLEGE.', 'GOOD DAYS.': 'GUTE TAGE.', 'MADE FOR REAL LIFE': 'FÜR DEN ALLTAG GEMACHT', 'A softer start to your week': 'Ein entspannter Start in die Woche',
    'LOCAL PEOPLE. THOUGHTFUL CARE.': 'LOKALES TEAM. AUFMERKSAME PFLEGE.', 'SCROLL TO EXPLORE': 'WEITER SCROLLEN', 'SERVING OUR COMMUNITY SINCE 2018': 'FÜR UNSERE GEMEINSCHAFT SEIT 2018',
    'GOOD CARE, YOUR WAY': 'GUTE PFLEGE, NACH IHREM WUNSCH', 'What would make': 'Was würde Ihr', 'home feel': 'Zuhause ', 'better?': 'noch schöner machen?',
    'Every home and every week is different. Pick the kind of help you need, and we’ll take care of the details.': 'Jedes Zuhause und jede Woche sind anders. Wählen Sie die Hilfe, die Sie brauchen. Um die Details kümmern wir uns.',
    '01 / RESET': '01 / GRÜNDLICH', 'The feel-good clean': 'Die Wohlfühlreinigung', 'A thorough refresh for the rooms you live in most. We take care of the buildup, the little corners, and everything in between.': 'Eine gründliche Auffrischung der Räume, die Sie am meisten nutzen. Wir kümmern uns um Ablagerungen, kleine Ecken und alles dazwischen.', 'Explore a home clean': 'Reinigung entdecken',
    '02 / KEEP UP': '02 / REGELMÄSSIG', 'Your regular reset': 'Ihre regelmäßige Reinigung', 'A reliable weekly, fortnightly, or monthly visit. A familiar face, a home that stays on top of itself, and one less thing to plan.': 'Zuverlässige Besuche wöchentlich, zweiwöchentlich oder monatlich. Ein vertrautes Gesicht, ein gepflegtes Zuhause und eine Sorge weniger.', 'Find your rhythm': 'Ihren Rhythmus finden',
    '03 / BIG MOMENT': '03 / NEUANFANG', 'Fresh starts': 'Ein frischer Start', 'Moving in, moving out, or getting ready for a new chapter? We’ll help make the next step feel lighter.': 'Sie ziehen ein oder aus oder beginnen ein neues Kapitel? Wir machen den nächsten Schritt leichter.', 'Plan a fresh start': 'Neuanfang planen',
    'Not sure where to start? Tell us what’s on your mind and we’ll help you figure it out.': 'Sie wissen nicht, wo Sie anfangen sollen? Erzählen Sie uns, was Sie beschäftigt. Wir helfen Ihnen weiter.',
    'A home care professional preparing supplies for a visit': 'Eine Reinigungskraft bereitet ihre Ausstattung für einen Besuch vor', 'THE LITTLE NEST DIFFERENCE · EST. 2018': 'DER LITTLE-NEST-UNTERSCHIED · SEIT 2018', 'A GOOD THING, DONE THOUGHTFULLY': 'MIT SORGFALT GEMACHT',
    'We believe home should feel like': 'Wir finden, Ihr Zuhause sollte sich wie ', 'your place.': 'Ihr eigener Ort anfühlen.', 'At Little Nest Home Care, we make it easier to enjoy a clean, cared-for home. Our friendly local team provides thoughtful one-time and regular cleaning, with visits shaped around your home, schedule, and priorities.': 'Little Nest Home Care macht es Ihnen leichter, ein sauberes, gepflegtes Zuhause zu genießen. Unser freundliches Team vor Ort bietet gründliche Einzel- und regelmäßige Reinigungen, abgestimmt auf Ihr Zuhause, Ihren Zeitplan und Ihre Wünsche.',
    'People you can trust': 'Menschen, denen Sie vertrauen können', 'Vetted, kind, and consistent': 'Geprüft, freundlich und zuverlässig', 'Care that fits your life': 'Passend zu Ihrem Alltag', 'Flexible visits, no fuss': 'Flexible Termine, ganz unkompliziert', 'Get to know us': 'Lernen Sie uns kennen',
    'A FEW KIND WORDS': 'EIN PAAR LIEBE WORTE', '5.0 FROM LOCAL CLIENTS': '5,0 VON LOKALEN KUNDEN', '“I walk through the door after work and can finally ': '„Wenn ich nach der Arbeit nach Hause komme, kann ich endlich ', 'exhale.': 'aufatmen.', 'It’s such a small thing that makes a huge difference.”': 'Es ist eine kleine Hilfe mit großer Wirkung.“', 'Regular home clean client': 'Kunde mit regelmäßiger Reinigung',
    'YOUR NEXT STEP STARTS HERE': 'IHR NÄCHSTER SCHRITT BEGINNT HIER', 'Let’s make home': 'Machen wir Ihr Zuhause', 'feel': 'wieder ', 'good again.': 'zu einem Wohlfühlort.', 'Tell us a little about what you need. We’ll get back to you within one business day with a friendly, no-pressure estimate.': 'Erzählen Sie uns, was Sie brauchen. Innerhalb eines Werktags erhalten Sie ein unverbindliches Angebot von uns.',
    'CALL US': 'RUFEN SIE UNS AN', 'EMAIL US': 'SCHREIBEN SIE UNS', 'FIND US AROUND': 'UNSER EINSATZGEBIET', 'Your town & nearby neighborhoods': 'Ihre Stadt und die umliegenden Viertel', 'Request a free estimate': 'Kostenloses Angebot anfordern', 'Usually takes about a minute': 'Dauert etwa eine Minute',
    'Your name': 'Ihr Name', 'Email address': 'E-Mail-Adresse', 'What kind of help are you looking for?': 'Welche Hilfe suchen Sie?', 'Choose a service': 'Leistung auswählen', 'One-time home clean': 'Einmalige Reinigung', 'Regular home clean': 'Regelmäßige Reinigung', 'Move-in / move-out clean': 'Reinigung bei Ein- oder Auszug', 'Something else': 'Etwas anderes',
    'Anything else we should know?': 'Möchten Sie uns noch etwas mitteilen?', 'OPTIONAL': 'OPTIONAL', 'Send my request': 'Anfrage senden', 'No pressure, no spam. Just a real person getting back to you.': 'Kein Druck, kein Spam. Eine echte Person meldet sich bei Ihnen.',
    'LOCAL CARE FOR THE PLACE YOU CALL HOME.': 'LOKALE PFLEGE FÜR IHR ZUHAUSE.', 'BACK TO TOP ↑': 'NACH OBEN ↑', '© 2026 Little Nest Home Care. Made with care.': '© 2026 Little Nest Home Care. Mit Sorgfalt gemacht.', 'LANGUAGE': 'SPRACHE', 'Choose language': 'Sprache auswählen',
    'Thanks! This sample form is ready to connect to your email or booking service.': 'Danke! Dieses Beispielformular kann jetzt mit E-Mail oder Buchungsdienst verbunden werden.', 'e.g. Jamie Taylor': 'z. B. Jamie Taylor', 'A little about your home, timing, or questions…': 'Ein paar Worte zu Ihrem Zuhause, Ihrem Zeitplan oder Ihren Fragen…'
  },
  pt: {
    'A little more room to breathe.': 'Mais espaço para respirar.', 'Get your free estimate': 'Peça um orçamento grátis', 'Little Nest Home Care, home': 'Little Nest Home Care, início',
    'Open navigation': 'Abrir navegação', 'Close navigation': 'Fechar navegação', 'Main navigation': 'Navegação principal', 'Services': 'Serviços', 'About us': 'Sobre nós', 'Kind words': 'Depoimentos', 'Let’s talk': 'Vamos conversar',
    'YOUR NEIGHBORHOOD HOME CARE TEAM': 'SUA EQUIPE LOCAL DE CUIDADOS COM A CASA', 'Come home': 'Volte para casa', 'to': 'com ', 'calm.': 'tranquilidade.',
    'A clean, cared-for home changes how your whole week feels. We make it easier to find your footing, catch your breath, and get back to what matters.': 'Uma casa limpa e bem cuidada transforma sua semana. Ajudamos você a respirar com calma e voltar ao que realmente importa.',
    'Find your kind of clean': 'Encontre a limpeza ideal', 'See what we do': 'Conheça nossos serviços', 'Five out of five stars': 'Cinco estrelas de cinco', 'Kind words from 120+ local homes': 'Elogios de mais de 120 casas da região',
    'Sunlit, thoughtfully cared-for living room': 'Sala iluminada e cuidada com carinho', 'GOOD CARE.': 'CUIDADO COM CARINHO.', 'GOOD DAYS.': 'DIAS MELHORES.', 'MADE FOR REAL LIFE': 'FEITO PARA A VIDA REAL', 'A softer start to your week': 'Comece a semana com mais leveza',
    'LOCAL PEOPLE. THOUGHTFUL CARE.': 'GENTE DA REGIÃO. CUIDADO ATENCIOSO.', 'SCROLL TO EXPLORE': 'ROLE PARA EXPLORAR', 'SERVING OUR COMMUNITY SINCE 2018': 'ATENDENDO A COMUNIDADE DESDE 2018',
    'GOOD CARE, YOUR WAY': 'CUIDADO DO SEU JEITO', 'What would make': 'O que deixaria sua', 'home feel': 'casa ainda ', 'better?': 'melhor?',
    'Every home and every week is different. Pick the kind of help you need, and we’ll take care of the details.': 'Cada casa e cada semana são diferentes. Escolha a ajuda que precisa e deixe os detalhes com a gente.',
    '01 / RESET': '01 / RENOVAR', 'The feel-good clean': 'Uma limpeza que faz bem', 'A thorough refresh for the rooms you live in most. We take care of the buildup, the little corners, and everything in between.': 'Uma renovação completa dos ambientes que você mais usa. Cuidamos do acúmulo, dos cantinhos e de tudo entre eles.', 'Explore a home clean': 'Conheça a limpeza completa',
    '02 / KEEP UP': '02 / MANTER', 'Your regular reset': 'Sua limpeza regular', 'A reliable weekly, fortnightly, or monthly visit. A familiar face, a home that stays on top of itself, and one less thing to plan.': 'Uma visita confiável semanal, quinzenal ou mensal. Uma pessoa conhecida, a casa sempre em ordem e menos uma coisa para planejar.', 'Find your rhythm': 'Escolha sua frequência',
    '03 / BIG MOMENT': '03 / NOVO COMEÇO', 'Fresh starts': 'Um novo começo', 'Moving in, moving out, or getting ready for a new chapter? We’ll help make the next step feel lighter.': 'Vai se mudar ou começar uma nova etapa? Ajudamos a deixar o próximo passo mais leve.', 'Plan a fresh start': 'Planeje um novo começo',
    'Not sure where to start? Tell us what’s on your mind and we’ll help you figure it out.': 'Não sabe por onde começar? Conte o que está pensando e ajudamos você a decidir.',
    'A home care professional preparing supplies for a visit': 'Profissional de limpeza preparando os produtos para uma visita', 'THE LITTLE NEST DIFFERENCE · EST. 2018': 'O JEITO LITTLE NEST · DESDE 2018', 'A GOOD THING, DONE THOUGHTFULLY': 'CUIDADO FEITO COM ATENÇÃO',
    'We believe home should feel like': 'Acreditamos que sua casa deve ser ', 'your place.': 'o seu lugar.', 'At Little Nest Home Care, we make it easier to enjoy a clean, cared-for home. Our friendly local team provides thoughtful one-time and regular cleaning, with visits shaped around your home, schedule, and priorities.': 'Na Little Nest Home Care, ajudamos você a aproveitar uma casa limpa e bem cuidada. Nossa equipe local e simpática oferece limpezas pontuais e regulares, adaptadas à sua casa, rotina e prioridades.',
    'People you can trust': 'Pessoas em quem confiar', 'Vetted, kind, and consistent': 'Verificadas, atenciosas e confiáveis', 'Care that fits your life': 'Cuidado que cabe na sua rotina', 'Flexible visits, no fuss': 'Visitas flexíveis e sem complicação', 'Get to know us': 'Conheça nossa equipe',
    'A FEW KIND WORDS': 'ALGUNS DEPOIMENTOS', '5.0 FROM LOCAL CLIENTS': '5,0 DE CLIENTES DA REGIÃO', '“I walk through the door after work and can finally ': '“Quando chego em casa depois do trabalho, finalmente posso ', 'exhale.': 'respirar.', 'It’s such a small thing that makes a huge difference.”': 'É uma pequena ajuda que faz uma grande diferença.”', 'Regular home clean client': 'Cliente de limpeza regular',
    'YOUR NEXT STEP STARTS HERE': 'SEU PRÓXIMO PASSO COMEÇA AQUI', 'Let’s make home': 'Vamos deixar sua casa', 'feel': 'mais ', 'good again.': 'acolhedora.', 'Tell us a little about what you need. We’ll get back to you within one business day with a friendly, no-pressure estimate.': 'Conte um pouco do que precisa. Retornaremos em até um dia útil com um orçamento amigável e sem compromisso.',
    'CALL US': 'LIGUE PARA NÓS', 'EMAIL US': 'ENVIE UM E-MAIL', 'FIND US AROUND': 'ONDE ATENDEMOS', 'Your town & nearby neighborhoods': 'Sua cidade e bairros próximos', 'Request a free estimate': 'Peça um orçamento grátis', 'Usually takes about a minute': 'Leva cerca de um minuto',
    'Your name': 'Seu nome', 'Email address': 'E-mail', 'What kind of help are you looking for?': 'Que tipo de ajuda você procura?', 'Choose a service': 'Escolha um serviço', 'One-time home clean': 'Limpeza única da casa', 'Regular home clean': 'Limpeza regular da casa', 'Move-in / move-out clean': 'Limpeza para mudança', 'Something else': 'Outro serviço',
    'Anything else we should know?': 'Mais alguma informação?', 'OPTIONAL': 'OPCIONAL', 'Send my request': 'Enviar solicitação', 'No pressure, no spam. Just a real person getting back to you.': 'Sem pressão e sem spam. Uma pessoa de verdade responderá.',
    'LOCAL CARE FOR THE PLACE YOU CALL HOME.': 'CUIDADO LOCAL PARA O LUGAR QUE VOCÊ CHAMA DE LAR.', 'BACK TO TOP ↑': 'VOLTAR AO TOPO ↑', '© 2026 Little Nest Home Care. Made with care.': '© 2026 Little Nest Home Care. Feito com carinho.', 'LANGUAGE': 'IDIOMA', 'Choose language': 'Escolher idioma',
    'Thanks! This sample form is ready to connect to your email or booking service.': 'Obrigado! Este formulário de exemplo está pronto para se conectar ao seu e-mail ou serviço de reservas.', 'e.g. Jamie Taylor': 'ex.: Jamie Taylor', 'A little about your home, timing, or questions…': 'Conte um pouco sobre sua casa, horários ou dúvidas…'
  }
};

function applyLanguage(language) {
  const dictionary = translations[language] || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest('script, style, select#language-select')) continue;
    if (node.__sourceText === undefined) node.__sourceText = node.nodeValue;
    const source = node.__sourceText;
    const phrase = source.trim();
    if (!phrase) continue;
    const translated = dictionary[phrase];
    if (translated) {
      const leading = source.match(/^\s*/)?.[0] || '';
      const trailing = source.match(/\s*$/)?.[0] || '';
      node.nodeValue = `${leading}${translated}${trailing}`;
    } else {
      node.nodeValue = source;
    }
  }

  document.querySelectorAll('[aria-label]').forEach((element) => {
    if (!element.dataset.sourceAriaLabel) element.dataset.sourceAriaLabel = element.getAttribute('aria-label');
    element.setAttribute('aria-label', dictionary[element.dataset.sourceAriaLabel] || element.dataset.sourceAriaLabel);
  });
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach((element) => {
    if (!element.dataset.sourcePlaceholder) element.dataset.sourcePlaceholder = element.placeholder;
    element.placeholder = dictionary[element.dataset.sourcePlaceholder] || element.dataset.sourcePlaceholder;
  });
  document.documentElement.lang = language;
  const pageTitle = {
    en: 'Little Nest Home Care — A little more room to breathe',
    fr: 'Little Nest Home Care — Un peu plus d’espace pour respirer',
    es: 'Little Nest Home Care — Un poco más de espacio para respirar',
    de: 'Little Nest Home Care — Ein bisschen mehr Raum zum Durchatmen',
    pt: 'Little Nest Home Care — Mais espaço para respirar'
  };
  document.title = pageTitle[language] || pageTitle.en;
  const descriptions = {
    en: 'Thoughtful home care, made simple. Explore our services and request a free estimate.',
    fr: 'Un entretien de la maison attentionné, en toute simplicité. Découvrez nos services et demandez un devis gratuit.',
    es: 'Limpieza del hogar con cariño y sin complicaciones. Descubre nuestros servicios y solicita un presupuesto gratis.',
    de: 'Aufmerksame Haushaltspflege, ganz unkompliziert. Entdecken Sie unsere Leistungen und fordern Sie ein kostenloses Angebot an.',
    pt: 'Cuidados com a casa feitos com carinho e sem complicação. Conheça nossos serviços e peça um orçamento grátis.'
  };
  document.querySelector('meta[name="description"]').content = descriptions[language] || descriptions.en;
  try { localStorage.setItem('littleNestLanguage', language); } catch {}
}

const languageSelect = document.querySelector('#language-select');
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('littleNestLanguage') || 'en'; } catch {}
languageSelect.value = translations[savedLanguage] ? savedLanguage : 'en';
applyLanguage(languageSelect.value);
languageSelect.addEventListener('change', () => applyLanguage(languageSelect.value));

const form = document.querySelector('#contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const note = document.querySelector('#form-note');
  const dictionary = translations[languageSelect.value] || {};
  note.textContent = dictionary['Thanks! This sample form is ready to connect to your email or booking service.'] || 'Thanks! This sample form is ready to connect to your email or booking service.';
  note.classList.add('success-message');
});
