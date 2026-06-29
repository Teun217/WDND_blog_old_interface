export interface Item {
    id: string;
    title: string;
    category: string;
    date: string;
    master_folder: string;
    note?: string;
    iframeSrc?: string;
    expandHref?: string;
    mediaUrls?: string[];
}

export const items: Item[] = [
    {
        id: `Sprint_0`,
        title: `Sprint_0`,
        category: `projects`,
        date: `2026-02-13`,
        master_folder: `WD&D documents`,
        iframeSrc: `https://teun217.github.io/sprint_0/`,
        expandHref: `https://github.com/Teun217/sprint_0`,
        note: `Deze minor begon voor mij toch wel met een grote teleurstelling. Na bijna een jaar niet te hebben gecodeerd was er een hele hoop basiskennis weggezakt.

Wat ik qua ontwerp dacht in een week te kunnen doen, lukte me uiteindelijk maar voor de helft af te maken.

Wel heb ik voor het eerst scroll based animations gebruikt. Dus ik ben toch blij dat ik binnen die week al echt iets nieuws heb geleerd.

Heel trots ben ik er niet op maar een goede baseline was het wel.`,
    },
    {
        id: `CSSTTR_blobbify`,
        title: `Blobbify`,
        category: `projects`,
        date: `2025-01-01`,
        master_folder: `WD&D documents`,
        iframeSrc: `https://teun217.github.io/Blobbify_final/`,
        expandHref: `https://github.com/Teun217/Blobbify_final`,
        note: `Ik denk toch wel het vak waar ik het meeste lol mee heb gehad. In het begin wist ik meteen dat ik voor de Artifaction opdracht wilde gaan. Alleen wist ik een paar dagen niet wat ik precies ging maken.

Nouja, toen het idee er eenmaal kwam heb ik genoten van het pietepeuteren op allerlei kleine dingen. Maar natuurlijk ook het grote effect van de rondjes mengen én de kleuren mengen met SVG filters en blend-modes.

Ik heb zelfs genoten van een volle dag zitten aan het troubleshooten van het genereren van een semi random nummer, om er later achter te komen dat je dat nummer simpelweg niet kan gebruiken.`,
    },
    {
        id: `API_records`,
        title: `RecordCollection`,
        category: `projects`,
        date: `2025-01-01`,
        master_folder: `WD&D documents`,
        iframeSrc: `https://api-records-kkpa.onrender.com/`,
        expandHref: `https://github.com/Teun217/API-records`,
        note: `Ik vond dit een super spannend vak. In tegenstelling tot CSS vind ik JS hardstikke taai en kom ik er moeilijk door heen. Met het beetje JS dat er in de site zit heb ik dan ook engine tijd lopen stuntelen.

Het inladen van de discogs API voelde echt als magie, wat overigens de ontlading wel groter maakte toen ik hem eenmaal aan de gang kreeg.

Wel ben ik blij dat ik het concept wat ik had aan het begin van de minor, volledig heb kunnen verbeteren. Zo zie ik echt de progressie die ik heb gemaakt.`,
    },
    {
        id: `HCD_screenreader`,
        title: `Screenreader`,
        category: `projects`,
        date: `2025-01-01`,
        master_folder: `WD&D documents`,
        iframeSrc: `https://teun217.github.io/HCD_ScreenReader/`,
        expandHref: `https://github.com/Teun217/HCD_ScreenReader`,
        note: `Dit vak heeft mij echt de waarde van user-testing laten zien. Dingen waarvan ik dacht "die gaan niet goed vallen" bleken soms uiteindelijk zelfs fijn te zijn voor de testpersoon.

Een goed voorbeeld is het kleuren van de achtergrond van de tekstlijn waar de gebruiker op gefocust is. Dit had ik in eerste instantie gedaan zodat ik als dev sneller kon zien waar de focus stond. Maar de testpersoon bleek dit uiteindelijk, afgezien van het feit dat hij felrood op wit niet helemaal kon waarderen, super fijn te vinden zodat hij zelf sneller kon vinden waar hij aan het lezen was.`,
    },
    {
        id: `BT_nsBelasting`,
        title: `NSBelasting`,
        category: `projects`,
        date: `2025-01-01`,
        master_folder: `WD&D documents`,
        iframeSrc: `https://teun217.github.io/NSBelastingSchoolopdracht/`,
        expandHref: `https://github.com/Teun217/NSBelastingSchoolopdracht`,
        note: `Wat aanvankelijk een oersaai vak leek te worden bleek uiteindelijk een super interessante introductie aan formulieren.

Ik vond het hartstikke leuk om een puzzel zoals de progressive questions op te lossen met CSS. Maar ook het valideren vond ik super nice om te doen. Naar CSSToTheRescue heeft dit vak oprecht bijgedragen aan mijn opborrelende liefde voor CSS.

Voor dit vak vind ik dat ik creatief ben geweest met feedback geven aan de user en probelemen oplossen. Ik ben dan ook erg blij met het eindresultaat.`,
    },
    {
        id: `Hackathon_blackhole`,
        title: `Hackathon_blackhole (heavy)`,
        category: `projects`,
        date: `2025-01-01`,
        master_folder: `WD&D documents`,
        iframeSrc: `https://jellehotting.github.io/Hackathon/`,
        expandHref: `https://github.com/JelleHotting/Hackathon`,
        note: `I mainly worked on the black hole for this one, if you scroll down carefully you will see it. Experimenting with SVG filters I tried to morph the background image with a displacement-map. If you have a strong enough computer I would advice to run it on full screen! It turned out to be some really heavy code to run, whoops. `,
    },
    {
        id: `Meesterproef`,
        title: `Glossary_meesterproef`,
        category: `projects`,
        date: `2026-06-19`,
        master_folder: `WD&D documents`,
        iframeSrc: `https://glossary-inter-facing-the-hybrid-city.onrender.com/`,
        expandHref: `https://github.com/ginchanah/Meesterproef`,
        note: `I mainly worked on the black hole for this one, if you scroll down carefully you will see it. Experimenting with SVG filters I tried to morph the background image with a displacement-map. If you have a strong enough computer I would advice to run it on full screen! It turned out to be some really heavy code to run, whoops. `,
    },

    {
        id: `WN_kilian`,
        title: `Kilian Valkhof`,
        category: `weekly_nerd`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `Kilian Valkhof had het over The Rule of Least Power: gebruik altijd de minst krachtige taal die geschikt is voor wat je wil bereiken. Dus HTML boven CSS boven JavaScript.

Hij liet zien hoe ver je daarin kan gaan. Voor een custom checkbox heb je geen JavaScript nodig: appearance: none, een ::before pseudo-element en :checked volstaan. Smooth scrollen: gewoon scroll-behavior: smooth in CSS, niet in JS. Accordions? Gebruik <details> en <summary>, inclusief de name attribute om te voorkomen dat meerdere items tegelijk opengaan. En voor modals is er <dialog>, als vervanging voor de confirm JS API.

Wat ik ook interessant vond: zijn aanpak voor toegankelijkheid bij animaties. Gebruik prefers-reduced-motion en zet de toegankelijke situatie als standaard, voeg animaties daarna toe in plaats van ze eruit te halen.

Tot slot liet hij een paar verse browser-features zien, zoals field-sizing: content zodat een input meegroeit met zijn inhoud, en een volledig stylable <select> met appearance: base-select. Dingen om in de gaten te houden via Baseline.`,
    },
    {
        id: `WN_ppk`,
        title: `Peter-Paul Koch`,
        category: `weekly_nerd`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `Peter-Paul Koch legde uit wat browsers eigenlijk zijn en hoe ze werken. Het internet is basically een manier om gegevens van A naar B te sturen, het web is specifieker: een webpagina van A naar B. Browsers bestaan uit losse onderdelen die niets van elkaar weten: een rendering engine voor HTML en CSS, een JavaScript engine, en een DOM en AOM die de pagina leesbaar maken voor respectievelijk JavaScript en screenreaders.

De browsergeschiedenis was ook leuk om te horen. Elke browser introduceerde iets radicaal nieuws: Mosaic had plaatjes, Internet Explorer was gratis, Safari iOS introduceerde touch events en daarmee een compleet nieuwe gebruiksnorm. Chrome bouwde op webkit voort, dat uiteindelijk afsplitste naar Blink. Bijna alle browsers delen nu dezelfde rendering engine, op een paar uitzonderingen na zoals Ladybird en het Spaanse worker-owned bedrijf Igalia dat eigen rendering engines bouwt.

Wat ik interessant vond was het punt over backwards compatibility: alles wat ooit op het web is gemaakt wordt voor altijd ondersteund. Enigzins logisch maar het zorgt er voor dat dingen die voor ons nu volstrekt onlogisch zijn om te gebruiken nog wel onder de opties vallen.

Het was voor mij een soort mind-fuck dat Koch toch redelijk aan de voorhoede lijkt te staan van het web. Het is voor mij altijd moeilijk te beseffen geweest hoe jong het web is, maar dit hoorcollege is dat gelukt.`,
    },
    {
        id: `WN_nils`,
        title: `Nils Binder`,
        category: `weekly_nerd`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `Nils had het over de vroegere dagen van webdesign, wat ik net zoals bij Peter-Paul leuk vond om over te horen. Wederom om een besef te krijgen van hoe snel dit werkveld evolueert.

Vroeger waren tools super unoptimized voor webdev. Nu hebben we Figma, dat beter werkt maar ook zorgt voor minder creativiteit. We hebben nu tools die gespecialiseerd zijn in webdesign, maar dat zorgt er juist voor dat we dezelfde websites bouwen met dezelfde beperkte tools.

Ook ging Nils in op creatievere manieren om grid en whitespace te gebruiken, bijvoorbeeld met een asymmetrische kolomverdeling zoals grid-template-columns: 2fr 3fr auto 1fr.

Het laatste vond ik super creatief en wil ik graag gebruiken: een lange strip met afbeeldingen die de animatie in stappen doorloopt, zodat je een soort stopmotion effect krijgt. animation: stop-motion 3s steps(31, end) infinite`,
    },
    {
        id: `WN_robbert`,
        title: `Robbert Broersma & Yolijn van der Kolk`,
        category: `weekly_nerd`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `Robbert Broersma werkt aan het NL Design System en zijn presentatie ging over hoe je goede formulieren bouwt niet alleen visueel, maar ook toegankelijk en gebruiksvriendelijk.

Belangrijk was dat je alleen vraagt wat je echt nodig hebt, leg uit waarom je iets vraagt, en stel niks twee keer. Geen jargon, geen rare afkortingen.

Ook de visuals hebben bepaalde voorkeuren. Kleurcontrast moet kloppen ook voor subtielere tekst zoals placeholders. Knoppen horen links, negatieve feedback mag niet alleen met kleur worden aangegeven, en een verplicht veld is meer dan alleen een asterisk. Componenten moeten minimaal 44x44px zijn zodat ze ook voor mensen met motorische problemen goed klikbaar zijn.

Waar ik nog niet over na had gedacht was dat foutenmeldingen van te voren uitgelegd dienen te worden. Ook verschijnen fouten op het juiste moment, en foutmeldingen staan zowel bij het veld zelf als bovenaan de pagina.

Voor toegankelijkheid ging hij dieper in op toetsenbordgebruik en screenreaders. Elk veld, elke knop en elke link moet bereikbaar zijn met alleen de tab-toets, in een logische volgorde. De focusindicator moet altijd zichtbaar zijn. Met screenreaders moeten labels en beschrijvingen worden voorgelezen zodra een veld focus krijgt, foutmeldingen onderbreken de gebruiker niet, en bevestigingen worden automatisch voorgelezen.

Een super nuttig hoorcollege, ik vond het alleen jammer dat dit hoorcollege werd gegeven toen we eigenlijk het groten deel van de formulieren hadden opgezet.`,
    },
    {
        id: `WN_rosa`,
        title: `Rosa`,
        category: `weekly_nerd`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `De presentatie ging over hacken in de brede zin: dingen op een alternatieve manier doen, zelf maken en creatief omgaan met wat je hebt. Een interessant concept dat voorbij kwam was planned obsolescence: fabrikanten maken producten bewust zo dat je er minder lang bij kan. Zodra de software stopt met werken is de hardware ook meteen nutteloos.

Een ander punt was afhankelijkheid, met name van Amerikaanse big tech. Hoe minder je daarvan afhangt, hoe meer controle je hebt over je eigen spullen en data.

Daarna werd uitgelegd wat een server eigenlijk is: een computer die informatie opslaat en die op afstand bereikbaar is. Basically een computer met een router. Er zijn allerlei alternatieve servers, zoals servers op zonne-energie, reizende servers en NODE9.org, een eco-gedreven server.

Ik vond Rosa super cool vertellen over super interessante dingen! Ik vind het leuk hoe ze zich lost weekt van de norm en een soort groen minimalisme creeërt zonder de saai strakke esthetiek. Meer het kijken naar de essentie van wat er moet gebeuren en dat met zo min mogelijk afdruk doen.`,
    },
    {
        id: `WN_johan`,
        title: `Johan Huijkman`,
        category: `weekly_nerd`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `Johann Huijkman is toegankelijkheidsexpert bij Q42. Zijn presentatie ging voornamelijk over het verschil van theoretisch toegankelijk en praktisch toegankelijk: een website kan aan alle regels voldoen maar toch niet bruikbaar zijn voor mensen met een beperking.

De basis van toegankelijkheid ligt in de WCAG-principes: Perceivable, Operable, Understandable en Robust. Deze zijn vooral ingespeeld op visuele beperkingen terwijl er nog veel meer kan beperken in het gebruik van het web. Johann had het bijvoorbeeld ook over mensen die laaggeletterd zijn of een auditieve beperking hebben.

Wat ik interessant vond was zijn punt over screenreaders: je hoeft niet altijd zelf oplossingen te bedenken, want veel functionaliteit is al ingebouwd. Een knop om een lijst te omzeilen is bijvoorbeeld overbodig. Wél belangrijk is dat je HTML goed in elkaar zit, en dat je test.

Voor slechtzienden noemde hij dingen als CAPTCHA's die niet werken, pop-up navigatie en het feit dat websites vaak maar tot 200% zoom worden getest terwijl sommige mensen tot 400% zoom nodig hebben. Voor mensen met motorische problemen of lichtgevoeligheid is veel informatie op weinig beeldveld vermoeiend. Ook kan klikken pijn doen en felle kleuren kunnen migraine veroorzaken. Voor mensen op het autismespectrum is voorspelbaarheid heel belangrijk: onverwachte animaties, geluiden en advertenties zijn vaak te heftig en/of vermoeiend.

Testen was hieruit de grootste boodschap. Ik vond dat hij dit goed overbracht. Johan had hele duidelijk echte voorbeeld van mensen die het moeilijk hebben op het web en waar eigenlijk te weinig naar om wordt gekeken.`,
    },
    {
        id: `WN_sanne`,
        title: `Sanne Peters`,
        category: `weekly_nerd`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `Het web is overal aanwezig en wordt je op een manier opgedrongen. Omdat het web zich zo snel ontwikkelt is het voor sommige mensen moeilijk bij te blijven ofwel te begrijpen. Terwijl het web juist een vriendelijke, toegankelijke plek zou moeten zijn waar mensen voor kunnen kiezen.

Sanne vertelde dat het hiervoor super belangrijk is om je te verdiepen in de wereld van anderen en stelde een aantal manieren om dat te doen:
- Praat met je buren
- Lees een boek of kijk een film over iemand die niet op jou lijkt

Ze had het ook over manieren waarop je impact kan maken:
- Breng de impact van een oplossing in beeld
- Toets je oplossing
- Bouw je netwerk op met mensen die je motiveren
- Als je zelf geen goede ideeën hebt kan je altijd iemand helpen zijn of haar goede idee te verwezelijken

Ik vond de presentatie van Sanne Peters interessant. Ze leek heel zenuwachtig, waardoor ze alles wat slap vertelde. Maar ze had wel écht dingen te zeggen. Ook vond ik haar tips over hoe je in andere mensen kan verdiepen door het bekijken van, zoals ik het interpreteerde, verschillende media over en gemaakt door mensen die op een of andere manier van je af staan.`,
    },
    {
        id: `LD_s0_css`,
        title: `"Goed" in CSS worden`,
        category: `leerdoelen_sprint0`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `Creatiever programmeren, plezier in het coderen.`,
    },
    {
        id: `LD_s0_creatief`,
        title: `Creatievere websites`,
        category: `leerdoelen_sprint0`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `Dus geen standaard nav bar + content.`,
    },
    {
        id: `LD_s0_schetsen`,
        title: `Schetsmatig leren ontwerpen`,
        category: `leerdoelen_sprint0`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `Sneller ideeën schetsmatig uitwerken, zodat ik minder tijd kwijt ben aan doodlopende ideeën.`,
    },
    {
        id: `LD_m_procesverslag`,
        title: `Procesverslag beter bijhouden`,
        category: `leerdoelen_meesterschap`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `Tijdens het blok ben ik vaak vergeten dat te doen tijdens het proces. Hierdoor heb ik dat minder accuraat kunnen opschrijven, konden de docenten mijn proces minder goed volgen en ben ik zelf minder bewust geworden wat ik heb bereikt tijdens een vak.`,
    },
    {
        id: `LD_m_uitstellen`,
        title: `To-Do's en uitstellen verminderen`,
        category: `leerdoelen_meesterschap`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `Voornamelijk het uitstellen is een groot probleem. Als ik te veel tegelijk moet doen doe ik niks. Ik hoop het met to-do lijstjes overzichterlijker te houden.`,
    },
    {
        id: `LD_m_js`,
        title: `JS verbeteren`,
        category: `leerdoelen_meesterschap`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `Ik zie wat er mogelijk is met JS en ik wil daar mee aan de slag kunnen zoals ik met CSS aan de slag kan.`,
    },
    {
        id: `LD_m_lol`,
        title: `Weer iets meer lol hebben met code`,
        category: `leerdoelen_meesterschap`,
        date: `2025-01-01`,
        master_folder: `WD&D texts`,
        iframeSrc: ``,
        expandHref: ``,
        note: `Het laatste blok is mij heel slecht gevallen en ik heb niet zo veel energie in de code kunnen steken als ik zou willen.`,
    },

]
