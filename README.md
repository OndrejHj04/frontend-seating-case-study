# 🧑🏻‍🚀 NFCtron Frontend Case Study (Seating, 2024)

> Aplikace kterou jsem vytvořil jako součást výběrového řízení do NFCtron. Předpřipravený template obsahoval UI a API endpointy a úkolem bylo dodělat funkční řešení. Volbou frameworku jsem nebyl limitován.

## 🌱 Funkční požadavky

- přihlášení do aplikace
- zobrazení informací o příslušném eventu
- zobrazení volných míst a jejich přidání do košíku
- zpracování objednávky

## ⚡ Featury aplikace

- průběžné ukládání košíku
- přidání eventu do google kalendáře (pouze pro schválené účty)
- zachování user session

## ⚙️ Použité technologie

Framework: Next.js\
UI: Tailwind, Radix-UI, Sweetalert, Lucide-React\
State management: Zustand\
Zpracování user session: JWT token\
E2E testování: Cypress\
Další knihovny: React Hook Form, Dayjs

## 🔭 Možná budoucí vylepšení

- [ ]  Dark mode
- [ ]  Rozlišení mezi druhy sedadla
- [x]  Copy-to-clipboard adresa eventu
- [x]  Input password toggle zobrazení hesla
- [ ]  Modal reusable component

## 🧑‍💻 Dev log

Na začátku jsem dostal zpracované uživatelské rozhraní a API endpointy. Vše fungovalo tak jak mělo a nebyl problém se okamžitě pustit do dokončování aplikace. "Plain" React jsem obohatil o Next.js, jelikož jsem zde viděl příležitosti kde framework využít (SSR, práce s cookies). Radix-ui, jež bylo použito na v templatu, jsem nikdy nepoužíval a tak bylo ze začátku těžší si na jinou knihovnu komponent zvyknout. Bylo jasné, že state management aplikace nebude rozsáhlý a proto jsem zvolil Zustand.

I když tato aplikace obsahuje méně formulářů (konkrétně jeden a ten samý na dvou místech), než ty na kterých obvykle dělám, přesto jsem na jejich řešení zvolil React Hook Form. Už předpřipravenou sad UI komponent jsem rozšířil o input, který zde na formulářích používám. Nebyl by tedy problém v budoucnu aplikaci obohatit o více formulářů.

Jak user session, tak průběžné ukládání košíku je zařízeno pomocí cookies funkce v Next.js. User session používá JWT token s platností 1 hodina a ukládání košíku uchovává seatId jednotlivých sedadel. Z důvodu, že endpoint `event/tickets` vrací vždy jiné rozležení sálu, bylo nutné fetchovat data a porovnávat s cookies session v jedné funkci. Jinak by totiž uložené seatId nenašlo odpovídající sedadlo. Následně se lístky získané z cookies uloží do state managementu stejným principem, jako by je tam přidal uživatel kliknutím.

Přidání eventu by v ideálním případě mělo vytvořit event v google kalendáři *jakémukoliv* uživateli, který tlačítko zmáčkne. Jelikož je zde přihlašování zpracováno jen tak na-oko a za uživatelem nestojí reálný email, tak není možné použít jeho session pro zpracování požadavků do google kalendáře. Jedinou možností (která mě napadla 🧠), byla autentizace uživatele pomocí google účtu po kliknutí na tlačítku "Add to calendar". Bohužel však není možné (spíš mě se nepovedlo) bez oficiálního vydání aplikace získávat souhlas od všech uživatelů k manipulaci s jejich kalendářem a tudýž zatím tato featura funguje jen napůl (*neschválení* uživatelé dostanou chybu "přístup neschválen").

Pomocí e2e testování jsem se rozhodl zaměřit na logiku přihlašování, manipulaci s košíkem a celkové zpracování objednávky. Více než samotná aplikace se však otestovaly moje bídné schopnosti psaní testů, jelikož mnou psané testy rozhodně nepodléhají best-practices. Naštěstí se přes moje commandy Cypress prokousal a několikrát mojí aplikaci schválil zelenou fajfkou🟢💯.
