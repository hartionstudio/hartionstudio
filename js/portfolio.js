/* HARTION STUDIO - Portfolio & Case Study Data & Interactive Logic */

const PORTFOLIO_DATA = [
  {
    id: 'p1',
    title: 'Cybernetic Audio - 3D Render',
    category: '3d',
    categoryLabel: '3D Design',
    image: 'assets/images/3d_render_showcase.jpg',
    description: 'Ultra-detailed 3D product render with octane lighting and futuristic glass finishes.',
    client: 'Aether Sound Tech',
    timeline: '3 Weeks',
    tools: ['Blender 4.2', 'Cinema 4D', 'Octane Render', 'Substance Painter'],
    fullDetails: 'Hartion Studio created a high-fidelity 3D CGI product campaign for Aether Sound. Using advanced subsurface scattering and custom light rigs, we delivered 8K renders and 3D motion graphics for global launch banners.'
  },
  {
    id: 'p2',
    title: 'Neo-Tokyo Commercial Shoot',
    category: 'video-shoot',
    categoryLabel: 'Video Shoot',
    image: 'assets/images/video_shoot_showcase.jpg',
    description: 'Atmospheric 4K cinematography with custom gimbal stabilization and anamorphic lenses.',
    client: 'Vanguard Automotive',
    timeline: '4 Weeks',
    tools: ['RED V-Raptor 8K', 'ARRI Signature Primes', 'DJI Ronin 2', 'Aputure 1200d'],
    fullDetails: 'Full studio and location video production for Vanguard Automotive. We coordinated multi-camera setups, night lighting rigs, and captured cinematic sequence shots used in broadcast TV commercials.'
  },
  {
    id: 'p3',
    title: 'Pulse Energy - Post Production',
    category: 'video-edit',
    categoryLabel: 'Video Editing',
    image: 'assets/images/video_editing_showcase.jpg',
    description: 'High-energy fast cuts, Davinci Resolve color grading, and custom sound design.',
    client: 'Pulse Global',
    timeline: '2 Weeks',
    tools: ['DaVinci Resolve Studio', 'Adobe Premiere Pro', 'After Effects', 'iZotope RX'],
    fullDetails: 'Complete post-production pipeline including color grading, audio master mix, speed ramps, and motion graphics overlay for digital ad campaign.'
  },
  {
    id: 'p4',
    title: 'Hyperion Brand Identity',
    category: 'graphic',
    categoryLabel: 'Graphic Design',
    image: 'assets/images/graphic_design_showcase.jpg',
    description: 'Complete visual identity system, brand guidelines, UI kit, and luxury packaging.',
    client: 'Hyperion Capital',
    timeline: '3 Weeks',
    tools: ['Figma', 'Adobe Illustrator', 'Photoshop', 'InDesign'],
    fullDetails: 'Crafted an executive brand language for Hyperion Capital including logo mark geometry, color palette hierarchy, responsive web UI kit, and premium stationery embossing.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('portfolio-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalOverlay = document.getElementById('portfolio-modal');
  const modalBody = document.getElementById('modal-body-content');
  const modalClose = document.getElementById('modal-close-btn');

  function renderPortfolio(filter = 'all') {
    if (!grid) return;
    grid.innerHTML = '';

    const itemsToDisplay = filter === 'all' 
      ? PORTFOLIO_DATA 
      : PORTFOLIO_DATA.filter(item => item.category === filter);

    itemsToDisplay.forEach(item => {
      const card = document.createElement('div');
      card.className = 'portfolio-item';
      card.dataset.id = item.id;
      card.innerHTML = `
        <div class="portfolio-img-wrap">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <span class="portfolio-category-tag">${item.categoryLabel}</span>
        </div>
        <div class="portfolio-info">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </div>
      `;

      card.addEventListener('click', () => openModal(item));
      grid.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPortfolio(btn.dataset.filter);
    });
  });

  function openModal(item) {
    if (!modalOverlay || !modalBody) return;
    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="badge" style="margin-bottom: 0.5rem;"><span class="dot"></span>${item.categoryLabel} Case Study</span>
        <h3 style="font-family: var(--font-heading); font-size: 2rem; margin-top: 0.5rem;">${item.title}</h3>
      </div>
      <div style="width:100%; height: 260px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.5rem;">
        <img src="${item.image}" style="width:100%; height:100%; object-fit:cover;" alt="${item.title}"/>
      </div>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem; background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
        <div><strong style="color:var(--text-muted);">Client:</strong> ${item.client}</div>
        <div><strong style="color:var(--text-muted);">Turnaround:</strong> ${item.timeline}</div>
      </div>
      <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">${item.fullDetails}</p>
      <div>
        <h5 style="font-family: var(--font-heading); margin-bottom: 0.5rem;">Tools & Production Tech Used:</h5>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${item.tools.map(tool => `<span style="background: rgba(0, 240, 255, 0.1); border: 1px solid rgba(0,240,255,0.2); color: var(--primary-cyan); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: 0.8rem; font-weight:600;">${tool}</span>`).join('')}
        </div>
      </div>
    `;
    modalOverlay.classList.add('active');
  }

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  renderPortfolio('all');
});
