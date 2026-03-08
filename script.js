// 1. Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Data Team Members (Edit nama dan gambar di sini nantinya)
const teamMembers = [
    { name: "Miku Racing", image: "images/RIVAL_16.png" },
    { name: "Ao Zero", image: "images/RIVAL_17.png" },
    { name: "GendZo", image: "images/RIVAL_18.png" },
    { name: "Veetec", image: "images/RIVAL_19.png" },
    { name: "Kenja Mago", image: "images/RIVAL_20.png" },
    { name: "Desanosan", image: "images/RIVAL_21.png" },
    { name: "Kudungga", image: "images/RIVAL_22.png" },
    { name: "Arogan", image: "images/RIVAL_23.png" },
    { name: "Initial R", image: "images/RIVAL_24.png" },
    { name: "Ritsuki Fajri", image: "images/fajri.png" },
    { name: "AditBlue", image: "images/RIVAL_26.png" },
    { name: "Ixillent", image: "images/RIVAL_27.png" },
    { name: "Shiro", image: "images/shiro.png" },
    { name: "PLYRS", image: "images/plyrs.png" },
    { name: "Kucing", image: "images/kucing.png" },
    { name: "Bertus", image: "images/bertus.png" },
    { name: "PowerPlay", image: "images/powerplay.png" }
];

const teamGrid = document.getElementById('team-grid');

// Loop untuk merender data dari array ke dalam HTML
teamMembers.forEach(member => {
    const card = document.createElement('div');
    card.className = 'team-card';
    
    card.innerHTML = `
        <img src="${member.image}" alt="${member.name}" loading="lazy">
        <h3>${member.name}</h3>
    `;
    
    teamGrid.appendChild(card);
});

// 3. Menutup menu mobile ketika salah satu link diklik
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ==========================================
// 4. IMAGE COMPARISON SLIDER & CAROUSEL LOGIC
// ==========================================
const comparisonData = [
    { id: "comp1", title: "Bus Station", before: "images/comparison/BUS 1.2.jpeg", after: "images/comparison/BUS 1.3.jpeg" },
    { id: "comp2", title: "Indo Balap", before: "images/comparison/INDOBALAP 1.2.jpeg", after: "images/comparison/INDOBALAP 1.3.jpeg" },
    { id: "comp3", title: "Kota Area 1", before: "images/comparison/KOTA1 1.2.jpeg", after: "images/comparison/KOTA1 1.3.jpeg" },
    { id: "comp4", title: "Kota Area 2", before: "images/comparison/KOTA2 1.2.jpeg", after: "images/comparison/KOTA2 1.3.jpeg" },
    { id: "comp5", title: "NFS BLID", before: "images/comparison/NFSBLID 1.2.jpeg", after: "images/comparison/NFSBLID 1.3.jpeg" },
    { id: "comp6", title: "Pantai", before: "images/comparison/PANTAI 1.2.jpeg", after: "images/comparison/PANTAI 1.3.jpeg" },
    { id: "comp7", title: "Pertamina", before: "images/comparison/PERTAMINA 1.2.jpeg", after: "images/comparison/PERTAMINA 1.3.jpeg" }
];

const comparisonGrid = document.getElementById('comparison-grid');
const slideIndicator = document.getElementById('slide-indicator');

// 4A. Render HTML untuk setiap gambar
comparisonData.forEach((data, index) => {
    const compContainer = document.createElement('div');
    // Tambahkan class 'active' hanya pada elemen pertama
    compContainer.className = `comp-item ${index === 0 ? 'active' : ''}`; 
    
    compContainer.innerHTML = `
        <h3 class="comp-title">${data.title}</h3>
        <div class="img-comp-container" style="--slider-pos: 50%;">
            <img src="${data.after}" alt="BLID 1.3" class="img-comp-base" loading="lazy">
            
            <img src="${data.before}" alt="BLID 1.2" class="img-comp-overlay" loading="lazy">
            
            <input type="range" min="0" max="100" value="50" class="img-comp-slider">
            
            <div class="img-comp-line"></div>
            <div class="img-comp-handle"><i class="fas fa-arrows-alt-h"></i></div>

            <div class="badge badge-left">BLID 1.2</div>
            <div class="badge badge-right">BLID 1.3</div>
        </div>
    `;
    comparisonGrid.appendChild(compContainer);
});

// 4B. Logika Geser Garis Pemisah (Slider Before/After)
const sliders = document.querySelectorAll('.img-comp-slider');
sliders.forEach(slider => {
    slider.addEventListener('input', (e) => {
        // Mengubah CSS variable '--slider-pos' sesuai posisi input range
        const container = e.target.closest('.img-comp-container');
        container.style.setProperty('--slider-pos', `${e.target.value}%`);
    });
});

// 4C. Logika Carousel (Next & Previous)
let currentSlide = 0;
const slides = document.querySelectorAll('.comp-item');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

function updateCarousel() {
    // Sembunyikan semua slide
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Tampilkan slide yang sedang aktif
    slides[currentSlide].classList.add('active');
    
    // Reset posisi garis pemisah ke tengah (50%) tiap ganti gambar
    const activeSlider = slides[currentSlide].querySelector('.img-comp-slider');
    activeSlider.value = 50;
    slides[currentSlide].querySelector('.img-comp-container').style.setProperty('--slider-pos', '50%');
    
    // Update teks indikator (misal: 2 / 7)
    slideIndicator.innerText = `${currentSlide + 1} / ${slides.length}`;
}

nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0; // Balik ke awal jika sudah mentok
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1; // Balik ke akhir jika di gambar pertama
    updateCarousel();
});



