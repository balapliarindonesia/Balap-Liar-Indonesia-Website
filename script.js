// 1. Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Auto-Generate 17 Team Members
const teamGrid = document.getElementById('team-grid');

// Kita gunakan loop untuk membuat 17 card secara otomatis
for (let i = 1; i <= 17; i++) {
    // Format angka agar menjadi 01, 02, dst.
    const memberNum = i < 10 ? `0${i}` : i;
    
    // Buat elemen card
    const card = document.createElement('div');
    card.className = 'team-card';
    
    // Isi dari card (Image Placeholder & Text)
    card.innerHTML = `
        <img src="https://via.placeholder.com/200x200/1a1a24/ff5722?text=P" alt="Member ${memberNum}">
        <h3>Member ${memberNum}</h3>
    `;
    
    teamGrid.appendChild(card);
}

// 3. Menutup menu mobile ketika salah satu link diklik
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});