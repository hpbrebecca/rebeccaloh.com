// Quotes System for Future Design
(function() {
    const quotes = {
        en: [
            { text: "Be the change that you wish to see in the world. – Mahatma Gandhi", category: "change" },
            { text: "Nothing endures but change. – Heraclitus", category: "change" },
            { text: "Change your thoughts and you change your world. – Norman Vincent Peale", category: "change" },
            { text: "Change before you have to. – Jack Welch", category: "change" },
            { text: "Growth and comfort do not coexist. – Ginni Rometty", category: "growth" },
            { text: "We grow through what we go through. – Unknown", category: "growth" },
            { text: "Growth begins at the end of your comfort zone. – Neale Donald Walsch", category: "growth" },
            { text: "Personal growth is not about learning new things, but unlearning old limits. – Unknown", category: "growth" },
            { text: "Life is either a daring adventure or nothing at all. – Helen Keller", category: "joy" },
            { text: "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi", category: "joy" },
            { text: "Life is short, and it's up to you to make it sweet. – Sarah Louise Delany", category: "joy" },
            { text: "Find joy in the ordinary. – Unknown", category: "joy" },
            { text: "Let your joy be in your journey, not in some distant goal. – Tim Cook", category: "joy" },
            { text: "Joy is the simplest form of gratitude. – Karl Barth", category: "joy" },
            { text: "The essence of joy is inner stillness. – Eckhart Tolle", category: "joy" }
        ],
        de: [
            { text: "Sei die Veränderung, die du dir für die Welt wünschst. – Mahatma Gandhi", category: "change" },
            { text: "Nichts bleibt, ausser der Veränderung. – Heraklit", category: "change" },
            { text: "Ändere deine Gedanken, und du veränderst deine Welt. – Norman Vincent Peale", category: "change" },
            { text: "Verändere dich, bevor du musst. – Jack Welch", category: "change" },
            { text: "Wachstum und Komfort können nicht nebeneinander bestehen. – Ginni Rometty", category: "growth" },
            { text: "Wir wachsen an dem, was wir durchleben. – Unbekannt", category: "growth" },
            { text: "Wachstum beginnt dort, wo deine Komfortzone endet. – Neale Donald Walsch", category: "growth" },
            { text: "Persönliches Wachstum heisst, alte Grenzen loszulassen, nicht nur Neues zu lernen. – Unbekannt", category: "growth" },
            { text: "Das Leben ist entweder ein mutiges Abenteuer, oder gar nichts. – Helen Keller", category: "joy" },
            { text: "Lebe, als würdest du morgen sterben. Lerne, als würdest du ewig leben. – Mahatma Gandhi", category: "joy" },
            { text: "Das Leben ist kurz, du entscheidest, ob es süss wird. – Sarah Louise Delany", category: "joy" },
            { text: "Finde Freude im Alltäglichen, dort wohnt das Echte. – Unbekannt", category: "joy" },
            { text: "Finde deine Freude im Weg, nicht im Ziel. – Tim Cook", category: "joy" },
            { text: "Freude ist die reinste Form von Dankbarkeit. – Karl Barth", category: "joy" },
            { text: "Das Wesen der Freude ist stille Präsenz. – Eckhart Tolle", category: "joy" }
        ],
        fr: [
            { text: "Sois le changement que tu veux voir dans le monde. – Mahatma Gandhi", category: "change" },
            { text: "Rien ne dure, sauf le changement. – Héraclite", category: "change" },
            { text: "Change tes pensées et tu changeras ton monde. – Norman Vincent Peale", category: "change" },
            { text: "Change avant d'y être forcé. – Jack Welch", category: "change" },
            { text: "La croissance et le confort ne coexistent pas. – Ginni Rometty", category: "growth" },
            { text: "Nous grandissons à travers ce que nous traversons. – Inconnu", category: "growth" },
            { text: "La croissance commence là où finit ta zone de confort. – Neale Donald Walsch", category: "growth" },
            { text: "Grandir, c'est moins apprendre du nouveau que se libérer de ses limites. – Inconnu", category: "growth" },
            { text: "La vie est soit une aventure audacieuse, soit rien du tout. – Helen Keller", category: "joy" },
            { text: "Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours. – Mahatma Gandhi", category: "joy" },
            { text: "La vie est courte ; à toi de la rendre douce. – Sarah Louise Delany", category: "joy" },
            { text: "Trouve la joie dans les choses simples du quotidien. – Inconnu", category: "joy" },
            { text: "Trouve ta joie dans le chemin, pas seulement dans le but. – Tim Cook", category: "joy" },
            { text: "La joie est la forme la plus pure de la gratitude. – Karl Barth", category: "joy" },
            { text: "L'essence de la joie est une paix intérieure profonde. – Eckhart Tolle", category: "joy" }
        ],
        zh: [
            { text: "成为你希望在世界上看到的改变。—— 圣雄甘地", category: "change" },
            { text: "唯有变化永恒。—— 赫拉克利特", category: "change" },
            { text: "改变你的想法，你就能改变世界。—— 诺曼·文森特·皮尔", category: "change" },
            { text: "在不得不改变之前先改变。—— 杰克·韦尔奇", category: "change" },
            { text: "成长与舒适无法并存。—— 吉妮·罗梅蒂", category: "growth" },
            { text: "我们在经历中成长。—— 佚名", category: "growth" },
            { text: "成长始于舒适区的尽头。—— 尼尔·唐纳德·沃尔什", category: "growth" },
            { text: "个人成长不是学习新知识，而是放下旧的限制。—— 佚名", category: "growth" },
            { text: "生活要么是大胆的冒险，要么什么都不是。—— 海伦·凯勒", category: "joy" },
            { text: "像明天就会死一样生活，像永远活着一样学习。—— 圣雄甘地", category: "joy" },
            { text: "生命短暂，由你让它变得美好。—— 莎拉·露易丝·德拉尼", category: "joy" },
            { text: "在平凡中发现喜悦，那是真实的幸福。—— 佚名", category: "joy" },
            { text: "让你的喜悦存在于旅程之中，而非远方的终点。—— 蒂姆·库克", category: "joy" },
            { text: "喜悦是感恩最纯粹的表达。—— 卡尔·巴特", category: "joy" },
            { text: "喜悦的本质，是内在的宁静与觉知。—— 埃克哈特·托利", category: "joy" }
        ]
    };

    const nameTranslations = {
        de: { name: "Rebecca Loh", location: "Zürich, Schweiz" },
        en: { name: "Rebecca Loh", location: "Zurich, Switzerland" },
        fr: { name: "Rebecca Loh", location: "Zurich, Suisse" },
        zh: { name: "羅碧嘉", location: "蘇黎世，瑞士" }
    };
    
    const languageLabels = {
        de: "語言",
        en: "語言",
        fr: "語言",
        zh: "Language"
    };
    
    // Navigation labels in all languages
    const navigationLabels = {
        home: {
            de: "Startseite",
            en: "Home",
            fr: "Accueil",
            zh: "首頁"
        },
        connect: {
            de: "Kontakt",
            en: "Contact",
            fr: "Contact",
            zh: "聯絡"
        },
        aboutme: {
            de: "Profil",
            en: "Bio",
            fr: "Profil",
            zh: "簡介"
        },
        quotes: {
            de: "Zitate",
            en: "Quotes",
            fr: "Citations",
            zh: "引言"
        },
        recommendations: {
            de: "Links",
            en: "Links",
            fr: "Liens",
            zh: "連結"
        },
        disclaimer: {
            de: "Disclaimer",
            en: "Disclaimer",
            fr: "Avertissement",
            zh: "法律聲明"
        }
    };
    
    // About section content in all languages
    const aboutContent = {
        description: {
            de: "Auf LinkedIn kontaktieren.",
            en: "Contact on LinkedIn.",
            fr: "Contacter sur LinkedIn.",
            zh: "在 LinkedIn 上聯絡。"
        },
        intro: {
            de: "",
            en: "",
            fr: "",
            zh: ""
        },
        sections: {
            en: [
                {
                    title: "Early Life & Values",
                    paragraphs: [
                        "Rebecca Loh was born and raised in Basel, Switzerland, where she also completed her schooling. Growing up on a street with a UBS branch at the corner she passed every day on her way to school, she developed an early curiosity about the world of banking and investing. From a young age, she was fascinated by the principle of compound interest and how value can grow exponentially over time. At fourteen, she purchased her first UBS fund through her own youth account, an early step that marked the beginning of a lifelong curiosity about financial markets and value creation through investing.",
                        "She comes from a family with Hakka heritage, a people shaped by migration and resilience, known for adaptability and diligence. These values, deeply rooted in her upbringing, continue to influence her approach to work, relationships, and progress.",
                        "Her professional path began with an apprenticeship in banking at Dreyfus Söhne & Cie AG, one of Basel's long-established private banks, where she developed a clear sense for analytical rigour, integrity, and service."
                    ]
                },
                {
                    title: "Global Perspective & Further Education",
                    paragraphs: [
                        "After her apprenticeship, she spent half a year volunteering in South Africa, working in a team of 16 nationalities. The experience deepened her understanding of people and diversity and strengthened her motivation to build a career in Switzerland that creates value and stability, opening opportunities for others, including those in developing regions.",
                        "She went on to earn a Bachelor of Science in Industrial Engineering, becoming part of the first group of students to complete an international exchange semester within the regular study duration. During her semester at the University of Hong Kong, she studied in the Department of Data and Systems Engineering, focusing on Industrial Engineering and Logistics Management. The experience allowed her to connect more deeply with her Asian background and left a lasting impression of the study culture and discipline she encountered there.",
                        "As part of her studies, she joined the POLE Project, an international and interdisciplinary collaboration between Switzerland and Continental Guadalajara in Mexico. Her team developed early prototypes of interaction with in-car digital technology, anticipating what would later evolve into heads-up display systems. These experiences broadened her technical curiosity and refined her ability to link human behaviour with innovation.",
                        "Rebecca later completed a Master of Science in Business Administration at the Berner Fachhochschule, majoring in Business Development. Between 2020 and 2022, she earned the federal title Chartered Expert in Financial and Managerial Accounting and Reporting at the Controller Akademie Zürich."
                      ]
                      
                      
                },
                {
                    title: "Career & Approach",
                    paragraphs: [
                        "Before joining FiCAS AG as Chief Financial Officer (CFO), she held positions as Team Lead Controlling at the Municipality of Köniz, Financial Controller at the Swiss Financial Market Supervisory Authority (FINMA), and Financial Controller at iba ag, Büro Services. Across these roles, she worked closely with hundreds of stakeholders and was appreciated for her empathetic nature, solution-oriented mindset, and ability to make complex tasks easier for others. She motivates constructive outcomes by understanding where people are coming from, identifying their needs, and building bridges. Her approachable leadership style fostered trust and collaboration.",
                        "Since August 2024, she has served as Chief Financial Officer at FiCAS AG, a FINMA-licensed Swiss asset manager specialising in actively managed crypto-asset investment products. Joining a fast-moving and innovative field, she brings together experience from both public and private sectors to help drive progress, shape processes, and strengthen financial governance in a rapidly evolving industry. The role offers a space where she can draw on everything she has learned.",
                        "Rebecca is known for her analytical mind and creative approach to problem-solving. She takes genuine pleasure in building and refining processes that bring clarity, stability, and long-term efficiency, work that allows her to combine precision with intuition and turn structure into sustainable progress."
                    ]
                }
            ],
            de: [
                {
                    title: "Frühes Leben & Werte",
                    paragraphs: [
                        "Rebecca Loh wurde in Basel geboren und ist dort aufgewachsen, wo sie auch ihre gesamte Schulzeit verbrachte. Auf ihrem täglichen Weg zur Schule kam sie an einer UBS-Filiale vorbei, was früh ihre Neugier für die Welt des Bankwesens und des Investierens weckte. Schon als Kind faszinierte sie, wie Kapital durch Zinseszinsen wachsen kann. Mit vierzehn Jahren erwarb sie ihren ersten UBS-Fonds über ihr eigenes Jugendkonto, ein Schritt, der ihre langjährige Neugier für Finanzmärkte und Wertschöpfung durch Investieren weckte.",
                        "Sie stammt aus einer Familie mit Hakka-Hintergrund, einem Volk, das durch Migration und Widerstandskraft geprägt ist und für Anpassungsfähigkeit und Fleiss bekannt ist. Diese Werte, tief in ihrer Erziehung verwurzelt, prägen bis heute ihren Umgang mit Arbeit, Menschen und Entwicklung.",
                        "Ihre berufliche Laufbahn begann mit einer Lehre bei Dreyfus Söhne & Cie AG, einer der ältesten Privatbanken Basels. Dort lernte sie die Bedeutung von Präzision, Integrität und analytischem Denken kennen – Werte, die sie seither begleiten."
                    ]
                },
                {
                    title: "Globaler Blick & Weiterbildung",
                    paragraphs: [
                        "Nach ihrer Lehre verbrachte sie ein halbes Jahr als Freiwillige in Südafrika und arbeitete dort in einem Team mit 16 Nationalitäten. Diese Erfahrung vertiefte ihr Verständnis für Menschen und Vielfalt und stärkte ihre Motivation, in der Schweiz eine Karriere aufzubauen, die Wert und Stabilität schafft und zugleich Chancen für andere eröffnet – auch in Entwicklungsregionen.",
                        "Anschliessend erwarb sie den Bachelor of Science in Industrial Engineering und gehörte zu den ersten Studierenden, die ein internationales Austauschsemester innerhalb der regulären Studienzeit abschlossen. Während ihres Semesters an der University of Hong Kong studierte sie im Department of Data and Systems Engineering mit Schwerpunkt Industrial Engineering und Logistics Management. Diese Zeit ermöglichte es ihr, sich stärker mit ihrem asiatischen Hintergrund zu verbinden und hinterliess einen bleibenden Eindruck von der dortigen Studienkultur und Disziplin.",
                        "Im Rahmen ihres Studiums nahm sie am POLE-Projekt teil, einer internationalen und interdisziplinären Zusammenarbeit zwischen der Schweiz und Continental Guadalajara in Mexiko. Ihr Team entwickelte frühe Prototypen für die Interaktion mit digitaler Fahrzeugtechnologie und antizipierte damit, was später als Head-up-Display-Systeme bekannt wurde. Diese Erfahrungen erweiterten ihre technische Neugier und schärften ihre Fähigkeit, menschliches Verhalten mit Innovation zu verknüpfen.",
                        "Später schloss Rebecca den Master of Science in Business Administration an der Berner Fachhochschule mit Vertiefung in Business Development ab. Zwischen 2020 und 2022 erwarb sie den eidgenössischen Fachausweis als Chartered Expert in Financial and Managerial Accounting and Reporting an der Controller Akademie Zürich."
                      ]
                      
                },
                {
                    title: "Karriere & Arbeitsweise",
                    paragraphs: [
                        "Bevor sie als Chief Financial Officer (CFO) zur FiCAS AG wechselte, war sie als Teamleiterin Controlling bei der Gemeinde Köniz, als Financial Controller bei der Eidgenössischen Finanzmarktaufsicht (FINMA) sowie als Financial Controller bei der iba ag, Büro Services, tätig. In all diesen Funktionen arbeitete sie eng mit Hunderten von Anspruchsgruppen zusammen und wurde für ihre verständnisvolle Art, ihre lösungsorientierte Denkweise und ihre Fähigkeit geschätzt, komplexe Aufgaben für andere zu vereinfachen. Sie fördert konstruktive Ergebnisse, indem sie die Perspektiven anderer versteht, deren Bedürfnisse erkennt und Brücken baut. Ihr nahbarer Führungsstil schuf Vertrauen und Zusammenarbeit.",
                        "Seit August 2024 ist sie Chief Financial Officer der FiCAS AG, einem von der FINMA zugelassenen Schweizer Asset Manager, der sich auf aktiv verwaltete Krypto-Anlageprodukte spezialisiert hat. In einem dynamischen und innovativen Umfeld bringt sie ihre Erfahrung aus öffentlicher Verwaltung und Privatwirtschaft zusammen, um Fortschritt zu fördern, Prozesse zu gestalten und die finanzielle Governance in einer sich schnell entwickelnden Branche zu stärken. Die Rolle bietet ihr Raum, auf all ihren bisherigen Erfahrungen aufzubauen.",
                        "Rebecca ist bekannt für ihr analytisches Denken und ihre kreative Herangehensweise an Problemlösungen. Sie hat Freude daran, Prozesse zu gestalten und zu verfeinern, die Klarheit, Stabilität und langfristige Effizienz schaffen – eine Arbeit, die es ihr ermöglicht, Präzision mit Intuition zu verbinden und Struktur in nachhaltigen Fortschritt zu verwandeln."
                      ]
                      
                }
            ],
            fr: [
                {
                    title: "Jeunesse & Valeurs",
                    paragraphs: [
                        "Rebecca Loh est née et a grandi à Bâle, où elle a également suivi toute sa scolarité. Chaque jour, sur le chemin de l'école, elle passait devant une agence UBS, un détail de son quotidien qui éveilla très tôt sa curiosité pour la banque et l'investissement. Enfant, elle était fascinée par la logique des intérêts composés et par la manière dont la valeur peut croître au fil du temps. À quatorze ans, elle acheta son premier fonds UBS avec son propre compte jeunesse, un geste fondateur qui marqua le début d'un intérêt durable pour les marchés financiers et la création de valeur par l'investissement.",
                        "Ses racines familiales sont Hakka, un peuple marqué par la migration, la résilience et une forte capacité d'adaptation. Ces valeurs, ancrées dans son éducation, continuent de guider sa manière de travailler, de collaborer et d'aborder le changement.",
                        "Elle débuta sa carrière par un apprentissage bancaire chez Dreyfus Söhne & Cie AG, l'une des plus anciennes banques privées de Bâle, où elle apprit la rigueur, l'intégrité et le sens du service."
                    ]
                },
                {
                    title: "Perspective Internationale & Formation",
                    paragraphs: [
                        "Après son apprentissage, elle s'engagea pendant six mois comme volontaire en Afrique du Sud. Travailler au sein d'une équipe composée de seize nationalités lui permit de découvrir la richesse des différences et la force de la coopération. Cette expérience renforça sa conviction que la stabilité construite en Suisse peut aussi créer des opportunités ailleurs dans le monde.",
                        "Elle poursuivit ensuite un Bachelor of Science en génie industriel et fit partie des premiers étudiants à intégrer un semestre d'échange international tout en terminant dans les délais. À l'Université de Hong Kong, elle étudia au sein du Department of Data and Systems Engineering, spécialisée en génie industriel et gestion logistique. Cette période lui permit de renouer avec son héritage asiatique et de découvrir la rigueur et la discipline du modèle académique local.",
                        "Dans le cadre de ses études, elle participa au projet POLE, une collaboration internationale et interdisciplinaire entre la Suisse et Continental Guadalajara au Mexique. Son équipe développa des concepts d'interaction entre l'humain et la technologie embarquée, préfigurant les systèmes d'affichage tête haute d'aujourd'hui.",
                        "Elle compléta ensuite un Master of Science en administration des affaires à la Haute école spécialisée bernoise, spécialisation en développement des affaires, et obtint en 2022 le titre fédéral d'experte en comptabilité et controlling à la Controller Akademie Zürich."
                    ]
                },
                {
                    title: "Carrière & Approche",
                    paragraphs: [
                        "Avant de rejoindre FiCAS AG en tant que Chief Financial Officer (CFO), elle occupa des postes de responsabilité, notamment Team Lead Controlling à la commune de Köniz, Financial Controller à la FINMA et chez iba ag, Bureau Services. À travers ces expériences, elle travailla avec de nombreux acteurs et fut reconnue pour sa pensée structurée, son pragmatisme et sa capacité à rendre des processus complexes clairs et opérationnels. Elle privilégie le dialogue et la recherche de solutions constructives, son leadership accessible crée des environnements de travail fondés sur la confiance.",
                        "Depuis août 2024, elle exerce la fonction de Chief Financial Officer au sein de FiCAS AG, un gestionnaire d'actifs suisse agréé par la FINMA, spécialisé dans les produits crypto gérés activement. Dans un secteur dynamique et novateur, elle met à profit son expérience publique et privée pour renforcer la gouvernance financière, affiner les processus et accompagner le développement de l'entreprise dans une perspective durable.",
                        "Rebecca se distingue par son esprit analytique et sa créativité dans la résolution de problèmes. Elle aime concevoir et perfectionner des processus qui apportent clarté, stabilité et efficacité à long terme, combinant précision et intuition pour transformer la structure en progrès durable."
                    ]
                }
            ],
            zh: [
                {
                    title: "早年與價值觀",
                    paragraphs: [
                        "羅碧嘉出生並成長於瑞士巴塞爾，並在當地完成學業。每天上學的路上，她都會經過街角的一家瑞銀分行，這個日常畫面啟發了她對銀行與投資世界的早期好奇心。她自小便對複利深感著迷，理解價值如何隨時間持續增長。十四歲時，她透過自己的青年帳戶購買了第一檔瑞銀基金，這個起步成為她探索金融市場與投資價值創造的開端。",
                        "她的家庭擁有客家背景，這個族群以堅韌、勤奮與卓越的適應力聞名。這些特質深深影響了她的價值觀，也形塑了她對工作、人際與學習的態度。",
                        "她的職涯始於歷史悠久的私人銀行 Dreyfus Söhne & Cie AG，在那裡，她習得分析的嚴謹、誠信與專業服務的精神。"
                    ]
                },
                {
                    title: "全球視野與進修",
                    paragraphs: [
                        "完成學徒後，羅碧嘉前往南非參與為期半年的志工計畫，與來自 16 個國家的隊友合作。這段經驗深化了她對多元文化的理解，也強化了她在瑞士建立一份有價值且具穩定度的職涯的決心，以創造機會給更多人，包括身處發展中地區的社群。",
                        "其後，她完成了工業工程學士學位，是第一批在標準學制內完成國際交換學期的學生之一。在香港大學就讀期間，她在系統工程及工程管理學系研習，專注於工業工程與物流管理。此經驗讓她得以更深地聯繫自身的亞洲背景，並對當地的學習文化與紀律留下深刻印象。",
                        "在校期間，她參與了 POLE Project，這是一個瑞士與墨西哥大陸瓜達拉哈拉之間的國際跨領域合作計畫。團隊提出了早期的車內人機互動原型，預示著後來的抬頭顯示系統。這些歷練拓展了她對技術的好奇心，也磨練了她將人性洞察結合創新的能力。",
                        "她其後於伯恩專業大學完成企業管理碩士，主修商業發展，並於 2020 至 2022 年之間取得瑞士聯邦金融與管理會計專家資格於 Controller Akademie Zürich。"
                    ]
                },
                {
                    title: "職涯與專業理念",
                    paragraphs: [
                        "在加入 FiCAS AG 擔任首席財務官（CFO）之前，羅碧嘉曾任柯尼茲市政府控管團隊主管、瑞士金融市場監管局（FINMA）財務控制師，以及 iba ag 財務控制師。她與眾多利害關係人合作，因其包容、務實與能將複雜議題化繁為簡而深受信任。她擅長理解不同觀點、辨識需求並建立橋樑，推動建設性的成果。",
                        "自 2024 年 8 月起，她擔任 FiCAS AG 的首席財務官。FiCAS 為獲 FINMA 認可的瑞士資產管理公司，專注於主動管理的加密資產投資產品。她結合公部門與私人企業的經驗，推動流程優化、強化治理並建立長期價值。",
                        "羅碧嘉以清晰的分析思維與創意解題聞名。她專注於設計與完善帶來清晰、穩定與持續效率的流程，結合精準與直覺，讓結構轉化為具體且可持續的進步。"
                    ]
                }
            ]
        },
        recommendations: {
            services: {
                en: [
                    { label: "– Traditional Chinese Medicine at TCM SinoCare, Berne", linkText: "www.tcmsino.care", href: "https://www.tcmsino.care" },
                    { label: "– Cosmetics at softlinecosmetics by Sarolta, Berne", linkText: "www.softlinecosmetics.ch", href: "https://softlinecosmetics.ch/" }
                ],
                de: [
                    { label: "– Traditionelle Chinesische Medizin bei TCM SinoCare, Bern", linkText: "www.tcmsino.care", href: "https://www.tcmsino.care" },
                    { label: "– Kosmetik bei softlinecosmetics by Sarolta, Bern", linkText: "www.softlinecosmetics.ch", href: "https://softlinecosmetics.ch/" }
                ],
                fr: [
                    { label: "– Médecine traditionnelle chinoise chez TCM SinoCare, Berne", linkText: "www.tcmsino.care", href: "https://www.tcmsino.care" },
                    { label: "– Cosmétique chez softlinecosmetics by Sarolta, Berne", linkText: "www.softlinecosmetics.ch", href: "https://softlinecosmetics.ch/" }
                ],
                zh: [
                    { label: "– 傳統中醫 TCM SinoCare，伯恩", linkText: "www.tcmsino.care", href: "https://www.tcmsino.care" },
                    { label: "– 美容服務 softlinecosmetics by Sarolta，伯恩", linkText: "www.softlinecosmetics.ch", href: "https://softlinecosmetics.ch/" }
                ]
            },
            disclaimer: {
                title: {
                    en: "Disclaimer",
                    de: "Disclaimer",
                    fr: "Avertissement",
                    zh: "法律聲明"
                },
                body: {
                    en: "All trademarks, logos, and brand names are the property of their respective owners. References or links to third-party websites are provided for convenience only; we assume no responsibility or liability for their content or use.",
                    de: "Alle Marken, Logos und Firmennamen sind Eigentum ihrer jeweiligen Inhaber. Verweise oder Links auf Webseiten Dritter erfolgen ausschliesslich zur Information; wir übernehmen keine Verantwortung oder Haftung für deren Inhalte oder Nutzung.",
                    fr: "Toutes les marques, logos et noms de sociétés appartiennent à leurs propriétaires respectifs. Les références ou liens vers des sites tiers sont fournies à titre informatif ; nous déclinons toute responsabilité quant à leur contenu ou leur utilisation.",
                    zh: "所有商標、標誌與品牌名稱皆屬其各自擁有者所有。提及或連結至第三方網站僅為方便之用，本網站對其內容與使用不承擔任何責任。"
                }
            }
        }
    };
    
    // Expose globally for navigation script
    window.aboutContent = aboutContent;

    let currentLang = 'en';
    let currentQuoteElement = null;
    let currentQuoteTimeout = null;
    let currentQuoteIndex = null;
    let lastQuoteCategory = null;
    let currentFadeTimeout = null;

    const quoteContainer = document.getElementById('quoteContainerFuture');
    const nameLink = document.getElementById('nameLinkFuture');
    const nameLocation = document.getElementById('nameLocation');
    const navLinks = document.querySelectorAll('.nav-text');
    const disclaimerMini = document.getElementById('disclaimerMini');
    
    // Language selector elements
    const languageSelector = document.getElementById('languageSelectorFuture');
    const languageTrigger = document.getElementById('languageTriggerFuture');
    const languageText = document.getElementById('languageTextFuture');
    const languageDropdown = document.getElementById('languageDropdownFuture');
    
    // Language code mapping
    // For EN/DE/FR: show "語言" (Traditional Chinese)
    // For ZH: show "LANGUAGE"
    const languageCodes = {
        en: '語言',
        de: '語言',
        fr: '語言',
        zh: 'LANGUAGE'
    };
    
    // Close dropdown when clicking outside
    const closeLanguageDropdown = (event) => {
        if (languageSelector && event && event.target && !languageSelector.contains(event.target)) {
            languageSelector.classList.remove('open');
            if (languageTrigger) {
                languageTrigger.setAttribute('aria-expanded', 'false');
            }
            if (languageDropdown) {
                languageDropdown.setAttribute('aria-hidden', 'true');
            }
            document.removeEventListener('click', closeLanguageDropdown);
        }
    };

    const QUOTE_TOTAL_DURATION = 5000; // total time per quote (ms)
    const QUOTE_FADE_DURATION = 600;   // fade in/out duration (ms)
    const QUOTE_GAP_DURATION = 1000;   // extra gap between quotes (ms)

    // Update language display
    function updateLanguageDisplay(lang) {
        currentLang = lang;
        window.currentLang = currentLang;
        
        // Update language button text
        if (languageText && languageCodes[lang]) {
            languageText.textContent = languageCodes[lang];
        }
        
        // Update page title, H1 and H2 (get current section from URL)
        if (window.updatePageTitle) {
            const path = window.location.pathname;
            const sectionMatch = path.match(/^\/(en|de|fr|zh)\/(aboutme|connect|quotes|recommendations|home)/);
            const currentSection = sectionMatch ? sectionMatch[2] : 'home';
            window.updatePageTitle(lang, currentSection);
        }
        if (window.updateH1) {
            window.updateH1(lang);
        }
        if (window.updateH2) {
            const path = window.location.pathname;
            const sectionMatch = path.match(/^\/(en|de|fr|zh)\/(aboutme|connect|quotes|recommendations|home)/);
            const currentSection = sectionMatch ? sectionMatch[2] : 'home';
            window.updateH2(lang, currentSection);
        }
        if (window.updateHomeContent) {
            window.updateHomeContent(lang);
        }
        
        const translation = nameTranslations[lang];
        const nameMain = nameLink ? nameLink.querySelector('.name-main-corner') : null;
        const nameLoc = nameLink ? nameLink.querySelector('.name-location-corner') : null;
        
        if (nameMain) nameMain.textContent = translation.name;
        if (nameLoc) nameLoc.textContent = translation.location;
        if (nameLocation) nameLocation.textContent = translation.location;
        
        if (nameLink) {
            nameLink.setAttribute('lang', lang);
        }
        document.documentElement.setAttribute('lang', lang);
        
        // Update active state for language options
        if (languageDropdown) {
            const langOptions = languageDropdown.querySelectorAll('.control-option');
            langOptions.forEach(opt => {
                opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
            });
        }
        
        // Update navigation labels
        navLinks.forEach(nav => {
            const langKey = nav.getAttribute('data-lang-key');
            if (langKey && navigationLabels[langKey]) {
                nav.textContent = navigationLabels[langKey][lang];
            }
        });

        if (window.updateAboutContent) {
            window.updateAboutContent(lang);
        }

        const disclaimerContent = aboutContent.recommendations && aboutContent.recommendations.disclaimer;
        if (disclaimerMini && disclaimerContent) {
            const title = disclaimerContent.title ? (disclaimerContent.title[lang] || disclaimerContent.title.en || 'Disclaimer') : 'Disclaimer';
            disclaimerMini.textContent = title;
            disclaimerMini.setAttribute('aria-label', title);
        }
    }

    // Setup language dropdown - simple and robust
    function setupLanguageDropdown() {
        if (!languageSelector || !languageTrigger || !languageDropdown) {
            console.warn('Language dropdown elements not found:', {
                selector: !!languageSelector,
                trigger: !!languageTrigger,
                dropdown: !!languageDropdown
            });
            return;
        }
        
        // Toggle dropdown on button click
        languageTrigger.addEventListener('click', (event) => {
            // Create local ripple effect
            if (window.createRipple) {
                window.createRipple(event, languageTrigger);
            }
            // Create global ripple effect
            if (window.createGlobalRipple) {
                window.createGlobalRipple(event);
            }
            
            event.preventDefault();
            event.stopPropagation();
            
            const isOpen = languageSelector.classList.contains('open');
            
            if (isOpen) {
                // Close dropdown
                languageSelector.classList.remove('open');
                languageTrigger.setAttribute('aria-expanded', 'false');
                languageDropdown.setAttribute('aria-hidden', 'true');
                document.removeEventListener('click', closeLanguageDropdown);
            } else {
                // Open dropdown
                languageSelector.classList.add('open');
                languageTrigger.setAttribute('aria-expanded', 'true');
                languageDropdown.setAttribute('aria-hidden', 'false');
                
                // Force reflow to ensure CSS transition works
                void languageDropdown.offsetHeight;
                
                // Close on outside click
                setTimeout(() => {
                    document.addEventListener('click', closeLanguageDropdown);
                }, 10);
            }
        });
        
        // Prevent dropdown from closing when clicking inside
        languageDropdown.addEventListener('click', (event) => {
            event.stopPropagation();
        });
        
        // Handle language option clicks
        const langOptions = languageDropdown.querySelectorAll('.control-option');
        langOptions.forEach(option => {
            option.addEventListener('click', (event) => {
                // Create local ripple effect
                if (window.createRipple) {
                    window.createRipple(event, option);
                }
                // Create global ripple effect
                if (window.createGlobalRipple) {
                    window.createGlobalRipple(event);
                }
                
                event.preventDefault();
                event.stopPropagation();
                
                const lang = option.getAttribute('data-lang');
                if (lang && lang !== currentLang) {
                    // Update language
                    updateLanguageDisplay(lang);
                    
                    // Update URL with new language
                    const path = window.location.pathname;
                    const sectionMatch = path.match(/^\/(en|de|fr|zh)\/(aboutme|connect|quotes|recommendations|home)/);
                    if (sectionMatch) {
                        const section = sectionMatch[2];
                        const newUrl = `/${lang}/${section}`;
                        window.history.pushState({ lang: lang, section: section }, '', newUrl);
                    } else {
                        const newUrl = `/${lang}/home`;
                        window.history.pushState({ lang: lang, section: 'home' }, '', newUrl);
                    }
                    
                    // Update navigation links
                    if (window.updateNavLinks) {
                        window.updateNavLinks();
                    }
                    
                    // Close dropdown
                    languageSelector.classList.remove('open');
                    languageTrigger.setAttribute('aria-expanded', 'false');
                    languageDropdown.setAttribute('aria-hidden', 'true');
                    document.removeEventListener('click', closeLanguageDropdown);
                    
                    // Update quote in new language
                    if (currentQuoteIndex !== null) {
                        showQuoteByIndex(currentQuoteIndex);
                    } else {
                        showNextQuote();
                    }
                }
            });
        });
    }
    
    // Initialize language dropdown when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(setupLanguageDropdown, 50);
        });
    } else {
        setTimeout(setupLanguageDropdown, 50);
    }

    // Initialize
    updateLanguageDisplay('en');

    // Get random centered position
    function getRandomPosition() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const centerAreaWidth = viewportWidth * 0.15;
        const centerAreaHeight = viewportHeight * 0.15;
        const centerX = viewportWidth / 2;
        const centerY = viewportHeight / 2;
        const x = centerX + (Math.random() - 0.5) * centerAreaWidth;
        const y = centerY + (Math.random() - 0.5) * centerAreaHeight;
        return { x: x, y: y };
    }

    function showNextQuote() {
        const langQuotes = quotes[currentLang];
        if (!langQuotes || !langQuotes.length) return;

        const maxAttempts = langQuotes.length * 2;
        let attempt = 0;
        let candidateIndex;
        do {
            candidateIndex = Math.floor(Math.random() * langQuotes.length);
            attempt += 1;
        } while (langQuotes[candidateIndex].category === lastQuoteCategory && attempt < maxAttempts);

        showQuoteByIndex(candidateIndex);
    }

    function showQuoteByIndex(index) {
        if (currentQuoteTimeout) {
            clearTimeout(currentQuoteTimeout);
            currentQuoteTimeout = null;
        }

        if (currentFadeTimeout) {
            clearTimeout(currentFadeTimeout);
            currentFadeTimeout = null;
        }

        const langQuotes = quotes[currentLang];
        const safeIndex = (index >= 0 && index < langQuotes.length) ? index : 0;

        const renderQuote = () => {
            if (quoteContainer && quoteContainer.children.length) {
                Array.from(quoteContainer.children).forEach(child => {
                    if (child !== currentQuoteElement) {
                        child.remove();
                    }
                });
            }

            const quoteData = langQuotes[safeIndex];
            currentQuoteIndex = safeIndex;
            lastQuoteCategory = quoteData.category;

            let formattedQuote = quoteData.text;
            const dashPattern = /[–—\-]|——/;
            const dashMatch = quoteData.text.match(dashPattern);
            
            if (dashMatch) {
                const dashIndex = quoteData.text.indexOf(dashMatch[0]);
                const quotePart = quoteData.text.substring(0, dashIndex).trim();
                const dashAndAuthor = quoteData.text.substring(dashIndex).trim();
                formattedQuote = `${quotePart}<br><span class="quote-author-future">${dashAndAuthor}</span>`;
            }

            const quoteEl = document.createElement('div');
            quoteEl.className = 'quote-future';
            quoteEl.setAttribute('lang', currentLang);
            quoteEl.innerHTML = formattedQuote;
            quoteEl.dataset.quoteIndex = safeIndex.toString();
            
            quoteContainer.appendChild(quoteEl);
            currentQuoteElement = quoteEl;

            requestAnimationFrame(() => {
                quoteEl.classList.add('visible');
            });

            const fadeOutDelay = Math.max(0, QUOTE_TOTAL_DURATION - QUOTE_FADE_DURATION);

            currentQuoteTimeout = setTimeout(() => {
                quoteEl.classList.remove('visible');
                quoteEl.classList.add('fadeOut');

                currentFadeTimeout = setTimeout(() => {
                    if (quoteEl.parentNode) {
                        quoteEl.parentNode.removeChild(quoteEl);
                    }
                    if (currentQuoteElement === quoteEl) {
                        currentQuoteElement = null;
                        currentQuoteIndex = null;
                        currentFadeTimeout = null;
                    }
                    setTimeout(showNextQuote, QUOTE_GAP_DURATION);
                }, QUOTE_FADE_DURATION);
            }, fadeOutDelay);
        };

        if (currentQuoteElement) {
            const previousElement = currentQuoteElement;
            previousElement.classList.remove('visible');
            previousElement.classList.add('fadeOut');

            setTimeout(() => {
                if (previousElement.parentNode) {
                    previousElement.parentNode.removeChild(previousElement);
                }
                if (currentQuoteElement === previousElement) {
                    currentQuoteElement = null;
                    currentQuoteIndex = null;
                }
                setTimeout(renderQuote, QUOTE_GAP_DURATION);
            }, QUOTE_FADE_DURATION);
        } else {
            renderQuote();
        }
    }

    // Start showing quotes - faster initial appearance
    setTimeout(() => {
        if (!currentQuoteElement) {
            showNextQuote();
        }
    }, 300 + QUOTE_GAP_DURATION);

    window.showNextQuote = showNextQuote;
})();

