// 1. Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Data Team Members (Edit nama dan gambar di sini nantinya)
const teamMembers = [
    { name: "Member 01", image: "images/RIVAL_16.png" },
    { name: "Member 02", image: "images/RIVAL_17.png" },
    { name: "Member 03", image: "images/RIVAL_18.png" },
    { name: "Member 04", image: "images/RIVAL_19.png" },
    { name: "Member 05", image: "images/RIVAL_20.png" },
    { name: "Member 06", image: "images/RIVAL_21.png" },
    { name: "Member 07", image: "images/RIVAL_22.png" },
    { name: "Member 08", image: "images/RIVAL_23.png" },
    { name: "Member 09", image: "images/RIVAL_24.png" },
    { name: "Member 10", image: "images/RIVAL_25.png" },
    { name: "Member 11", image: "images/RIVAL_26.png" },
    { name: "Member 12", image: "images/RIVAL_27.png" },
    { name: "Member 13", image: "images/RIVAL_28.png" },
    { name: "Member 14", image: "images/RIVAL_29.png" },
    { name: "Member 15", image: "images/RIVAL_30.png" },
    { name: "Member 16", image: "images/RIVAL_31.png" },
    { name: "Member 17", image: "images/RIVAL_32.png" }
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
