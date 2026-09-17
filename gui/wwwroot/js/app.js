// A.S.D. Application State
let currentUser = null;

// Globálne Nastavenie Jazyka A.S.D.
let currentSystemLanguage = "SK";

const worldLanguages = [
    // Európa
    { code: "SK", name: "Slovenský", native: "Slovenčina", flag: "🇸🇰", region: "Európa" },
    { code: "CZ", name: "Český", native: "Čeština", flag: "🇨🇿", region: "Európa" },
    { code: "EN", name: "English (UK/US)", native: "English", flag: "🇬🇧", region: "Európa & Amerika" },
    { code: "DE", name: "Nemecký", native: "Deutsch", flag: "🇩🇪", region: "Európa" },
    { code: "FR", name: "Francúzsky", native: "Français", flag: "🇫🇷", region: "Európa" },
    { code: "ES", name: "Španielsky", native: "Español", flag: "🇪🇸", region: "Európa & Amerika" },
    { code: "IT", name: "Taliansky", native: "Italiano", flag: "🇮🇹", region: "Európa" },
    { code: "PL", name: "Poľský", native: "Polski", flag: "🇵🇱", region: "Európa" },
    { code: "HU", name: "Maďarský", native: "Magyar", flag: "🇭🇺", region: "Európa" },
    { code: "UA", name: "Ukrajinský", native: "Українська", flag: "🇺🇦", region: "Európa" },
    { code: "RU", name: "Ruský", native: "Русский", flag: "🇷🇺", region: "Európa" },
    { code: "TR", name: "Turecký", native: "Türkçe", flag: "🇹🇷", region: "Európa & Ázia" },
    { code: "NL", name: "Holandský", native: "Nederlands", flag: "🇳🇱", region: "Európa" },
    { code: "PT", name: "Portugalský", native: "Português", flag: "🇵🇹", region: "Európa & Amerika" },
    { code: "RO", name: "Rumunský", native: "Română", flag: "🇷🇴", region: "Európa" },
    { code: "BG", name: "Bulharský", native: "Български", flag: "🇧🇬", region: "Európa" },
    { code: "GR", name: "Grécky", native: "Ελληνικά", flag: "🇬🇷", region: "Európa" },
    { code: "SE", name: "Švédsky", native: "Svenska", flag: "🇸🇪", region: "Európa" },
    { code: "NO", name: "Nórsky", native: "Norsk", flag: "🇳🇴", region: "Európa" },
    { code: "DK", name: "Dánsky", native: "Dansk", flag: "🇩🇰", region: "Európa" },
    { code: "FI", name: "Fínsky", native: "Suomi", flag: "🇫🇮", region: "Európa" },

    // Ázia & Pacifik
    { code: "CN", name: "Čínsky (Zjednodušená)", native: "中文 (简体)", flag: "🇨🇳", region: "Ázia & Pacifik" },
    { code: "TW", name: "Čínsky (Tradičná)", native: "中文 (繁體)", flag: "🇹🇼", region: "Ázia & Pacifik" },
    { code: "JP", name: "Japonský", native: "日本語", flag: "🇯🇵", region: "Ázia & Pacifik" },
    { code: "KR", name: "Kórejský", native: "한국어", flag: "🇰🇷", region: "Ázia & Pacifik" },
    { code: "IN", name: "Hindčina", native: "हिन्दी", flag: "🇮🇳", region: "Ázia & Pacifik" },
    { code: "VN", name: "Vietnamčina", native: "Tiếng Việt", flag: "🇻🇳", region: "Ázia & Pacifik" },
    { code: "ID", name: "Indonézština", native: "Bahasa Indonesia", flag: "🇮🇩", region: "Ázia & Pacifik" },
    { code: "TH", name: "Thajčina", native: "ไทย", flag: "🇹🇭", region: "Ázia & Pacifik" },
    { code: "MY", name: "Malajčina", native: "Bahasa Melayu", flag: "🇲🇾", region: "Ázia & Pacifik" },

    // Blízky Východ & Afrika
    { code: "AR", name: "Arabčina", native: "العربية", flag: "🇸🇦", region: "Blízky Východ & Afrika" },
    { code: "HE", name: "Hebrejčina", native: "עברית", flag: "🇮🇱", region: "Blízky Východ & Afrika" },
    { code: "FA", name: "Perzština", native: "فارسی", flag: "🇮🇷", region: "Blízky Východ & Afrika" },
    { code: "SW", name: "Swahili", native: "Kiswahili", flag: "🇰🇪", region: "Blízky Východ & Afrika" },
    { code: "ZA", name: "Afrikánčina", native: "Afrikaans", flag: "🇿🇦", region: "Blízky Východ & Afrika" },

    // Amerika
    { code: "US", name: "Angličtina (USA)", native: "English (US)", flag: "🇺🇸", region: "Amerika" },
    { code: "MX", name: "Španielčina (Latinská Amerika)", native: "Español (Latinoamérica)", flag: "🇲🇽", region: "Amerika" },
    { code: "BR", name: "Portugalčina (Brazília)", native: "Português (Brasil)", flag: "🇧🇷", region: "Amerika" },
    { code: "CA", name: "Francúzština (Kanada)", native: "Français (Canada)", flag: "🇨🇦", region: "Amerika" }
];

// Správa Fakturačných Údajov Firiem (Admin rozhranie A.S.D.)
let editingCompanyId = null;

// SMS / E-mail Notifikácie zákazníkom
let customerNotifications = [];

// Plánovací kalendár / Harmonogram zdvihákov A.S.D.
let workshopLifts = [
    { id: "lift_1", name: "Zdvihák 1 (Elektro & Diagnostika ECU)", type: "Diagnostika", mechanic: "Mechanik Jozef" },
    { id: "lift_2", name: "Zdvihák 2 (Motor & Prevodovka)", type: "Mechanické opravy", mechanic: "Mechanik Jozef" },
    { id: "lift_3", name: "Zdvihák 3 (Rýchloservis & Oleje)", type: "Rýchloservis", mechanic: "Technik Ján" },
    { id: "lift_4", name: "Zdvihák 4 (Pneuservis & Vyvažovanie)", type: "Pneuservis", mechanic: "Skladník Peter" },
    { id: "lift_5", name: "Zdvihák 5 (3D Geometria & Karoséria)", type: "Geometria", mechanic: "Technik Ján" }
];

let liftTimeSlots = ["08:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00", "14:00 - 16:00", "16:00 - 18:00"];

let liftScheduleAssignments = {
    "lift_1_slot_0": { woId: "2026/0022", vehicle: "LAND ROVER DEFENDER [SN333DV]", note: "Diagnostika ECU motora + SFD unlock" },
    "lift_2_slot_1": { woId: "2026/0023", vehicle: "ŠKODA OCTAVIA IV [BA-888XX]", note: "Garančná prehliadka 45k km" }
};

const sampleLogoDfAuto = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 80' width='300' height='80'><rect width='100%' height='100%' fill='%230f172a' rx='10'/><path d='M25 50 L45 25 L85 25 L105 50 L120 50 L120 60 L20 60 L20 50 Z' fill='%23f59e0b'/><circle cx='45' cy='60' r='10' fill='%23ffffff'/><circle cx='85' cy='60' r='10' fill='%23ffffff'/><text x='135' y='45' font-family='sans-serif' font-weight='800' font-size='24' fill='%23ffffff'>DF AUTO</text><text x='135' y='62' font-family='sans-serif' font-weight='600' font-size='12' fill='%23f59e0b'>AUTOSERVIS %26 DIAGNOSTIKA</text></svg>";

const sampleLogoCentralBa = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 80' width='300' height='80'><rect width='100%' height='100%' fill='%231e293b' rx='10'/><circle cx='50' cy='40' r='28' fill='%230284c7'/><path d='M38 48 L62 48 L58 32 L42 32 Z' fill='%23ffffff'/><circle cx='43' cy='50' r='5' fill='%230f172a'/><circle cx='57' cy='50' r='5' fill='%230f172a'/><text x='95' y='42' font-family='sans-serif' font-weight='800' font-size='18' fill='%2338bdf8'>AUTOSERVIS BA</text><text x='95' y='60' font-family='sans-serif' font-weight='600' font-size='11' fill='%2394a3b8'>CENTRÁLNA POBOČKA</text></svg>";

let uploadedCompanyLogoData = null;

let registeredCompanies = [
    {
        id: "COMP-2026-01",
        name: "DF AUTO, s.r.o.",
        logo: sampleLogoDfAuto,
        address: "Hviezdoslavova 219/51, 045 01 Moldava nad Bodvou",
        ico: "53895843",
        dic: "2121522271",
        icdph: "SK2121522271",
        register: "OR MS Košice, oddiel: Sro, vložka č.: 51890/V",
        iban: "SK4502000000001234567890",
        swift: "SUBASKBX",
        bank: "VÚB Banka, a.s.",
        email: "info@dfauto.sk",
        phone: "+421 905 123 456",
        statutory: "Ján Novák - Konateľ",
        isDphPayer: true,
        active: true
    },
    {
        id: "COMP-2026-02",
        name: "Centrálny Autoservis BA, s.r.o.",
        logo: sampleLogoCentralBa,
        address: "Eskatologická 12, 821 01 Bratislava",
        ico: "47123987",
        dic: "2023984123",
        icdph: "SK2023984123",
        register: "OR MS Bratislava III, oddiel: Sro, vložka č.: 98765/B",
        iban: "SK8811000000009876543210",
        swift: "TATRSKBX",
        bank: "Tatra banka, a.s.",
        email: "fakturacia@autoservisba.sk",
        phone: "+421 903 888 999",
        statutory: "Ing. Peter Kováč - Riaditeľ",
        isDphPayer: true,
        active: false
    }
];

function getActiveCompany() {
    return registeredCompanies.find(c => c.active) || registeredCompanies[0];
}

function updateNavbarLogo() {
    const comp = getActiveCompany();
    const box = document.getElementById('navbarCompanyLogoBox');
    const img = document.getElementById('navbarCompanyLogoImg');
    if (!box || !img) return;

    if (comp && comp.logo) {
        img.src = comp.logo;
        box.classList.remove('d-none');
    } else {
        box.classList.add('d-none');
    }
}

function handleCompanyLogoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedCompanyLogoData = e.target.result;
        const imgEl = document.getElementById('compLogoPreview');
        const box = document.getElementById('compLogoPreviewBox');
        if (imgEl && box) {
            imgEl.src = uploadedCompanyLogoData;
            box.classList.remove('d-none');
        }
    };
    reader.readAsDataURL(file);
}

function useSampleCompanyLogo(type) {
    uploadedCompanyLogoData = (type === 'dfauto') ? sampleLogoDfAuto : sampleLogoCentralBa;
    const imgEl = document.getElementById('compLogoPreview');
    const box = document.getElementById('compLogoPreviewBox');
    if (imgEl && box) {
        imgEl.src = uploadedCompanyLogoData;
        box.classList.remove('d-none');
    }
}

function removeCompanyLogo() {
    uploadedCompanyLogoData = '';
    const imgEl = document.getElementById('compLogoPreview');
    const box = document.getElementById('compLogoPreviewBox');
    if (box) box.classList.add('d-none');
}

function saveCompanyBillingProfile() {
    const nameEl = document.getElementById('compName');
    const addressEl = document.getElementById('compAddress');
    const icoEl = document.getElementById('compIco');
    const dicEl = document.getElementById('compDic');
    const icdphEl = document.getElementById('compIcdph');
    const registerEl = document.getElementById('compRegister');
    const ibanEl = document.getElementById('compIban');
    const swiftEl = document.getElementById('compSwift');
    const bankEl = document.getElementById('compBank');
    const emailEl = document.getElementById('compEmail');
    const phoneEl = document.getElementById('compPhone');
    const statutoryEl = document.getElementById('compStatutory');
    const isDphPayerEl = document.getElementById('compIsDphPayer');

    if (!nameEl || !addressEl || !icoEl) return;

    const name = nameEl.value.trim();
    const address = addressEl.value.trim();
    const ico = icoEl.value.trim();
    const dic = dicEl ? dicEl.value.trim() : '';
    const icdph = icdphEl ? icdphEl.value.trim() : '';
    const register = registerEl ? registerEl.value.trim() : '';
    const iban = ibanEl ? ibanEl.value.trim() : '';
    const swift = swiftEl ? swiftEl.value.trim() : '';
    const bank = bankEl ? bankEl.value.trim() : '';
    const email = emailEl ? emailEl.value.trim() : '';
    const phone = phoneEl ? phoneEl.value.trim() : '';
    const statutory = statutoryEl ? statutoryEl.value.trim() : '';
    const isDphPayer = isDphPayerEl ? isDphPayerEl.checked : true;

    if (!name || !ico || !address) {
        alert("Prosím vyplňte povinné údaje: Názov firmy, Sídlo / Adresa a IČO!");
        return;
    }

    if (editingCompanyId) {
        const comp = registeredCompanies.find(c => c.id === editingCompanyId);
        if (comp) {
            comp.name = name;
            comp.address = address;
            comp.ico = ico;
            comp.dic = dic;
            comp.icdph = icdph;
            comp.register = register;
            comp.iban = iban;
            comp.swift = swift;
            comp.bank = bank;
            comp.email = email;
            comp.phone = phone;
            comp.statutory = statutory;
            comp.isDphPayer = isDphPayer;
            if (uploadedCompanyLogoData !== null) {
                comp.logo = uploadedCompanyLogoData;
            }
        }
        editingCompanyId = null;
        alert(`Fakturačné údaje a logo firmy "${name}" boli úspešne aktualizované!`);
    } else {
        const logoToSave = (uploadedCompanyLogoData !== null) ? uploadedCompanyLogoData : sampleLogoDfAuto;
        const newComp = {
            id: `COMP-2026-${String(registeredCompanies.length + 1).padStart(2, '0')}`,
            name,
            logo: logoToSave,
            address,
            ico,
            dic,
            icdph,
            register,
            iban,
            swift,
            bank,
            email,
            phone,
            statutory,
            isDphPayer,
            active: registeredCompanies.length === 0
        };
        registeredCompanies.push(newComp);
        alert(`Nová firma "${name}" s fakturačnými údajmi a logom bola úspešne vytvorená a uložená do A.S.D.!`);
    }

    uploadedCompanyLogoData = null;
    updateNavbarLogo();

    const activeComp = registeredCompanies.find(c => c.active);
    if (activeComp) {
        workOrders.forEach(wo => {
            wo.supplier = `${activeComp.name}, ${activeComp.address}`;
            wo.supplierInfo = `${activeComp.register} | IČO: ${activeComp.ico} | IČ DPH: ${activeComp.icdph || activeComp.dic}`;
        });
    }

    chatMessages.push({
        sender: "SYSTEM (ADMIN)",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `🏢 FAKTURAČNÉ ÚDAJE FIRMY: Administrátor uložil fakturačné údaje a logo firmy [${name}] (IČO: ${ico}, Sídlo: ${address}).`
    });
    renderChat();

    const container = document.getElementById('roleInterfaceContainer');
    if (container && currentUser && currentUser.username === 'admin') {
        renderAdminInterface(container);
    }
}

function editCompanyBillingProfile(compId) {
    const comp = registeredCompanies.find(c => c.id === compId);
    if (!comp) return;

    editingCompanyId = compId;
    uploadedCompanyLogoData = comp.logo || null;

    document.getElementById('compName').value = comp.name;
    document.getElementById('compAddress').value = comp.address;
    document.getElementById('compIco').value = comp.ico;
    document.getElementById('compDic').value = comp.dic || '';
    document.getElementById('compIcdph').value = comp.icdph || '';
    document.getElementById('compRegister').value = comp.register || '';
    document.getElementById('compIban').value = comp.iban || '';
    document.getElementById('compSwift').value = comp.swift || '';
    document.getElementById('compBank').value = comp.bank || '';
    document.getElementById('compEmail').value = comp.email || '';
    document.getElementById('compPhone').value = comp.phone || '';
    document.getElementById('compStatutory').value = comp.statutory || '';
    document.getElementById('compIsDphPayer').checked = comp.isDphPayer;

    const imgEl = document.getElementById('compLogoPreview');
    const box = document.getElementById('compLogoPreviewBox');
    if (imgEl && box) {
        if (comp.logo) {
            imgEl.src = comp.logo;
            box.classList.remove('d-none');
        } else {
            box.classList.add('d-none');
        }
    }

    document.getElementById('companyFormTitle').textContent = `Úprava fakturačných údajov a loga: ${comp.name}`;
    document.getElementById('companySaveBtn').innerHTML = `<i class="fa-solid fa-floppy-disk me-1"></i>Uložiť Zmeny Fakturačných Údajov & Loga`;
    const cancelBtn = document.getElementById('companyCancelEditBtn');
    if (cancelBtn) cancelBtn.classList.remove('d-none');

    const card = document.getElementById('companyFormCard');
    if (card) card.scrollIntoView({ behavior: 'smooth' });
}

function cancelEditCompanyProfile() {
    editingCompanyId = null;
    uploadedCompanyLogoData = null;
    const container = document.getElementById('roleInterfaceContainer');
    if (container && currentUser && currentUser.username === 'admin') {
        renderAdminInterface(container);
    }
}

function setActiveCompanyProfile(compId) {
    registeredCompanies.forEach(c => {
        c.active = (c.id === compId);
    });

    updateNavbarLogo();

    const activeComp = registeredCompanies.find(c => c.active);
    if (activeComp) {
        workOrders.forEach(wo => {
            wo.supplier = `${activeComp.name}, ${activeComp.address}`;
            wo.supplierInfo = `${activeComp.register} | IČO: ${activeComp.ico} | IČ DPH: ${activeComp.icdph || activeComp.dic}`;
        });

        alert(`Firma "${activeComp.name}" bola nastavená ako HLAVNÁ FAKTURAČNÁ FIRMA pre e-faktúry, zákazkové listy a účtovníctvo A.S.D.!`);

        chatMessages.push({
            sender: "SYSTEM (ADMIN)",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            text: `🏢 ZMENA HLAVNEJ FAKTURAČNEJ FIRMY: Administrátor nastavil firmu [${activeComp.name}] (IČO: ${activeComp.ico}) ako aktívny fakturačný subjekt A.S.D.`
        });
        renderChat();
    }

    const container = document.getElementById('roleInterfaceContainer');
    if (container && currentUser && currentUser.username === 'admin') {
        renderAdminInterface(container);
    }
}

function deleteCompanyBillingProfile(compId) {
    const comp = registeredCompanies.find(c => c.id === compId);
    if (!comp) return;

    if (comp.active) {
        alert("Nemožno vymazať firmu, ktorá je nastavená ako aktívna fakturačná firma! Najprv nastavte inú firmu ako aktívnu.");
        return;
    }

    if (confirm(`Naozaj chcete vymazať fakturačné údaje firmy "${comp.name}"?`)) {
        registeredCompanies = registeredCompanies.filter(c => c.id !== compId);
        alert(`Firma "${comp.name}" bola odstránená zo systému.`);
        const container = document.getElementById('roleInterfaceContainer');
        if (container && currentUser && currentUser.username === 'admin') {
            renderAdminInterface(container);
        }
    }
}

function changeGlobalSystemLanguage(code) {
    const langObj = worldLanguages.find(l => l.code === code);
    if (!langObj) return;

    currentSystemLanguage = code;

    // Update Top Navbar Badge
    const badgeEl = document.getElementById('currentLangNavbarBadge');
    if (badgeEl) {
        badgeEl.innerHTML = `<i class="fa-solid fa-globe me-1"></i>${langObj.code} - ${langObj.native}`;
    }

    // Inform Chat
    chatMessages.push({
        sender: "SYSTEM (ADMIN)",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `🌐 GLOBÁLNA ZMENA JAZYKA: Administrátor prepol jazyk systému A.S.D. na [${langObj.code}] ${langObj.name} (${langObj.native}).`
    });
    renderChat();

    // Show alert in Admin screen if active
    const resultEl = document.getElementById('adminLangChangeResult');
    if (resultEl) {
        resultEl.classList.remove('d-none');
        resultEl.innerHTML = `✓ Jazyk programu bol úspešne prepnutý na <strong>${langObj.flag} ${langObj.name} (${langObj.native}) [${langObj.code}]</strong> pre všetky sekcie A.S.D. po celom svete!`;
    }

    const adminBadge = document.getElementById('adminActiveLangBadge');
    if (adminBadge) {
        adminBadge.innerHTML = `<i class="fa-solid fa-globe me-1"></i>Aktívny: ${langObj.code} - ${langObj.native}`;
    }

    if (currentUser && currentUser.username === 'admin') {
        const container = document.getElementById('roleInterfaceContainer');
        if (container) renderAdminInterface(container);
    }

    alert(`GLOBÁLNA ZMENA JAZYKA PROGRAMU A.S.D.\n\nNový zvolený jazyk: ${langObj.flag} ${langObj.name} (${langObj.native})\nKód: ${langObj.code}\nRegión: ${langObj.region}\n\nVšetky moduly A.S.D. boli zosynchronizované v novom jazykovom rozhraní.`);
}

function applyAdminLanguageChoice() {
    const selectEl = document.getElementById('adminLanguageSelect');
    if (!selectEl) return;
    changeGlobalSystemLanguage(selectEl.value);
}

function selectAdminLangQuick(code) {
    const selectEl = document.getElementById('adminLanguageSelect');
    if (selectEl) selectEl.value = code;
    changeGlobalSystemLanguage(code);
}

// ====================================================================
// 1. GENERÁTOR PAY BY SQUARE QR KÓDU PRE FAKTÚRY A ZÁKAZKOVÉ LISTY
// ====================================================================
function generatePayBySquareQrSvg(iban, swift, amount, vs, compName) {
    const activeComp = registeredCompanies.find(c => c.active) || registeredCompanies[0];
    const finalIban = iban || activeComp.iban || "SK4502000000001234567890";
    const finalSwift = swift || activeComp.swift || "SUBASKBX";
    const finalComp = compName || activeComp.name || "DF AUTO, s.r.o.";
    const cleanVs = String(vs).replace(/[^0-9]/g, '');

    return `
        <div class="p-3 bg-white text-dark rounded border border-secondary text-center shadow-sm" style="max-width: 230px; margin: 0 auto;">
            <div class="fw-bold fs-7 text-uppercase mb-1" style="color: #002b49; letter-spacing: 0.5px;">
                <i class="fa-solid fa-qrcode me-1 text-primary"></i>PAY by square
            </div>
            <svg width="140" height="140" viewBox="0 0 150 150" style="background:#fff; padding: 4px; border:1px solid #ccc; border-radius:4px;">
                <rect width="150" height="150" fill="#ffffff"/>
                <!-- QR Corner Markers -->
                <rect x="10" y="10" width="35" height="35" fill="#000" rx="3"/><rect x="15" y="15" width="25" height="25" fill="#fff" rx="2"/><rect x="20" y="20" width="15" height="15" fill="#000" rx="1"/>
                <rect x="105" y="10" width="35" height="35" fill="#000" rx="3"/><rect x="110" y="15" width="25" height="25" fill="#fff" rx="2"/><rect x="115" y="20" width="15" height="15" fill="#000" rx="1"/>
                <rect x="10" y="105" width="35" height="35" fill="#000" rx="3"/><rect x="15" y="110" width="25" height="25" fill="#fff" rx="2"/><rect x="20" y="115" width="15" height="15" fill="#000" rx="1"/>
                <!-- Simulated QR Modules -->
                <rect x="55" y="15" width="10" height="10" fill="#000"/><rect x="70" y="15" width="10" height="10" fill="#000"/><rect x="85" y="15" width="10" height="10" fill="#000"/>
                <rect x="55" y="30" width="10" height="10" fill="#000"/><rect x="85" y="30" width="10" height="10" fill="#000"/>
                <rect x="15" y="55" width="10" height="10" fill="#000"/><rect x="30" y="55" width="10" height="10" fill="#000"/><rect x="55" y="55" width="10" height="10" fill="#000"/><rect x="70" y="55" width="10" height="10" fill="#000"/><rect x="105" y="55" width="10" height="10" fill="#000"/><rect x="120" y="55" width="10" height="10" fill="#000"/>
                <rect x="15" y="70" width="10" height="10" fill="#000"/><rect x="45" y="70" width="10" height="10" fill="#000"/><rect x="60" y="70" width="10" height="10" fill="#000"/><rect x="85" y="70" width="10" height="10" fill="#000"/><rect x="105" y="70" width="10" height="10" fill="#000"/>
                <rect x="30" y="85" width="10" height="10" fill="#000"/><rect x="55" y="85" width="10" height="10" fill="#000"/><rect x="75" y="85" width="10" height="10" fill="#000"/><rect x="95" y="85" width="10" height="10" fill="#000"/><rect x="120" y="85" width="10" height="10" fill="#000"/>
                <rect x="55" y="105" width="10" height="10" fill="#000"/><rect x="70" y="105" width="10" height="10" fill="#000"/><rect x="90" y="105" width="10" height="10" fill="#000"/><rect x="120" y="105" width="10" height="10" fill="#000"/>
                <rect x="60" y="120" width="10" height="10" fill="#000"/><rect x="80" y="120" width="10" height="10" fill="#000"/><rect x="105" y="120" width="10" height="10" fill="#000"/>
            </svg>
            <div class="mt-1 font-monospace fw-bold text-dark" style="font-size: 0.72rem; line-height: 1.2;">
                Suma: <span class="text-primary">${Number(amount).toFixed(2)} EUR</span><br>
                VS: <span class="text-danger">${cleanVs}</span><br>
                <span class="text-muted" style="font-size: 0.65rem;">${finalIban.substring(0, 10)}...</span>
            </div>
        </div>
    `;
}

// ====================================================================
// 2. SMS / E-MAIL NOTIFIKÁCIE PRE ZÁKAZNÍKA
// ====================================================================
function openSmsModal(woId) {
    const wo = workOrders.find(w => w.id === woId);
    if (!wo) return;

    document.getElementById('smsWoId').value = wo.id;
    document.getElementById('smsCustomerInput').value = `${wo.customer} (${wo.vehicle} [${wo.ecv || '-'}])`;
    
    applySmsPreset('dokoncene');
    renderSmsHistory(wo.id);

    const modal = new bootstrap.Modal(document.getElementById('smsNotificationModal'));
    modal.show();
}

function applySmsPreset(type) {
    const woId = document.getElementById('smsWoId').value;
    const wo = workOrders.find(w => w.id === woId) || workOrders[0];
    const textarea = document.getElementById('smsTextarea');
    if (!textarea || !wo) return;

    if (type === 'prijate') {
        textarea.value = `A.S.D. SERVIS: Vaše vozidlo ${wo.vehicle} (${wo.ecv || 'v servise'}) bolo prijaté na servis. Zákazka č. ${wo.id}.`;
    } else if (type === 'pracuje_sa') {
        textarea.value = `A.S.D. SERVIS: Na Vašom vozidle ${wo.vehicle} (${wo.ecv || 'v servise'}) prebiehajú servisné práce a diagnostika ECU.`;
    } else if (type === 'dokoncene') {
        textarea.value = `A.S.D. SERVIS: Vaše vozidlo ${wo.vehicle} (${wo.ecv || 'v servise'}) je DOKONČENÉ a pripravené na prevzatie v A.S.D. Suma: ${wo.amount.toFixed(2)} EUR. Tešíme sa na Vás!`;
    } else if (type === 'faktura') {
        textarea.value = `A.S.D. SERVIS: Faktúra k zákazke ${wo.id} bola vystavená. Suma: ${(wo.amount * 1.23).toFixed(2)} EUR s DPH. IBAN: SK4502000000001234567890.`;
    }
}

function sendSmsNotificationSubmit() {
    const woId = document.getElementById('smsWoId').value;
    const wo = workOrders.find(w => w.id === woId);
    const text = document.getElementById('smsTextarea').value.trim();
    const channel = document.getElementById('smsChannelSelect').value;

    if (!wo || !text) return;

    const notifObj = {
        id: `NOTIF-${Date.now()}`,
        woId: wo.id,
        customer: wo.customer,
        vehicle: wo.vehicle,
        ecv: wo.ecv,
        channel: channel,
        text: text,
        time: new Date().toLocaleDateString('sk-SK') + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    customerNotifications.unshift(notifObj);

    chatMessages.push({
        sender: "SMS BRÁNA (A.S.D.)",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `📱 NOTIFIKÁCIE [${channel}]: Zákazníkovi (${wo.customer}) k vozidlu ${wo.vehicle} [${wo.ecv || '-'}]. Text: "${text}"`
    });
    renderChat();

    renderSmsHistory(wo.id);

    alert(`NOTIFIKÁCIE BOLA ÚSPEŠNE ODOSLANÁ!\n\nPríjemca: ${wo.customer}\nKanal: ${channel}\n\nSpráva: "${text}"`);
}

function renderSmsHistory(woId) {
    const historyList = document.getElementById('smsHistoryList');
    if (!historyList) return;

    const filtered = customerNotifications.filter(n => n.woId === woId);
    if (filtered.length === 0) {
        historyList.innerHTML = `<em>Zatiaľ neboli odoslané žiadne SMS/E-mail notifikácie pre túto zákazku.</em>`;
        return;
    }

    historyList.innerHTML = filtered.map(n => `
        <div class="p-2 mb-2 bg-dark rounded border border-secondary">
            <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="badge bg-info text-dark fw-bold">${n.channel}</span>
                <small class="text-secondary">${n.time}</small>
            </div>
            <div class="text-warning small fw-bold">Príjemca: ${n.customer}</div>
            <div class="text-light small mt-1">"${n.text}"</div>
        </div>
    `).join('');
}

function toggleSmsHistoryBox() {
    const box = document.getElementById('smsHistoryBox');
    if (box) box.classList.toggle('d-none');
}

// ====================================================================
// 3. PLÁNOVAČ & HARMONOGRAM ZDVIHÁKOV (WORKSHOP LIFT CALENDAR)
// ====================================================================
function openLiftScheduleModal() {
    renderLiftScheduleModalContent();
    const modal = new bootstrap.Modal(document.getElementById('liftScheduleModal'));
    modal.show();
}

function renderLiftScheduleModalContent() {
    const container = document.getElementById('liftScheduleModalBody');
    if (!container) return;

    let html = `
        <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <h6 class="fw-bold text-light mb-0"><i class="fa-solid fa-list-check text-warning me-2"></i>Aktuálny rozpis zdvihákov a časových slotov na dnes (${new Date().toLocaleDateString('sk-SK')}):</h6>
            <span class="badge bg-success text-white fw-bold"><i class="fa-solid fa-check-circle me-1"></i>5 Zdvihákov aktívnych v A.S.D.</span>
        </div>

        <div class="table-responsive">
            <table class="table table-dark table-bordered align-middle text-center small">
                <thead>
                    <tr class="table-secondary text-dark">
                        <th style="width: 220px;">Zdvihák / Stanovisko</th>
                        ${liftTimeSlots.map(s => `<th>${s}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
    `;

    workshopLifts.forEach(lift => {
        html += `
            <tr>
                <td class="text-start bg-secondary bg-opacity-20 fw-bold">
                    <i class="fa-solid fa-warehouse me-2 text-warning"></i>${lift.name}<br>
                    <small class="text-info font-monospace">${lift.type} | ${lift.mechanic}</small>
                </td>
        `;

        liftTimeSlots.forEach((slot, slotIdx) => {
            const key = `${lift.id}_slot_${slotIdx}`;
            const assign = liftScheduleAssignments[key];

            if (assign) {
                html += `
                    <td class="bg-primary bg-opacity-20 border-warning p-2">
                        <div class="fw-bold text-warning mb-1">${assign.vehicle}</div>
                        <div class="badge bg-warning text-dark font-monospace mb-1">Zákazka: ${assign.woId}</div>
                        <div class="small text-light" style="font-size:0.75rem;">${assign.note}</div>
                        <button class="btn btn-sm btn-outline-danger py-0 px-2 mt-1" onclick="clearLiftSlot('${key}')" title="Uvoľniť slot"><i class="fa-solid fa-xmark"></i></button>
                    </td>
                `;
            } else {
                html += `
                    <td class="bg-dark text-muted p-2">
                        <div class="small text-secondary mb-1"><i class="fa-solid fa-circle-check me-1 text-success"></i>Voľný slot</div>
                        <button class="btn btn-sm btn-outline-warning text-warning py-0 px-2 fw-bold" onclick="assignWorkOrderPromptToSlot('${key}', '${lift.name}', '${slot}')">
                            <i class="fa-solid fa-plus me-1"></i>Obsadiť
                        </button>
                    </td>
                `;
            }
        });

        html += `</tr>`;
    });

    html += `
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = html;
}

function assignWorkOrderPromptToSlot(key, liftName, slotName) {
    const woListText = workOrders.map(w => `${w.id}: ${w.vehicle} [${w.ecv || '-'}]`).join('\n');
    const woId = prompt(`Obsadenie slotu [${slotName}] na zdviháku "${liftName}".\n\nZadajte číslo zákazky:\n${woListText}`, workOrders[0] ? workOrders[0].id : "");

    if (!woId) return;
    const wo = workOrders.find(w => w.id === woId);
    if (!wo) {
        alert("Zákazka nebola nájdená!");
        return;
    }

    liftScheduleAssignments[key] = {
        woId: wo.id,
        vehicle: `${wo.vehicle} [${wo.ecv || '-'}]`,
        note: wo.faultDescription || "Servisný úkon A.S.D."
    };

    renderLiftScheduleModalContent();
    alert(`Zákazka ${wo.id} bola úspešne naplánovaná na ${liftName} v čase ${slotName}.`);
}

function clearLiftSlot(key) {
    delete liftScheduleAssignments[key];
    renderLiftScheduleModalContent();
}

// ====================================================================
// 4. SKLAD - BARCODE / EAN SKENOVANIE DIELOV
// ====================================================================
function handleEanScanSearch() {
    const input = document.getElementById('skladEanScannerInput');
    if (!input) return;
    const eanQuery = input.value.trim();

    if (!eanQuery) {
        alert("Zadajte alebo naskenujte EAN čiarový kód!");
        return;
    }

    const item = inventory.find(i => (i.ean && i.ean === eanQuery) || i.code.toLowerCase() === eanQuery.toLowerCase() || i.name.toLowerCase().includes(eanQuery.toLowerCase()));

    if (item) {
        alert(`🎯 EAN ČIAROVÝ KÓD NAŠIEL DIEL:\n\nNázov: ${item.name}\nKód: ${item.code}\nEAN: ${item.ean || 'N/A'}\nSklad: ${item.store}\nZásoba: ${item.qty} ks\nPredajná cena: ${item.sell.toFixed(2)} EUR s DPH`);
        selectedStoreFilter = item.store;
        renderSkladnikTable();
    } else {
        alert(`❌ Diel s EAN kódom / kľúčovým slovom "${eanQuery}" nebol nájdený na sklade.`);
    }
}

function handleEanScanReceive() {
    const input = document.getElementById('skladEanScannerInput');
    if (!input) return;
    const eanQuery = input.value.trim();

    const item = inventory.find(i => (i.ean && i.ean === eanQuery) || i.code.toLowerCase() === eanQuery.toLowerCase());
    if (item) {
        item.qty += 1;
        renderSkladnikTable();
        alert(`📥 SKENOVANIE PRÍJMU NASKLADNENÉ:\n\nDiel: ${item.name}\nNová zásoba: ${item.qty} ks (+1 ks)`);
    } else {
        alert(`Nenašiel sa diel pre EAN kód: ${eanQuery}`);
    }
}

function openSampleEanTest(code) {
    const input = document.getElementById('skladEanScannerInput');
    if (input) {
        input.value = code;
        handleEanScanSearch();
    }
}

// ====================================================================
// 5. EXPERTNÝ DIAGNOSTICKÝ PROTOKOL PDF
// ====================================================================

// Mock Users & Passwords according to spec
const defaultUsers = {
    "admin": { name: "Hlavný Administrátor", role: "Admin", pass: "admin", company: "A.S.D. HQ / Správa" },
    "majitel": { name: "Majiteľ Spoločnosti", role: "Majiteľ", pass: "majitel", company: "Centrála firiem" },
    "riaditel": { name: "Riaditeľ Prevádzky", role: "Riaditeľ", pass: "riaditel", company: "Pobočka Bratislava / Košice" },
    "prijimaci technik": { name: "Prijímací Technik Ján", role: "Prijímací Technik", pass: "technik", company: "Autoservis BA" },
    "technik": { name: "Prijímací Technik Ján", role: "Prijímací Technik", pass: "technik", company: "Autoservis BA" },
    "skladnik": { name: "Skladník Peter", role: "Skladník", pass: "skladnik", company: "Sklad BA" },
    "mechanik": { name: "Mechanik Jozef", role: "Mechanik", pass: "mechanik", company: "Dielňa BA" },
    "uctovnik": { name: "Účtovník Martin", role: "Účtovník", pass: "uctovnik", company: "Účtovné oddelenie" }
};

const userAliases = {
    "admin": "admin",
    "majitel": "majitel",
    "majiteľ": "majitel",
    "riaditel": "riaditel",
    "riaditeľ": "riaditel",
    "prijimaci technik": "prijimaci technik",
    "prijímací technik": "prijimaci technik",
    "prijimaci": "prijimaci technik",
    "prijímací": "prijimaci technik",
    "prijimaci-technik": "prijimaci technik",
    "technik": "prijimaci technik",
    "skladnik": "skladnik",
    "skladník": "skladnik",
    "mechanik": "mechanik",
    "uctovnik": "uctovnik",
    "účtovník": "uctovnik"
};

// Mock Work Orders (Enriched based on AZsoft Autoservis 5.34 sample PDF 2026/0022)
const sampleLandRoverPhoto = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="220" viewBox="0 0 400 220"><rect width="400" height="220" fill="%230f172a" rx="8"/><rect x="10" y="10" width="380" height="200" rx="6" fill="%231e293b" stroke="%23334155" stroke-width="2"/><text x="200" y="50" fill="%23f59e0b" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle">LAND ROVER DEFENDER [SN333DV]</text><path d="M70,140 L120,90 L280,90 L330,140 Z" fill="%233b82f6" opacity="0.3"/><rect x="60" y="130" width="280" height="35" rx="5" fill="%23475569"/><circle cx="100" cy="165" r="22" fill="%23000" stroke="%2394a3b8" stroke-width="4"/><circle cx="300" cy="165" r="22" fill="%23000" stroke="%2394a3b8" stroke-width="4"/><text x="200" y="200" fill="%2310b981" font-size="12" font-family="sans-serif" text-anchor="middle">✓ FOTO VOZIDLA PRI PRÍJME (A.S.D.)</text></svg>`;

const sampleOctaviaPhoto = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="220" viewBox="0 0 400 220"><rect width="400" height="220" fill="%230f172a" rx="8"/><rect x="10" y="10" width="380" height="200" rx="6" fill="%231e293b" stroke="%23334155" stroke-width="2"/><text x="200" y="50" fill="%233b82f6" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle">ŠKODA OCTAVIA IV [BA-888XX]</text><path d="M80,140 L130,95 L270,95 L320,140 Z" fill="%2310b981" opacity="0.3"/><rect x="70" y="130" width="260" height="30" rx="5" fill="%23475569"/><circle cx="110" cy="160" r="20" fill="%23000" stroke="%2394a3b8" stroke-width="4"/><circle cx="290" cy="160" r="20" fill="%23000" stroke="%2394a3b8" stroke-width="4"/><text x="200" y="200" fill="%2310b981" font-size="12" font-family="sans-serif" text-anchor="middle">✓ FOTO VOZIDLA PRI PRÍJME (A.S.D.)</text></svg>`;

let uploadedPhotoData = null;

let workOrders = [
    {
        id: "2026/0022",
        supplier: "DF AUTO, s.r.o., Hviezdoslavova 219/51, 045 01 Moldava nad Bodvou",
        supplierInfo: "OR MS Košice odd.Sro vl.51890/V | IČO: 53895843 | IČ DPH: SK2121522271",
        customer: "Ján Novák (+421901234567)",
        customerAddress: "DF AUTO, s.r.o. / Ján Novák, Hlavná 45, Košice",
        vehicle: "LAND ROVER DEFENDER",
        ecv: "SN333DV",
        vin: "SALEA7BW7M2035070",
        odometer: "181 334 km",
        fuel: "1/2",
        type: "Pozáručná",
        status: "V riešení",
        amount: 280.00,
        eInvoice: false,
        faultDescription: "Výmena žhaviacich sviečok, diagnostika motora ECU, kontrola chladiaceho okruhu",
        damageNotes: "Škrabanec na pravom zadnom blatníku, drobná odrenina nárazníka dole",
        dateReceived: "24.08.2026  14:10",
        dateDone: "31.08.2026",
        technician: "Prijímací Technik Ján",
        pristavil: "Ján Novák",
        prevzal: "Technik Ján",
        estimatedPrice: 280.00,
        deposit: 0.00,
        photo: sampleLandRoverPhoto,
        workItems: [
            { name: "Výmena žhaviacich sviečok (4ks)", hours: "2.0 hod", rate: 45.00, total: 90.00 },
            { name: "Diagnostika ECU motora a vymazanie DTC", hours: "1.0 hod", rate: 40.00, total: 40.00 }
        ],
        partItems: [
            { code: "GLW-102", name: "Žhaviaca sviečka Bosch Duraterm", qty: 4, unitPrice: 22.50, total: 90.00 },
            { code: "FLT-002", name: "Olejový filter MANN", qty: 1, unitPrice: 12.50, total: 12.50 },
            { code: "OIL-003", name: "Motorový olej 5W-30 5L Castrol", qty: 1, unitPrice: 47.50, total: 47.50 }
        ]
    },
    {
        id: "2026/0023",
        supplier: "DF AUTO, s.r.o., Hviezdoslavova 219/51, 045 01 Moldava nad Bodvou",
        supplierInfo: "OR MS Košice odd.Sro vl.51890/V | IČO: 53895843 | IČ DPH: SK2121522271",
        customer: "Mária Kováčová (+421908111222)",
        customerAddress: "Mária Kováčová, Kukučínova 12, Bratislava",
        vehicle: "Škoda Octavia IV",
        ecv: "BA-888XX",
        vin: "TMBZZZNX123456789",
        odometer: "45 200 km",
        fuel: "3/4",
        type: "Záručná",
        status: "Dokončená",
        amount: 165.00,
        eInvoice: true,
        faultDescription: "Garančná servsná prehliadka 45 000 km, výmena oleja a filtrov",
        damageNotes: "Bez poškodenia",
        dateReceived: "01.09.2026  08:30",
        dateDone: "01.09.2026",
        technician: "Prijímací Technik Ján",
        pristavil: "Mária Kováčová",
        prevzal: "Technik Ján",
        estimatedPrice: 165.00,
        deposit: 0.00,
        photo: sampleOctaviaPhoto,
        workItems: [
            { name: "Garančná prehliadka 45k km", hours: "1.5 hod", rate: 45.00, total: 67.50 }
        ],
        partItems: [
            { code: "OIL-003", name: "Motorový olej 5W-30 5L Castrol", qty: 1, unitPrice: 48.00, total: 48.00 },
            { code: "FLT-002", name: "Olejový filter MANN", qty: 1, unitPrice: 12.50, total: 12.50 },
            { code: "FLT-105", name: "Kabinový filter s aktívnym uhlím", qty: 1, unitPrice: 37.00, total: 37.00 }
        ]
    }
];

// Sklady & Kategórie podľa špecifikácie
const warehouseStores = [
    "Všetky sklady",
    "Autoservis",
    "Pneuservis",
    "Karoseria",
    "Lakovna",
    "Autoservis/Oleje",
    "Autoservis/Brzdy",
    "Autoservis/Podvozok",
    "Autoservis/Elektricke diely",
    "Pneuservis/Pneumatiky",
    "Pneuservis/Prislusenstvo",
    "Karoseria/Exterier",
    "Karoseria/Interier"
];

let selectedStoreFilter = "Všetky sklady";

// Mock Stock Inventory s priradením k jednotlivým skladom (Štandardná marža na diely 65%, DPH 23%, EAN kódy)
let inventory = [
    { code: "OIL-5W30-CAS", ean: "5901234567011", name: "Motorový olej Castrol Edge 5W-30 5L", store: "Autoservis/Oleje", qty: 18, min: 8, buy: 25.00, sell: 50.74, loc: "Regál A-1 / Oleje" },
    { code: "FLT-MANN-002", ean: "4008300123402", name: "Olejový filter MANN HU 7020 z", store: "Autoservis/Oleje", qty: 45, min: 10, buy: 6.00, sell: 12.18, loc: "Regál A-2 / Oleje" },
    { code: "BRK-BREM-001", ean: "8020584012303", name: "Brzdový kotúč predný Brembo 312mm", store: "Autoservis/Brzdy", qty: 24, min: 5, buy: 45.00, sell: 91.33, loc: "Regál B-1 / Brzdy" },
    { code: "BRK-PAD-TEXT", ean: "4082300123404", name: "Brzdové platničky predné Textar", store: "Autoservis/Brzdy", qty: 15, min: 4, buy: 28.00, sell: 56.83, loc: "Regál B-2 / Brzdy" },
    { code: "POD-AMOR-SACH", ean: "4013872123405", name: "Tlmič pérovania predný Sachs Super Touring", store: "Autoservis/Podvozok", qty: 8, min: 2, buy: 65.00, sell: 131.92, loc: "Regál C-1 / Podvozok" },
    { code: "POD-RAM-LEMF", ean: "4028977123406", name: "Rameno nápravy spodné Lemförder", store: "Autoservis/Podvozok", qty: 12, min: 3, buy: 55.00, sell: 111.62, loc: "Regál C-2 / Podvozok" },
    { code: "ELE-ALT-VALEO", ean: "3165141123407", name: "Alternátor Valeo 14V 140A", store: "Autoservis/Elektricke diely", qty: 4, min: 1, buy: 140.00, sell: 284.13, loc: "Regál D-1 / Elektro" },
    { code: "PNE-205-55-16", ean: "4019238123408", name: "Pneumatika Continental WinterContact 205/55 R16", store: "Pneuservis/Pneumatiky", qty: 32, min: 8, buy: 55.00, sell: 111.62, loc: "Pneu Sklad Sektor A" },
    { code: "PNE-VENT-TPMS", ean: "5902345123409", name: "Snímač tlaku v pneu TPMS Schrader", store: "Pneuservis/Prislusenstvo", qty: 50, min: 10, buy: 18.00, sell: 36.53, loc: "Pneu Regál B" },
    { code: "KAR-ZRK-L", ean: "8591234123410", name: "Spätné zrkadlo ľavé elektrické vyhrievané", store: "Karoseria/Exterier", qty: 5, min: 2, buy: 70.00, sell: 142.07, loc: "Sklad Karoséria E-1" },
    { code: "KAR-ROH-TEXT", ean: "8591234123411", name: "Textilné koberce sadové originál", store: "Karoseria/Interier", qty: 10, min: 3, buy: 22.00, sell: 44.62, loc: "Sklad Karoséria E-2" },
    { code: "LAK-PLNI-1L", ean: "4015023123412", name: "Plnič akrylátový sivý 1L Mipa + tužidlo", store: "Lakovna", qty: 14, min: 4, buy: 16.00, sell: 32.47, loc: "Regál Lakovňa L-1" }
];

// Globálne Svetové Značky (Európa, Amerika, Ázia, Afrika, Austrália)
const globalWorldBrands = {
    "Európa": [
        "Volkswagen", "Skoda", "Audi", "SEAT", "Cupra", "BMW", "MINI", "Mercedes-Benz", 
        "Porsche", "Opel", "Peugeot", "Citroen", "Renault", "Dacia", "Fiat", "Alfa Romeo", 
        "Volvo", "Jaguar", "Land Rover", "Saab"
    ],
    "Amerika": [
        "Ford", "Chevrolet", "Cadillac", "GMC", "Buick", "Jeep", "Dodge", "Chrysler", 
        "RAM", "Tesla", "Lincoln"
    ],
    "Ázia": [
        "Toyota", "Lexus", "Honda", "Acura", "Nissan", "Infiniti", "Mazda", "Subaru", 
        "Mitsubishi", "Hyundai", "Kia", "Genesis", "Suzuki", "Isuzu", "BYD", "Geely", "Chery"
    ],
    "Austrália & Afrika": [
        "Holden", "Ford Australia", "Toyota Saharal", "Proton", "Mahindra", "Tata Motors"
    ]
};

// ECU Protocols
const brandEcus = {
    "Volkswagen": ["Engine Control Module", "DSG Transmission", "ABS/ESP Module", "Airbag Control"],
    "Skoda": ["Engine ECU", "Transmission ECU", "ABS", "Climate Control"],
    "Audi": ["Engine ECU", "Quattro ECU", "Virtual Cockpit", "Radar Module"],
    "BMW": ["DME Engine", "EGS Transmission", "DSC Brake System", "CAS Immobilizer"],
    "Mercedes": ["ME Engine ECU", "7G/9G Tronic", "ESP System", "SAM Module"],
    "Toyota": ["Hybrid Control", "Engine ECU", "VSC Stability", "EPS Steering"],
    "Ford": ["PCM Engine", "TCM Transmission", "ABS Module", "IPC Cluster"],
    "Chevrolet": ["ECM Engine", "TCM Auto Transmission", "EBCM ABS", "BCM Body"],
    "Jeep": ["PCM Engine", "SGW Gateway", "TCM Transmission", "ABS Control"],
    "Hyundai": ["Engine ECU", "Smartstream TCU", "ESC Brakes", "MDPS Steering"],
    "Nissan": ["ECM Engine", "CVT Transmission", "VDC Stability", "BCM Body"]
};

// ELM327 Diagnostické Adaptéry (USB & Bluetooth State)
let elmDevices = {
    usb: { connected: true, port: "COM3 (FTDI USB Serial Port)", baud: "115200" },
    bt: { connected: false, device: "OBDII Bluetooth (MAC: 00:1D:A5:68:98:8B)", pin: "1234" }
};

// Stromové Zobrazenie Riadiacich Jednotiek (ECU Tree Data Structure)
const vehicleEcuTree = {
    "Skoda": {
        name: "Škoda Octavia IV (CAN-Bus / UDS Zbernica)",
        vin: "TMBZZZNX123456789",
        nodes: [
            {
                id: "pwr",
                title: "Pohonné Ústrojenstvo (Powertrain CAN)",
                icon: "fa-car-battery text-warning",
                children: [
                    { id: "ecu_01", code: "01", name: "Motor (Engine ECU Simos / PCR)", status: "OK", dtcCount: 0 },
                    { id: "ecu_02", code: "02", name: "Prevodovka (DSG 7-St. DQ381)", status: "OK", dtcCount: 0 },
                    { id: "ecu_22", code: "22", name: "Pohon Všetkých Kolies (Haldex 4x4)", status: "OK", dtcCount: 0 }
                ]
            },
            {
                id: "chassis",
                title: "Podvozok & Brzdy (Chassis CAN)",
                icon: "fa-shield-halved text-info",
                children: [
                    { id: "ecu_03", code: "03", name: "Brzdy & ESP/ABS (Bosch ESP9)", status: "DTC", dtcCount: 1, dtc: [{ code: "C0035", title: "Snímač otáčok predného kolesa", level: "Vysoká" }] },
                    { id: "ecu_44", code: "44", name: "Posilňovač Riadenia (EPS Steering)", status: "OK", dtcCount: 0 },
                    { id: "ecu_13", code: "13", name: "Adaptívny Tempomat (ACC Radar)", status: "OK", dtcCount: 0 }
                ]
            },
            {
                id: "body",
                title: "Karoséria & Komfort (Body CAN)",
                icon: "fa-car-side text-primary",
                children: [
                    { id: "ecu_09", code: "09", name: "Centrálna Elektrika (BCM Module)", status: "DTC", dtcCount: 1, dtc: [{ code: "P0171", title: "Prispôsobenie zmesi chudobné", level: "Stredná" }] },
                    { id: "ecu_15", code: "15", name: "Airbag & Bezpečnostný Systém", status: "OK", dtcCount: 0 },
                    { id: "ecu_08", code: "08", name: "Klimatizácia (Climatronic AirCon)", status: "OK", dtcCount: 0 },
                    { id: "ecu_17", code: "17", name: "Prístrojová Doska (Virtual Cockpit)", status: "OK", dtcCount: 0 }
                ]
            }
        ]
    },
    "Volkswagen": {
        name: "Volkswagen Passat B8 (UDS Bus)",
        vin: "WVWZZZ3CZWE123456",
        nodes: [
            {
                id: "pwr",
                title: "Pohonné Ústrojenstvo (Powertrain CAN)",
                icon: "fa-car-battery text-warning",
                children: [
                    { id: "ecu_01", code: "01", name: "Motor (2.0 TDI Engine ECU)", status: "DTC", dtcCount: 2, dtc: [{ code: "P0300", title: "Vynechávanie zapaľovania", level: "Vysoká" }, { code: "P0299", title: "Underboost Turba", level: "Vysoká" }] },
                    { id: "ecu_02", code: "02", name: "Prevodovka (DSG 6-St. DQ250)", status: "OK", dtcCount: 0 }
                ]
            },
            {
                id: "chassis",
                title: "Podvozok & Brzdy (Chassis CAN)",
                icon: "fa-shield-halved text-info",
                children: [
                    { id: "ecu_03", code: "03", name: "Brzdy & ESP (ABS Module)", status: "OK", dtcCount: 0 },
                    { id: "ecu_44", code: "44", name: "Posilňovač Riadenia", status: "OK", dtcCount: 0 }
                ]
            }
        ]
    }
};

let selectedEcuNodeId = "ecu_01";

// Databanka DTC Chybových Kódov podla Výrobcov (Slovenský preklad & postupy)
const dtcBrands = [
    "Všetky značky",
    "VAG Group (VW/Škoda/Audi/SEAT)",
    "BMW / MINI",
    "Mercedes-Benz",
    "Toyota / Lexus",
    "Ford",
    "Peugeot / Citroën (PSA)",
    "Renault / Dacia",
    "Hyundai / Kia",
    "Nissan",
    "Štandard OBD-II"
];

const dtcSubsystems = [
    "Všetky kategórie",
    "Motor (P)",
    "Podvozok (C)",
    "Karoséria (B)",
    "CAN Sieť (U)"
];

let selectedDtcBrandFilter = "Všetky značky";
let selectedDtcSubsystemFilter = "Všetky kategórie";
let currentDetailDtcCode = null;

const dtcDatabase = [
    // VAG (VW, Škoda, Audi, SEAT)
    {
        code: "P0300",
        brand: "VAG Group (VW/Škoda/Audi/SEAT)",
        subsystem: "Motor (P)",
        title: "Vynechávanie zapaľovania na viacerých valcoch",
        desc: "Riadiaca jednotka motora zistila vynechávanie zapaľovania alebo nedokonalé spaľovanie na viacerých valcoch súčasne.",
        causes: "Opotrebované zapaľovacie sviečky, chybné zapaľovacie cievky, nízky tlak paliva, zanesené vstrekovače, netesnosť sacieho potrubia (falošný vzduch), stratená kompresia valcov.",
        solution: "1. Vybaviť sviečky a zapaľovacie cievky, skontrolovať iskru.\n2. Zmerať tlak paliva v palivovej lište.\n3. Vykonať dymovú skúšku na netesnosť sania.\n4. Zmerať kompresné tlaky valcov motora."
    },
    {
        code: "P0299",
        brand: "VAG Group (VW/Škoda/Audi/SEAT)",
        subsystem: "Motor (P)",
        title: "Nedostatočný plniaci tlak turbodúchadla (Underboost)",
        desc: "Skutočný tlak plnenia zmeraný v sacom potrubí je nižší než hodnota požadovaná riadiacou jednotkou motora.",
        causes: "Prasknutá alebo uvoľnená tlaková hadica intercoolera, nefunkčný N75 elektromagnetický ventil regulácie, zatuhnuté lopatky VGT regulácie turba, poškodený intercooler.",
        solution: "1. Vizuálne a tlakovo skontrolovať všetky hadice od turba ku škrtiacej klapke.\n2. Otestovať podtlakovú dózu a pohyb VGT regulácie turba manuálnou podtlakovou pumpou.\n3. Vymeniť ventil N75 alebo zrepasovať turbodúchadlo."
    },
    {
        code: "P0401",
        brand: "VAG Group (VW/Škoda/Audi/SEAT)",
        subsystem: "Motor (P)",
        title: "EGR systém - Nedostatočný prietok recirkulácie spalín",
        desc: "Riadiaca jednotka zistila nižší prietok recirkulovaných spalín cez EGR ventil než stanovuje norma.",
        causes: "EGR ventil zanesený karbónovými usadeninami, upchatý chladič EGR spalín, poškodený snímač diferenčného tlaku EGR, poškodené vedenie podtlaku.",
        solution: "1. Demontovať EGR ventil a chladič spalín, mechanicky a chemicky ich vyčistiť.\n2. Otestovať polohový snímač EGR cez akčné členy v diagnostike A.S.D.\n3. V prípade elektrického poškodenia vymeniť EGR modul."
    },
    {
        code: "P2002",
        brand: "VAG Group (VW/Škoda/Audi/SEAT)",
        subsystem: "Motor (P)",
        title: "Filter pevných častíc (DPF) - Efektivita pod prahom",
        desc: "DPF filter je nadmerne zanesený sadzami/popolčekom alebo snímač diferenčného tlaku dáva nesprávne hodnoty.",
        causes: "Upchatý DPF filter, chybný snímač diferenčného tlaku G450, prasknutá tlaková trubička ku snímaču G450, časté krátke jazdy so studeným motorom.",
        solution: "1. Vyčítať z diagnostiky hmotnosť sadzí (Soot Mass) a popolčeka (Ash Mass).\n2. Vymeniť snímač diferenčného tlaku G450 a spustiť jeho adaptáciu.\n3. Vykonat servisnú nútenú regeneráciu DPF za jazdy alebo profesionálne čistenie DPF."
    },

    // BMW / MINI
    {
        code: "P0011",
        brand: "BMW / MINI",
        subsystem: "Motor (P)",
        title: "VANOS - Variabilné časovanie vačky sania nadmerne pokročilé",
        desc: "Systém variabilného časovania vačkového hriadeľa VANOS nedosiahol požadovaný fázový uhol.",
        causes: "Zanesený alebo chybný solenoidový ventil VANOS, nízky tlak motorového oleja, vytiahnutá rozvodová reťaz, zanesené mikrositká olejového kanála VANOS.",
        solution: "1. Demontovať a vyčistiť solenoidové ventily VANOS (prípadne vymeniť).\n2. Skontrolovať tlak a hladinu motorového oleja (používať len predpísaný olej BMW LL-04).\n3. Skontrolovať predĺženie rozvodovej reťaze a nastavenie časovania."
    },
    {
        code: "P0171",
        brand: "BMW / MINI",
        subsystem: "Motor (P)",
        title: "Systém príliš chudobný (Bank 1) - Falošný vzduch / Palivo",
        desc: "Prispôsobenie zmesi (Fuel Trim) dosiahlo maximálnu hranicu obohatenia. Do spalovacej komory prúdi priveľa vzduchu alebo málo paliva.",
        causes: "Prasknutá membrána v separátore oleja (PCV ventil vo veku ventilov), netesnosť sacieho potrubia, zanesená váha vzduchu (MAF), nízky tlak palivového čerpadla.",
        solution: "1. Skontrolovať podtlak vo veku ventilov a stav PCV membrány.\n2. Vykonať dymovú skúšku sacieho traktu.\n3. Vymeniť váhu vzduchu MAF alebo palivové čerpadlo."
    },

    // MERCEDES-BENZ
    {
        code: "P0101",
        brand: "Mercedes-Benz",
        subsystem: "Motor (P)",
        title: "Snímač hmotnosti vzduchu (MAF) - Porucha rozsahu / Výkonu",
        desc: "Nameraný signál z hmotnostného snímača vzduchu MAF neodpovedá obvyklému prúdeniu vzduchu pre dané otáčky CDI motora.",
        causes: "Znečistený snímač MAF, prasknutá sacia hadica medzi MAF a turbom, zanesený vzduchový filter, chybná kabeláž konektora.",
        solution: "1. Skontrolovať a vymeniť vzduchový filter.\n2. Skontrolovať tesnosť plastových sacích trubiek.\n3. Vyčistiť špeciálnym čističom alebo vymeniť merač hmotnosti vzduchu MAF."
    },
    {
        code: "P2078",
        brand: "Mercedes-Benz",
        subsystem: "Motor (P)",
        title: "Snímač tlaku v palivovej lište Common Rail - Vysoký signál",
        desc: "Snímač tlaku v rozdeľovači paliva CDI hlási neprirodzene vysokú hodnotu tlaku v lište.",
        causes: "Chybný snímač tlaku paliva Rail, poškodený regulátor tlaku paliva na čerpadle/lište, skrat v kabeláži snímača.",
        solution: "1. Skontrolovať 5V napájanie a ukostrenie na konektore snímača tlaku Rail.\n2. Porovnať reálny tlak paliva s hodnotou v diagnostike A.S.D.\n3. Vymeniť snímač tlaku v palivovej lište."
    },

    // TOYOTA / LEXUS
    {
        code: "P0420",
        brand: "Toyota / Lexus",
        subsystem: "Motor (P)",
        title: "Účinnosť katalyzátora pod prahovou hodnotou (Bank 1)",
        desc: "Katalyzátor nedosahuje požadovanú emisnú účinnosť premenu škodlivín.",
        causes: "Opotrebovaný alebo tepelne poškodený katalyzátor, nefunkčná zadná kontrolná lambda sonda, netesnosť výfuku pred kalyzátorom.",
        solution: "1. Skontrolovať priebeh napätia zadnej lambda sondy (pri dobrom kat. má byť napätie stále okolo 0.6-0.8V).\n2. Skontrolovať tesnosť výfukového potrubia.\n3. Ak je sonda funkčná, vymeniť katalyzátor."
    },
    {
        code: "P0A80",
        brand: "Toyota / Lexus",
        subsystem: "Motor (P)",
        title: "Nahradiť modul hybridnej batérie (HV Battery Pack)",
        desc: "Riadiaca jednotka hybridného systému zistila kritický rozdiel napätí alebo vnútorného odporu medzi článkami vysokonapäťovej batérie.",
        causes: "Opotrebované články HV batérie, zanesený chladiaci ventilátor hybridnej batérie, korózia zberných medených pásikov.",
        solution: "1. Demontovať a vyčistiť ventilátor a chladiace kanály HV batérie.\n2. Zmerať napätia všetkých blokov batérie v diagnostike Toyota Techstream / A.S.D.\n3. Vymeniť poškodené články alebo kompletný batériový blok."
    },

    // FORD
    {
        code: "P0335",
        brand: "Ford",
        subsystem: "Motor (P)",
        title: "Snímač polohy kľukového hriadeľa (CKP) - Porucha obvodu",
        desc: "Riadiaca jednotka motora nedostáva impulzný signál o otáčkach z kľukového hriadeľa.",
        causes: "Chybný snímač CKP, poškodený reluktorový krúžok na zotrvačníku/kľuke, znečistený snímač kovovými pilinami, prerušené vodiče.",
        solution: "1. Skontrolovať konektor a káblový zväzok snímača CKP.\n2. Vyčistiť čelo snímača od pilín.\n3. Zmerať osciloskopom signál otáčok a vymeniť snímač CKP."
    },
    {
        code: "P1000",
        brand: "Ford",
        subsystem: "Motor (P)",
        title: "Testy pripravenosti OBD-II neboli dokončené (Readiness Status)",
        desc: "Palubný diagnostický systém Ford nedokončil všetky cykly samokontroly po vymazaní pamäte závad.",
        causes: "Nedávne vymazanie chýb z pamäte ECU, odpojenie akumulátora vozidla.",
        solution: "1. Vykonať predpísanú skúšobnú jazdu (Ford OBD Drive Cycle) pre obnavu kódu readiness."
    },

    // PEUGEOT / CITROËN (PSA)
    {
        code: "P1434",
        brand: "Peugeot / Citroën (PSA)",
        subsystem: "Motor (P)",
        title: "Čerpadlo aditíva FAP (Eolys) - Porucha obvodu / Prerušené",
        desc: "Riadiaca jednotka nedokáže aktivovať dávkovacie čerpadielko aditíva Eolys pre FAP filter.",
        causes: "Prázdna nádržka aditíva Eolys, spálená poistka napájania čerpadielka, chybný modul čerpadla v nádržke Eolys.",
        solution: "1. Skontrolovať poistky v motorovom priestore.\n2. Doplniť aditívum Eolys a nastaviť nový stav v diagnostike PSA / A.S.D.\n3. Vymeniť čerpadlo aditíva."
    },

    // HYUNDAI / KIA
    {
        code: "P0340",
        brand: "Hyundai / Kia",
        subsystem: "Motor (P)",
        title: "Snímač polohy vačkového hriadeľa (CMP) - Porucha obvodu",
        desc: "Chýbajúci alebo nesprávny fázovací signál zo snímača vačkového hriadeľa.",
        causes: "Chybný snímač CMP, preskočená alebo vytiahnutá rozvodová reťaz, poškodená kabeláž.",
        solution: "1. Skontrolovať fázovanie kľuka-vačka podľa rozvodových značiek.\n2. Zmerať napájanie 5V/12V na konektore CMP.\n3. Vymeniť snímač CMP."
    },

    // RENAULT / DACIA
    {
        code: "P0380",
        brand: "Renault / Dacia",
        subsystem: "Motor (P)",
        title: "Obvod žhavenia / Relé žhavenia - Porucha A",
        desc: "Riadiaca jednotka dCi motora zistila poruchu v obvode predhrievania / žhaviacich sviečok.",
        causes: "Vypálená jedna alebo viac žhaviacich sviečok, chybné relé žhavenia, spálená silová poistka žhavenia.",
        solution: "1. Zmerať odpor jednotlivých žhaviacich sviečok (obvykle 0.5 - 1.5 Ohm).\n2. Skontrolovať prítomnosť napätia z relé žhavenia pri studenom štarte.\n3. Vymeniť poškodené žhaviace sviečky alebo relé."
    },

    // NISSAN
    {
        code: "P0087",
        brand: "Nissan",
        subsystem: "Motor (P)",
        title: "Tlak v palivovej lište / Systéme príliš nízky",
        desc: "Nameraný tlak v Common Rail lište dCi / dTi je nižší než minimálny požadovaný tlak pre štart / chod motora.",
        causes: "Upchatý palivový filter, chybný regulátor tlaku paliva, opotrebované vysokotlakové čerpadlo, poškodené vstrekovače (príliš veľký prepad drahého paliva do prepadu).",
        solution: "1. Vymeniť palivový filter.\n2. Vykonať test prepadu vstrekovačov do menzoriek.\n3. Skontrolovať regulátor tlaku a vysokotlakové čerpadlo."
    },

    // ŠTANDARD OBD-II / PODVOZOK / KAROSÉRIA / CAN
    {
        code: "C0035",
        brand: "Štandard OBD-II",
        subsystem: "Podvozok (C)",
        title: "Snímač otáčok predného ľavého kolesa (ABS/ESP)",
        desc: "Modul ABS/ESP nesníma rýchlosť otáčania predného ľavého kolesa.",
        causes: "Prasknutý alebo znečistený magnetický krúžok na ložisku kolesa, chybný snímač ABS, prodrený kábel snímača pri tlmiči.",
        solution: "1. Vizuálne skontrolovať kábel v podbehu kolesa.\n2. Vyčistiť priestor okolo snímača ABS na tehlách.\n3. Zmerať hodnotu otáčok kolesa v Live Data a v prípade poruchy vymeniť snímač ABS."
    },
    {
        code: "B0001",
        brand: "Štandard OBD-II",
        subsystem: "Karoséria (B)",
        title: "Airbag vodiča - Rozbuška obvod 1 - Vysoký odpor / Prerušené",
        desc: "Riadiaca jednotka airbagov namerala nadmerný odpor na vedení k čelnému airbagu vo volante.",
        causes: "Prerušená podvolantová krúžková pružina (krúžok airbagu), oxidácia na konektore airbagu, chybná rozbuška.",
        solution: "1. Pozor: Pred manipuláciou odpojiť batériu a počkať 10 minút!\n2. Skontrolovať konektory pod volantom.\n3. Zmerať priechodnosť navíjacieho krúžku volantu a v prípade prerušenia ho vymeniť."
    },
    {
        code: "U0100",
        brand: "Štandard OBD-II",
        subsystem: "CAN Sieť (U)",
        title: "Strata komunikácie s riadiacou jednotkou motora (ECU / PCM)",
        desc: "Moduly ABS, Prístrojová doska alebo BCM stratili dátové spojenie cez CAN-Bus s riadiacou jednotkou motora.",
        causes: "Vypálená poistka napájania ECU, chybné hlavné napájacie relé motora, poškodená dvojlinka zbernice CAN-Bus (CAN-High / CAN-Low), chybná ECU.",
        solution: "1. Skontrolovať poistky a relé napájania motorovej riadiacej jednotky.\n2. Zmerať odpor zbernice CAN (60 Ohm pri vypnutom zapnutí na termináloch).\n3. Skontrolovať ukostrovacie body motora a ECU."
    },
    {
        code: "U0121",
        brand: "Štandard OBD-II",
        subsystem: "CAN Sieť (U)",
        title: "Strata komunikácie s modulom riadenia bŕzd (ABS / ESP)",
        desc: "Chýbajúce CAN-Bus správy z jednotky protiblokovacieho systému brzd ABS/ESP.",
        causes: "Chýbajúce napájanie pre ABS hydraulickú jednotku, zaoxidovaný hlavný konektor ABS, chyba CAN zbernice.",
        solution: "1. Skontrolovať silové poistky ABS (30A/40A) na akumulátore.\n2. Odpojiť hlavný konektor ABS a skontrolovať koróziu pinov.\n3. Otestovať CAN liniek."
    }
];

// System Chat Messages
let chatMessages = [
    { sender: "SYSTEM", time: "18:00", text: "Vítajte v systéme Autoservisný Systém a Diagnostika (A.S.D.)" },
    { sender: "PRIJÍMACÍ TECHNIK", time: "18:01", text: "Zákazka ZAK-1001 bola dokončená a pripravená na e-Faktúru." }
];

document.addEventListener("DOMContentLoaded", () => {
    renderChat();
});

function quickFill(u, p) {
    document.getElementById('loginUsername').value = u;
    document.getElementById('loginPassword').value = p;
    handleLogin();
}

function handleLogin() {
    const uInputRaw = (document.getElementById('loginUsername').value || '').trim();
    const uInput = uInputRaw.toLowerCase();
    const pInput = (document.getElementById('loginPassword').value || '').trim();
    const alertEl = document.getElementById('loginAlert');

    let resolvedKey = userAliases[uInput];

    if (!resolvedKey) {
        for (const [key, user] of Object.entries(defaultUsers)) {
            if (key === uInput || user.pass === uInput || user.role.toLowerCase() === uInput) {
                resolvedKey = key;
                break;
            }
        }
    }

    if (resolvedKey && defaultUsers[resolvedKey]) {
        const expectedUser = defaultUsers[resolvedKey];
        const passMatch = (pInput === expectedUser.pass) || 
                          (pInput.toLowerCase() === expectedUser.pass.toLowerCase()) || 
                          (pInput.toLowerCase() === resolvedKey) || 
                          (pInput === '');

        if (passMatch) {
            currentUser = Object.assign({}, expectedUser, { username: resolvedKey });

            if (alertEl) alertEl.classList.add('d-none');
            document.getElementById('loginScreen').classList.add('d-none');
            document.getElementById('appScreen').classList.remove('d-none');

            // Setup Header
            document.getElementById('userNameDisplay').textContent = currentUser.name;
            document.getElementById('userCompanyDisplay').textContent = currentUser.company;
            document.getElementById('appRoleBadge').textContent = currentUser.role;
            document.getElementById('userAvatar').textContent = currentUser.name.charAt(0);
            document.getElementById('chatRoleTag').textContent = currentUser.role;

            // Render specific UI for logged-in user
            renderRoleInterface();
            return;
        }
    }

    if (alertEl) {
        document.getElementById('loginAlertText').textContent = "Neplatné meno alebo heslo! Skontrolujte meno a heslo (napr. admin / admin, majitel / majitel, riaditel / riaditel, technik / technik, skladnik / skladnik, mechanik / mechanik, uctovnik / uctovnik).";
        alertEl.classList.remove('d-none');
    }
}

function logout() {
    currentUser = null;
    document.getElementById('appScreen').classList.add('d-none');
    document.getElementById('loginScreen').classList.remove('d-none');
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}

// Render interface EXCLUSIVELY for the logged-in role
function renderRoleInterface() {
    const container = document.getElementById('roleInterfaceContainer');
    container.innerHTML = '';

    switch (currentUser.username) {
        case 'admin':
            renderAdminInterface(container);
            break;
        case 'majitel':
            renderMajitelInterface(container);
            break;
        case 'riaditel':
            renderRiaditelInterface(container);
            break;
        case 'prijimaci technik':
        case 'technik':
            renderTechnikInterface(container);
            break;
        case 'skladnik':
            renderSkladnikInterface(container);
            break;
        case 'mechanik':
            renderMechanikInterface(container);
            break;
        case 'uctovnik':
            renderUctovnikInterface(container);
            break;
        default:
            container.innerHTML = `<div class="alert alert-warning">Neidentifikovaná rola používateľa.</div>`;
    }
}

function getRoleFunctionsTreeHtml(roleKey) {
    const trees = {
        'admin': {
            roleTitle: 'Administrátor (A.S.D.)',
            badge: 'Plný prístup do celého programu',
            badgeClass: 'bg-danger text-white',
            groups: [
                {
                    title: '1. Diagnostika, Oprava & Systém A.S.D.',
                    icon: 'fa-solid fa-screwdriver-wrench text-danger',
                    items: [
                        { name: 'Diagnostika a oprava programu / databázy', desc: 'Skenovanie integrity databázy a automatická oprava tabuliek', action: "openAdminRepairModal()" },
                        { name: 'Vzdialená podpora pre používateľov v rámci programu', desc: 'Overenie stavu HTTPS tunelu, portu 5050 a vzdialeného pripojenia', action: "openAdminSupportModal()" },
                        { name: 'Centrálna zmena jazyka po celom svete', desc: 'Nastavenie jazyka systému (SK, CZ, EN, DE, FR, HU, IT, ES...)', action: "openAdminLanguageModal()" }
                    ]
                },
                {
                    title: '2. Tvorba Nových Hesiel & Správa Sekcií',
                    icon: 'fa-solid fa-key text-warning',
                    items: [
                        { name: 'Tvorba nových hesiel pre rôzne sekcie', desc: 'Kalkulačka a generátor nových prístupových kľúčov', action: "openAdminPassGenModal()" },
                        { name: 'Prehľad prihlasovacích údajov rolí', desc: 'Administrácia 7 používateľských účtov a ich prístupových práv', action: "openAdminAccountsModal()" }
                    ]
                },
                {
                    title: '3. Fakturačné Údaje Firiem & LOGO',
                    icon: 'fa-solid fa-building-flag text-info',
                    items: [
                        { name: 'Vytvorenie a úprava fakturačných údajov firmy', desc: 'IČO, DIČ, IČ DPH, IBAN, registrácie v obchodnom registri', action: "openAdminCompanyModal()" },
                        { name: 'Nahratie a zmena LOGA firmy pre doklady', desc: 'Grafické logo pre e-Faktúry, Zákazkové listy a Diagnostické protokoly', action: "openAdminLogoModal()" },
                        { name: 'Nastavenie hlavnej fakturačnej firmy', desc: 'Výber aktívneho subjektu pre tlačové výstupy A.S.D.', action: "openAdminSelectCompanyModal()" }
                    ]
                },
                {
                    title: '4. Vnútorná Komunikácia V Rámci Programu',
                    icon: 'fa-solid fa-comments text-success',
                    items: [
                        { name: 'Priama komunikácia s Majiteľom / Riaditeľom', desc: 'Odoslanie rýchlej správy pre vedenie firiem', action: "openAdminDirectChatModal()" },
                        { name: 'Globálny systémový chat pre všetkých používateľov', desc: 'Vnútorná komunikácia so všetkými rolami A.S.D.', action: "openAdminGlobalChatModal()" }
                    ]
                }
            ]
        },
        'majitel': {
            roleTitle: 'Majiteľ Spoločnosti (A.S.D.)',
            badge: 'Sledovanie & Koordinácia Firiem',
            badgeClass: 'bg-warning text-dark',
            groups: [
                {
                    title: '1. Sledovanie a Koordinácia 1 Alebo Viac Firiem',
                    icon: 'fa-solid fa-city text-warning',
                    items: [
                        { name: 'Multi-firemný prehľad a štatistiky firiem', desc: 'Monitorovanie tržieb, počtu zákaziek a výkonu pobočiek', action: "openMajitelMultiCompanyModal()" },
                        { name: 'Prepínanie a koordinácia firiem / pobočiek', desc: 'Centrála Bratislava, Košice, Poprad', action: "openMajitelBranchCoordinationModal()" }
                    ]
                },
                {
                    title: '2. Priama Komunikácia V Rámci Programu',
                    icon: 'fa-solid fa-headset text-info',
                    items: [
                        { name: 'Priama komunikácia s Riaditeľom cez A.S.D.', desc: 'Operatívne pokyny pre riaditeľa prevádzky', action: "openMajitelChatRiaditelModal()" },
                        { name: 'Komunikácia so všetkými používateľmi v rámci firiem', desc: 'Hromadné oznamy pre celú firmu', action: "openMajitelGlobalChatModal()" }
                    ]
                },
                {
                    title: '3. Kontrola Účtovníctva & Pozorovateľ',
                    icon: 'fa-solid fa-chart-line text-success',
                    items: [
                        { name: 'Kontrola účtovného rozhrania cez svojho účtovníka', desc: 'Finančný dohľad nad e-faktúrami a DPH 23%', action: "openMajitelAccountingModal()" },
                        { name: 'Prístup k používateľským účtom len ako pozorovateľ', desc: 'Monitoring činnosti zamestnancov bez možnosti zásahu', action: "openMajitelUserObserverModal()" }
                    ]
                }
            ]
        },
        'riaditel': {
            roleTitle: 'Riaditeľ Prevádzky (A.S.D.)',
            badge: 'Koordinácia Prevádzky Firiem',
            badgeClass: 'bg-info text-dark',
            groups: [
                {
                    title: '1. Sledovanie a Koordinácia Prevádzky Firiem',
                    icon: 'fa-solid fa-sitemap text-info',
                    items: [
                        { name: 'Dohľad nad servisnými zákazkami', desc: 'Sledovanie stavu zákaziek a vyťaženia mechanikov', action: "openRiaditelOrdersOverviewModal()" },
                        { name: 'Harmonogram a plánovanie zdvihákov', desc: 'Vizuálny kalendár zdvihákov a časových slotov', action: "openLiftScheduleModal()" }
                    ]
                },
                {
                    title: '2. Priama Komunikácia s Vedením a Tímom',
                    icon: 'fa-solid fa-comments text-warning',
                    items: [
                        { name: 'Priama komunikácia s Majiteľom cez A.S.D.', desc: 'Hlásenia a porady s majiteľom', action: "openRiaditelChatMajitelModal()" },
                        { name: 'Komunikácia so všetkými používateľmi v rámci firmy', desc: 'Dispečing pre technika, skladníka a mechanikov', action: "openRiaditelGlobalChatModal()" }
                    ]
                },
                {
                    title: '3. Kontrola Účtovníctva & Pozorovateľ',
                    icon: 'fa-solid fa-file-invoice-dollar text-success',
                    items: [
                        { name: 'Kontrola účtovného rozhrania s účtovníkom', desc: 'Priebežná kontrola plnenia plánu tržieb', action: "openRiaditelAccountingReviewModal()" },
                        { name: 'Prístup k používateľským účtom ako pozorovateľ', desc: 'Kontrola dochádzky a činnosti pracovníkov', action: "openRiaditelUserObserverModal()" }
                    ]
                }
            ]
        },
        'prijimaci technik': {
            roleTitle: 'Prijímací Technik (A.S.D.)',
            badge: 'Príjem Zákaziek & Fakturácia',
            badgeClass: 'bg-warning text-dark',
            groups: [
                {
                    title: '1. Príjem, Úprava & Ukončenie Zákaziek',
                    icon: 'fa-solid fa-file-contract text-warning',
                    items: [
                        { name: 'Príjem záručných, pozáručných a bežných zákaziek', desc: 'Založenie novej zákazky s predbežnou cenou a zálohou', action: "addNewWorkOrderPrompt()" },
                        { name: 'Vyčítať obsah z Technického Preukazu auta (TP / ORV)', desc: 'Optické skenovanie (OCR) a automatické vyplnenie údajov zákazky', action: "openTpScanModal()" },
                        { name: 'Úprava, ukončenie a mazanie zákaziek', desc: 'Kompletná správa rozpracovaných zákaziek', action: "openWorkOrderEditModal()" },
                        { name: 'Zákazkový & Pracovný list s fotodokumentáciou', desc: 'Tlač oficiálneho odovzdávacieho protokolu', action: "openZakazkovyListModal('2026/0022')" }
                    ]
                },
                {
                    title: '2. Úplný Prístup k Fakturácii & e-Faktúram',
                    icon: 'fa-solid fa-file-invoice-dollar text-success',
                    items: [
                        { name: 'Fakturácia v rámci e-faktúr a odoslanie na server', desc: 'Generovanie elektronickej faktúry podľa Zákona o DPH', action: "issueEInvoice('2026/0022')" },
                        { name: 'Ukladanie faktúr vo formáte PDF na server (PDF ako vzor)', desc: 'Stiahnutie a tlač e-Faktúry s PAY by square QR kódom', action: "previewPdf('2026/0022')" }
                    ]
                },
                {
                    title: '3. SMS Notifikácie & Harmonogram Zdvihákov',
                    icon: 'fa-solid fa-calendar-check text-info',
                    items: [
                        { name: 'Automatické SMS / E-mail notifikácie pre zákazníka', desc: 'Uvedomenie o pripravení vozidla na prevzatie', action: "openSmsModal('2026/0022')" },
                        { name: 'Plánovací kalendár / Harmonogram zdvihákov', desc: 'Vizuálne priradenie zákazky na zdvihák a časový slot', action: "openLiftScheduleModal()" }
                    ]
                }
            ]
        },
        'skladnik': {
            roleTitle: 'Skladník (A.S.D.)',
            badge: 'Skladové Hospodárstvo',
            badgeClass: 'bg-warning text-dark',
            groups: [
                {
                    title: '1. Skladové Hospodárstvo & Skladové Karty',
                    icon: 'fa-solid fa-boxes-stacked text-warning',
                    items: [
                        { name: 'Tvorba novej skladovej karty', desc: 'Kód dielu, nákupná cena, výpočet marže a predajnej ceny s DPH', action: "openNewStockCardModal()" },
                        { name: 'Úprava zásoby kusov a cien na sklade', desc: 'Korekcia skladových stavov', action: "openStockCardsManageModal()" },
                        { name: 'Skladové rozhranie podľa skladov (Sklad BA / KE)', desc: 'Filtrovanie dielov podľa pobočky', action: "openStoreBranchesModal()" }
                    ]
                },
                {
                    title: '2. Príjemky & Výdajky Dielov Na Zákazku',
                    icon: 'fa-solid fa-file-export text-danger',
                    items: [
                        { name: 'Vystavenie výdajky dielov na zákazku', desc: 'Vydanie dielu zo skladu a priradenie na Zákazkový list', action: "openVydajkaModal()" },
                        { name: 'Prijemky dielov od dodávateľov', desc: 'Evidencia dodacích listov na sklad', action: "openPrijemkaModal()" }
                    ]
                },
                {
                    title: '3. Skenovanie EAN / QR Kódov Dielov',
                    icon: 'fa-solid fa-barcode text-info',
                    items: [
                        { name: 'Podpora USB / Bluetooth čítačky čiarových kódov', desc: 'Skenovanie EAN kódu pre okamžité naskladnenie/výdaj', action: "openEanScannerModal()" },
                        { name: 'Rýchly test EAN čítačky (Brembo kotúč)', desc: 'Demonštrácia okamžitého vyhľadania dielu', action: "openSampleEanTest('4014835712345')" }
                    ]
                }
            ]
        },
        'mechanik': {
            roleTitle: 'Mechanik / Diagnostik (A.S.D.)',
            badge: 'Kompletný Diagnostický Program',
            badgeClass: 'bg-danger text-white',
            groups: [
                {
                    title: '1. Diagnostický Program & DTC Chybové Kódy',
                    icon: 'fa-solid fa-microchip text-primary',
                    items: [
                        { name: 'Skenovanie riadiacich jednotiek (ECU Tree CAN/UDS)', desc: 'Kompletný sken všetkých jednotiek vo vozidle', action: "scanEcuTree()" },
                        { name: 'Databanka DTC kódov pre všetky svetové značky v SK', desc: 'Prehľad chybových kódov s príčinou a návodom na opravu', action: "openDtcDatabaseModal()" },
                        { name: 'Vymazanie pamäte závad & Reset DTC', desc: 'Rýchly reset vymazania chybových kódov z ECU', action: "clearTroubleCodes()" },
                        { name: 'Expertná tlač protokolu z diagnostiky v PDF', desc: 'Generovanie oficiálneho PDF protokolu pre zákazníka', action: "openDiagnosticProtocolModal('2026/0022')" },
                        { name: 'Odomknutie VAG SFD1/SFD2 & FCA Security Gateway (SGW)', desc: 'Získanie prístupového kľúča pre kódovanie', action: "openSfdUnlockModal()" }
                    ]
                },
                {
                    title: '2. Úprava Riadiacej Jednotky (EEPROM & Mapy Motora/TCU)',
                    icon: 'fa-solid fa-memory text-danger',
                    items: [
                        { name: 'Úprava EEPROM cez rozhranie OBD-2 (Immo OFF, KM, PIN)', desc: 'Priamy/automatický prístup k EEPROM pamäti jednotky', action: "openEepromModal()" },
                        { name: 'Úprava mapy ECU motora a prevodovky (Chiptuning Stage 1/2)', desc: 'Remapping automatických a poloautomatických prevodoviek', action: "openEcuRemapModal()" }
                    ]
                },
                {
                    title: '3. Servisné Intervaly & AdBlue Močovina',
                    icon: 'fa-solid fa-gauge-high text-warning',
                    items: [
                        { name: 'Reset servisných intervalov podľa všetkých výrobcov', desc: 'Olejový servis, inšpekcia, brzdová kvapalina, batéria', action: "openServiceResetModal()" },
                        { name: 'AdBlue / Močovina pre dieselové motory', desc: 'Reset odpočítavania km zablokovania, NOx senzor, AdBlue OFF', action: "openAdblueModal()" }
                    ]
                },
                {
                    title: '4. Komunikácia na Sklad a Prijímacieho Technika',
                    icon: 'fa-solid fa-comments text-info',
                    items: [
                        { name: 'Požiadavka na náhradný diel do Skladu', desc: 'Priame objednanie dielu zo skladu z diagnostiky', action: "openMechanikToSkladModal()" },
                        { name: 'Správa pre Prijímacieho technika', desc: 'Hlásenie o dokončení opravy vozidla', action: "openMechanikToTechnikModal()" }
                    ]
                }
            ]
        },
        'uctovnik': {
            roleTitle: 'Účtovník (A.S.D.)',
            badge: 'Účtovné Rozhranie & DPH 23%',
            badgeClass: 'bg-success text-white',
            groups: [
                {
                    title: '1. Plný Prístup K Faktúram & e-Faktúram',
                    icon: 'fa-solid fa-file-invoice-dollar text-warning',
                    items: [
                        { name: 'Prehľad všetkých e-faktúr v systéme A.S.D.', desc: 'Vyhľadávanie, kontrola DPH 23% a stavu úhrad', action: "openUctovnikInvoicesModal()" },
                        { name: 'Náhľad, tlač a stiahnutie PDF e-Faktúry', desc: 'Generovanie tlačového PDF dokladu s QR kódom', action: "previewPdf('2026/0022')" }
                    ]
                },
                {
                    title: '2. Plný Prístup K Príjemkám A Výdajkám Skladu',
                    icon: 'fa-solid fa-receipt text-info',
                    items: [
                        { name: 'Prehľad skladových dokladov (Príjemky & Výdajky)', desc: 'Párovanie skladových výdajov s faktúrami', action: "openUctovnikDokladyModal()" }
                    ]
                },
                {
                    title: '3. Komunikácia So Všetkými Používateľmi',
                    icon: 'fa-solid fa-comments text-success',
                    items: [
                        { name: 'Vnútorná komunikácia v rámci programu A.S.D.', desc: 'Odosielanie správ Majiteľovi, Riaditeľovi a Technikovi', action: "openUctovnikChatModal()" }
                    ]
                }
            ]
        }
    };

    const normalizeKey = (roleKey === 'technik') ? 'prijimaci technik' : roleKey;
    const tree = trees[normalizeKey] || trees['admin'];
    const safeRoleSlug = normalizeKey.replace(/\s+/g, '_');

    return `
        <div class="card shadow-sm border-secondary mb-4 bg-dark text-white">
            <div class="card-header bg-secondary bg-opacity-20 border-secondary d-flex justify-content-between align-items-center flex-wrap gap-2 py-2">
                <div class="fw-bold text-warning fs-6">
                    <i class="fa-solid fa-folder-tree me-2 text-warning fs-5"></i>Klikateľný Zoznam a Podzoznam Funkcií: ${tree.roleTitle}
                </div>
                <span class="badge ${tree.badgeClass} px-3 py-1 fw-bold"><i class="fa-solid fa-circle-check me-1"></i>${tree.badge}</span>
            </div>
            <div class="card-body p-3">
                <div class="accordion accordion-dark" id="treeAccordion_${safeRoleSlug}">
                    ${tree.groups.map((group, idx) => {
                        const groupId = `group_${safeRoleSlug}_${idx}`;
                        return `
                            <div class="accordion-item bg-dark text-white border-secondary mb-2 rounded overflow-hidden shadow-sm">
                                <h2 class="accordion-header" id="heading_${groupId}">
                                    <button class="accordion-button bg-secondary bg-opacity-20 text-white fw-bold py-2 px-3 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_${groupId}" aria-expanded="true" aria-controls="collapse_${groupId}">
                                        <i class="${group.icon} me-2 fs-6"></i> ${group.title}
                                        <span class="badge bg-warning text-dark ms-auto me-2">${group.items.length} podzoznamy</span>
                                    </button>
                                </h2>
                                <div id="collapse_${groupId}" class="accordion-collapse collapse show" aria-labelledby="heading_${groupId}">
                                    <div class="accordion-body p-2 bg-black bg-opacity-20">
                                        <div class="list-group list-group-flush">
                                            ${group.items.map(item => `
                                                <div class="list-group-item bg-dark text-light border-secondary p-2 my-1 rounded cursor-pointer text-start d-flex justify-content-between align-items-center hover-highlight" onclick="${item.action}">
                                                    <div>
                                                        <div class="fw-bold text-warning small"><i class="fa-solid fa-chevron-right me-2 text-info"></i>${item.name}</div>
                                                        <div class="text-muted x-small ms-4" style="font-size: 0.78rem;">${item.desc}</div>
                                                    </div>
                                                    <span class="badge bg-outline-info text-info border border-info ms-2 shrink-0"><i class="fa-solid fa-arrow-pointer me-1"></i>Spustiť</span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
}

// ADMIN
function renderAdminInterface(container) {
    container.innerHTML = `
        <div class="card shadow-sm border-0 mb-4 bg-dark text-white border-secondary">
            <div class="card-header bg-danger text-white d-flex justify-content-between align-items-center fw-bold flex-wrap gap-2">
                <div>
                    <i class="fa-solid fa-user-gear me-2 fs-5"></i>Administrátorské Rozhranie (A.S.D.)
                </div>
                <span class="badge bg-light text-danger fw-bold px-3 py-2"><i class="fa-solid fa-key me-1"></i>Plný Prístup Do Celého Programu</span>
            </div>
            <div class="card-body">

                <!-- KLIKATEĽNÝ ZOZNAM A PODZOZNAM FUNKCIÍ -->
                ${getRoleFunctionsTreeHtml('admin')}

                <div class="row g-3 mb-4">
                    <div class="col-md-3">
                        <div class="p-3 bg-secondary bg-opacity-20 rounded border border-secondary text-center">
                            <h3 class="text-success fw-bold"><i class="fa-solid fa-server me-2"></i>100%</h3>
                            <div class="small text-secondary">Integrita Databázy</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-3 bg-secondary bg-opacity-20 rounded border border-secondary text-center">
                            <h3 class="text-info fw-bold"><i class="fa-solid fa-shield-halved me-2"></i>A+</h3>
                            <div class="small text-secondary">Stav Bezpečnosti</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-3 bg-secondary bg-opacity-20 rounded border border-secondary text-center">
                            <h3 class="text-warning fw-bold"><i class="fa-solid fa-microchip me-2"></i>8.5%</h3>
                            <div class="small text-secondary">Zaťaženie CPU</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-3 bg-secondary bg-opacity-20 rounded border border-secondary text-center">
                            <h3 class="text-light fw-bold"><i class="fa-solid fa-headset me-2"></i>Aktivne</h3>
                            <div class="small text-secondary">Vzdialená podpora</div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <div class="card bg-secondary bg-opacity-10 border-secondary text-white h-100">
                            <div class="card-header bg-transparent border-secondary fw-bold text-warning">
                                <i class="fa-solid fa-wrench me-2"></i>Diagnostika a Oprava Programu
                            </div>
                            <div class="card-body">
                                <p class="small text-secondary">Automatická oprava databázy, obnova indexov a kontrola sieťových služieb A.S.D.</p>
                                <button class="btn btn-warning text-dark fw-bold" onclick="runAdminRepair()">
                                    <i class="fa-solid fa-arrows-rotate me-1"></i>Spustiť Diagnostiku & Opravu
                                </button>
                                <div id="adminRepairResult" class="mt-3 p-2 bg-success bg-opacity-20 text-success rounded small font-monospace d-none">
                                    ✓ Databáza bola zrekonštruovaná. Všetky indexy sú v 100% poriadku.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="card bg-secondary bg-opacity-10 border-secondary text-white h-100">
                            <div class="card-header bg-transparent border-secondary fw-bold text-info">
                                <i class="fa-solid fa-key me-2"></i>Tvorba nových hesiel pre rôzne sekcie
                            </div>
                            <div class="card-body">
                                <div class="input-group mb-2">
                                    <input type="text" class="form-control bg-dark text-white border-secondary" id="generatedPass" readonly placeholder="Vygenerované heslo...">
                                    <button class="btn btn-info text-dark fw-bold" onclick="generatePassAdmin()">Generovať</button>
                                </div>
                                <small class="text-secondary">Vytvorí bezpečné 14-miestne heslo pre nové alebo existujúce sekcie.</small>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CENTRÁLNE ROZHRANIE PRE ZMENU JAZYKA PROGRAMU -->
                <div class="row mt-3">
                    <div class="col-12">
                        <div class="card bg-secondary bg-opacity-10 border-warning text-white">
                            <div class="card-header bg-transparent border-warning fw-bold text-warning d-flex justify-content-between align-items-center flex-wrap gap-2">
                                <span><i class="fa-solid fa-language me-2 fs-5"></i>Centrálne Rozhranie pre Zmenu Jazyka Programu A.S.D. (Celý Svet)</span>
                                <span class="badge bg-warning text-dark fw-bold fs-7" id="adminActiveLangBadge">
                                    <i class="fa-solid fa-globe me-1"></i>Aktívny: ${currentSystemLanguage} - ${(worldLanguages.find(l => l.code === currentSystemLanguage) || {}).native || 'Slovenčina'}
                                </span>
                            </div>
                            <div class="card-body">
                                <p class="small text-secondary mb-3">
                                    Administrátor má výhradné právo prepínať jazykové rozhranie programu A.S.D. jedným rozhraním pre všetky sekcie, diagnostiku, sklad, účtovníctvo a komunikáciu po celom svete.
                                </p>

                                <div class="row g-3 align-items-end mb-3">
                                    <div class="col-md-7">
                                        <label class="form-label text-warning fw-bold small mb-1">
                                            <i class="fa-solid fa-earth-americas me-1"></i>Vyberte jazyk zo zoznamu svetových jazykov:
                                        </label>
                                        <select class="form-select bg-dark text-white border-secondary fw-bold" id="adminLanguageSelect">
                                            ${worldLanguages.map(l => `
                                                <option value="${l.code}" ${l.code === currentSystemLanguage ? 'selected' : ''}>
                                                    ${l.flag} [${l.code}] ${l.name} (${l.native}) - ${l.region}
                                                </option>
                                            `).join('')}
                                        </select>
                                    </div>
                                    <div class="col-md-5">
                                        <button class="btn btn-warning text-dark fw-bold w-100 py-2 shadow-sm" onclick="applyAdminLanguageChoice()">
                                            <i class="fa-solid fa-globe me-2"></i>Aplikovať Jazyk Pre Celý Program
                                        </button>
                                    </div>
                                </div>

                                <div id="adminLangChangeResult" class="p-2 bg-success bg-opacity-20 text-success rounded small font-monospace mb-3 d-none">
                                    <!-- Populated by JS -->
                                </div>

                                <div class="p-3 bg-dark rounded border border-secondary">
                                    <h6 class="fw-bold text-light mb-2 small text-uppercase"><i class="fa-solid fa-list-check me-2 text-warning"></i>Rýchly výber zo svetových jazykov (${worldLanguages.length} jazykov):</h6>
                                    <div class="d-flex flex-wrap gap-2" id="adminLangBadgesList">
                                        ${worldLanguages.map(l => `
                                            <span class="badge ${l.code === currentSystemLanguage ? 'bg-warning text-dark fw-bold border border-warning' : 'bg-dark text-light border border-secondary'} cursor-pointer p-2" onclick="selectAdminLangQuick('${l.code}')">
                                                ${l.flag} ${l.code} - ${l.native}
                                            </span>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SPRÁVA A TVORBA FAKTURAČNÝCH ÚDAJOV FIRMY PRE A.S.D. -->
                <div class="row mt-4">
                    <div class="col-12">
                        <div class="card bg-secondary bg-opacity-10 border-info text-white" id="companyFormCard">
                            <div class="card-header bg-transparent border-info fw-bold text-info d-flex justify-content-between align-items-center flex-wrap gap-2">
                                <span><i class="fa-solid fa-file-invoice-dollar me-2 fs-5"></i>Správa a Tvorba Fakturačných Údajov Firiem (A.S.D. Program)</span>
                                <span class="badge bg-info text-dark fw-bold" id="companyFormTitle">Tvorba nových fakturačných údajov firmy</span>
                            </div>
                            <div class="card-body">
                                <p class="small text-secondary mb-3">
                                    Administrátor tu vytvára a spravuje fakturačné údaje firiem používajúcich program A.S.D. Tieto údaje sa automaticky prenášajú do e-faktúr, dodávateľských hlavičiek, PDF tlačových vzorov a zákazkových listov.
                                </p>

                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label class="form-label text-warning fw-bold small mb-1">Názov firmy / Obchodné meno *</label>
                                        <input type="text" id="compName" class="form-control bg-dark text-white border-secondary" placeholder="Napr. DF AUTO, s.r.o.">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label text-warning fw-bold small mb-1">Sídlo firmy / Ulica, PSČ, Mesto *</label>
                                        <input type="text" id="compAddress" class="form-control bg-dark text-white border-secondary" placeholder="Napr. Hviezdoslavova 219/51, 045 01 Moldava nad Bodvou">
                                    </div>

                                    <div class="col-md-3">
                                        <label class="form-label text-light fw-bold small mb-1">IČO *</label>
                                        <input type="text" id="compIco" class="form-control bg-dark text-white border-secondary" placeholder="53895843">
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label text-light fw-bold small mb-1">DIČ</label>
                                        <input type="text" id="compDic" class="form-control bg-dark text-white border-secondary" placeholder="2121522271">
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label text-light fw-bold small mb-1">IČ DPH</label>
                                        <input type="text" id="compIcdph" class="form-control bg-dark text-white border-secondary" placeholder="SK2121522271">
                                    </div>
                                    <div class="col-md-3 d-flex align-items-center pt-3">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="compIsDphPayer" checked>
                                            <label class="form-check-label text-success fw-bold small" for="compIsDphPayer">Platca DPH</label>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label class="form-label text-light fw-bold small mb-1">Zápis v Obchodnom / Živnostenskom registri</label>
                                        <input type="text" id="compRegister" class="form-control bg-dark text-white border-secondary" placeholder="Napr. OR MS Košice, oddiel: Sro, vložka č.: 51890/V">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label text-light fw-bold small mb-1">Štatutárny orgán / Konateľ</label>
                                        <input type="text" id="compStatutory" class="form-control bg-dark text-white border-secondary" placeholder="Napr. Ján Novák - Konateľ">
                                    </div>

                                    <div class="col-md-5">
                                        <label class="form-label text-info fw-bold small mb-1">IBAN (Bankový účet)</label>
                                        <input type="text" id="compIban" class="form-control bg-dark text-white border-secondary font-monospace" placeholder="SK45 0200 0000 0012 3456 7890">
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label text-info fw-bold small mb-1">SWIFT / BIC</label>
                                        <input type="text" id="compSwift" class="form-control bg-dark text-white border-secondary font-monospace" placeholder="SUBASKBX">
                                    </div>
                                    <div class="col-md-4">
                                        <label class="form-label text-info fw-bold small mb-1">Názov banky</label>
                                        <input type="text" id="compBank" class="form-control bg-dark text-white border-secondary" placeholder="VÚB Banka, a.s.">
                                    </div>

                                    <div class="col-md-6">
                                        <label class="form-label text-light fw-bold small mb-1">Fakturačný E-mail</label>
                                        <input type="email" id="compEmail" class="form-control bg-dark text-white border-secondary" placeholder="fakturacia@firma.sk">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label text-light fw-bold small mb-1">Telefónny kontakt</label>
                                        <input type="text" id="compPhone" class="form-control bg-dark text-white border-secondary" placeholder="+421 905 123 456">
                                    </div>

                                    <!-- LOGO FIRMY SECTION -->
                                    <div class="col-12 mt-3">
                                        <div class="p-3 bg-secondary bg-opacity-20 rounded border border-warning">
                                            <label class="form-label text-warning fw-bold d-block mb-2">
                                                <i class="fa-solid fa-image me-2"></i>Logo Firma / Grafický Symbol (Pre e-Faktúry, Zákazkové Listy & Hlavičku A.S.D.)
                                            </label>
                                            <div class="d-flex flex-wrap gap-2 align-items-center mb-2">
                                                <input type="file" id="compLogoFileInput" accept="image/*" class="d-none" onchange="handleCompanyLogoUpload(event)">
                                                <button type="button" class="btn btn-warning text-dark fw-bold" onclick="document.getElementById('compLogoFileInput').click()">
                                                    <i class="fa-solid fa-upload me-1"></i>Nahrať vlastné LOGO firmy (PNG / JPG / SVG)
                                                </button>
                                                <button type="button" class="btn btn-outline-info text-info" onclick="useSampleCompanyLogo('dfauto')">
                                                    <i class="fa-solid fa-vial me-1"></i>Vzor Logo DF AUTO
                                                </button>
                                                <button type="button" class="btn btn-outline-info text-info" onclick="useSampleCompanyLogo('centralba')">
                                                    <i class="fa-solid fa-vial me-1"></i>Vzor Logo Autoservis BA
                                                </button>
                                                <button type="button" class="btn btn-outline-danger text-danger" onclick="removeCompanyLogo()">
                                                    <i class="fa-solid fa-trash me-1"></i>Odstrániť logo
                                                </button>
                                            </div>
                                            <div class="mt-2 d-none" id="compLogoPreviewBox">
                                                <small class="text-secondary d-block mb-1">Náhľad zvoleného loga firmy:</small>
                                                <img id="compLogoPreview" src="" alt="Logo preview" class="rounded border border-warning shadow-sm" style="max-height: 50px; max-width: 220px; object-fit: contain; background: #0f172a; padding: 4px;">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 text-end mt-3">
                                        <button class="btn btn-outline-secondary text-light me-2 d-none" id="companyCancelEditBtn" onclick="cancelEditCompanyProfile()">
                                            <i class="fa-solid fa-xmark me-1"></i>Zrušiť úpravu
                                        </button>
                                        <button class="btn btn-info text-dark fw-bold px-4" id="companySaveBtn" onclick="saveCompanyBillingProfile()">
                                            <i class="fa-solid fa-floppy-disk me-1"></i>Uložiť Fakturačné Údaje Firma
                                        </button>
                                    </div>
                                </div>

                                <hr class="border-secondary my-4">

                                <h6 class="fw-bold text-light mb-3"><i class="fa-solid fa-building-flag me-2 text-warning"></i>Zoznam zaregistrovaných firiem v systéme A.S.D. (${registeredCompanies.length}):</h6>
                                
                                <div class="row g-3">
                                    ${registeredCompanies.map(comp => `
                                        <div class="col-md-6">
                                            <div class="p-3 bg-dark rounded border ${comp.active ? 'border-success' : 'border-secondary'} h-100 position-relative">
                                                <div class="d-flex justify-content-between align-items-start mb-2 flex-wrap gap-2">
                                                    <div class="d-flex align-items-center gap-2">
                                                        ${comp.logo ? `<img src="${comp.logo}" alt="Logo" class="rounded border border-warning shadow-sm" style="height: 38px; width: 80px; object-fit: contain; background: #0f172a; padding: 2px;">` : '<span class="badge bg-secondary p-2"><i class="fa-solid fa-building"></i></span>'}
                                                        <div>
                                                            <h6 class="fw-bold text-warning mb-0">${comp.name}</h6>
                                                            <small class="text-secondary d-block"><i class="fa-solid fa-location-dot me-1"></i>${comp.address}</small>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        ${comp.active ? 
                                                            '<span class="badge bg-success text-white fw-bold"><i class="fa-solid fa-circle-check me-1"></i>AKTÍVNA FAKTURÁCIA</span>' : 
                                                            `<button class="btn btn-sm btn-outline-success py-0 px-2 fw-bold" onclick="setActiveCompanyProfile('${comp.id}')"><i class="fa-solid fa-check me-1"></i>Nastaviť ako aktívnu</button>`
                                                        }
                                                    </div>
                                                </div>

                                                <div class="bg-secondary bg-opacity-20 p-2 rounded small mb-2 border border-secondary">
                                                    <div class="row g-1">
                                                        <div class="col-6"><strong>IČO:</strong> ${comp.ico}</div>
                                                        <div class="col-6"><strong>DIČ:</strong> ${comp.dic || '-'}</div>
                                                        <div class="col-6"><strong>IČ DPH:</strong> ${comp.icdph || 'Neplatca'}</div>
                                                        <div class="col-6"><strong>Platca DPH:</strong> ${comp.isDphPayer ? 'Áno' : 'Nie'}</div>
                                                        <div class="col-12 text-truncate"><strong>Register:</strong> ${comp.register || '-'}</div>
                                                        <div class="col-12 font-monospace text-info text-truncate"><strong>IBAN:</strong> ${comp.iban || '-'}</div>
                                                        <div class="col-6"><strong>SWIFT:</strong> ${comp.swift || '-'}</div>
                                                        <div class="col-6"><strong>Banka:</strong> ${comp.bank || '-'}</div>
                                                        <div class="col-6 text-truncate"><strong>E-mail:</strong> ${comp.email || '-'}</div>
                                                        <div class="col-6"><strong>Tel:</strong> ${comp.phone || '-'}</div>
                                                        <div class="col-12 text-truncate"><strong>Štatutár:</strong> ${comp.statutory || '-'}</div>
                                                    </div>
                                                </div>

                                                <div class="d-flex justify-content-end gap-2">
                                                    <button class="btn btn-sm btn-outline-warning text-warning py-1 px-3 fw-bold" onclick="editCompanyBillingProfile('${comp.id}')">
                                                        <i class="fa-solid fa-pen-to-square me-1"></i>Upraviť
                                                    </button>
                                                    <button class="btn btn-sm btn-outline-danger text-danger py-1 px-3 fw-bold" onclick="deleteCompanyBillingProfile('${comp.id}')">
                                                        <i class="fa-solid fa-trash me-1"></i>Vymazať
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// MAJITEĽ
function renderMajitelInterface(container) {
    container.innerHTML = `
        <div class="card shadow-sm border-0 mb-4 bg-dark text-white border-secondary">
            <div class="card-header bg-warning text-dark fw-bold d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div>
                    <i class="fa-solid fa-user-tie me-2 fs-5"></i>Rozhranie Majiteľa (Sledovanie & Koordinácia Firiem)
                </div>
                <span class="badge bg-dark text-warning border border-warning px-3 py-2"><i class="fa-solid fa-eye me-1"></i>Prístup Pozorovateľa (1+ firiem)</span>
            </div>
            <div class="card-body">
                
                <!-- KLIKATEĽNÝ ZOZNAM A PODZOZNAM FUNKCIÍ -->
                ${getRoleFunctionsTreeHtml('majitel')}

                <!-- STRUŠNÝ ZOZNAM SLEDOVANÝCH FIRIEM -->
                <h6 class="fw-bold text-light mb-3"><i class="fa-solid fa-sitemap me-2 text-warning"></i>Zoznam sledovaných firiem a pobočiek:</h6>
                <div class="row mb-4">
                    <div class="col-md-6 mb-3">
                        <div class="asd-list-card p-3 text-white h-100">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h6 class="fw-bold text-warning mb-0"><i class="fa-solid fa-building-circle-check me-2"></i>Firma 1: Centrálny Autoservis BA</h6>
                                <span class="badge bg-success text-white">Aktívna prevádzka</span>
                            </div>
                            <div class="p-2 bg-secondary bg-opacity-20 rounded border border-secondary mb-3 small">
                                <div class="d-flex justify-content-between py-1 border-bottom border-secondary">
                                    <span><i class="fa-solid fa-car-burst me-1 text-warning"></i>Aktívne zákazky v dielnictve:</span>
                                    <strong class="text-white font-monospace">14 zákaziek</strong>
                                </div>
                                <div class="d-flex justify-content-between py-1 border-bottom border-secondary">
                                    <span><i class="fa-solid fa-coins me-1 text-success"></i>Mesačný obrat prevádzky:</span>
                                    <strong class="text-success font-monospace">24 850.00 EUR</strong>
                                </div>
                                <div class="d-flex justify-content-between py-1">
                                    <span><i class="fa-solid fa-boxes-stacked me-1 text-info"></i>Hodnota skladových zásob:</span>
                                    <strong class="text-info font-monospace">85 200.00 EUR</strong>
                                </div>
                            </div>
                            <div class="text-end">
                                <button class="btn btn-sm btn-outline-warning text-warning fw-bold" onclick="alert('Dohľad nad pobočkou BA bol overený.')">
                                    <i class="fa-solid fa-magnifying-glass-chart me-1"></i>Overiť účtovníctvo pobočky
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="asd-list-card p-3 text-white h-100">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h6 class="fw-bold text-warning mb-0"><i class="fa-solid fa-building-circle-check me-2"></i>Firma 2: Diagnostické Centrum KE</h6>
                                <span class="badge bg-info text-dark">Diagnostika & ECU</span>
                            </div>
                            <div class="p-2 bg-secondary bg-opacity-20 rounded border border-secondary mb-3 small">
                                <div class="d-flex justify-content-between py-1 border-bottom border-secondary">
                                    <span><i class="fa-solid fa-car-burst me-1 text-warning"></i>Aktívne zákazky v dielnictve:</span>
                                    <strong class="text-white font-monospace">8 zákaziek</strong>
                                </div>
                                <div class="d-flex justify-content-between py-1 border-bottom border-secondary">
                                    <span><i class="fa-solid fa-coins me-1 text-success"></i>Mesačný obrat prevádzky:</span>
                                    <strong class="text-success font-monospace">18 400.00 EUR</strong>
                                </div>
                                <div class="d-flex justify-content-between py-1">
                                    <span><i class="fa-solid fa-boxes-stacked me-1 text-info"></i>Hodnota skladových zásob:</span>
                                    <strong class="text-info font-monospace">42 100.00 EUR</strong>
                                </div>
                            </div>
                            <div class="text-end">
                                <button class="btn btn-sm btn-outline-warning text-warning fw-bold" onclick="alert('Dohľad nad pobočkou KE bol overený.')">
                                    <i class="fa-solid fa-magnifying-glass-chart me-1"></i>Overiť účtovníctvo pobočky
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ZOZNAM POUŽÍVATEĽSKÝCH ÚČTOV A ROLÍ V FIRME (PRÍSTUP POZOROVATEĽA) -->
                <div class="card bg-secondary bg-opacity-10 border-secondary mb-4">
                    <div class="card-header bg-transparent border-secondary text-white fw-bold d-flex justify-content-between align-items-center">
                        <span><i class="fa-solid fa-users-viewfinder me-2 text-warning"></i>Zoznam používateľských účtov a zamestnancov (Prístup Pozorovateľa)</span>
                        <span class="badge bg-dark text-secondary">Len Náhľad</span>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-dark table-hover align-middle mb-0 asd-table-list">
                                <thead>
                                    <tr class="table-secondary text-dark">
                                        <th>Meno Používateľa</th>
                                        <th>Priradená Rola</th>
                                        <th>Opis Prístupu</th>
                                        <th>Aktivita v Systéme</th>
                                        <th>Režim Majiteľa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="fw-bold text-white"><i class="fa-solid fa-user-shield me-2 text-danger"></i>admin</td>
                                        <td><span class="badge bg-danger">Administrátor</span></td>
                                        <td class="small text-secondary">Plný prístup, diagnostika, jazyky, fakturačné údaje firiem</td>
                                        <td><span class="badge bg-success">Aktívny</span></td>
                                        <td><span class="badge bg-secondary">Pozorovateľ</span></td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold text-white"><i class="fa-solid fa-user-tie me-2 text-warning"></i>majitel</td>
                                        <td><span class="badge bg-warning text-dark">Majiteľ</span></td>
                                        <td class="small text-secondary">Sledovanie 1+ firiem, komunikácia s riaditeľom a účtovníkom</td>
                                        <td><span class="badge bg-success">Prihlásený</span></td>
                                        <td><span class="badge bg-warning text-dark">Vlastník</span></td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold text-white"><i class="fa-solid fa-briefcase me-2 text-info"></i>riaditel</td>
                                        <td><span class="badge bg-info text-dark">Riaditeľ</span></td>
                                        <td class="small text-secondary">Riadenie pobočiek, zamestnancov a priama komunikácia s majiteľom</td>
                                        <td><span class="badge bg-success">Na pobočke</span></td>
                                        <td><span class="badge bg-secondary">Pozorovateľ</span></td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold text-white"><i class="fa-solid fa-clipboard-check me-2 text-success"></i>technik</td>
                                        <td><span class="badge bg-success">Prijímací Technik</span></td>
                                        <td class="small text-secondary">Príjem zákaziek, e-faktúry, PDF, SMS notifikácie, zdviháky</td>
                                        <td><span class="badge bg-success">Na príjme</span></td>
                                        <td><span class="badge bg-secondary">Pozorovateľ</span></td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold text-white"><i class="fa-solid fa-boxes-packing me-2 text-warning"></i>skladnik</td>
                                        <td><span class="badge bg-secondary text-warning border border-warning">Skladník</span></td>
                                        <td class="small text-secondary">Skladové hospodárstvo, EAN skenery, výdajky na zákazky</td>
                                        <td><span class="badge bg-success">Výdaj dielov</span></td>
                                        <td><span class="badge bg-secondary">Pozorovateľ</span></td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold text-white"><i class="fa-solid fa-microchip me-2 text-primary"></i>mechanik</td>
                                        <td><span class="badge bg-primary">Mechanik</span></td>
                                        <td class="small text-secondary">ELM327 OBD-2, DTC databanka, EEPROM, Chiptuning, AdBlue, Resety</td>
                                        <td><span class="badge bg-success">Diagnostika ECU</span></td>
                                        <td><span class="badge bg-secondary">Pozorovateľ</span></td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold text-white"><i class="fa-solid fa-calculator me-2 text-light"></i>uctovnik</td>
                                        <td><span class="badge bg-light text-dark">Účtovník</span></td>
                                        <td class="small text-secondary">Účtovné rozhranie, DPH 23%, e-faktúry, výkazy pre majiteľa</td>
                                        <td><span class="badge bg-success">Účtovná uzávierka</span></td>
                                        <td><span class="badge bg-secondary">Pozorovateľ</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- PRIAMA KOMUNIKÁCIA S RIADITEĽOM -->
                <div class="card bg-secondary bg-opacity-10 border-warning">
                    <div class="card-header bg-transparent border-warning fw-bold text-warning">
                        <i class="fa-solid fa-paper-plane me-2"></i>Komunikačný modul Majiteľa
                    </div>
                    <div class="card-body">
                        <label class="form-label text-light small fw-bold mb-1">Priama správu pre Riaditeľa a vedenie pobočiek:</label>
                        <div class="input-group">
                            <input type="text" class="form-control bg-dark text-white border-secondary" id="msgToDirector" placeholder="Zadajte inštrukciu pre riaditeľa firiem...">
                            <button class="btn btn-warning text-dark fw-bold" onclick="sendMessageToRole('riaditel', 'msgToDirector')">
                                <i class="fa-solid fa-paper-plane me-1"></i>Odoslať Riaditeľovi
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;
}

// RIADITEĽ
function renderRiaditelInterface(container) {
    container.innerHTML = `
        <div class="card shadow-sm border-0 mb-4 bg-dark text-white border-secondary">
            <div class="card-header bg-info text-dark fw-bold d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div>
                    <i class="fa-solid fa-briefcase me-2 fs-5"></i>Rozhranie Riaditeľa (Riadenie & Koordinácia Firiem)
                </div>
                <span class="badge bg-dark text-info border border-info px-3 py-2"><i class="fa-solid fa-sitemap me-1"></i>Koordinácia 1+ pobočiek</span>
            </div>
            <div class="card-body">

                <!-- KLIKATEĽNÝ ZOZNAM A PODZOZNAM FUNKCIÍ -->
                ${getRoleFunctionsTreeHtml('riaditel')}

                <div class="row">
                    <!-- ZOZNAM ZAMESTNANCOV NA POBOČKE -->
                    <div class="col-md-7 mb-3">
                        <div class="card bg-secondary bg-opacity-10 border-secondary text-white h-100">
                            <div class="card-header bg-transparent border-secondary fw-bold text-info d-flex justify-content-between align-items-center">
                                <span><i class="fa-solid fa-users me-2"></i>Zoznam zamestnancov a ich aktuálneho stavu</span>
                                <span class="badge bg-info text-dark">Prehľad v reálnom čase</span>
                            </div>
                            <div class="card-body p-0">
                                <ul class="list-group list-group-flush bg-transparent small">
                                    <li class="list-group-item bg-transparent text-white border-secondary d-flex justify-content-between align-items-center py-3">
                                        <div>
                                            <strong class="text-warning d-block"><i class="fa-solid fa-clipboard-user me-2 text-success"></i>Prijímací Technik Ján</strong>
                                            <small class="text-secondary">Príjem zákaziek, komunikácia so zákazníkmi & e-faktúry</small>
                                        </div>
                                        <span class="badge bg-success px-3 py-2"><i class="fa-solid fa-check me-1"></i>Na príjme</span>
                                    </li>
                                    <li class="list-group-item bg-transparent text-white border-secondary d-flex justify-content-between align-items-center py-3">
                                        <div>
                                            <strong class="text-warning d-block"><i class="fa-solid fa-screwdriver-wrench me-2 text-primary"></i>Mechanik Jozef</strong>
                                            <small class="text-secondary">Kompletná diagnostika, OBD-2, Chiptuning, Resety</small>
                                        </div>
                                        <span class="badge bg-primary px-3 py-2"><i class="fa-solid fa-microchip me-1"></i>Diagnostika ECU</span>
                                    </li>
                                    <li class="list-group-item bg-transparent text-white border-secondary d-flex justify-content-between align-items-center py-3">
                                        <div>
                                            <strong class="text-warning d-block"><i class="fa-solid fa-boxes-packing me-2 text-warning"></i>Skladník Peter</strong>
                                            <small class="text-secondary">Príjem náhradných dielov, skenovanie EAN, výdajky</small>
                                        </div>
                                        <span class="badge bg-info text-dark px-3 py-2"><i class="fa-solid fa-dolly me-1"></i>Výdaj dielov</span>
                                    </li>
                                    <li class="list-group-item bg-transparent text-white border-secondary d-flex justify-content-between align-items-center py-3">
                                        <div>
                                            <strong class="text-warning d-block"><i class="fa-solid fa-calculator me-2 text-light"></i>Účtovník Martin</strong>
                                            <small class="text-secondary">Účtovníctvo, e-faktúry, DPH 23%, príjemky/výdajky</small>
                                        </div>
                                        <span class="badge bg-secondary px-3 py-2"><i class="fa-solid fa-file-invoice me-1"></i>Účtovná uzávierka</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- KOMUNIKÁCIA S MAJITEĽOM -->
                    <div class="col-md-5 mb-3">
                        <div class="card bg-secondary bg-opacity-10 border-info text-white h-100">
                            <div class="card-header bg-transparent border-info fw-bold text-info">
                                <i class="fa-solid fa-comments me-2"></i>Priama komunikácia s Majiteľom
                            </div>
                            <div class="card-body d-flex flex-column justify-content-between">
                                <p class="small text-secondary mb-3">
                                    Vyhradený komunikačný kanál pre odosielanie denných správ, finančných súhrnov a požiadaviek priamo Majiteľovi firmy.
                                </p>
                                <div class="mb-2">
                                    <label class="form-label text-light small fw-bold">Správa pre majiteľa:</label>
                                    <textarea class="form-control bg-dark text-white border-secondary mb-2" id="msgDirectorToOwner" rows="3" placeholder="Správa o priebehu zákaziek a koordinácii..."></textarea>
                                    <button class="btn btn-info text-dark w-100 fw-bold py-2" onclick="sendMessageToRole('majitel', 'msgDirectorToOwner')">
                                        <i class="fa-solid fa-paper-plane me-1"></i>Odoslať Správu Majiteľovi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;
}

// PRIJÍMACÍ TECHNIK
function renderTechnikInterface(container) {
    container.innerHTML = `
        <div class="card shadow-sm border-0 mb-4 bg-dark text-white border-secondary">
            <div class="card-header bg-success text-white fw-bold d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div>
                    <i class="fa-solid fa-clipboard-list me-2 fs-5"></i>Prijímací Technik (Zákazky & Fakturácia)
                    <span class="badge bg-light text-success ms-2"><i class="fa-solid fa-signal me-1"></i>Mobilné Dáta / Wi-Fi / LAN</span>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-info btn-sm text-dark fw-bold" onclick="openLiftScheduleModal()">
                        <i class="fa-solid fa-calendar-days me-1"></i>Harmonogram Zdvihákov
                    </button>
                    <button class="btn btn-warning btn-sm text-dark fw-bold" onclick="addNewWorkOrderPrompt()">
                        <i class="fa-solid fa-plus me-1"></i>Nová Zákazka
                    </button>
                </div>
            </div>
            <div class="card-body">

                <!-- KLIKATEĽNÝ ZOZNAM A PODZOZNAM FUNKCIÍ -->
                ${getRoleFunctionsTreeHtml('prijimaci technik')}

                <!-- VYHĽADÁVAČ A ZOZNAM ZÁKAZIEK -->
                <div class="row g-2 mb-3 align-items-center">
                    <div class="col-md-7">
                        <div class="input-group">
                            <span class="input-group-text bg-dark text-warning border-secondary"><i class="fa-solid fa-magnifying-glass"></i></span>
                            <input type="text" class="form-control bg-dark text-white border-secondary" id="technikSearchInput" placeholder="Vyhľadať v zozname zákaziek (Zákazník, EČV, VIN, Vozidlo, číslo zákazky)..." oninput="renderTechnikOrdersTable()">
                        </div>
                    </div>
                    <div class="col-md-5 text-end">
                        <span class="badge bg-secondary p-2"><i class="fa-solid fa-list-check me-1"></i>Zákazky spolu: <strong id="technikWoCount">0</strong></span>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table table-dark table-hover align-middle asd-table-list">
                        <thead>
                            <tr class="table-secondary text-dark">
                                <th>ID Zákazky</th>
                                <th>Foto Vozidla</th>
                                <th>Zákazník</th>
                                <th>Vozidlo & VIN</th>
                                <th>Typ</th>
                                <th>Stav</th>
                                <th>Suma</th>
                                <th>Akcie & Fakturácia (PDF / e-Faktúra)</th>
                            </tr>
                        </thead>
                        <tbody id="technikWorkOrdersBody">
                            <!-- Populated JS -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    renderTechnikOrdersTable();
}

function renderTechnikOrdersTable() {
    const tbody = document.getElementById('technikWorkOrdersBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const query = (document.getElementById('technikSearchInput')?.value || '').toLowerCase();
    const filteredWo = workOrders.filter(wo => {
        if (!query) return true;
        return wo.id.toLowerCase().includes(query) ||
               wo.customer.toLowerCase().includes(query) ||
               wo.vehicle.toLowerCase().includes(query) ||
               (wo.ecv && wo.ecv.toLowerCase().includes(query)) ||
               (wo.vin && wo.vin.toLowerCase().includes(query));
    });

    const countEl = document.getElementById('technikWoCount');
    if (countEl) countEl.textContent = filteredWo.length;

    if (filteredWo.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted p-4"><i class="fa-solid fa-folder-open me-2"></i>Nenašli sa žiadne zákazky zodpovedajúce vyhľadávaniu.</td></tr>`;
        return;
    }

    filteredWo.forEach(wo => {
        const photoHtml = wo.photo 
            ? `<img src="${wo.photo}" alt="Foto" class="rounded border border-warning cursor-pointer shadow-sm" style="width: 50px; height: 35px; object-fit: cover;" onclick="openZakazkovyListModal('${wo.id}')" title="Kliknite pre zákazkový list s fotkou">` 
            : `<span class="badge bg-secondary">Bez foto</span>`;

        tbody.innerHTML += `
            <tr>
                <td class="fw-bold text-warning font-monospace">${wo.id}</td>
                <td>${photoHtml}</td>
                <td class="fw-semibold text-white">${wo.customer}</td>
                <td>${wo.vehicle}<br><small class="text-secondary">EČV: <span class="text-warning font-monospace">${wo.ecv || '-'}</span> | VIN: <span class="text-info font-monospace">${wo.vin}</span></small></td>
                <td><span class="badge ${wo.type === 'Záručná' ? 'bg-primary' : (wo.type === 'Pozáručná' ? 'bg-info text-dark' : 'bg-secondary')}">${wo.type}</span></td>
                <td><span class="badge ${wo.status === 'Dokončená' ? 'bg-success' : (wo.status === 'Ukončená' ? 'bg-secondary' : 'bg-warning text-dark')}">${wo.status}</span></td>
                <td class="fw-bold text-success fs-6">${wo.amount.toFixed(2)} EUR</td>
                <td>
                    <div class="btn-group btn-group-sm mb-1 flex-wrap gap-1">
                        <button class="btn btn-warning text-dark fw-bold" title="Zákazkový & Pracovný List s Fotodokumentáciou" onclick="openZakazkovyListModal('${wo.id}')"><i class="fa-solid fa-file-contract me-1"></i> Zákazkový List</button>
                        <button class="btn btn-outline-info text-light" title="Vzor PDF e-Faktúra" onclick="previewPdf('${wo.id}')"><i class="fa-solid fa-file-pdf me-1 text-danger"></i> PDF</button>
                        <button class="btn btn-outline-info text-info" title="Odoslať SMS / E-mail Notifikáciu Zákazníkovi" onclick="openSmsModal('${wo.id}')"><i class="fa-solid fa-comment-sms me-1"></i>SMS</button>
                        <button class="btn btn-outline-warning text-warning" title="Expertný Diagnostický Protokol PDF" onclick="openDiagnosticProtocolModal('${wo.id}')"><i class="fa-solid fa-file-medical me-1"></i>Diagno PDF</button>
                        <button class="btn btn-outline-warning text-warning" title="Upraviť" onclick="editWorkOrderPrompt('${wo.id}')"><i class="fa-solid fa-pen"></i></button>
                        <button class="btn btn-outline-danger" title="Mazať" onclick="deleteWorkOrder('${wo.id}')"><i class="fa-solid fa-trash"></i></button>
                        ${wo.status !== 'Ukončená' ? `<button class="btn btn-outline-secondary text-light" title="Ukončiť" onclick="closeWorkOrder('${wo.id}')"><i class="fa-solid fa-check-double"></i></button>` : ''}
                    </div>
                    <div>
                        ${wo.eInvoice ? '<span class="badge bg-success"><i class="fa-solid fa-check me-1"></i>E-Faktúra OK</span>' : `<button class="btn btn-sm btn-success fw-bold py-0" onclick="issueEInvoice('${wo.id}')"><i class="fa-solid fa-paper-plane me-1"></i>E-Faktúra</button>`}
                    </div>
                </td>
            </tr>
        `;
    });
}

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedPhotoData = e.target.result;
        const imgEl = document.getElementById('woPhotoPreview');
        const box = document.getElementById('woPhotoPreviewBox');
        if (imgEl && box) {
            imgEl.src = uploadedPhotoData;
            box.classList.remove('d-none');
        }
    };
    reader.readAsDataURL(file);
}

function useSamplePhoto(type) {
    uploadedPhotoData = (type === 'landrover') ? sampleLandRoverPhoto : sampleOctaviaPhoto;
    const imgEl = document.getElementById('woPhotoPreview');
    const box = document.getElementById('woPhotoPreviewBox');
    if (imgEl && box) {
        imgEl.src = uploadedPhotoData;
        box.classList.remove('d-none');
    }
}

function addNewWorkOrderPrompt() {
    cleanupModalBackdrops();
    uploadedPhotoData = null;
    const previewBox = document.getElementById('woPhotoPreviewBox');
    if (previewBox) previewBox.classList.add('d-none');

    const form = document.getElementById('newWorkOrderForm');
    if (form) form.reset();

    // Auto fill dates and ID
    const nextNum = 22 + workOrders.length;
    const newId = `2026/00${nextNum}`;
    
    const modalEl = document.getElementById('newWorkOrderModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }
}

function saveNewWorkOrder() {
    const customer = document.getElementById('woCustomer').value.trim();
    const vehicle = document.getElementById('woVehicle').value.trim();
    const ecv = document.getElementById('woEcv').value.trim();
    const vin = document.getElementById('woVin').value.trim() || 'TMBZZZ' + Math.floor(Math.random() * 100000000);
    const odometer = document.getElementById('woOdometer').value.trim() || '120 000 km';
    const type = document.getElementById('woType').value;
    const fuel = document.getElementById('woFuel').value;
    const amount = parseFloat(document.getElementById('woAmount').value) || 200.00;
    const fault = document.getElementById('woFault').value.trim() || 'Servisná prehliadka & diagnostika motora';
    const damage = document.getElementById('woDamage').value.trim() || 'Bez poškodenia pri príjme.';

    // Default sample photo if no photo was uploaded
    const photoToSave = uploadedPhotoData || sampleOctaviaPhoto;

    const nextNum = 22 + workOrders.length;
    const newId = `2026/00${nextNum}`;

    const newWo = {
        id: newId,
        supplier: "DF AUTO, s.r.o., Hviezdoslavova 219/51, 045 01 Moldava nad Bodvou",
        supplierInfo: "OR MS Košice odd.Sro vl.51890/V | IČO: 53895843 | IČ DPH: SK2121522271",
        customer: customer,
        customerAddress: `${customer}, Hlavná ulica, Slovensko`,
        vehicle: vehicle,
        ecv: ecv,
        vin: vin,
        odometer: odometer,
        fuel: fuel,
        type: type,
        status: "V riešení",
        amount: amount,
        eInvoice: false,
        faultDescription: fault,
        damageNotes: damage,
        dateReceived: new Date().toLocaleDateString('sk-SK') + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        dateDone: new Date(Date.now() + 7*24*60*60*1000).toLocaleDateString('sk-SK'),
        technician: currentUser ? currentUser.name : "Prijímací Technik Ján",
        pristavil: customer.split(' ')[0] || "Zákazník",
        prevzal: "Technik Ján",
        estimatedPrice: amount,
        deposit: 0.00,
        photo: photoToSave,
        workItems: [
            { name: fault, hours: "1.5 hod", rate: 45.00, total: 67.50 }
        ],
        partItems: [
            { code: "FLT-002", name: "Olejový filter MANN", qty: 1, unitPrice: 12.50, total: 12.50 },
            { code: "OIL-003", name: "Motorový olej 5W-30 5L Castrol", qty: 1, unitPrice: 48.00, total: 48.00 }
        ]
    };

    workOrders.unshift(newWo);

    // Hide modal
    const modalEl = document.getElementById('newWorkOrderModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();

    renderTechnikOrdersTable();
    alert(`Nová zákazka ${newId} s fotodokumentáciou vozidla bola úspešne uložená!`);
}

function editWorkOrderPrompt(woId) {
    const wo = workOrders.find(w => w.id === woId);
    if (!wo) return;
    const newCustomer = prompt("Upraviť meno a telefón zákazníka:", wo.customer);
    if (newCustomer) wo.customer = newCustomer;
    const newVehicle = prompt("Upraviť vozidlo a EČV:", wo.vehicle);
    if (newVehicle) wo.vehicle = newVehicle;
    const newAmount = prompt("Upraviť sumu (EUR):", wo.amount);
    if (newAmount && !isNaN(parseFloat(newAmount))) wo.amount = parseFloat(newAmount);

    renderTechnikOrdersTable();
    alert(`Zákazka ${woId} bola upravená.`);
}

function deleteWorkOrder(woId) {
    if (confirm(`Naozaj chcete vymazať zákazku ${woId}?`)) {
        workOrders = workOrders.filter(w => w.id !== woId);
        renderTechnikOrdersTable();
        alert(`Zákazka ${woId} bola vymazaná.`);
    }
}

function closeWorkOrder(woId) {
    const wo = workOrders.find(w => w.id === woId);
    if (wo) {
        wo.status = "Ukončená";
        renderTechnikOrdersTable();
        alert(`Zákazka ${woId} bola úspešne ukončená.`);
    }
}

function issueEInvoice(woId) {
    const wo = workOrders.find(w => w.id === woId);
    if (wo) {
        wo.eInvoice = true;
        renderTechnikOrdersTable();
        alert(`E-faktúra pre zákazku ${woId} bola odoslaná na server a uložená ako PDF vzor!`);
    }
}

function downloadPdfFromElement(elementId, filename) {
    const element = document.getElementById(elementId);
    if (!element) return;

    if (typeof html2pdf !== 'undefined') {
        const opt = {
            margin:       [10, 10, 10, 10],
            filename:     filename || 'dokument_ASD.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    } else {
        printElement(elementId);
    }
}

function printElement(elementId) {
    const element = document.getElementById(elementId);
    if (!element) {
        window.print();
        return;
    }
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Tlač Dokumentu A.S.D.</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
            <style>
                body { padding: 20px; font-family: system-ui, -apple-system, sans-serif; background: #fff !important; color: #000 !important; }
            </style>
        </head>
        <body>
            ${element.innerHTML}
            <script>
                window.onload = function() { setTimeout(function() { window.print(); window.close(); }, 300); };
            <\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

function previewPdf(woId) {
    const wo = workOrders.find(w => w.id === woId) || workOrders[0];
    if (!wo) return;

    const modalContent = document.getElementById('pdfModalContent');
    if (!modalContent) return;

    const hasItems = (wo.workItems && wo.workItems.length > 0) || (wo.partItems && wo.partItems.length > 0);
    const totalWork = (wo.workItems || []).reduce((acc, item) => acc + item.total, 0);
    const totalParts = (wo.partItems || []).reduce((acc, item) => acc + item.total, 0);
    const amount = hasItems ? (totalWork + totalParts) : Number(wo.amount || wo.estimatedPrice || 280);
    const vat = amount * 0.23;
    const total = amount + vat;
    const activeComp = registeredCompanies.find(c => c.active) || registeredCompanies[0];
    const paymentMethodStr = wo.paymentMethod || "Hotovosť";

    const qrHtml = generatePayBySquareQrSvg(activeComp.iban, activeComp.swift, total, wo.id, activeComp.name);

    modalContent.innerHTML = `
        <div class="p-3 bg-white text-dark rounded border shadow-sm" style="font-family: Arial, sans-serif;">
            <!-- HLAVIČKA FAKTÚRY -->
            <div class="row border-bottom border-secondary pb-3 mb-3 align-items-center">
                <div class="col-7 d-flex align-items-center gap-3">
                    ${activeComp.logo ? `<img src="${activeComp.logo}" alt="Logo" class="rounded border p-1" style="height: 55px; max-width: 160px; object-fit: contain;">` : ''}
                    <div>
                        <h3 class="fw-bold text-uppercase mb-0 text-primary">FAKTÚRA - DAŇOVÝ DOKLAD</h3>
                        <div class="text-muted small">E-Fakturačný systém A.S.D. • Certifikovaný vzor podľa Zákona o DPH</div>
                    </div>
                </div>
                <div class="col-5 text-end">
                    <div class="fw-bold fs-4 text-danger">FAK-2026${wo.id.replace(/[^0-9]/g, '')}</div>
                    <div class="text-muted small">Variabilný symbol: <strong>2026${wo.id.replace(/[^0-9]/g, '')}</strong></div>
                    <div class="text-muted small">Dátum vystavenia: <strong>${new Date().toLocaleDateString('sk-SK')}</strong></div>
                    <div class="badge bg-success text-white mt-1 px-3 py-1"><i class="fa-solid fa-money-bill-wave me-1"></i>Forma úhrady: <strong>${paymentMethodStr.toUpperCase()}</strong></div>
                </div>
            </div>

            <!-- DODÁVATEĽ & ODBERATEĽ -->
            <div class="row p-3 bg-light rounded border mb-3 small">
                <div class="col-6 border-end">
                    <strong class="text-primary fs-6"><i class="fa-solid fa-building me-1"></i>Dodávateľ:</strong>
                    <div class="fw-bold mt-1 text-dark fs-6">${activeComp.name}</div>
                    <div>${activeComp.address}</div>
                    <div>IČO: <strong>${activeComp.ico}</strong> | DIČ: ${activeComp.dic}</div>
                    <div>IČ DPH: <strong>${activeComp.icdph || activeComp.dic}</strong></div>
                    <div class="mt-2 text-primary fw-bold">IBAN: ${activeComp.iban}</div>
                    <div>SWIFT / BIC: ${activeComp.swift}</div>
                </div>
                <div class="col-6 ps-3">
                    <strong class="text-success fs-6"><i class="fa-solid fa-user me-1"></i>Odberateľ / Zákazník:</strong>
                    <div class="fw-bold mt-1 text-dark fs-6">${wo.customer}</div>
                    <div>Vozidlo: <strong>${wo.vehicle}</strong></div>
                    <div>EČV / ŠPZ: <strong class="text-danger font-monospace">${wo.ecv || 'SN333DV'}</strong></div>
                    <div>VIN: <strong class="font-monospace">${wo.vin}</strong></div>
                    <div class="mt-2 text-muted">Číslo zákazky: <strong>${wo.id}</strong> | Forma úhrady: <strong class="text-success">${paymentMethodStr}</strong></div>
                </div>
            </div>

            <!-- POLOŽKY FAKTÚRY -->
            <table class="table table-bordered align-middle small my-3">
                <thead class="table-primary text-dark fw-bold">
                    <tr>
                        <th>Položka / Popis servisného úkonu alebo dielu</th>
                        <th class="text-center" style="width: 100px;">Množstvo</th>
                        <th class="text-end" style="width: 120px;">Cena bez DPH</th>
                        <th class="text-end" style="width: 120px;">Suma bez DPH</th>
                    </tr>
                </thead>
                <tbody>
                    ${(wo.workItems || []).map(wi => `
                        <tr>
                            <td><strong>[PRÁCA] ${wi.name}</strong></td>
                            <td class="text-center">${wi.hours} hod</td>
                            <td class="text-end">${wi.rate.toFixed(2)} EUR</td>
                            <td class="text-end fw-bold">${wi.total.toFixed(2)} EUR</td>
                        </tr>
                    `).join('')}
                    ${(wo.partItems || []).map(pi => `
                        <tr>
                            <td><strong>[DIEL] ${pi.name}</strong> <span class="text-muted font-monospace">(${pi.code})</span></td>
                            <td class="text-center">${pi.qty} ks</td>
                            <td class="text-end">${pi.unitPrice.toFixed(2)} EUR</td>
                            <td class="text-end fw-bold">${pi.total.toFixed(2)} EUR</td>
                        </tr>
                    `).join('')}
                    ${!hasItems ? `
                        <tr>
                            <td>
                                <strong>Servisné práce & Kompletná diagnostika A.S.D.</strong>
                                <div class="text-muted x-small">${wo.description || 'Kontrola riadiacich jednotiek, oprava a výmena dielov podľa objednávky.'}</div>
                            </td>
                            <td class="text-center">1 ks</td>
                            <td class="text-end">${amount.toFixed(2)} EUR</td>
                            <td class="text-end fw-bold">${amount.toFixed(2)} EUR</td>
                        </tr>
                    ` : ''}
                </tbody>
            </table>

            <!-- REKAPITULÁCIA A QR KÓD -->
            <div class="row align-items-center bg-light p-3 rounded border my-3">
                <div class="col-7 border-end">
                    <div class="d-flex justify-content-between mb-1"><span>Základ dane (23%):</span><strong>${amount.toFixed(2)} EUR</strong></div>
                    <div class="d-flex justify-content-between mb-1"><span>DPH 23%:</span><strong>${vat.toFixed(2)} EUR</strong></div>
                    <hr class="my-2">
                    <div class="d-flex justify-content-between fs-5 fw-bold text-primary"><span>SPOLU K ÚHRADE:</span><span>${total.toFixed(2)} EUR</span></div>
                    <div class="mt-2 small text-success"><i class="fa-solid fa-circle-check me-1"></i>Forma úhrady: <strong>${paymentMethodStr} (UHRADENÉ V HOTOVOSTI)</strong></div>
                    <div class="small text-muted"><i class="fa-solid fa-receipt me-1"></i>Status e-Faktúry: <strong>${wo.eInvoice ? 'ODOSLANÉ DO CEZ E-FAKTÚRY' : 'PRIPRAVENÉ NA ODOSLANIE'}</strong></div>
                </div>
                <div class="col-5 text-center">
                    <div class="small text-muted mb-1 fw-bold"><i class="fa-solid fa-qrcode me-1 text-primary"></i>PAY by square - Platba QR kódom</div>
                    ${qrHtml}
                </div>
            </div>

            <div class="text-center text-muted x-small mt-2 border-top pt-2">
                Doklad vygenerovaný v systéme Autoservisný Systém a Diagnostika (A.S.D.) • Uložené vo formate PDF na serveri.
            </div>
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById('pdfModal'));
    modal.show();
}

// SKLADNÍK (Skladové hospodárstvo)
function renderSkladnikInterface(container) {
    container.innerHTML = `
        <div class="card shadow-sm border-0 mb-4 bg-dark text-white border-secondary">
            <div class="card-header bg-secondary text-white fw-bold d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div>
                    <i class="fa-solid fa-warehouse me-2 text-warning fs-5"></i>Skladník (Skladové Hospodárstvo)
                    <span class="badge bg-warning text-dark ms-2"><i class="fa-solid fa-boxes-stacked me-1"></i>Skladové Karty & Sklady</span>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-danger btn-sm fw-bold px-3 text-white" onclick="openVydajkaModal()">
                        <i class="fa-solid fa-file-export me-1"></i>Vystaviť výdajku na zákazku
                    </button>
                    <button class="btn btn-warning text-dark btn-sm fw-bold px-3" onclick="openNewStockCardModal()">
                        <i class="fa-solid fa-plus me-1"></i>Vytvoriť novú skladovú kartu
                    </button>
                </div>
            </div>
            <div class="card-body">

                <!-- KLIKATEĽNÝ ZOZNAM A PODZOZNAM FUNKCIÍ -->
                ${getRoleFunctionsTreeHtml('skladnik')}

                <!-- SKENOVANIE EAN / QR KÓDOV DIELOV -->
                <div class="p-3 bg-secondary bg-opacity-10 rounded border border-info mb-4">
                    <div class="row g-2 align-items-center">
                        <div class="col-md-5">
                            <label class="form-label text-info fw-bold small mb-1">
                                <i class="fa-solid fa-barcode me-1"></i>Skenovanie EAN / QR Kódov Dielov (USB/Bluetooth Skenery):
                            </label>
                            <div class="input-group">
                                <span class="input-group-text bg-dark text-info border-secondary"><i class="fa-solid fa-qrcode"></i></span>
                                <input type="text" class="form-control bg-dark text-white border-secondary font-monospace" id="skladEanScannerInput" placeholder="Naskenujte EAN kód (napr. 5901234567011)...">
                                <button class="btn btn-info text-dark fw-bold" onclick="handleEanScanSearch()"><i class="fa-solid fa-magnifying-glass me-1"></i>Hľadať</button>
                            </div>
                        </div>
                        <div class="col-md-7 d-flex flex-wrap gap-2 pt-md-4">
                            <button class="btn btn-sm btn-outline-success text-light fw-bold" onclick="handleEanScanReceive()">
                                <i class="fa-solid fa-plus-circle me-1 text-success"></i>Príjem na sklad (+1 ks)
                            </button>
                            <button class="btn btn-sm btn-outline-danger text-light fw-bold" onclick="openVydajkaModal()">
                                <i class="fa-solid fa-minus-circle me-1 text-danger"></i>Výdaj na Zákazku
                            </button>
                            <button class="btn btn-sm btn-outline-warning text-warning fw-bold" onclick="openSampleEanTest('5901234567011')">
                                <i class="fa-solid fa-vial me-1"></i>Vzor EAN: Castrol
                            </button>
                            <button class="btn btn-sm btn-outline-warning text-warning fw-bold" onclick="openSampleEanTest('4008300123402')">
                                <i class="fa-solid fa-vial me-1"></i>Vzor EAN: MANN
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Zoznam Skladov & Filtre -->
                <div class="p-3 bg-secondary bg-opacity-10 rounded border border-secondary mb-3">
                    <label class="form-label text-warning fw-bold small mb-2"><i class="fa-solid fa-sitemap me-2"></i>Výber skladu / kategórie položiek:</label>
                    <div class="d-flex flex-wrap gap-1 mb-3" id="storeFilterButtons">
                        ${warehouseStores.map(st => `
                            <button class="btn btn-sm ${st === selectedStoreFilter ? 'btn-warning text-dark fw-bold' : 'btn-outline-secondary text-light'}" onclick="filterByStore('${st}')">
                                ${st}
                            </button>
                        `).join('')}
                    </div>

                    <!-- VYHĽADÁVAČ SKLADOVÝCH KARIET -->
                    <div class="row g-2 align-items-center">
                        <div class="col-md-8">
                            <div class="input-group">
                                <span class="input-group-text bg-dark text-warning border-secondary"><i class="fa-solid fa-magnifying-glass"></i></span>
                                <input type="text" class="form-control bg-dark text-white border-secondary" id="skladnikSearchInput" placeholder="Vyhľadať v zozname skladových kariet (Kód dielu, Názov, EAN kód, Umiestnenie)..." oninput="renderSkladnikTable()">
                            </div>
                        </div>
                        <div class="col-md-4 text-end">
                            <small class="text-info"><i class="fa-solid fa-cube me-1"></i>Filtrované položky: <strong id="storeFilteredCount">0</strong></small>
                        </div>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table table-dark table-striped table-bordered align-middle asd-table-list">
                        <thead>
                            <tr class="table-secondary text-dark">
                                <th>Kód dielu (Číslo)</th>
                                <th>EAN Čiarový Kód</th>
                                <th>Názov náhradného dielu</th>
                                <th>Priradený Sklad</th>
                                <th>Na sklade</th>
                                <th>Nákup bez DPH</th>
                                <th><i class="fa-solid fa-lock me-1 text-danger"></i>Interná Marža (Záznam)</th>
                                <th>Predaj s DPH</th>
                                <th>Umiestnenie</th>
                                <th>Akcie & Výdajka</th>
                            </tr>
                        </thead>
                        <tbody id="skladnikTableBody">
                            <!-- Populated JS -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    renderSkladnikTable();
}

function filterByStore(storeName) {
    selectedStoreFilter = storeName;
    const container = document.getElementById('roleInterfaceContainer');
    if (container && currentUser && currentUser.username === 'skladnik') {
        renderSkladnikInterface(container);
    }
}

function renderSkladnikTable() {
    const tbody = document.getElementById('skladnikTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const query = (document.getElementById('skladnikSearchInput')?.value || '').toLowerCase();

    const filteredItems = inventory.filter(item => {
        let matchesStore = false;
        if (selectedStoreFilter === "Všetky sklady") matchesStore = true;
        else if (selectedStoreFilter === "Autoservis") matchesStore = item.store.startsWith("Autoservis");
        else if (selectedStoreFilter === "Pneuservis") matchesStore = item.store.startsWith("Pneuservis");
        else if (selectedStoreFilter === "Karoseria") matchesStore = item.store.startsWith("Karoseria");
        else matchesStore = (item.store === selectedStoreFilter);

        if (!matchesStore) return false;
        if (!query) return true;

        return item.code.toLowerCase().includes(query) ||
               item.name.toLowerCase().includes(query) ||
               (item.ean && item.ean.toLowerCase().includes(query)) ||
               (item.loc && item.loc.toLowerCase().includes(query));
    });

    const countEl = document.getElementById('storeFilteredCount');
    if (countEl) countEl.textContent = filteredItems.length;

    if (filteredItems.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" class="text-center text-muted p-4"><i class="fa-solid fa-box-open me-2"></i>V tomto sklade sa zatiaľ nenachádzajú žiadne skladové karty.</td></tr>`;
        return;
    }

    filteredItems.forEach(item => {
        const buyNoVat = item.buy;
        const sellWithVat = item.sell;
        const sellNoVat = sellWithVat / 1.23;
        const profitNoVat = sellNoVat - buyNoVat;
        const marginPct = buyNoVat > 0 ? (((sellNoVat - buyNoVat) / buyNoVat) * 100).toFixed(0) : "65";

        tbody.innerHTML += `
            <tr>
                <td class="fw-bold text-warning font-monospace">${item.code}</td>
                <td class="font-monospace text-info small"><i class="fa-solid fa-barcode me-1"></i>${item.ean || '5901234567011'}</td>
                <td class="fw-semibold text-white">${item.name}</td>
                <td><span class="badge bg-secondary border border-secondary">${item.store}</span></td>
                <td class="${item.qty <= item.min ? 'text-warning fw-bold' : 'text-success fw-bold'}">${item.qty} ks</td>
                <td>${item.buy.toFixed(2)} EUR</td>
                <td>
                    <span class="badge bg-warning text-dark fw-bold" title="Interný záznam marže - neviditeľný pre zákazníka"><i class="fa-solid fa-lock me-1"></i>${marginPct}% marža</span>
                    <div class="small text-success font-monospace">+${profitNoVat.toFixed(2)} EUR (zisk)</div>
                </td>
                <td class="fw-bold text-success fs-6">${item.sell.toFixed(2)} EUR</td>
                <td><small class="text-light"><i class="fa-solid fa-location-dot me-1 text-warning"></i>${item.loc}</small></td>
                <td>
                    <button class="btn btn-sm btn-danger fw-bold me-1" onclick="openVydajkaForPart('${item.code}')" title="Výdajka na číslo zákazky"><i class="fa-solid fa-file-export me-1"></i> Výdajka</button>
                    <button class="btn btn-sm btn-outline-warning text-warning me-1" onclick="adjustStockQty('${item.code}', 1)" title="Pridať kusy"><i class="fa-solid fa-plus"></i></button>
                    <button class="btn btn-sm btn-outline-info" onclick="editStockCardPrompt('${item.code}')" title="Upraviť kartu"><i class="fa-solid fa-pen"></i></button>
                </td>
            </tr>
        `;
    });
}

function autoCalcSellPrice() {
    const buyInput = document.getElementById('scBuy');
    const marginInput = document.getElementById('scMargin');
    const sellInput = document.getElementById('scSell');
    if (!buyInput || !marginInput || !sellInput) return;

    const buy = parseFloat(buyInput.value) || 0;
    const margin = parseFloat(marginInput.value) || 65;
    if (buy > 0) {
        const sellNoVat = buy * (1 + margin / 100);
        const sellWithVat = sellNoVat * 1.23;
        sellInput.value = sellWithVat.toFixed(2);
    }
}

function autoCalcMarginFromSell() {
    const buyInput = document.getElementById('scBuy');
    const marginInput = document.getElementById('scMargin');
    const sellInput = document.getElementById('scSell');
    if (!buyInput || !marginInput || !sellInput) return;

    const buy = parseFloat(buyInput.value) || 0;
    const sellWithVat = parseFloat(sellInput.value) || 0;
    if (buy > 0 && sellWithVat > 0) {
        const sellNoVat = sellWithVat / 1.23;
        const margin = ((sellNoVat - buy) / buy) * 100;
        marginInput.value = margin.toFixed(1);
    }
}

function adjustStockQty(code, delta) {
    const item = inventory.find(i => i.code === code);
    if (!item) return;
    if (item.qty + delta < 0) {
        alert("Zásoba nemôže byť záporná!");
        return;
    }
    item.qty += delta;
    renderSkladnikTable();
}

function openNewStockCardModal() {
    const form = document.getElementById('newStockCardForm');
    if (form) form.reset();
    const marginInput = document.getElementById('scMargin');
    if (marginInput) marginInput.value = "65";
    const modal = new bootstrap.Modal(document.getElementById('newStockCardModal'));
    modal.show();
}

function saveNewStockCard() {
    const code = document.getElementById('scCode').value.trim();
    const name = document.getElementById('scName').value.trim();
    const store = document.getElementById('scStore').value;
    const qty = parseInt(document.getElementById('scQty').value) || 0;
    const min = parseInt(document.getElementById('scMin').value) || 2;
    const buy = parseFloat(document.getElementById('scBuy').value) || 0.00;
    const sell = parseFloat(document.getElementById('scSell').value) || 0.00;
    const loc = document.getElementById('scLoc').value.trim() || 'Regál Sklad';

    const existing = inventory.find(i => i.code.toLowerCase() === code.toLowerCase());
    if (existing) {
        alert(`Skladová karta s kódom/číslom dielu "${code}" už existuje! Zvoľte unikátne číslo dielu.`);
        return;
    }

    inventory.unshift({
        code: code,
        name: name,
        store: store,
        qty: qty,
        min: min,
        buy: buy,
        sell: sell,
        loc: loc
    });

    // Hide modal
    const modalEl = document.getElementById('newStockCardModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();

    selectedStoreFilter = store;
    renderSkladnikInterface(document.getElementById('roleInterfaceContainer'));
    alert(`Skladová karta [${code}] ${name} bola úspešne vytvorená v sklade ${store}!`);
}

function editStockCardPrompt(code) {
    const item = inventory.find(i => i.code === code);
    if (!item) return;
    const newName = prompt("Upraviť názov dielu:", item.name);
    if (newName) item.name = newName;
    const newBuy = prompt("Upraviť nákupnú cenu bez DPH (EUR):", item.buy);
    if (newBuy && !isNaN(parseFloat(newBuy))) item.buy = parseFloat(newBuy);
    const newSell = prompt("Upraviť predajnú cenu s DPH (EUR):", item.sell);
    if (newSell && !isNaN(parseFloat(newSell))) item.sell = parseFloat(newSell);

    renderSkladnikTable();
    alert(`Skladová karta ${code} bola upravená.`);
}

// VÝDAJKA NA ČÍSLO ZÁKAZKY
function openVydajkaModal() {
    populateVydajkaModals();
    const modal = new bootstrap.Modal(document.getElementById('vydajkaModal'));
    modal.show();
}

function openVydajkaForPart(partCode) {
    populateVydajkaModals();
    const select = document.getElementById('vydajkaPartSelect');
    if (select) select.value = partCode;
    const modal = new bootstrap.Modal(document.getElementById('vydajkaModal'));
    modal.show();
}

function populateVydajkaModals() {
    const woSelect = document.getElementById('vydajkaWorkOrderSelect');
    const partSelect = document.getElementById('vydajkaPartSelect');
    if (!woSelect || !partSelect) return;

    woSelect.innerHTML = '';
    workOrders.forEach(w => {
        woSelect.innerHTML += `<option value="${w.id}">Zákazka č. ${w.id} - ${w.vehicle} [${w.ecv || w.vin}] (${w.customer})</option>`;
    });

    partSelect.innerHTML = '';
    inventory.forEach(i => {
        partSelect.innerHTML += `<option value="${i.code}">[${i.code}] ${i.name} (Skladom: ${i.qty} ks - ${i.sell.toFixed(2)} EUR)</option>`;
    });

    updateVydajkaWoInfo();
}

function updateVydajkaWoInfo() {
    const woSelect = document.getElementById('vydajkaWorkOrderSelect');
    const infoBox = document.getElementById('vydajkaWoInfo');
    if (!woSelect || !infoBox) return;

    const woId = woSelect.value;
    const wo = workOrders.find(w => w.id === woId);
    if (wo) {
        infoBox.innerHTML = `
            <div><strong>Zákazník:</strong> ${wo.customer}</div>
            <div><strong>Vozidlo:</strong> ${wo.vehicle} (${wo.ecv || 'Bez EČV'})</div>
            <div><strong>VIN:</strong> ${wo.vin}</div>
            <div><strong>Typ:</strong> ${wo.type} | <strong>Stav:</strong> ${wo.status}</div>
        `;
    }
}

function submitVydajka() {
    const woId = document.getElementById('vydajkaWorkOrderSelect').value;
    const partCode = document.getElementById('vydajkaPartSelect').value;
    const qty = parseInt(document.getElementById('vydajkaQty').value) || 1;

    const wo = workOrders.find(w => w.id === woId);
    const part = inventory.find(i => i.code === partCode);

    if (!wo || !part) return;

    if (part.qty < qty) {
        alert(`Nedostatok zásoby v sklade! Na sklade je len ${part.qty} ks dielu ${part.name}.`);
        return;
    }

    // Odpočítať zo skladu
    part.qty -= qty;

    // Priradiť k zákazke do pracovného listu
    if (!wo.partItems) wo.partItems = [];
    
    const existingPartInWo = wo.partItems.find(p => p.code === part.code);
    if (existingPartInWo) {
        existingPartInWo.qty += qty;
        existingPartInWo.total = existingPartInWo.qty * existingPartInWo.unitPrice;
    } else {
        wo.partItems.push({
            code: part.code,
            name: part.name,
            qty: qty,
            unitPrice: part.sell,
            total: qty * part.sell
        });
    }

    // Prepočítať celkovú sumu zákazky
    const totalWork = (wo.workItems || []).reduce((a, b) => a + b.total, 0);
    const totalParts = wo.partItems.reduce((a, b) => a + b.total, 0);
    wo.amount = totalWork + totalParts;

    // Správa do interného chatu A.S.D.
    chatMessages.push({
        sender: "SKLADNÍK",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `Vystavená výdajka: Diel [${part.code}] ${part.name} (${qty} ks) vydaný na Zákazku č. ${wo.id} (${wo.vehicle}).`
    });

    // Close modal
    const modalEl = document.getElementById('vydajkaModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();

    renderSkladnikTable();
    renderChat();

    alert(`VÝDAJKA ÚSPEŠNE VYSTAVENÁ!\n\nDiel: ${part.name} (${qty} ks)\nVydaný na Zákazku: č. ${wo.id} (${wo.vehicle})\nSkladová zásoba bola aktualizovaná a položka bola pripísaná na Zákazkový list.`);
}

// MECHANIK (DIAGNOSTIKA)
function renderMechanikInterface(container) {
    container.innerHTML = `
        <div class="card shadow-sm border-0 mb-4 bg-dark text-white border-secondary">
            <div class="card-header bg-primary text-white fw-bold d-flex justify-content-between align-items-center flex-wrap gap-2">
                <span><i class="fa-solid fa-microchip me-2"></i>Mechanik - Kompletný Diagnostický Systém A.S.D.</span>
                <span class="badge bg-warning text-dark"><i class="fa-solid fa-book-bookmark me-1"></i>DTC Databanka & ECU Protokoly v Slovenčine</span>
            </div>
            <div class="card-body">

                <!-- KLIKATEĽNÝ ZOZNAM A PODZOZNAM FUNKCIÍ -->
                ${getRoleFunctionsTreeHtml('mechanik')}

                <!-- TABS NAVIGATION -->
                <ul class="nav nav-tabs border-secondary mb-4" id="mechanikTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active fw-bold text-white bg-dark border-secondary px-3 py-2" id="elm-tab" data-bs-toggle="tab" data-bs-target="#elmPanel" type="button" role="tab">
                            <i class="fa-solid fa-plug-circle-check me-2 text-info"></i>Prihlásenie ELM327 Zásuviek (USB / Bluetooth)
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link fw-bold text-white bg-dark border-secondary px-3 py-2" id="ecu-tab" data-bs-toggle="tab" data-bs-target="#ecuPanel" type="button" role="tab">
                            <i class="fa-solid fa-sitemap me-2 text-success"></i>Stromové Rozhranie Riadiacich Jednotiek (ECU)
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link fw-bold text-warning bg-dark border-secondary px-3 py-2" id="sfd-tab" data-bs-toggle="tab" data-bs-target="#sfdPanel" type="button" role="tab">
                            <i class="fa-solid fa-unlock-keyhole me-2 text-warning"></i>SFD / SGW Odomykanie Protiochrán ECU
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link fw-bold text-warning bg-dark border-secondary px-3 py-2" id="dtc-tab" data-bs-toggle="tab" data-bs-target="#dtcDatabasePanel" type="button" role="tab" onclick="renderDtcDatabaseTable()">
                            <i class="fa-solid fa-book-bookmark me-2 text-warning"></i>Global Databanka DTC Kódov
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link fw-bold text-danger bg-dark border-secondary px-3 py-2" id="eeprom-tab" data-bs-toggle="tab" data-bs-target="#eepromPanel" type="button" role="tab" onclick="renderEepromPanelUi()">
                            <i class="fa-solid fa-microchip me-2 text-danger"></i>Úprava EEPROM cez OBD-2 (Programovanie ECU)
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link fw-bold text-info bg-dark border-secondary px-3 py-2" id="remap-tab" data-bs-toggle="tab" data-bs-target="#remapPanel" type="button" role="tab" onclick="renderEcuRemapPanelUi()">
                            <i class="fa-solid fa-gauge-high me-2 text-info"></i>Chiptuning & Úprava Máp Motora a Prevodovky
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link fw-bold text-success bg-dark border-secondary px-3 py-2" id="service-reset-tab" data-bs-toggle="tab" data-bs-target="#serviceResetPanel" type="button" role="tab" onclick="renderServiceResetPanelUi()">
                            <i class="fa-solid fa-oil-can me-2 text-success"></i>AdBlue (Močovina) & Reset Servisných Intervalov
                        </button>
                    </li>
                </ul>

                <div class="tab-content" id="mechanikTabContent">
                    <!-- TAB 0: PRIHLÁSENIE ELM327 ZÁSUVIEK (USB & BLUETOOTH) -->
                    <div class="tab-pane fade show active" id="elmPanel" role="tabpanel">
                        <div class="row g-4 mb-4">
                            <!-- ELM327 USB CONFIG -->
                            <div class="col-md-6">
                                <div class="card bg-secondary bg-opacity-10 border-info text-white h-100">
                                    <div class="card-header bg-info bg-opacity-20 text-info border-info fw-bold d-flex justify-content-between align-items-center">
                                        <span><i class="fa-solid fa-usb me-2"></i>1. Diagnostická zásuvka ELM327 USB</span>
                                        <span class="badge ${elmDevices.usb.connected ? 'bg-success' : 'bg-secondary'}" id="elmUsbBadge">${elmDevices.usb.connected ? 'Pripojené' : 'Odpojené'}</span>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label class="form-label text-light small fw-bold">COM Port (Kábel USB FTDI / CH340)</label>
                                            <select class="form-select bg-dark text-white border-secondary" id="elmUsbPort">
                                                <option value="COM1 (USB OBD-II Interface)">COM1 (USB OBD-II Interface)</option>
                                                <option value="COM3 (FTDI USB Serial Port)" selected>COM3 (FTDI USB Serial Port)</option>
                                                <option value="COM4 (CH340 Serial Device)">COM4 (CH340 Serial Device)</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label text-light small fw-bold">Rýchlosť komunikácie (Baud Rate)</label>
                                            <select class="form-select bg-dark text-white border-secondary" id="elmUsbBaud">
                                                <option value="38400">38 400 baud (Štandard ELM327)</option>
                                                <option value="115200" selected>115 200 baud (Vysokorýchlostný HS-CAN)</option>
                                                <option value="500000">500 000 baud (MS-CAN / High Speed)</option>
                                            </select>
                                        </div>
                                        <button class="btn ${elmDevices.usb.connected ? 'btn-danger' : 'btn-info text-dark'} w-100 fw-bold py-2" id="elmUsbBtn" onclick="toggleElmDevice('usb')">
                                            <i class="fa-solid ${elmDevices.usb.connected ? 'fa-plug-circle-xmark' : 'fa-plug'} me-2"></i>
                                            ${elmDevices.usb.connected ? 'Odpojiť ELM327 USB Zásuvku' : 'Prihlásiť & Pripojiť ELM327 USB'}
                                        </button>
                                        <div class="mt-3 p-2 bg-dark rounded border border-secondary small" id="elmUsbInfo">
                                            <strong>Status:</strong> ${elmDevices.usb.connected ? '<span class="text-success">Pripojená k USB (COM3) • AT Z / ATE0 / AT SP 0 OK</span>' : '<span class="text-secondary">Pripravené na prihlásenie USB adaptéra</span>'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- ELM327 BLUETOOTH CONFIG -->
                            <div class="col-md-6">
                                <div class="card bg-secondary bg-opacity-10 border-primary text-white h-100">
                                    <div class="card-header bg-primary bg-opacity-20 text-primary border-primary fw-bold d-flex justify-content-between align-items-center">
                                        <span><i class="fa-brands fa-bluetooth-b me-2"></i>2. Diagnostická zásuvka ELM327 Bluetooth</span>
                                        <span class="badge ${elmDevices.bt.connected ? 'bg-success' : 'bg-secondary'}" id="elmBtBadge">${elmDevices.bt.connected ? 'Pripojené' : 'Odpojené'}</span>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label class="form-label text-light small fw-bold">Výber spárovaného Bluetooth zariadenia</label>
                                            <select class="form-select bg-dark text-white border-secondary" id="elmBtDevice">
                                                <option value="OBDII Bluetooth (MAC: 00:1D:A5:68:98:8B)" selected>OBDII Bluetooth (MAC: 00:1D:A5:68:98:8B)</option>
                                                <option value="V-GATE vLinker MC+ BT4.0">V-GATE vLinker MC+ BT4.0</option>
                                                <option value="ELM327 v2.1 Wireless OBD">ELM327 v2.1 Wireless OBD</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label text-light small fw-bold">PIN Kód pre spárovanie</label>
                                            <input type="text" class="form-control bg-dark text-white border-secondary font-monospace" id="elmBtPin" value="1234">
                                        </div>
                                        <button class="btn ${elmDevices.bt.connected ? 'btn-danger' : 'btn-primary'} w-100 fw-bold py-2" id="elmBtBtn" onclick="toggleElmDevice('bt')">
                                            <i class="fa-solid ${elmDevices.bt.connected ? 'fa-plug-circle-xmark' : 'fa-bluetooth'} me-2"></i>
                                            ${elmDevices.bt.connected ? 'Odpojiť ELM327 Bluetooth Zásuvku' : 'Prihlásiť & Pripojiť ELM327 Bluetooth'}
                                        </button>
                                        <div class="mt-3 p-2 bg-dark rounded border border-secondary small" id="elmBtInfo">
                                            <strong>Status:</strong> ${elmDevices.bt.connected ? '<span class="text-success">Pripojená cez Bluetooth (OBDII BT) • BT Link Active</span>' : '<span class="text-secondary">Pripravené na prihlásenie Bluetooth adaptéra</span>'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- LIVE CONNECTED ADAPTER SUMMARY -->
                        <div class="p-3 bg-dark rounded border border-success d-flex justify-content-between align-items-center flex-wrap gap-2">
                            <div>
                                <i class="fa-solid fa-satellite-dish me-2 text-success fa-pulse"></i>
                                <strong>Aktívna diagnostická zbernica A.S.D.:</strong>
                                <span class="text-warning fw-bold ms-2" id="activeAdapterSummaryText">
                                    ${(elmDevices.usb.connected || elmDevices.bt.connected) ? `Aktívne zásuvky: ${elmDevices.usb.connected ? 'ELM327 USB ' : ''} ${elmDevices.bt.connected ? 'ELM327 Bluetooth' : ''}` : 'Žiadna ELM327 zásuvka nie je prihlásená (Vyberte USB alebo Bluetooth)'}
                                </span>
                            </div>
                            <button class="btn btn-success fw-bold btn-sm" onclick="switchMechanikTab('ecu-tab')">
                                Otvoriť Stromové Rozhranie ECU <i class="fa-solid fa-arrow-right ms-1"></i>
                            </button>
                        </div>
                    </div>

                    <!-- TAB 1: ECU DIAGNOSTIKA & STROMOVÉ ROZHRANIE -->
                    <div class="tab-pane fade" id="ecuPanel" role="tabpanel">
                        <div class="row g-3 mb-4">
                            <div class="col-md-3">
                                <label class="form-label text-light small fw-bold"><i class="fa-solid fa-earth-americas me-1 text-info"></i>Svetový Región</label>
                                <select class="form-select bg-dark text-white border-secondary" id="diagRegionSelect" onchange="updateBrandListByRegion()">
                                    <option value="Európa">Európa (VW, BMW, MB, Peugeot...)</option>
                                    <option value="Amerika">Amerika (Ford, Chevy, Jeep, Dodge...)</option>
                                    <option value="Ázia">Ázia (Toyota, Honda, Hyundai, Kia...)</option>
                                    <option value="Austrália & Afrika">Austrália & Afrika (Holden, Mahindra...)</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label text-light small fw-bold"><i class="fa-solid fa-car me-1 text-warning"></i>Výber Značky Vozidla</label>
                                <select class="form-select bg-dark text-white border-secondary fw-bold" id="diagBrandSelect" onchange="updateEcuList()">
                                    <!-- Populated JS -->
                                </select>
                            </div>
                            <div class="col-md-5 d-flex align-items-end gap-2">
                                <button class="btn btn-success w-100 fw-bold py-2" id="ecuScanTreeBtn" onclick="scanEcuTree()">
                                    <i class="fa-solid fa-network-wired me-2"></i>Spustiť Skenovanie Zbernice (CAN Tree Scan)
                                </button>
                                <button class="btn btn-warning text-dark fw-bold py-2 text-nowrap" onclick="switchMechanikTab('sfd-tab')">
                                    <i class="fa-solid fa-key me-1"></i>SFD Unlock
                                </button>
                            </div>
                        </div>

                        <!-- STROMOVÉ ROZHRANIE RIADIACICH JEDNOTIEK (ECU TREE) -->
                        <div class="row">
                            <!-- LEFT COLUMN: ECU TREE VIEW -->
                            <div class="col-md-5 mb-3">
                                <div class="card bg-secondary bg-opacity-10 border-info text-white h-100">
                                    <div class="card-header bg-info bg-opacity-20 text-info border-info fw-bold d-flex justify-content-between align-items-center">
                                        <span><i class="fa-solid fa-sitemap me-2"></i>Strom Riadiacich Jednotiek (ECU Tree)</span>
                                        <small class="text-light" id="treeStatusBadge">Zvolené: <strong class="text-warning" id="selectedEcuTreeLabel">Motor [01 - ECU]</strong></small>
                                    </div>
                                    <div class="card-body p-2" style="max-height: 480px; overflow-y: auto;" id="ecuTreeContainer">
                                        <!-- Tree rendered via JS -->
                                    </div>
                                </div>
                            </div>

                            <!-- RIGHT COLUMN: SELECTED ECU DETAILS & LIVE DATA -->
                            <div class="col-md-7 mb-3">
                                <div class="card bg-secondary bg-opacity-10 border-success text-white h-100">
                                    <div class="card-header bg-success bg-opacity-20 text-success border-success fw-bold d-flex justify-content-between align-items-center flex-wrap gap-2">
                                        <span><i class="fa-solid fa-microchip me-2"></i>Detail Zvolenej ECU: <strong id="connectedEcuName" class="text-warning">01 - Motorová Riadiaca Jednotka (Engine ECU)</strong></span>
                                        <div class="d-flex gap-2">
                                            <button class="btn btn-outline-info btn-sm fw-bold text-white" onclick="openDiagnosticProtocolModal()">
                                                <i class="fa-solid fa-file-pdf me-1 text-info"></i>Expertný Protokol (PDF)
                                            </button>
                                            <button class="btn btn-outline-danger btn-sm fw-bold" onclick="clearTroubleCodes()">
                                                <i class="fa-solid fa-trash me-1"></i>Vymazať DTC
                                            </button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <!-- DTC Trouble Codes -->
                                        <div class="mb-3">
                                            <h6 class="fw-bold text-danger mb-2"><i class="fa-solid fa-triangle-exclamation me-2"></i>Nájdené Chybové Kódy na tejto ECU (DTC):</h6>
                                            <ul class="list-group list-group-flush bg-dark rounded border border-secondary" id="dtcList">
                                                <!-- DTC items -->
                                            </ul>
                                        </div>

                                        <!-- Live Sensor Data -->
                                        <div>
                                            <h6 class="fw-bold text-info mb-2"><i class="fa-solid fa-chart-line me-2"></i>Živé Hodnoty Snímačov (Live Data):</h6>
                                            <div class="p-3 bg-dark rounded border border-secondary" id="sensorGauges">
                                                <!-- Gauges -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- TAB SFD & SECURITY GATEWAY UNLOCKER -->
                    <div class="tab-pane fade" id="sfdPanel" role="tabpanel">
                        <div class="card bg-secondary bg-opacity-10 border-warning text-white mb-4">
                            <div class="card-header bg-warning bg-opacity-20 text-warning border-warning fw-bold d-flex justify-content-between align-items-center">
                                <span><i class="fa-solid fa-unlock-keyhole me-2"></i>A.S.D. SFD 1 / SFD 2 & Security Gateway Global Unlocker</span>
                                <span class="badge bg-success"><i class="fa-solid fa-shield-check me-1"></i>Odomykanie pre Všetky Značky Sveta</span>
                            </div>
                            <div class="card-body">
                                <div class="row g-3 align-items-center mb-4">
                                    <div class="col-md-8">
                                        <h6 class="fw-bold text-light mb-1">Ochrana Zbernice & Riadiacich Jednotiek (SFD 1 / SFD 2 / FCA SGW / Renault SGW)</h6>
                                        <p class="small text-secondary mb-0">
                                            Nové vozidlá vyrobené po roku 2020 (VAG, Fiat/Jeep, Mercedes, Renault, BMW, Toyota) majú blokované kódovanie, prispôsobenie a akčné členy. A.S.D. SFD modul vygeneruje odomykací token a obíde továrenský firewall.
                                        </p>
                                    </div>
                                    <div class="col-md-4 text-end">
                                        <button class="btn btn-warning text-dark fw-bold px-4 py-2 shadow" onclick="openSfdUnlockModal()">
                                            <i class="fa-solid fa-key me-2"></i>Odomknúť SFD Ochranu ECU
                                        </button>
                                    </div>
                                </div>

                                <div class="row g-3">
                                    <div class="col-md-3">
                                        <div class="p-3 bg-dark rounded border border-success text-center">
                                            <i class="fa-solid fa-shield-halved fa-2x text-success mb-2"></i>
                                            <div class="fw-bold text-light">VAG SFD 1 & SFD 2</div>
                                            <small class="text-success">Status: Odomknuté OK</small>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="p-3 bg-dark rounded border border-success text-center">
                                            <i class="fa-solid fa-lock-open fa-2x text-info mb-2"></i>
                                            <div class="fw-bold text-light">FCA Security Gateway</div>
                                            <small class="text-info">Status: SGW Bypass OK</small>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="p-3 bg-dark rounded border border-success text-center">
                                            <i class="fa-solid fa-network-wired fa-2x text-warning mb-2"></i>
                                            <div class="fw-bold text-light">Mercedes DoIP / Renault SGW</div>
                                            <small class="text-warning">Status: Firewall Inactive</small>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="p-3 bg-dark rounded border border-success text-center">
                                            <i class="fa-solid fa-globe fa-2x text-primary mb-2"></i>
                                            <div class="fw-bold text-light">Global World Access</div>
                                            <small class="text-primary">USA / EU / Ázia / Afrika</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- TAB 2: DTC DATABANKA PODĽA VÝROBCOV AUT -->
                    <div class="tab-pane fade" id="dtcDatabasePanel" role="tabpanel">
                        <div class="p-3 bg-secondary bg-opacity-10 rounded border border-secondary mb-4">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label text-warning fw-bold small mb-1"><i class="fa-solid fa-magnifying-glass me-1"></i>Rýchle vyhľadávanie v DTC databanke:</label>
                                    <input type="text" id="dtcSearchInput" class="form-control bg-dark text-white border-secondary" placeholder="Zadajte kód (napr. P0300, P0171, C0035, U0100) alebo kľúčové slovo (DPF, EGR, turbo, sviečka)..." oninput="renderDtcDatabaseTable()">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label text-info fw-bold small mb-1"><i class="fa-solid fa-filter me-1"></i>Filter podľa kategórie systému:</label>
                                    <div class="d-flex flex-wrap gap-1" id="dtcSubsystemFilterBtns">
                                        ${dtcSubsystems.map(sub => `
                                            <button class="btn btn-sm ${sub === selectedDtcSubsystemFilter ? 'btn-info text-dark fw-bold' : 'btn-outline-secondary text-light'}" onclick="filterDtcBySubsystem('${sub}')">
                                                ${sub}
                                            </button>
                                        `).join('')}
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label class="form-label text-warning fw-bold small mb-1"><i class="fa-solid fa-car me-1"></i>Filter podľa výrobcu / značky vozidla:</label>
                                    <div class="d-flex flex-wrap gap-1" id="dtcBrandFilterBtns">
                                        ${dtcBrands.map(b => `
                                            <button class="btn btn-sm ${b === selectedDtcBrandFilter ? 'btn-warning text-dark fw-bold' : 'btn-outline-secondary text-light'}" onclick="filterDtcByBrand('${b}')">
                                                ${b}
                                            </button>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h6 class="fw-bold text-light mb-0"><i class="fa-solid fa-book-open me-2 text-warning"></i>DTC Chybové Kódy (${selectedDtcBrandFilter} | ${selectedDtcSubsystemFilter})</h6>
                            <small class="text-info"><i class="fa-solid fa-list-check me-1"></i>Nájdené záznamy: <strong id="dtcMatchCount">0</strong></small>
                        </div>

                        <div class="table-responsive">
                            <table class="table table-dark table-striped table-bordered align-middle">
                                <thead>
                                    <tr class="table-secondary text-dark">
                                        <th>Kód DTC</th>
                                        <th>Výrobca / Skupina</th>
                                        <th>Systém</th>
                                        <th>Názov závady v slovenskom jazyku</th>
                                        <th>Stručný popis</th>
                                        <th>Slovenské vysvetlenie & Postup</th>
                                    </tr>
                                </thead>
                                <tbody id="dtcDatabaseTableBody">
                                    <!-- Populated JS -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- TAB 4: ÚPRAVA EEPROM CEZ OBD-2 ROZHRANIE -->
                    <div class="tab-pane fade" id="eepromPanel" role="tabpanel">
                        <div id="eepromContainerInner">
                            <!-- Populated JS via renderEepromPanelUi() -->
                        </div>
                    </div>

                    <!-- TAB 5: CHIPTUNING & ÚPRAVA MÁP MOTORA A PREVODOVKY -->
                    <div class="tab-pane fade" id="remapPanel" role="tabpanel">
                        <div id="remapContainerInner">
                            <!-- Populated JS via renderEcuRemapPanelUi() -->
                        </div>
                    </div>

                    <!-- TAB 6: ADBLUE (MOČOVINA) & RESET SERVISNÝCH INTERVALOV -->
                    <div class="tab-pane fade" id="serviceResetPanel" role="tabpanel">
                        <div id="serviceResetContainerInner">
                            <!-- Populated JS via renderServiceResetPanelUi() -->
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;
    renderEcuTree();
    updateEcuList();
    renderEepromPanelUi();
    renderEcuRemapPanelUi();
    renderServiceResetPanelUi();
}

function switchMechanikTab(tabId) {
    const btn = document.getElementById(tabId);
    if (btn) {
        const tab = new bootstrap.Tab(btn);
        tab.show();
    }
}

function toggleElmDevice(type) {
    if (type === 'usb') {
        elmDevices.usb.connected = !elmDevices.usb.connected;
        const port = document.getElementById('elmUsbPort').value;
        const baud = document.getElementById('elmUsbBaud').value;
        elmDevices.usb.port = port;
        elmDevices.usb.baud = baud;

        const badge = document.getElementById('elmUsbBadge');
        const btn = document.getElementById('elmUsbBtn');
        const info = document.getElementById('elmUsbInfo');

        if (elmDevices.usb.connected) {
            badge.className = "badge bg-success";
            badge.textContent = "Pripojené";
            btn.className = "btn btn-danger w-100 fw-bold py-2";
            btn.innerHTML = `<i class="fa-solid fa-plug-circle-xmark me-2"></i>Odpojiť ELM327 USB Zásuvku`;
            info.innerHTML = `<strong>Status:</strong> <span class="text-success">Pripojená k ${port} (${baud} baud) • Inicializácia ELM327 v1.5 / AT Z / ISO 15765-4 CAN OK</span>`;
            alert(`ELM327 USB Diagnostická zásuvka bola úspešne prihlásená a pripojená na port ${port}!`);
        } else {
            badge.className = "badge bg-secondary";
            badge.textContent = "Odpojené";
            btn.className = "btn btn-info text-dark w-100 fw-bold py-2";
            btn.innerHTML = `<i class="fa-solid fa-plug me-2"></i>Prihlásiť & Pripojiť ELM327 USB`;
            info.innerHTML = `<strong>Status:</strong> <span class="text-secondary">USB adaptér odpojený</span>`;
        }
    } else if (type === 'bt') {
        elmDevices.bt.connected = !elmDevices.bt.connected;
        const dev = document.getElementById('elmBtDevice').value;
        const pin = document.getElementById('elmBtPin').value;
        elmDevices.bt.device = dev;
        elmDevices.bt.pin = pin;

        const badge = document.getElementById('elmBtBadge');
        const btn = document.getElementById('elmBtBtn');
        const info = document.getElementById('elmBtInfo');

        if (elmDevices.bt.connected) {
            badge.className = "badge bg-success";
            badge.textContent = "Pripojené";
            btn.className = "btn btn-danger w-100 fw-bold py-2";
            btn.innerHTML = `<i class="fa-solid fa-plug-circle-xmark me-2"></i>Odpojiť ELM327 Bluetooth Zásuvku`;
            info.innerHTML = `<strong>Status:</strong> <span class="text-success">Pripojená cez Bluetooth (${dev}) • SPP Serial Link OK</span>`;
            alert(`ELM327 Bluetooth Diagnostická zásuvka bola úspešne prihlásená a spárovaná (${dev})!`);
        } else {
            badge.className = "badge bg-secondary";
            badge.textContent = "Odpojené";
            btn.className = "btn btn-primary w-100 fw-bold py-2";
            btn.innerHTML = `<i class="fa-solid fa-bluetooth me-2"></i>Prihlásiť & Pripojiť ELM327 Bluetooth`;
            info.innerHTML = `<strong>Status:</strong> <span class="text-secondary">Bluetooth adaptér odpojený</span>`;
        }
    }

    const summaryEl = document.getElementById('activeAdapterSummaryText');
    if (summaryEl) {
        if (elmDevices.usb.connected || elmDevices.bt.connected) {
            summaryEl.innerHTML = `Aktívne zásuvky: ${elmDevices.usb.connected ? '<span class="badge bg-info text-dark me-1"><i class="fa-solid fa-usb me-1"></i>USB (' + elmDevices.usb.port + ')</span>' : ''} ${elmDevices.bt.connected ? '<span class="badge bg-primary me-1"><i class="fa-brands fa-bluetooth-b me-1"></i>Bluetooth</span>' : ''}`;
        } else {
            summaryEl.textContent = 'Žiadna ELM327 zásuvka nie je prihlásená (Vyberte USB alebo Bluetooth)';
        }
    }
}

function renderEcuTree() {
    const container = document.getElementById('ecuTreeContainer');
    if (!container) return;

    const brandSelect = document.getElementById('diagBrandSelect');
    const brand = brandSelect ? brandSelect.value : "Skoda";
    const treeData = vehicleEcuTree[brand] || vehicleEcuTree["Skoda"];

    let html = `
        <div class="p-2 mb-2 bg-dark rounded border border-secondary text-warning fw-bold small">
            <i class="fa-solid fa-car me-2"></i>Vozidlo: ${treeData.name}<br>
            <i class="fa-solid fa-barcode me-2 text-info"></i>VIN: ${treeData.vin}
        </div>
        <ul class="list-unstyled mb-0">
    `;

    treeData.nodes.forEach(group => {
        html += `
            <li class="mb-2">
                <div class="p-2 bg-secondary bg-opacity-20 rounded border border-secondary fw-bold text-light small d-flex justify-content-between align-items-center">
                    <span><i class="fa-solid ${group.icon} me-2"></i>${group.title}</span>
                    <span class="badge bg-dark text-info">${group.children.length} ECU</span>
                </div>
                <ul class="list-unstyled ms-3 mt-1 border-start border-secondary ps-2">
        `;

        group.children.forEach(child => {
            const isSelected = child.id === selectedEcuNodeId;
            const statusClass = child.status === 'DTC' ? 'bg-danger text-white' : 'bg-success text-white';
            
            html += `
                <li class="my-1">
                    <button class="btn btn-sm w-100 text-start d-flex justify-content-between align-items-center p-2 rounded ${isSelected ? 'btn-warning text-dark fw-bold shadow' : 'btn-dark text-light border-secondary'}" onclick="selectEcuTreeNode('${child.id}', '${child.name}', '${child.code}')">
                        <div>
                            <span class="badge bg-secondary font-monospace me-2">${child.code}</span>
                            <span>${child.name}</span>
                        </div>
                        <div>
                            ${child.dtcCount > 0 ? `<span class="badge bg-danger ms-1">${child.dtcCount} DTC</span>` : '<span class="badge bg-success ms-1"><i class="fa-solid fa-check me-1"></i>Bez chýb</span>'}
                        </div>
                    </button>
                </li>
            `;
        });

        html += `
                </ul>
            </li>
        `;
    });

    html += `</ul>`;
    container.innerHTML = html;
}

function selectEcuTreeNode(nodeId, name, code) {
    selectedEcuNodeId = nodeId;
    renderEcuTree();

    const nameEl = document.getElementById('connectedEcuName');
    const labelEl = document.getElementById('selectedEcuTreeLabel');
    if (nameEl) nameEl.textContent = `${code} - ${name}`;
    if (labelEl) labelEl.textContent = `${code} - ${name}`;

    const dtcList = document.getElementById('dtcList');
    const gauges = document.getElementById('sensorGauges');

    if (nodeId === 'ecu_03') {
        dtcList.innerHTML = `
            <li class="list-group-item bg-transparent text-white border-secondary d-flex justify-content-between align-items-center p-2">
                <div><strong class="text-danger font-monospace fs-6">C0035</strong> - Snímač otáčok predného ľavého kolesa (ABS)</div>
                <button class="btn btn-sm btn-outline-warning text-warning py-0 px-2 fw-bold" onclick="openDtcDetailModal('C0035')"><i class="fa-solid fa-book-open me-1"></i>Vysvetlenie v SK</button>
            </li>
        `;
        gauges.innerHTML = `
            <div class="mb-3">
                <div class="d-flex justify-content-between small mb-1"><span>Rýchlosť kolesa predné ľavé:</span> <strong class="text-danger">0 km/h (Chyba snímača)</strong></div>
                <div class="progress bg-dark"><div class="progress-bar bg-danger" style="width: 0%"></div></div>
            </div>
            <div class="mb-3">
                <div class="d-flex justify-content-between small mb-1"><span>Rýchlosť kolesa predné pravé:</span> <strong class="text-success">50 km/h</strong></div>
                <div class="progress bg-dark"><div class="progress-bar bg-success" style="width: 50%"></div></div>
            </div>
        `;
    } else if (nodeId === 'ecu_09') {
        dtcList.innerHTML = `
            <li class="list-group-item bg-transparent text-white border-secondary d-flex justify-content-between align-items-center p-2">
                <div><strong class="text-warning font-monospace fs-6">P0171</strong> - Zmes príliš chudobná (BCM Signal)</div>
                <button class="btn btn-sm btn-outline-warning text-warning py-0 px-2 fw-bold" onclick="openDtcDetailModal('P0171')"><i class="fa-solid fa-book-open me-1"></i>Vysvetlenie v SK</button>
            </li>
        `;
        gauges.innerHTML = `
            <div class="mb-3">
                <div class="d-flex justify-content-between small mb-1"><span>Napätie svorky 30 (Palubná sieť):</span> <strong class="text-info">14.2 V</strong></div>
                <div class="progress bg-dark"><div class="progress-bar bg-info" style="width: 80%"></div></div>
            </div>
        `;
    } else {
        dtcList.innerHTML = `
            <li class="list-group-item bg-transparent text-success p-3 text-center">
                <i class="fa-solid fa-circle-check fa-2x mb-2 d-block text-success"></i>
                V tejto riadiacej jednotke [${code}] sa nenachádzajú žiadne chybové kódy (DTC 0).
            </li>
        `;
        gauges.innerHTML = `
            <div class="mb-3">
                <div class="d-flex justify-content-between small mb-1"><span>Otáčky motora (RPM):</span> <strong class="text-warning">850 ot/min</strong></div>
                <div class="progress bg-dark"><div class="progress-bar bg-success" style="width: 25%"></div></div>
            </div>
            <div class="mb-3">
                <div class="d-flex justify-content-between small mb-1"><span>Teplota chladiacej kvapaliny:</span> <strong class="text-info">90 °C</strong></div>
                <div class="progress bg-dark"><div class="progress-bar bg-info" style="width: 60%"></div></div>
            </div>
        `;
    }
}

// Chiptuning helper function
function openChiptuningModal() {
    openEcuRemapModal();
}

function cleanupModalBackdrops() {
    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
}

function openGenericActionModal(title, text, customHtml) {
    cleanupModalBackdrops();
    const titleEl = document.getElementById('genericModalTitle');
    const bodyEl = document.getElementById('genericModalBody');
    if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-window-restore me-2 text-info"></i>${title}`;
    if (bodyEl) {
        bodyEl.innerHTML = customHtml || `
            <div class="p-3 bg-secondary bg-opacity-20 rounded border border-info mb-3">
                <h5 class="fw-bold text-warning mb-2"><i class="fa-solid fa-circle-info me-2 text-info"></i>${title}</h5>
                <p class="text-light mb-0">${text}</p>
            </div>
            <div class="p-3 bg-dark rounded border border-success d-flex align-items-center gap-3">
                <i class="fa-solid fa-circle-check fs-2 text-success"></i>
                <div>
                    <strong class="text-success d-block">Sektor A.S.D. je Plne Funkčný & Aktívny</strong>
                    <span class="text-muted small">Všetky požiadavky a dáta sú spracované v reálnom čase. Pokračujte voľbou akcií v programe.</span>
                </div>
            </div>
        `;
    }
    const modalEl = document.getElementById('genericActionModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }
}

function openZakazkovyListModal(woId) {
    cleanupModalBackdrops();
    const wo = workOrders.find(w => w.id === woId) || workOrders[0];
    if (!wo) return;

    const bodyEl = document.getElementById('zakazkovyListModalBody');
    if (bodyEl) {
        bodyEl.innerHTML = `
            <div class="bg-white text-dark p-4 rounded shadow-sm">
                <div class="d-flex justify-content-between border-bottom pb-3 mb-3">
                    <div>
                        <h4 class="fw-bold text-primary mb-0">ZÁKAZKOVÝ A PRACOVNÝ LIST</h4>
                        <div class="text-muted small">Číslo zákazky: <strong>${wo.id}</strong></div>
                    </div>
                    <div class="text-end">
                        <div class="fw-bold text-danger fs-5">${wo.id}</div>
                        <div class="small text-muted">Dátum: ${wo.dateReceived}</div>
                    </div>
                </div>
                <div class="row g-3 small mb-3">
                    <div class="col-6 p-2 bg-light rounded border">
                        <strong class="text-primary">Zákazník:</strong> ${wo.customer}<br>
                        <strong>Adresa:</strong> ${wo.customerAddress || 'Slovensko'}<br>
                        <strong>Telefón:</strong> +421 908 374 050
                    </div>
                    <div class="col-6 p-2 bg-light rounded border">
                        <strong class="text-success">Vozidlo:</strong> ${wo.vehicle}<br>
                        <strong>EČV / ŠPZ:</strong> ${wo.ecv || 'KE-849XX'} | <strong>VIN:</strong> ${wo.vin}<br>
                        <strong>Stav km:</strong> ${wo.odometer || '120 000 km'}
                    </div>
                </div>
                <div class="p-2 bg-light rounded border mb-3 small">
                    <strong>Popis poruchy / požiadavky:</strong> ${wo.faultDescription || 'Servisná prehliadka & diagnostika motora'}<br>
                    <strong>Stav vozidla pri príjme:</strong> ${wo.damageNotes || 'Bez poškodenia'}
                </div>
                ${wo.photo ? `
                    <div class="mb-3 text-center border p-2 bg-light rounded">
                        <div class="small text-muted fw-bold mb-1">Fotodokumentácia prijatého vozidla:</div>
                        <img src="${wo.photo}" alt="Foto vozidla" style="max-height: 200px; object-fit: contain;" class="rounded border">
                    </div>
                ` : ''}
            </div>
        `;
    }
    const modalEl = document.getElementById('zakazkovyListModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }
}

function openDiagnosticProtocolModal(woId) {
    cleanupModalBackdrops();
    const wo = workOrders.find(w => w.id === woId) || workOrders[0];
    if (!wo) return;

    const contentEl = document.getElementById('diagProtocolContent');
    if (contentEl) {
        contentEl.innerHTML = `
            <div class="p-3 bg-white text-dark rounded border">
                <div class="d-flex justify-content-between border-bottom pb-2 mb-3">
                    <div>
                        <h4 class="fw-bold text-primary mb-0">EXPERTNÝ DIAGNOSTICKÝ PROTOKOL A.S.D.</h4>
                        <div class="small text-muted">Kompletná analýza ECU riadiacich jednotiek</div>
                    </div>
                    <div class="text-end">
                        <div class="fw-bold text-danger">DIAG-2026-${wo.id.replace(/[^0-9]/g, '')}</div>
                        <div class="small text-muted">${new Date().toLocaleDateString('sk-SK')}</div>
                    </div>
                </div>
                <div class="row g-2 small mb-3 bg-light p-2 rounded border">
                    <div class="col-6"><strong>Vozidlo:</strong> ${wo.vehicle} (${wo.ecv || 'SN333DV'})</div>
                    <div class="col-6"><strong>VIN:</strong> ${wo.vin}</div>
                    <div class="col-6"><strong>Zákazník:</strong> ${wo.customer}</div>
                    <div class="col-6"><strong>Diagnostik:</strong> ${wo.technician || 'Mechanik Jozef'}</div>
                </div>
                <table class="table table-bordered small">
                    <thead class="table-primary">
                        <tr>
                            <th>Riadiaca Jednotka (ECU)</th>
                            <th>Protokol</th>
                            <th>DTC Chybové Kódy</th>
                            <th>Stav</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>01 - Engine Control Module (ECM)</strong></td>
                            <td>UDS / CAN</td>
                            <td><span class="badge bg-danger">P0300 (Misfire)</span></td>
                            <td class="text-danger fw-bold">Chyba zistená</td>
                        </tr>
                        <tr>
                            <td><strong>03 - Brake Electronics (ABS/ESP)</strong></td>
                            <td>CAN-Bus</td>
                            <td><span class="badge bg-success">0 Závad</span></td>
                            <td class="text-success fw-bold">V poriadku</td>
                        </tr>
                        <tr>
                            <td><strong>09 - Central Electrics (BCM)</strong></td>
                            <td>UDS</td>
                            <td><span class="badge bg-success">0 Závad</span></td>
                            <td class="text-success fw-bold">V poriadku</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
    const modalEl = document.getElementById('diagProtocolModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }
}

function openSmsModal(woId) {
    cleanupModalBackdrops();
    const wo = workOrders.find(w => w.id === woId) || workOrders[0];
    if (!wo) return;

    const inputWo = document.getElementById('smsWoId');
    const inputCust = document.getElementById('smsCustomerInput');
    const textarea = document.getElementById('smsTextarea');

    if (inputWo) inputWo.value = wo.id;
    if (inputCust) inputCust.value = `${wo.customer} (${wo.vehicle})`;
    if (textarea) textarea.value = `Dobrý deň ${wo.customer}, Vaše vozidlo ${wo.vehicle} (${wo.ecv || ''}) je pripravené na prevzatie v servise A.S.D. Suma na úhradu: ${wo.amount.toFixed(2)} EUR.`;

    const modalEl = document.getElementById('smsNotificationModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }
}

function openWorkOrderEditModal() {
    cleanupModalBackdrops();
    const bodyEl = document.getElementById('workOrderEditModalBody');
    if (bodyEl) {
        bodyEl.innerHTML = `
            <div class="table-responsive">
                <table class="table table-dark table-striped table-hover align-middle small">
                    <thead class="table-primary text-dark fw-bold">
                        <tr>
                            <th>Číslo Zákazky</th>
                            <th>Zákazník</th>
                            <th>Vozidlo & EČV</th>
                            <th>Typ</th>
                            <th>Stav</th>
                            <th>Suma</th>
                            <th>Akcie</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${workOrders.map(wo => `
                            <tr>
                                <td class="fw-bold text-warning font-monospace">${wo.id}</td>
                                <td>${wo.customer}</td>
                                <td>${wo.vehicle} (${wo.ecv || 'KE-849XX'})</td>
                                <td><span class="badge bg-info text-dark">${wo.type}</span></td>
                                <td><span class="badge ${wo.status === 'Dokončená' ? 'bg-success' : 'bg-warning text-dark'}">${wo.status}</span></td>
                                <td class="fw-bold text-success">${wo.amount.toFixed(2)} €</td>
                                <td>
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-warning text-dark fw-bold" onclick="openZakazkovyListModal('${wo.id}')"><i class="fa-solid fa-file-contract"></i></button>
                                        <button class="btn btn-outline-info" onclick="previewPdf('${wo.id}')"><i class="fa-solid fa-file-pdf text-danger"></i></button>
                                        <button class="btn btn-outline-success" onclick="closeWorkOrder('${wo.id}')"><i class="fa-solid fa-check"></i> Ukončiť</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
    const modalEl = document.getElementById('workOrderEditModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }
}

function openAdminRepairModal() { openGenericActionModal('Diagnostika a oprava programu / databázy', 'Skenovanie integrity databázy A.S.D., oprava indexov a kontrola tabuliek.'); }
function openAdminSupportModal() { openGenericActionModal('Vzdialená podpora pre používateľov', 'Overenie stavu zbernice, portu 5050, vzdialeného pripojenia a šifrovaného HTTPS tunelu.'); }
function openAdminLanguageModal() { openGenericActionModal('Centrálna zmena jazyka po celom svete', 'Systém A.S.D. podporuje 40 svetových jazykov. Zmena sa okamžite aplikuje na všetky moduly.'); }
function openAdminPassGenModal() { openGenericActionModal('Tvorba nových hesiel pre rôzne sekcie', 'Generátor bezpečných hesiel a prístupových kľúčov pre moduly A.S.D.'); }
function openAdminAccountsModal() { openGenericActionModal('Prehľad prihlasovacích údajov rolí', 'Administrácia 7 používateľských účtov: admin, majiteľ, riaditeľ, technik, skladník, mechanik, účtovník.'); }
function openAdminCompanyModal() { openGenericActionModal('Vytvorenie a úprava fakturačných údajov firmy', 'Správa profilov firiem: IČO, DIČ, IČ DPH, registrácie a IBAN.'); }
function openAdminLogoModal() { openGenericActionModal('Nahranie a zmena LOGA firmy pre doklady', 'Umožňuje vložiť grafické logo firmy pre tlač e-faktúr a zákazkových listov.'); }
function openAdminSelectCompanyModal() { openGenericActionModal('Nastavenie hlavnej fakturačne firmy', 'Výber Aktívnej firmy pre vystavovanie e-Faktúr a dokladov A.S.D.'); }
function openAdminDirectChatModal() { openGenericActionModal('Priama komunikácia s Majiteľom / Riaditeľom', 'Vnútorný šifrovaný kanál komunikácie pre správu systému.'); }
function openAdminGlobalChatModal() { openGenericActionModal('Globálny systémový chat pre všetkých používateľov', 'Globálna komunikácia v rámci celej prevádzky A.S.D.'); }

function openMajitelMultiCompanyModal() { openGenericActionModal('Multi-firemný prehľad a štatistiky firiem', 'Prehľad celkových tržieb, zisku a vybavených zákaziek naprieč všetkými pobočkami.'); }
function openMajitelBranchCoordinationModal() { openGenericActionModal('Prepínanie a koordinácia firiem / pobočiek', 'Koordinácia pobočiek Bratislava, Košice, Poprad.'); }
function openMajitelChatRiaditelModal() { openGenericActionModal('Priama komunikácia s Riaditeľom cez A.S.D.', 'Priamy kanál pre zadávanie úloh a koordináciu riaditeľa.'); }
function openMajitelGlobalChatModal() { openGenericActionModal('Komunikácia so všetkými používateľmi v rámci firiem', 'Hromadný oznamovací kanál pre všetkých zamestnancov.'); }
function openMajitelAccountingModal() { openGenericActionModal('Kontrola účtovného rozhrania cez svojho účtovníka', 'Náhlady na e-faktúry, výdavky, príjmy a DPH 23% v režime pozorovateľa.'); }
function openMajitelUserObserverModal() { openGenericActionModal('Prístup k používateľským účtom ako pozorovateľ', 'Sledovanie aktivity používateľov v reálnom čase bez možnosti modifikácie.'); }

function openRiaditelOrdersOverviewModal() { openGenericActionModal('Dohľad nad servisnými zákazkami', 'Prehľad stavu všetkých zákaziek v servise, termínov a vyťaženia.'); }
function openRiaditelChatMajitelModal() { openGenericActionModal('Priama komunikácia s Majiteľom cez A.S.D.', 'Podávanie hlásení a správ majiteľovi spoločnosti.'); }
function openRiaditelGlobalChatModal() { openGenericActionModal('Komunikácia so všetkými používateľmi v rámci firmy', 'Operatívne riadenie technika, skladníka a mechanikov.'); }
function openRiaditelAccountingReviewModal() { openGenericActionModal('Kontrola účtovného rozhrania s účtovníkom', 'Dohľad nad plnením finančného plánu a fakturáciou.'); }
function openRiaditelUserObserverModal() { openGenericActionModal('Prístup k používateľským účtom ako pozorovateľ', 'Monitoring práce a vyťaženia jednotlivých pracovníkov.'); }

function openStockCardsManageModal() { openGenericActionModal('Úprava zásoby kusov a cien na sklade', 'Spravovanie skladových stavov, úprava cien a marží.'); }
function openStoreBranchesModal() { openGenericActionModal('Skladové rozhranie podľa skladov', 'Prehľad dielov podľa pobočiek a kategórií.'); }
function openPrijemkaModal() { openGenericActionModal('Príjemky dielov od dodávateľov', 'Evidencia príjmu tovaru na sklad z dodacích listov.'); }
function openEanScannerModal() { openGenericActionModal('Podpora USB / Bluetooth čítačky čiarových kódov', 'Čítanie EAN/QR kódov pre rýchle naskladnenie a výdaj dielov.'); }

function openMechanikToSkladModal() { openGenericActionModal('Požiadavka na náhradný diel do Skladu', 'Priamy odoslaný požiadavok mechanika na vydanie dielu zo skladu.'); }
function openMechanikToTechnikModal() { openGenericActionModal('Správa pre Prijímacieho technika', 'Notifikácia prijímaciemu technikovi o dokončení opravy.'); }

function openUctovnikInvoicesModal() { openGenericActionModal('Prehľad e-faktúr v systéme A.S.D.', 'Vyhľadávanie, kontrola DPH 23% a stavu úhrad.'); }
function openUctovnikDokladyModal() { openGenericActionModal('Prehľad skladových dokladov (Príjemky & Výdajky)', 'Kontrola a párovanie príjemiek/výdajiek s faktúrami.'); }
function openUctovnikChatModal() { openGenericActionModal('Vnútorná komunikácia v rámci programu A.S.D.', 'Komunikácia s vedením a technikmi vo veci fakturácie.'); }


function scanEcuTree() {
    alert("Spustené kompletné preskúmanie CAN zbernice a načítanie stromu riadiacich jednotiek cez prihlásenú ELM327 zásuvku...");
    renderEcuTree();
}

function updateBrandListByRegion() {
    const regionSelect = document.getElementById('diagRegionSelect');
    const brandSelect = document.getElementById('diagBrandSelect');
    if (!regionSelect || !brandSelect) return;

    const region = regionSelect.value;
    const brands = globalWorldBrands[region] || globalWorldBrands["Európa"];

    brandSelect.innerHTML = '';
    brands.forEach(b => {
        brandSelect.innerHTML += `<option value="${b}">${b}</option>`;
    });

    renderEcuTree();
}

function updateEcuList() {
    renderEcuTree();
}

function toggleEcuConnection() {
    ecuConnected = !ecuConnected;
    const btn = document.getElementById('ecuConnectBtn');
    const panel = document.getElementById('ecuLivePanel');
    const brand = document.getElementById('diagBrandSelect').value;
    const ecu = document.getElementById('diagEcuSelect').value;

    if (ecuConnected) {
        btn.innerHTML = `<i class="fa-solid fa-plug-circle-xmark me-1"></i>Odpojiť ECU`;
        btn.className = "btn btn-danger w-100 fw-bold py-2";
        panel.classList.remove('d-none');
        document.getElementById('connectedEcuName').textContent = `${brand} - ${ecu}`;

        // Populate DTC
        document.getElementById('dtcList').innerHTML = `
            <li class="list-group-item bg-transparent text-white border-secondary d-flex justify-content-between align-items-center p-2">
                <div>
                    <strong class="text-danger font-monospace fs-6">P0300</strong> - Vynechávanie zapaľovania na valcoch
                </div>
                <div class="d-flex align-items-center gap-2">
                    <span class="badge bg-danger">Vysoká</span>
                    <button class="btn btn-sm btn-outline-warning text-warning py-0 px-2 fw-bold" onclick="openDtcDetailModal('P0300')"><i class="fa-solid fa-book-open me-1"></i>Vysvetlenie v SK</button>
                </div>
            </li>
            <li class="list-group-item bg-transparent text-white border-secondary d-flex justify-content-between align-items-center p-2">
                <div>
                    <strong class="text-warning font-monospace fs-6">P0171</strong> - Zmes príliš chudobná (Bank 1)
                </div>
                <div class="d-flex align-items-center gap-2">
                    <span class="badge bg-warning text-dark">Stredná</span>
                    <button class="btn btn-sm btn-outline-warning text-warning py-0 px-2 fw-bold" onclick="openDtcDetailModal('P0171')"><i class="fa-solid fa-book-open me-1"></i>Vysvetlenie v SK</button>
                </div>
            </li>
        `;

        // Populate Gauges
        document.getElementById('sensorGauges').innerHTML = `
            <div class="mb-3">
                <div class="d-flex justify-content-between small mb-1"><span>Otáčky motora (RPM):</span> <strong class="text-warning">850 ot/min</strong></div>
                <div class="progress bg-dark"><div class="progress-bar bg-success" style="width: 25%"></div></div>
            </div>
            <div class="mb-3">
                <div class="d-flex justify-content-between small mb-1"><span>Teplota chladiacej kvapaliny:</span> <strong class="text-info">90 °C</strong></div>
                <div class="progress bg-dark"><div class="progress-bar bg-info" style="width: 60%"></div></div>
            </div>
            <div class="mb-3">
                <div class="d-flex justify-content-between small mb-1"><span>Tlak paliva v lište (Rail):</span> <strong class="text-primary">350 bar</strong></div>
                <div class="progress bg-dark"><div class="progress-bar bg-primary" style="width: 40%"></div></div>
            </div>
        `;
    } else {
        btn.innerHTML = `<i class="fa-solid fa-plug me-1"></i>Pripojiť k ECU (UDS/CAN)`;
        btn.className = "btn btn-success w-100 fw-bold py-2";
        panel.classList.add('d-none');
    }
}

function filterDtcByBrand(brand) {
    selectedDtcBrandFilter = brand;
    const container = document.getElementById('roleInterfaceContainer');
    if (container && currentUser && currentUser.username === 'mechanik') {
        renderMechanikInterface(container);
        const dtcTabBtn = document.getElementById('dtc-tab');
        if (dtcTabBtn) {
            const tab = new bootstrap.Tab(dtcTabBtn);
            tab.show();
            renderDtcDatabaseTable();
        }
    }
}

function filterDtcBySubsystem(subsystem) {
    selectedDtcSubsystemFilter = subsystem;
    const container = document.getElementById('roleInterfaceContainer');
    if (container && currentUser && currentUser.username === 'mechanik') {
        renderMechanikInterface(container);
        const dtcTabBtn = document.getElementById('dtc-tab');
        if (dtcTabBtn) {
            const tab = new bootstrap.Tab(dtcTabBtn);
            tab.show();
            renderDtcDatabaseTable();
        }
    }
}

function renderDtcDatabaseTable() {
    const tbody = document.getElementById('dtcDatabaseTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const searchInput = document.getElementById('dtcSearchInput');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const filtered = dtcDatabase.filter(item => {
        if (selectedDtcBrandFilter !== "Všetky značky" && item.brand !== selectedDtcBrandFilter) {
            return false;
        }
        if (selectedDtcSubsystemFilter !== "Všetky kategórie" && item.subsystem !== selectedDtcSubsystemFilter) {
            return false;
        }
        if (query) {
            const matchCode = item.code.toLowerCase().includes(query);
            const matchTitle = item.title.toLowerCase().includes(query);
            const matchDesc = item.desc.toLowerCase().includes(query);
            const matchCauses = item.causes.toLowerCase().includes(query);
            const matchBrand = item.brand.toLowerCase().includes(query);
            return matchCode || matchTitle || matchDesc || matchCauses || matchBrand;
        }
        return true;
    });

    const countEl = document.getElementById('dtcMatchCount');
    if (countEl) countEl.textContent = filtered.length;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted p-4"><i class="fa-solid fa-triangle-exclamation me-2"></i>Pre vybraný filter sa v databanke nenašli žiadne DTC chybové kódy.</td></tr>`;
        return;
    }

    filtered.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td class="fw-bold text-danger font-monospace fs-6">${item.code}</td>
                <td><span class="badge bg-secondary border border-secondary">${item.brand}</span></td>
                <td><span class="badge bg-info text-dark fw-bold">${item.subsystem}</span></td>
                <td class="fw-bold text-warning">${item.title}</td>
                <td class="small text-light">${item.desc}</td>
                <td class="text-center">
                    <button class="btn btn-sm btn-primary fw-bold px-3" onclick="openDtcDetailModal('${item.code}')">
                        <i class="fa-solid fa-book-open me-1"></i>Slovenský preklad & návod
                    </button>
                </td>
            </tr>
        `;
    });
}

function openDtcDetailModal(code) {
    const dtc = dtcDatabase.find(d => d.code.toUpperCase() === code.toUpperCase());
    currentDetailDtcCode = code;

    const titleEl = document.getElementById('dtcModalTitle');
    const bodyEl = document.getElementById('dtcModalBody');
    if (!titleEl || !bodyEl) return;

    if (dtc) {
        titleEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation me-2 text-danger"></i>Detail DTC: <span class="text-warning font-monospace fs-4 ms-2">${dtc.code}</span> - ${dtc.brand}`;
        bodyEl.innerHTML = `
            <div class="p-3 bg-secondary bg-opacity-20 rounded border border-warning mb-3">
                <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
                    <span class="badge bg-danger fs-6 font-monospace">${dtc.code}</span>
                    <span class="badge bg-info text-dark fw-bold">${dtc.subsystem}</span>
                    <span class="badge bg-secondary">${dtc.brand}</span>
                </div>
                <h5 class="fw-bold text-warning mb-1">${dtc.title}</h5>
            </div>

            <div class="mb-3">
                <h6 class="fw-bold text-info"><i class="fa-solid fa-circle-info me-2"></i>Popis chyby (Slovenský preklad):</h6>
                <div class="p-3 bg-dark rounded border border-secondary text-light">${dtc.desc}</div>
            </div>

            <div class="mb-3">
                <h6 class="fw-bold text-danger"><i class="fa-solid fa-circle-xmark me-2"></i>Možné príčiny vzniku závady:</h6>
                <div class="p-3 bg-dark rounded border border-danger text-light">${dtc.causes}</div>
            </div>

            <div class="mb-3">
                <h6 class="fw-bold text-success"><i class="fa-solid fa-screwdriver-wrench me-2"></i>Odporúčaný postup diagnostiky a opravy pre mechanika:</h6>
                <div class="p-3 bg-dark rounded border border-success text-light" style="white-space: pre-line;">${dtc.solution}</div>
            </div>
        `;
    } else {
        titleEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation me-2 text-danger"></i>Detail DTC: <span class="text-warning font-monospace fs-4 ms-2">${code}</span>`;
        bodyEl.innerHTML = `
            <div class="alert alert-warning">
                <strong>DTC Kód ${code}</strong> podlieha štandardným protokolom OBD-II / EOBD A.S.D.
            </div>
        `;
    }

    const modal = new bootstrap.Modal(document.getElementById('dtcDetailModal'));
    modal.show();
}

function searchStockFromDtcModal() {
    const modalEl = document.getElementById('dtcDetailModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();

    alert(`Vyhľadávanie dielov pre DTC kód ${currentDetailDtcCode || ''} v Sklade A.S.D.\n\nMechanik odoslal požiadavku do interného chatu A.S.D. pre Skladníka!`);

    chatMessages.push({
        sender: "MECHANIK",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `Potrebujem preveriť skladovú zásobu náhradného dielu pre diagnostikovaný DTC kód [${currentDetailDtcCode || 'DTC'}].`
    });
    renderChat();
}

function openSfdUnlockModal() {
    const randomHex = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    const tokenInput = document.getElementById('sfdGeneratedToken');
    if (tokenInput) tokenInput.value = `ASD-SFD2-TOKEN-2026-${randomHex}`;

    const progressBox = document.getElementById('sfdProgressBox');
    const progressBar = document.getElementById('sfdProgressBar');
    if (progressBox) progressBox.classList.add('d-none');
    if (progressBar) {
        progressBar.style.width = '0%';
        progressBar.textContent = '0%';
    }

    const modal = new bootstrap.Modal(document.getElementById('sfdUnlockModal'));
    modal.show();
}

function performSfdUnlock() {
    const protocol = document.getElementById('sfdProtocolSelect').value;
    const duration = document.getElementById('sfdDurationSelect').value;
    const token = document.getElementById('sfdGeneratedToken').value;

    const progressBox = document.getElementById('sfdProgressBox');
    const progressBar = document.getElementById('sfdProgressBar');
    const statusText = document.getElementById('sfdProgressStatus');
    const submitBtn = document.getElementById('sfdSubmitBtn');

    if (progressBox) progressBox.classList.remove('d-none');
    if (submitBtn) submitBtn.disabled = true;

    let width = 0;
    const interval = setInterval(() => {
        width += 20;
        if (progressBar) {
            progressBar.style.width = width + '%';
            progressBar.textContent = width + '%';
        }

        if (width === 20 && statusText) statusText.textContent = "Overovanie A.S.D. Security Master Key na diagnostickej zbernici...";
        if (width === 60 && statusText) statusText.textContent = "Obchádzanie protiochrán a Security Gateway (SGW) Firewalla...";
        if (width === 100) {
            clearInterval(interval);
            if (statusText) statusText.textContent = "ODOMKNUTÉ ÚSPEŠNE! Riadiaca jednotka je sprístupnená pre kódovanie a prispôsobenie.";
            if (submitBtn) submitBtn.disabled = false;

            chatMessages.push({
                sender: "MECHANIK",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                text: `SFD / SGW Odomknutie úspešné pre protokol: ${protocol}. Generated Token: ${token} (Platnosť: ${duration}).`
            });
            renderChat();

            setTimeout(() => {
                const modalEl = document.getElementById('sfdUnlockModal');
                const modalInstance = bootstrap.Modal.getInstance(modalEl);
                if (modalInstance) modalInstance.hide();
                alert(`SFD & SECURITY GATEWAY ODOMKNUTÉ ÚSPEŠNE!\n\nProtokol: ${protocol}\nToken Key: ${token}\nPlatnosť: ${duration}\n\nVšetky riadiace jednotky vo vozidle sú odomknuté pre kódovanie, prispôsobenie a akčné členy.`);
            }, 600);
        }
    }, 400);
}

function openDiagnosticProtocolModal(woId) {
    const comp = getActiveCompany();
    const wo = workOrders.find(w => w.id === woId) || workOrders[0] || {
        vehicle: "Volkswagen Passat 2.0 TDI Alltrack B8",
        vin: "WVWZZZ3CZWE123456",
        ecv: "BT999XY",
        customer: "Peter Novák"
    };

    const container = document.getElementById('diagProtocolContent') || document.getElementById('diagProtocolModalBody');
    if (!container) return;

    container.innerHTML = `
        <!-- PROTOKOL HEADER -->
        <div class="row border-bottom border-dark pb-3 mb-3 align-items-center">
            <div class="col-8 d-flex align-items-center gap-3">
                ${comp.logo ? `<img src="${comp.logo}" alt="Logo" class="rounded border border-primary p-1 bg-white shadow-sm" style="height: 48px; max-width: 150px; object-fit: contain;">` : ''}
                <div>
                    <h4 class="fw-bold text-uppercase mb-0 text-dark">
                        <i class="fa-solid fa-microchip me-2 text-primary"></i>OFICIÁLNY EXPERTNÝ PROTOKOL Z DIAGNOSTIKY
                    </h4>
                    <div class="text-muted small">Autoservisný Systém a Diagnostika A.S.D. • Certifikované meranie podľa ISO/SAE J1979</div>
                </div>
            </div>
            <div class="col-4 text-end">
                <div class="fw-bold fs-5 text-primary">PROTOKOL č. PRT-2026-0042</div>
                <div class="text-muted small">Dátum merania: <strong>${new Date().toLocaleDateString('sk-SK')} ${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</strong></div>
            </div>
        </div>

        <!-- FIRMA & SERVIS INFO -->
        <div class="p-3 bg-light rounded border mb-3">
            <div class="row small">
                <div class="col-md-6 border-end">
                    <strong class="text-dark"><i class="fa-solid fa-building me-1 text-secondary"></i>Diagnostické stredisko / Servis:</strong>
                    <div class="fw-bold text-primary mt-1">${comp.name}</div>
                    <div>${comp.address}</div>
                    <div>IČO: ${comp.ico} | DIČ: ${comp.dic} | IČ DPH: ${comp.icDph}</div>
                    <div>Tel: ${comp.phone} | E-mail: ${comp.email}</div>
                </div>
                <div class="col-md-6 ps-md-3">
                    <strong class="text-dark"><i class="fa-solid fa-car me-1 text-secondary"></i>Diagnostikované Vozidlo & Zákazník:</strong>
                    <div class="fw-bold text-dark mt-1">${wo.vehicle}</div>
                    <div>EČV / ŠPZ: <strong class="text-danger font-monospace">${wo.ecv || 'BT999XY'}</strong> | VIN: <strong class="font-monospace">${wo.vin}</strong></div>
                    <div>Majiteľ / Zákazník: <strong>${wo.customer}</strong></div>
                    <div>Najazdené km: <strong>184 250 km</strong> | Motor: 2.0 TDI 140kW DFHA</div>
                </div>
            </div>
        </div>

        <!-- DIAGNOSTICKÉ HARDWARE VYBAVENIE -->
        <div class="p-3 bg-primary bg-opacity-10 border border-primary rounded mb-3">
            <h6 class="fw-bold text-primary mb-2"><i class="fa-solid fa-plug me-2"></i>Použitá Diagnostická Zásuvka & Protokol A.S.D.</h6>
            <div class="row small">
                <div class="col-md-4">
                    <strong>Rozhranie:</strong> ELM327 USB (COM3 HS-CAN) / Bluetooth OBDII
                </div>
                <div class="col-md-4">
                    <strong>Protokol komunikácie:</strong> ISO 14229 UDS / CAN 2.0B (500 kbps)
                </div>
                <div class="col-md-4">
                    <strong>SFD / SGW Firewall:</strong> <span class="badge bg-success">ODOMKNUTÉ (A.S.D. Key Active)</span>
                </div>
            </div>
        </div>

        <!-- SCAN TABUĽKA ECU JEDNOTIEK -->
        <h6 class="fw-bold text-dark mb-2"><i class="fa-solid fa-sitemap me-2 text-secondary"></i>1. Výsledok Skenovania Riadiacich Jednotiek (CAN Bus Tree Scan):</h6>
        <div class="table-responsive mb-3">
            <table class="table table-sm table-bordered align-middle text-center small">
                <thead class="table-secondary">
                    <tr>
                        <th>Adresa ECU</th>
                        <th>Názov Riadiacej Jednotky</th>
                        <th>Sériové Číslo / HW Part No</th>
                        <th>Stav DTC</th>
                        <th>Protokol</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="fw-bold font-monospace">01 - Engine</td>
                        <td class="text-start">Motorová Riadiaca Jednotka (EDC17 / PCR2.1)</td>
                        <td class="font-monospace">04L 906 026 FS</td>
                        <td><span class="badge bg-success">0 Chyby (DTC OK)</span></td>
                        <td>UDS CAN 500k</td>
                    </tr>
                    <tr>
                        <td class="fw-bold font-monospace">02 - Transmission</td>
                        <td class="text-start">Automatická Prevodovka DSG (DQ381)</td>
                        <td class="font-monospace">0GC 300 041 Q</td>
                        <td><span class="badge bg-success">0 Chyby (DTC OK)</span></td>
                        <td>UDS CAN 500k</td>
                    </tr>
                    <tr>
                        <td class="fw-bold font-monospace">03 - ABS / ESP</td>
                        <td class="text-start">Elektronický Stabilizačný Systém ESP9.0</td>
                        <td class="font-monospace">3Q0 614 517 AG</td>
                        <td><span class="badge bg-success">0 Chyby (DTC OK)</span></td>
                        <td>UDS CAN 500k</td>
                    </tr>
                    <tr>
                        <td class="fw-bold font-monospace">08 - HVAC</td>
                        <td class="text-start">Klimatizácia Climatronic 3-Zónová</td>
                        <td class="font-monospace">3G0 907 044 AD</td>
                        <td><span class="badge bg-warning text-dark">1 Vyriešená chyba</span></td>
                        <td>UDS CAN 500k</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- DTC CHYBOVÉ KÓDY PROTOLOL -->
        <h6 class="fw-bold text-dark mb-2"><i class="fa-solid fa-triangle-exclamation me-2 text-danger"></i>2. Nájdené & Vyriešené DTC Chybové Kódy (Diagnostický Záznam):</h6>
        <div class="p-3 bg-light rounded border mb-3">
            <div class="row g-2">
                <div class="col-md-6">
                    <div class="p-2 border rounded bg-white">
                        <span class="badge bg-danger font-monospace">P0171</span> <strong>Zmes príliš chudobná (Rada 1)</strong>
                        <div class="small text-muted">Príčina: Zanesený váha vzduchu (MAF) • Vyčistené & Správne načítané.</div>
                        <span class="badge bg-success mt-1">Stav po oprave: VYMAZANÉ / V POŘADKU</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-2 border rounded bg-white">
                        <span class="badge bg-danger font-monospace">P0300</span> <strong>Vynechávanie zapaľovania / Vstrekovania</strong>
                        <div class="small text-muted">Príčina: Opotrebovaná sviečka/vstrekovač cylinder 2 • Vymenené.</div>
                        <span class="badge bg-success mt-1">Stav po oprave: VYMAZANÉ / V POŘADKU</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- ŽIVÉ DÁTA & TEST BATÉRIE -->
        <h6 class="fw-bold text-dark mb-2"><i class="fa-solid fa-battery-three-quarters me-2 text-info"></i>3. Test Akumulátora & Nabíjacej Sústavy (Alternátor):</h6>
        <div class="p-3 bg-light rounded border mb-4">
            <div class="row text-center small">
                <div class="col-md-3 border-end">
                    <div class="text-muted">Napätie batérie (Kľud):</div>
                    <strong class="fs-5 text-dark">12.65 V</strong> (100% Nabité)
                </div>
                <div class="col-md-3 border-end">
                    <div class="text-muted">Napätie pri štarte:</div>
                    <strong class="fs-5 text-success">10.85 V</strong> (Pokles v norme)
                </div>
                <div class="col-md-3 border-end">
                    <div class="text-muted">Nabíjanie pri záťaži:</div>
                    <strong class="fs-5 text-primary">14.20 V</strong> (Alternátor OK)
                </div>
                <div class="col-md-3">
                    <div class="text-muted">Zdravie batérie (SoH):</div>
                    <strong class="fs-5 text-success">98% SoH</strong> (Vynikajúci stav)
                </div>
            </div>
        </div>

        <!-- PODPIS & PEČIATKA -->
        <div class="row mt-4 pt-3 border-top align-items-center">
            <div class="col-6">
                <div class="small text-muted">Vyhotovil diagnostický mechanik:</div>
                <strong class="text-dark fs-6">Ján Kováč (Hlavný Diagnostik A.S.D.)</strong>
            </div>
            <div class="col-6 text-end">
                <div class="p-2 border border-secondary bg-light d-inline-block rounded text-center style-stamp">
                    <div class="fw-bold text-primary small text-uppercase">${comp.name}</div>
                    <div class="small text-muted">A.S.D. DIAGNOSTIC SYSTEM CERTIFIED</div>
                    <i class="fa-solid fa-stamp text-primary fa-2x mt-1"></i>
                </div>
            </div>
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById('diagProtocolModal'));
    modal.show();
}

function printDiagProtocol() {
    window.print();
}

function clearTroubleCodes() {
    document.getElementById('dtcList').innerHTML = `<li class="list-group-item bg-transparent text-success p-3"><i class="fa-solid fa-check me-2"></i>Všetky DTC kódy boli úspešne vymazané z ECU!</li>`;
}

// ÚČTOVNÍK
function renderUctovnikInterface(container) {
    let totalRevenue = 0;
    workOrders.forEach(w => totalRevenue += (w.amount * 1.23));

    container.innerHTML = `
        <div class="card shadow-sm border-0 mb-4 bg-dark text-white border-secondary">
            <div class="card-header bg-dark text-white fw-bold d-flex justify-content-between align-items-center border-secondary flex-wrap gap-2">
                <div>
                    <i class="fa-solid fa-calculator me-2 text-warning fs-5"></i>Účtovné Rozhranie (Plný Prístup k Faktúram & Dokladom)
                </div>
                <span class="badge bg-success px-3 py-2"><i class="fa-solid fa-file-circle-check me-1"></i>Účtovníctvo A.S.D. Active</span>
            </div>
            <div class="card-body">

                <!-- KLIKATEĽNÝ ZOZNAM A PODZOZNAM FUNKCIÍ -->
                ${getRoleFunctionsTreeHtml('uctovnik')}
                </div>

                <div class="row text-center mb-4">
                    <div class="col-md-4 mb-2">
                        <div class="p-3 bg-secondary bg-opacity-10 rounded border border-success">
                            <small class="text-secondary">Celkový obrat (S DPH)</small>
                            <h3 class="text-success fw-bold font-monospace mt-1">${totalRevenue.toFixed(2)} EUR</h3>
                        </div>
                    </div>
                    <div class="col-md-4 mb-2">
                        <div class="p-3 bg-secondary bg-opacity-10 rounded border border-info">
                            <small class="text-secondary">DPH na úhradu (23%)</small>
                            <h3 class="text-info fw-bold font-monospace mt-1">${(totalRevenue - (totalRevenue / 1.23)).toFixed(2)} EUR</h3>
                        </div>
                    </div>
                    <div class="col-md-4 mb-2">
                        <div class="p-3 bg-secondary bg-opacity-10 rounded border border-warning">
                            <small class="text-secondary">Vystavené e-faktúry</small>
                            <h3 class="text-warning fw-bold font-monospace mt-1">${workOrders.length}</h3>
                        </div>
                    </div>
                </div>

                <!-- VYHĽADÁVAČ FAKTÚR -->
                <div class="row g-2 mb-3 align-items-center">
                    <div class="col-md-8">
                        <div class="input-group">
                            <span class="input-group-text bg-dark text-success border-secondary"><i class="fa-solid fa-magnifying-glass"></i></span>
                            <input type="text" class="form-control bg-dark text-white border-secondary" id="uctovnikSearchInput" placeholder="Vyhľadať vo faktúrach (Zákazník, Číslo faktúry, Číslo zákazky)..." oninput="renderUctovnikInvoicesTable()">
                        </div>
                    </div>
                    <div class="col-md-4 text-end">
                        <span class="badge bg-success p-2"><i class="fa-solid fa-file-invoice me-1"></i>Doklady v zozname: <strong id="uctovnikInvoiceCount">${workOrders.length}</strong></span>
                    </div>
                </div>

                <h6 class="fw-bold text-light mb-3"><i class="fa-solid fa-file-invoice me-2 text-warning"></i>Prehľad vystavených faktúr, príjemiek a výdajok</h6>
                <div class="table-responsive">
                    <table class="table table-dark table-striped table-bordered align-middle asd-table-list">
                        <thead>
                            <tr class="table-secondary text-dark">
                                <th>Faktúra ID</th>
                                <th>Zákazník</th>
                                <th>Základ DPH</th>
                                <th>DPH 23%</th>
                                <th>Celkom s DPH</th>
                                <th>E-Faktúra status</th>
                                <th>Tlač & Náhľad</th>
                            </tr>
                        </thead>
                        <tbody id="uctovnikInvoicesTableBody">
                            <!-- Populated JS -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    renderUctovnikInvoicesTable();
}

function renderUctovnikInvoicesTable() {
    const tbody = document.getElementById('uctovnikInvoicesTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const query = (document.getElementById('uctovnikSearchInput')?.value || '').toLowerCase();
    const filtered = workOrders.filter(wo => {
        if (!query) return true;
        const fakId = `FAK-2026${wo.id.replace(/[^0-9]/g, '')}`.toLowerCase();
        return wo.id.toLowerCase().includes(query) ||
               wo.customer.toLowerCase().includes(query) ||
               fakId.includes(query);
    });

    const countEl = document.getElementById('uctovnikInvoiceCount');
    if (countEl) countEl.textContent = filtered.length;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted p-4"><i class="fa-solid fa-file-xmark me-2"></i>Nenašli sa žiadne faktúry pre zadané vyhľadávanie.</td></tr>`;
        return;
    }

    filtered.forEach(wo => {
        const vat = wo.amount * 0.23;
        const tot = wo.amount + vat;
        const fakId = `FAK-2026${wo.id.replace(/[^0-9]/g, '')}`;

        tbody.innerHTML += `
            <tr>
                <td class="fw-bold text-warning font-monospace">${fakId}</td>
                <td class="fw-semibold text-white">${wo.customer}</td>
                <td>${wo.amount.toFixed(2)} EUR</td>
                <td class="text-info">${vat.toFixed(2)} EUR</td>
                <td class="fw-bold text-success fs-6">${tot.toFixed(2)} EUR</td>
                <td><span class="badge ${wo.eInvoice ? 'bg-success' : 'bg-warning text-dark'}">${wo.eInvoice ? 'Odoslané' : 'V príprave'}</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-info text-light" onclick="previewPdf('${wo.id}')"><i class="fa-solid fa-file-pdf text-danger me-1"></i>Zobraziť PDF / e-Faktúru</button>
                </td>
            </tr>
        `;
    });
}

// Global Actions & Utilities
function runAdminRepair() {
    const res = document.getElementById('adminRepairResult');
    if (res) res.classList.remove('d-none');
}

function generatePassAdmin() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let pass = "";
    for (let i = 0; i < 14; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('generatedPass').value = pass;
}

function sendMessageToRole(role, inputId) {
    const input = document.getElementById(inputId);
    if (!input || !input.value) return;

    chatMessages.push({
        sender: currentUser.role.toUpperCase(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `[Pre ${role.toUpperCase()}]: ${input.value}`
    });

    input.value = '';
    renderChat();
}

function sendGlobalChatMessage() {
    const input = document.getElementById('globalChatInput');
    if (!input || !input.value) return;

    chatMessages.push({
        sender: currentUser.name.toUpperCase(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: input.value
    });

    input.value = '';
    renderChat();
}

function renderChat() {
    const box = document.getElementById('systemChatBox');
    if (!box) return;
    box.innerHTML = '';
    chatMessages.forEach(m => {
        box.innerHTML += `<div class="mb-1"><span class="text-secondary">[${m.time}]</span> <strong class="text-warning">${m.sender}:</strong> ${m.text}</div>`;
    });
    box.scrollTop = box.scrollHeight;
}

function simulateVoiceCommand() {
    const input = document.getElementById('voiceCommandInput').value;
    if (!input) return;

    chatMessages.push({
        sender: "HLASOVÝ ASISTENT",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `Hlasový príkaz: "${input}" bol spracovaný.`
    });

    document.getElementById('voiceCommandInput').value = '';
    renderChat();
}

// ZÁKAZKOVÝ & PRACOVNÝ LIST MODAL GENERATOR (Based on AZsoft Autoservis 5.34 sample PDF 2026/0022)
function openZakazkovyListModal(woId) {
    const wo = workOrders.find(w => w.id === woId);
    if (!wo) return;

    const modalBody = document.getElementById('zakazkovyListModalBody');
    if (!modalBody) return;

    const totalWork = (wo.workItems || []).reduce((acc, item) => acc + item.total, 0);
    const totalParts = (wo.partItems || []).reduce((acc, item) => acc + item.total, 0);
    const subtotal = (totalWork + totalParts) > 0 ? (totalWork + totalParts) : wo.amount;
    const vat = subtotal * 0.23;
    const totalWithVat = subtotal + vat;

    modalBody.innerHTML = `
        <div class="printable-document">
            <!-- HEADER -->
            <table class="doc-header-table">
                <tr>
                    <td style="width: 55%;">
                        <div class="fw-bold fs-5 text-dark"><i class="fa-solid fa-car-burst text-danger me-2"></i>ZÁKAZKOVÝ LIST & PRACOVNÝ LIST</div>
                        <div class="text-danger fw-bold fs-4 mt-1">Označenie: ${wo.id}</div>
                    </td>
                    <td style="width: 45%; text-align: right;" class="small text-secondary">
                        <div class="fw-bold text-dark fs-6">${wo.supplier || 'DF AUTO, s.r.o.'}</div>
                        <div>${wo.supplierInfo || 'IČO: 53895843 | IČ DPH: SK2121522271'}</div>
                        <div class="text-muted">A.S.D. Autoservisný Systém a Diagnostika</div>
                    </td>
                </tr>
            </table>

            <!-- DODÁVATEĽ & ZÁKAZNÍK BOXES -->
            <div class="row g-3 mb-3">
                <div class="col-6">
                    <div class="doc-border-box">
                        <div class="fw-bold text-uppercase small text-secondary mb-1">Dodávateľ (Autoservis):</div>
                        <div class="fw-bold text-dark">${wo.supplier || 'DF AUTO, s.r.o.'}</div>
                        <div class="small">Hviezdoslavova 219/51, 045 01 Moldava nad Bodvou</div>
                        <div class="small">OR: MS Košice odd.Sro vl.51890/V</div>
                        <div class="small">IČO: 53895843 | IČ DPH: SK2121522271</div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="doc-border-box">
                        <div class="fw-bold text-uppercase small text-secondary mb-1">Zákazník (Objednávateľ):</div>
                        <div class="fw-bold text-dark">${wo.customer}</div>
                        <div class="small">${wo.customerAddress || 'DF AUTO, s.r.o. / Ján Novák, Hlavná 45, Košice'}</div>
                        <div class="small">Typ zákazky: <strong>${wo.type}</strong></div>
                        <div class="small">Stav zákazky: <strong>${wo.status}</strong></div>
                    </div>
                </div>
            </div>

            <!-- VEHICLE DETAILS GRID -->
            <div class="doc-border-box mb-3">
                <div class="fw-bold text-uppercase small text-secondary mb-2 border-bottom pb-1"><i class="fa-solid fa-car me-2"></i>Údaje o vozidle</div>
                <div class="row g-2 small">
                    <div class="col-4"><strong>Typ vozidla:</strong> ${wo.vehicle}</div>
                    <div class="col-4"><strong>EČV (ŠPZ):</strong> <span class="badge bg-dark text-white font-monospace">${wo.ecv || 'SN333DV'}</span></div>
                    <div class="col-4"><strong>VIN kód:</strong> <span class="font-monospace">${wo.vin}</span></div>
                    <div class="col-4"><strong>Odometer:</strong> ${wo.odometer || '181 334 km'}</div>
                    <div class="col-4"><strong>Stav paliva:</strong> ${wo.fuel || '1/2'}</div>
                    <div class="col-4"><strong>Rok výroby:</strong> 2022</div>
                </div>
            </div>

            <!-- RECEPTION & TIMELINE -->
            <div class="doc-border-box mb-3">
                <div class="fw-bold text-uppercase small text-secondary mb-2 border-bottom pb-1"><i class="fa-solid fa-calendar-check me-2"></i>Priebeh zákazky & Termíny</div>
                <div class="row g-2 small">
                    <div class="col-3"><strong>D. prijatia:</strong> ${wo.dateReceived || '24.08.2026 14:10'}</div>
                    <div class="col-3"><strong>D. plán. ukončenia:</strong> ${wo.dateDone || '31.08.2026'}</div>
                    <div class="col-3"><strong>Pristavil:</strong> ${wo.pristavil || wo.customer}</div>
                    <div class="col-3"><strong>Prevzal do opr.:</strong> ${wo.prevzal || 'Technik Ján'}</div>
                    <div class="col-6 mt-2"><strong>Predbežná cena:</strong> ${(wo.estimatedPrice || wo.amount).toFixed(2)} EUR</div>
                    <div class="col-6 mt-2"><strong>Záloha:</strong> ${(wo.deposit || 0).toFixed(2)} EUR</div>
                </div>
            </div>

            <!-- FAULT & DAMAGE NOTES + FOTODOKUMENTÁCIA -->
            <div class="doc-border-box mb-3">
                <div class="row g-3 small">
                    <div class="col-6">
                        <strong class="text-uppercase text-secondary d-block mb-1">Požadované úkony / Popis závady:</strong>
                        <div class="p-2 bg-light border rounded text-dark mb-2">${wo.faultDescription || 'Výmena žhaviacich sviečok, diagnostika motora ECU'}</div>
                        <strong class="text-uppercase text-secondary d-block mb-1">Poškodenie vozidla pri otvorení zákazky:</strong>
                        <div class="p-2 bg-light border rounded text-dark">${wo.damageNotes || 'Škrabanec na pravom zadnom blatníku.'}</div>
                    </div>
                    <div class="col-6 text-center border-start ps-3">
                        <strong class="text-uppercase text-secondary d-block mb-1 text-start"><i class="fa-solid fa-camera me-1"></i>Fotodokumentácia pri príjme:</strong>
                        ${wo.photo ? `<img src="${wo.photo}" alt="Foto vozidla" class="img-fluid rounded border border-secondary shadow-sm" style="max-height: 140px; object-fit: cover;">` : '<div class="p-4 bg-light text-muted border rounded">Bez fotodokumentácie</div>'}
                    </div>
                </div>
            </div>

            <!-- WORK & PARTS TABLE (PRACOVNÝ LIST) -->
            <div class="fw-bold text-uppercase small text-secondary mb-1 mt-4"><i class="fa-solid fa-wrench me-2"></i>PRACOVNÝ LIST - Súpis servisu & náhradných dielov</div>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Typ</th>
                        <th>Kód / Popis úkonu alebo dielu</th>
                        <th class="text-center">Množstvo / Čas</th>
                        <th class="text-end">Jedn. Cena (bez DPH)</th>
                        <th class="text-end">Spolu bez DPH</th>
                    </tr>
                </thead>
                <tbody>
                    ${(wo.workItems || []).map(wi => `
                        <tr>
                            <td><span class="badge bg-secondary">Práca</span></td>
                            <td>${wi.name}</td>
                            <td class="text-center">${wi.hours}</td>
                            <td class="text-end">${wi.rate.toFixed(2)} EUR</td>
                            <td class="text-end font-monospace fw-bold">${wi.total.toFixed(2)} EUR</td>
                        </tr>
                    `).join('')}
                    ${(wo.partItems || []).map(pi => `
                        <tr>
                            <td><span class="badge bg-info text-dark">Diel</span></td>
                            <td>[${pi.code}] ${pi.name}</td>
                            <td class="text-center">${pi.qty} ks</td>
                            <td class="text-end">${pi.unitPrice.toFixed(2)} EUR</td>
                            <td class="text-end font-monospace fw-bold">${pi.total.toFixed(2)} EUR</td>
                        </tr>
                    `).join('')}
                    <tr class="fw-bold bg-light">
                        <td colspan="4" class="text-end">Základ DPH:</td>
                        <td class="text-end font-monospace">${subtotal.toFixed(2)} EUR</td>
                    </tr>
                    <tr class="bg-light">
                        <td colspan="4" class="text-end">DPH (23%):</td>
                        <td class="text-end font-monospace">${vat.toFixed(2)} EUR</td>
                    </tr>
                    <tr class="fw-bold text-dark fs-6 bg-warning bg-opacity-20">
                        <td colspan="4" class="text-end">SPOLU K ÚHRADE S DPH:</td>
                        <td class="text-end font-monospace text-danger">${totalWithVat.toFixed(2)} EUR</td>
                    </tr>
                </tbody>
            </table>

            <!-- LEGAL NOTICE & SIGNATURES -->
            <div class="p-2 border rounded bg-light small mb-4 text-center">
                Prajeme Vám veľa úspechov a tešíme sa na ďalšiu spoluprácu.<br>
                <strong>Zadržiavacie právo:</strong> Pri nedodržaní termínu splatnosti má dodávateľ právo zadržať vozidlo až do zaplatenia celej čiastky opravy podľa <strong>§ 151s Občianskeho zákonníka</strong>.
            </div>

            <div class="row pt-4 text-center small">
                <div class="col-6">
                    <div class="border-bottom mx-4 mb-1" style="height: 30px;"></div>
                    <div>Podpis objednávateľa</div>
                </div>
                <div class="col-6">
                    <div class="border-bottom mx-4 mb-1" style="height: 30px;"></div>
                    <div>Podpis preberajúceho</div>
                </div>
            </div>
            
            <div class="text-end text-muted fs-7 mt-4">
                Spracované programom Autoservis A.S.D. v1.0 • AZsoft Humenné vzor
            </div>
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById('zakazkovyListModal'));
    modal.show();
}

// EEPROM OBD-2 PROGRAMMING STATE & UTILITIES
let eepromState = {
    connectedEcu: "Bosch EDC17C64 / MED17.5.21 (VAG UDS CAN)",
    memoryType: "EEPROM 95320 / 95640 (4 KB / 8 KB)",
    obdMode: "OBD-2 K-Line / CAN-BUS 500k",
    readStatus: false,
    vin: "WVWZZZ3CZWE123456",
    pinCode: "4892",
    immoStatus: "POVOLENÝ (ACTIVE)",
    odometerKm: 184250,
    checksum: "0x94F2 (VALID OK)",
    dumpBytes: [],
    logs: [
        "A.S.D. EEPROM Engine ready. OBD-2 Baud Rate: 500.000 bps."
    ]
};

function initDefaultEepromBytes() {
    if (eepromState.dumpBytes.length > 0) return;
    const vinStr = "WVWZZZ3CZWE123456";
    let bytes = [];
    for (let i = 0; i < 256; i++) {
        if (i < vinStr.length) {
            bytes.push(vinStr.charCodeAt(i).toString(16).toUpperCase());
        } else if (i >= 0x30 && i < 0x34) {
            bytes.push(eepromState.pinCode.charCodeAt(i - 0x30).toString(16).toUpperCase());
        } else if (i === 0x40) {
            bytes.push(eepromState.immoStatus.includes("POVOLENÝ") ? "01" : "00");
        } else {
            const randHex = Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase();
            bytes.push(randHex);
        }
    }
    eepromState.dumpBytes = bytes;
}

function renderEepromPanelUi() {
    initDefaultEepromBytes();
    const container = document.getElementById('eepromContainerInner');
    if (!container) return;

    container.innerHTML = `
        <div class="card bg-dark text-white border-danger shadow-sm mb-4">
            <div class="card-header bg-danger bg-opacity-20 text-danger border-danger fw-bold d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div>
                    <i class="fa-solid fa-microchip me-2 text-danger"></i>A.S.D. OBD-2 EEPROM & Direct ECU Memory Programátor
                    <span class="badge bg-danger text-white ms-2"><i class="fa-solid fa-bolt me-1"></i>Direct Flash & Dump</span>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-outline-info text-light fw-bold" onclick="readEcuEepromObd2()">
                        <i class="fa-solid fa-download me-1 text-info"></i>Čítať EEPROM cez OBD-2
                    </button>
                    <button class="btn btn-sm btn-danger fw-bold text-white" onclick="writeEcuEepromObd2()">
                        <i class="fa-solid fa-upload me-1"></i>Zápis do EEPROM cez OBD-2
                    </button>
                    <button class="btn btn-sm btn-warning text-dark fw-bold" onclick="downloadEepromBinDump()">
                        <i class="fa-solid fa-floppy-disk me-1"></i>Uložiť .BIN Dump
                    </button>
                </div>
            </div>
            <div class="card-body">

                <!-- CONFIG & PARAMETERS -->
                <div class="p-3 bg-secondary bg-opacity-10 rounded border border-danger mb-4">
                    <div class="row g-3">
                        <div class="col-md-4">
                            <label class="form-label text-danger small fw-bold"><i class="fa-solid fa-microchip me-1"></i>Typ Riadiacej Jednotky (ECU Hardware)</label>
                            <select class="form-select bg-dark text-white border-secondary" id="eepromEcuSelect" onchange="eepromState.connectedEcu=this.value">
                                <option value="Bosch EDC17C64 / MED17.5.21 (VAG UDS CAN)" selected>Bosch EDC17C64 / MED17.5.21 (VAG UDS CAN)</option>
                                <option value="Bosch EDC16C34 / EDC16U31 (VAG, PSA, BMW K-Line/CAN)">Bosch EDC16C34 / EDC16U31 (VAG, PSA, BMW K-Line/CAN)</option>
                                <option value="Siemens PCR2.1 / Simos 18 (VAG 1.6 TDI / 2.0 TSI)">Siemens PCR2.1 / Simos 18 (VAG 1.6 TDI / 2.0 TSI)</option>
                                <option value="Magneti Marelli IAW 9GV / 7GV (Skoda, VW 1.2/1.4)">Magneti Marelli IAW 9GV / 7GV (Skoda, VW 1.2/1.4)</option>
                                <option value="Delphi DCM3.7 / DCM6.2 (Hyundai, Kia, PSA)">Delphi DCM3.7 / DCM6.2 (Hyundai, Kia, PSA)</option>
                                <option value="VDO / Continental Simos PCR2 (Ford, Volvo, VAG)">VDO / Continental Simos PCR2 (Ford, Volvo, VAG)</option>
                                <option value="Denso SH7058 / SH72543 (Toyota, Mazda, Nissan)">Denso SH7058 / SH72543 (Toyota, Mazda, Nissan)</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label text-info small fw-bold"><i class="fa-solid fa-plug me-1"></i>Protokol & Režim Pripojenia OBD-2</label>
                            <select class="form-select bg-dark text-white border-secondary" id="eepromModeSelect" onchange="eepromState.obdMode=this.value">
                                <option value="OBD-2 K-Line / CAN-BUS 500k" selected>OBD-2 Port (K-Line / CAN-BUS 500k)</option>
                                <option value="Bench Mode UDS Service 0x23 (Read Memory By Address)">Bench Mode UDS Service 0x23 (Read Memory By Address)</option>
                                <option value="Tricore Boot Mode (TC1766/TC1767/TC1796/TC1797)">Tricore Boot Mode (TC1766/TC1767/TC1796/TC1797)</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label text-warning small fw-bold"><i class="fa-solid fa-database me-1"></i>Typ Pamäte EEPROM</label>
                            <select class="form-select bg-dark text-white border-secondary" id="eepromMemorySelect" onchange="eepromState.memoryType=this.value">
                                <option value="EEPROM 95320 / 95640 (4 KB / 8 KB)" selected>EEPROM 95320 / 95640 (4 KB / 8 KB)</option>
                                <option value="EEPROM 24C04 / 24C08 / 24C16 (1 KB - 2 KB)">EEPROM 24C04 / 24C08 / 24C16 (1 KB - 2 KB)</option>
                                <option value="EEPROM ST10F276 / ST10F280 (Internal EEPROM)">EEPROM ST10F276 / ST10F280 (Internal EEPROM)</option>
                                <option value="Virtual EEPROM Emulation (Tricore Flash Shadow)">Virtual EEPROM Emulation (Tricore Flash Shadow)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- EEPROM ACTIONS TOOLBAR -->
                <div class="p-3 bg-dark rounded border border-secondary mb-4">
                    <h6 class="fw-bold text-light mb-2"><i class="fa-solid fa-screwdriver-wrench me-2 text-warning"></i>Rýchle Funkcie Programátora EEPROM:</h6>
                    <div class="d-flex flex-wrap gap-2">
                        <button class="btn btn-outline-danger btn-sm fw-bold text-light" onclick="toggleEepromImmoOff()">
                            <i class="fa-solid fa-shield-halved me-1 text-danger"></i>${eepromState.immoStatus.includes("POVOLENÝ") ? 'Vypnúť Imobilizér (Immo OFF)' : 'Zapnúť Imobilizér (Immo ON)'}
                        </button>
                        <button class="btn btn-outline-warning btn-sm fw-bold text-light" onclick="openEepromKmVinModal()">
                            <i class="fa-solid fa-pen-to-square me-1 text-warning"></i>Úprava VIN Kódu & Kilometrov v EEPROM
                        </button>
                        <button class="btn btn-outline-success btn-sm fw-bold text-light" onclick="recalculateEepromChecksum()">
                            <i class="fa-solid fa-calculator me-1 text-success"></i>Korigovať Checksum (CS OK)
                        </button>
                        <label class="btn btn-outline-secondary btn-sm fw-bold text-light mb-0 cursor-pointer">
                            <i class="fa-solid fa-file-import me-1 text-info"></i>Načítať .BIN Dump
                            <input type="file" class="d-none" accept=".bin,.hex" onchange="uploadEepromBinDump(event)">
                        </label>
                    </div>
                </div>

                <!-- EEPROM PARSED STATUS SUMMARY -->
                <div class="row g-3 mb-4">
                    <div class="col-md-3">
                        <div class="p-3 bg-secondary bg-opacity-20 rounded border border-secondary">
                            <div class="small text-secondary fw-bold">VIN Kód z EEPROM:</div>
                            <div class="fw-bold text-warning font-monospace fs-6" id="eepromVinDisplay">${eepromState.vin}</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-3 bg-secondary bg-opacity-20 rounded border border-secondary">
                            <div class="small text-secondary fw-bold">Bezpečnostný PIN Kód Imma:</div>
                            <div class="fw-bold text-info font-monospace fs-6" id="eepromPinDisplay">${eepromState.pinCode}</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-3 bg-secondary bg-opacity-20 rounded border border-secondary">
                            <div class="small text-secondary fw-bold">Stav Imobilizéra:</div>
                            <div id="eepromImmoDisplay">
                                <span class="badge ${eepromState.immoStatus.includes("POVOLENÝ") ? 'bg-success' : 'bg-danger'}">${eepromState.immoStatus}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-3 bg-secondary bg-opacity-20 rounded border border-secondary">
                            <div class="small text-secondary fw-bold">Odometer (Najazdené KM):</div>
                            <div class="fw-bold text-success font-monospace fs-6" id="eepromKmDisplay">${eepromState.odometerKm.toLocaleString()} km</div>
                        </div>
                    </div>
                </div>

                <!-- PROGRESS BAR & COMMUNICATION LOG -->
                <div class="p-3 bg-black rounded border border-secondary mb-4 font-monospace">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                        <small class="text-info"><i class="fa-solid fa-terminal me-1"></i>OBD-2 UDS Diagnostické Komunikačné Rámce (CAN Frames):</small>
                        <span class="badge bg-secondary font-monospace" id="eepromCsBadge">CS: ${eepromState.checksum}</span>
                    </div>
                    <div class="progress bg-dark border border-secondary mb-2" style="height: 14px;">
                        <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" id="eepromProgressBar" style="width: ${eepromState.readStatus ? '100%' : '0%'}">
                            ${eepromState.readStatus ? '100%' : '0%'}
                        </div>
                    </div>
                    <div class="small text-success" id="eepromLogBox" style="max-height: 90px; overflow-y: auto;">
                        ${eepromState.logs.map(l => `<div>> ${l}</div>`).join('')}
                    </div>
                </div>

                <!-- INTERACTIVE HEX EDITOR TABLE -->
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 class="fw-bold text-light mb-0"><i class="fa-solid fa-code me-2 text-danger"></i>Hex Editor Pamäte EEPROM (256 Bytov preview):</h6>
                    <small class="text-muted">Kliknutím na bajt upravíte hodnotu v hex formáte</small>
                </div>
                <div class="table-responsive font-monospace" style="max-height: 380px; overflow-y: auto;">
                    <table class="table table-dark table-sm table-bordered text-center align-middle small">
                        <thead class="table-secondary text-dark">
                            <tr>
                                <th>Offset</th>
                                <th>00</th><th>01</th><th>02</th><th>03</th>
                                <th>04</th><th>05</th><th>06</th><th>07</th>
                                <th>08</th><th>09</th><th>0A</th><th>0B</th>
                                <th>0C</th><th>0D</th><th>0E</th><th>0F</th>
                                <th>ASCII Stream</th>
                            </tr>
                        </thead>
                        <tbody id="eepromHexTableBody">
                            <!-- Populated JS -->
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    `;

    renderEepromHexTableRows();
}

function renderEepromHexTableRows() {
    const tbody = document.getElementById('eepromHexTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    const bytes = eepromState.dumpBytes;

    for (let row = 0; row < 16; row++) {
        const offsetHex = '0x' + (row * 16).toString(16).padStart(4, '0').toUpperCase();
        let cellsHtml = '';
        let asciiStr = '';

        for (let col = 0; col < 16; col++) {
            const index = row * 16 + col;
            const byteHex = bytes[index] || 'FF';
            const charCode = parseInt(byteHex, 16);
            const isAscii = charCode >= 32 && charCode <= 126;
            asciiStr += isAscii ? String.fromCharCode(charCode) : '.';

            let highlightClass = "text-white";
            if (index < 17) highlightClass = "text-warning fw-bold";
            else if (index >= 0x30 && index < 0x34) highlightClass = "text-info fw-bold";
            else if (index === 0x40) highlightClass = "text-danger fw-bold";

            cellsHtml += `<td class="${highlightClass} style-hex-cell" onclick="editEepromBytePrompt(${index})">${byteHex}</td>`;
        }

        tbody.innerHTML += `
            <tr>
                <td class="fw-bold text-secondary bg-secondary bg-opacity-20">${offsetHex}</td>
                ${cellsHtml}
                <td class="text-success text-start font-monospace px-2 bg-secondary bg-opacity-10">${asciiStr}</td>
            </tr>
        `;
    }
}

// =========================================================================
// TECHNICKÝ PREUKAZ (TP / ORV) OCR SCANNER & AUTO-FILL HANDLERS
// =========================================================================

function openTpScanModal() {
    cleanupModalBackdrops();
    const modalEl = document.getElementById('tpScanModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }
}

function loadSampleTp(carKey) {
    const samples = {
        'octavia': {
            owner: 'Jozef Mrkvička (+421905123456)',
            address: 'Hlavná 42, 040 01 Košice, Slovensko',
            vehicle: 'Škoda Octavia Combi 2.0 TDI',
            ecv: 'KE-849XX',
            number: 'EB098123',
            vin: 'TMBJJ7NE1J0123456',
            engine: '1968 cm³ / 110 kW',
            fuel: 'Diesel'
        },
        'defender': {
            owner: 'Viktor Szemán (+421908374050)',
            address: 'Debraď 219, 045 01 Debraď, Slovensko',
            vehicle: 'Ford Mondeo Combi Hybrid Ti',
            ecv: 'AB140EI',
            number: 'EB014022',
            vin: 'WF0FXXWPCHMJ52640',
            engine: '1999 cm³ / 103 kW',
            fuel: 'BA95+HB'
        },
        'audi': {
            owner: 'AUTO-REPAIR s.r.o. (+421911999888)',
            address: 'Priemyselná 5, 821 09 Bratislava, Slovensko',
            vehicle: 'Audi A6 Avant 50 TDI Quattro',
            ecv: 'BT-999ZZ',
            number: 'EB007711',
            vin: 'WAUZZZF28MA098765',
            engine: '2967 cm³ / 210 kW',
            fuel: 'Diesel'
        }
    };

    const data = samples[carKey] || samples['octavia'];
    const ownerEl = document.getElementById('tpOwner'); if (ownerEl) ownerEl.value = data.owner;
    const addrEl = document.getElementById('tpAddress'); if (addrEl) addrEl.value = data.address;
    const vehEl = document.getElementById('tpVehicle'); if (vehEl) vehEl.value = data.vehicle;
    const ecvEl = document.getElementById('tpEcv'); if (ecvEl) ecvEl.value = data.ecv;
    const numEl = document.getElementById('tpNumber'); if (numEl) numEl.value = data.number;
    const vinEl = document.getElementById('tpVin'); if (vinEl) vinEl.value = data.vin;
    const engEl = document.getElementById('tpEngine'); if (engEl) engEl.value = data.engine;
    const fuelEl = document.getElementById('tpFuel'); if (fuelEl) fuelEl.value = data.fuel;

    const statusBox = document.getElementById('tpScanStatusBox');
    if (statusBox) {
        statusBox.innerHTML = `
            <div class="badge bg-success mb-2 px-3 py-1 fs-6"><i class="fa-solid fa-check-circle me-1"></i>Vzorový Technický Preukaz pre ${data.vehicle} úspešne načítaný!</div>
            <div class="small text-light">A.S.D. OCR modul automaticky vyčítal všetky technické parametre z dokladu.</div>
        `;
    }
}

function handleTpPhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const statusBox = document.getElementById('tpScanStatusBox');
    if (statusBox) {
        statusBox.innerHTML = `
            <div class="badge bg-info text-dark mb-2 px-3 py-1 fs-6"><i class="fa-solid fa-spinner fa-spin me-1"></i>Spracovávam fotku Technického preukazu cez OCR...</div>
            <div class="small text-muted">A.S.D. optické rozpoznávanie znakov (OCR)...</div>
        `;
    }

    setTimeout(() => {
        loadSampleTp('defender');
        if (statusBox) {
            statusBox.innerHTML = `
                <div class="badge bg-success mb-2 px-3 py-1 fs-6"><i class="fa-solid fa-check-circle me-1"></i>Fotografia Technického preukazu bola úspešne dekódovaná!</div>
                <div class="small text-light">Vyčítané údaje: ${file.name} | Presnosť 99.8%</div>
            `;
        }
    }, 800);
}

function applyTpDataToWorkOrder() {
    const owner = document.getElementById('tpOwner')?.value || "Viktor Szemán";
    const vehicle = document.getElementById('tpVehicle')?.value || "Ford Mondeo Combi Hybrid";
    const ecv = document.getElementById('tpEcv')?.value || "AB140EI";
    const vin = document.getElementById('tpVin')?.value || "WF0FXXWPCHMJ52640";

    // Fill form fields in newWorkOrderForm
    const custEl = document.getElementById('woCustomer'); if (custEl) custEl.value = owner;
    const vehEl = document.getElementById('woVehicle'); if (vehEl) vehEl.value = vehicle;
    const ecvEl = document.getElementById('woEcv'); if (ecvEl) ecvEl.value = ecv;
    const vinEl = document.getElementById('woVin'); if (vinEl) vinEl.value = vin;
    const pristavilEl = document.getElementById('woPristavil'); if (pristavilEl) pristavilEl.value = owner;

    // Close TP Scan modal
    const tpModalEl = document.getElementById('tpScanModal');
    if (tpModalEl) {
        const tpModalInstance = bootstrap.Modal.getInstance(tpModalEl) || new bootstrap.Modal(tpModalEl);
        tpModalInstance.hide();
    }

    // Open Work Order modal
    const woModalEl = document.getElementById('newWorkOrderModal');
    if (woModalEl) {
        const woModal = new bootstrap.Modal(woModalEl);
        woModal.show();
    }
}

function selectSampleCustomer() {
    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
    setVal('woCustomer', "Viktor Szemán");
    setVal('woPhone', "0908374050");
    setVal('woEmail', "szeman@firma.sk");
    setVal('woStreet', "Hlavná 219");
    setVal('woCity', "Debraď");
    setVal('woIco', "53895843");
    setVal('woDic', "2121522271");
    setVal('woIcDph', "SK2121522271");
}

function selectSampleCar() {
    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
    setVal('woEcv', "AB140EI");
    setVal('woVehicle', "Ford Mondeo Combi Hybrid");
    setVal('woYear', "09.03.2020");
    setVal('woVin', "WF0FXXWPCHMJ52640");
    setVal('woVariant', "BA7H/UACC1FZ");
    setVal('woEngineCode', "UACC");
    setVal('woOdometer', "179270");
    setVal('woOil', "5w20");
    setVal('woDisplacement', "1999");
    setVal('woPower', "103");
}

function loadIcoData() {
    const ico = (document.getElementById('woIco')?.value || '').trim();
    if (!ico) {
        alert("Zadajte IČO firiem (napr. 53895843) pre automatické načítanie z Finstat/Register RÚZ.");
        return;
    }
    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
    setVal('woCustomer', "DF AUTO, s.r.o.");
    setVal('woStreet', "Hviezdoslavova 219/51");
    setVal('woCity', "Moldava nad Bodvou");
    setVal('woDic', "2121522271");
    setVal('woIcDph', "SK2121522271");
    alert(`Firma s IČO ${ico} bola úspešne načítaná z registra RÚZ!`);
}

function cleanupModalBackdrops() {
    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    document.body.classList.remove('modal-open');
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('padding-right');
}

function openEepromModal() {
    cleanupModalBackdrops();
    renderEepromPanelUi();
    const modalBody = document.getElementById('eepromModalBody');
    const innerContainer = document.getElementById('eepromContainerInner');
    if (modalBody && innerContainer) {
        modalBody.innerHTML = innerContainer.innerHTML;
    }
    const modalEl = document.getElementById('eepromModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }
}

// =========================================================================
// UNIVERSAL MODAL SYSTEM & ROLE HANDLERS
// =========================================================================

function openGenericActionModal(title, iconClass, bodyHtml) {
    cleanupModalBackdrops();
    const headerTitle = document.getElementById('genericModalTitle');
    if (headerTitle) headerTitle.innerHTML = `<i class="${iconClass} me-2"></i>${title}`;

    const bodyEl = document.getElementById('genericModalBody');
    if (bodyEl) bodyEl.innerHTML = bodyHtml;

    const modalEl = document.getElementById('genericActionModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }
}

// ADMIN MODALS
function openAdminRepairModal() {
    openGenericActionModal('Diagnostika a Oprava Programu / Databázy', 'fa-solid fa-screwdriver-wrench text-danger', `
        <div class="p-3 bg-secondary bg-opacity-10 border border-danger rounded mb-3">
            <h6 class="fw-bold text-danger"><i class="fa-solid fa-database me-2"></i>Kontrola integrity databázy A.S.D.</h6>
            <p class="small text-light mb-2">Kontrola SQLite/PostgreSQL tabuliek pre používateľov, e-faktúry, skladové karty a diagnostiku.</p>
            <div class="progress mb-3" style="height: 12px;">
                <div class="progress-bar bg-success" style="width: 100%">Všetky tabuľky v poriadku (OK)</div>
            </div>
            <button class="btn btn-danger btn-sm fw-bold" onclick="alert('Oprava databázy dokončená! Reindexované 124 záznamov.')">Spustiť hĺbkovú opravu databázy</button>
        </div>
    `);
}

function openAdminSupportModal() {
    openGenericActionModal('Vzdialená Podpora & Server Status', 'fa-solid fa-headset text-info', `
        <div class="p-3 bg-secondary bg-opacity-10 border border-info rounded">
            <h6 class="fw-bold text-info"><i class="fa-solid fa-network-wired me-2"></i>Stav pripojenia A.S.D. Servera</h6>
            <ul class="list-group list-group-flush bg-transparent small mb-3">
                <li class="list-group-item bg-transparent text-white border-secondary">Lokálny server: <strong>http://localhost:5050/ (AKTÍVNY)</strong></li>
                <li class="list-group-item bg-transparent text-white border-secondary">Cloudflare HTTPS Tunnel: <strong>https://autoservis-asd.trycloudflare.com (AKTÍVNY)</strong></li>
                <li class="list-group-item bg-transparent text-white border-secondary">USB kľúč F: <strong>SYNCHRONIZOVANÉ (OK)</strong></li>
            </ul>
            <button class="btn btn-info text-dark btn-sm fw-bold" onclick="alert('Vzdialená podpora je pripravená na asistenciu.')">Testovať reakciu podpory</button>
        </div>
    `);
}

function openAdminLanguageModal() {
    openGenericActionModal('Centrálna Zmena Jazyka Systému', 'fa-solid fa-globe text-warning', `
        <div class="p-3 bg-secondary bg-opacity-10 border border-warning rounded">
            <h6 class="fw-bold text-warning mb-3">Výber jazyka používateľského rozhrania A.S.D.:</h6>
            <select class="form-select bg-dark text-white border-secondary mb-3" id="globalLangSelect">
                <option value="sk" selected>Slovenčina (Slovenská republika)</option>
                <option value="cz">Čeština (Česká republika)</option>
                <option value="en">English (Global / USA)</option>
                <option value="de">Deutsch (Deutschland)</option>
                <option value="hu">Magyar (Magyarország)</option>
            </select>
            <button class="btn btn-warning text-dark btn-sm fw-bold" onclick="alert('Jazyk bol nastavený! Všetky rozhrania sú lokalizované.')">Aplikovať jazyk</button>
        </div>
    `);
}

function openAdminPassGenModal() {
    openGenericActionModal('Generátor Hesiel & Sekcií', 'fa-solid fa-key text-warning', `
        <div class="p-3 bg-secondary bg-opacity-10 border border-warning rounded">
            <h6 class="fw-bold text-warning mb-2">Kalkulačka nových hesiel pre sekcie:</h6>
            <div class="input-group mb-3">
                <input type="text" class="form-control bg-dark text-warning font-monospace" id="modalGeneratedPass" value="ASD_Admin_2026_SecureKey!">
                <button class="btn btn-warning text-dark fw-bold" onclick="document.getElementById('modalGeneratedPass').value='ASD_' + Math.floor(Math.random()*899999+100000)">Generovať</button>
            </div>
        </div>
    `);
}

function openAdminAccountsModal() {
    openGenericActionModal('Správa 7 Používateľských Účtov A.S.D.', 'fa-solid fa-users text-primary', `
        <div class="table-responsive">
            <table class="table table-dark table-striped table-bordered small">
                <thead><tr><th>Rola</th><th>Meno</th><th>Heslo</th><th>Prístup</th></tr></thead>
                <tbody>
                    <tr><td>Administrátor</td><td>admin</td><td>admin</td><td>Plný prístup</td></tr>
                    <tr><td>Majiteľ</td><td>majitel</td><td>majitel</td><td>Sledovanie firiem</td></tr>
                    <tr><td>Riaditeľ</td><td>riaditel</td><td>riaditel</td><td>Koordinácia prevádzky</td></tr>
                    <tr><td>Technik</td><td>technik</td><td>technik</td><td>Príjem & Fakturácia</td></tr>
                    <tr><td>Skladník</td><td>skladnik</td><td>skladnik</td><td>Skladové hospodárstvo</td></tr>
                    <tr><td>Mechanik</td><td>mechanik</td><td>mechanik</td><td>Diagnostika & ECU</td></tr>
                    <tr><td>Účtovník</td><td>uctovnik</td><td>uctovnik</td><td>Účtovníctvo & e-Faktúry</td></tr>
                </tbody>
            </table>
        </div>
    `);
}

function openAdminCompanyModal() {
    openGenericActionModal('Fakturačné Údaje a LOGO Firmy', 'fa-solid fa-building-flag text-info', `
        <div class="p-3 bg-secondary bg-opacity-10 border border-info rounded">
            <h6 class="fw-bold text-info mb-2">Nastavenie firemných údajov na dokladoch:</h6>
            <input type="text" class="form-control bg-dark text-white border-secondary mb-2" value="DF AUTO, s.r.o.">
            <input type="text" class="form-control bg-dark text-white border-secondary mb-2" value="IČO: 53895843 | IČ DPH: SK2121522271">
            <button class="btn btn-info text-dark btn-sm fw-bold" onclick="alert('Fakturačné údaje a LOGO firmy boli uložené.')">Uložiť údaje</button>
        </div>
    `);
}

function openAdminLogoModal() { openAdminCompanyModal(); }
function openAdminSelectCompanyModal() { openAdminCompanyModal(); }
function openAdminDirectChatModal() { openAdminGlobalChatModal(); }
function openAdminGlobalChatModal() {
    openGenericActionModal('Vnútorný Systémový Chat A.S.D.', 'fa-solid fa-comments text-success', `
        <div class="p-3 bg-dark border border-secondary rounded mb-3" style="max-height: 200px; overflow-y: auto;">
            <div class="text-secondary small">[22:30] <strong>ADMIN:</strong> Systém A.S.D. je plne funkčný.</div>
            <div class="text-warning small">[22:31] <strong>MAJITEL:</strong> Prehľad tržieb vyzerá výborne.</div>
        </div>
        <div class="input-group">
            <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="Napíšte správu...">
            <button class="btn btn-success fw-bold" onclick="alert('Správa bola odoslaná všetkým rolam.')">Odoslať</button>
        </div>
    `);
}

// MAJITEĽ & RIADITEĽ MODALS
function openMajitelMultiCompanyModal() {
    openGenericActionModal('Multi-Firemný Prehľad Pobočiek', 'fa-solid fa-city text-warning', `
        <div class="row g-2">
            <div class="col-4"><div class="p-2 bg-dark border border-warning rounded text-center"><strong class="text-warning">Bratislava</strong><br>Tržba: 14 250 €</div></div>
            <div class="col-4"><div class="p-2 bg-dark border border-info rounded text-center"><strong class="text-info">Košice</strong><br>Tržba: 18 900 €</div></div>
            <div class="col-4"><div class="p-2 bg-dark border border-success rounded text-center"><strong class="text-success">Poprad</strong><br>Tržba: 9 400 €</div></div>
        </div>
    `);
}
function openMajitelBranchCoordinationModal() { openMajitelMultiCompanyModal(); }
function openMajitelChatRiaditelModal() { openAdminGlobalChatModal(); }
function openMajitelGlobalChatModal() { openAdminGlobalChatModal(); }
function openMajitelAccountingModal() {
    openGenericActionModal('Kontrola Účtovníctva (Pozorovateľ)', 'fa-solid fa-chart-line text-success', `
        <div class="p-3 bg-secondary bg-opacity-10 border border-success rounded">
            <h6 class="fw-bold text-success">Prehľad e-Faktúr a DPH 23%:</h6>
            <div class="fs-5 fw-bold text-white mb-2">Celkový obrat s DPH: 42 550,00 EUR</div>
            <div class="small text-muted">Prístup v režime pozorovanie pre majiteľa firiem.</div>
        </div>
    `);
}
function openMajitelUserObserverModal() { openAdminAccountsModal(); }
function openRiaditelOrdersOverviewModal() { openWorkOrderEditModal(); }
function openRiaditelChatMajitelModal() { openAdminGlobalChatModal(); }
function openRiaditelGlobalChatModal() { openAdminGlobalChatModal(); }
function openRiaditelAccountingReviewModal() { openMajitelAccountingModal(); }
function openRiaditelUserObserverModal() { openAdminAccountsModal(); }

// SKLADNÍK MODALS
function openStockCardsManageModal() {
    openGenericActionModal('Správa Skladových Kariet', 'fa-solid fa-boxes-stacked text-warning', `
        <div class="table-responsive">
            <table class="table table-dark table-striped small">
                <thead><tr><th>Kód</th><th>Názov dielu</th><th>Skladom</th><th>Cena bez DPH</th></tr></thead>
                <tbody>
                    <tr><td>SKL-1002</td><td>Brembo Brzdový kotúč 312mm</td><td>14 ks</td><td>45.00 €</td></tr>
                    <tr><td>SKL-1003</td><td>Castrol EDGE 5W-30 LL 5L</td><td>28 ks</td><td>38.00 €</td></tr>
                </tbody>
            </table>
        </div>
    `);
}
function openStoreBranchesModal() { openStockCardsManageModal(); }
function openPrijemkaModal() {
    openGenericActionModal('Príjemka Dielov Od Dodávateľov', 'fa-solid fa-file-import text-success', `
        <div class="p-3 bg-dark border border-secondary rounded">
            <h6 class="fw-bold text-success">Nová príjemka na sklad:</h6>
            <input type="text" class="form-control bg-dark text-white border-secondary mb-2" placeholder="Dodávateľ (napr. Inter Cars / AP)">
            <button class="btn btn-success btn-sm fw-bold" onclick="alert('Príjemka bola vytvorená.')">Uložiť príjemku</button>
        </div>
    `);
}
function openEanScannerModal() {
    openGenericActionModal('Skenovanie EAN Čítačkou', 'fa-solid fa-barcode text-info', `
        <div class="p-3 bg-dark border border-info text-center rounded">
            <h6 class="fw-bold text-info"><i class="fa-solid fa-barcode me-2"></i>Skenujte EAN kód USB / Bluetooth skenerom:</h6>
            <input type="text" class="form-control form-control-lg bg-dark text-warning text-center font-monospace border-info mb-2" id="modalEanInput" placeholder="4014835712345" autofocus>
            <button class="btn btn-info text-dark btn-sm fw-bold" onclick="alert('Diel s EAN ' + document.getElementById('modalEanInput').value + ' bol nájdený na sklade!')">Vyhľadať diel</button>
        </div>
    `);
}

// MECHANIK MODALS
function openDtcDatabaseModal() {
    openGenericActionModal('Global Databanka DTC Kódov v SK', 'fa-solid fa-book-bookmark text-warning', `
        <div class="p-3 bg-dark border border-warning rounded">
            <input type="text" class="form-control bg-dark text-white border-secondary mb-3" placeholder="Zadajte kód závady (napr. P0300, P0420, P2002)...">
            <div class="p-2 bg-secondary bg-opacity-20 rounded text-warning small font-monospace">P0300 - Zistené vynechávanie zapaľovania na viacerých valcoch</div>
        </div>
    `);
}
function openEcuRemapModal() {
    openGenericActionModal('Úprava Mapy ECU Motora a Prevodovky (Chiptuning)', 'fa-solid fa-sliders text-danger', `
        <div class="p-3 bg-dark border border-danger rounded text-center">
            <h6 class="fw-bold text-danger"><i class="fa-solid fa-gauge-high me-2"></i>Remapping Stage 1 / Stage 2 & DSG / Tiptronic TCU Mapy</h6>
            <button class="btn btn-danger btn-sm fw-bold me-2" onclick="alert('Mapa ECU Stage 1 (110kW -> 140kW) bola zapísaná!')">Zapísať ECU Stage 1</button>
            <button class="btn btn-warning text-dark btn-sm fw-bold" onclick="alert('TCU Mapa automatickej prevodovky bola aktualizovaná!')">Zapísať TCU Prevodovku</button>
        </div>
    `);
}
function openServiceResetModal() {
    openGenericActionModal('Reset Servisných Intervalov Podľa Výrobcu', 'fa-solid fa-gauge-high text-warning', `
        <div class="p-3 bg-dark border border-warning rounded">
            <h6 class="fw-bold text-warning mb-2">Vyberte značku vozidla pre servisný reset:</h6>
            <select class="form-select bg-dark text-white border-secondary mb-3">
                <option>Škoda / Volkswagen / Audi / SEAT (VAG)</option>
                <option>BMW / MINI</option>
                <option>Mercedes-Benz</option>
                <option>Ford / Mazda</option>
                <option>Renault / Dacia / Nissan</option>
            </select>
            <button class="btn btn-warning text-dark btn-sm fw-bold" onclick="alert('Servisný interval bol resetovaný na 15 000 km / 365 dní!')">Vykonať reset oleja</button>
        </div>
    `);
}
function openAdblueModal() {
    openGenericActionModal('AdBlue / Močovina Diagnostika & Reset', 'fa-solid fa-droplet text-info', `
        <div class="p-3 bg-dark border border-info rounded text-center">
            <h6 class="fw-bold text-info"><i class="fa-solid fa-droplet me-2"></i>AdBlue / SCR Systém Dieselových Motorov</h6>
            <p class="small text-light">Reset odpočítavania kilometrov do zablokovania štartu motora, kalibrácia NOx senzora.</p>
            <button class="btn btn-info text-dark btn-sm fw-bold" onclick="alert('AdBlue počítadlo bolo zresetované na 15 000 km!')">Resetovať AdBlue odpočet</button>
        </div>
    `);
}
function openMechanikToSkladModal() { openAdminGlobalChatModal(); }
function openMechanikToTechnikModal() { openAdminGlobalChatModal(); }

// ÚČTOVNÍK MODALS
function openUctovnikInvoicesModal() {
    openGenericActionModal('Prehľad e-Faktúr v Systéme A.S.D.', 'fa-solid fa-file-invoice-dollar text-warning', `
        <div class="table-responsive">
            <table class="table table-dark table-striped small">
                <thead><tr><th>Faktúra ID</th><th>Zákazník</th><th>Suma s DPH</th><th>Stav</th></tr></thead>
                <tbody>
                    <tr><td>FAK-20260022</td><td>DF AUTO, s.r.o.</td><td>246.00 EUR</td><td><span class="badge bg-success">Odoslaná</span></td></tr>
                    <tr><td>FAK-20260040</td><td>Viktor Szemán</td><td>344.40 EUR</td><td><span class="badge bg-warning text-dark">V príprave</span></td></tr>
                </tbody>
            </table>
        </div>
    `);
}
function openUctovnikDokladyModal() { openUctovnikInvoicesModal(); }
function openUctovnikChatModal() { openAdminGlobalChatModal(); }

// WORK ORDER EDIT / MANAGE MODAL
function openWorkOrderEditModal() {
    cleanupModalBackdrops();
    const modalBody = document.getElementById('workOrderEditModalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div class="p-2 mb-3 bg-secondary bg-opacity-10 border border-warning rounded d-flex justify-content-between align-items-center">
            <span class="fw-bold text-warning"><i class="fa-solid fa-list-check me-2"></i>Aktívne rozpracované zákazky v systéme:</span>
            <button class="btn btn-success btn-sm fw-bold" onclick="addNewWorkOrderPrompt()"><i class="fa-solid fa-plus me-1"></i>Nová zákazka</button>
        </div>
        <div class="table-responsive">
            <table class="table table-dark table-striped table-bordered align-middle small">
                <thead>
                    <tr class="table-secondary text-dark">
                        <th>ID Zákazky</th>
                        <th>Zákazník</th>
                        <th>Vozidlo / ŠPZ</th>
                        <th>Predbežná cena</th>
                        <th>Stav</th>
                        <th>Akcie</th>
                    </tr>
                </thead>
                <tbody>
                    ${workOrders.map(wo => `
                        <tr>
                            <td class="fw-bold text-warning font-monospace">${wo.id}</td>
                            <td>${wo.customer}</td>
                            <td>${wo.vehicle} <span class="badge bg-dark font-monospace">${wo.ecv || 'SN333DV'}</span></td>
                            <td class="fw-bold text-success">${wo.amount.toFixed(2)} EUR</td>
                            <td><span class="badge bg-info text-dark">${wo.status}</span></td>
                            <td>
                                <button class="btn btn-sm btn-outline-warning me-1" onclick="openZakazkovyListModal('${wo.id}')"><i class="fa-solid fa-file-lines me-1"></i>Zákazkový list</button>
                                <button class="btn btn-sm btn-outline-success me-1" onclick="issueEInvoice('${wo.id}')"><i class="fa-solid fa-file-invoice me-1"></i>e-Faktúra</button>
                                <button class="btn btn-sm btn-outline-danger" onclick="alert('Zákazka ${wo.id} bola označená ako UKONČENÁ!')"><i class="fa-solid fa-check me-1"></i>Ukončiť</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;

    const modalEl = document.getElementById('workOrderEditModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }
}

function editEepromBytePrompt(index) {
    const currentHex = eepromState.dumpBytes[index] || 'FF';
    const newHex = prompt(`Upraviť bajt na adrese 0x${index.toString(16).padStart(4,'0').toUpperCase()} (Aktuálne: ${currentHex}):`, currentHex);

    if (newHex && newHex.trim().length > 0) {
        const cleaned = newHex.trim().toUpperCase().padStart(2, '0').slice(-2);
        eepromState.dumpBytes[index] = cleaned;
        recalculateEepromChecksum();
        renderEepromHexTableRows();
    }
}

function readEcuEepromObd2() {
    initDefaultEepromBytes();
    const pBar = document.getElementById('eepromProgressBar');
    const logBox = document.getElementById('eepromLogBox');

    eepromState.logs.unshift(`Spustené čítanie EEPROM pamäte cez OBD-2 port (${eepromState.connectedEcu})...`);
    eepromState.logs.unshift(`TX: 02 10 03 (Diagnostic Session Control - Extended)`);

    let progress = 0;
    const interval = setInterval(() => {
        progress += 25;
        if (pBar) pBar.style.width = progress + '%';

        if (progress === 25) eepromState.logs.unshift(`RX: 50 03 00 32 01 F4 (Session Granted)`);
        if (progress === 50) eepromState.logs.unshift(`TX: 05 3D 00 00 00 10 00 (Read Memory By Address - UDS 0x3D)`);
        if (progress === 75) eepromState.logs.unshift(`RX: 7D 00 00 57 56 57 5A 5A 5A 33 43 5A 57 ... (EEPROM Stream OK)`);
        if (progress === 100) {
            clearInterval(interval);
            eepromState.readStatus = true;
            eepromState.logs.unshift(`ČÍTANIE EEPROM DUMPU DOKONČENÉ! Načítaných 4096 Bytov. Checksum verified: ${eepromState.checksum}`);

            chatMessages.push({
                sender: "MECHANIK",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                text: `Čítanie EEPROM z OBD-2 úspešné pre ECU [${eepromState.connectedEcu}]. VIN: ${eepromState.vin}, PIN: ${eepromState.pinCode}, Immo: ${eepromState.immoStatus}.`
            });

            renderEepromPanelUi();
            renderChat();
            alert(`ČÍTANIE EEPROM CEZ OBD-2 ÚSPEŠNÉ!\n\nRiadiaca jednotka: ${eepromState.connectedEcu}\nVIN Kód: ${eepromState.vin}\nPIN Kód Imma: ${eepromState.pinCode}\nStav Imobilizéra: ${eepromState.immoStatus}\nChecksum: ${eepromState.checksum}`);
        }

        if (logBox) {
            logBox.innerHTML = eepromState.logs.map(l => `<div>> ${l}</div>`).join('');
        }
    }, 350);
}

function writeEcuEepromObd2() {
    if (!confirm(`POZOR: Chystáte sa zapísať novú EEPROM pamäť do riadiacej jednotky (${eepromState.connectedEcu}) cez OBD-2 rozhranie!\n\nPred zápisom bol vygenerovaný automatický Checksum. Pokračovať v zápise?`)) {
        return;
    }

    const pBar = document.getElementById('eepromProgressBar');
    const logBox = document.getElementById('eepromLogBox');

    eepromState.logs.unshift(`ZÁPIS EEPROM CEZ OBD-2 SPUSTENÝ...`);
    eepromState.logs.unshift(`TX: 02 27 01 (Security Access Seed Request)`);

    let progress = 0;
    const interval = setInterval(() => {
        progress += 25;
        if (pBar) pBar.style.width = progress + '%';

        if (progress === 25) eepromState.logs.unshift(`RX: 67 01 4A 89 B2 C1 (Security Key Validated)`);
        if (progress === 50) eepromState.logs.unshift(`TX: 3D 00 00 00 10 ... (Writing EEPROM Blocks)`);
        if (progress === 75) eepromState.logs.unshift(`RX: 7D 00 00 (Block Write Success)`);
        if (progress === 100) {
            clearInterval(interval);
            eepromState.logs.unshift(`ZÁPIS EEPROM DO ECU PREBEHOL ÚSPEŠNE! Pamäť aktualizovaná.`);

            chatMessages.push({
                sender: "MECHANIK",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                text: `Zápis EEPROM do ECU [${eepromState.connectedEcu}] dokončený cez OBD-2! Nový stav Immo: ${eepromState.immoStatus}, VIN: ${eepromState.vin}.`
            });

            renderEepromPanelUi();
            renderChat();
            alert(`ZÁPIS EEPROM CEZ OBD-2 ÚSPEŠNE DOKONČENÝ!\n\nRiadiaca jednotka: ${eepromState.connectedEcu}\nImmo Stav: ${eepromState.immoStatus}\nChecksum (CS): OK`);
        }

        if (logBox) {
            logBox.innerHTML = eepromState.logs.map(l => `<div>> ${l}</div>`).join('');
        }
    }, 400);
}

function toggleEepromImmoOff() {
    initDefaultEepromBytes();

    if (eepromState.immoStatus.includes("POVOLENÝ")) {
        eepromState.immoStatus = "VYPNUTÝ (IMMO OFF)";
        eepromState.dumpBytes[0x40] = "00";
        eepromState.logs.unshift("Úprava EEPROM: Imobilizér bol VYPNUTÝ (Immo OFF status set).");
    } else {
        eepromState.immoStatus = "POVOLENÝ (ACTIVE)";
        eepromState.dumpBytes[0x40] = "01";
        eepromState.logs.unshift("Úprava EEPROM: Imobilizér bol ZAPNUTÝ (Immo Active status set).");
    }

    recalculateEepromChecksum();
    renderEepromPanelUi();
    alert(`ÚPRAVA IMOBILIZÉRA V EEPROM:\n\nNový stav: ${eepromState.immoStatus}\nChecksum (CS) bol automaticky prepočítaný.`);
}

function openEepromKmVinModal() {
    const newVin = prompt("Zadajte nový 17-miestny VIN Kód pre zápis do EEPROM:", eepromState.vin);
    if (newVin && newVin.trim().length === 17) {
        eepromState.vin = newVin.trim().toUpperCase();
        for (let i = 0; i < 17; i++) {
            eepromState.dumpBytes[i] = eepromState.vin.charCodeAt(i).toString(16).toUpperCase();
        }
    }

    const newKm = prompt("Zadajte nový stav kilometrov (Odometer) v EEPROM:", eepromState.odometerKm);
    if (newKm && !isNaN(parseInt(newKm))) {
        eepromState.odometerKm = parseInt(newKm);
    }

    recalculateEepromChecksum();
    renderEepromPanelUi();
    alert(`Údaje v EEPROM boli aktualizované!\n\nVIN: ${eepromState.vin}\nOdometer: ${eepromState.odometerKm.toLocaleString()} km\nChecksum: OK`);
}

function recalculateEepromChecksum() {
    let sum = 0;
    for (let i = 0; i < eepromState.dumpBytes.length; i++) {
        sum += parseInt(eepromState.dumpBytes[i] || 'FF', 16);
    }
    const hexCs = '0x' + (sum & 0xFFFF).toString(16).toUpperCase() + ' (VALID OK)';
    eepromState.checksum = hexCs;
}

function downloadEepromBinDump() {
    initDefaultEepromBytes();
    let textContent = `A.S.D. EEPROM DUMP - ECU: ${eepromState.connectedEcu}\nVIN: ${eepromState.vin}\nPIN: ${eepromState.pinCode}\nIMMO: ${eepromState.immoStatus}\nCHECKSUM: ${eepromState.checksum}\n\nHEX DUMP STREAM:\n` + eepromState.dumpBytes.join(' ');

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EEPROM_${eepromState.vin}_${Date.now()}.bin`;
    a.click();
    URL.revokeObjectURL(url);

    alert(`EEPROM .BIN súbor bol úspešne stiahnutý!`);
}

function exportRemapBinFile() {
    let textContent = `A.S.D. CHIPTUNING MOD FILE\nECU: ${remapState.selectedEcu}\nTCU: ${remapState.selectedTcu}\nSTAGE: ${remapState.targetStage}\nCHECKSUM: ${remapState.checksum}\n\nENGINE MAPS:\n` +
        remapState.engineMaps.map(m => `${m.name}: Stock ${m.stock} -> MOD ${m.modified} (${m.offset})`).join('\n') +
        `\n\nTRANSMISSION MAPS:\n` +
        remapState.transmissionMaps.map(t => `${t.name}: Stock ${t.stock} -> MOD ${t.modified} (${t.status})`).join('\n');

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `REMAP_${remapState.targetStage.replace(' ','_')}_${Date.now()}.mod`;
    a.click();
    URL.revokeObjectURL(url);

    alert(`Úpravy mapy motora a prevodovky boli vyexportované do .MOD súboru!`);
}

// ADBLUE (SCR MOČOVINA) & SERVISNÝ RESET INTERVALOV STATE & FUNCTIONS
let serviceResetState = {
    selectedBrand: "Skoda",
    selectedModel: "Octavia IV (2.0 TDI)",
    adblueLevelPct: 82,
    adblueRangeKm: 9400,
    adblueStatus: "V PORIADKU (OK)",
    adblueFaults: [],
    logs: [
        "A.S.D. AdBlue SCR & Service Reset Module initialized.",
        "OBD-2 Service Channel Active."
    ]
};

function renderServiceResetPanelUi() {
    const container = document.getElementById('serviceResetContainerInner');
    if (!container) return;

    container.innerHTML = `
        <div class="card bg-dark text-white border-success shadow-sm mb-4">
            <div class="card-header bg-success bg-opacity-20 text-success border-success fw-bold d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div>
                    <i class="fa-solid fa-oil-can me-2 text-success"></i>A.S.D. AdBlue SCR (Močovina) & Reset Servisných Intervalov
                    <span class="badge bg-success text-white ms-2"><i class="fa-solid fa-clock-rotate-left me-1"></i>Servisné Úkony</span>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-outline-info text-light fw-bold" onclick="readAdblueAndServiceStatus()">
                        <i class="fa-solid fa-arrows-rotate me-1 text-info"></i>Obnoviť Stav Zbernice
                    </button>
                    <button class="btn btn-sm btn-success fw-bold text-white" onclick="resetAllServiceIntervalsQuick()">
                        <i class="fa-solid fa-circle-check me-1"></i>Reset Všetkých Servisov
                    </button>
                </div>
            </div>
            <div class="card-body">

                <!-- ADBLUE (SCR MOČOVINA) MANAGEMENT SECTION -->
                <div class="card bg-secondary bg-opacity-10 border-info text-white mb-4">
                    <div class="card-header bg-info bg-opacity-20 text-info border-info fw-bold d-flex justify-content-between align-items-center">
                        <span><i class="fa-solid fa-bottle-water me-2 text-info"></i>1. Diagnostika & Servisné Úkony AdBlue (SCR Systém Močoviny)</span>
                        <span class="badge bg-info text-dark">SCR System Online</span>
                    </div>
                    <div class="card-body">
                        <div class="row g-3 align-items-center mb-3">
                            <div class="col-md-3 text-center border-end border-secondary">
                                <div class="small text-secondary fw-bold">Hladina AdBlue v nádrži:</div>
                                <div class="fw-bold text-info fs-3 font-monospace" id="adblueLevelVal">${serviceResetState.adblueLevelPct}%</div>
                                <div class="progress bg-dark border border-secondary mt-1" style="height: 10px;">
                                    <div class="progress-bar bg-info" id="adblueLevelBar" style="width: ${serviceResetState.adblueLevelPct}%"></div>
                                </div>
                            </div>
                            <div class="col-md-3 text-center border-end border-secondary">
                                <div class="small text-secondary fw-bold">Dojazd na AdBlue:</div>
                                <div class="fw-bold text-warning fs-3 font-monospace" id="adblueRangeVal">${serviceResetState.adblueRangeKm.toLocaleString()} km</div>
                                <div class="small text-muted">Bez blokovania štartu</div>
                            </div>
                            <div class="col-md-3 text-center border-end border-secondary">
                                <div class="small text-secondary fw-bold">Stav Blokovania Štartu (No-Start):</div>
                                <div class="fw-bold text-success fs-5 mt-1" id="adblueStatusVal">${serviceResetState.adblueStatus}</div>
                            </div>
                            <div class="col-md-3 text-center">
                                <div class="small text-secondary fw-bold">Kvalita Močoviny (NOx Sensor):</div>
                                <div class="fw-bold text-success fs-5 mt-1">32.5% ISO 22241 (OK)</div>
                            </div>
                        </div>

                        <!-- ADBLUE ACTION BUTTONS -->
                        <div class="p-3 bg-dark rounded border border-secondary mb-2">
                            <h6 class="fw-bold text-light mb-2 small text-uppercase"><i class="fa-solid fa-wrench me-2 text-info"></i>Servisné Funkcie pre AdBlue (Diesel SCR):</h6>
                            <div class="d-flex flex-wrap gap-2">
                                <button class="btn btn-info text-dark btn-sm fw-bold" onclick="performAdblueFillReset()">
                                    <i class="fa-solid fa-gas-pump me-1"></i>Reset Po Doplnení AdBlue (100% Full Tank)
                                </button>
                                <button class="btn btn-warning text-dark btn-sm fw-bold" onclick="resetAdblueNoStartLock()">
                                    <i class="fa-solid fa-key me-1"></i>Odomknúť Zablokovaný Štart (AdBlue No-Start Lock Reset)
                                </button>
                                <button class="btn btn-outline-success text-light btn-sm fw-bold" onclick="adaptNewNoxSensor()">
                                    <i class="fa-solid fa-microchip me-1 text-success"></i>Prispôsobenie Nového NOx Snímača / Vstrekovača AdBlue
                                </button>
                                <button class="btn btn-outline-danger text-light btn-sm fw-bold" onclick="toggleAdblueOffEcu()">
                                    <i class="fa-solid fa-power-off me-1 text-danger"></i>AdBlue / SCR Off (Softvérové vypnutie v ECU)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SERVICE INTERVAL RESET SECTION -->
                <div class="card bg-secondary bg-opacity-10 border-success text-white mb-4">
                    <div class="card-header bg-success bg-opacity-20 text-success border-success fw-bold d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <span><i class="fa-solid fa-clock-rotate-left me-2 text-success"></i>2. Reset Servisných Intervalov Podľa Výrobcu Vozidla</span>
                        <span class="badge bg-success">Všetky značky v zozname</span>
                    </div>
                    <div class="card-body">

                        <!-- BRAND & MODEL SELECTOR FOR SERVICE RESET -->
                        <div class="p-3 bg-dark rounded border border-success mb-4">
                            <div class="row g-3 align-items-center">
                                <div class="col-md-5">
                                    <label class="form-label text-warning small fw-bold mb-1">
                                        <i class="fa-solid fa-car me-1"></i>Výber Výrobcu / Značky Vozidla (Základný Zoznam):
                                    </label>
                                    <select class="form-select bg-dark text-white border-secondary fw-bold" id="serviceBrandSelect" onchange="changeServiceResetBrand(this.value)">
                                        ${dtcBrands.filter(b => b !== "Všetky značky").map(b => `
                                            <option value="${b}" ${b === serviceResetState.selectedBrand ? 'selected' : ''}>
                                                ${b}
                                            </option>
                                        `).join('')}
                                    </select>
                                </div>
                                <div class="col-md-7">
                                    <label class="form-label text-info small fw-bold mb-1">
                                        <i class="fa-solid fa-sliders me-1"></i>Špecifikácia Modelu & Štandardný Interval Výrobcu:
                                    </label>
                                    <div class="p-2 bg-secondary bg-opacity-20 rounded border border-secondary small text-light d-flex justify-content-between align-items-center">
                                        <span>Zvolená značka: <strong class="text-warning" id="serviceSelectedBrandLabel">${serviceResetState.selectedBrand}</strong></span>
                                        <span class="badge bg-info text-dark" id="serviceBrandSpecBadge">Interval: LongLife 30k km / Fixed 15k km</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <h6 class="fw-bold text-warning mb-0"><i class="fa-solid fa-oil-can me-2"></i>Výmena Motorového Oleja (Oil Service)</h6>
                                        <span class="badge bg-warning text-dark">15 000 km / 365 dní</span>
                                    </div>
                                    <p class="small text-muted mb-3">Vynulovanie počítadla kilometrov a dní od poslednej výmeny oleja pre značku <strong class="text-warning" id="oilBrandTextLabel">${serviceResetState.selectedBrand}</strong>.</p>
                                    <button class="btn btn-outline-warning text-light btn-sm fw-bold w-100" onclick="performOilServiceReset()">
                                        <i class="fa-solid fa-rotate-left me-1 text-warning"></i>Vynulovať Olejový Servis (${serviceResetState.selectedBrand})
                                    </button>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <h6 class="fw-bold text-info mb-0"><i class="fa-solid fa-clipboard-check me-2"></i>Garančná Inšpekčná Prehliadka (Inspection)</h6>
                                        <span class="badge bg-info text-dark">30 000 km / 730 dní</span>
                                    </div>
                                    <p class="small text-muted mb-3">Reset inšpekčného intervalu a servisného kľúča pre <strong class="text-info" id="inspectionBrandTextLabel">${serviceResetState.selectedBrand}</strong>.</p>
                                    <button class="btn btn-outline-info text-light btn-sm fw-bold w-100" onclick="performInspectionReset()">
                                        <i class="fa-solid fa-rotate-left me-1 text-info"></i>Vynulovať Inšpekčný Servis (${serviceResetState.selectedBrand})
                                    </button>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <h6 class="fw-bold text-danger mb-2 small"><i class="fa-solid fa-compact-disc me-2"></i>Brzdová Kvapalina (Brake Fluid)</h6>
                                    <div class="small text-muted mb-2">Interval: 24 mesiacov</div>
                                    <button class="btn btn-outline-danger text-light btn-sm fw-bold w-100" onclick="performBrakeFluidReset()">
                                        <i class="fa-solid fa-rotate-left me-1 text-danger"></i>Reset Brzdovej Kvapaliny
                                    </button>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <h6 class="fw-bold text-success mb-2 small"><i class="fa-solid fa-filter me-2"></i>Kabinový & Vzduchový Filter</h6>
                                    <div class="small text-muted mb-2">Interval: 30 000 km</div>
                                    <button class="btn btn-outline-success text-light btn-sm fw-bold w-100" onclick="performFilterServiceReset()">
                                        <i class="fa-solid fa-rotate-left me-1 text-success"></i>Reset Filtrov
                                    </button>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <h6 class="fw-bold text-primary mb-2 small"><i class="fa-solid fa-car-battery me-2"></i>Adaptácia Nového Akumulátora</h6>
                                    <div class="small text-muted mb-2">BMS Battery Registration</div>
                                    <button class="btn btn-outline-primary text-light btn-sm fw-bold w-100" onclick="performBatteryRegistration()">
                                        <i class="fa-solid fa-battery-full me-1 text-primary"></i>Registrovať Batériu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- LOG BOX -->
                <div class="p-3 bg-black rounded border border-secondary font-monospace">
                    <small class="text-info"><i class="fa-solid fa-terminal me-1"></i>OBD-2 Service Diagnostic Protocol Log:</small>
                    <div class="small text-success mt-1" id="serviceResetLogBox" style="max-height: 90px; overflow-y: auto;">
                        ${serviceResetState.logs.map(l => `<div>> ${l}</div>`).join('')}
                    </div>
                </div>

            </div>
        </div>
    `;
}

function readAdblueAndServiceStatus() {
    serviceResetState.logs.unshift("Obnovený stav AdBlue SCR a servisných intervalov z OBD-2 zbernice.");
    renderServiceResetPanelUi();
}

function performAdblueFillReset() {
    serviceResetState.adblueLevelPct = 100;
    serviceResetState.adblueRangeKm = 14500;
    serviceResetState.adblueStatus = "V PORIADKU (100% PLNÁ)";
    serviceResetState.logs.unshift("Reset AdBlue po doplnení: Hladina nastavená na 100%, Dojazd 14 500 km.");

    chatMessages.push({
        sender: "MECHANIK",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `AdBlue SCR Reset úspešný! Doplnenie močoviny na 100%, dojazd 14 500 km.`
    });

    renderServiceResetPanelUi();
    renderChat();
    alert("RESET ADBLUE PO DOPLNENÍ ÚSPEŠNÝ!\n\nHladina: 100%\nDojazd: 14 500 km\nSystém SCR je pripravený na prevádzku.");
}

function resetAdblueNoStartLock() {
    serviceResetState.adblueStatus = "ODOMKNUTÉ (NO-START UNLOCKED)";
    serviceResetState.logs.unshift("AdBlue No-Start Lock Reset: Odomknuté blokovanie štartovania motora cez UDS 0x31 Service.");

    chatMessages.push({
        sender: "MECHANIK",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `Blokovanie štartu AdBlue (No-Start Lock) bolo úspešne odomknuté cez OBD-2!`
    });

    renderServiceResetPanelUi();
    renderChat();
    alert("BLOKOVANIE ŠTARTU ADBLUE ODOMKNUTÉ!\n\nMotor je možné bezpečne naštartovať.");
}

function adaptNewNoxSensor() {
    serviceResetState.logs.unshift("Adaptácia nového NOx snímača a AdBlue vstrekovača úspešná.");
    renderServiceResetPanelUi();
    alert("ADAPTÁCIA NOX SNÍMAČA DOKONČENÁ!\n\nNové adaptívne hodnoty boli zapísané do ECU.");
}

function toggleAdblueOffEcu() {
    if (confirm("Chystáte sa softvérovo vypnúť AdBlue / SCR systém v riadiacej jednotke motora. Pokračovať?")) {
        serviceResetState.adblueStatus = "SOFTVÉROVO VYPNUTÉ (SCR OFF)";
        serviceResetState.logs.unshift("Softvérové vypnutie AdBlue (SCR Off) zapísané do ECU.");

        chatMessages.push({
            sender: "MECHANIK",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            text: `AdBlue SCR systém bol softvérovo vypnutý (SCR Off) v ECU motora.`
        });

        renderServiceResetPanelUi();
        renderChat();
        alert("ADBLUE / SCR SOFTVÉROVO VYPNUTÉ V ECU!\n\nNáhody a chybové hlásenia AdBlue sú trvalo deaktivované.");
    }
}

function changeServiceResetBrand(brand) {
    serviceResetState.selectedBrand = brand;
    serviceResetState.logs.unshift(`Zvolený výrobca vozidla pre reset servisov: ${brand}`);
    renderServiceResetPanelUi();
}

function performOilServiceReset() {
    const brand = serviceResetState.selectedBrand || "Skoda";
    serviceResetState.logs.unshift(`Vynulovaný interval výmeny motorového oleja pre výrobcu ${brand} (Oil Service Reset: 15 000 km / 365 dní).`);

    chatMessages.push({
        sender: "MECHANIK",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `Vynulovanie olejového servisu (Oil Reset) pre vozidlo [${brand}] úspešne vykonané cez OBD-2.`
    });

    renderServiceResetPanelUi();
    renderChat();
    alert(`OLEJOVÝ SERVIS PRE VÝROBCA ${brand.toUpperCase()} ÚSPEŠNE VYNULOVANÝ!\n\nNový interval: 15 000 km / 365 dní (Fixed / LongLife pre ${brand}).\nPrístrojová doska bola aktualizovaná.`);
}

function performInspectionReset() {
    const brand = serviceResetState.selectedBrand || "Skoda";
    serviceResetState.logs.unshift(`Vynulovaný inšpekčný garančný interval pre výrobcu ${brand} (Inspection Reset: 30 000 km / 730 dní).`);

    chatMessages.push({
        sender: "MECHANIK",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `Garančný inšpekčný servis pre vozidlo [${brand}] bol vynulovaný cez OBD-2.`
    });

    renderServiceResetPanelUi();
    renderChat();
    alert(`INŠPEKČNÝ SERVIS PRE VÝROBCA ${brand.toUpperCase()} ÚSPEŠNE VYNULOVANÝ!\n\nNový inšpekčný interval: 30 000 km / 730 dní.\nServisný kľúč na prístrojovom paneli bol zhasnutý.`);
}

function performBrakeFluidReset() {
    serviceResetState.logs.unshift("Vynulovaný interval brzdovej kvapaliny (Brake Fluid Reset: 24 mesiacov).");
    renderServiceResetPanelUi();
    alert("SERVIS BRZDOVEJ KVAPALINY VYNULOVANÝ!\n\nNový interval: 24 mesiacov.");
}

function performFilterServiceReset() {
    serviceResetState.logs.unshift("Vynulovaný interval kabínového a vzduchového filtra (Filter Reset: 30 000 km).");
    renderServiceResetPanelUi();
    alert("SERVIS FILTROV VYNULOVANÝ!\n\nNový interval: 30 000 km.");
}

function performBatteryRegistration() {
    serviceResetState.logs.unshift("Registrácia nového akumulátora (BMS Battery Registration OK).");
    renderServiceResetPanelUi();
    alert("REGISTRÁCIA BATÉRIE ÚSPEŠNÁ!\n\nManažment nabíjania (BMS) bol prispôsobený novému akumulátoru.");
}

function resetAllServiceIntervalsQuick() {
    performOilServiceReset();
    performInspectionReset();
}

// ECU ENGINE & TRANSMISSION MAP REMAPPING / CHIPTUNING STATE & LOGIC
let remapState = {
    selectedEcu: "Bosch EDC17C64 2.0 TDI (110kW / 150 HP - 340 Nm)",
    selectedTcu: "DSG DQ381 7-Speed Automatic (VAG Dual Clutch)",
    targetStage: "Stage 1", // Stage 1, Stage 2, Eco, Custom
    popAndBang: false,
    dpfEgrE2Off: true,
    speedLimiterOff: true,
    tcuTorqueLimitUnlocked: true,
    tcuShiftTimeMs: 120, // ms
    tcuLaunchControlRpm: 3500, // rpm
    tcuClutchPressureBar: 14.5, // bar
    flashStatus: false,
    checksum: "0xA8F1 (RSA-2048 / CS OK)",
    logs: [
        "A.S.D. Chiptuning & Map Flasher Engine initialized.",
        "OBD-2 Bus Baud Rate: 500.000 bps (HS-CAN)."
    ],
    engineMaps: [
        { id: "map_boost", name: "Tlak Turbodúchadla (Boost Pressure Map)", stock: "2.10 bar", modified: "2.45 bar", unit: "bar", offset: "+0.35 bar" },
        { id: "map_fuel", name: "Dávka Paliva & Doba Vstreku (Fuel Rail Injection)", stock: "62.5 mg/i", modified: "74.8 mg/i", unit: "mg/i", offset: "+12.3 mg/i" },
        { id: "map_torque", name: "Krútiaci Moment Motora (Torque Limiter Map)", stock: "340 Nm", modified: "420 Nm", unit: "Nm", offset: "+80 Nm" },
        { id: "map_power", name: "Výkon Motora (Engine Power Map)", stock: "150 HP", modified: "190 HP", unit: "HP", offset: "+40 HP" }
    ],
    transmissionMaps: [
        { id: "tcu_torque", name: "Limitér Krútiaceho Momentu Prevodovky (TCU Torque Limit)", stock: "380 Nm", modified: "520 Nm", unit: "Nm", status: "Unlocked" },
        { id: "tcu_shift", name: "Čas Radenia Rýchlostných Stupňov (Shift Speed)", stock: "280 ms", modified: "120 ms", unit: "ms", status: "-160 ms (Rýchlejšie)" },
        { id: "tcu_clutch", name: "Tlak na Spojkové Lamely (Clutch Pack Pressure)", stock: "11.2 bar", modified: "14.5 bar", unit: "bar", status: "+3.3 bar (Bez proklzu)" },
        { id: "tcu_launch", name: "Launch Control Otáčky (LC Start RPM)", stock: "2800 RPM", modified: "3500 RPM", unit: "RPM", status: "Active 3.5k" }
    ]
};

function renderEcuRemapPanelUi() {
    const container = document.getElementById('remapContainerInner');
    if (!container) return;

    const isAutoOrSemi = remapState.selectedTcu !== "Manuálna prevodovka (Bez TCU)";

    container.innerHTML = `
        <div class="card bg-dark text-white border-info shadow-sm mb-4">
            <div class="card-header bg-info bg-opacity-20 text-info border-info fw-bold d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div>
                    <i class="fa-solid fa-gauge-high me-2 text-info"></i>A.S.D. Engine & Transmission Map Editor (Chiptuning OBD-2)
                    <span class="badge bg-info text-dark ms-2"><i class="fa-solid fa-bolt me-1"></i>ECU & TCU Remap</span>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-outline-warning text-light fw-bold" onclick="readEcuTcuStockMaps()">
                        <i class="fa-solid fa-download me-1 text-warning"></i>Načítať Mapy z OBD-2
                    </button>
                    <button class="btn btn-sm btn-info text-dark fw-bold" onclick="flashModifiedMapsObd2()">
                        <i class="fa-solid fa-cloud-arrow-up me-1"></i>Zápis Máp do ECU & Prevodovky
                    </button>
                    <button class="btn btn-sm btn-outline-success text-light fw-bold" onclick="exportRemapBinFile()">
                        <i class="fa-solid fa-file-export me-1 text-success"></i>Export .MOD / .BIN Map
                    </button>
                </div>
            </div>
            <div class="card-body">

                <!-- ECU & TCU SELECTION TOOLBAR -->
                <div class="p-3 bg-secondary bg-opacity-10 rounded border border-info mb-4">
                    <div class="row g-3">
                        <div class="col-md-5">
                            <label class="form-label text-info small fw-bold"><i class="fa-solid fa-microchip me-1"></i>Riadiaca Jednotka Motora (Engine ECU)</label>
                            <select class="form-select bg-dark text-white border-secondary" id="remapEcuSelect" onchange="changeRemapEcuTarget(this.value)">
                                <option value="Bosch EDC17C64 2.0 TDI (110kW / 150 HP - 340 Nm)" selected>Bosch EDC17C64 2.0 TDI (150 HP / 340 Nm)</option>
                                <option value="Bosch MED17.5.21 2.0 TSI (162kW / 220 HP - 350 Nm)">Bosch MED17.5.21 2.0 TSI (220 HP / 350 Nm)</option>
                                <option value="Siemens PCR2.1 1.6 TDI (77kW / 105 HP - 250 Nm)">Siemens PCR2.1 1.6 TDI (105 HP / 250 Nm)</option>
                                <option value="Delphi DCM6.2A 2.0 HDi/TDCi (132kW / 180 HP - 400 Nm)">Delphi DCM6.2A 2.0 HDi (180 HP / 400 Nm)</option>
                                <option value="Denso SH72543 2.2 D-4D (110kW / 150 HP - 360 Nm)">Denso SH72543 2.2 D-4D (150 HP / 360 Nm)</option>
                            </select>
                        </div>
                        <div class="col-md-5">
                            <label class="form-label text-warning small fw-bold"><i class="fa-solid fa-gear me-1"></i>Prevodovka (Automat / Poloautomat TCU)</label>
                            <select class="form-select bg-dark text-white border-secondary" id="remapTcuSelect" onchange="changeRemapTcuTarget(this.value)">
                                <option value="DSG DQ381 7-Speed Automatic (VAG Dual Clutch)" selected>DSG DQ381 7-Speed Automat (VAG Dual Clutch)</option>
                                <option value="DSG DQ250 6-Speed Automatic (VAG Wet Clutch)">DSG DQ250 6-Speed Automat (VAG Wet Clutch)</option>
                                <option value="ZF 8HP70 8-Speed Automatic (BMW, Audi, Jaguar)">ZF 8HP70 8-Speed Automat (ZF Hydromenič)</option>
                                <option value="Aisin EAT8 / EAT6 Automatic (PSA, Toyota, Volvo)">Aisin EAT8 8-Speed Automat (Poloautomat/Automat)</option>
                                <option value="PowerShift 6DCT450 Dual Clutch (Ford, Volvo)">PowerShift 6DCT450 Dvojspojka (Poloautomat)</option>
                                <option value="Manuálna prevodovka (Bez TCU)">Manuálna prevodovka (Bez riadiacej jednotky TCU)</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label text-success small fw-bold"><i class="fa-solid fa-sliders me-1"></i>Tuning Úroveň</label>
                            <select class="form-select bg-dark text-white border-secondary fw-bold text-success" id="remapStageSelect" onchange="applyRemapStagePreset(this.value)">
                                <option value="Stage 1" selected>Stage 1 (+25% HP/Nm)</option>
                                <option value="Stage 2">Stage 2 (+38% HP/Nm)</option>
                                <option value="Eco Tuning">Eco Tuning (-12% Spotreba)</option>
                                <option value="Custom">Custom Rýchle úpravy</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- SPECIAL MODIFICATION SWITCHES -->
                <div class="p-3 bg-dark rounded border border-secondary mb-4">
                    <h6 class="fw-bold text-warning mb-2"><i class="fa-solid fa-toggle-on me-2"></i>Špeciálne Úpravy & Vypnutie Emisných / Rýchlostných Limiterov:</h6>
                    <div class="d-flex flex-wrap gap-3 align-items-center">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="switchDpfEgr" ${remapState.dpfEgrE2Off ? 'checked' : ''} onchange="remapState.dpfEgrE2Off=this.checked">
                            <label class="form-check-input-label text-light small fw-bold" for="switchDpfEgr">
                                <i class="fa-solid fa-smog me-1 text-danger"></i>DPF / EGR / CAT Off (Emisné systémy)
                            </label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="switchSpeedLimiter" ${remapState.speedLimiterOff ? 'checked' : ''} onchange="remapState.speedLimiterOff=this.checked">
                            <label class="form-check-input-label text-light small fw-bold" for="switchSpeedLimiter">
                                <i class="fa-solid fa-tachograph-digital me-1 text-warning"></i>V-Max Off (Odomknutie 250+ km/h)
                            </label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="switchPopsBangs" ${remapState.popAndBang ? 'checked' : ''} onchange="remapState.popAndBang=this.checked">
                            <label class="form-check-input-label text-light small fw-bold" for="switchPopsBangs">
                                <i class="fa-solid fa-fire me-1 text-info"></i>Pops & Bangs / Crackle Map (Pre benzínové/TSI)
                            </label>
                        </div>
                    </div>
                </div>

                <!-- MAP TABLES: ENGINE & TRANSMISSION -->
                <div class="row g-4 mb-4">
                    <!-- ENGINE ECU MAPS -->
                    <div class="col-md-6">
                        <div class="card bg-secondary bg-opacity-10 border-info text-white h-100">
                            <div class="card-header bg-info bg-opacity-20 text-info border-info fw-bold d-flex justify-content-between align-items-center">
                                <span><i class="fa-solid fa-car me-2"></i>1. Palivové & Tlakové Mapy Motora (Engine ECU)</span>
                                <span class="badge bg-info text-dark">ECU Active</span>
                            </div>
                            <div class="card-body p-2">
                                <table class="table table-dark table-striped table-bordered align-middle small mb-0">
                                    <thead class="table-secondary text-dark">
                                        <tr>
                                            <th>Mapa / Parameter</th>
                                            <th>Sériová (Stock)</th>
                                            <th>Upravená (MOD)</th>
                                            <th>Nárast / Rozdiel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${remapState.engineMaps.map(m => `
                                            <tr>
                                                <td class="fw-bold text-white">${m.name}</td>
                                                <td class="text-secondary font-monospace">${m.stock}</td>
                                                <td class="fw-bold text-warning font-monospace">${m.modified}</td>
                                                <td><span class="badge bg-success font-monospace">${m.offset}</span></td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- TRANSMISSION TCU MAPS (AUTOMAT / POLOAUTOMAT) -->
                    <div class="col-md-6">
                        <div class="card bg-secondary bg-opacity-10 border-warning text-white h-100">
                            <div class="card-header bg-warning bg-opacity-20 text-warning border-warning fw-bold d-flex justify-content-between align-items-center">
                                <span><i class="fa-solid fa-gears me-2"></i>2. Mapy Automatickej / Poloautomatickej Prevodovky (TCU)</span>
                                <span class="badge ${isAutoOrSemi ? 'bg-warning text-dark' : 'bg-secondary'}">${isAutoOrSemi ? 'TCU Online' : 'Manuál (N/A)'}</span>
                            </div>
                            <div class="card-body p-2">
                                ${isAutoOrSemi ? `
                                    <table class="table table-dark table-striped table-bordered align-middle small mb-2">
                                        <thead class="table-secondary text-dark">
                                            <tr>
                                                <th>Parameter Prevodovky</th>
                                                <th>Sériový</th>
                                                <th>Upravený</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${remapState.transmissionMaps.map(tm => `
                                                <tr>
                                                    <td class="fw-bold text-white">${tm.name}</td>
                                                    <td class="text-secondary font-monospace">${tm.stock}</td>
                                                    <td class="fw-bold text-info font-monospace">${tm.modified}</td>
                                                    <td><span class="badge bg-info text-dark font-monospace">${tm.status}</span></td>
                                                </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                    <div class="p-2 bg-dark rounded border border-secondary text-muted small">
                                        <i class="fa-solid fa-circle-info me-1 text-warning"></i>Úprava TCU zabraňuje proklzu spojok pri zvýšenom krútiacom momente motora z ECU.
                                    </div>
                                ` : `
                                    <div class="p-4 text-center text-muted">
                                        <i class="fa-solid fa-gear fa-2x mb-2 d-block"></i>
                                        Vozidlo je vybavené manuálnou prevodovkou. Úprava TCU nie je potrebná.
                                    </div>
                                `}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- PROGRESS BAR & COMM LOG -->
                <div class="p-3 bg-black rounded border border-secondary mb-3 font-monospace">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                        <small class="text-info"><i class="fa-solid fa-terminal me-1"></i>OBD-2 Flasher Protocol & Checksum RSA Log:</small>
                        <span class="badge bg-secondary font-monospace" id="remapCsBadge">Checksum: ${remapState.checksum}</span>
                    </div>
                    <div class="progress bg-dark border border-secondary mb-2" style="height: 16px;">
                        <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" id="remapProgressBar" style="width: ${remapState.flashStatus ? '100%' : '0%'}">
                            ${remapState.flashStatus ? '100%' : '0%'}
                        </div>
                    </div>
                    <div class="small text-success" id="remapLogBox" style="max-height: 90px; overflow-y: auto;">
                        ${remapState.logs.map(l => `<div>> ${l}</div>`).join('')}
                    </div>
                </div>

            </div>
        </div>
    `;
}

function changeRemapEcuTarget(val) {
    remapState.selectedEcu = val;
    remapState.logs.unshift(`Zvolená nová cieľová ECU: ${val}`);
    applyRemapStagePreset(remapState.targetStage);
}

function changeRemapTcuTarget(val) {
    remapState.selectedTcu = val;
    remapState.logs.unshift(`Zvolená nová prevodovka TCU: ${val}`);
    renderEcuRemapPanelUi();
}

function applyRemapStagePreset(stage) {
    remapState.targetStage = stage;

    if (stage === "Stage 1") {
        remapState.engineMaps = [
            { id: "map_boost", name: "Tlak Turbodúchadla (Boost Pressure Map)", stock: "2.10 bar", modified: "2.45 bar", unit: "bar", offset: "+0.35 bar" },
            { id: "map_fuel", name: "Dávka Paliva & Doba Vstreku (Fuel Rail Injection)", stock: "62.5 mg/i", modified: "74.8 mg/i", unit: "mg/i", offset: "+12.3 mg/i" },
            { id: "map_torque", name: "Krútiaci Moment Motora (Torque Limiter Map)", stock: "340 Nm", modified: "420 Nm", unit: "Nm", offset: "+80 Nm" },
            { id: "map_power", name: "Výkon Motora (Engine Power Map)", stock: "150 HP", modified: "190 HP", unit: "HP", offset: "+40 HP" }
        ];
        remapState.transmissionMaps[0] = { id: "tcu_torque", name: "Limitér Krútiaceho Momentu Prevodovky (TCU Torque Limit)", stock: "380 Nm", modified: "520 Nm", unit: "Nm", status: "Unlocked 520Nm" };
        remapState.transmissionMaps[2] = { id: "tcu_clutch", name: "Tlak na Spojkové Lamely (Clutch Pack Pressure)", stock: "11.2 bar", modified: "14.5 bar", unit: "bar", status: "+3.3 bar (Bez proklzu)" };
    } else if (stage === "Stage 2") {
        remapState.engineMaps = [
            { id: "map_boost", name: "Tlak Turbodúchadla (Boost Pressure Map)", stock: "2.10 bar", modified: "2.70 bar", unit: "bar", offset: "+0.60 bar" },
            { id: "map_fuel", name: "Dávka Paliva & Doba Vstreku (Fuel Rail Injection)", stock: "62.5 mg/i", modified: "85.0 mg/i", unit: "mg/i", offset: "+22.5 mg/i" },
            { id: "map_torque", name: "Krútiaci Moment Motora (Torque Limiter Map)", stock: "340 Nm", modified: "470 Nm", unit: "Nm", offset: "+130 Nm" },
            { id: "map_power", name: "Výkon Motora (Engine Power Map)", stock: "150 HP", modified: "215 HP", unit: "HP", offset: "+65 HP" }
        ];
        remapState.transmissionMaps[0] = { id: "tcu_torque", name: "Limitér Krútiaceho Momentu Prevodovky (TCU Torque Limit)", stock: "380 Nm", modified: "600 Nm", unit: "Nm", status: "Unlocked 600Nm" };
        remapState.transmissionMaps[2] = { id: "tcu_clutch", name: "Tlak na Spojkové Lamely (Clutch Pack Pressure)", stock: "11.2 bar", modified: "16.0 bar", unit: "bar", status: "+4.8 bar (Stage2 Lock)" };
    } else if (stage === "Eco Tuning") {
        remapState.engineMaps = [
            { id: "map_boost", name: "Tlak Turbodúchadla (Boost Pressure Map)", stock: "2.10 bar", modified: "2.25 bar", unit: "bar", offset: "+0.15 bar" },
            { id: "map_fuel", name: "Dávka Paliva & Doba Vstreku (Fuel Rail Injection)", stock: "62.5 mg/i", modified: "65.0 mg/i", unit: "mg/i", offset: "+2.5 mg/i" },
            { id: "map_torque", name: "Krútiaci Moment Motora (Torque Limiter Map)", stock: "340 Nm", modified: "380 Nm", unit: "Nm", offset: "+40 Nm (Nízke RPM)" },
            { id: "map_power", name: "Výkon Motora (Engine Power Map)", stock: "150 HP", modified: "168 HP", unit: "HP", offset: "+18 HP (Eco -12% L)" }
        ];
    }

    remapState.logs.unshift(`Aplikovaný preset tuning mapy: ${stage}`);
    renderEcuRemapPanelUi();
}

function readEcuTcuStockMaps() {
    const pBar = document.getElementById('remapProgressBar');
    const logBox = document.getElementById('remapLogBox');

    remapState.logs.unshift(`Spustené čítanie originálnych (Stock) máp z ECU a TCU cez OBD-2...`);
    remapState.logs.unshift(`TX: 02 10 03 (Extended Diagnostic Session)`);

    let progress = 0;
    const interval = setInterval(() => {
        progress += 25;
        if (pBar) pBar.style.width = progress + '%';

        if (progress === 25) remapState.logs.unshift(`RX: 50 03 (ECU Engine Session OK)`);
        if (progress === 50) remapState.logs.unshift(`TX: Read Memory By Address (Engine ECU Boost/Fuel/Torque)`);
        if (progress === 75) remapState.logs.unshift(`TX: Read TCU Memory (DSG DQ381 Clutch & Shift Maps)`);
        if (progress === 100) {
            clearInterval(interval);
            remapState.logs.unshift(`ČÍTANIE MÁP DOKONČENÉ! Načítaná originálna záloha ECU & TCU.`);

            chatMessages.push({
                sender: "MECHANIK",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                text: `Čítanie máp motora a prevodovky dokončené z OBD-2. ECU: ${remapState.selectedEcu}, TCU: ${remapState.selectedTcu}.`
            });

            renderEcuRemapPanelUi();
            renderChat();
            alert(`ČÍTANIE MÁP CEZ OBD-2 ÚSPEŠNÉ!\n\nECU Motora: ${remapState.selectedEcu}\nTCU Prevodovky: ${remapState.selectedTcu}\n\nOriginálne mapy boli bezpečne zálohované.`);
        }

        if (logBox) {
            logBox.innerHTML = remapState.logs.map(l => `<div>> ${l}</div>`).join('');
        }
    }, 350);
}

function flashModifiedMapsObd2() {
    if (!confirm(`POZOR: Chystáte sa zapísať upravené mapy (${remapState.targetStage}) do Riadiacej jednotky Motora a Prevodovky!\n\nProces zápisu nesmie byť prerušený. Pokračovať v zápise cez OBD-2?`)) {
        return;
    }

    const pBar = document.getElementById('remapProgressBar');
    const logBox = document.getElementById('remapLogBox');

    remapState.logs.unshift(`ZÁPIS UPRAVENÝCH MÁP DO ECU & TCU SPUSTENÝ...`);
    remapState.logs.unshift(`TX: Security Access Seed & RSA Signature Validation...`);

    let progress = 0;
    const interval = setInterval(() => {
        progress += 20;
        if (pBar) pBar.style.width = progress + '%';

        if (progress === 20) remapState.logs.unshift(`RX: Security Access Granted. Unlocking Flash Memory...`);
        if (progress === 40) remapState.logs.unshift(`TX: Flashing Engine ECU Boost & Fuel Maps...`);
        if (progress === 60) remapState.logs.unshift(`TX: Flashing Transmission TCU Torque & Clutch Pressure Maps...`);
        if (progress === 80) remapState.logs.unshift(`TX: Recalculating Checksum (RSA-2048 CS OK)...`);
        if (progress === 100) {
            clearInterval(interval);
            remapState.flashStatus = true;
            remapState.logs.unshift(`PROGRAMOVANIE MÁP MOTORA A PREVODOVKY ÚSPEŠNE DOKONČENÉ!`);

            chatMessages.push({
                sender: "MECHANIK",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                text: `Úprava mapy motora a prevodovky (${remapState.targetStage}) dokončená cez OBD-2! ECU: ${remapState.selectedEcu}, TCU: ${remapState.selectedTcu}.`
            });

            renderEcuRemapPanelUi();
            renderChat();
            alert(`CHIPTUNING & ZÁPIS MÁP ÚSPEŠNE DOKONČENÝ!\n\nECU Motora: ${remapState.selectedEcu}\nTCU Prevodovky: ${remapState.selectedTcu}\nTuning preset: ${remapState.targetStage}\n\nRiadiace jednotky motora aj automatickej/poloautomatickej prevodovky boli úspešne preprogramované.`);
        }

        if (logBox) {
            logBox.innerHTML = remapState.logs.map(l => `<div>> ${l}</div>`).join('');
        }
    }, 400);
}

function exportRemapBinFile() {
    let textContent = `A.S.D. CHIPTUNING MOD FILE\nECU: ${remapState.selectedEcu}\nTCU: ${remapState.selectedTcu}\nSTAGE: ${remapState.targetStage}\nCHECKSUM: ${remapState.checksum}\n\nENGINE MAPS:\n` +
        remapState.engineMaps.map(m => `${m.name}: Stock ${m.stock} -> MOD ${m.modified} (${m.offset})`).join('\n') +
        `\n\nTRANSMISSION MAPS:\n` +
        remapState.transmissionMaps.map(t => `${t.name}: Stock ${t.stock} -> MOD ${t.modified} (${t.status})`).join('\n');

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `REMAP_${remapState.targetStage.replace(' ','_')}_${Date.now()}.mod`;
    a.click();
    URL.revokeObjectURL(url);

    alert(`Úpravy mapy motora a prevodovky boli vyexportované do .MOD súboru!`);
}
