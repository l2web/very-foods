import NextPageButton from '../components/NextPageButton';

const PlanoValor = () => {
  return (
    <div className="animate-fade-in">
      {/* Título da Página */}
      <div className="mb-3 text-center">
        <h1>Plano de Valor</h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          Proposta completa de serviços e investimento para implementação do marketing da Very Foods
        </p>
      </div>

      {/* Introdução */}
      <section className="section mb-3">
        <div className="bg-primary-800 rounded-xl p-4 border border-primary-700">
          <h2 className="text-center mb-3">Transforme seu negócio com a Perfil Marketing</h2>
          <p className="text-xl text-center text-gray-100 mb-3">
            Baseado na pesquisa estratégica de mercado realizada em Dourados-MS, 
            desenvolvemos uma proposta completa para implementação do planejamento de marketing, adaptada às necessidades específicas do seu negócio.
          </p>
          
          <div className="flex justify-center">
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section mb-3">
        <h2>Benefícios Tangíveis para seu Negócio</h2>
        <p className="mb-3">
          A implementação das açoes de marketing que oferecemos vão gerar resultados concretos e mensuráveis 
          para o seu negócio, com retorno sobre investimento em curto prazo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Redução de Custos</h3>
            <p className="text-gray-300 mb-4">
              Diminuição de até 60% nos custos operacionais com a contratação de uma só empresa que supre todas as necessidades do marketing.
            </p>
            <div className="mt-auto">
              <div className="text-2xl font-bold text-accent-500">60%</div>
              <div className="text-sm text-gray-400">economia em custos</div>
            </div>
          </div>
          
          <div className="card p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"></path>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Aumento de Vendas</h3>
            <p className="text-gray-300 mb-4">
              Crescimento médio de 20% no faturamento com novas estratégias de 
              venda digital e planejamento estratégico.
            </p>
            <div className="mt-auto">
              <div className="text-2xl font-bold text-purple-500">20%</div>
              <div className="text-sm text-gray-400">aumento em vendas</div>
            </div>
          </div>
          
          <div className="card p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Eficiência Operacional</h3>
            <p className="text-gray-300 mb-4">
              Redução de até 40% no tempo gasto em tarefas administrativas e 
              operacionais, permitindo foco no core business.
            </p>
            <div className="mt-auto">
              <div className="text-2xl font-bold text-teal-500">40%</div>
              <div className="text-sm text-gray-400">mais eficiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Está Incluído */}
      <section className="section mb-3">
        <h2>O Que Você Receberá nos Próximos 90 Dias</h2>
        <p className="mb-3">
          Nossa proposta inclui um pacote completo de marketing digital com ações estratégicas 
          para garantir o crescimento do seu negócio em diferentes etapas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              Dias 1-30: Lançamento e Primeiras Adesões
            </h3>
            
            <div className="space-y-4 ml-13">
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Produção de Vídeos</h4>
                <p className="text-gray-400">
                  Criação de vídeos profissionais para campanhas de tráfego pago, 
                  aumentando o engajamento e a conversão.
                </p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Instagram Profissional</h4>
                <p className="text-gray-400">
                  Criação e configuração completa do Instagram do seu negócio, 
                  otimizado para máxima visibilidade e engajamento.
                </p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Material Gráfico Digital</h4>
                <p className="text-gray-400">
                  Desenvolvimento de todo material visual para suas redes sociais, 
                  incluindo posts, stories e destaques com identidade visual consistente.
                </p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Gestão de Redes Sociais</h4>
                <p className="text-gray-400">
                  Administração completa e postagens regulares em suas redes sociais, 
                  garantindo presença digital consistente e engajamento crescente.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              Dias 31-60: Expansão Regional
            </h3>
            
            <div className="space-y-4 ml-13">
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Marketing Regional</h4>
                <p className="text-gray-400">
                  Implementação de ações estratégicas para atingir cidades vizinhas, 
                  expandindo seu alcance e base de clientes.
                </p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Material Gráfico Regional</h4>
                <p className="text-gray-400">
                  Desenvolvimento de peças gráficas específicas para a região, 
                  considerando particularidades e preferências locais.
                </p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Campanhas Digitais Regionais</h4>
                <p className="text-gray-400">
                  Implementação de campanhas de mídia digital com segmentação 
                  geográfica para maximizar resultados na região.
                </p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Relatório de Resultados</h4>
                <p className="text-gray-400">
                  Divulgação e análise dos primeiros resultados obtidos, com 
                  ajustes estratégicos para otimizar o desempenho das campanhas.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-white font-bold">3</span>
            </div>
            Dias 61-90: Consolidação e Crescimento Nacional
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-13">
            <div className="card p-4">
              <h4 className="font-semibold mb-2">Landing Pages Otimizadas</h4>
              <p className="text-gray-400">
                Produção de páginas de destino específicas para diferentes campanhas 
                de tráfego, maximizando a taxa de conversão.
              </p>
            </div>
            
            <div className="card p-4">
              <h4 className="font-semibold mb-2">Geração de Leads Nacional</h4>
              <p className="text-gray-400">
                Implementação de diferentes estratégias para captação de leads 
                qualificados em todo o território nacional.
              </p>
            </div>
            
            <div className="card p-4">
              <h4 className="font-semibold mb-2">Marketing Nacional</h4>
              <p className="text-gray-400">
                Expansão das campanhas de marketing para alcance nacional, 
                posicionando sua marca em novos mercados estratégicos.
              </p>
            </div>
            
            <div className="card p-4">
              <h4 className="font-semibold mb-2">Planejamento Estratégico</h4>
              <p className="text-gray-400">
                Análise completa dos resultados e elaboração de plano estratégico 
                para escala nacional nos próximos meses.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Investimento */}
      <section className="section mb-3">
        <h2>Investimento Mensal</h2>
        <p className="mb-3">
          Desenvolvemos um plano de marketing digital completo com investimento mensal 
          acessível e foco em resultados rápidos para o seu negócio.
        </p>

        <div className="flex justify-center">
          <div className="card p-8 hover-lift max-w-2xl w-full bg-gradient-to-br from-primary-800 to-primary-900 border border-accent-500 shadow-lg">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-accent-500 text-white rounded-full text-sm font-semibold mb-4">PLANO COMPLETO DE MARKETING</span>
              <h3 className="text-2xl font-bold mb-2">Investimento Mensal</h3>
              <div className="flex items-center justify-center">
                <div className="text-5xl font-bold text-white mb-2">R$ 1.500,00</div>
                <span className="text-accent-500 ml-2 font-semibold">/mês</span>
              </div>
              <p className="text-gray-300 text-lg">Contrato de 3 meses</p>
            </div>
            
            <div className="bg-primary-800/50 p-6 rounded-xl mb-6 border border-primary-700">
              <h4 className="font-semibold mb-4 text-center text-xl text-accent-500">Vantagens do Plano de 90 Dias</h4>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-accent-500 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Gestão completa de redes sociais e marketing digital</span>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-500 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Produção de conteúdo exclusivo para suas redes sociais</span>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-500 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Campanhas de tráfego pago com criação de landing pages</span>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-500 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Expansão regional e nacional com estratégias segmentadas</span>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-500 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Relatórios mensais detalhados de performance e resultados</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center">
                <svg className="text-accent-500 mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>Garantia de satisfação de 30 dias</span>
              </div>
              
              <button className="px-6 py-3 bg-accent-500 hover:bg-accent-600 transition-colors rounded-md font-semibold text-white">
                Contratar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Garantias */}
      <section className="section mb-3">
        <h2>Nossas Garantias</h2>
        <p className="mb-3">
          Acreditamos no valor da nossa solução e oferecemos garantias reais 
          para minimizar riscos e maximizar sua confiança.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Garantia de Satisfação</h3>
            <p className="text-gray-300">
              Se nos primeiros 30 dias você não estiver completamente satisfeito, 
              encerramos o contrato, sem questionamentos.
            </p>
          </div>
          
          <div className="card p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="9" x2="15" y2="15"></line>
                <line x1="15" y1="9" x2="9" y2="15"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Sem Contratos Longos</h3>
            <p className="text-gray-300">
              Após o período de implementação, você pode cancelar a assinatura 
              a qualquer momento, sem multas ou taxas adicionais.
            </p>
          </div>
          
          <div className="card p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Experiência Comprovada</h3>
            <p className="text-gray-300">
              Somos profissionais com mais de 10 anos de experiência no mercado local, 
              conhecendo profundamente as particularidades e oportunidades da região.
            </p>
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="section">
        <div className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 rounded-xl p-8 border border-accent-500 shadow-lg text-center">
          <div className="mb-2">
            <span className="inline-block px-4 py-1 bg-accent-500 text-white rounded-full text-sm font-semibold">VAMOS CONVERSAR?</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">Pronto para Transformar seu Negócio?</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Agende uma reunião e vamos tomar um café para concretizar essa parceria de sucesso!            
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
            <a href="https://wa.me/5567982052940" target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg hover:bg-accent-600 transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Falar com Consultor
            </a>
            <a href="https://wa.me/5567982052940" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg bg-green-600 hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-bold text-white shadow-lg border-2 border-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              WhatsApp
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-accent-500 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#10b981" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span>WhatsApp: (67) 98205-2940</span>
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
        <NextPageButton nextPage="/" buttonText="Voltar para o Início" />
      </div>
    </div>
  );
};

export default PlanoValor;
