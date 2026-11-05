/* ==========================================================================
   BANQUE DE QUESTIONS OFFICIELLE — GÉNIES EN HERBE (ACADÉMIE & PLATEAU LIVE)
   Format des questions classiques : [Question, [Réponses acceptées], "Anecdote / Explication"]
   ========================================================================== */

window.GEH_VERSION = "2.5.0";
window.GEH_UPDATED = "2026-11-05";

window.DEFAULT_BANK = {
  sport: [
    ["Combien de joueurs compte une équipe de football sur le terrain au coup d'envoi ?", ["11", "onze"], "Une équipe aligne 11 titulaires (dont le gardien), et un match ne peut pas continuer si une équipe tombe à moins de 7 joueurs."],
    ["Quel pays a remporté la CAN 2023 (jouée en 2024), disputée à domicile ?", ["Côte d'Ivoire", "cote divoire"], "Les Éléphants de Côte d'Ivoire ont décroché leur 3e étoile continentale en battant le Nigeria 2-1 en finale au stade Alassane Ouattara d'Ébimpé."],
    ["Dans quel sport frappe-t-on un volant avec une raquette ?", ["badminton"], "Le volant de badminton de compétition est traditionnellement composé de 16 plumes d'oie fixées sur une base en liège et peut dépasser 400 km/h au smash !"],
    ["Quel sprinteur jamaïcain détient le record du monde du 100 m en 9,58 s ?", ["Usain Bolt", "Bolt"], "Surnommé « La Foudre » (Lightning Bolt), il a établi ce record historique à Berlin le 16 août 2009."],
    ["Quelle ville a accueilli les Jeux olympiques d'été 2024 ?", ["Paris"], "Paris a accueilli les JO d'été pour la 3e fois de son histoire (après 1900 et 1924), exactement cent ans après les précédents."],
    ["Quel est le surnom de l'équipe nationale de football de Côte d'Ivoire ?", ["Éléphants", "les elephants", "elephant"], "L'éléphant est l'emblème national de la Côte d'Ivoire et figure également sur ses armoiries."],
    ["Au tennis, comment appelle-t-on le score de 40 partout ?", ["égalité", "deuce"], "À 40-40 (égalité ou « deuce »), un joueur doit marquer deux points consécutifs (avantage puis jeu) pour remporter le jeu."],
    ["Combien de points vaut un panier marqué derrière l'arc de cercle au basket-ball ?", ["3", "trois"], "La ligne à 3 points est située à 6,75 m du panier selon les règles FIBA et jusqu'à 7,24 m en NBA."],
    ["Quel pays africain a atteint les demi-finales de la Coupe du monde de football 2022 au Qatar ?", ["Maroc"], "Les Lions de l'Atlas du Maroc sont devenus la toute première équipe africaine de l'histoire à atteindre le dernier carré d'un Mondial."],
    ["Quel footballeur libérien, Ballon d'or 1995, est devenu président de la République de son pays ?", ["George Weah", "Weah"], "George Weah reste à ce jour le seul joueur africain à avoir remporté le Ballon d'or France Football (en 1995 avec l'AC Milan)."],
    ["Quelle est la distance exacte (en kilomètres, à l'unité près) d'un marathon ?", ["42", "42,195", "42 km"], "La distance officielle est de 42,195 km, fixée lors des Jeux olympiques de Londres en 1908 entre le château de Windsor et le stade olympique."],
    ["Quel arts martial d'origine coréenne a permis à Cheick Cissé d'offrir à la Côte d'Ivoire son premier titre olympique en 2016 ?", ["taekwondo"], "Cheick Sallah Cissé a remporté l'or olympique à Rio en 2016 à la toute dernière seconde de son combat (-80 kg)."],
    ["Comment s'appelle l'équipe nationale de football du Sénégal ?", ["Lions de la Teranga", "Lions", "Teranga"], "« Teranga » signifie hospitalité en wolof. Le Sénégal a remporté sa première Coupe d'Afrique des Nations en 2022."],
    ["Combien d'anneaux entrelacés composent le drapeau olympique ?", ["5", "cinq"], "Les 5 anneaux (bleu, jaune, noir, vert, rouge sur fond blanc) représentent l'union des cinq continents habités."],
    ["Dans quel sport utilise-t-on un fleuret, une épée ou un sabre ?", ["escrime"], "Le français est la langue officielle de l'arbitrage international en escrime (« En garde ! Prêts ? Allez ! »)."],
    ["Quel pays détient le record du nombre de Coupes d'Afrique des Nations (CAN) remportées ?", ["Égypte", "egypte"], "Les Pharaons d'Égypte ont remporté la CAN à 7 reprises, dont un triplé historique en 2006, 2008 et 2010."]
  ],

  cinema: [
    ["Quel grand festival panafricain de cinéma et de télévision se tient tous les deux ans à Ouagadougou ?", ["FESPACO"], "Créé en 1969 au Burkina Faso, le FESPACO décerne sa récompense suprême : l'Étalon d'or de Yennenga."],
    ["Quel trophée récompense le meilleur film au Festival de Cannes ?", ["Palme d'or", "palme dor", "palme"], "Créée en 1955, la Palme d'or rend hommage aux palmiers de la Croisette et aux armoiries de la ville de Cannes."],
    ["Comment surnomme-t-on l'industrie du cinéma nigérian ?", ["Nollywood"], "Contraction de « Nigeria » et « Hollywood », Nollywood est la deuxième industrie cinématographique au monde en nombre de films produits (après Bollywood)."],
    ["Quel cinéaste et écrivain sénégalais, père du cinéma africain, a réalisé « La Noire de… » et « Moolaadé » ?", ["Ousmane Sembène", "Sembene"], "Après une carrière de docker puis d'écrivain (« Les Bouts de bois de Dieu »), Ousmane Sembène s'est tourné vers le cinéma pour toucher le plus grand nombre."],
    ["Quels frères français ont organisé la première projection publique payante du cinématographe en décembre 1895 ?", ["Lumière", "freres lumiere", "Auguste et Louis Lumière"], "Leur première séance eut lieu au Salon indien du Grand Café à Paris le 28 décembre 1895."],
    ["Quelle réalisatrice franco-sénégalaise a remporté le Grand Prix à Cannes en 2019 avec le film « Atlantique » ?", ["Mati Diop", "Diop"], "Mati Diop est aussi la nièce du célèbre cinéaste sénégalais Djibril Diop Mambéty (« Touki Bouki »)."],
    ["Comment appelle-t-on la personne qui dirige le jeu des acteurs et la mise en scène d'un film ?", ["réalisateur", "realisatrice", "metteur en scene"], "Aux États-unis, on l'appelle « Director ». Il coordonne l'ensemble artistique et technique du film."],
    ["Dans quelle ville américaine se trouve le célèbre quartier d'Hollywood ?", ["Los Angeles"], "Les studios s'y sont installés au début du XXe siècle grâce au soleil quasi permanent de la Californie."],
    ["Quel réalisateur mauritanien a réalisé le film multiprimé « Timbuktu » en 2014 ?", ["Abderrahmane Sissako", "Sissako"], "« Timbuktu » a remporté 7 César en 2015, dont ceux du meilleur film et du meilleur réalisateur, et fut nommé aux Oscars."],
    ["Quel roi du Wakanda est incarné par le regretté Chadwick Boseman dans l'univers Marvel ?", ["T'Challa", "Black Panther", "Tchalla"], "Sorti en 2018, « Black Panther » a marqué l'histoire du cinéma en remportant 3 Oscars avec une esthétique afrofuturiste."],
    ["Quel est le nom de la statuette remise chaque année par l'Académie américaine du cinéma ?", ["Oscar", "les oscars"], "Son nom officiel est « Academy Award of Merit ». La statuette représente un chevalier debout sur une bobine de film."],
    ["Quel film d'animation ivoirien sorti en 2013 retrace la vie d'une jeune fille à Yopougon dans les années 1970 ?", ["Aya de Yopougon"], "Adapté de la célèbre bande dessinée de Marguerite Abouet et Clément Oubrerie, il a été nommé au César du meilleur film d'animation."],
    ["Comment appelle-t-on le texte écrit détaillant les dialogues et les scènes d'un film avant son tournage ?", ["scénario", "scenario"], "L'auteur du scénario est le scénariste ; le document technique plan par plan s'appelle le découpage technique ou storyboard."],
    ["Quel acteur et maître des arts martiaux est le héros des films « La Fureur du dragon » et « Opération Dragon » ?", ["Bruce Lee"], "Né à San Francisco et élevé à Hong Kong, Bruce Lee a popularisé les arts martiaux chinois dans le cinéma mondial."]
  ],

  mots: [
    ["Capitale du Burkina Faso", "OUAGADOUGOU", "Surnommée « Ouaga », elle est aussi la capitale du cinéma africain grâce au FESPACO."],
    ["Grand fleuve qui traverse notamment Bamako et Niamey", "NIGER", "Long d'environ 4 180 km, le fleuve Niger est le troisième plus long fleuve d'Afrique après le Nil et le Congo."],
    ["Instrument qui sert à mesurer la température", "THERMOMETRE", "Du grec « thermos » (chaud) et « metron » (mesure), perfectionné par Celsius et Fahrenheit au XVIIIe siècle."],
    ["Planète la plus proche du Soleil", "MERCURE", "Bien qu'elle soit la plus proche du Soleil, Vénus est encore plus chaude à cause de son puissant effet de serre."],
    ["Petit de la vache et du taureau", "VEAU", "La mère est la vache, le père le taureau, et la jeune femelle qui n'a pas encore vêlé s'appelle la génisse."],
    ["Joueur qui défend les buts au football ou au handball", "GARDIEN", "C'est le seul joueur autorisé à toucher le ballon avec les mains dans sa propre surface de réparation."],
    ["Arbre géant emblématique des savanes africaines, parfois appelé « arbre à palabres »", "BAOBAB", "Le baobab peut vivre plus de 1 000 ans et stocker des dizaines de milliers de litres d'eau dans son tronc spongieux."],
    ["Adjectif de sens contraire à « rapide »", "LENT", "Un mot de sens contraire s'appelle un antonyme."],
    ["Continent situé entièrement autour du pôle Sud", "ANTARCTIQUE", "C'est le continent le plus froid, le plus sec et le plus venteux de la Terre, recouvert à 98 % de glace."],
    ["Appareil optique permettant d'observer les cellules et les microbes", "MICROSCOPE", "Inventé à la fin du XVIe siècle, il a révolutionné la biologie et la médecine."],
    ["Triangle possédant trois côtés de même longueur", "EQUILATERAL", "Dans un triangle équilatéral, les trois angles mesurent chacun exactement 60 degrés."],
    ["Science qui étudie les événements du passé humain", "HISTOIRE", "Hérodote et Amadou Hampâté Bâ nous rappellent l'importance de la mémoire écrite et orale."],
    ["Ensemble des os qui soutiennent le corps d'un vertébré", "SQUELETTE", "À l'âge adulte, le squelette humain compte 206 os constants."],
    ["Étoile autour de laquelle gravite la planète Terre", "SOLEIL", "Sa lumière met environ 8 minutes et 20 secondes pour parcourir les 150 millions de kilomètres jusqu'à la Terre."]
  ],

  musique: [
    ["Quel instrument traditionnel à 21 cordes accompagne les griots mandingues ?", ["kora"], "Fabriquée avec une demi-calebasse tendue de peau et un long manche en bois, la kora a été immortalisée par Toumani Diabaté et Ballaké Sissoko."],
    ["Quel genre musical et danse né dans la diaspora ivoirienne au début des années 2000 DJ Arafat a-t-il porté au sommet ?", ["coupé-décalé", "coupe decale"], "Créé par Douk Saga et la Jet Set, le coupé-décalé a eu en DJ Arafat (« le Daïshikan ») son ambassadeur le plus prolifique."],
    ["Combien de lignes horizontales compte une portée musicale classique ?", ["5", "cinq"], "Une portée comporte 5 lignes et 4 interlignes, qui se comptent toujours du bas vers le haut."],
    ["Quel compositeur autrichien prodige a écrit l'opéra « La Flûte enchantée » ?", ["Mozart", "Wolfgang Amadeus Mozart"], "Né à Salzbourg en 1756, Mozart a composé plus de 600 œuvres avant sa mort prématurée à 35 ans."],
    ["Quelle chanteuse béninoise engagée a remporté cinq Grammy Awards ?", ["Angélique Kidjo", "Kidjo"], "Née à Ouidah au Bénin, Angélique Kidjo mêle rythmes traditionnels ouest-africains, jazz, funk et musique pop mondiale."],
    ["Quel groupe ivoirien a connu un succès planétaire avec la chanson « Premier Gaou » ?", ["Magic System"], "Formé à Anoumabo (Abidjan) par A'Salfo, Goudé, Tino et Manadja, Magic System a popularisé le mouvement Zouglou dans le monde entier."],
    ["Quel instrument à percussion d'Afrique de l'Ouest est constitué de lames de bois posées sur des calebasses résonatrices ?", ["balafon"], "Le Sosso Bala, conservé en Guinée et lié à l'épopée mandingue du XIIIe siècle, est inscrit au patrimoine immatériel de l'UNESCO."],
    ["Quel chanteur jamaïcain est la figure légendaire de la musique reggae avec « No Woman, No Cry » ?", ["Bob Marley", "Marley"], "Robert Nesta Marley (1945-1981) a fait rayonner le reggae et la culture rastafari sur tous les continents."],
    ["Quel compositeur allemand est devenu sourd tout en composant sa célèbre 9e Symphonie (« Hymne à la joie ») ?", ["Beethoven", "Ludwig van Beethoven"], "L'Hymne à la joie, tiré du final de sa 9e Symphonie (1824), est aujourd'hui l'hymne officiel de l'Union européenne."],
    ["Quel musicien nigérian, virtuose du saxophone, est le créateur de l'Afrobeat dans les années 1970 ?", ["Fela Kuti", "Fela", "Fela Anikulapo Kuti"], "Surnommé le « Black President », Fela Kuti a fusionné rythmes yoruba, highlife, jazz et funk engagé."]
  ],

  qui: [
    {
      lettre: "B",
      qs: [
        ["Je suis la capitale de la Belgique et le siège principal de l'Union européenne.", ["Bruxelles"], "Bruxelles abrite la Commission européenne, le Conseil de l'UE et l'OTAN."],
        ["Je suis le pays d'Afrique de l'Ouest dont la capitale officielle est Porto-Novo.", ["Bénin", "benin"], "Si Porto-Novo est la capitale constitutionnelle du Bénin, Cotonou en est le cœur économique."],
        ["Je suis la céréale dorée dont le grain moulu sert principalement à fabriquer la farine du pain.", ["blé", "ble"], "Avec le riz et le maïs, le blé est l'une des trois céréales les plus cultivées au monde."],
        ["Je suis la plus petite unité d'information en informatique, ne pouvant valoir que 0 ou 1.", ["bit"], "Contraction de « binary digit » ; un groupe de 8 bits forme un octet (ou « byte » en anglais)."]
      ]
    },
    {
      lettre: "M",
      qs: [
        ["Je suis le royaume d'Afrique du Nord dont la capitale est Rabat.", ["Maroc"], "Rabat est la capitale politique du Maroc, tandis que Casablanca en est la plus grande métropole économique."],
        ["Je suis la quatrième planète du système solaire, surnommée la « planète rouge ».", ["Mars"], "Sa couleur rouge provient de l'abondance d'oxyde de fer (rouille) à sa surface."],
        ["Je suis l'unité de base de longueur dans le Système international d'unités.", ["mètre", "metre"], "Défini à l'origine en 1791 comme la dix-millionième partie du quart du méridien terrestre."],
        ["Je suis le fruit tropical charnu à gros noyau plat, très apprécié en Afrique de l'Ouest pendant la saison sèche.", ["mangue"], "La variété « Kent » ou « Amélie » est largement cultivée et exportée depuis le nord de la Côte d'Ivoire, du Mali et du Burkina Faso."]
      ]
    },
    {
      lettre: "C",
      qs: [
        ["Je suis la capitale de la République de Guinée, située au bord de l'océan Atlantique.", ["Conakry"], "Conakry s'étend sur la presqu'île de Kaloum et l'île de Tombo."],
        ["Je suis le muscle creux qui pompe inlassablement le sang dans tout l'organisme.", ["cœur", "coeur"], "Le cœur humain bat environ 100 000 fois par jour et pompe près de 7 000 litres de sang quotidiennement."],
        ["Je suis la fève précieuse dont la Côte d'Ivoire et le Ghana sont les deux premiers producteurs mondiaux.", ["cacao"], "La Côte d'Ivoire produit à elle seule plus de 40 % de la récolte mondiale de fèves de cacao."],
        ["Je suis le mammifère à bosses surnommé le « vaisseau du désert ».", ["chameau", "camelide"], "Le chameau de Bactriane a 2 bosses, tandis que le dromadaire (qui fait partie des camélidés) n'en a qu'une."]
      ]
    },
    {
      lettre: "S",
      qs: [
        ["Je suis le pays d'Afrique de l'Ouest dont le point le plus occidental est la presqu'île du Cap-Vert à Dakar.", ["Sénégal", "senegal"], "Le Sénégal tire son nom du fleuve Sénégal qui marque sa frontière nord avec la Mauritanie."],
        ["Je suis la planète célèbre pour ses spectaculaires anneaux de glace et de poussière.", ["Saturne"], "Sixième planète du système solaire, Saturne est une géante gazeuse moins dense que l'eau !"],
        ["Je suis le pigment ou condiment blanc composé principalement de chlorure de sodium (NaCl).", ["sel"], "Au Moyen Âge, dans les empires du Ghana et du Mali, les barres de sel gemme du Sahara s'échangeaient parfois contre leur poids en or."],
        ["Je suis le grand félin d'Afrique à la robe fauve dont le mâle porte une crinière, mais en langue kiswahili !", ["Simba"], "En swahili, « Simba » veut littéralement dire « lion » — ce qui a inspiré le nom du héros du Roi Lion."]
      ]
    },
    {
      lettre: "A",
      qs: [
        ["Je suis la capitale économique de la Côte d'Ivoire, surnommée la « Perle des lagunes ».", ["Abidjan"], "Bordée par la lagune Ébrié, Abidjan compte dix communes dont le Plateau, Cocody, Yopougon et Marcory."],
        ["Je suis le gaz qui constitue environ 78 % de l'air que nous respirons sur Terre.", ["azote", "diazote"], "Contrairement à une idée reçue, l'air contient bien plus d'azote (78 %) que d'oxygène (21 %)."],
        ["Je suis le plus long fleuve d'Amérique du Sud et le premier au monde par son débit.", ["Amazone"], "Le bassin de l'Amazone abrite la plus vaste forêt tropicale humide de la planète."],
        ["Je suis l'instrument d'optique ou de navigation qui servait autrefois aux marins à mesurer la hauteur des astres.", ["astrolabe"], "Perfectionné par les savants du monde arabo-musulman au Moyen Âge, il a permis les grandes navigations."]
      ]
    },
    {
      lettre: "P",
      qs: [
        ["Je suis l'organe spongieux double qui permet les échanges gazeux lors de la respiration.", ["poumon", "poumons"], "Dépliés, les millions d'alvéoles de nos poumons couvriraient la surface d'un terrain de tennis !"],
        ["Je suis le grand mathématicien grec à qui l'on doit le théorème reliant les côtés d'un triangle rectangle.", ["Pythagore"], "Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés (a² + b² = c²)."],
        ["Je suis le phénomène biologique par lequel les plantes vertes utilisent la lumière solaire pour fabriquer leur matière organique.", ["photosynthèse", "photosynthese"], "Grâce à la chlorophylle, la plante absorbe du CO₂ et de l'eau et rejette du dioxygène (O₂)."],
        ["Je suis les célèbres monuments funéraires triangulaires bâtis pour les pharaons à Gizeh.", ["pyramides", "pyramide"], "La grande pyramide de Khéops est la seule des Sept Merveilles du monde antique encore debout aujourd'hui."]
      ]
    }
  ],

  cantonade: [
    {
      theme: "Le corps humain",
      qs: [
        ["Combien d'os compte le squelette d'un être humain adulte ?", ["206"], "Un bébé naît avec environ 270 à 300 os, dont plusieurs fusionnent pendant la croissance pour arriver à 206."],
        ["Quel organe en forme de haricot filtre le sang pour produire l'urine ?", ["rein", "reins"], "Nos deux reins filtrent environ 180 litres de liquide par jour pour éliminer les déchets métaboliques."],
        ["Quel est l'organe le plus étendu et le plus lourd du corps humain ?", ["peau"], "La peau d'un adulte couvre près de 2 m² et joue un rôle essentiel de barrière et de régulation thermique."],
        ["Quel gaz indispensable à la vie les globules rouges transportent-ils des poumons vers les organes ?", ["oxygène", "dioxygene", "o2"], "C'est l'hémoglobine, une protéine riche en fer (qui donne au sang sa couleur rouge), qui fixe l'oxygène."]
      ]
    },
    {
      theme: "Capitales africaines",
      qs: [
        ["Quelle est la capitale fédérale du Nigeria ?", ["Abuja"], "Abuja a remplacé Lagos comme capitale politique du Nigeria le 12 décembre 1991 pour sa position centrale."],
        ["Quelle est la capitale du Kenya ?", ["Nairobi"], "Nairobi est l'une des rares métropoles au monde à posséder un parc national sauvage à ses portes."],
        ["Quelle est la capitale du Sénégal ?", ["Dakar"], "Située à l'extrémité de la presqu'île du Cap-Vert, Dakar est le point le plus à l'ouest du continent africain."],
        ["Quelle est la capitale du Ghana ?", ["Accra"], "Bordée par le golfe de Guinée, Accra est devenue la capitale de la Côte-de-l'Or en 1877 avant l'indépendance du Ghana en 1957."]
      ]
    },
    {
      theme: "L'exploration de l'espace",
      qs: [
        ["Quel astronaute américain fut le premier homme à marcher sur la Lune le 21 juillet 1969 ?", ["Neil Armstrong", "Armstrong"], "Commandant de la mission Apollo 11, il a prononcé la phrase célèbre : « C'est un petit pas pour l'homme, mais un bond de géant pour l'humanité. »"],
        ["Quelle est la plus grosse planète du système solaire ?", ["Jupiter"], "Jupiter est si immense qu'elle pourrait contenir plus de 1 300 planètes de la taille de la Terre !"],
        ["Quel est le seul satellite naturel permanent de la Terre ?", ["Lune"], "La Lune se trouve à une distance moyenne d'environ 384 400 km de la Terre."],
        ["Quel cosmonaute soviétique fut le tout premier être humain envoyé dans l'espace en avril 1961 ?", ["Youri Gagarine", "Gagarine"], "À bord de la capsule Vostok 1, le 12 avril 1961, Gagarine a effectué une orbite complète autour de la Terre en 108 minutes."]
      ]
    },
    {
      theme: "Les grands fleuves du monde",
      qs: [
        ["Quel fleuve africain, qui se jette dans la Méditerranée en Égypte, est le plus long d'Afrique ?", ["Nil"], "Issu de la rencontre du Nil Blanc et du Nil Bleu à Khartoum, il parcourt environ 6 650 km."],
        ["Quel fleuve d'Afrique centrale est le deuxième du monde par son débit, juste après l'Amazone ?", ["Congo", "fleuve congo"], "Le fleuve Congo a la particularité de traverser deux fois la ligne de l'Équateur !"],
        ["Quel fleuve traverse la ville de Paris avant de se jeter dans la Manche ?", ["Seine"], "Longue de 777 km, la Seine prend sa source sur le plateau de Langres en Bourgogne."],
        ["Quel grand fleuve de Côte d'Ivoire traverse le pays du nord au sud et porte le nom d'une région ?", ["Bandama", "Comoé", "Sassandra", "Cavally"], "Les quatre grands fleuves ivoiriens sont le Bandama (le plus long, ~1 050 km), la Comoé, le Sassandra et le Cavally."]
      ]
    },
    {
      theme: "La chimie et les éléments",
      qs: [
        ["Quel est le symbole chimique de l'élément Or dans le tableau périodique ?", ["Au"], "Le symbole « Au » vient du mot latin « Aurum », qui signifie « briller comme l'aurore »."],
        ["Quel métal est liquide à température ambiante et était autrefois utilisé dans les thermomètres ?", ["mercure"], "Son symbole chimique est Hg (du grec « hydrargyrum », argent liquide)."],
        ["Quel savant russe a conçu en 1869 la classification périodique des éléments chimiques ?", ["Mendeleïev", "Dmitri Mendeleiev", "Mendeleiev"], "Son génie fut de laisser des cases vides dans son tableau en prédisant l'existence d'éléments pas encore découverts !"],
        ["Quel est le numéro atomique de l'hydrogène, premier élément du tableau périodique ?", ["1", "un"], "L'atome d'hydrogène est le plus simple et le plus abondant de l'Univers : 1 proton et 1 électron."]
      ]
    },
    {
      theme: "Figures historiques d'Afrique",
      qs: [
        ["Quel empereur a fondé l'Empire du Mali au XIIIe siècle après la bataille de Kirina ?", ["Soundjata Keïta", "Soundjata", "Sundiata Keita"], "En 1236, Soundjata Keïta a proclamé la Charte de Kouroukan Fouga, considérée comme l'une des plus anciennes déclarations des droits humains."],
        ["Quel savant, historien et anthropologue sénégalais a démontré l'origine africaine et négro-égyptienne de la civilisation pharaonique ?", ["Cheikh Anta Diop", "Diop"], "L'Université de Dakar porte aujourd'hui son nom : l'UCAD (Université Cheikh-Anta-Diop)."],
        ["Quel dirigeant a conduit le Ghana à l'indépendance en 1957 et fut un ardent défenseur du panafricanisme ?", ["Kwame Nkrumah", "Nkrumah"], "Sa célèbre devise résumait sa vision : « L'Afrique doit s'unir » (Africa Must Unite)."],
        ["Quelle reine-mère Ashanti a mené la résistance contre la colonisation britannique en 1900 pour défendre le Tabouret d'Or ?", ["Yaa Asantewaa"], "Yaa Asantewaa demeure un symbole universel de courage et de leadership féminin en Afrique de l'Ouest."]
      ]
    }
  ],

  casse: [
    {
      rep: ["Nelson Mandela", "Mandela", "Madiba"],
      info: "Nelson Rolihlahla Mandela (1918-2013), surnommé « Madiba » (son nom de clan Xhosa), a mis fin pacifiquement au régime d'apartheid en Afrique du Sud.",
      ind: [
        "Je suis né le 18 juillet 1918 dans le petit village de Mvezo, au Cap-Oriental.",
        "Avocat et militant de l'ANC, j'ai passé 27 années en prison, principalement sur l'île de Robben Island.",
        "J'ai partagé le prix Nobel de la paix en 1993 avec Frederik de Klerk.",
        "Élu en 1994, je suis devenu le premier président noir de l'Afrique du Sud démocratique."
      ]
    },
    {
      rep: ["Sahara", "desert du sahara"],
      info: "Il y a environ 6 000 à 10 000 ans (« Sahara vert »), cette région était couverte de lacs, de savanes et peuplée d'hippopotames et de girafes, comme en témoignent les peintures rupestres du Tassili.",
      ind: [
        "Je couvre une superficie vertigineuse d'environ 9 millions de kilomètres carrés.",
        "Je m'étends d'ouest en est de l'océan Atlantique jusqu'à la mer Rouge sur une dizaine d'États.",
        "Mon nom provient directement d'un mot arabe signifiant « grand désert ».",
        "Je suis le plus vaste désert chaud de la planète Terre."
      ]
    },
    {
      rep: ["Tour Eiffel", "Eiffel"],
      info: "Construite en 2 ans, 2 mois et 5 jours par Gustave Eiffel et ses ingénieurs, elle servit aussi d'antenne géante de radiotélégraphie, ce qui la sauva de la démolition !",
      ind: [
        "À mon inauguration au printemps 1889, j'ai détenu pendant 41 ans le record du monument le plus haut du monde.",
        "Ma structure en fer puddlé pèse plus de 7 300 tonnes et compte 18 038 pièces assemblées par 2,5 millions de rivets.",
        "J'ai été érigée pour célébrer le centenaire de la Révolution française lors de l'Exposition universelle.",
        "Surnommée la « Dame de fer », je domine le Champ-de-Mars à Paris."
      ]
    },
    {
      rep: ["Kilimandjaro", "Mont Kilimandjaro"],
      info: "Son sommet culminant s'appelle le pic Uhuru (« Liberté » en swahili), à 5 895 m d'altitude.",
      ind: [
        "Je suis un massif composé de trois volcans éteints : le Shira, le Mawenzi et le Kibo.",
        "Bien que situé tout près de l'Équateur, mon sommet est couronné de neiges et de glaciers célèbres.",
        "Je me dresse dans le nord-est de la Tanzanie, tout près de la frontière kenyane.",
        "Du haut de mes 5 895 mètres, je suis le « Toit de l'Afrique », le point culminant du continent."
      ]
    },
    {
      rep: ["Félix Houphouët-Boigny", "Houphouët-Boigny", "Houphouet Boigny", "Houphouet"],
      info: "Surnommé « le Sage d'Afrique » ou « le Vieux », il a dirigé la Côte d'Ivoire de 1960 à 1993 et un prix international pour la recherche de la paix de l'UNESCO porte son nom.",
      ind: [
        "Médecin et planteur de formation, j'ai fondé en 1944 le Syndicat agricole africain.",
        "Député à l'Assemblée nationale française, j'ai fait adopter en avril 1946 la loi abolissant le travail forcé dans les colonies.",
        "J'ai fait de mon village natal, Yamoussoukro, la capitale politique de mon pays en 1983.",
        "Je suis le Père de l'indépendance et le premier président de la République de Côte d'Ivoire."
      ]
    },
    {
      rep: ["ADN", "acide désoxyribonucléique", "acide desoxyribonucleique"],
      info: "Si l'on déroulait tout l'ADN contenu dans les cellules d'un seul corps humain, le fil atteindrait plusieurs centaines de fois la distance Terre-Soleil !",
      ind: [
        "Ma structure en double hélice a été élucidée en 1953 grâce aux travaux de Rosalind Franklin, James Watson et Francis Crick.",
        "Mon alphabet chimique repose sur quatre bases azotées désignées par les lettres A, T, C et G.",
        "Je suis logé dans le noyau des cellules sous forme de chromosomes.",
        "Sigle de trois lettres, je suis la molécule support de l'information génétique et de l'hérédité."
      ]
    },
    {
      rep: ["Grande Muraille de Chine", "Muraille de Chine", "Grande Muraille"],
      info: "Classée au patrimoine mondial de l'UNESCO en 1987, l'ensemble de ses ramifications construites sur deux millénaires dépasse les 20 000 kilomètres.",
      ind: [
        "Ma construction a débuté dès le IIIe siècle avant notre ère sous le règne du premier empereur Qin Shi Huang.",
        "J'ai été édifiée et renforcée pendant des siècles, notamment sous la dynastie Ming, pour protéger la frontière nord.",
        "Je serpente sur des milliers de kilomètres à travers les montagnes et les steppes d'Asie.",
        "Je suis le plus long ouvrage architectural militaire de l'histoire humaine, symbole de la Chine."
      ]
    }
  ],

  assoc: [
    {
      theme: "Pays et monnaie officielle",
      info: "Le Franc CFA est utilisé dans 14 pays d'Afrique (UEMOA et CEMAC), tandis que le Nigeria, le Ghana et le Maroc possèdent leur propre devise nationale.",
      paires: [
        ["Côte d'Ivoire", "Franc CFA"],
        ["Nigeria", "Naira"],
        ["Ghana", "Cedi"],
        ["Maroc", "Dirham"]
      ]
    },
    {
      theme: "Écrivain africain et œuvre majeure",
      info: "Ces quatre classiques de la littérature africaine francophone sont étudiés dans les collèges et lycées de tout l'espace francophone.",
      paires: [
        ["Camara Laye", "L'Enfant noir"],
        ["Ahmadou Kourouma", "Les Soleils des indépendances"],
        ["Mariama Bâ", "Une si longue lettre"],
        ["Bernard Dadié", "Climbié"]
      ]
    },
    {
      theme: "Savants et grandes découvertes",
      info: "De l'imprimerie (vers 1450) au vaccin contre la rage (1885), ces inventions ont transformé le monde moderne.",
      paires: [
        ["Graham Bell", "Téléphone"],
        ["Johannes Gutenberg", "Imprimerie à caractères mobiles"],
        ["Thomas Edison", "Ampoule électrique à incandescence"],
        ["Louis Pasteur", "Vaccin contre la rage"]
      ]
    },
    {
      theme: "Pays africain et sa capitale",
      info: "Lomé et Libreville sont situées sur la côte atlantique, tandis que Niamey et N'Djamena sont des capitales sahéliennes traversées par des fleuves (Niger et Chari).",
      paires: [
        ["Togo", "Lomé"],
        ["Niger", "Niamey"],
        ["Gabon", "Libreville"],
        ["Tchad", "N'Djamena"]
      ]
    },
    {
      theme: "Sélection nationale et son surnom",
      info: "Les surnoms des sélections africaines rendent hommage à la faune et aux symboles culturels de chaque nation.",
      paires: [
        ["Cameroun", "Lions Indomptables"],
        ["Algérie", "Fennecs"],
        ["Mali", "Aigles"],
        ["Burkina Faso", "Étalons"]
      ]
    },
    {
      theme: "Figure de style et sa définition",
      info: "Bien maîtriser les figures de style est un atout décisif pour la rubrique « Langage » en Génies en Herbe !",
      paires: [
        ["Comparaison", "Rapprochement avec un outil (« comme », « tel »)"],
        ["Personnification", "Prêter des traits humains à un objet ou animal"],
        ["Oxymore", "Alliance de deux mots de sens contradictoires"],
        ["Litote", "Dire moins pour suggérer beaucoup plus"]
      ]
    },
    {
      theme: "Monument célèbre et pays",
      info: "De la basilique Notre-Dame de la Paix à Yamoussoukro au Taj Mahal d'Agra, ces monuments sont des chefs-d'œuvre d'architecture.",
      paires: [
        ["Basilique Notre-Dame de la Paix", "Côte d'Ivoire"],
        ["Taj Mahal", "Inde"],
        ["Mosquée de Djenné", "Mali"],
        ["Colisée", "Italie"]
      ]
    }
  ],

  relais: [
    ["Combien font 7 × 8 ?", ["56"], "Astuce mnémotechnique : « 5, 6, 7, 8 » → 56 = 7 × 8 !"],
    ["Quelle est la racine carrée de 144 ?", ["12", "douze"], "Car 12 × 12 = 144 (ce qu'on appelle aussi une « grosse », soit 12 douzaines)."],
    ["Combien de côtés possède un hexagone ?", ["6", "six"], "Du grec « hexa » (six) et « gônia » (angle). La France métropolitaine est souvent surnommée l'Hexagone."],
    ["Combien font 15 % de 200 ?", ["30", "trente"], "15 % de 100 vaut 15, donc pour 200 c'est le double : 30."],
    ["Combien de minutes y a-t-il au total dans 3 heures ?", ["180"], "3 × 60 minutes = 180 minutes."],
    ["Combien vaut 2 élevé à la puissance 5 (2⁵) ?", ["32"], "2 × 2 × 2 × 2 × 2 = 32."],
    ["Complète cette suite logique : 3, 6, 12, 24, … ?", ["48"], "Chaque terme est le double du précédent : 24 × 2 = 48."],
    ["Combien de secondes y a-t-il dans un quart d'heure ?", ["900"], "Un quart d'heure = 15 minutes, et 15 × 60 = 900 secondes."],
    ["Quelle est la somme des trois angles d'un triangle (en degrés) ?", ["180", "180 degres"], "En géométrie plane, la somme des angles de n'importe quel triangle vaut toujours 180°."],
    ["Combien font 9 × 9 ?", ["81"], "9 au carré (9²) est égal à 81."],
    ["Quel est le seul nombre premier qui soit pair ?", ["2", "deux"], "Tous les autres nombres pairs sont divisibles par 2, donc seul 2 n'a que deux diviseurs (1 et lui-même)."],
    ["Si une voiture roule à 80 km/h pendant 2 heures et demie, combien de kilomètres parcourt-elle ?", ["200", "200 km"], "80 × 2 = 160 km, plus une demi-heure (40 km) = 200 km."],
    ["Combien d'arêtes possède un cube ?", ["12", "douze"], "Un cube possède 6 faces carrées, 8 sommets et 12 arêtes."],
    ["Combien font 25 % de 80 ?", ["20", "vingt"], "Prendre 25 % revient à diviser par 4 : 80 ÷ 4 = 20."]
  ],

  langage: [
    ["Comment appelle-t-on un mot de sens contraire à un autre ?", ["antonyme"], "Exemple : « chaud » et « froid » sont des antonymes ; des mots de même sens sont des synonymes."],
    ["Quel est le pluriel du nom « cheval » ?", ["chevaux"], "La plupart des noms en « -al » font leur pluriel en « -aux » (sauf bal, carnaval, chacal, festival, récital, régal…)."],
    ["Comment appelle-t-on un mot qui se lit de la même façon de gauche à droite et de droite à gauche, comme « kayak » ou « radar » ?", ["palindrome"], "Du grec « palindromos » (« qui court en sens inverse »). Autres exemples : « été », « rotor », « laval »."],
    ["Quel est le féminin du nom « roi » ?", ["reine"], "Issu du latin « rex » (roi) et « regina » (reine)."],
    ["Quelle figure de style consiste à exagérer fortement une idée pour frapper l'esprit (ex. « mourir de soif ») ?", ["hyperbole"], "L'hyperbole est omniprésente dans le langage courant : « je t'ai attendu mille ans », « être mort de rire »."],
    ["Quel est le participe passé du verbe « naître » ?", ["né"], "Le verbe naître se conjugue avec l'auxiliaire être : « il est né »."],
    ["Comment appelle-t-on les mots qui se prononcent de la même manière mais s'écrivent différemment (ex. « verre », « vert », « vers ») ?", ["homonymes", "homophones"], "Les homophones ont le même son ; s'ils ont aussi la même orthographe (comme « avocat »), ce sont des homographes."],
    ["Quel est le pluriel du nom « bijou » ?", ["bijoux"], "Sept noms en « -ou » prennent un « x » au pluriel : bijou, caillou, chou, genou, hibou, joujou, pou !"],
    ["Dans la phrase « Le lion dévore sa proie », quelle est la fonction grammaticale de « sa proie » ?", ["COD", "complément d'objet direct", "complement dobjet direct"], "Il répond à la question « dévore quoi ? » directement après le verbe d'action, sans préposition."],
    ["Quel préfixe d'origine grecque signifie « écriture » ou « décrire » dans les mots géographie ou calligraphie ?", ["graph", "graphie", "graphe"], "« Gê » (Terre) + « graphein » (écrire/décrire) = la géographie."],
    ["Comment appelle-t-on l'histoire de la vie d'une personne écrite par cette personne elle-même ?", ["autobiographie"], "Du grec « autos » (soi-même), « bios » (vie) et « graphein » (écrire)."]
  ],

  franco: [
    ["Dans quelle capitale africaine a été signée le 20 mars 1970 la convention créant l'ACCT, ancêtre de l'OIF ?", ["Niamey"], "C'est à Niamey (Niger), sous l'impulsion de Senghor, Bourguiba, Diori Hamani et Norodom Sihanouk, qu'est née la Francophonie institutionnelle."],
    ["Quel poète et académicien, premier président du Sénégal, fut l'un des pères fondateurs de la Francophonie ?", ["Léopold Sédar Senghor", "Senghor"], "Né à Joal en 1906, Senghor fut aussi le premier Africain élu à l'Académie française en 1983."],
    ["Quelle date du mois de mars célèbre chaque année la Journée internationale de la Francophonie ?", ["20 mars", "20"], "Elle commémore le 20 mars 1970, date de la conférence fondatrice de Niamey."],
    ["Quelle province du Canada a le français pour seule langue officielle ?", ["Québec", "quebec"], "Tandis que le Canada fédéral et le Nouveau-Brunswick sont bilingues (anglais-français), le Québec a le français pour seule langue officielle."],
    ["Quel poète et homme politique martiniquais a inventé le terme « négritude » et écrit le « Cahier d'un retour au pays natal » ?", ["Aimé Césaire", "Cesaire"], "Aux côtés de Léopold Sédar Senghor et du Guyanais Léon-Gontran Damas, Aimé Césaire a fondé le mouvement littéraire de la Négritude à Paris dans les années 1930."],
    ["Quelle mégapole d'Afrique centrale est aujourd'hui la plus grande ville francophone du monde par sa population ?", ["Kinshasa"], "Capitale de la République démocratique du Congo (RDC), Kinshasa dépasse désormais l'agglomération parisienne en nombre d'habitants."],
    ["Que signifie le sigle OIF ?", ["Organisation internationale de la Francophonie"], "Basée à Paris, l'OIF rassemble 88 États et gouvernements (membres, associés et observateurs) partageant la langue française."],
    ["Quel écrivain sénégalais a remporté le prestigieux prix Goncourt en 2021 avec son roman « La Plus Secrète Mémoire des hommes » ?", ["Mohamed Mbougar Sarr", "Mbougar Sarr", "Sarr"], "À 31 ans, Mohamed Mbougar Sarr est devenu le premier écrivain d'Afrique subsaharienne couronné par le prix Goncourt."],
    ["Combien de membres (appelés les « Immortels ») compte l'Académie française, fondée en 1635 par Richelieu ?", ["40", "quarante"], "Ils sont élus à vie dans l'un des 40 fauteuils pour veiller sur la langue française et rédiger son dictionnaire."]
  ],

  monde: [
    ["Dans quelle capitale africaine se trouve le siège de l'Union africaine (UA) ?", ["Addis-Abeba", "addis abeba"], "Capitale de l'Éthiopie, Addis-Abeba (« Nouvelle Fleur » en amharique) accueille aussi la Commission économique pour l'Afrique de l'ONU."],
    ["Quel sigle de 5 lettres désigne l'Union économique et monétaire ouest-africaine regroupant 8 pays partageant le franc CFA ?", ["UEMOA"], "Son siège est à Ouagadougou et sa banque centrale est la BCEAO (siège à Dakar)."],
    ["Quel est le sigle de la Bourse régionale des valeurs mobilières commune aux pays de l'UEMOA, basée à Abidjan ?", ["BRVM"], "Inaugurée en 1998 à Abidjan, la BRVM a été la toute première bourse entièrement électronique et régionale d'Afrique."],
    ["Combien d'États membres compte l'Organisation des Nations unies (ONU) ?", ["193"], "Le 193e et dernier État à avoir rejoint l'ONU est le Soudan du Sud, lors de son indépendance en juillet 2011."],
    ["Quelle célèbre application mobile de vidéos courtes appartient au groupe technologique chinois ByteDance ?", ["TikTok"], "Lancée en 2016 sous le nom de Douyin en Chine puis TikTok à l'international, elle compte plus d'un milliard d'utilisateurs."],
    ["Quelle cryptomonnaie décentralisée, lancée en 2009 par le mystérieux Satoshi Nakamoto, est la première de l'histoire ?", ["Bitcoin"], "Le Bitcoin repose sur la technologie de la chaîne de blocs (« blockchain »)."],
    ["Dans quelle ville américaine se trouve le siège principal de l'Organisation des Nations unies (ONU) ?", ["New York"], "Le siège de l'ONU domine l'East River à Manhattan ; l'ONU possède aussi des sièges européens et africains à Genève, Vienne et Nairobi."],
    ["Quel canal artificiel égyptien relie la mer Méditerranée à la mer Rouge depuis 1869 ?", ["Canal de Suez", "Suez"], "Long de 193 km, le canal de Suez permet aux navires de relier l'Europe à l'Asie sans contourner toute l'Afrique."],
    ["Quel sigle désigne l'Organisation mondiale de la santé, institution spécialisée de l'ONU basée à Genève ?", ["OMS"], "Créée le 7 avril 1948 (date devenue la Journée mondiale de la santé), l'OMS coordonne la santé publique internationale."],
    ["Quel accord international sur le climat a été adopté lors de la COP21 en décembre 2015 ?", ["Accord de Paris", "Paris"], "L'Accord de Paris vise à limiter le réchauffement climatique mondial bien en dessous de +2 °C, et si possible à +1,5 °C."]
  ],

  eclairs: [
    ["Capitale du Japon ?", ["Tokyo"], "Anciennement appelée Edo, Tokyo est l'aire urbaine la plus peuplée du monde."],
    ["Combien de jours compte une année bissextile ?", ["366"], "Elle revient tous les 4 ans avec un 29 février pour compenser le quart de jour supplémentaire de l'orbite terrestre."],
    ["Symbole chimique de l'or ?", ["Au"], "Du latin « Aurum »."],
    ["Plus vaste océan du monde ?", ["Pacifique"], "Il couvre à lui seul environ un tiers de toute la surface de la Terre !"],
    ["Auteur du roman « Les Misérables » ?", ["Victor Hugo", "Hugo"], "Publié en 1862, ce chef-d'œuvre suit le destin de Jean Valjean et de Cosette."],
    ["Langue officielle du Brésil ?", ["portugais"], "Le Brésil est le plus grand pays lusophone du monde."],
    ["Formule chimique de la molécule d'eau ?", ["H2O", "hache deux o", "h deux o"], "Deux atomes d'hydrogène liés à un atome d'oxygène."],
    ["Quel mélange de couleurs donne le vert (avec deux couleurs primaires) ?", ["bleu et jaune", "jaune et bleu"], "En synthèse soustractive (peinture), le bleu et le jaune forment le vert."],
    ["Bleu + jaune donnent quelle couleur ?", ["vert"], "C'est l'une des trois couleurs secondaires avec l'orange et le violet."],
    ["Plus long fleuve d'Afrique ?", ["Nil"], "Il traverse 11 pays avant de se jeter dans la mer Méditerranée."],
    ["Combien de semaines complètes compte une année ?", ["52"], "52 semaines × 7 jours = 364 jours (plus 1 ou 2 jours)."],
    ["Quel pays européen a la forme géographique d'une botte ?", ["Italie"], "La péninsule italienne s'avance dans la mer Méditerranée, avec la Sicile au bout du pied."],
    ["Animal terrestre le plus rapide au sprint ?", ["guépard", "guepard"], "Le guépard peut atteindre 110 km/h en seulement trois secondes !"],
    ["Capitale politique et administrative de la Côte d'Ivoire ?", ["Yamoussoukro"], "Elle est devenue la capitale politique en mars 1983, succédant à Abidjan (après Grand-Bassam et Bingerville)."],
    ["Combien de zéros écrit-on dans un million ?", ["6", "six"], "1 000 000 compte 6 zéros ; un milliard en compte 9."],
    ["Physicien auteur de la théorie de la relativité (E = mc²) ?", ["Albert Einstein", "Einstein"], "Prix Nobel de physique en 1921, il a bouleversé notre compréhension de l'espace et du temps."],
    ["Pays le plus peuplé d'Afrique ?", ["Nigeria"], "Avec plus de 220 millions d'habitants, le Nigeria est surnommé le « Géant de l'Afrique »."],
    ["Unité de mesure de la puissance électrique ?", ["watt"], "Nommée en l'honneur de l'ingénieur écossais James Watt."],
    ["Qui a peint « La Joconde » (Mona Lisa) ?", ["Léonard de Vinci", "Vinci", "Leonard"], "Ce chef-d'œuvre de la Renaissance italienne est exposé au musée du Louvre à Paris."],
    ["Grand lac partagé par l'Ouganda, le Kenya et la Tanzanie ?", ["Victoria", "lac victoria"], "C'est le plus grand lac d'Afrique et la source principale du Nil Blanc."],
    ["Première femme élue présidente d'un pays africain (au Liberia en 2005) ?", ["Ellen Johnson Sirleaf", "Sirleaf"], "Économiste de formation, elle a également reçu le prix Nobel de la paix en 2011."],
    ["Gaz absorbé par les plantes vertes lors de la photosynthèse ?", ["dioxyde de carbone", "CO2", "gaz carbonique"], "Les plantes absorbent le CO₂ et libèrent du dioxygène (O₂)."],
    ["Combien de joueurs par équipe sur un terrain de volley-ball ?", ["6", "six"], "Trois joueurs à l'avant près du filet et trois joueurs à l'arrière."],
    ["Combien de pattes possède une araignée ?", ["8", "huit"], "Les araignées sont des arachnides (8 pattes), contrairement aux insectes qui en ont 6."],
    ["Continent dont fait partie l'Égypte (pour l'essentiel de son territoire) ?", ["Afrique"], "Située au nord-est de l'Afrique, l'Égypte possède un pont vers l'Asie avec la péninsule du Sinaï."],
    ["Quelle est la température d'ébullition de l'eau pure au niveau de la mer (en °C) ?", ["100", "cent"], "Sur l'échelle Celsius, l'eau gèle à 0 °C et bout à 100 °C sous pression normale."],
    ["Dans quel pays se trouvent les pyramides de Gizeh et le Sphinx ?", ["Égypte", "egypte"], "Elles se dressent sur le plateau de Gizeh, aux portes du Caire."],
    ["Quel est l'oiseau actuel le plus grand et le plus lourd, incapable de voler mais excellent coureur ?", ["autruche"], "Une autruche d'Afrique peut mesurer 2,50 m et courir à 70 km/h !"],
    ["Combien de cordes possède une guitare classique standard ?", ["6", "six"], "Accordées du grave à l'aigu : Mi, La, Ré, Sol, Si, Mi."],
    ["Quel océan borde les côtes de la Côte d'Ivoire, du Sénégal et du Gabon ?", ["Atlantique", "ocean atlantique"], "La côte ivoirienne s'ouvre plus précisément sur le golfe de Guinée, partie de l'océan Atlantique."],
    ["Quel est le plus petit État indépendant du monde, enclavé dans la ville de Rome ?", ["Vatican", "cite du vatican"], "Le Vatican ne couvre que 0,44 km² !"],
    ["Comment appelle-t-on un polygone à cinq côtés ?", ["pentagone"], "Du grec « pente » (cinq) et « gônia » (angle)."]
  ]
};

/* ==========================================================================
   THÉMATIQUES D'ENTRAÎNEMENT SPÉCIALISÉES (CAPITALES, DRAPEAUX, ANIMAUX…)
   ========================================================================== */

window.THEMES_META = [
  { id: "cap_afrique", titre: "Afrique", nom: "Capitales d'Afrique", sousTitre: "Les 54 pays & capitales africaines", icon: "🌍", group: "Capitales" },
  { id: "cap_europe", titre: "Europe", nom: "Capitales d'Europe", sousTitre: "De Lisbonne à Athènes et Oslo", icon: "🇪🇺", group: "Capitales" },
  { id: "cap_asie", titre: "Asie & Moyen-Orient", nom: "Capitales d'Asie", sousTitre: "De Tokyo à Riyad et New Delhi", icon: "🌏", group: "Capitales" },
  { id: "cap_ameriques", titre: "Amériques & Océanie", nom: "Capitales Amériques & Océanie", sousTitre: "Nord, Sud, Caraïbes & Pacifique", icon: "🌎", group: "Capitales" },
  { id: "cap_monde", titre: "Tout le Monde (Mix)", nom: "Capitales du Monde", sousTitre: "Grand défi sur les 5 continents", icon: "🌐", group: "Capitales", mix: ["cap_afrique", "cap_europe", "cap_asie", "cap_ameriques"] },
  { id: "drapeaux", titre: "Drapeaux & Emblèmes", nom: "Drapeaux & Emblèmes", sousTitre: "Couleurs, étoiles & symboles nationaux", icon: "🏳️", group: "Culture" },
  { id: "animaux", titre: "Monde Animal", nom: "Monde Animal", sousTitre: "Cris, petits, femelles & records", icon: "🦁", group: "Culture" },
  { id: "monnaies", titre: "Monnaies & Devises", nom: "Monnaies & Devises", sousTitre: "Franc CFA, Yen, Naira, Dollar, Euro…", icon: "🪙", group: "Culture" },
  { id: "histoire_afrique", titre: "Histoire d'Afrique", nom: "Histoire & Empires d'Afrique", sousTitre: "Grands empires, figures & indépendances", icon: "👑", group: "Culture" },
  { id: "inventions", titre: "Sciences & Inventions", nom: "Sciences & Inventions", sousTitre: "Corps humain, chimie & découvertes", icon: "🔬", group: "Culture" },
  { id: "litterature", titre: "Littérature & Mythes", nom: "Littérature & Mythologie", sousTitre: "Grands auteurs, œuvres & mythologie", icon: "📚", group: "Culture" },
  { id: "geographie", titre: "Géographie Mondiale", nom: "Géographie Mondiale", sousTitre: "Fleuves, sommets, déserts & détroits", icon: "🏔️", group: "Culture" }
];

window.DEFAULT_THEMES = {
  cap_afrique: [
    ["Quelle est la capitale politique et administrative de la Côte d'Ivoire ?", ["Yamoussoukro"], "🇨🇮 Yamoussoukro est devenue capitale politique en mars 1983, tandis qu'Abidjan demeure la capitale économique."],
    ["Quelle est la capitale du Sénégal ?", ["Dakar"], "🇸🇳 Située sur la presqu'île du Cap-Vert, Dakar est la ville la plus occidentale du continent africain."],
    ["Quelle est la capitale du Mali ?", ["Bamako"], "🇲🇱 Traversée par le fleuve Niger, Bamako tire son nom du bambara signifiant « marigot du caïman »."],
    ["Quelle est la capitale du Burkina Faso ?", ["Ouagadougou", "Ouaga"], "🇧🇫 Surnommée « Ouaga », elle abrite le siège de l'UEMOA et le festival de cinéma FESPACO."],
    ["Quelle est la capitale fédérale du Nigeria ?", ["Abuja"], "🇳🇬 Abuja a remplacé Lagos comme capitale en 1991 en raison de sa position géographique centrale."],
    ["Quelle est la capitale du Ghana ?", ["Accra"], "🇬🇭 Située au bord du golfe de Guinée, Accra est la capitale du Ghana indépendant depuis 1957."],
    ["Quelle est la capitale officielle (constitutionnelle) du Bénin ?", ["Porto-Novo", "Porto Novo"], "🇧🇯 Attention au piège classique en Génies en Herbe : Porto-Novo est la capitale officielle, et Cotonou la capitale économique !"],
    ["Quelle est la capitale du Togo ?", ["Lomé", "Lome"], "🇹🇬 Lomé est située à l'extrême sud-ouest du Togo, directement à la frontière avec le Ghana."],
    ["Quelle est la capitale de la Guinée ?", ["Conakry"], "🇬🇳 Bâtie sur la presqu'île de Kaloum face aux îles de Loos, sur l'océan Atlantique."],
    ["Quelle est la capitale du Niger ?", ["Niamey"], "🇳🇪 Située sur les rives du fleuve Niger, c'est là qu'est née la Francophonie institutionnelle en 1970."],
    ["Quelle est la capitale du Cameroun ?", ["Yaoundé", "Yaounde"], "🇨🇲 Surnommée « la ville aux sept collines », Yaoundé est la capitale politique, tandis que Douala est la métropole économique."],
    ["Quelle est la capitale du Gabon ?", ["Libreville"], "🇬🇦 Fondée en 1849 par des esclaves affranchis du navire L'Elizia, d'où son nom de Libreville."],
    ["Quelle est la capitale de la République démocratique du Congo (RDC) ?", ["Kinshasa"], "🇨🇩 Kinshasa et Brazzaville (capitale de la République du Congo) sont les deux capitales les plus proches du monde, séparées seulement par le fleuve Congo !"],
    ["Quelle est la capitale du Maroc ?", ["Rabat"], "🇲🇦 Rabat est la capitale politique du royaume, tandis que Casablanca en est le poumon économique."],
    ["Quelle est la capitale de l'Algérie ?", ["Alger"], "🇩🇿 Surnommée « Alger la Blanche » pour ses édifices immaculés donnant sur la mer Méditerranée."],
    ["Quelle est la capitale de la Tunisie ?", ["Tunis"], "🇹🇳 Située tout près du site antique de la célèbre cité de Carthage."],
    ["Quelle est la capitale de l'Égypte ?", ["Le Caire", "Caire"], "🇪🇬 Plus grande métropole du monde arabe, traversée par le Nil au pied des pyramides de Gizeh."],
    ["Quelle est la capitale de l'Éthiopie ?", ["Addis-Abeba", "Addis Abeba"], "🇪🇹 Perchée à plus de 2 300 m d'altitude, Addis-Abeba abrite le siège de l'Union africaine."],
    ["Quelle est la capitale du Kenya ?", ["Nairobi"], "🇰🇪 Grande métropole d'Afrique de l'Est qui abrite le siège mondial du Programme des Nations unies pour l'environnement (PNUE)."],
    ["Quelle est la capitale du Rwanda ?", ["Kigali"], "🇷🇼 Réputée comme l'une des villes les plus propres et verdoyantes d'Afrique, au cœur du « Pays des mille collines »."],
    ["Quelle est la capitale de Madagascar ?", ["Antananarivo", "Tananarive"], "🇲🇬 Surnommée « Tana », son nom malgache signifie « la Cité des Mille »."],
    ["Quelle est la capitale administrative (exécutive) de l'Afrique du Sud ?", ["Pretoria"], "🇿🇦 L'Afrique du Sud a 3 capitales : Pretoria (exécutive), Le Cap (législative/Parlement) et Bloemfontein (judiciaire) !"],
    ["Quelle est la capitale de l'Angola ?", ["Luanda"], "🇦🇴 Grand port pétrolier et historique situé sur la côte de l'océan Atlantique."],
    ["Quelle est la capitale de la Tanzanie (capitale politique officielle) ?", ["Dodoma"], "🇹🇿 Autre piège fréquent : Dodoma a remplacé Dar es Salam comme capitale politique officielle de la Tanzanie !"]
  ],

  cap_europe: [
    ["Quelle est la capitale de la France ?", ["Paris"], "🇫🇷 Traversée par la Seine, Paris est surnommée la « Ville Lumière »."],
    ["Quelle est la capitale de la Belgique ?", ["Bruxelles"], "🇧🇪 Bruxelles est aussi le siège des principales institutions de l'Union européenne."],
    ["Quelle est la capitale de l'Allemagne ?", ["Berlin"], "🇩🇪 Réunifiée après la chute du Mur le 9 novembre 1989, Berlin est redevenue la capitale de l'Allemagne unie."],
    ["Quelle est la capitale de l'Italie ?", ["Rome"], "🇮🇹 Surnommée la « Ville éternelle », elle entoure entièrement l'État de la Cité du Vatican."],
    ["Quelle est la capitale de l'Espagne ?", ["Madrid"], "🇪🇸 Située au cœur de la péninsule Ibérique, c'est l'une des capitales les plus hautes d'Europe (~650 m)."],
    ["Quelle est la capitale du Portugal ?", ["Lisbonne"], "🇵🇹 Située à l'embouchure du Tage sur l'océan Atlantique, bâtie sur sept collines."],
    ["Quelle est la capitale du Royaume-Uni ?", ["Londres"], "🇬🇧 Traversée par la Tamise, son célèbre carillon Big Ben rythme la vie du palais de Westminster."],
    ["Quelle est la ville fédérale (capitale de fait) de la Suisse ?", ["Berne"], "🇨🇭 Attention au piège : ce n'est ni Genève ni Zurich, mais bien Berne !"],
    ["Quelle est la capitale des Pays-Bas ?", ["Amsterdam"], "🇳🇱 Amsterdam est la capitale constitutionnelle, tandis que le gouvernement et la Cour internationale de justice siègent à La Haye."],
    ["Quelle est la capitale de l'Autriche ?", ["Vienne"], "🇦🇹Traversée par le Danube, Vienne est la capitale historique de la musique classique (Mozart, Beethoven, Strauss)."],
    ["Quelle est la capitale de la Grèce ?", ["Athènes", "Athenes"], "🇬🇷 Dominée par l'Acropole et le Parthénon, berceau de la démocratie antique."],
    ["Quelle est la capitale de la Pologne ?", ["Varsovie"], "🇵🇱 Traversée par le fleuve Vistule, ville natale de Marie Curie et Frédéric Chopin."],
    ["Quelle est la capitale de la Suède ?", ["Stockholm"], "🇸🇪 Construite sur un archipel de 14 îles reliées par plus de 50 ponts, où sont remis les prix Nobel."],
    ["Quelle est la capitale de la Norvège ?", ["Oslo"], "🇳🇴 C'est à Oslo qu'est décerné chaque année le prix Nobel de la paix (les autres Nobel étant remis à Stockholm)."],
    ["Quelle est la capitale de la République d'Irlande ?", ["Dublin"], "🇮🇪 Située sur la côte est de l'île d'Irlande, à l'embouchure de la Liffey."],
    ["Quelle est la capitale de la Tchéquie (République tchèque) ?", ["Prague"], "🇨🇿 Surnommée la « Ville aux cent clochers », traversée par la Vltava."],
    ["Quelle est la capitale de la Hongrie ?", ["Budapest"], "🇭🇺 Née en 1873 de l'union des villes de Buda et Óbuda (rive droite) et de Pest (rive gauche du Danube)."],
    ["Quelle est la capitale de la Roumanie ?", ["Bucarest"], "🇷🇴 Surnommée autrefois le « Petit Paris des Balkans » pour son architecture."]
  ],

  cap_asie: [
    ["Quelle est la capitale du Japon ?", ["Tokyo"], "🇯🇵 Appelée Edo jusqu'en 1868, Tokyo signifie « Capitale de l'Est »."],
    ["Quelle est la capitale de la Chine ?", ["Pékin", "Pekin", "Beijing"], "🇨🇳 Beijing signifie « Capitale du Nord » et abrite la célèbre Cité interdite."],
    ["Quelle est la capitale de l'Inde ?", ["New Delhi", "Delhi"], "🇮🇳 Située au cœur de la métropole de Delhi, au nord du pays."],
    ["Quelle est la capitale de la Corée du Sud ?", ["Séoul", "Seoul"], "🇰🇷 Traversée par le fleuve Han, Séoul est l'un des pôles technologiques majeurs d'Asie."],
    ["Quelle est la capitale de la Thaïlande ?", ["Bangkok"], "🇹🇭 En thaï, les habitants l'appellent « Krung Thep » (« la Cité des Anges »)."],
    ["Quelle est la capitale du Viêt Nam ?", ["Hanoï", "Hanoi"], "🇻🇳 Située dans le delta du fleuve Rouge au nord du pays (tandis que Hô Chi Minh-Ville est au sud)."],
    ["Quelle est la capitale de l'Indonésie ?", ["Jakarta", "Nusantara"], "🇮🇩 Située sur l'île de Java ; le pays construit aussi une nouvelle capitale administrative nommée Nusantara à Bornéo."],
    ["Quelle est la capitale de la Turquie ?", ["Ankara"], "🇹🇷 Piège classique : Mustapha Kemal Atatürk a fait d'Ankara la capitale en 1923 à la place d'Istanbul !"],
    ["Quelle est la capitale de l'Arabie saoudite ?", ["Riyad"], "🇸🇦 Située sur un grand plateau au centre de la péninsule Arabique."],
    ["Quelle est la capitale du Qatar ?", ["Doha"], "🇶🇦 Située sur la côte du golfe Persique, Doha a accueilli la finale de la Coupe du monde 2022."],
    ["Quelle est la capitale des Émirats arabes unis ?", ["Abou Dabi", "Abu Dhabi", "Abou Dhabi"], "🇦🇪 Piège fréquent : c'est Abou Dabi la capitale fédérale, et non Dubaï !"],
    ["Quelle est la capitale des Philippines ?", ["Manille"], "🇵🇭 Située sur la grande île de Luçon, au bord de la baie de Manille."],
    ["Quelle est la capitale de la Malaisie ?", ["Kuala Lumpur"], "🇲🇾 Célèbre pour ses tours jumelles Petronas qui culminent à 452 mètres."],
    ["Quelle est la capitale du Pakistan ?", ["Islamabad"], "🇵🇰 Construite dans les années 1960 pour remplacer Karachi comme capitale."],
    ["Quelle est la capitale du Liban ?", ["Beyrouth"], "🇱🇧 Port millénaire de la côte méditerranéenne au Proche-Orient."],
    ["Quelle est la capitale de l'Iran ?", ["Téhéran", "Teheran"], "🇮🇷 Située au pied de la chaîne de montagnes de l'Elbourz."]
  ],

  cap_ameriques: [
    ["Quelle est la capitale fédérale des États-Unis ?", ["Washington", "Washington DC"], "🇺🇸 Nommée en l'honneur de George Washington, premier président américain (à ne pas confondre avec New York !)."],
    ["Quelle est la capitale du Canada ?", ["Ottawa"], "🇨🇦 Située dans la province de l'Ontario, juste en face de la ville québécoise de Gatineau."],
    ["Quelle est la capitale du Brésil ?", ["Brasilia", "Brasília"], "🇧🇷 Inaugurée en 1960 et dessinée en forme d'avion par Oscar Niemeyer et Lúcio Costa pour remplacer Rio de Janeiro."],
    ["Quelle est la capitale de l'Argentine ?", ["Buenos Aires"], "🇦🇷 Située sur la rive sud du Río de la Plata, berceau du tango."],
    ["Quelle est la capitale du Mexique ?", ["Mexico"], "🇲🇽 Construite à plus de 2 200 m d'altitude sur les ruines de Tenochtitlan, l'ancienne capitale aztèque."],
    ["Quelle est la capitale de la Colombie ?", ["Bogota", "Bogotá"], "🇨🇴 Perchée à 2 640 mètres d'altitude dans la cordillère des Andes."],
    ["Quelle est la capitale du Pérou ?", ["Lima"], "🇵🇪 Fondée en 1535 au bord de l'océan Pacifique."],
    ["Quelle est la capitale du Chili ?", ["Santiago", "Santiago du Chili"], "🇨🇱 Située dans une vallée entourée par les sommets enneigés des Andes."],
    ["Quelle est la capitale de Cuba ?", ["La Havane", "Havane"], "🇨🇺 Plus grande ville des Caraïbes, célèbre pour son architecture coloniale et son Malecón."],
    ["Quelle est la capitale d'Haïti ?", ["Port-au-Prince", "Port au Prince"], "🇭🇹 Haïti est devenue en 1804 la première république noire indépendante du monde."],
    ["Quelle est la capitale de la Jamaïque ?", ["Kingston"], "🇯🇲 Située au sud-est de l'île, berceau de la musique reggae."],
    ["Quelle est la capitale du Venezuela ?", ["Caracas"], "🇻🇪 Ville natale de Simón Bolívar, le « Libertador » de l'Amérique du Sud."],
    ["Quelle est la capitale de l'Uruguay ?", ["Montevideo"], "🇺🇾 Montevideo a accueilli et remporté la toute première Coupe du monde de football en 1930."],
    ["Quelle est la capitale fédérale de l'Australie ?", ["Canberra"], "🇦🇺 Choisie en 1908 comme compromis entre les deux grandes rivales Sydney et Melbourne !"],
    ["Quelle est la capitale de la Nouvelle-Zélande ?", ["Wellington"], "🇳🇿 C'est la capitale nationale la plus australe (la plus au sud) de la planète."]
  ],

  drapeaux: [
    ["Quelles sont, dans l'ordre à partir de la hampe, les trois couleurs du drapeau de la Côte d'Ivoire ?", ["orange blanc vert", "orange, blanc, vert"], "🇨🇮 Orange (la savane du Nord et la fertilité), Blanc (la paix dans l'unité), Vert (l'espoir et la forêt du Sud)."],
    ["Quel pays européen possède un drapeau aux mêmes couleurs que la Côte d'Ivoire, mais disposées dans l'ordre inverse (Vert, Blanc, Orange) ?", ["Irlande", "Republique d'Irlande"], "🇮🇪 Le drapeau irlandais commence par le vert à la hampe, tandis que celui de la Côte d'Ivoire commence par l'orange."],
    ["Quel symbole figure au centre de la bande jaune du drapeau du Sénégal ?", ["étoile verte", "une etoile verte", "etoile"], "🇸🇳 Une étoile verte à cinq branches au centre du tricolore vert, or et rouge."],
    ["Quelle feuille d'arbre rouge à 11 pointes figure au centre du drapeau du Canada ?", ["feuille d'érable", "erable", "feuille derable"], "🇨🇦 L'érable à sucre est l'arbre emblématique du Canada, célèbre pour son sirop."],
    ["Quel pays asiatique a un drapeau blanc frappé uniquement d'un disque rouge au centre ?", ["Japon"], "🇯🇵 Appelé « Hinomaru » (« disque solaire »), il symbolise le Pays du Soleil-Levant."],
    ["Quel arbre figure au milieu de la bande blanche du drapeau du Liban ?", ["cèdre", "cedre", "cedre du liban"], "🇱🇧 Le cèdre du Liban est un symbole millénaire de longévité, de paix et d'éternité."],
    ["De quelle couleur est l'étoile à cinq branches au centre du drapeau du Ghana ?", ["noire", "noir"], "🇬🇭 C'est le « Black Star » (l'Étoile noire de la liberté africaine), qui a aussi donné son surnom à l'équipe nationale ghanéenne."],
    ["De quelle couleur est l'étoile pentagramme au centre du drapeau rouge du Maroc ?", ["verte", "vert"], "🇲🇦 Le fond est rouge vif et le sceau de Salomon (étoile à 5 branches entrelacées) au centre est vert."],
    ["Combien d'étoiles compte le drapeau des États-Unis d'Amérique ?", ["50", "cinquante"], "🇺🇸 Les 50 étoiles représentent les 50 États fédérés, et les 13 bandes représentent les 13 colonies d'origine."],
    ["Quelle est la devise écrite en portugais sur la sphère étoilée du drapeau du Brésil ?", ["Ordem e Progresso", "Ordre et Progres"], "🇧🇷 « Ordem e Progresso » (« Ordre et Progrès »), inspirée de la devise positiviste d'Auguste Comte."],
    ["Quel est le seul pays au monde dont le drapeau national n'est ni carré ni rectangulaire (composé de deux triangles superposés) ?", ["Népal", "Nepal"], "🇳🇵 Ses deux pennons triangulaires représentent les sommets de l'Himalaya."],
    ["Combien d'étoiles dorées disposées en cercle figurent sur le drapeau bleu de l'Union européenne ?", ["12", "douze"], "🇪🇺 Le chiffre 12 symbolise la perfection, la plénitude et l'unité (et ne dépend pas du nombre d'États membres)."],
    ["Quelle arme traditionnelle accompagnée de deux lances figure au centre du drapeau du Kenya ?", ["bouclier", "bouclier maasai", "bouclier massai"], "🇰🇪 Il s'agit d'un bouclier traditionnel masaï croisé avec deux lances blanches."],
    ["Quelles sont les trois couleurs dites « panafricaines » présentes sur les drapeaux du Mali, de la Guinée, du Sénégal, du Ghana ou du Cameroun ?", ["vert jaune rouge", "vert or rouge", "rouge jaune vert"], "Inspirées du drapeau historique de l'Éthiopie, seule nation africaine restée indépendante face à la colonisation au XIXe siècle."],
    ["Quel oiseau royal doré figure au centre du drapeau de l'Égypte ?", ["aigle", "aigle de saladin"], "🇪🇬 L'Aigle de Saladin, tourné vers la droite, occupe la bande blanche centrale du drapeau égyptien."],
    ["Quel pays d'Afrique australe possède un drapeau comportant 6 couleurs (noir, jaune, vert, blanc, rouge, bleu) avec un « Y » horizontal ?", ["Afrique du Sud"], "🇿🇦 Adopté en avril 1994 à la fin de l'apartheid, il symbolise la convergence des peuples de la « Nation arc-en-ciel »."]
  ],

  animaux: [
    ["Comment appelle-t-on le petit du sanglier ?", ["marcassin"], "🐗 Sa robe est rayée de bandes claires pendant ses premiers mois."],
    ["Comment appelle-t-on le petit du cerf et de la biche ?", ["faon"], "🦌 On prononce « fan » (du latin « fetus »)."],
    ["Comment appelle-t-on le petit de la brebis et du bélier ?", ["agneau"], "🐑 La brebis met bas l'agneau : on dit qu'elle « agnelle »."],
    ["Comment appelle-t-on le petit du cheval et de la jument ?", ["poulain", "pouliche"], "🐎 Le jeune mâle est le poulain, la jeune femelle est la pouliche."],
    ["Comment appelle-t-on le petit de la chèvre et du bouc ?", ["chevreau", "cabri"], "🐐 On l'appelle le chevreau ou le cabri."],
    ["Comment appelle-t-on le petit du lièvre et de la hase ?", ["levraut"], "🐇 Attention : la femelle du lièvre est la « hase » et son petit le « levraut » (alors que chez le lapin, c'est la lapine et le lapereau)."],
    ["Quel verbe désigne le cri de l'éléphant ?", ["barrir", "il barrit"], "🐘 L'éléphant barrit (son cri est le barrissement)."],
    ["Quel verbe désigne le cri du lion ?", ["rugir", "il rugit"], "🦁 Le rugissement d'un lion mâle peut s'entendre jusqu'à 8 kilomètres dans la savane !"],
    ["Quel verbe désigne le cri du cheval ?", ["hennir", "il hennit"], "🐴 Le cheval hennit (le hennissement)."],
    ["Quel verbe désigne le cri de l'âne ?", ["braire", "il brait"], "🫏 L'âne brait (le braiment)."],
    ["Quel verbe désigne le cri du corbeau ?", ["croasser", "il croasse"], "🐦‍⬛ Retiens l'astuce : le cOrbeau crOasse (avec un O), tandis que la grenouille coasse (sans R) !"],
    ["Quel est le plus grand mammifère (et le plus gros animal) ayant jamais vécu sur Terre ?", ["baleine bleue", "rorqual bleu"], "🐋 Une baleine bleue peut dépasser 30 mètres de long et peser plus de 150 tonnes — son cœur a la taille d'une petite voiture !"],
    ["Quel est le seul mammifère capable de voler activement grâce à ses ailes ?", ["chauve-souris", "chauve souris", "chiroptère"], "🦇 Les chauves-souris appartiennent à l'ordre des chiroptères (« mains ailées »)."],
    ["Quel mammifère australien bizarre pond des œufs et possède un bec de canard et une queue de castor ?", ["ornithorynque"], "Avec l'échidné, l'ornithorynque fait partie des monotrèmes : des mammifères qui pondent des œufs !"],
    ["Combien de compartiments (poches) possède l'estomac d'un ruminant comme la vache ?", ["4", "quatre"], "🐄 La panse (rumen), le bonnet (réticulum), le feuillet (omasum) et la caillette (abomasum)."],
    ["Quel est le mammifère terrestre qui possède le cou le plus long et la pression artérielle la plus élevée ?", ["girafe"], "🦒 Malgré son cou de plus de 2 mètres, la girafe possède exactement 7 vertèbres cervicales, tout comme l'être humain !"],
    ["Comment appelle-t-on un animal qui se nourrit à la fois d'aliments d'origine végétale et animale ?", ["omnivore"], "Du latin « omnis » (tout) et « vorare » (dévorer), par opposition aux herbivores et aux carnivores."],
    ["Quel oiseau marin incapable de voler vit exclusivement dans l'hémisphère Sud (notamment en Antarctique) ?", ["manchot", "manchot empereur"], "🐧 Piège fréquent : les manchots vivent dans l'hémisphère Sud et ne volent pas, tandis que les pingouins vivent dans l'hémisphère Nord et savent voler !"]
  ],

  monnaies: [
    ["Quelle est la monnaie officielle du Nigeria ?", ["Naira"], "🇳🇬 Son symbole est ₦ (divisé en 100 kobos)."],
    ["Quelle est la monnaie officielle du Ghana ?", ["Cedi"], "🇬🇭 Le mot « cedi » vient du mot akan désignant les coquillages cauris utilisés autrefois comme monnaie !"],
    ["Quelle est la monnaie officielle de l'Afrique du Sud ?", ["Rand"], "🇿🇦 Tiré du Witwatersrand, le bassin aurifère sur lequel a été bâtie Johannesburg."],
    ["Quelle est la monnaie officielle du Maroc et des Émirats arabes unis ?", ["Dirham"], "🇲🇦 Le mot « dirham » vient de l'ancienne « drachme » grecque."],
    ["Quelle est la monnaie officielle de l'Éthiopie ?", ["Birr"], "🇪🇹 En amharique, « birr » signifie littéralement « argent »."],
    ["Quelle est la monnaie officielle de l'Égypte ?", ["Livre égyptienne", "livre"], "🇪🇬 Comme le Soudan ou le Liban, l'Égypte utilise la livre."],
    ["Quelle est la monnaie officielle du Kenya, de la Tanzanie et de l'Ouganda ?", ["Shilling"], "🇰🇪 Chacun de ces trois pays d'Afrique de l'Est possède son propre shilling national."],
    ["Quelle est la monnaie officielle de la République démocratique du Congo (RDC) ?", ["Franc congolais"], "🇨🇩 À ne pas confondre avec le Franc CFA utilisé en République du Congo (Congo-Brazzaville)."],
    ["Quelle est la monnaie officielle de la Guinée (Conakry) ?", ["Franc guinéen", "franc guineen"], "🇬🇳 Créé après l'indépendance de la Guinée."],
    ["Quelle est la monnaie officielle de Madagascar ?", ["Ariary"], "🇲🇬 L'ariary (et l'ouguiya mauritanien) sont les deux seules monnaies non décimales au monde (1 ariary = 5 iraimbilanja) !"],
    ["Quelle est la monnaie officielle du Japon ?", ["Yen"], "🇯🇵 En japonais, « en » signifie « objet rond » (pièce)."],
    ["Quelle est la monnaie officielle de l'Inde ?", ["Roupie", "roupie indienne"], "🇮🇳 Son symbole officiel est ₹."],
    ["Quelle est la monnaie officielle du Royaume-Uni ?", ["Livre sterling", "livre"], "🇬🇧 C'est l'une des plus anciennes monnaies encore en circulation au monde (£)."],
    ["Quelle est la monnaie officielle du Brésil ?", ["Réal", "Real"], "🇧🇷 Le réal brésilien (R$) a été introduit en 1994 pour juguler l'hyperinflation."],
    ["Quelle est la monnaie officielle de la Chine (nom courant de l'unité de base du Renminbi) ?", ["Yuan", "Renminbi"], "🇨🇳 « Renminbi » signifie « monnaie du peuple », et son unité de compte est le yuan."]
  ],

  histoire_afrique: [
    ["Quel célèbre empereur du Mali (Mansa) a effectué un pèlerinage fastueux à La Mecque en 1324 en distribuant tant d'or qu'il en fit baisser le cours au Caire ?", ["Mansa Moussa", "Kankou Moussa", "Kankan Moussa"], "👑 Mansa Kankou Moussa est considéré par les historiens comme l'homme le plus riche de toute l'histoire humaine."],
    ["Lors de quelle bataille décisive en 1235 Soundjata Keïta a-t-il vaincu le roi du Sosso Soumaoro Kanté ?", ["Kirina", "bataille de Kirina"], "⚔️ Cette victoire marque la naissance de l'Empire du Mali (Manden)."],
    ["Quelle ville historique du Mali abritait au XVe siècle la célèbre université de Sankoré et des milliers de manuscrits anciens ?", ["Tombouctou"], "📜 Surnommée « la Perle du désert » ou « la Cité des 333 saints »."],
    ["Quel fut le dernier roi indépendant du royaume de Danhomè (Abomey) qui résista aux troupes coloniales françaises jusqu'en 1894 ?", ["Béhanzin", "Behanzin"], "🦈 Son emblème royal était le requin et sa devise : « Je n'accepterai jamais qu'un pied étranger foule le sol de mes pères. »"],
    ["Quel conquérant mandingue, fondateur de l'empire du Wassoulou, a mené une résistance de près de vingt ans en Afrique de l'Ouest jusqu'en 1898 ?", ["Samory Touré", "Samori Toure", "Almamy Samory Touré"], "🐎 Stratège militaire remarquable, il fut capturé à Guélémou (Côte d'Ivoire) en 1898 et exilé au Gabon."],
    ["En quelle année — surnommée « l'Année de l'Afrique » — 17 pays africains (dont la Côte d'Ivoire, le Sénégal, le Mali, le Cameroun, le Nigeria…) ont-ils accédé à l'indépendance ?", ["1960"], "🌍 L'année 1960 a vu 17 nations africaines devenir indépendantes et entrer à l'ONU."],
    ["Quelle reine d'Égypte antique, dernière souveraine de la dynastie des Ptolémées, a régné au Ier siècle avant notre ère ?", ["Cléopâtre", "Cleopatre", "Cleopatre VII"], "🐍 Femme d'une immense érudition, elle parlait couramment près de neuf langues dont l'égyptien ancien et le grec."],
    ["Quel pharaon de la XVIIIe dynastie est devenu mondialement célèbre en 1922 grâce à la découverte de son tombeau intact par Howard Carter ?", ["Toutânkhamon", "Toutankhamon"], "🏺 Son masque funéraire en or massif incrusté de lapis-lazuli pèse 11 kilos."],
    ["Quelle île située au large de Dakar est un lieu de mémoire universel de la traite négrière atlantique ?", ["Gorée", "ile de Goree"], "🏝️ Classée au patrimoine mondial de l'UNESCO en 1978, elle abrite la célèbre Maison des Esclaves."],
    ["Quel empereur d'Éthiopie a écrasé l'armée coloniale italienne lors de la bataille d'Adoua en mars 1896 ?", ["Ménélik II", "Menelik II", "Menelik"], "🛡️ La victoire d'Adoua a garanti la souveraineté de l'Éthiopie et inspiré les mouvements panafricains du monde entier."],
    ["Quel héros de l'indépendance congolaise fut le tout premier Premier ministre de la République démocratique du Congo en juin 1960 ?", ["Patrice Lumumba", "Lumumba"], "🇨🇩 Son discours historique du 30 juin 1960 reste un monument de l'histoire contemporaine africaine."],
    ["Quel jeune capitaine et président a rebaptisé la Haute-Volta en « Burkina Faso » (« le Pays des hommes intègres ») en août 1984 ?", ["Thomas Sankara", "Sankara"], "🇧🇫 Le nom « Burkina Faso » combine le mooré (« Burkina », intègre) et le dioula (« Faso », patrie)."]
  ],

  inventions: [
    ["Quel médecin écossais a découvert la pénicilline (le premier antibiotique) en 1928 ?", ["Alexander Fleming", "Fleming"], "🔬 Cette découverte, faite presque par hasard sur une boîte de culture oubliée, a sauvé des centaines de millions de vies."],
    ["Quelle physicienne et chimiste d'origine polonaise est la seule personne à avoir reçu deux prix Nobel dans deux sciences différentes (physique et chimie) ?", ["Marie Curie", "Marie Sklodowska Curie"], "⚛️ Elle a découvert le polonium et le radium avec Pierre Curie."],
    ["Quel astronome et physicien italien du XVIIe siècle a perfectionné la lunette astronomique et défendu que la Terre tourne autour du Soleil ?", ["Galilée", "Galileo Galilei", "Galilee"], "🔭 On lui prête la phrase célèbre : « Et pourtant, elle tourne ! » (Eppur si muove)."],
    ["Quel physicien anglais a formulé la loi de la gravitation universelle au XVIIe siècle ?", ["Isaac Newton", "Newton"], "🍎 L'unité de mesure de la force en physique porte aujourd'hui son nom : le newton (N)."],
    ["Quel inventeur français a mis au point au XIXe siècle le système d'écriture tactile à points en relief pour les personnes aveugles ?", ["Louis Braille", "Braille"], "⠿ Devenu aveugle à 3 ans, Louis Braille a conçu son alphabet dès l'âge de 15 ans !"],
    ["Quelle est la vitesse approximative de la lumière dans le vide (en kilomètres par seconde) ?", ["300000", "300 000", "300000 km/s"], "⚡ Exactement 299 792,458 km/s — soit plus de 7 fois le tour de la Terre en une seule seconde !"],
    ["Quel organe du corps humain sécrète l'insuline pour réguler le taux de sucre (glycémie) dans le sang ?", ["pancréas", "pancreas"], "🩺 Un défaut de production ou d'action de l'insuline entraîne le diabète."],
    ["Combien de chambres (cavités : oreillettes et ventricules) possède le cœur humain ?", ["4", "quatre"], "❤️ Deux oreillettes (droite et gauche) en haut et deux ventricules (droit et gauche) en bas."],
    ["Quelle planète du système solaire est la plus proche de la Terre en taille et est surnommée « l'Étoile du Berger » ?", ["Vénus", "Venus"], "✨ Ce n'est pas une étoile mais bien la planète Vénus, deuxième planète à partir du Soleil."],
    ["Quel naturaliste anglais a publié en 1859 « L'Origine des espèces » exposant la théorie de l'évolution par sélection naturelle ?", ["Charles Darwin", "Darwin"], "🐢 Ses observations aux îles Galápagos à bord du navire HMS Beagle furent décisives."],
    ["Quel ingénieur suédois a inventé la dynamite et légué son immense fortune pour créer les prix qui portent son nom ?", ["Alfred Nobel", "Nobel"], "🏅 Les prix Nobel sont décernés chaque année depuis 1901 le 10 décembre."],
    ["Quel est le métal le plus conducteur d'électricité à température ambiante (avant même le cuivre et l'or) ?", ["argent"], "⚡ L'argent est le meilleur conducteur électrique, mais on utilise surtout le cuivre pour son coût bien moindre."]
  ],

  litterature: [
    ["Quel écrivain et diplomate ivoirien a écrit « Climbié » et le célèbre poème « Je vous remercie mon Dieu, de m'avoir créé Noir » ?", ["Bernard Dadié", "Bernard Binlin Dadie", "Dadie"], "📚 Père de la littérature ivoirienne moderne (1916-2019), il a vécu jusqu'à 103 ans !"],
    ["Quel écrivain guinéen a publié en 1953 le roman autobiographique « L'Enfant noir » ?", ["Camara Laye"], "📖 Ce chef-d'œuvre raconte son enfance heureuse à Kouroussa en Haute-Guinée auprès de son père forgeron."],
    ["Quelle romancière sénégalaise est l'auteure du célèbre roman épistolaire « Une si longue lettre » (1979) ?", ["Mariama Bâ", "Mariama Ba"], "✉️ Sous forme de lettres de Ramatoulaye à son amie Aïssatou, ce livre est un jalon majeur de la littérature africaine."],
    ["Quel écrivain camerounais a publié en 1956 le roman satirique « Le Vieux Nègre et la Médaille » ?", ["Ferdinand Oyono", "Oyono"], "🎖️ Un classique plein d'humour et d'ironie sur l'époque coloniale à travers le personnage de Meka."],
    ["Quel écrivain nigérian, auteur de « Tout s'effondre » (Things Fall Apart), est considéré comme le père de la littérature africaine anglophone ?", ["Chinua Achebe", "Achebe"], "🌍 Traduit dans plus de 50 langues, son roman suit le destin d'Okonkwo au pays Igbo."],
    ["Quel dramaturge et poète nigérian est devenu en 1986 le tout premier écrivain africain lauréat du prix Nobel de littérature ?", ["Wole Soyinka", "Soyinka"], "🎭 Il est notamment l'auteur de « La Mort et l'Écuyer du roi » et « Le Lion et la Perle »."],
    ["Dans la mythologie grecque, quel est le roi des dieux qui règne sur le mont Olympe et maîtrise la foudre ?", ["Zeus"], "⚡ Son équivalent dans la mythologie romaine est Jupiter."],
    ["Dans la mythologie égyptienne, quel dieu à tête de chacal veillait sur la momification et la pesée des âmes ?", ["Anubis"], "🐺 Tandis qu'Osiris régnait sur le royaume des morts et Horus avait une tête de faucon."],
    ["Quel fabuliste français du XVIIe siècle a écrit « Le Corbeau et le Renard » et « La Cigale et la Fourmi » ?", ["Jean de La Fontaine", "La Fontaine"], "🦊 Il s'est inspiré d'Ésope pour composer ses 243 fables."],
    ["Quel auteur français, aviateur de métier, a écrit et illustré « Le Petit Prince » en 1943 ?", ["Antoine de Saint-Exupéry", "Saint-Exupéry", "Saint Exupery"], "🌹 C'est l'ouvrage littéraire le plus traduit au monde après la Bible !"],
    ["Quel dramaturge français du XVIIe siècle, auteur de « L'Avare » et du « Malade imaginaire », a donné son surnom à la langue française ?", ["Molière", "Moliere", "Jean-Baptiste Poquelin"], "🎭 On appelle souvent le français « la langue de Molière »."],
    ["Quel écrivain et ethnologue malien a prononcé à l'UNESCO en 1960 la célèbre formule : « En Afrique, un vieillard qui meurt est une bibliothèque qui brûle » ?", ["Amadou Hampâté Bâ", "Hampate Ba", "Amadou Hampate Ba"], "📚 Il est aussi l'auteur d'« Amkoullel, l'enfant peul » et de « L'Étrange Destin de Wangrin »."]
  ],

  geographie: [
    ["Quel est le plus haut sommet du monde, culminant à 8 848 mètres dans l'Himalaya ?", ["Everest", "Mont Everest"], "🏔️ Situé à la frontière entre le Népal (où il est appelé Sagarmatha) et le Tibet (Chine)."],
    ["Quel détroit de 14 km de large sépare l'Afrique (le Maroc) de l'Europe (l'Espagne) ?", ["Détroit de Gibraltar", "Gibraltar"], "🌊 Il relie l'océan Atlantique à la mer Méditerranée."],
    ["Quel canal artificiel relie l'océan Atlantique à l'océan Pacifique à travers l'Amérique centrale ?", ["Canal de Panama", "Panama"], "🚢 Inauguré en 1914, il mesure environ 80 kilomètres de long."],
    ["Quelle est la plus longue chaîne de montagnes continentale du monde, qui longe toute l'Amérique du Sud ?", ["Cordillère des Andes", "les Andes", "Andes"], "⛰️ Elle s'étire sur plus de 7 000 km du Venezuela jusqu'à la Terre de Feu."],
    ["Quel est le lac le plus profond du monde, situé en Sibérie (Russie) ?", ["Lac Baïkal", "Baikal"], "💧 Il atteint 1 642 m de profondeur et contient à lui seul près de 20 % de toute l'eau douce liquide de surface de la planète !"],
    ["Quel est le plus grand pays du monde par sa superficie (plus de 17 millions de km²) ?", ["Russie"], "🗺️ La Russie s'étend sur l'Europe de l'Est et tout le nord de l'Asie sur 11 fuseaux horaires."],
    ["Quel est le plus grand pays d'Afrique par sa superficie (depuis la partition du Soudan en 2011) ?", ["Algérie", "Algerie"], "🇩🇿 Avec 2,38 millions de km², l'Algérie est le plus vaste État du continent africain, devant la RDC."],
    ["Comment s'appelle la ligne imaginaire de latitude 0° qui divise la Terre en hémisphère Nord et hémisphère Sud ?", ["Équateur", "Equateur"], "🌐 En Afrique, l'Équateur traverse notamment le Gabon, le Congo, la RDC, l'Ouganda, le Kenya et la Somalie."],
    ["Quel est le point le plus haut de Côte d'Ivoire, situé à la frontière avec la Guinée et le Liberia ?", ["Mont Nimba", "Nimba"], "⛰️ Le mont Richard-Molard, dans la chaîne des monts Nimba, culmine à 1 752 mètres d'altitude."],
    ["Quelle mer très salée située entre la Jordanie, Israël et la Cisjordanie est le point émergé le plus bas de la Terre (-430 m) ?", ["Mer Morte"], "🌊 Sa salinité (~30 %) est presque dix fois supérieure à celle de l'océan, ce qui permet d'y flotter sans effort !"],
    ["Quel est le plus grand archipel du monde, composé de plus de 17 000 îles ?", ["Indonésie", "Indonesie"], "🏝️ Ses principales îles sont Java, Sumatra, Bornéo (Kalimantan), Sulawesi et la Nouvelle-Guinée."],
    ["Comment appelle-t-on le méridien d'origine (longitude 0°) qui passe par la banlieue de Londres ?", ["Méridien de Greenwich", "Greenwich"], "🧭 Il sert de référence aux fuseaux horaires universels (UTC / GMT)."]
  ]
};


