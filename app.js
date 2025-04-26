const capitales = {
    africa: [
      { city: "Casablanca", timezone: "Africa/Casablanca", countryCode: "ma" }, // Morocco
      { city: "Cairo", timezone: "Africa/Cairo", countryCode: "eg" },           // Egypt
      { city: "Nairobi", timezone: "Africa/Nairobi", countryCode: "ke" },       // Kenya
      { city: "Dakar", timezone: "Africa/Dakar", countryCode: "sn" },           // Senegal
      { city: "Abuja", timezone: "Africa/Lagos", countryCode: "ng" },           // Nigeria
      { city: "Addis Ababa", timezone: "Africa/Addis_Ababa", countryCode: "et" }, // Ethiopia
      { city: "Algiers", timezone: "Africa/Algiers", countryCode: "dz" },       // Algeria
      { city: "Accra", timezone: "Africa/Accra", countryCode: "gh" },           // Ghana
      { city: "Luanda", timezone: "Africa/Luanda", countryCode: "ao" },         // Angola
      { city: "Khartoum", timezone: "Africa/Khartoum", countryCode: "sd" },     // Sudan
      { city: "Kampala", timezone: "Africa/Kampala", countryCode: "ug" },       // Uganda
      { city: "Maputo", timezone: "Africa/Maputo", countryCode: "mz" },         // Mozambique
      { city: "Pretoria", timezone: "Africa/Johannesburg", countryCode: "za" }, // South Africa
      { city: "Tunis", timezone: "Africa/Tunis", countryCode: "tn" },           // Tunisia
      { city: "Tripoli", timezone: "Africa/Tripoli", countryCode: "ly" }        // Libya
    ],
    europe: [
      { city: "London", timezone: "Europe/London", countryCode: "gb" },         // United Kingdom
      { city: "Paris", timezone: "Europe/Paris", countryCode: "fr" },           // France
      { city: "Berlin", timezone: "Europe/Berlin", countryCode: "de" },         // Germany
      { city: "Rome", timezone: "Europe/Rome", countryCode: "it" },             // Italy
      { city: "Madrid", timezone: "Europe/Madrid", countryCode: "es" },         // Spain
      { city: "Lisbon", timezone: "Europe/Lisbon", countryCode: "pt" },         // Portugal
      { city: "Vienna", timezone: "Europe/Vienna", countryCode: "at" },         // Austria
      { city: "Athens", timezone: "Europe/Athens", countryCode: "gr" },         // Greece
      { city: "Brussels", timezone: "Europe/Brussels", countryCode: "be" },     // Belgium
      { city: "Amsterdam", timezone: "Europe/Amsterdam", countryCode: "nl" },   // Netherlands
      { city: "Warsaw", timezone: "Europe/Warsaw", countryCode: "pl" },         // Poland
      { city: "Prague", timezone: "Europe/Prague", countryCode: "cz" },         // Czech Republic
      { city: "Dublin", timezone: "Europe/Dublin", countryCode: "ie" },         // Ireland
      { city: "Budapest", timezone: "Europe/Budapest", countryCode: "hu" },     // Hungary
      { city: "Stockholm", timezone: "Europe/Stockholm", countryCode: "se" }    // Sweden
    ],
    asia: [
      { city: "Tokyo", timezone: "Asia/Tokyo", countryCode: "jp" },             // Japan
      { city: "Beijing", timezone: "Asia/Shanghai", countryCode: "cn" },        // China
      { city: "Seoul", timezone: "Asia/Seoul", countryCode: "kr" },             // South Korea
      { city: "Bangkok", timezone: "Asia/Bangkok", countryCode: "th" },         // Thailand
      { city: "Delhi", timezone: "Asia/Kolkata", countryCode: "in" },           // India
      { city: "Singapore", timezone: "Asia/Singapore", countryCode: "sg" },     // Singapore
      { city: "Kuala Lumpur", timezone: "Asia/Kuala_Lumpur", countryCode: "my" }, // Malaysia
      { city: "Jakarta", timezone: "Asia/Jakarta", countryCode: "id" },         // Indonesia
      { city: "Manila", timezone: "Asia/Manila", countryCode: "ph" },           // Philippines
      { city: "Hanoi", timezone: "Asia/Bangkok", countryCode: "vn" },           // Vietnam
      { city: "Riyadh", timezone: "Asia/Riyadh", countryCode: "sa" },           // Saudi Arabia
      { city: "Baghdad", timezone: "Asia/Baghdad", countryCode: "iq" },         // Iraq
      { city: "Tehran", timezone: "Asia/Tehran", countryCode: "ir" },           // Iran
      { city: "Ankara", timezone: "Europe/Istanbul", countryCode: "tr" },       // Turkey
      { city: "Doha", timezone: "Asia/Qatar", countryCode: "qa" }               // Qatar
    ],
    americas: [
      { city: "New York", timezone: "America/New_York", countryCode: "us" },     // USA
      { city: "Chicago", timezone: "America/Chicago", countryCode: "us" },       // USA
      { city: "Los Angeles", timezone: "America/Los_Angeles", countryCode: "us" }, // USA
      { city: "Mexico City", timezone: "America/Mexico_City", countryCode: "mx" }, // Mexico
      { city: "Toronto", timezone: "America/Toronto", countryCode: "ca" },       // Canada
      { city: "Buenos Aires", timezone: "America/Argentina/Buenos_Aires", countryCode: "ar" }, // Argentina
      { city: "São Paulo", timezone: "America/Sao_Paulo", countryCode: "br" },   // Brazil
      { city: "Lima", timezone: "America/Lima", countryCode: "pe" },             // Peru
      { city: "Bogotá", timezone: "America/Bogota", countryCode: "co" },         // Colombia
      { city: "Santiago", timezone: "America/Santiago", countryCode: "cl" },     // Chile
      { city: "Havana", timezone: "America/Havana", countryCode: "cu" },         // Cuba
      { city: "Caracas", timezone: "America/Caracas", countryCode: "ve" },       // Venezuela
      { city: "Quito", timezone: "America/Guayaquil", countryCode: "ec" },       // Ecuador
      { city: "Montevideo", timezone: "America/Montevideo", countryCode: "uy" }, // Uruguay
      { city: "Panama City", timezone: "America/Panama", countryCode: "pa" }     // Panama
    ],
    oceania: [
      { city: "Sydney", timezone: "Australia/Sydney", countryCode: "au" },       // Australia
      { city: "Auckland", timezone: "Pacific/Auckland", countryCode: "nz" },     // New Zealand
      { city: "Melbourne", timezone: "Australia/Melbourne", countryCode: "au" }, // Australia
      { city: "Wellington", timezone: "Pacific/Auckland", countryCode: "nz" },   // New Zealand
      { city: "Brisbane", timezone: "Australia/Brisbane", countryCode: "au" },   // Australia
      { city: "Perth", timezone: "Australia/Perth", countryCode: "au" },         // Australia
      { city: "Adelaide", timezone: "Australia/Adelaide", countryCode: "au" },   // Australia
      { city: "Canberra", timezone: "Australia/Sydney", countryCode: "au" },     // Australia
      { city: "Hobart", timezone: "Australia/Hobart", countryCode: "au" },       // Australia
      { city: "Port Moresby", timezone: "Pacific/Port_Moresby", countryCode: "pg" }, // Papua New Guinea
      { city: "Suva", timezone: "Pacific/Fiji", countryCode: "fj" },             // Fiji
      { city: "Nouméa", timezone: "Pacific/Noumea", countryCode: "nc" },         // New Caledonia
      { city: "Apia", timezone: "Pacific/Apia", countryCode: "ws" },             // Samoa
      { city: "Honiara", timezone: "Pacific/Guadalcanal", countryCode: "sb" },   // Solomon Islands
      { city: "Nukuʻalofa", timezone: "Pacific/Tongatapu", countryCode: "to" }   // Tonga
    ]
  };
  
  const select = document.getElementById('continentSelect');
const container = document.getElementById('clockContainer');
const body = document.body;

// Popup elements
const popup = document.getElementById('popup');
const popupCity = document.getElementById('popupCity');
const popupTime = document.getElementById('popupTime');
const popupDate = document.getElementById('popupDate');
const closeBtn = document.getElementById('closeBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const shareBtn = document.getElementById('shareBtn');

let currentTimezone = '';
let currentFontSize = 7;

// 🎉 GÉNÉRATION DES CARTES
select.addEventListener('change', () => {
  container.innerHTML = '';
  const continent = select.value;
  if (!continent) return;

  capitales[continent].forEach(capital => {
    const card = document.createElement('div');
    card.className = 'bg-gray-800 rounded-lg p-6 text-center shadow-lg clock-card hover:cursor-pointer';
    card.innerHTML = `
      <div class="flex items-center justify-center mb-4">
        <h2 class="text-lg mr-2">${capital.city}</h2>
        <img 
          src="https://flagcdn.com/w40/${capital.countryCode}.png"
          alt="${capital.countryCode} flag"
          class="flag-icon w-6 h-4"
          id="flag-${capital.city.replace(/ /g, '')}">

      </div>
      <div class="text-4xl font-bold digital-clock" id="time-${capital.city.replace(/ /g, '')}"></div>
      <p class="mt-2 text-sm" id="gmt-${capital.city.replace(/ /g, '')}"></p>
          <button 
      class="popup-btn text-blue-500 hover:text-blue-700 ml-2"
      data-city="${capital.city}" 
      data-timezone="${capital.timezone}" 
      title="Open Fullscreen Popup">🖥️</button>

    `;
    container.appendChild(card);

    // Animation GSAP FLAG
    gsap.from(`#flag-${capital.city.replace(/ /g, '')}`, { 
      rotation: 360, 
      scale: 0, 
      duration: 1, 
      ease: "back.out(1.7)" 
    });

    // Hover Animations (Light / Dark)
    card.addEventListener('mouseenter', () => {
      if (body.classList.contains('light')) {
        gsap.to(card, { scale: 1.1, backgroundColor: '#1f2937', color: '#3B82F6', duration: 0.3 });
      } else {
        gsap.to(card, { scale: 1.1, backgroundColor: '#e5e7eb', color: '#1f2937', duration: 0.3 });
      }
    });

    card.addEventListener('mouseleave', () => {
      if (body.classList.contains('light')) {
        gsap.to(card, { scale: 1, backgroundColor: '#e5e7eb', color: '#1f2937', duration: 0.3 });
      } else {
        gsap.to(card, { scale: 1, backgroundColor: '#1f2937', color: '#3B82F6', duration: 0.3 });
      }
    });
  });

  updateTime();
});

// 🕒 MISE À JOUR DES HORLOGES
function updateTime() {
  const continent = select.value;
  if (!continent) return;

  capitales[continent].forEach(capital => {
    const now = moment().tz(capital.timezone);
    const timeElement = document.getElementById(`time-${capital.city.replace(/ /g, '')}`);
    const gmtElement = document.getElementById(`gmt-${capital.city.replace(/ /g, '')}`);
    if (timeElement && gmtElement) {
      timeElement.textContent = now.format('HH:mm:ss');
      gmtElement.textContent = `${now.format('dddd, MMMM Do YYYY')} | GMT ${now.format('Z')}`;
    }
  });

  requestAnimationFrame(updateTime);
}

// 🟢 ACTIVATION PAR DÉFAUT : AFRIQUE
window.addEventListener('DOMContentLoaded', () => {
  select.value = 'africa';
  select.dispatchEvent(new Event('change'));
});

// 🎬 POPUP LOGIC
function openPopup(city, timezone) {
  currentTimezone = timezone;
  popupCity.textContent = city;
  currentFontSize = 7;
  popupTime.style.fontSize = `${currentFontSize}rem`;
  popup.classList.remove('hidden');
  gsap.fromTo(popup, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  updatePopupClock();
}

closeBtn.addEventListener('click', () => {
  gsap.to(popup, { opacity: 0, duration: 0.3, onComplete: () => popup.classList.add('hidden') });
});

fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    popup.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

zoomInBtn.addEventListener('click', () => {
  currentFontSize += 1;
  popupTime.style.fontSize = `${currentFontSize}rem`;
});
zoomOutBtn.addEventListener('click', () => {
  currentFontSize = Math.max(3, currentFontSize - 1);
  popupTime.style.fontSize = `${currentFontSize}rem`;
});

shareBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(`Current time in ${popupCity.textContent}: ${popupTime.textContent}`)
    .then(() => alert('Time copied to clipboard!'));
});

function updatePopupClock() {
  if (currentTimezone) {
    const now = moment().tz(currentTimezone);
    popupTime.textContent = now.format('hh:mm:ss A');
    popupDate.textContent = `${now.format('dddd, MMMM Do YYYY')} | GMT ${now.format('Z')}`;
  }
  requestAnimationFrame(updatePopupClock);
}

// 🎨 THEME TOGGLE (LIGHT / DARK)
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    gsap.to(body, { opacity: 0, duration: 0.3, onComplete: () => {
      body.classList.remove('dark');
      body.classList.add('light');
      gsap.to(body, { opacity: 1, duration: 0.3 });
    }});
  } else {
    gsap.to(body, { opacity: 0, duration: 0.3, onComplete: () => {
      body.classList.remove('light');
      body.classList.add('dark');
      gsap.to(body, { opacity: 1, duration: 0.3 });
    }});
  }
});

// 👉 Popup buttons delegation
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup-btn')) {
    const city = e.target.dataset.city;
    const timezone = e.target.dataset.timezone;
    openPopup(city, timezone);
  }
});
