import NextPageButton from '../components/NextPageButton';

const ContextoRegional = () => {
  return (
    <div className="animate-fade-in">
      {/* Título da Página */}
      <div className="mb-3 text-center">
        <h1>Contexto Regional de Dourados-MS</h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          Análise detalhada do setor de food service na região e suas características específicas
        </p>
      </div>

      {/* Panorama do Setor */}
      <section className="section mb-3">
        <h2>O Cenário de Food Service em Dourados-MS</h2>
        <p className="mb-3">
          Dourados é o segundo maior município de Mato Grosso do Sul, com uma economia diversificada 
          e um setor de food service em crescimento. A cidade representa um importante polo econômico 
          regional, com forte influência sobre municípios vizinhos e uma crescente cultura gastronômica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="card p-6 hover-lift">
            <div className="text-4xl font-bold text-accent-500 mb-4">150+</div>
            <h3 className="text-xl font-semibold mb-2">Estabelecimentos</h3>
            <p className="text-gray-400">
              Mais de 150 estabelecimentos gastronômicos, incluindo restaurantes, lanchonetes, 
              padarias, cafés e serviços de delivery.
            </p>
          </div>

          <div className="card p-6 hover-lift">
            <div className="text-4xl font-bold text-teal-500 mb-4">2º</div>
            <h3 className="text-xl font-semibold mb-2">Maior Município</h3>
            <p className="text-gray-400">
              Segundo maior município de MS, com economia diversificada e forte influência regional.
            </p>
          </div>

          <div className="card p-6 hover-lift">
            <div className="text-4xl font-bold text-purple-500 mb-4">5+</div>
            <h3 className="text-xl font-semibold mb-2">Cidades Impactadas</h3>
            <p className="text-gray-400">
              Influência direta sobre cidades vizinhas como Fátima do Sul, Itaporã e Caarapó.
            </p>
          </div>
        </div>

        <div className="bg-primary-800 rounded-xl p-4 mt-4 border border-primary-700">
          <h3 className="text-xl font-semibold mb-4">Conexão com a Produção Agrícola</h3>
          <p>
            O setor de food service em Dourados possui uma conexão direta com a forte produção 
            agrícola da região, criando oportunidades para estabelecimentos que valorizam 
            ingredientes locais e cadeias curtas de fornecimento.
          </p>
        </div>
      </section>

      {/* Perfil dos Estabelecimentos */}
      <section className="section mb-3">
        <h2>Quem São os Estabelecimentos Locais</h2>
        <p className="mb-3">
          A análise dos dados do setor alimentício em Mato Grosso do Sul revela um perfil 
          predominantemente composto por microempresas, com características e desafios específicos.
        </p>

        <div className="bg-primary-800 rounded-xl p-4 mb-4">
          <h3 className="text-xl font-semibold mb-3">Distribuição por Porte</h3>
          
          {/* Gráfico de Barras Redesenhado */}
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <div style={{width: '90%'}} className="bg-accent-500 rounded-md h-10 flex items-center justify-start px-3">
                <span className="font-bold text-white">90%</span>
              </div>
              <span className="ml-3 min-w-[120px]">Microempresas</span>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="w-[6%] min-w-[60px] bg-purple-500 rounded-md h-10 flex items-center justify-start px-3">
                <span className="font-bold text-white">6%</span>
              </div>
              <span className="ml-3 min-w-[120px]">Pequenas Empresas</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-[4%] min-w-[60px] bg-teal-500 rounded-md h-10 flex items-center justify-start px-3">
                <span className="font-bold text-white">4%</span>
              </div>
              <span className="ml-3 min-w-[120px]">Médias/Grandes</span>
            </div>
          </div>
          
          <p className="text-gray-300">
            A maioria dos estabelecimentos opera com equipes reduzidas (1 a 5 funcionários) e 
            enfrenta desafios típicos de pequenos negócios, como limitações de capital para 
            investimento em tecnologia e sobrecarga operacional dos proprietários.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">Limitações de Capital</h3>
            <p className="text-gray-400">
              Dificuldade para realizar investimentos significativos em tecnologia, 
              exigindo soluções com baixo custo inicial e retorno rápido.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">Sobrecarga Operacional</h3>
            <p className="text-gray-400">
              Proprietários frequentemente acumulam múltiplas funções, limitando o 
              tempo disponível para planejamento e implementação de melhorias.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">Conhecimento Técnico</h3>
            <p className="text-gray-400">
              Necessidade de soluções intuitivas e suporte dedicado, devido à 
              limitação de conhecimento técnico especializado.
            </p>
          </div>
        </div>
      </section>

      {/* Tendências Tecnológicas */}
      <section className="section mb-3">
        <h2>O Futuro do Food Service em 2025</h2>
        <p className="mb-3">
          As principais tendências tecnológicas identificadas para o setor de food service 
          em 2025 apontam para uma transformação digital acelerada, com oportunidades 
          significativas para estabelecimentos que se adaptarem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="feature-card hover-lift">
            <div className="feature-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="feature-card__title">Automação de Processos</h3>
            <p className="feature-card__description">
              26% dos estabelecimentos já utilizam alguma forma de IA para automatizar atendimento 
              e operações, com projeção de crescimento acelerado.
            </p>
          </div>

          <div className="feature-card hover-lift">
            <div className="feature-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
            </div>
            <h3 className="feature-card__title">Cardápios Digitais</h3>
            <p className="feature-card__description">
              Crescimento de 45% na adoção nos últimos 12 meses, com foco em experiência 
              do cliente e redução de custos operacionais.
            </p>
          </div>

          <div className="feature-card hover-lift">
            <div className="feature-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3 className="feature-card__title">Integração de Canais</h3>
            <p className="feature-card__description">
              30% do faturamento de restaurantes em 2025 virá pelo canal digital, 
              exigindo integração eficiente entre plataformas.
            </p>
          </div>

          <div className="feature-card hover-lift">
            <div className="feature-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
            </div>
            <h3 className="feature-card__title">Análise de Dados</h3>
            <p className="feature-card__description">
              Uso crescente de analytics para otimização de cardápio, precificação 
              dinâmica e personalização da experiência do cliente.
            </p>
          </div>

          <div className="feature-card hover-lift">
            <div className="feature-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="feature-card__title">Sustentabilidade</h3>
            <p className="feature-card__description">
              Soluções que reduzem desperdício e otimizam recursos, com foco em 
              eficiência energética e redução de impacto ambiental.
            </p>
          </div>
        </div>
      </section>

      {/* Oportunidades Identificadas */}
      <section className="section">
        <h2>Potencial de Transformação Digital</h2>
        <p className="mb-3">
          O cenário atual apresenta oportunidades significativas para estabelecimentos que 
          adotarem soluções tecnológicas adaptadas à realidade local, com benefícios tangíveis 
          e retorno sobre investimento mensurável.
        </p>

        <div className="bg-primary-800 rounded-xl p-8 border border-primary-700">
          <h3 className="text-xl font-semibold mb-6">Benefícios Quantificáveis</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="bg-accent-500 p-2 rounded-full mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Redução de custos operacionais</h4>
                <p className="text-gray-300">Até 30% de economia com automação de processos e redução de desperdícios</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-accent-500 p-2 rounded-full mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Aumento da eficiência</h4>
                <p className="text-gray-300">Até 20% mais rapidez no atendimento com sistemas integrados</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-accent-500 p-2 rounded-full mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Independência de marketplaces</h4>
                <p className="text-gray-300">Redução significativa das taxas de aplicativos de entrega</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-accent-500 p-2 rounded-full mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Melhor gestão de dados</h4>
                <p className="text-gray-300">Tomada de decisão baseada em informações precisas e em tempo real</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-accent-500 p-2 rounded-full mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Experiência do cliente</h4>
                <p className="text-gray-300">Aumento da satisfação e fidelização com atendimento digital</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-accent-500 p-2 rounded-full mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Escalabilidade</h4>
                <p className="text-gray-300">Capacidade de crescer sem aumento proporcional de custos operacionais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botão de navegação para a próxima página */}
      <NextPageButton nextPage="/analise-concorrentes" />
    </div>
  );
};

export default ContextoRegional;
