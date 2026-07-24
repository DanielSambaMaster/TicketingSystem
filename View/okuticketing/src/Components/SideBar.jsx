
function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.59 13.41 13.41 20.59a2 2 0 0 1-2.82 0L3.41 13.41a2 2 0 0 1 0-2.82L10.59 3.41a2 2 0 0 1 2.82 0l7.18 7.18a2 2 0 0 1 0 2.82Z" />
            <path d="m8 12 2 2 5-5" />
          </svg>
        </div>

        <span>TicketSystem</span>
      </div>

      {/* Novo Ticket */}
      <div className="sidebar-new-ticket">
        <button>
          <span className="plus-icon">+</span>
          <span>Novo Ticket</span>
        </button>
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">

        {/* Principal */}
        <div className="menu-section">

          <h3>PRINCIPAL</h3>

          <SidebarItem
            icon="⌂"
            label="Dashboard"
          />

          <SidebarItem
            icon="▣"
            label="Meus Tickets"
          />

          <SidebarItem
            icon="☷"
            label="Todos os Tickets"
          />

          <SidebarItem
            icon="♙"
            label="Tickets Atribuídos"
          />

        </div>

        {/* Configurações */}
        <div className="menu-section">

          <h3>CONFIGURAÇÕES</h3>

          <SidebarItem
            icon="♙"
            label="Departamentos"
          />

          <SidebarItem
            icon="♙"
            label="Usuários"
          />

          <SidebarItem
            icon="⚑"
            label="Prioridades"
          />

          <SidebarItem
            icon="◷"
            label="Status"
          />

          <SidebarItem
            icon="▣"
            label="Categorias"
          />

        </div>

        {/* Relatórios */}
        <div className="menu-section">

          <h3>RELATÓRIOS</h3>

          <SidebarItem
            icon="▤"
            label="Relatórios"
          />

          <SidebarItem
            icon="◩"
            label="Desempenho"
          />

        </div>

      </nav>

      {/* Sair */}
      <div className="sidebar-logout">

        <button>
          <span className="logout-icon">↪</span>
          <span>Sair</span>
        </button>

      </div>

    </aside>
  );
}


/* =========================
   SIDEBAR ITEM
========================= */

function SidebarItem({ icon, label }) {
  return (
    <button className="sidebar-item">

      <span className="sidebar-item-icon">
        {icon}
      </span>

      <span className="sidebar-item-label">
        {label}
      </span>

    </button>
  );
}

export default Sidebar;