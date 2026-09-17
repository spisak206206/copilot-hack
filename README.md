# Autoservisný systém / Diagnostika (A.S.D.)

Komplexný autoservisný a diagnostický systém napísaný v **C++** s podporou pre PC (Windows/Linux), macOS a smartfóny s hlasovým ovládaním.

---

## 1. Prihlasovacie údaje (Roles & Credentials)

Systém obsahuje 7 predvolených rola účtov s presne definovanými prístupmi:

| Rola | Meno (Username) | Heslo (Password) |
|---|---|---|
| **Administrátor** | `admin` | `admin` |
| **Majiteľ** | `majitel` | `majitel` |
| **Riaditeľ** | `riaditel` | `riaditel` |
| **Prijímací technik** | `prijimaci technik` | `technik` |
| **Skladník** | `skladnik` | `skladnik` |
| **Mechanik** | `mechanik` | `mechanik` |
| **Účtovník** | `uctovnik` | `uctovnik` |

---

## 2. Prehľad modulov a programov

A.S.D. obsahuje 8 prepojených programov:

- **Program 1: Launcher / Prihlasovacie rozhranie** - Univerzálny vstupný bod s overením roly a hlasovým ovládaním.
- **Program 2: Admin rozhranie** - Diagnostika a oprava programu, generovanie hesiel, vzdialená podpora, vnútorná komunikácia.
- **Program 3: Majiteľ rozhranie** - Sledovanie a koordinácia firiem, priama komunikácia s riaditeľom, kontrola účtovníctva cez účtovníka, pozorovanie účtov.
- **Program 4: Riaditeľ rozhranie** - Koordinácia firiem/pobočiek, komunikácia s majiteľom a zamestnancami.
- **Program 5: Prijímací technik** - Príjem záručných, pozáručných a bežných zákaziek, úprava, ukončenie, fakturácia v rámci e-faktúr, PDF na server.
- **Program 6: Skladník** - Skladové hospodárstvo, príjemky a výdajky tovaru.
- **Program 7: Mechanik** - Diagnostický program, riadený/automatický prístup k riadiacim jednotkám (ECU), protokoly pre svetové značky (VW, Skoda, Audi, BMW, Mercedes, Toyota, Ford), komunikácia so skladom a technikom.
- **Program 8: Účtovník** - Úplný prístup k faktúram, príjemkám a výdajkám, účtovné rozhranie a komunikácia.

---

## 3. Sostavenie a spustenie (Build Instructions)

Projekt sa zostavuje pomocou **CMake** a **MSVC** / **GCC** / **Clang**:

```powershell
mkdir build
cd build
cmake ..
cmake --build . --config Release
```

Spustenie aplikácie:
```powershell
.\Release\asd_app.exe
```

Spustenie testov:
```powershell
.\Release\asd_tests.exe
```

---

## 3b. GUI / API server (ASP.NET Core, gui/)

Okrem C++ jadra obsahuje repozitar aj lahky ASP.NET Core (net10.0) server v priecinku gui/, ktory sprava staticke web rozhranie (gui/wwwroot) a REST API pod /api s trvalou perzistenciou v SQLite (cez EF Core).

### Spustenie

```powershell
cd gui
dotnet run
```

Server bezi predvolene na http://0.0.0.0:5050 (da sa zmenit cez --urls alebo premennu ASPNETCORE_URLS).

### Umiestnenie dat (SQLite)

Databaza asd.db sa vytvara automaticky pri prvom spusteni v priecinku data/ vedla binariek servera (napr. gui/bin/Debug/net10.0/data/asd.db pri dotnet run, alebo <publish-output>/data/asd.db po dotnet publish). Priecinok aj schema (tabulky WorkOrders, InventoryItems, Invoices) sa vytvoria automaticky pri starte (EnsureCreated), data prezivaju restart servera.

Umiestnenie dat je mozne prepisat:
- ASD_DATA_DIR (konfiguracna hodnota / env premenna) - zmeni priecinok, v ktorom sa hlada/vytvara asd.db.
- ConnectionStrings:AsdDb - uplne vlastny EF Core connection string (napr. iny nazov suboru alebo ina DB).

### REST API

- GET/POST /api/work-orders, GET/PUT/DELETE /api/work-orders/{id} - servisne zakazky.
- GET/POST /api/inventory, GET/PUT/DELETE /api/inventory/{id} - skladove polozky.
- GET/POST /api/invoices, GET/PUT/DELETE /api/invoices/{id} - faktury.
- GET /api/status - zdravotny/stavovy endpoint (povodne spravanie zachovane).

Existujuce staticke frontend rozhranie (gui/wwwroot) bezi bez zmien; nove API je cisto aditivne rozsirenie servera.

## 4. Hlasové ovládanie (Voice Control)

A.S.D. podporuje rozpoznávanie hlasových príkazov v slovenskom jazyku pre mobilné a PC rozhrania:
- *"Otvor zákazku"* -> Vytvorenie novej servisnej zákazky.
- *"Spusti diagnostiku"* -> Automatické skenovanie ECU a DTC chýb.
- *"Sklad"* -> Kontrola zásob náhradných dielov.
- *"Vytvor faktúru"* -> Generovanie e-faktúry a PDF vzoru.
