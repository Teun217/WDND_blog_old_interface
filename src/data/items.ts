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
    date: `17-02-2026`,
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
    date: `16-03-2026`,
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
    date: `07-05-2026`,
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
    date: `07-05-2026`,
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
    date: `16-03-2026`,
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
    date: `26-03-2026`,
    master_folder: `WD&D documents`,
    iframeSrc: `https://jellehotting.github.io/Hackathon/`,
    expandHref: `https://github.com/JelleHotting/Hackathon`,
    note: `Ik heb voor deze opdracht vooral aan het zwarte gat gewerkt. Als je naar beneden scrolt zie je hem langs komen. Ik was met SVG-filters aan het klooien, zo kwam ik de displacement-map tegen en daar heb ik de achtergrond afbeelding mee vervormd. Als je een krachtige genoeg computer hebt, raad ik aan om hem op de originele webpage te draaien. Omdat de filter over de hele afbeelding is toegepast werd de filter super zwaar... oeps. `,
  },
  {
    id: `Meesterproef`,
    title: `Glossary_meesterproef`,
    category: `projects`,
    date: `19-06-2026`,
    master_folder: `WD&D documents`,
    iframeSrc: `https://glossary-inter-facing-the-hybrid-city.onrender.com/`,
    expandHref: `https://github.com/ginchanah/Meesterproef`,
    note: `I mainly worked on the black hole for this one, if you scroll down carefully you will see it. Experimenting with SVG filters I tried to morph the background image with a displacement-map. If you have a strong enough computer I would advice to run it on full screen! It turned out to be some really heavy code to run, whoops. `,
  },

  {
    id: `WN_kilian`,
    title: `Kilian_Valkhof`,
    category: `weekly_nerd`,
    date: `04-02-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `## The Rule of Least Power

Kilian Valkhof had het over The Rule of Least Power: gebruik altijd de minst krachtige taal die geschikt is voor wat je wil bereiken. Dus HTML boven CSS boven JavaScript.

## CSS boven JavaScript in de praktijk

Hij liet zien hoe ver je daarin kan gaan. Voor een custom checkbox heb je geen JavaScript nodig: appearance: none, een ::before pseudo-element en :checked volstaan. Smooth scrollen: gewoon scroll-behavior: smooth in CSS, niet in JS. Accordions? Gebruik <details> en <summary>, inclusief de name attribute om te voorkomen dat meerdere items tegelijk opengaan. En voor modals is er <dialog>, als vervanging voor de confirm JS API.

## Animaties en toegankelijkheid

Wat ik ook interessant vond: zijn aanpak voor toegankelijkheid bij animaties. Gebruik prefers-reduced-motion en zet de toegankelijke situatie als standaard, voeg animaties daarna toe in plaats van ze eruit te halen.

## Nieuwe browser-features

Tot slot liet hij een paar verse browser-features zien, zoals field-sizing: content zodat een input meegroeit met zijn inhoud, en een volledig stylable <select> met appearance: base-select. Dingen om in de gaten te houden via Baseline.`,
  },
  {
    id: `WN_ppk`,
    title: `Peter-Paul_Koch`,
    category: `weekly_nerd`,
    date: `19-02-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `## Wat is een browser?

Peter-Paul Koch legde uit wat browsers eigenlijk zijn en hoe ze werken. Het internet is basically een manier om gegevens van A naar B te sturen, het web is specifieker: een webpagina van A naar B. Browsers bestaan uit losse onderdelen die niets van elkaar weten: een rendering engine voor HTML en CSS, een JavaScript engine, en een DOM en AOM die de pagina leesbaar maken voor respectievelijk JavaScript en screenreaders.

## Browsergeschiedenis

De browsergeschiedenis was ook leuk om te horen. Elke browser introduceerde iets radicaal nieuws: Mosaic had plaatjes, Internet Explorer was gratis, Safari iOS introduceerde touch events en daarmee een compleet nieuwe gebruiksnorm. Chrome bouwde op webkit voort, dat uiteindelijk afsplitste naar Blink. Bijna alle browsers delen nu dezelfde rendering engine, op een paar uitzonderingen na zoals Ladybird en het Spaanse worker-owned bedrijf Igalia dat eigen rendering engines bouwt.

## Backwards compatibility

Wat ik interessant vond was het punt over backwards compatibility: alles wat ooit op het web is gemaakt wordt voor altijd ondersteund. Enigzins logisch maar het zorgt er voor dat dingen die voor ons nu volstrekt onlogisch zijn om te gebruiken nog wel onder de opties vallen.

## Hoe jong het web is

Het was voor mij een soort mind-fuck dat Koch toch redelijk aan de voorhoede lijkt te staan van het web. Het is voor mij altijd moeilijk te beseffen geweest hoe jong het web is, maar dit hoorcollege is dat gelukt.`,
  },
  {
    id: `WN_nils`,
    title: `Nils_Binder`,
    category: `weekly_nerd`,
    date: `04-03-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `## De vroegere dagen van webdesign

Nils had het over de vroegere dagen van webdesign, wat ik net zoals bij Peter-Paul leuk vond om over te horen. Wederom om een besef te krijgen van hoe snel dit werkveld evolueert.

## Tools en creativiteit

Vroeger waren tools super unoptimized voor webdev. Nu hebben we Figma, dat beter werkt maar ook zorgt voor minder creativiteit. We hebben nu tools die gespecialiseerd zijn in webdesign, maar dat zorgt er juist voor dat we dezelfde websites bouwen met dezelfde beperkte tools.

## Creatief gebruik van grid

Ook ging Nils in op creatievere manieren om grid en whitespace te gebruiken, bijvoorbeeld met een asymmetrische kolomverdeling zoals grid-template-columns: 2fr 3fr auto 1fr.

## Stopmotion met CSS

Het laatste vond ik super creatief en wil ik graag gebruiken: een lange strip met afbeeldingen die de animatie in stappen doorloopt, zodat je een soort stopmotion effect krijgt. animation: stop-motion 3s steps(31, end) infinite`,
  },
  {
    id: `WN_robbert`,
    title: `Robbert_Broersma_&_Yolijn_van_der_Kolk`,
    category: `weekly_nerd`,
    date: `12-03-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `## Goede formulieren bouwen

Robbert Broersma werkt aan het NL Design System en zijn presentatie ging over hoe je goede formulieren bouwt niet alleen visueel, maar ook toegankelijk en gebruiksvriendelijk.

## Inhoud en taalgebruik

Belangrijk was dat je alleen vraagt wat je echt nodig hebt, leg uit waarom je iets vraagt, en stel niks twee keer. Geen jargon, geen rare afkortingen.

## Visuele richtlijnen

Ook de visuals hebben bepaalde voorkeuren. Kleurcontrast moet kloppen ook voor subtielere tekst zoals placeholders. Knoppen horen links, negatieve feedback mag niet alleen met kleur worden aangegeven, en een verplicht veld is meer dan alleen een asterisk. Componenten moeten minimaal 44x44px zijn zodat ze ook voor mensen met motorische problemen goed klikbaar zijn.

## Foutmeldingen

Waar ik nog niet over na had gedacht was dat foutenmeldingen van te voren uitgelegd dienen te worden. Ook verschijnen fouten op het juiste moment, en foutmeldingen staan zowel bij het veld zelf als bovenaan de pagina.

## Toetsenbord en screenreaders

Voor toegankelijkheid ging hij dieper in op toetsenbordgebruik en screenreaders. Elk veld, elke knop en elke link moet bereikbaar zijn met alleen de tab-toets, in een logische volgorde. De focusindicator moet altijd zichtbaar zijn. Met screenreaders moeten labels en beschrijvingen worden voorgelezen zodra een veld focus krijgt, foutmeldingen onderbreken de gebruiker niet, en bevestigingen worden automatisch voorgelezen.

## Reflectie

Een super nuttig hoorcollege, ik vond het alleen jammer dat dit hoorcollege werd gegeven toen we eigenlijk het groten deel van de formulieren hadden opgezet.`,
  },
  {
    id: `WN_rosa`,
    title: `Rosa`,
    category: `weekly_nerd`,
    date: `02-04-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `## Hacken en planned obsolescence

De presentatie ging over hacken in de brede zin: dingen op een alternatieve manier doen, zelf maken en creatief omgaan met wat je hebt. Een interessant concept dat voorbij kwam was planned obsolescence: fabrikanten maken producten bewust zo dat je er minder lang bij kan. Zodra de software stopt met werken is de hardware ook meteen nutteloos.

## Afhankelijkheid van big tech

Een ander punt was afhankelijkheid, met name van Amerikaanse big tech. Hoe minder je daarvan afhangt, hoe meer controle je hebt over je eigen spullen en data.

## Wat is een server?

Daarna werd uitgelegd wat een server eigenlijk is: een computer die informatie opslaat en die op afstand bereikbaar is. Basically een computer met een router. Er zijn allerlei alternatieve servers, zoals servers op zonne-energie, reizende servers en NODE9.org, een eco-gedreven server.

## Reflectie

Ik vond Rosa super cool vertellen over super interessante dingen! Ik vind het leuk hoe ze zich lost weekt van de norm en een soort groen minimalisme creeërt zonder de saai strakke esthetiek. Meer het kijken naar de essentie van wat er moet gebeuren en dat met zo min mogelijk afdruk doen.`,
  },
  {
    id: `WN_johan`,
    title: `Johan_Huijkman`,
    category: `weekly_nerd`,
    date: `09-04-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `## Theoretisch vs. praktisch toegankelijk

Johann Huijkman is toegankelijkheidsexpert bij Q42. Zijn presentatie ging voornamelijk over het verschil van theoretisch toegankelijk en praktisch toegankelijk: een website kan aan alle regels voldoen maar toch niet bruikbaar zijn voor mensen met een beperking.

## WCAG-principes

De basis van toegankelijkheid ligt in de WCAG-principes: Perceivable, Operable, Understandable en Robust. Deze zijn vooral ingespeeld op visuele beperkingen terwijl er nog veel meer kan beperken in het gebruik van het web. Johann had het bijvoorbeeld ook over mensen die laaggeletterd zijn of een auditieve beperking hebben.

## Screenreaders

Wat ik interessant vond was zijn punt over screenreaders: je hoeft niet altijd zelf oplossingen te bedenken, want veel functionaliteit is al ingebouwd. Een knop om een lijst te omzeilen is bijvoorbeeld overbodig. Wél belangrijk is dat je HTML goed in elkaar zit, en dat je test.

## Beperkingen in detail

Voor slechtzienden noemde hij dingen als CAPTCHA's die niet werken, pop-up navigatie en het feit dat websites vaak maar tot 200% zoom worden getest terwijl sommige mensen tot 400% zoom nodig hebben. Voor mensen met motorische problemen of lichtgevoeligheid is veel informatie op weinig beeldveld vermoeiend. Ook kan klikken pijn doen en felle kleuren kunnen migraine veroorzaken. Voor mensen op het autismespectrum is voorspelbaarheid heel belangrijk: onverwachte animaties, geluiden en advertenties zijn vaak te heftig en/of vermoeiend.

## Testen

Testen was hieruit de grootste boodschap. Ik vond dat hij dit goed overbracht. Johan had hele duidelijk echte voorbeeld van mensen die het moeilijk hebben op het web en waar eigenlijk te weinig naar om wordt gekeken.`,
  },
  {
    id: `WN_sanne`,
    title: `Sanne_Peters`,
    category: `weekly_nerd`,
    date: `20-04-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `## Het web als opgedrongen medium

Het web is overal aanwezig en wordt je op een manier opgedrongen. Omdat het web zich zo snel ontwikkelt is het voor sommige mensen moeilijk bij te blijven ofwel te begrijpen. Terwijl het web juist een vriendelijke, toegankelijke plek zou moeten zijn waar mensen voor kunnen kiezen.

## Verdiepen in anderen

Sanne vertelde dat het hiervoor super belangrijk is om je te verdiepen in de wereld van anderen en stelde een aantal manieren om dat te doen:
- Praat met je buren
- Lees een boek of kijk een film over iemand die niet op jou lijkt

## Impact maken

Ze had het ook over manieren waarop je impact kan maken:
- Breng de impact van een oplossing in beeld
- Toets je oplossing
- Bouw je netwerk op met mensen die je motiveren
- Als je zelf geen goede ideeën hebt kan je altijd iemand helpen zijn of haar goede idee te verwezelijken

## Reflectie

Ik vond de presentatie van Sanne Peters interessant. Ze leek heel zenuwachtig, waardoor ze alles wat slap vertelde. Maar ze had wel écht dingen te zeggen. Ook vond ik haar tips over hoe je in andere mensen kan verdiepen door het bekijken van, zoals ik het interpreteerde, verschillende media over en gemaakt door mensen die op een of andere manier van je af staan.`,
  },
  {
    id: `WN_Q42`,
    title: `Q42`,
    category: `weekly_nerd`,
    date: `28-05-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `
## Design systems

De kern van een design system is consistentie en efficiëntie, je wil niet voor de tiende keer dezelfde button bouwen. Daarnaast gaat het om schaalbaarheid, flexibiliteit en vooral een brug slaan tussen design en development. Dat werkt alleen als beide disciplines dezelfde taal spreken, en daarom is een gedeeld mental model zo belangrijk. Atomic design is daar een voorbeeld van, maar dan moet je het er wel over eens zijn wat een "atom" precies is. Tokens werken daarin goedt: vaste waardes die je overal hergebruikt. Q42 liet hun eigen opbouw zien, foundation > core components > composites > screens, met onderscheid tussen universal en team specific composites. Ook is het belangrijk om na te denken hoe je werkt met grote bedrijven: je creëert al snel afhankelijkheid en de impact van je keuzes is meteen groter.

## Business

Bij grote klanten is de afstand tussen business en IT groter, toch krijg je te maken met mensen die vanuit de business-kant op het project kijken. Wat me opviel was dat werd verteld dat business soms denkt dat ze de oplossing al hebben zonder de technische kennis om dat te beoordelen, en dat jij daar als designer of dev niet in mee hoeft te gaan. De uitspraak "gedeelde verantwoordelijkheid is geen verantwoordelijkheid" is een goede om te onthouden. Dat merk ik zelf ook en lijkt een beetje op het bystander-effect.

## Werken met AI

Over AI had Q42 goede richtlijnen: gebruik het, maar denk actief na over waarvoor. Handig voor debugging, als rubberducking-sparringpartner en voor abstractere onderdelen zoals performance of security. Maar níet als je zelf niet snapt wat er gebeurt, en ook niet voor creatief werk of accessibility. 
Dit laat mij denken over voor wat voor dingen ik AI wil gebruiken en vooral vaarvoor niet.

## Toegankelijkheid

De grote vraag bij toegankelijkheid was hoe je het hoger op de prioriteitenlijst krijgt, want richtlijnen volgen betekent nog geen praktisch succes, en testen blijft het belangrijkste. Echter kost dat testen tijd. Hoe Q42 fundamenteel leek te begrijpen dat toegankelijkheid geen optie is maar een must was nice. Geen opt-in, geen opt-out: de vraag is niet óf, maar wat je moet uitzoeken en hoe. Hiervoor zijn er goede argumenten te maken ook naar een groter bedrijf dat misschien moeilijk doet of budget vrijmaken.
 `,
  },
  {
    id: `WN_Voorhoede`,
    title: `de_Voorhoede`,
    category: `weekly_nerd`,
    date: `04-06-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `
## De Voorhoede

De Voorhoede zijn geen echte designers, maar wijzen opdrachtgevers wel op de mogelijkheden rondom design, bijvoorbeeld met dingen als clippaths. Opdrachtgevers zijn vaak onwetend, dat zie je vaak terugkomen rond bugfixen. Je moet daardoor steeds inschatten hoeveel uitleg je moet geven. Grappig om te weten was het "<ruby>" element, een HTML-element voor Japanse kanji, iets wat ik niet kende. Vaagheid vanuit de klant heeft echte gevolgen: het kan zorgen voor maanden uitloop.

## NL Design System

Het NL Design System is eigenlijk geen design system, maar een set specificaties waarmee je een design system kunt bouwen. Het is open source, en het idee is dat je een component zo af mogelijk maakt zodat je het zo snel mogelijk kunt mergen. Een component van de ene site kun je hergebruiken, mits je het algemeen genoeg houdt. Over accessibility: je moet echt testen, want pas dan zie je wat voor fysieke impact je websites maken. Je kan accessibility standaard mee nemen in de opdracht, bijvoorbeeld door +20% bovenop de oorspronkelijke opdracht te rekenen.

## Offline-first

Het laatste deel ging over offline-first en PWA's, progressive web apps die appgedrag nabootsen, zodat je bijvoorbeeld tussen pagina's kunt switchen zonder internet. Hun usecase: liftpersoneel dat in de lift zit zonder verbinding moet alsnog data kunnen opslaan. Dat vereist wel een bepaald gedachtepatroon, want je moet vooraf weten wat er nodig is om de data te kunnen tonen en opslaan. De kernprincipes zijn: lokaal opslaan en later syncen, en starten bij "geen verbinding". Dat bespaart data en batterij, maar brengt ook uitdagingen mee zoals merge conflicts, slimme caching en een duidelijke sync-status. Je zet het vooral in bij slechte connectiviteit of belangrijke data.

Technisch komt er een hoop bij kijken. Service workers vormen een tussenlaag voor netwerkverzoeken en slaan requests op. Voor lokale opslag heb je IndexedDB, een database binnen de browser, en localStorage. Synchronisatieframeworks bepalen wanneer wat wordt verzonden en gecached. Belangrijke best practices zijn: progressive enhancement (eerst zorgen dat het zonder internet werkt, daarna enhancen mét internet), cache invalidation (wanneer gooi je data weg?), background sync (laten synchroniseren zodra de verbinding herstelt zonder de gebruiker te storen), error handling met exponential backoffs, en performance optimisation.
`,
  },
  {
    id: `WN_HansDeZwart`,
    title: `Hans_de_Zwart`,
    category: `weekly_nerd`,
    date: `21-05-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `
## Niks te verbergen?

Hans de Zwart had het over privacy. Hij begon met het klassieke "ik heb toch niks te verbergen", dat bij doorvragen nooit klopt: je pincode of huisadres wil je natuurlijk wél voor jezelf houden. Je hebt een individueel recht tegen absolute surveillance, een sociaal recht met een democratische noodzaak: zonder ruimte om ongestoord te denken kan je geen vrije mening vormen.

## Privacy als contextuele integriteit

Belangrijk is het concept privacy als contextuele integriteit. Wat je deelt is namelijk context-afhankelijk, want je dokter, je familie en je vrienden krijgen niet hetzelfde te horen. Social media gooit dat overhoop met context collapse, waarbij al die contexten samenkomen op één account waar iedereen álles ziet. Daarbij stelde hij de vraag of je wel controle hebt over je eigen gegevens, want zodra data ergens ligt kan het misbruikt worden. Zijn advies: never identify yourself.

## De wetgeving

Daarna ging hij in op de wetgeving, die volgens hem eigenlijk common sense is over hoe je met elkaar om zou moeten gaan. De AVG draait om persoonsgegevens, oftewel informatie die te herleiden is naar een persoon. Toestemming moet vrij en geïnformeerd zijn en kan altijd weer worden ingetrokken, en naast toestemming zijn er grondslagen als noodzaak voor een overeenkomst, vitaal belang en gerechtvaardigd belang. Belangrijk daarbij is doelbinding: je mag data alleen gebruiken voor het doel waarvoor je het verzameld hebt. Als gebruiker heb je bovendien recht om je gegevens in te zien en aan te passen, het recht op vergetelheid, en dataportabiliteit.

## Privacy by Design

Tot slot kwam Privacy by Design langs, met een verwijzing naar het boek Privacy is Hard and Seven Other Myths van Jaap-Henk Hoepman. Privacy is geen blokkade maar een ontwerpprobleem, met strategieën als minimize (verzamel geen gegevens die je niet nodig hebt), separate (sla gegevens los van elkaar op), abstract (wil je weten of iemand ouder dan 18 is, dan hoef je geen geboortejaar te vragen) en hide (versleuteling). Vooral dat leeftijdsvoorbeeld maakte voor mij concreet hoeveel je als ontwerper kan weglaten zonder functionaliteit te verliezen.

    `,
  },

  {
    id: `WN_LeonieWatson`,
    title: `Leonie_Watson`,
    category: `weekly_nerd`,
    date: `10-06-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `
## Blind & loves AI

Léonie Watson is blind en houdt van AI. Toen ze dat zei kon je het publiek bijna horen zuchten. Maar haar argument is dat AI dingen kan overbruggen die door slecht webdesign juist onbruikbaar zijn. AI kan langs een slechte semantische structuur heen werken, kan via beeldherkenning ontbrekende beschrijvende tekst aanvullen, en AI-bril kan voor een blind persoon beschrijven wat diegene in de echte wereld "ziet". Ook object-identificatie hoort daarbij, zoals het uit elkaar houden van verschillende blikjes, en tools als Orion die objecten voor je vinden. Het sterkste voorbeeld waren de AI-agents die met je mee winkelen, zoals Innosearch.ai, dat met alle informatie werkt die het van een website kan trekken en zo het hele bezoek conversationeel afhandelt.

## Why not

Tegelijk zit er een addertje onder het gras. Augmentatie, AI die iets toevoegt wat er eerst niet was, is een echt nuttige use case en rechtvaardigt op zichzelf de twijfelachtige oorsprong van AI. Maar compensatie is iets anders: daar doet AI dingen die blinde mensen alleen maar nodig hebben omdát het webdesign slecht is, denk aan ontbrekende alt-teksten. Wat me bijbleef was haar punt dat elke faaltekortkoming vraag creëert naar interpretatie: AI wordt zo een tolk voor blinde en slechtziende mensen. AI is eigenlijk zo populair omdat het compenseert voor het slechte design dat wij als webdevs afleveren. We outsourcen het begrijpen naar een tussenlaag, en niet alleen voor mensen met een beperking maar ook voor neurodivergente mensen. Elke tussenoplossing lost een probleem op dat er eigenlijk niet had moeten zijn.

## The web she wanted

Het web dat zij wil is er dan ook één dat geen AI nodig heeft om te compenseren, maar dat van zichzelf al goed in elkaar zit. Geen lapmiddel achteraf, maar echte inclusiviteit vanaf de basis. Niet AI als redding van toegankelijkheid, maar AI als het bewijs dat we onze basis niet op orde hebben.

    
    `,
  },

  {
    id: `WN_Sidt`,
    title: `Cyd_Stumpel`,
    category: `weekly_nerd`,
    date: `10-06-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `
Een site is vrij makkelijk te kopiëren door anderen :(

## Progressive enhancement

 Progressive enhancement draait om het volgende: bouw eerst de simpelste werkende versie en stapel daar verbeteringen bovenop. De roltrap is een helder voorbeeld. Werkt hij niet, dan is het nog steeds een trap. Graceful degradation werkt de andere kant op: als een animatie breekt, valt niet de hele site om. In beide gevallen staat de gebruiker centraal.

Door bewust voor de slechtst acceptabele ervaring te ontwerpen wordt alles wat daarna komt een verbetering in plaats van een vereiste.

## HTML first

HTML komt eerst. Er zijn ingebouwde manieren om informatie te tonen en te verbergen zonder dat je er JavaScript bij hoeft te halen. De details-tag is daar het voorbeeld van, en met een gedeelde name-attribute gedraagt een groep zich als een radiobutton, zodat er maar één tegelijk openstaat. Dat is semantisch, want het is de fundering zelf.

    `,
  },
  {
    id: `WN_SaraJoy`,
    title: `Sara_Joy`,
    category: `weekly_nerd`,
    date: `10-06-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `
## Old web is friggin' awesome

Sara Joy liet zien hoe geweldig het oude web was. Sites als MelonLand Surf Club, NeoCities en The MelonLand Project zijn voorbeelden van fantastische oldweb-core websites. De joy, de whimsy, de vibes spatten ervan af.

## Vibes als meetwaarde

Een leuk idee was dat je bij het laden van een site eigenlijk een visuele meetwaarde van die site krijgt: de vibe. Maar saaiheid is óók voorspelbaar, en voor bepaalde taken wil je dat juist. Niet elke site hoeft een feestje te zijn.

## Technische dingen

prefers-reduced-motion werkt ook gewoon in JavaScript, niet alleen in CSS. Een web-idee dat ik wil onthouden: een SVG-filter op een specifieke site zodat tekst op een glitchy manier vervormt. En alt-text als poëzie, waarbij de beschrijving zelf iets toevoegt in plaats van puur functioneel te zijn.

## Voor iedereen

Het web is er voor iedereen. De joy, de whimsy, de vibes, dat is allemaal voor iedereen.

    `,
  },

  {
    id: `LD_s0_css`,
    title: `"Goed" in CSS worden`,
    category: `leerdoelen_sprint0`,
    date: `12-05-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `Creatiever programmeren, plezier in het coderen.`,
  },
  {
    id: `LD_s0_creatief`,
    title: `Creatievere websites`,
    category: `leerdoelen_sprint0`,
    date: `12-05-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `Dus geen standaard nav bar + content.`,
  },
  {
    id: `LD_s0_schetsen`,
    title: `Schetsmatig leren ontwerpen`,
    category: `leerdoelen_sprint0`,
    date: `12-05-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `Sneller ideeën schetsmatig uitwerken, zodat ik minder tijd kwijt ben aan doodlopende ideeën.`,
  },
  {
    id: `LD_m_procesverslag`,
    title: `Procesverslag beter bijhouden`,
    category: `leerdoelen_meesterschap`,
    date: `23-06-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `Tijdens het blok ben ik vaak vergeten dat te doen tijdens het proces. Hierdoor heb ik dat minder accuraat kunnen opschrijven, konden de docenten mijn proces minder goed volgen en ben ik zelf minder bewust geworden wat ik heb bereikt tijdens een vak.`,
  },
  {
    id: `LD_m_uitstellen`,
    title: `To-Do's en uitstellen verminderen`,
    category: `leerdoelen_meesterschap`,
    date: `23-06-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `Voornamelijk het uitstellen is een groot probleem. Als ik te veel tegelijk moet doen doe ik niks. Ik hoop het met to-do lijstjes overzichterlijker te houden.`,
  },
  {
    id: `LD_m_js`,
    title: `JS verbeteren`,
    category: `leerdoelen_meesterschap`,
    date: `23-06-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `Ik zie wat er mogelijk is met JS en ik wil daar mee aan de slag kunnen zoals ik met CSS aan de slag kan.`,
  },
  {
    id: `LD_m_lol`,
    title: `Weer iets meer lol hebben met code`,
    category: `leerdoelen_meesterschap`,
    date: `23-06-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `Het laatste blok is mij heel slecht gevallen en ik heb niet zo veel energie in de code kunnen steken als ik zou willen.`,
  },
  {
    id: `Ref_tussentijds`,
    title: `Tussentijdse_reflectie`,
    category: `reflecties`,
    date: `13-05-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `
## Leerdoel 1: "Goed" in CSS worden

Dit doel is wat mij betreft het duidelijkst gehaald. Bij CSS to the Rescue merkte ik dat het onderwerp me echt interesseerde en dat ik er steeds verder aan wou werken. Na school ging ik moeiteloos nog tot in de nacht door. Dat is precies de energie waar ik op hoopte. Ik ben vloeiender geworden in het schrijven van CSS. Ook heb ik met Nils ontdekt hoe leuk het eigenlijk kan zijn om tegen een probleem aan te lopen. Ik merkte dat Nils erg goed was in het isoleren van problemen en zo de bug te vinden en op te lossen, dat zou ik ook graag willen leren.

## Leerdoel 2: Creatievere websites

Dit komt vooral terug in mijn HCD project. Voor Rogier moest de tekst zo groot worden dat een normale website er vrijwel onbruikbaar van wordt. De site is eigenlijk exclusief met toetsenbord combinaties te besturen en de pagina schuift heen en weer op basis van waar hij op focust. Dat gaat flink tegen de conventies in, maar het werkte voor hem. Het vak heeft me laten zien dat echt contact met een client het ontwerp ten goede komt, zeker bij toegankelijkheid.

## Leerdoel 3: Schetsmatig leren ontwerpen voordat ik een idee meteen ga uitwerken

Dit doel heb ik het minst aangeraakt. Bij CSS to the Rescue viel ik juist een rabbithole in en verloor ik de opdracht een beetje uit het oog, en bij HCD moest ik nog wennen aan het idee dat het eindproduct een prototype is en geen site die "af" is. Hier valt voor mij dus nog winst te halen. Hier en daar heb ik een schetsje gemaakt maar ik mag er van mezelf echt wel op letten dit wat consistenter te doen.

## Wat ik verder heb geleerd

Ik heb een heel nieuw concept geleerd met svg filters en geëxperimenteerd met blend modes. Ook heb ik geleerd hoe je met alleen CSS een "random" value genereert en hoe je die juist niet kan gebruiken om een animatie aan te sturen :( en hoe je CSS states in forms gebruikt om functionaliteit toe te passen. Bij Browsertech kreeg ik een echte waardering voor formulieren: hoe je een soort input trappetje maakt (antwoord ja? Ga door naar de volgende vraag, antwoord nee? Skip de volgende vraag), hoe je met attributes inputs als radiobuttons koppelt, en wat een webpagina nou een webpagina maakt ten opzichte van papier. Bij de API merkte ik vooruitgang door mijn eindresultaat te vergelijken met de eerste week van de minor, toen ik hetzelfde probeerde te maken. Ook zijn we met API natuurlijk begonnen met Astro. Met de componenten gaat een nieuwe wereld voor mij open. Ik ben dan ook benieuwd waar ik het in de toekomst voor ga gebruiken.

## Wat nog beter kan

JavaScript blijft mijn grootste worsteling. Ik raak er snel door geïntimideerd en denk dat ik de basis nog niet helemaal begrijp, waardoor alles wat ik daarboven doe ongefundeerd voelt. Dit is zeker iets waar ik beter in wil worden. Daarnaast laat ik het bijhouden van mijn proces en tussentijdse reflecties steeds liggen, omdat ik zodra ik begin meteen aan de code ga. Ook blijf ik vaak te lang aan kleine dingetjes sleutelen terwijl ik beter eerst de basis op niveau kan krijgen. Tot slot heb ik gemerkt dat gaten in de periode, zoals SmashingCon en de vakantie, me snel mijn ritme en overzicht ontnemen.
    `,
  },
  {
    id: `Ref_eind`,
    title: `Eind_reflectie`,
    category: `reflecties`,
    date: `30-06-2026`,
    master_folder: `WD&D texts`,
    iframeSrc: ``,
    expandHref: ``,
    note: `
Het laatste project van de minor. Ik mocht in een team voor een opdrachtgever, Marjolijn, een glossary website maken waarin elke term een eigen animatie kreeg. Ik was super enthousiast toen ik hoorde dat ik deze opdracht mocht doen, en bij de kickoff voelde het echt als kunst maken met code. Dat is precies de manier van coderen die ik het meest boeiend vind: nieuwe en unieke dingen maken in plaats van voor de tienduizendste keer dezelfde interface. Ik ben erg blij met het eindresultaat, en er is zelfs een stage bij Marjolijn uit voortgekomen.

Voor dit project had ik een aantal nieuwe leerdoelen opgesteld.

## Procesverslag beter bijhouden

Ik heb mijn best gedaan om mijn proces beter bij te houden. Het hielp om in codepennetjes te werken en zo automatisch testjes op te slaan. Die kon ik later gebruiken in het procesverslag en om überhaupt terug te kijken naar hoe ik dingen ook alweer deed. Wel merkte ik dat het noteren van mijn gedachtegangen tijdens het maken er nog steeds vaak bij in schoot. Vanwege een aantal dingen buiten school om was ik sneller vermoeid en daardoor warriger, waardoor het door de minor heen lastiger werd om het overzicht te behouden en alles goed te noteren. Ik heb een aantal keer in Notion geschreven tijdens het werken, maar dit echt consistent doen blijft heel lastig voor mij. Tegen het einde had ik een gesprek met een van de leraren die voorstelde om voice notes op te nemen, en dat ga ik de volgende keren zeker proberen. Al met al heb ik meer van mijn tussentijdse werk opgeslagen en beschreven en kon ik mijn persoonlijke productbio vollediger schrijven. Dat zie ik zeker als een vooruitgang op eerdere projecten.

## Minder uitstellen en beter plannen

Trello was handig om te zien wat er nog te gebeuren stond, en de communicatie binnen het team was goed. We bespraken duidelijk wat ieder ging doen en overlegden wat van belang was. Ik heb heel erg de neiging om gewoon door te gaan met code schrijven zonder volledige informatie te hebben, dus het hielp om eerst met het team te overleggen voordat ik iets ging doen. Zo was er context of iets wel prioriteit had. Dat hielp om overzicht te bewaren en mijn uitstelgedrag te verminderen, want bij mij ligt uitstellen soms simpelweg aan het niet weten waar ik moet beginnen. Toch merkte ik dat ik me ondanks die structuur soms nog steeds overwhelmed voelde en het overzicht alsnog kwijtraakte. Er is dus vooruitgang, maar ook nog genoeg te halen. Dit is iets waar ik al een tijd tegen aan loop en aan wil blijven werken, en mijn korte stage is daarvoor een mooie kans.

## JavaScript verbeteren

Ik heb best wel een stukje meer JS geleerd. Toch heb ik vaak het gevoel dat ik de basis nog gewoon mis. Ik werd overweldigd door alles wat kan, had moeite met het lezen van JS en het gevoel dat ik allerlei dingen moest weten die ik niet wist, laat staan dat ik het zelf kon schrijven. De workshops van Jad waren super fijn. Naast het leren van nieuwe dingen was het gewoon prettig om met een docent de JS regel voor regel door te nemen, en ik ben blij dat ik die code nog kan terugkijken. De code voor de term Invisible was daadwerkelijk leuk om te doen: daarbij sloeg ik sommetjes op in variabelen en gebruikte ik die weer voor de volgende som, zodat ik percentueel het midden kon berekenen. Ook het met .map loopen over de onderdelen in een array kwam terug, en ik zag opnieuw hoe nuttig JS kan zijn, bijvoorbeeld met de span-split functie die we meermaals in de animaties hebben gebruikt. Die ervaringen hielpen om JavaScript iets minder intimiderend te vinden. Het blijft iets waar ik zeker meer over wil leren, hoe intimiderend ook, maar dit project heeft daarin geholpen.

## Weer meer lol hebben met code

Hiervoor waren de animaties eigenlijk perfect. Ik vond het hartstikke leuk om met CSS en JS de animaties te maken. Door de vermoeidheid kon ik niet zo productief zijn als ik wilde, en daar heb ik veel om lopen stressen, wat de lol er wel een beetje van af haalde. Maar ik heb zeker momentjes van passie gevoeld waarin ik iets ontdekte wat mij boeide en waar ik intrinsieke motivatie voor voelde om het uit te zoeken. De super ellipse, ook al was die geen deel van de glossary terms, vond ik daarvan super interessant.

## En de oude leerdoelen

Mijn oude doelen kwamen ook terug. Het creatiever en plezieriger worden met CSS liep gewoon door: mijn grid kennis was weggezakt en het was fijn om die weer op te halen, ik ben blij met de hover animatie en de subsequent child selector, met de radial-gradient die ik met Sanne maakte, en met de super ellipse als corner shape functie die je kan animeren. Het minder standaard bouwen kwam terug in het hele karakter van het project, met een unieke animatie per term en een homepage waar ik met :has() de categorienavigatie heb opgelost. En het sneller schetsen en prototypen heb ik in de praktijk gebracht door per term concepten te schetsen, zoals bij System met de conveyor, traffic en rotate varianten, en die in codepens uit te werken. Toch mag ik er nog steeds op letten dat consistenter te doen.

## Conclusie

Ik vond het een superleuk project, ondanks de struggles. Ik liep tegen dezelfde dingen aan waar ik al heel lang tegen aan loop: het overzicht houden vind ik gewoon heel lastig, en daaruit volgt opnieuw moeite met het procesverslag bijhouden, minder uitstellen en plannen. Toch denk ik dat ik stapjes heb gemaakt de goede richting op. In het vervolg hoop ik beter te leren omgaan met de chaos in mijn hoofd, en de stage die uit dit project is ontstaan is daar een mooie kans voor.


## Terugblik
Ik ben zo blij dat ik deze minor heb gekozen. Het was zwaar, het was lastig maar het was ook leuk en vooral super leerzaam. Ik heb het gevoel dat ik steviger in de studie sta en voor de toekomst wat zekerder het werkveld betreed.
De projecten die ik heb gemaakt zijn soms wat janky, maar ik ben er blij mee.
Ook ben ik super enthousiast over de (mogelijke) stages die uit deze minor zijn gekomen. Ik ben blij binnen dit werkveld door te mogen leren.

    `,
  },
];
