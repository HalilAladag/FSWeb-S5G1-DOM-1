const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const navElements = document.querySelectorAll("nav");
navElements.forEach(function (navElement) {
  navElement.style.fontStyle = "italic"
})

const linkElements = document.querySelectorAll("nav a");

const texts = ["Servisler", "Ürünler", "Vizyon", "Özellikler", "Hakkımızda", "İletişim"];

linkElements.forEach(function (linkElement, index) {
  linkElement.textContent = texts[index];
});

const imgE1 = document.getElementById("logo-img").src = siteContent.images["logo-img"];

const ctaSection = document.querySelector(".cta");
const h1Element = document.createElement("h1");
h1Element.textContent = "Bu DOM Mükemmel";

const buttonElement = document.createElement("button");
buttonElement.textContent = "Başlayın";
const ctaTextDiv = document.querySelector(".cta-text");

ctaTextDiv.appendChild(h1Element);
ctaTextDiv.appendChild(buttonElement);

const imgE2 = document.getElementById("cta-img").src = siteContent.images["cta-img"];

const mainSection = document.querySelector(".main-content");

const h4Element = document.createElement("h4");
h4Element.textContent = "Özellikler";

const pElement = document.createElement("p");
pElement.textContent = "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

mainSection.appendChild(h4Element);
mainSection.appendChild(pElement);

const contentSection = document.querySelector(".text-content");

const h4Element2 = document.createElement("h4");
h4Element2.textContent = "Hakkında"

const pElement2 = document.createElement("p");
pElement2.textContent = "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

mainSection.appendChild(h4Element2);
mainSection.appendChild(pElement2);

const imgE3 = document.getElementById("middle-img").src = siteContent.images["accent-img"];

const bottomDiv = document.querySelector(".text-content");

const h4Element3 = document.createElement("h4");
h4Element3.textContent = "Servisler"

const pElement3 = document.createElement("p");
pElement3.textContent = "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

mainSection.appendChild(h4Element3);
mainSection.appendChild(pElement3);

const h4Element4 = document.createElement("h4");
h4Element4.textContent = "Servisler"

const pElement4 = document.createElement("p");
pElement4.textContent = "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

mainSection.appendChild(h4Element4);
mainSection.appendChild(pElement4);


const h4Element5 = document.createElement("h4");
h4Element5.textContent = "Vizyon"

const pElement5 = document.createElement("p");
pElement5.textContent = "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

mainSection.appendChild(h4Element5);
mainSection.appendChild(pElement5);

const contactSection = document.querySelector(".contact");

const h4Element6 = document.createElement("h4");
h4Element6.textContent = "İletişim"

const pElement6 = document.createElement("p");
pElement6.textContent = "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye +90 (123) 456-7899 satis@birsirketsitesi.com.tr";

mainSection.appendChild(h4Element6);
mainSection.appendChild(pElement6);

const link = document.querySelector('footer');
link.innerHTML = 'Copyright Bir Şirket Sitesi 2022';
link.style.fontWeight = 'bold';


