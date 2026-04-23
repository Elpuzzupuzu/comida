export const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Bebas+Neue&family=Barlow:wght@300;400;500;600&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --gold: #F5A623;
  --gold-light: #FFC14D;
  --dark: #0D0D0D;
  --dark-2: #161616;
  --dark-3: #1E1E1E;
  --dark-4: #252525;
  --white: #FFFFFF;
  --gray: #999999;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--dark);
  color: var(--white);
  font-family: 'Barlow', sans-serif;
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}

#root {
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  border: none;
}

a {
  text-decoration: none;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* ─── HERO ─────────────────────────────────────────── */

.hero {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 90px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse 60% 80% at 70% 50%,
      rgba(245,166,35,0.07) 0%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 40% 50% at 20% 80%,
      rgba(245,166,35,0.04) 0%,
      transparent 60%
    ),
    var(--dark);
}

.hero-left,
.hero-right {
  position: relative;
  z-index: 2;
}

.hero-left {
  padding: 80px;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  letter-spacing: 3px;
  color: var(--gold);
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.hero-h1-top {
  font-family: 'Oswald', sans-serif;
  font-size: 22px;
  letter-spacing: 4px;
  margin-bottom: 4px;
}

.hero-h1-main {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(72px, 8vw, 96px);
  line-height: 0.95;
  letter-spacing: 2px;
  margin-bottom: 6px;
}

.hero-h1-sub {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(28px, 3vw, 36px);
  font-weight: 600;
  color: var(--gold);
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.hero-divider {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}

.hero-divider-line {
  width: 50px;
  height: 1px;
  background: var(--gold);
}

.hero-divider-star {
  color: var(--gold);
  font-size: 12px;
}

.hero-desc {
  max-width: 420px;
  line-height: 1.7;
  color: var(--gray);
  margin-bottom: 40px;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 16px 32px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.2s;
}

.btn-primary {
  background: var(--gold);
  color: var(--dark);
  box-shadow: 0 8px 30px rgba(245,166,35,0.35);
}

.btn-primary:hover {
  background: var(--gold-light);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--white);
  border: 1px solid rgba(255,255,255,0.3);
}

.btn-secondary:hover {
  border-color: var(--gold);
  color: var(--gold);
}

.hero-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-img-wrap {
  width: 100%;
  max-width: 620px;
  position: relative;
}

.hero-img-wrap img {
  width: 100%;
  filter: drop-shadow(0 30px 80px rgba(0,0,0,0.8));
}

.hero-badge {
  position: absolute;
  bottom: 60px;
  right: 40px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 2px solid var(--white);
  background: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-badge-inner {
  text-align: center;
}

.hero-badge .pct {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 34px;
}

.hero-badge .label {
  font-size: 10px;
  color: var(--gold);
}

.hero-badge .sublabel {
  font-size: 10px;
}

/* ─── FEATURES ──────────────────────────────────────── */

.features-bar {
  width: 100%;
  background: var(--dark-2);
  border-top: 1px solid rgba(245,166,35,0.1);
  border-bottom: 1px solid rgba(245,166,35,0.1);
  padding: 28px 80px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
  border-right: 1px solid rgba(255,255,255,0.07);
}

.feature-item:last-child {
  border-right: none;
}

.feature-icon {
  font-size: 28px;
  color: var(--gold);
}

.feature-text .title,
.feature-text .sub {
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
  letter-spacing: 2px;
}

/* ─── MENU ───────────────────────────────────────────── */

.menu-section {
  padding: 80px;
}

.section-eyebrow {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: var(--gold);
  letter-spacing: 4px;
  font-size: 12px;
  margin-bottom: 14px;
}

.section-eyebrow-line {
  width: 40px;
  height: 1px;
  background: var(--gold);
}

.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(42px, 5vw, 60px);
  text-align: center;
  letter-spacing: 3px;
  margin-bottom: 14px;
}

.section-star {
  text-align: center;
  color: var(--gold);
  margin-bottom: 48px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.menu-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.menu-card:hover {
  transform: translateY(-6px);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.85) 0%,
    rgba(0,0,0,0.25) 55%,
    transparent 100%
  );
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  text-align: center;
}

.card-icon {
  font-size: 24px;
  margin-bottom: 10px;
}

.card-title {
  font-family: 'Oswald', sans-serif;
  letter-spacing: 2px;
  font-size: 18px;
}

.card-underline {
  width: 40px;
  height: 2px;
  background: var(--gold);
  margin: 10px auto 0;
}

/* ─── RESPONSIVE ─────────────────────────────────────── */

@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero-right {
    display: none;
  }

  .hero-left {
    text-align: center;
    padding: 60px 24px;
  }

  .hero-desc {
    margin: 0 auto 40px;
  }

  .hero-ctas {
    justify-content: center;
  }

  .features-bar {
    grid-template-columns: repeat(2, 1fr);
    padding: 24px;
    gap: 16px;
  }

  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .menu-section {
    padding: 60px 24px;
  }
}

@media (max-width: 640px) {
  .features-bar,
  .menu-grid {
    grid-template-columns: 1fr;
  }

  .hero-h1-main {
    font-size: 58px;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
`;