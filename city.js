const panIndiaServices = [
    { name: "Swiggy", category: "Food Delivery", description: "Order food from restaurants near you with fast delivery", emoji: "🍔", appLink: "swiggy://", webLink: "https://swiggy.com" },
    { name: "Zomato", category: "Food Delivery", description: "Discover restaurants and order food with live tracking", emoji: "🍕", appLink: "zomato://", webLink: "https://zomato.com" },
    { name: "BigBasket", category: "Grocery", description: "Fresh vegetables, fruits, dairy and grocery delivery", emoji: "🥦", appLink: "bigbasket://", webLink: "https://bigbasket.com" },
    { name: "Amazon India", category: "Shopping", description: "India's largest online marketplace for everything", emoji: "🛍️", appLink: "amzn://", webLink: "https://amazon.in" },
    { name: "Flipkart", category: "Shopping", description: "Shop electronics, fashion and more with fast delivery", emoji: "📦", appLink: "flipkart://", webLink: "https://flipkart.com" },
    { name: "Meesho", category: "Shopping", description: "Affordable fashion and home products from suppliers", emoji: "👗", appLink: "meesho://", webLink: "https://meesho.com" },
    { name: "Myntra", category: "Fashion", description: "India's leading fashion platform for clothing and accessories", emoji: "👠", appLink: "myntra://", webLink: "https://myntra.com" },
    { name: "Nykaa", category: "Beauty", description: "Authentic beauty, skincare and wellness products", emoji: "💄", appLink: "nykaa://", webLink: "https://nykaa.com" },
    { name: "Ola", category: "Cab Service", description: "Book autos, cabs and bikes instantly", emoji: "🚖", appLink: "olacabs://", webLink: "https://olacabs.com" },
    { name: "Uber", category: "Cab Service", description: "Reliable rides — autos, cabs and rentals", emoji: "🚗", appLink: "uber://", webLink: "https://uber.com" },
    { name: "OYO", category: "Hotels", description: "Book budget to premium hotels across India", emoji: "🏨", appLink: "oyo://", webLink: "https://oyorooms.com" },
    { name: "MakeMyTrip", category: "Travel", description: "Book flights, trains, buses and holiday packages", emoji: "✈️", appLink: "makemytrip://", webLink: "https://makemytrip.com" },
    { name: "IRCTC", category: "Train Booking", description: "Official Indian Railways app for train tickets", emoji: "🚂", appLink: "irctc://", webLink: "https://irctc.co.in" },
    { name: "PhonePe", category: "Payments", description: "UPI payments, bill payments and recharges", emoji: "💳", appLink: "phonepe://", webLink: "https://phonepe.com" },
    { name: "Paytm", category: "Payments", description: "Digital payments, shopping and financial services", emoji: "💰", appLink: "paytm://", webLink: "https://paytm.com" },
    { name: "1mg", category: "Healthcare", description: "Order medicines online and book lab tests", emoji: "💊", appLink: "onetmg://", webLink: "https://1mg.com" },
    { name: "Practo", category: "Healthcare", description: "Book doctor appointments and access health records", emoji: "🏥", appLink: "practo://", webLink: "https://practo.com" }
];

const citySpecificServices = [
    { name: "Zepto", category: "Grocery Delivery", description: "10-minute grocery delivery — fresh produce and daily essentials", emoji: "⚡", appLink: "zepto://", webLink: "https://zepto.com", cities: ["mumbai","delhi","bangalore","hyderabad","chennai","pune","kolkata","ahmedabad","jaipur","lucknow","noida","gurugram","surat","chandigarh","kochi","coimbatore","nagpur","indore","bhopal","visakhapatnam"] },
    { name: "Blinkit", category: "Grocery Delivery", description: "Quick commerce delivering groceries and essentials in minutes", emoji: "🛒", appLink: "blinkit://", webLink: "https://blinkit.com", cities: ["mumbai","delhi","bangalore","hyderabad","chennai","pune","kolkata","ahmedabad","jaipur","lucknow","noida","gurugram","faridabad","ghaziabad","chandigarh","surat","indore","nagpur","bhopal","agra","guwahati"] },
    { name: "Swiggy Instamart", category: "Grocery Delivery", description: "Instant grocery delivery — vegetables, fruits, dairy in 30 minutes", emoji: "🥬", appLink: "swiggy://", webLink: "https://swiggy.com/instamart", cities: ["mumbai","delhi","bangalore","hyderabad","chennai","pune","kolkata","noida","gurugram","ahmedabad","jaipur","lucknow","chandigarh","surat","indore"] },
    { name: "Urban Company", category: "Home Services", description: "Book trusted professionals for cleaning, repairs and beauty services", emoji: "🔧", appLink: "urbancompany://", webLink: "https://urbancompany.com", cities: ["mumbai","delhi","bangalore","hyderabad","chennai","pune","kolkata","ahmedabad","jaipur","lucknow","noida","gurugram","chandigarh","surat","indore","bhopal","agra","nagpur","kochi","coimbatore","guwahati"] },
    { name: "Rapido", category: "Bike Taxi", description: "Affordable bike taxis and autos for short city commutes", emoji: "🏍️", appLink: "rapido://", webLink: "https://rapido.bike", cities: ["mumbai","delhi","bangalore","hyderabad","chennai","pune","kolkata","ahmedabad","lucknow","noida","gurugram","mysuru","visakhapatnam","indore","nagpur","jaipur","surat","chandigarh","kochi","guwahati","agartala"] },
    { name: "Dunzo", category: "Hyperlocal Delivery", description: "Delivers anything from nearby stores in minutes", emoji: "🏃", appLink: "dunzo://", webLink: "https://dunzo.com", cities: ["mumbai","delhi","bangalore","hyderabad","chennai","pune"] },
    { name: "Porter", category: "Logistics", description: "Book mini trucks for shifting goods and home moving", emoji: "🚛", appLink: "porter://", webLink: "https://porter.in", cities: ["mumbai","delhi","bangalore","hyderabad","chennai","pune","kolkata","ahmedabad","jaipur","lucknow","noida","gurugram","guwahati"] },
    { name: "Licious", category: "Meat Delivery", description: "Fresh meat and seafood delivered — cleaned and marinated", emoji: "🥩", appLink: "licious://", webLink: "https://licious.in", cities: ["mumbai","delhi","bangalore","hyderabad","chennai","pune","kolkata","ahmedabad","noida","gurugram","chandigarh"] },
    { name: "Namma Yatri", category: "Auto Rickshaw", description: "Zero commission auto booking — supports local drivers directly", emoji: "🛺", appLink: "nammayatri://", webLink: "https://nammayatri.in", cities: ["bangalore","mysuru","kolkata","chennai","hyderabad"] },
    { name: "Yulu", category: "EV Rental", description: "Rent electric cycles and scooters for eco-friendly commutes", emoji: "🛴", appLink: "yulu://", webLink: "https://yulu.bike", cities: ["mumbai","delhi","bangalore","pune","bhubaneswar"] },
    { name: "BEST Bus", category: "Public Transport", description: "Mumbai's iconic red bus service covering the entire city", emoji: "🚌", appLink: "", webLink: "https://www.bestundertaking.com", cities: ["mumbai"] },
    { name: "Mumbai Local Train", category: "Public Transport", description: "Mumbai's lifeline — suburban railway connecting the entire city", emoji: "🚇", appLink: "", webLink: "https://cr.indianrailways.gov.in", cities: ["mumbai"] },
    { name: "Dabbawala", category: "Tiffin Service", description: "Mumbai's legendary home-cooked tiffin delivery with 99.99% accuracy", emoji: "🥡", appLink: "", webLink: "https://mumbaidabbawala.in", cities: ["mumbai"] },
    { name: "Delhi Metro", category: "Public Transport", description: "Delhi's rapid transit — fastest way to travel across the capital", emoji: "🚇", appLink: "dmrc://", webLink: "https://delhimetrorail.com", cities: ["delhi","noida","gurugram","faridabad","ghaziabad"] },
    { name: "DTC Bus", category: "Public Transport", description: "Delhi Transport Corporation buses connecting all of Delhi NCR", emoji: "🚌", appLink: "", webLink: "https://dtc.nic.in", cities: ["delhi","noida","gurugram"] },
    { name: "BMTC Bus", category: "Public Transport", description: "Bangalore Metropolitan Transport buses covering entire Bengaluru", emoji: "🚌", appLink: "", webLink: "https://mybmtc.karnataka.gov.in", cities: ["bangalore"] },
    { name: "Namma Metro", category: "Public Transport", description: "Bangalore Metro Rail — fast and comfortable travel across the city", emoji: "🚇", appLink: "", webLink: "https://bmrc.co.in", cities: ["bangalore"] },
    { name: "TSRTC Bus", category: "Public Transport", description: "Telangana State Road Transport — affordable travel in and around Hyderabad", emoji: "🚌", appLink: "", webLink: "https://tsrtc.telangana.gov.in", cities: ["hyderabad"] },
    { name: "Hyderabad Metro", category: "Public Transport", description: "L&T Metro Rail connecting major parts of Hyderabad quickly", emoji: "🚇", appLink: "", webLink: "https://ltmetro.com", cities: ["hyderabad"] },
    { name: "Chennai Metro", category: "Public Transport", description: "Chennai Metro Rail connecting key areas of the city", emoji: "🚇", appLink: "", webLink: "https://chennaimetrorail.org", cities: ["chennai"] },
    { name: "MTC Bus", category: "Public Transport", description: "Metropolitan Transport Corporation buses across Chennai", emoji: "🚌", appLink: "", webLink: "https://mtcbus.tn.gov.in", cities: ["chennai"] },
    { name: "Kolkata Metro", category: "Public Transport", description: "India's first metro — connecting North and South Kolkata since 1984", emoji: "🚇", appLink: "", webLink: "https://mtp.indianrailways.gov.in", cities: ["kolkata"] },
    { name: "Kolkata Tram", category: "Public Transport", description: "Asia's oldest operating tram — iconic heritage transport of Kolkata", emoji: "🚃", appLink: "", webLink: "https://www.cstc.org.in", cities: ["kolkata"] },
    { name: "Lucknow Metro", category: "Public Transport", description: "Lucknow Metro Rail connecting key areas — fast and AC travel", emoji: "🚇", appLink: "", webLink: "https://lmrcl.com", cities: ["lucknow"] },
    { name: "UPSRTC Bus", category: "Public Transport", description: "Uttar Pradesh State Road Transport connecting cities across UP", emoji: "🚌", appLink: "", webLink: "https://upsrtc.up.nic.in", cities: ["lucknow","agra","varanasi","kanpur","allahabad","mathura"] },
    { name: "Pune Metro", category: "Public Transport", description: "Pune Metro Rail — modern rapid transit across Pune city", emoji: "🚇", appLink: "", webLink: "https://punemetrorail.org", cities: ["pune"] },
    { name: "PMPML Bus", category: "Public Transport", description: "Pune Mahanagar Parivahan buses across Pune and Pimpri-Chinchwad", emoji: "🚌", appLink: "", webLink: "https://pmpml.org", cities: ["pune"] },
    { name: "AMTS Bus", category: "Public Transport", description: "Ahmedabad Municipal Transport Service buses across the city", emoji: "🚌", appLink: "", webLink: "https://amts.co.in", cities: ["ahmedabad"] },
    { name: "BRTS Ahmedabad", category: "Public Transport", description: "Bus Rapid Transit System — fast dedicated bus lanes across Ahmedabad", emoji: "🚍", appLink: "", webLink: "https://ahmedabadbrts.com", cities: ["ahmedabad"] },
    { name: "Jaipur Metro", category: "Public Transport", description: "Jaipur Metro Rail connecting key areas of the Pink City", emoji: "🚇", appLink: "", webLink: "https://jaipurmetrorail.in", cities: ["jaipur"] },
    { name: "Kochi Metro", category: "Public Transport", description: "Modern and fast transit across Kerala's commercial capital", emoji: "🚇", appLink: "", webLink: "https://kochimetro.org", cities: ["kochi"] },
    { name: "Kerala Water Metro", category: "Public Transport", description: "Unique water metro connecting Kochi islands and mainland by boat", emoji: "⛵", appLink: "", webLink: "https://kochimetro.org/water-metro", cities: ["kochi"] },
    { name: "ASTC Bus", category: "Public Transport", description: "Assam State Transport Corporation buses connecting cities across Assam", emoji: "🚌", appLink: "", webLink: "https://astc.co.in", cities: ["guwahati","dibrugarh","silchar","jorhat","tezpur","nagaon"] },
    { name: "Brahmaputra Ferry", category: "Public Transport", description: "River ferry crossing the mighty Brahmaputra — unique to Guwahati", emoji: "⛵", appLink: "", webLink: "https://assamtransport.gov.in", cities: ["guwahati"] },
    { name: "Guwahati City Bus", category: "Public Transport", description: "City bus service connecting major areas within Guwahati", emoji: "🚌", appLink: "", webLink: "https://gmda.assam.gov.in", cities: ["guwahati"] },
    { name: "Meghalaya Transport", category: "Public Transport", description: "Meghalaya State Transport buses connecting Shillong to other cities", emoji: "🚌", appLink: "", webLink: "https://transport.meghalaya.gov.in", cities: ["shillong","cherrapunji","tura"] },
    { name: "SNT Bus", category: "Public Transport", description: "Sikkim Nationalised Transport — connects Gangtok to all parts of Sikkim", emoji: "🚌", appLink: "", webLink: "https://sikkim.gov.in/snt", cities: ["gangtok","namchi","gyalshing","mangan"] },
    { name: "Manipur State Transport", category: "Public Transport", description: "State transport buses connecting Imphal to districts across Manipur", emoji: "🚌", appLink: "", webLink: "https://transport.mn.gov.in", cities: ["imphal","churachandpur","bishnupur","thoubal"] },
    { name: "TRTC Bus", category: "Public Transport", description: "Tripura Road Transport Corporation buses across Agartala and Tripura", emoji: "🚌", appLink: "", webLink: "https://trtc.tripura.gov.in", cities: ["agartala","udaipur","dharmanagar"] },
    { name: "Nagaland State Transport", category: "Public Transport", description: "State transport connecting Kohima and major towns of Nagaland", emoji: "🚌", appLink: "", webLink: "https://nagaland.gov.in/transport", cities: ["kohima","dimapur","mokokchung","tuensang"] },
    { name: "Arunachal Pradesh Transport", category: "Public Transport", description: "State transport buses connecting Itanagar and major towns of Arunachal", emoji: "🚌", appLink: "", webLink: "https://transport.arunachal.gov.in", cities: ["itanagar","naharlagun","pasighat","tawang","ziro"] },
    { name: "Mizoram State Transport", category: "Public Transport", description: "State transport buses connecting Aizawl and districts of Mizoram", emoji: "🚌", appLink: "", webLink: "https://transport.mizoram.gov.in", cities: ["aizawl","lunglei","champhai"] }
];

function getServicesForCity(cityName) {
    const city = cityName.toLowerCase();
    let available = [...panIndiaServices];
    citySpecificServices.forEach(function(service) {
        if (service.cities.includes(city)) {
            available.push(service);
        }
    });
    return available;
}

let currentCity = "";
let currentLat = "";
let currentLon = "";

const detectBtn = document.getElementById("detect-btn");
const loader = document.getElementById("loader");
const cityBox = document.getElementById("city-box");
const cityNameEl = document.getElementById("city-name");
const servicesSection = document.getElementById("services-section");
const servicesGrid = document.getElementById("services-grid");
const placesSection = document.getElementById("places-section");
const placesGrid = document.getElementById("places-grid");
const errorBox = document.getElementById("error-box");
const errorText = document.getElementById("error-text");

function showError(message) {
    errorBox.classList.remove("hidden");
    errorText.textContent = message;
}

function hideAll() {
    loader.classList.add("hidden");
    cityBox.classList.add("hidden");
    servicesSection.classList.add("hidden");
    placesSection.classList.add("hidden");
    errorBox.classList.add("hidden");
    document.getElementById("thankyou-box").classList.add("hidden");
}

async function getCity(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=en`;
    const response = await fetch(url);
    const data = await response.json();
    const address = data.address;
    console.log("Full address data:", address);
    return (
        address.city ||
        address.state_district ||
        address.town ||
        address.municipality ||
        address.village ||
        address.county ||
        "Unknown"
    );
}

async function detectLocation() {
    hideAll();
    loader.classList.remove("hidden");
    navigator.geolocation.getCurrentPosition(
        async function(position) {
            try {
                currentLat = position.coords.latitude;
                currentLon = position.coords.longitude;
                currentCity = await getCity(currentLat, currentLon);
                loader.classList.add("hidden");
                cityBox.classList.remove("hidden");
                cityNameEl.textContent = "📍 " + currentCity;
                showServices(currentCity);
                await showPlaces(currentLat, currentLon, "restaurant");
                showThankYou(currentCity);
            } catch (error) {
                loader.classList.add("hidden");
                showError("Something went wrong fetching your location data. Please try again.");
            }
        },
        function(error) {
            loader.classList.add("hidden");
            showError("Location access denied. Please allow location permission and try again.");
        }
    );
}

function showServices(cityName) {
    const available = getServicesForCity(cityName);
    servicesSection.classList.remove("hidden");
    servicesGrid.innerHTML = "";
    available.forEach(function(service) {
        const card = document.createElement("div");
        card.classList.add("service-card");
        card.innerHTML = `
            <div class="service-top">
                <span class="service-emoji">${service.emoji}</span>
                <div class="service-info">
                    <h3>${service.name}</h3>
                    <span class="service-category">${service.category}</span>
                </div>
            </div>
            <p class="service-description">${service.description}</p>
            <div class="service-buttons">
                ${service.appLink ? `<button onclick="openApp('${service.appLink}', '${service.webLink}')">📱 Open App</button>` : ""}
                <button onclick="window.open('${service.webLink}', '_blank')">🌐 Website</button>
            </div>
        `;
        servicesGrid.appendChild(card);
    });
}

function openApp(appLink, webLink) {
    window.location = appLink;
    setTimeout(function() {
        window.open(webLink, "_blank");
    }, 3000);
}

function getOsmTag(type) {
    const tags = {
        restaurant: '"amenity"="restaurant"',
        hospital: '"amenity"="hospital"',
        park: '"leisure"="park"',
        atm: '"amenity"="atm"',
        hotel: '"tourism"="hotel"'
    };
    return tags[type] || `"amenity"="${type}"`;
}

function getPlaceEmoji(type) {
    const emojis = {
        restaurant: "🍔",
        hospital: "🏥",
        park: "🌳",
        atm: "💰",
        hotel: "🏨"
    };
    return emojis[type] || "📍";
}

function openDirections(lat, lon) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
    window.open(url, "_blank");
}

async function showPlaces(lat, lon, type) {
    placesSection.classList.remove("hidden");
    placesGrid.innerHTML = "<p class='loading-places'>🔍 Finding nearby places...</p>";

    const radius = 15000;
    const osmTag = getOsmTag(type);
    const query = `[out:json][timeout:30];node[${osmTag}](around:${radius},${lat},${lon});out 20;`;

    const servers = [
        "https://overpass-api.de/api/interpreter",
        "https://overpass.kumi.systems/api/interpreter",
        "https://maps.mail.ru/osm/tools/overpass/api/interpreter"
    ];

    for (let i = 0; i < servers.length; i++) {
        try {
            placesGrid.innerHTML = `<p class='loading-places'>🔍 Searching nearby ${type}s...</p>`;

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 20000);

            const response = await fetch(servers[i], {
                method: "POST",
                body: query,
                signal: controller.signal,
                headers: { "Content-Type": "text/plain" }
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`Server returned ${response.status}`);
            }

            const text = await response.text();

            let data;
            try {
                data = JSON.parse(text);
            } catch(e) {
                throw new Error("Invalid JSON response from server");
            }

            const places = data.elements;
            placesGrid.innerHTML = "";

            if (!places || places.length === 0) {
                placesGrid.innerHTML = "<p class='no-places'>No places found nearby. Try a different category.</p>";
                return;
            }

            places.forEach(function(place) {
                if (!place.tags) return;
                const name = place.tags.name || "Unnamed Place";
                const address = place.tags["addr:street"] || place.tags["addr:full"] || "";
                const phone = place.tags.phone || place.tags["contact:phone"] || "";
                const opening = place.tags.opening_hours || "";
                const card = document.createElement("div");
                card.classList.add("place-card");
                card.innerHTML = `
                    <div class="place-top">
                        <span class="place-emoji">${getPlaceEmoji(type)}</span>
                        <div class="place-info">
                            <h3>${name}</h3>
                            <span class="place-type">${type}</span>
                        </div>
                    </div>
                    ${address ? `<p class="place-detail">📍 ${address}</p>` : ""}
                    ${phone ? `<p class="place-detail">📞 ${phone}</p>` : ""}
                    ${opening ? `<p class="place-detail">🕐 ${opening}</p>` : ""}
                    <button class="directions-btn" onclick="openDirections(${place.lat || lat}, ${place.lon || lon})">
                        🗺️ Get Directions
                    </button>
                `;
                placesGrid.appendChild(card);
            });

            return;

        } catch (error) {
            console.log(`Server ${i + 1} failed:`, error.message);
            if (i < servers.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }
    }

    placesGrid.innerHTML = `
        <p class='no-places'>
            Nearby places service is temporarily unavailable.
            <button onclick="showPlaces(${lat}, ${lon}, '${type}')">🔄 Retry</button>
        </p>
    `;
}
function showThankYou(cityName) {
    const thankYouBox = document.getElementById("thankyou-box");
    const thankYouCity = document.getElementById("thankyou-city");
    thankYouCity.textContent = cityName;
    thankYouBox.classList.remove("hidden");
}
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(function(btn) {
    btn.addEventListener("click", async function() {
        filterBtns.forEach(function(b) { b.classList.remove("active"); });
        btn.classList.add("active");
        const type = btn.dataset.type;
        await showPlaces(currentLat, currentLon, type);
    });
});

detectBtn.addEventListener("click", detectLocation);