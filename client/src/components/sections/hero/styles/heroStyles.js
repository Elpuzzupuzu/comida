export const heroGlobalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Barlow:wght@400;500;600&display=swap');

  .bh-nav-link:hover  { color: #FBBF24 !important; }
  .bh-feature:hover   { background: rgba(251,191,36,0.04) !important; }

  .bh-btn-primary:hover {
    background: #FCD34D !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 12px 32px rgba(251,191,36,0.22) !important;
  }

  .bh-btn-secondary:hover {
    border-color: #FBBF24 !important;
    color: #FBBF24 !important;
    transform: translateY(-2px) !important;
  }

  @media (max-width: 992px) {
    .bh-hero-grid {
      grid-template-columns: 1fr !important;
      gap: 40px;
      text-align: center;
    }

    .bh-hero-left {
      padding-right: 0 !important;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .bh-features-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }

    .bh-nav {
      display: none !important;
    }
  }

  @media (max-width: 640px) {
    .bh-features-grid {
      grid-template-columns: 1fr !important;
    }

    .bh-header {
      padding: 0 20px !important;
    }

    .bh-hero-shell {
      width: 94% !important;
    }
  }
`;