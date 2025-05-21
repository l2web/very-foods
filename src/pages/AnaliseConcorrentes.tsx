import NextPageButton from '../components/NextPageButton';

const AnaliseConcorrentes = () => {
  return (
    <div className="animate-fade-in">
      {/* Título da Página */}
      <div className="mb-12 text-center">
        <h1>Análise de Concorrentes</h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          Comparação estratégica dos principais players no mercado de automação para restaurantes
        </p>
      </div>

      {/* Visão Geral do Mercado */}
      <section className="section mb-12">
        <h2>O Cenário Competitivo em Dourados-MS</h2>
        <p className="mb-6">
          Analisamos os principais concorrentes no mercado de automação para restaurantes, 
          identificando suas forças, limitações e adequação ao perfil regional. Esta análise 
          permite compreender o posicionamento ideal para a Very Foods no contexto de Dourados-MS.
        </p>

        <div className="bg-primary-800 rounded-xl p-8 border border-primary-700">
          <h3 className="text-xl font-semibold mb-4">Principais Players</h3>
          <p className="mb-6">
            O mercado de automação para restaurantes em Dourados-MS é dominado por soluções 
            nacionais que não foram desenvolvidas especificamente para as necessidades locais. 
            Os dois principais concorrentes são:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="badge badge-primary mb-4">Concorrente 1</div>
              <h4 className="text-xl font-semibold mb-2">Gourmet SA</h4>
              <p className="text-gray-400">
                Sistema completo de automação com foco em gestão operacional integrada, 
                voltado principalmente para estabelecimentos de médio e grande porte.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="badge badge-secondary mb-4">Concorrente 2</div>
              <h4 className="text-xl font-semibold mb-2">Goomer</h4>
              <p className="text-gray-400">
                Solução especializada em cardápios digitais e autoatendimento, com modelo 
                freemium mais acessível para pequenas empresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resto do conteúdo mantido igual */}
      {/* ... */}
      
      {/* Diferenciação da Very Foods */}
      <section className="section">
        <h2>Por Que Escolher a Very Foods</h2>
        <p className="mb-8">
          Nossa solução foi desenvolvida especificamente para o mercado de Dourados-MS, 
          com foco nas necessidades reais dos estabelecimentos locais.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7h-9"></path>
                <path d="M14 17H5"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Suporte Local</h3>
            <p className="text-gray-300">
              Presença física em Dourados, com equipe dedicada para implementação e 
              treinamento presencial, garantindo suporte rápido e personalizado.
            </p>
          </div>
          
          <div className="card p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Modelo Freemium Acessível</h3>
            <p className="text-gray-300">
              Entrada gratuita com funcionalidades essenciais e crescimento modular 
              conforme as necessidades e possibilidades do estabelecimento.
            </p>
          </div>
          
          <div className="card p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Educação e Capacitação</h3>
            <p className="text-gray-300">
              Foco em treinamento e demonstração de resultados antes da venda, 
              com workshops gratuitos e material educativo contextualizado.
            </p>
          </div>
        </div>
      </section>

      {/* Botões de navegação */}
      <div className="flex justify-center gap-4 my-6">
        <button onClick={() => window.history.back()} className="btn btn-primary btn-lg">
          Retornar
          <svg 
            className="ml-2 inline" 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <NextPageButton nextPage="/comportamento-local" />
      </div>
    </div>
  );
};

export default AnaliseConcorrentes;
