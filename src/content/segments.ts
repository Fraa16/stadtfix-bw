export type Faq = { q: string; a: string };

export type SegmentSection = { title: string; text: string };

export type Segment = {
  slug: string;
  navLabel: string;
  tileText: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  subline: string;
  heroCta: string;
  image: { src: string; alt: string };
  problem: { h2: string; items: SegmentSection[] };
  solution: { h2: string; items: SegmentSection[] };
  faq: Faq[];
  cta: { lines: string[]; button: string; micro: string };
  blogLinks: { title: string; href: string }[];
};

export const segments: Segment[] = [
  {
    slug: "fabriken-unternehmen",
    navLabel: "Fabriken & Unternehmen",
    tileText:
      "Schutznetze und Spikes für Hallen, Laderampen und Stahlträger, auch dort, wo Hygienevorschriften wie HACCP gelten.",
    metaTitle: "Taubenabwehr für Fabriken & Industriehallen",
    metaDescription:
      "Tauben in der Halle oder an der Laderampe? Großflächige Netze und Spikes für Industriebetriebe in Baden-Württemberg: HACCP-tauglich, mit 3 Jahren Garantie.",
    kicker: "Taubenabwehr für Industrie & Gewerbe",
    h1: "Taubenabwehr für Fabriken und Industrieunternehmen",
    subline:
      "Tauben unter dem Hallendach kosten mehr als Reinigung: Sie gefährden Audits, Lagerware und die Sicherheit an Laderampen. StadtFix sichert Produktions- und Lagerhallen in ganz Baden-Württemberg, planbar und ohne Stillstand Ihrer Abläufe.",
    heroCta: "Kostenlose Betriebsbegehung anfragen",
    image: {
      src: "/images/segments/fabriken-unternehmen.webp",
      alt: "Taubenabwehr für Industriehallen, Vordach und Stahlkonstruktion eines Betriebsgebäudes",
    },
    problem: {
      h2: "Was Tauben einen Betrieb tatsächlich kosten",
      items: [
        {
          title: "Kot auf Ware und Maschinen.",
          text: "Verunreinigte Paletten werden reklamiert, verschmutzte Anlagen müssen außerplanmäßig gereinigt werden. Stillstand inklusive.",
        },
        {
          title: "Risiko beim Hygiene-Audit.",
          text: "In lebensmittelnahen Betrieben ist Taubenbefall ein HACCP-Befund. Im schlimmsten Fall steht die Zertifizierung auf dem Spiel.",
        },
        {
          title: "Rutschgefahr an Laderampen.",
          text: "Taubenkot auf Rampen und Treppen ist ein Arbeitsschutzthema und im Schadensfall eine Haftungsfrage.",
        },
        {
          title: "Nester in der Stahlkonstruktion.",
          text: "Träger, Unterzüge und Oberlichter sind ideale Nistplätze: geschützt, warm, schwer zugänglich. Genau dort setzen wir an.",
        },
      ],
    },
    solution: {
      h2: "So sichern wir Hallen und Betriebsgelände",
      items: [
        {
          title: "Hallennetze unter dem Dach.",
          text: "Großflächige Schutznetze verschließen den kompletten Deckenbereich: Tauben kommen gar nicht mehr an Träger und Unterzüge heran. Kaum sichtbar, wartungsarm, die wirksamste Lösung bei bestehendem Befall in der Halle.",
        },
        {
          title: "Spikes auf Trägern, Simsen und Fensterbänken.",
          text: "Für Landeflächen außerhalb der Halle: Verladekanten, Attiken, Vordächer. Rostfreier Edelstahl, ausgelegt auf Industrie-Bedingungen.",
        },
        {
          title: "Vergrämung an Verladerampen.",
          text: "Wo Tore dauerhaft offen stehen, ergänzen gezielte Vergrämungssysteme den mechanischen Schutz.",
        },
        {
          title: "Reinigung und Desinfektion vor der Montage.",
          text: "Kot und Nistmaterial werden fachgerecht entfernt und dokumentiert, auf Wunsch mit Nachweis für Ihr Hygiene-Management.",
        },
        {
          title: "Montage im laufenden Betrieb.",
          text: "Wir planen die Montage mit Ihrer Betriebsleitung: abschnittsweise, außerhalb von Schichtzeiten oder in Stillstandsfenstern.",
        },
      ],
    },
    faq: [
      {
        q: "Können Sie während des laufenden Betriebs montieren?",
        a: "Ja. Wir stimmen Montagefenster mit Ihrer Betriebsleitung ab: abschnittsweise, nachts oder am Wochenende. Bereiche werden nur so lange gesperrt, wie dort gearbeitet wird. Für die meisten Hallen ist kein Produktionsstopp nötig.",
      },
      {
        q: "Ist Taubenabwehr für HACCP-Betriebe relevant?",
        a: "Ja. Taubenbefall gilt in lebensmittelnahen Betrieben als Schädlingsbefund und muss im HACCP-Konzept adressiert werden. Eine dokumentierte mechanische Abwehr (Netze, Spikes) plus Reinigungsnachweis ist die belastbarste Antwort gegenüber Auditoren.",
      },
      {
        q: "Was kostet die Absicherung einer Industriehalle?",
        a: "Das hängt von Hallenfläche, Deckenhöhe und Zugänglichkeit ab. Deshalb nennen wir Preise erst nach Begehung, dann aber als Festpreis. Die Begehung ist kostenlos und dauert je nach Objektgröße ein bis zwei Stunden.",
      },
    ],
    cta: {
      lines: ["Tauben in der Halle?", "Wir sehen es uns an. Kostenlos."],
      button: "Betriebsbegehung anfragen",
      micro: "Antwort innerhalb von 24 Stunden. Festpreis-Angebot nach Begehung.",
    },
    blogLinks: [
      {
        title: "Taubenkot: Gesundheitsrisiken und warum schnelles Handeln wichtig ist",
        href: "/blog/taubenkot-gesundheitsrisiko/",
      },
    ],
  },
  {
    slug: "parkhaeuser",
    navLabel: "Parkhäuser",
    tileText:
      "Netzsysteme gegen Nester in offener Bauweise, bevor Kotsäure Betonträger angreift und Kunden sich über verschmutzte Fahrzeuge beschweren.",
    metaTitle: "Taubenabwehr für Parkhäuser & Parkdecks",
    metaDescription:
      "Tauben im Parkhaus vertreiben: Netzsysteme und Spikes gegen Nester, Kotschäden an Fahrzeugen und Korrosion am Beton. StadtFix, Baden-Württemberg. 3 Jahre Garantie.",
    kicker: "Taubenabwehr für Parkhausbetreiber",
    h1: "Taubenabwehr für Parkhäuser und Parkdecks",
    subline:
      "Offene Bauweise, warme Nischen, kein natürlicher Feind: Parkhäuser sind für Tauben ideale Brutplätze. Für Betreiber bedeuten sie Kundenbeschwerden, Reinigungskosten und langfristig Schäden am Beton. StadtFix verschließt die Nistbereiche dauerhaft.",
    heroCta: "Angebot für Ihr Parkhaus anfordern",
    image: {
      src: "/images/segments/parkhaeuser.webp",
      alt: "Taubenabwehr am Parkdeck, Edelstahl-Spikes auf einer Betonbrüstung",
    },
    problem: {
      h2: "Warum Tauben im Parkhaus teurer sind, als sie aussehen",
      items: [
        {
          title: "Kot auf Kundenfahrzeugen.",
          text: "Taubenkot ätzt sich in Autolack. Jede Beschwerde kostet Kulanz und am Ende Stammparker, die auf das Parkhaus nebenan ausweichen.",
        },
        {
          title: "Korrosion an Betonträgern.",
          text: "Die Säure im Kot greift Beton und Bewehrung an. Was heute ein Reinigungsthema ist, wird in Jahren ein Instandhaltungsposten.",
        },
        {
          title: "Rutschgefahr auf Rampen und Treppen.",
          text: "Verkotete Treppenhäuser sind ein Haftungsrisiko gegenüber Kunden und zugleich der Bereich, über den sich Nutzer am häufigsten beschweren.",
        },
        {
          title: "Nester in jeder Nische.",
          text: "Kabeltrassen, Unterzüge, Lüftungsauslässe: Ein Parkhaus bietet hunderte geschützte Nistplätze. Einzelne Spikes reichen dort nicht. Der Zugang muss verschlossen werden.",
        },
      ],
    },
    solution: {
      h2: "So sichern wir Parkhäuser: Ebene für Ebene",
      items: [
        {
          title: "Netzsysteme für offene Fassadenbereiche.",
          text: "Wir verschließen die Einflugöffnungen der betroffenen Ebenen mit Schutznetzen. Das ist die wirksamste Maßnahme bei bestehendem Befall, weil sie den Zugang komplett unterbindet.",
        },
        {
          title: "Spikes auf Trägern, Simsen und Kabeltrassen.",
          text: "Für Landeflächen im Inneren, die nicht vernetzt werden können. Rostfreier Edelstahl, unempfindlich gegen Abgase und Feuchtigkeit.",
        },
        {
          title: "Reinigung und Desinfektion.",
          text: "Vor der Montage entfernen wir Kot und Nistmaterial, sonst bleibt der Geruch als Rückkehrsignal für die Tiere. Auf Wunsch mit Dokumentation für Ihre Betreiberpflichten.",
        },
        {
          title: "Montage ohne Vollsperrung.",
          text: "Wir arbeiten ebenenweise: Gesperrt wird nur der Abschnitt, an dem montiert wird. Ihr Parkhaus bleibt in Betrieb.",
        },
      ],
    },
    faq: [
      {
        q: "Muss das Parkhaus während der Montage gesperrt werden?",
        a: "Nein, nicht komplett. Wir sperren nur die Stellplätze im jeweiligen Montageabschnitt und arbeiten uns ebenenweise vor. Der laufende Betrieb, also Einfahrt, Kasse und übrige Ebenen, bleibt unberührt.",
      },
      {
        q: "Reichen Spikes im Parkhaus aus?",
        a: "Meist nicht. Spikes sichern einzelne Landeflächen, aber ein Parkhaus bietet zu viele geschützte Nischen. Bei bestehendem Befall verschließen Netze die Einflugbereiche. Spikes ergänzen sie dort, wo Netze nicht montierbar sind.",
      },
      {
        q: "Wer haftet, wenn ein Kunde auf Taubenkot ausrutscht?",
        a: "Als Betreiber tragen Sie die Verkehrssicherungspflicht: Verkotete Treppen und Rampen sind ein reales Haftungsrisiko. Eine dokumentierte Taubenabwehr plus Reinigung ist der wirksamste Weg, dieses Risiko dauerhaft zu senken. Rechtsverbindliche Auskunft gibt im Einzelfall Ihr Anwalt.",
      },
    ],
    cta: {
      lines: ["Beschwerden häufen sich?", "Wir machen das Parkhaus dicht. Für Tauben."],
      button: "Angebot anfordern",
      micro: "Kostenlose Begehung aller Ebenen. Antwort innerhalb von 24 Stunden.",
    },
    blogLinks: [
      {
        title: "Taubenkot: Gesundheitsrisiken und warum schnelles Handeln wichtig ist",
        href: "/blog/taubenkot-gesundheitsrisiko/",
      },
    ],
  },
  {
    slug: "photovoltaikanlagen",
    navLabel: "Photovoltaikanlagen",
    tileText:
      "Unterflugschutz für Modulränder: verhindert Nester unter den Panels, Ertragsverlust und Brandrisiko durch Nistmaterial an Kabeln.",
    metaTitle: "Taubenabwehr für Photovoltaikanlagen",
    metaDescription:
      "Tauben nisten unter Ihren Solarmodulen? Unterflugschutz ohne Bohren in die Module: schützt Ertrag, Kabel und Garantie. StadtFix, Baden-Württemberg.",
    kicker: "Taubenschutz für PV-Anlagen",
    h1: "Taubenabwehr für Photovoltaikanlagen",
    subline:
      "Der Spalt zwischen Modul und Dach ist für Tauben der perfekte Nistplatz: geschützt, warm, ungestört. Für Sie bedeutet er Ertragsverlust, Kabelschäden und im Ernstfall Brandrisiko. StadtFix verschließt ihn, ohne Eingriff in Ihre Module.",
    heroCta: "PV-Anlage kostenlos prüfen lassen",
    image: {
      src: "/images/segments/photovoltaikanlagen.webp",
      alt: "Taubenabwehr an Photovoltaikanlage, Unterflugschutz am Modulrand auf einem Ziegeldach",
    },
    problem: {
      h2: "Was Tauben unter Solarmodulen anrichten",
      items: [
        {
          title: "Ertragsverlust durch Verschmutzung.",
          text: "Kot auf den Modulen verschattet Zellen, und anders als Staub wäscht Regen ihn nicht ab. Die Anlage liefert weniger, oft unbemerkt über Monate.",
        },
        {
          title: "Nistmaterial an stromführenden Kabeln.",
          text: "Zweige und trockenes Nistmaterial liegen direkt an Steckverbindern und Leitungen. Scheuerstellen und Schäden an der Isolierung sind ein reales Brandrisiko.",
        },
        {
          title: "Garantie in Gefahr.",
          text: "Beschädigte Kabel und eigenmächtige Eingriffe an der Anlage können Hersteller- und Installateursgarantien gefährden. Deshalb arbeiten wir grundsätzlich ohne Bohrung in Module oder Rahmen.",
        },
        {
          title: "Lärm und Kot direkt überm Schlafzimmer.",
          text: "Tauben unter den Modulen sind hörbar: Gurren und Scharren ab Sonnenaufgang, direkt über dem Dachgeschoss.",
        },
      ],
    },
    solution: {
      h2: "Unterflugschutz: So verschließen wir den Modulrand",
      items: [
        {
          title: "PV-Clips ohne Bohren.",
          text: "Der Schutz wird mit Klemmsystemen am Modulrahmen befestigt: keine Bohrung, kein Kleber auf dem Glas, kein Eingriff in die Elektrik. Die Modulgarantie bleibt unberührt.",
        },
        {
          title: "Edelstahlgitter statt Kunststoff.",
          text: "Kunststoffgitter verspröden unter UV-Last nach wenigen Jahren. Wir montieren rostfreien Edelstahl, ausgelegt auf die Lebensdauer der Anlage.",
        },
        {
          title: "Reinigung unter den Modulen.",
          text: "Bestehende Nester und Kot entfernen wir vor der Montage. Wird der Bereich nur verschlossen, gammelt das Material unter den Modulen weiter.",
        },
        {
          title: "Prüfung nach der Montage.",
          text: "Wir dokumentieren den Zustand der sichtbaren Verkabelung. Auffällige Schäden melden wir Ihnen. Die Reparatur gehört in die Hände Ihres Solarteurs.",
        },
      ],
    },
    faq: [
      {
        q: "Wird für den Taubenschutz in die Module gebohrt?",
        a: "Nein. Der Unterflugschutz wird mit Klemmen am Modulrahmen befestigt, ohne Bohrung und ohne Kleber auf dem Glas. Ihre Herstellergarantie bleibt dadurch unberührt.",
      },
      {
        q: "Funktioniert der Schutz bei jeder PV-Anlage?",
        a: "Bei fast allen Aufdach-Anlagen mit Standard-Rahmenmodulen ja. Entscheidend sind Rahmenhöhe und Dacheindeckung. Das prüfen wir bei der kostenlosen Begehung. Für Sonderfälle wie Indach-Anlagen finden wir die Lösung am Objekt.",
      },
      {
        q: "Was kostet Taubenschutz für eine PV-Anlage?",
        a: "Der Preis richtet sich nach der laufenden Meterzahl des Modulrands, der Dachhöhe und dem Zugang. Nach der Begehung erhalten Sie einen Festpreis. Senden Sie uns vorab Fotos und den Belegungsplan, dann geht die Einschätzung schneller.",
      },
    ],
    cta: {
      lines: ["Gurren unterm Dach?", "Lassen Sie die Anlage prüfen, bevor Kabel leiden."],
      button: "PV-Prüfung anfragen",
      micro: "Kostenlos und unverbindlich. Fotos vorab beschleunigen das Angebot.",
    },
    blogLinks: [
      {
        title: "Photovoltaik und Tauben: So vermeiden Sie Ertragsverlust und Kabelschäden",
        href: "/blog/photovoltaik-tauben/",
      },
    ],
  },
  {
    slug: "buerokomplexe",
    navLabel: "Bürokomplexe",
    tileText:
      "Dezente Spike-Systeme auf Simsen und Fassadenvorsprüngen. Wirksam, ohne das Erscheinungsbild des Gebäudes zu stören.",
    metaTitle: "Taubenabwehr für Bürogebäude & Gewerbeimmobilien",
    metaDescription:
      "Dezente Taubenabwehr für Bürogebäude: Spikes und Netze, die man kaum sieht, Montage außerhalb der Bürozeiten. StadtFix, Baden-Württemberg. 3 Jahre Garantie.",
    kicker: "Taubenabwehr für Gewerbeimmobilien",
    h1: "Taubenabwehr für Bürogebäude und Gewerbeimmobilien",
    subline:
      "Ein verkoteter Eingangsbereich sagt mehr über ein Gebäude als jede Imagebroschüre. StadtFix sichert Fassaden, Simse und Innenhöfe mit Systemen, die wirken, ohne aufzufallen. Geplant mit Ihrem Facility Management, montiert außerhalb der Bürozeiten.",
    heroCta: "Fassade begutachten lassen",
    image: {
      src: "/images/segments/buerokomplexe.webp",
      alt: "Taubenabwehr am Bürogebäude, dezente Spikes am Glasgeländer",
    },
    problem: {
      h2: "Wo Tauben ein Bürogebäude treffen",
      items: [
        {
          title: "Der erste Eindruck am Eingang.",
          text: "Kot auf Vordach, Klingelanlage und Gehweg: Das sehen Kunden und Bewerber vor dem ersten Händedruck.",
        },
        {
          title: "Fensterbänke und Fassadenvorsprünge.",
          text: "Jeder Sims ist eine Landefläche. Die Reinigung per Hubsteiger kostet regelmäßig, die Ursache bleibt.",
        },
        {
          title: "Geruch an Terrassen und offenen Fenstern.",
          text: "Nistplätze über Dachterrassen und Lüftungsbereichen machen genau die Flächen unbrauchbar, die ein Gebäude attraktiv machen.",
        },
        {
          title: "Arbeitsschutz und Betreiberpflicht.",
          text: "Verkotete Fluchtwege, Treppen und Technikflächen sind ein Thema für die Gebäudesicherheit, nicht nur für die Optik.",
        },
      ],
    },
    solution: {
      h2: "Wirksam, ohne das Gebäude zu verändern",
      items: [
        {
          title: "Dezente Spike-Systeme auf Simsen und Vorsprüngen.",
          text: "Rostfreier Edelstahl, von der Straße aus praktisch unsichtbar. Die Fassade bleibt, wie der Architekt sie geplant hat, nur ohne Tauben.",
        },
        {
          title: "Netzlösungen für Innenhöfe und Lichtschächte.",
          text: "Innenhöfe sind windgeschützt und ungestört, also ideale Brutplätze. Wir verschließen sie mit Netzen, die sich optisch zurücknehmen.",
        },
        {
          title: "Drahtsysteme für Geländer und Attiken.",
          text: "Wo Spikes zu sichtbar wären: gespannte Edelstahldrähte, die das Absitzen verhindern.",
        },
        {
          title: "Montage außerhalb der Bürozeiten.",
          text: "Abends, am Wochenende oder abschnittsweise, abgestimmt mit Ihrem Facility Management und ohne Lärm während der Meetings. Ein fester Ansprechpartner von Begehung bis Abnahme.",
        },
      ],
    },
    faq: [
      {
        q: "Sieht man die Taubenabwehr an der Fassade?",
        a: "Aus normaler Betrachtungsdistanz kaum. Edelstahl-Spikes auf Simsen sind von der Straße praktisch unsichtbar, Netze in Innenhöfen nehmen sich optisch zurück. Bei repräsentativen Fassaden wählen wir Systeme und Befestigung gezielt nach Sichtbarkeit aus.",
      },
      {
        q: "Stört die Montage den Bürobetrieb?",
        a: "Nein. Wir montieren außerhalb der Kernzeiten: abends, am Wochenende oder abschnittsweise. Lärmintensive Arbeiten legen wir grundsätzlich außerhalb der Bürozeiten. Die Terminplanung läuft über Ihr Facility Management oder direkt mit Ihnen.",
      },
      {
        q: "Wer ist bei Mietobjekten zuständig: Eigentümer oder Mieter?",
        a: "In der Regel der Eigentümer bzw. die Hausverwaltung, da Taubenabwehr die Gebäudesubstanz betrifft. Wir erstellen das Angebot so, dass Sie es direkt an Eigentümer oder Asset Management weiterreichen können.",
      },
    ],
    cta: {
      lines: ["Der Sims ist wieder besetzt?", "Beenden wir das. Dauerhaft und unsichtbar."],
      button: "Begutachtung anfragen",
      micro: "Kostenlose Begehung. Angebot in weiterleitbarer Form für Eigentümer und FM.",
    },
    blogLinks: [
      {
        title: "Taubenabwehr-Spikes vs. Schutznetze: Welche Methode passt zu Ihrem Gebäude?",
        href: "/blog/spikes-oder-netze/",
      },
    ],
  },
  {
    slug: "mehrfamilienhaeuser",
    navLabel: "Mehrfamilienhäuser",
    tileText:
      "Balkonnetze und Spikes für Hausverwaltungen und Eigentümergemeinschaften, inklusive Beratung zu Beschluss und Kostenverteilung.",
    metaTitle: "Taubenabwehr Mehrfamilienhaus & WEG",
    metaDescription:
      "Tauben am Mehrfamilienhaus: Balkonnetze und Spikes für Hausverwaltungen und Eigentümergemeinschaften, inklusive Unterlagen für den WEG-Beschluss. StadtFix, Baden-Württemberg.",
    kicker: "Taubenabwehr für WEG & Hausverwaltung",
    h1: "Taubenabwehr für Mehrfamilienhäuser und Eigentümergemeinschaften",
    subline:
      "Beim Mehrfamilienhaus ist die Taube nur die halbe Aufgabe. Die andere Hälfte heißt Zuständigkeit, Beschluss und Kostenverteilung. StadtFix liefert beides: die Montage am Gebäude und die Unterlagen, mit denen Verwaltung und Eigentümer entscheiden können.",
    heroCta: "Angebot für Ihre WEG oder Hausverwaltung",
    image: {
      src: "/images/segments/mehrfamilienhaeuser.webp",
      alt: "Taubenabwehr am Mehrfamilienhaus, Balkonschutznetz an einem Wohngebäude",
    },
    problem: {
      h2: "Warum Taubenprobleme im Mehrfamilienhaus liegen bleiben",
      items: [
        {
          title: "Einzelne Balkone betroffen, alle diskutieren.",
          text: "Mieter im 3. OG beschweren sich, das Erdgeschoss sieht kein Problem, und die Maßnahme wartet auf die nächste Eigentümerversammlung.",
        },
        {
          title: "Unklare Zuständigkeit.",
          text: "Balkon gleich Sondernutzung, Fassade gleich Gemeinschaftseigentum. Wer zahlt was? Solange das offen ist, passiert nichts, und der Befall wächst.",
        },
        {
          title: "Mieterbeschwerden mit Fristen.",
          text: "Taubenkot und Lärm können Mietminderungsgründe sein. Für Verwaltungen ist das kein Komfortthema, sondern eines mit Datum.",
        },
        {
          title: "Halblösungen einzelner Bewohner.",
          text: "Selbst montierte Netze und Baumarkt-Spikes an einzelnen Balkonen verlagern das Problem nur zum Nachbarn und sehen entsprechend aus.",
        },
      ],
    },
    solution: {
      h2: "Eine Maßnahme fürs ganze Gebäude, beschlussfähig aufbereitet",
      items: [
        {
          title: "Balkonschutznetze.",
          text: "Fachgerecht gespannte Netze verschließen Balkone komplett: kaum sichtbar und, wo vermeidbar, ohne Bohrung in die Wärmedämmung. Einheitlich am Gebäude statt Flickwerk je Etage.",
        },
        {
          title: "Spikes an Dachrinnen, Simsen und Gauben.",
          text: "Die Landeflächen am Gemeinschaftseigentum sichern wir mit rostfreiem Edelstahl. Dort entsteht der Befall, der später auf den Balkonen landet.",
        },
        {
          title: "Unterlagen für den WEG-Beschluss.",
          text: "Sie erhalten das Angebot mit klar getrennten Positionen (Gemeinschaftseigentum / einzelne Einheiten), Fotos vom Befall und einer Kurzbeschreibung der Maßnahme, direkt verwendbar als Anlage zur Beschlussvorlage.",
        },
        {
          title: "Ein Termin, alle Einheiten.",
          text: "Wir koordinieren Balkonzugänge über die Verwaltung und montieren gesammelt statt in zehn Einzelterminen mit zehn Mietern.",
        },
      ],
    },
    faq: [
      {
        q: "Braucht die WEG einen Beschluss für Taubenabwehr?",
        a: "In der Regel ja, sobald Gemeinschaftseigentum betroffen ist, also Fassade, Dach, Dachrinnen oder die einheitliche Vernetzung von Balkonen. Wir liefern Angebot und Maßnahmenbeschreibung so aufbereitet, dass die Verwaltung sie direkt in die Beschlussvorlage übernehmen kann.",
      },
      {
        q: "Wer trägt die Kosten: Eigentümer, WEG oder Mieter?",
        a: "Maßnahmen am Gemeinschaftseigentum trägt die Gemeinschaft nach dem gültigen Kostenverteilungsschlüssel, Maßnahmen an einzelnen Einheiten meist der jeweilige Eigentümer. Wir trennen die Positionen im Angebot entsprechend. Die rechtliche Bewertung im Einzelfall gehört zur Verwaltung oder zum Anwalt.",
      },
      {
        q: "Kann ein einzelner Eigentümer nur seinen Balkon schützen lassen?",
        a: "Ja, ein einzelnes Balkonnetz ist möglich und oft der erste Schritt. Ehrlich gesagt: Bleiben die Nistplätze am Dach bestehen, weichen die Tauben auf Nachbarbalkone aus. Dauerhaft wirkt die Maßnahme am ganzen Gebäude.",
      },
    ],
    cta: {
      lines: ["Die nächste Eigentümerversammlung kommt.", "Bis dahin liegt unser Angebot vor."],
      button: "Angebot für WEG anfragen",
      micro: "Kostenlose Begehung. Angebot beschlussfähig aufbereitet, Antwort innerhalb von 24 Stunden.",
    },
    blogLinks: [
      {
        title: "Taubenabwehr in der Eigentümergemeinschaft: Ablauf, Beschluss & Kostenverteilung",
        href: "/blog/taubenabwehr-weg/",
      },
      {
        title: "Warum Tauben Ihr Dach oder Ihren Balkon lieben – und wie Sie das ändern",
        href: "/blog/warum-tauben-dach-balkon/",
      },
    ],
  },
  {
    slug: "einfamilienhaeuser",
    navLabel: "Einfamilienhäuser",
    tileText:
      "Kompakte Lösungen für Dach, Balkon und Dachrinne, dimensioniert für ein privates Budget statt für ein Industrieprojekt.",
    metaTitle: "Taubenabwehr Einfamilienhaus: Dach & Balkon",
    metaDescription:
      "Tauben vom Dach oder Balkon vertreiben, dauerhaft statt Baumarkt-Provisorium. Kompakte Lösungen fürs Einfamilienhaus, faire Festpreise. StadtFix, Baden-Württemberg.",
    kicker: "Taubenabwehr für Ihr Zuhause",
    h1: "Taubenabwehr für Einfamilienhäuser",
    subline:
      "Gurren ab fünf Uhr morgens, Kot auf Balkon und Terrasse, Nistmaterial in der Dachrinne: Tauben am Haus nerven nicht nur, sie kosten Substanz. StadtFix löst das mit kompakten Systemen zum Festpreis, dimensioniert für ein Zuhause statt für ein Industrieprojekt.",
    heroCta: "Unverbindliches Angebot für Ihr Zuhause",
    image: {
      src: "/images/segments/einfamilienhaeuser.webp",
      alt: "Taubenabwehr am Einfamilienhaus, Montage mit Hubarbeitsbühne",
    },
    problem: {
      h2: "Woran Sie merken, dass Tauben eingezogen sind",
      items: [
        {
          title: "Der Lärm beginnt vor dem Wecker.",
          text: "Gurren und Scharren auf dem Dach oder unter den Solarpanels, jeden Morgen ab Sonnenaufgang.",
        },
        {
          title: "Kot auf Balkon, Terrasse und Fensterbank.",
          text: "Wo Tauben sitzen, wird täglich neu geputzt. Und Taubenkot ist säurehaltig: Er ätzt sich in Holz, Stein und Lack.",
        },
        {
          title: "Verstopfte Dachrinnen.",
          text: "Nistmaterial in der Rinne staut Regenwasser, im schlimmsten Fall läuft es in die Fassade.",
        },
        {
          title: "Das Baumarkt-Provisorium hält einen Sommer.",
          text: "Plastikspikes, Windräder, Attrappen: Die Tauben gewöhnen sich daran, das Plastik versprödet, und nächstes Frühjahr sitzt das Paar wieder da.",
        },
      ],
    },
    solution: {
      h2: "Dauerhaft geschützt: im Umfang, den ein Zuhause braucht",
      items: [
        {
          title: "Edelstahl-Spikes an First, Rinne und Gauben.",
          text: "Rostfrei und für die Tiere ungefährlich: Sie finden schlicht keinen Halt mehr. Montiert an genau den Stellen, die die Begehung als Landeplätze zeigt.",
        },
        {
          title: "Balkonnetze nach Maß.",
          text: "Ein sauber gespanntes Netz verschließt den Balkon komplett und ist von innen wie außen kaum sichtbar. Die dauerhafte Antwort, wenn dort bereits genistet wird.",
        },
        {
          title: "Punktuelle Lösungen statt Rundum-Paket.",
          text: "Wir sichern die betroffenen Stellen, nicht das ganze Haus, wenn es das nicht braucht. Das hält den Preis in einem Rahmen, der für Privathaushalte passt.",
        },
        {
          title: "Festpreis nach Begehung.",
          text: "Sie wissen vor der Beauftragung, was es kostet. Keine Nachträge, 3 Jahre Garantie auf die Montage.",
        },
      ],
    },
    faq: [
      {
        q: "Lohnt sich ein Fachbetrieb für einen einzelnen Balkon?",
        a: "Ja, wenn das Problem wiederkehrt. Baumarkt-Lösungen kosten weniger, halten aber selten länger als eine Saison. Ein fachgerecht montiertes Netz oder Edelstahl-Spikes lösen das Problem einmal und dauerhaft, mit 3 Jahren Garantie auf die Montage.",
      },
      {
        q: "Was kostet Taubenabwehr am Einfamilienhaus?",
        a: "Das hängt vom Umfang ab: Ein einzelner Balkon kostet deutlich weniger als Dach plus Rinnen plus Gauben. Nach einer kostenlosen Begehung nennen wir einen Festpreis. Fotos der betroffenen Stellen vorab beschleunigen das Angebot.",
      },
      {
        q: "Wie lange dauert die Montage?",
        a: "Bei einem Einfamilienhaus in der Regel ein halber bis ein Tag, je nach Umfang und Zugänglichkeit. Balkonnetze sind oft an einem Vormittag montiert. Den genauen Zeitrahmen nennen wir mit dem Angebot.",
      },
    ],
    cta: {
      lines: ["Morgen wieder Gurren um fünf?", "Muss nicht sein."],
      button: "Angebot anfragen",
      micro: "Kostenlose Begehung, Festpreis, keine Verpflichtung. Antwort innerhalb von 24 Stunden.",
    },
    blogLinks: [
      {
        title: "Warum Tauben Ihr Dach oder Ihren Balkon lieben – und wie Sie das ändern",
        href: "/blog/warum-tauben-dach-balkon/",
      },
      {
        title: "Bei PV auf dem Dach: Taubenabwehr für Photovoltaikanlagen",
        href: "/taubenabwehr/photovoltaikanlagen/",
      },
    ],
  },
  {
    slug: "einkaufszentren",
    navLabel: "Einkaufszentren",
    tileText:
      "Netzlösungen für Atrien und Eingangsvordächer, dort, wo Gastronomie, Kundenverkehr und Hygieneauflagen zusammenkommen.",
    metaTitle: "Taubenabwehr für Einkaufszentren",
    metaDescription:
      "Taubenabwehr für Shoppingcenter: Netze für Atrien und Vordächer, Spikes an Werbeanlagen, Montage außerhalb der Öffnungszeiten. StadtFix, Baden-Württemberg.",
    kicker: "Taubenabwehr für Center-Management",
    h1: "Taubenabwehr für Einkaufszentren",
    subline:
      "Tausende Besucher täglich, Gastronomie im Foodcourt, offene Eingangsbereiche: Ein Einkaufszentrum verzeiht keinen sichtbaren Taubenbefall. StadtFix sichert Atrien, Vordächer und Werbeanlagen, montiert außerhalb der Öffnungszeiten und abgestimmt mit Ihrem Center-Management.",
    heroCta: "Termin für Center-Begehung vereinbaren",
    image: {
      src: "/images/segments/einkaufszentren.webp",
      alt: "Taubenabwehr am Einkaufszentrum, Montage am Eingangsvordach",
    },
    problem: {
      h2: "Was Taubenbefall im Center konkret bedeutet",
      items: [
        {
          title: "Kot dort, wo Kunden essen.",
          text: "Foodcourts, Außengastronomie, Sitzbereiche unter Vordächern: Hier ist Taubenkot kein Reinigungsthema, sondern ein Hygienerisiko mit Meldepotenzial.",
        },
        {
          title: "Der Eingang als Visitenkarte.",
          text: "Verkotete Vordächer, Leuchtreklamen und Eingangsportale sehen zehntausende Besucher pro Woche und jeder Mietinteressent bei der Objektbesichtigung.",
        },
        {
          title: "Atrien und Lichthöfe als Brutstätten.",
          text: "Windgeschützt, warm, ungestört: Innenliegende Höfe und Glasdach-Konstruktionen sind ideale Nistplätze und schwer zugänglich für die Reinigung.",
        },
        {
          title: "Beschwerden der Mieter.",
          text: "Verschmutzte Schaufenster und Eingänge landen beim Center-Management: als Ticket, als Mietminderungsdrohung, als Dauerthema im Mieterbeirat.",
        },
      ],
    },
    solution: {
      h2: "So sichern wir ein Einkaufszentrum",
      items: [
        {
          title: "Netzlösungen für Atrien und Lichthöfe.",
          text: "Wir verschließen die Brutbereiche über Kopf mit Schutznetzen, die sich in die Dachkonstruktion einfügen, für Besucher praktisch unsichtbar.",
        },
        {
          title: "Spikes an Vordächern, Portalen und Werbeanlagen.",
          text: "Leuchtbuchstaben, Simse und Vordachkanten sind die sichtbarsten Sitzplätze. Rostfreier Edelstahl sichert sie, ohne die Werbewirkung zu stören.",
        },
        {
          title: "Reinigung und Desinfektion der Befallsbereiche.",
          text: "Vor der Montage, mit Dokumentation für Ihr Hygiene- und Facility-Reporting.",
        },
        {
          title: "Montage außerhalb der Öffnungszeiten.",
          text: "Nachts oder vor Ladenöffnung, abschnittsweise geplant mit Center-Management und Sicherheitsdienst. Kein gesperrter Eingang zur Stoßzeit, keine Hubbühne zwischen den Kunden.",
        },
      ],
    },
    faq: [
      {
        q: "Läuft die Montage während der Öffnungszeiten?",
        a: "Nein. Arbeiten in Kunden- und Eingangsbereichen legen wir in die Nacht oder vor Ladenöffnung. Die Abschnittsplanung stimmen wir mit Center-Management und Sicherheitsdienst ab, damit Anlieferung und Reinigung parallel weiterlaufen können.",
      },
      {
        q: "Sind die Netze im Atrium sichtbar?",
        a: "Aus Besucherperspektive kaum. Die Netze werden in die Dach- oder Trägerkonstruktion eingepasst und in passender Farbe gewählt. Aus mehreren Metern Entfernung nimmt sie das Auge nicht mehr wahr.",
      },
      {
        q: "Bekommen wir eine Dokumentation für unser Facility-Reporting?",
        a: "Ja. Sie erhalten die Maßnahme dokumentiert: gesicherte Bereiche, eingesetzte Systeme, Reinigung und Desinfektion mit Datum. Damit haben Sie den Nachweis für Eigentümer, Mieter und Hygienekontrollen in einem Dokument.",
      },
    ],
    cta: {
      lines: ["Das nächste Mieter-Ticket zum Thema Tauben", "muss nicht kommen."],
      button: "Center-Begehung vereinbaren",
      micro: "Kostenlose Begehung, auch außerhalb der Öffnungszeiten. Antwort innerhalb von 24 Stunden.",
    },
    blogLinks: [
      {
        title: "Taubenkot: Gesundheitsrisiken und warum schnelles Handeln wichtig ist",
        href: "/blog/taubenkot-gesundheitsrisiko/",
      },
    ],
  },
  {
    slug: "stadien",
    navLabel: "Stadien",
    tileText:
      "Großflächige Netzsysteme für Tribünendächer und Trägerkonstruktionen. Montage abgestimmt auf Ihren Veranstaltungskalender.",
    metaTitle: "Taubenabwehr für Stadien & Veranstaltungsorte",
    metaDescription:
      "Taubenabwehr für Stadien: Großflächen-Netze für Tribünendächer, Spikes an Trägern, Montage im Takt Ihres Veranstaltungskalenders. StadtFix, Baden-Württemberg.",
    kicker: "Taubenabwehr für Stadien & Arenen",
    h1: "Taubenabwehr für Stadien und Großveranstaltungsorte",
    subline:
      "Tribünendächer und Stahlfachwerk bieten Tauben tausende geschützte Nistplätze, direkt über Sitzplätzen, Treppen und Gastro-Ständen. StadtFix sichert Großkonstruktionen mit Netzsystemen und plant die Montage in den Fenstern Ihres Veranstaltungskalenders.",
    heroCta: "Individuelles Konzept anfragen",
    image: {
      src: "/images/segments/stadien.webp",
      alt: "Taubenabwehr für Stadien, Netzmontage unter einer Stahldach-Konstruktion",
    },
    problem: {
      h2: "Warum Stadien ein Sonderfall sind",
      items: [
        {
          title: "Kot direkt über den Zuschauern.",
          text: "Nistplätze im Dachfachwerk bedeuten Kot auf Sitzschalen, Treppen und Handläufen, bei jedem Heimspiel neu und für Besucher unübersehbar.",
        },
        {
          title: "Hygiene an Kiosken und Gastro-Ständen.",
          text: "Offene Verkaufsstände unter besiedelten Trägern sind ein Hygieneproblem, das Kontrolleure genauso sehen wie Gäste.",
        },
        {
          title: "Dimension und Zugänglichkeit.",
          text: "Spannweiten von Tribünendächern, Höhen von 20 Metern und mehr, kaum Standflächen für Gerüste. Standardmontage funktioniert hier nicht.",
        },
        {
          title: "Kaum Zeitfenster.",
          text: "Spieltage, Konzerte, Pflegezyklen des Rasens: Die Montage muss in die Lücken des Kalenders passen und pünktlich fertig sein.",
        },
      ],
    },
    solution: {
      h2: "Großkonstruktionen sichern, im Takt des Spielplans",
      items: [
        {
          title: "Großflächige Netzsysteme für Tribünendächer.",
          text: "Wir verschließen das Fachwerk unterhalb der Dachkonstruktion: Tauben kommen an die Nistplätze gar nicht mehr heran. Ausgelegt auf Spannweite, Windlast und die Lebensdauer, die eine Arena verlangt.",
        },
        {
          title: "Spikes an Trägern, Kanten und Kamerapodesten.",
          text: "Für Landeflächen außerhalb der vernetzten Bereiche: Videowände, Flutlichttraversen, Brüstungen.",
        },
        {
          title: "Höhenzugang eingeplant.",
          text: "Arbeitsbühnen, Steiger oder seilunterstützter Zugang: Wir planen die Zugangstechnik von Anfang an ins Konzept ein, nicht als Nachtrag.",
        },
        {
          title: "Montage nach Veranstaltungskalender.",
          text: "Wir arbeiten in den Fenstern zwischen den Terminen: abschnittsweise, mit verbindlichem Enddatum vor dem nächsten Event.",
        },
      ],
    },
    faq: [
      {
        q: "Kann zwischen zwei Heimspielen montiert werden?",
        a: "Ja, genau dafür planen wir abschnittsweise. Welcher Bereich in welchem Fenster gesichert wird, legen wir vorab mit Ihrem Betriebsteam fest, mit verbindlichem Enddatum vor der nächsten Veranstaltung.",
      },
      {
        q: "Wie werden schwer zugängliche Dachbereiche erreicht?",
        a: "Je nach Konstruktion mit Arbeitsbühnen, Teleskopsteigern oder seilunterstütztem Zugang. Die Zugangstechnik ist Teil unseres Konzepts und des Festpreises. Sie taucht nicht später als Nachtrag auf.",
      },
      {
        q: "Halten die Netze Wind und Wetter im Stadion stand?",
        a: "Ja. Für Großkonstruktionen setzen wir Netzsysteme ein, die auf Windlast und UV-Belastung ausgelegt sind, gespannt mit Edelstahl-Randseilen. Auf die Montage geben wir 3 Jahre Garantie.",
      },
    ],
    cta: {
      lines: ["Vor der neuen Saison", "sollte das Dach sauber sein."],
      button: "Konzept anfragen",
      micro: "Kostenlose Erstbegehung mit Ihrem Betriebsteam. Antwort innerhalb von 24 Stunden.",
    },
    blogLinks: [
      {
        title: "Taubenvergrämung ohne Tierleid: Diese Methoden wirken dauerhaft",
        href: "/blog/tierfreundliche-taubenvergraemung/",
      },
    ],
  },
  {
    slug: "innenstadthaeuser",
    navLabel: "Innenstadthäuser & Altbauten",
    tileText:
      "Farblich angepasste, denkmalschutzkonforme Systeme für historische Fassaden in Lagen mit hoher Taubendichte.",
    metaTitle: "Taubenabwehr Innenstadt & Denkmalschutz",
    metaDescription:
      "Taubenabwehr für Altbauten und denkmalgeschützte Fassaden: farblich angepasste, unauffällige Systeme, abgestimmt mit der Denkmalbehörde. StadtFix, Baden-Württemberg.",
    kicker: "Taubenabwehr für Altbau & Denkmalschutz",
    h1: "Taubenabwehr für Innenstadthäuser und Altbauten",
    subline:
      "In der Innenstadt ist der Besiedlungsdruck am höchsten und die Fassade am empfindlichsten. StadtFix sichert Stuckgesimse, Erker und Portale mit Systemen, die man auf drei Meter nicht mehr sieht, und übernimmt bei Bedarf die Abstimmung mit der Denkmalbehörde.",
    heroCta: "Beratung für denkmalgeschützte Gebäude",
    image: {
      src: "/images/segments/innenstadthaeuser.webp",
      alt: "Taubenabwehr am Innenstadthaus, unauffällige Spikes an der Fensterbank",
    },
    problem: {
      h2: "Warum Altbauten die Lieblingsgebäude der Stadttaube sind",
      items: [
        {
          title: "Gesimse, Erker, Fensterläden: lauter Landeplätze.",
          text: "Historische Fassaden sind reich gegliedert. Jeder Vorsprung, den der Baumeister zur Zierde setzte, ist heute ein Sitzplatz.",
        },
        {
          title: "Kotsäure gegen Sandstein und Stuck.",
          text: "Was Beton nur langsam angreift, zersetzt weichen Naturstein und Stuck deutlich schneller. Am Altbau ist der Substanzschaden kein theoretisches Risiko.",
        },
        {
          title: "Der Gehweg gehört mit zum Problem.",
          text: "Kot auf öffentlichen Gehwegen vor dem Haus bedeutet Beschwerden von Nachbarn und Passanten und Reinigungspflichten für den Eigentümer.",
        },
        {
          title: "Denkmalschutz begrenzt die Mittel.",
          text: "Nicht jedes System darf an eine geschützte Fassade. Falsch montiert drohen Auflagen und Rückbau, und der Befall bleibt trotzdem.",
        },
      ],
    },
    solution: {
      h2: "Unsichtbar für Passanten, abgestimmt mit der Behörde",
      items: [
        {
          title: "Farblich angepasste Spike- und Drahtsysteme.",
          text: "Edelstahl in der Tönung der Fassade, montiert entlang der Gesimslinien. Aus Fußgängerperspektive verschwinden die Systeme in der Architektur.",
        },
        {
          title: "Reversible Befestigung, wo der Denkmalschutz es verlangt.",
          text: "Wir wählen Befestigungen, die die Bausubstanz möglichst wenig antasten und rückbaubar sind. Das ist ein zentrales Kriterium der Denkmalbehörden.",
        },
        {
          title: "Abstimmung mit der Denkmalbehörde.",
          text: "Auf Wunsch bereiten wir die Unterlagen für die denkmalrechtliche Abstimmung vor: Fotos, Systembeschreibung, Befestigungsdetails. Sie reichen ein, oder wir begleiten den Termin.",
        },
        {
          title: "Reinigung empfindlicher Oberflächen.",
          text: "Kot auf Sandstein und Stuck entfernen wir materialschonend, bevor montiert wird, denn aggressive Reinigung richtet am Altbau mehr Schaden an als die Tauben.",
        },
      ],
    },
    faq: [
      {
        q: "Ist Taubenabwehr an denkmalgeschützten Gebäuden erlaubt?",
        a: "Ja, sie muss aber mit der Denkmalbehörde abgestimmt werden. Genehmigungsfähig sind in der Regel optisch zurückhaltende, reversibel befestigte Systeme in Fassadenfarbe. Wir bereiten die Unterlagen für die Abstimmung vor.",
      },
      {
        q: "Sieht man die Systeme an der historischen Fassade?",
        a: "Aus Passantenperspektive praktisch nicht. Farblich angepasste Spikes und gespannte Drähte entlang der Gesimslinien nimmt das Auge ab wenigen Metern Entfernung nicht mehr wahr. Bei der Begehung zeigen wir Ihnen Materialmuster am Objekt.",
      },
      {
        q: "Warum kommen die Tauben in der Innenstadt immer wieder?",
        a: "Weil der Besiedlungsdruck hoch ist: Stadttauben leben in großer Zahl auf engem Raum und kehren an etablierte Plätze zurück. Vergrämen allein reicht deshalb nicht. Nur dauerhaft gesicherte Landeflächen und Nistplätze lösen das Problem.",
      },
    ],
    cta: {
      lines: ["Die Fassade hat 120 Jahre gehalten.", "Die Tauben müssen nicht bleiben."],
      button: "Beratung anfragen",
      micro: "Kostenlose Begehung, auf Wunsch mit Unterlagen für die Denkmalbehörde.",
    },
    blogLinks: [
      {
        title: "Ist Taubenabwehr genehmigungspflichtig? Rechtliches, Tierschutz & Denkmalschutz",
        href: "/blog/taubenabwehr-rechtlich/",
      },
    ],
  },
];

export function getSegment(slug: string): Segment | undefined {
  return segments.find((s) => s.slug === slug);
}
