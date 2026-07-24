import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function TicketDashboard() {
  return (
    <div className="ticket-dashboard">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="dashboard-content">
        <Header />

        <main className="dashboard-main">

          {/* Área superior */}
          <section className="ticket-workspace">

            {/* Novo Ticket */}
            <div className="new-ticket-card">

              <div className="card-header">
                <h1>Novo Ticket</h1>
                <p>
                  Preencha as informações para criar um novo ticket.
                </p>
              </div>

              <form className="ticket-form">

                {/* Título e Categoria */}
                <div className="form-row">

                  <div className="form-group">
                    <label>
                      Título do Ticket <span>*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Ex: Erro ao gerar relatório"
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Categoria <span>*</span>
                    </label>

                    <select>
                      <option>
                        Selecione uma categoria
                      </option>
                      <option>Erro</option>
                      <option>Solicitação</option>
                      <option>Incidente</option>
                      <option>Dúvida</option>
                    </select>
                  </div>

                </div>

                {/* Descrição */}
                <div className="form-group">
                  <label>
                    Descrição <span>*</span>
                  </label>

                  <div className="editor">

                    <div className="editor-toolbar">
                      <select>
                        <option>Normal</option>
                        <option>Título 1</option>
                        <option>Título 2</option>
                      </select>

                      <button type="button">
                        <strong>B</strong>
                      </button>

                      <button type="button">
                        <i>I</i>
                      </button>

                      <button type="button">
                        <u>U</u>
                      </button>

                      <button type="button">
                        ☷
                      </button>

                      <button type="button">
                        ≡
                      </button>

                      <button type="button">
                        🔗
                      </button>

                      <button type="button">
                        ◉
                      </button>
                    </div>

                    <textarea
                      placeholder="Descreva o problema ou solicitação com o máximo de detalhes possível..."
                    />

                  </div>
                </div>

                {/* Departamento e Responsável */}
                <div className="form-row">

                  <div className="form-group">
                    <label>
                      Quem recebe (Departamento) <span>*</span>
                    </label>

                    <select>
                      <option>
                        Selecione o destinatário
                      </option>
                      <option>Back Office</option>
                      <option>Helpdesk</option>
                      <option>TI</option>
                      <option>Recursos Humanos</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>
                      Responsável (Usuário)
                    </label>

                    <select>
                      <option>
                        Selecione o responsável (opcional)
                      </option>
                      <option>João Mendes</option>
                      <option>Maria Silva</option>
                      <option>Pedro Manuel</option>
                    </select>
                  </div>

                </div>

                {/* Status e Prioridade */}
                <div className="form-row">

                  <div className="form-group">
                    <label>
                      Estado (Status) <span>*</span>
                    </label>

                    <select>
                      <option>🟢 Aberto</option>
                      <option>🟡 Em andamento</option>
                      <option>🔴 Fechado</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>
                      Prioridade <span>*</span>
                    </label>

                    <select>
                      <option>🚩 Média</option>
                      <option>🔴 Alta</option>
                      <option>🟢 Baixa</option>
                      <option>⚡ Urgente</option>
                    </select>
                  </div>

                </div>

                {/* Preço e Data */}
                <div className="form-row">

                  <div className="form-group">
                    <label>Preço (Kz)</label>

                    <input
                      type="number"
                      placeholder="Ex: 15000"
                    />
                  </div>

                  <div className="form-group">
                    <label>Data Limite</label>

                    <input
                      type="date"
                    />
                  </div>

                </div>

                {/* Anexos */}
                <div className="form-group">
                  <label>Anexos</label>

                  <div className="upload-area">
                    <div className="upload-icon">
                      ☁
                    </div>

                    <p>
                      Clique para anexar ou arraste os arquivos aqui
                    </p>

                    <span>
                      PDF, PNG, JPG até 10MB
                    </span>
                  </div>
                </div>

                {/* Botões */}
                <div className="form-actions">
                  <button
                    type="button"
                    className="cancel-button"
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    className="create-button"
                  >
                    Criar Ticket
                  </button>
                </div>

              </form>
            </div>

            {/* Detalhes do Ticket */}
            <TicketDetails />

          </section>

          {/* Meus Tickets */}
          <MyTickets />

        </main>
      </div>
    </div>
  );
}


/* =========================
   DETALHES DO TICKET
========================= */

function TicketDetails() {
  return (
    <div className="ticket-details-card">

      <div className="ticket-title">
        <div>
          <span className="ticket-id">
            #TK-2025-0001
          </span>

          <span className="status-badge">
            Aberto
          </span>
        </div>

        <h2>
          Erro ao gerar relatório mensal
        </h2>
      </div>

      <div className="ticket-info">

        <div className="info-column">

          <div className="info-item">
            <span>👥 Departamento</span>
            <strong>Back Office</strong>
          </div>

          <div className="info-item">
            <span>👤 Responsável</span>
            <strong>João Mendes</strong>
          </div>

          <div className="info-item">
            <span>🚩 Prioridade</span>
            <strong className="priority">
              🚩 Média
            </strong>
          </div>

        </div>

        <div className="info-column">

          <div className="info-item">
            <span>◷ Estado</span>
            <strong className="status-text">
              Aberto
            </strong>
          </div>

          <div className="info-item">
            <span>💰 Preço</span>
            <strong>15.000 Kz</strong>
          </div>

          <div className="info-item">
            <span>◷ Criado em</span>
            <strong>21/07/2025 10:30</strong>
          </div>

        </div>

      </div>

      {/* Tabs */}
      <div className="ticket-tabs">
        <button className="active">
          Atividade
        </button>

        <button>
          Informações
        </button>

        <button>
          Anexos (2)
        </button>
      </div>

      {/* Atividades */}
      <div className="activities">

        <Activity
          initials="DS"
          name="Daniel Samba"
          role="Sender"
          date="21/07/2025 10:30"
          message="Criei o ticket com a descrição do problema."
        />

        <Activity
          initials="JM"
          name="João Mendes"
          role="Back Office"
          date="21/07/2025 11:02"
          message="Estamos analisando o problema. Retorno em breve."
        />

        <Activity
          initials="JM"
          name="João Mendes"
          role="Back Office"
          date="21/07/2025 12:15"
          message="Problema identificado. Corrigimos e está pronto para teste."
        />

        <Activity
          initials="DS"
          name="Daniel Samba"
          role="Sender"
          date="21/07/2025 12:45"
          message="Testado e confirmado. Obrigado!"
        />

      </div>

      {/* Resposta */}
      <div className="reply-box">

        <textarea
          placeholder="Escrever resposta..."
        />

        <div className="reply-footer">
          <button className="attach-button">
            📎
          </button>

          <button className="send-button">
            Enviar
          </button>
        </div>

      </div>

    </div>
  );
}


/* =========================
   ATIVIDADE
========================= */

function Activity({
  initials,
  name,
  role,
  date,
  message
}) {
  return (
    <div className="activity">

      <div className="activity-avatar">
        {initials}
      </div>

      <div className="activity-content">

        <div className="activity-header">
          <strong>
            {name}
          </strong>

          <span>
            ({role})
          </span>

          <time>
            {date}
          </time>
        </div>

        <p>
          {message}
        </p>

      </div>

    </div>
  );
}


/* =========================
   MEUS TICKETS
========================= */

function MyTickets() {
  return (
    <section className="my-tickets-card">

      <div className="my-tickets-header">
        <h2>Meus Tickets</h2>

        <button>
          Ver todos
        </button>
      </div>

      <div className="tickets-table-wrapper">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Departamento</th>
              <th>Responsável</th>
              <th>Estado</th>
              <th>Prioridade</th>
              <th>Criado em</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>#TK-2025-0001</td>

              <td>
                Erro ao gerar relatório mensal
              </td>

              <td>
                Back Office
              </td>

              <td>
                João Mendes
              </td>

              <td>
                <span className="status-badge">
                  Aberto
                </span>
              </td>

              <td>
                🚩 Média
              </td>

              <td>
                21/07/2025 10:30
              </td>

              <td>
                <button className="action-button">
                  👁
                </button>

                <button className="action-button">
                  ✎
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default TicketDashboard;