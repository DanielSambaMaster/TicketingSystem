import "./Header.module.css";

function Header() {
  return (
    <header className="header">
      {/* Modo */}
      <div className="header-mode">
        <span className="mode-label">Modo:</span>

        <div className="mode-switch">
          <button className="mode-button active">
            Sender
          </button>

          <button className="mode-button">
            Viewer
          </button>
        </div>
      </div>

      {/* Ações do utilizador */}
      <div className="header-actions">
        {/* Notificações */}
        <button className="notification-button" aria-label="Notificações">
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        <div className="header-divider"></div>

        {/* Perfil */}
        <button className="profile-button">
          <div className="profile-avatar">
            DS
          </div>

          <span className="profile-name">
            Daniel Samba
          </span>

          <svg
            className="profile-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;