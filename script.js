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
    { name: "Fajri", image: "images/RIVAL_25.png" },
    { name: "AditBlue", image: "images/RIVAL_26.png" },
    { name: "Ixillent", image: "images/RIVAL_27.png" },
    { name: "Shiro", image: "images/shiro.png" },
    { name: "PLYRS", image: "images/plyrs.png" },
    { name: "Kucing", image: "images/kucing.png" },
    { name: "Bertus", image: "images/RIVAL_31.png" },
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
