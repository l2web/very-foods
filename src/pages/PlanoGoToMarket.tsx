import NextPageButton from '../components/NextPageButton';

const PlanoGoToMarket = () => {
  return (
    <div className="animate-fade-in">
      {/* Título da Página */}
      <div className="mb-12 text-center">
        <h1>Plano de Go-to-Market</h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          Estratégia completa para lançamento e crescimento da Very Foods em Dourados-MS
        </p>
      </div>

      {/* Visão Geral */}
      <section className="section mb-12">
        <h2>Visão Estratégica</h2>
        <p className="mb-6">
          Nosso plano de go-to-market foi desenvolvido com base na pesquisa estratégica 
          do mercado local, considerando as características específicas dos estabelecimentos 
          de Dourados-MS e região.
        </p>

        <div className="bg-primary-800 rounded-xl p-8 border border-primary-700">
          <h3 className="text-xl font-semibold mb-6 text-center">Objetivos Estratégicos</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">Penetração de Mercado</h4>
              <p className="text-gray-300">
                Conquistar 15% dos estabelecimentos de food service em Dourados-MS 
                nos primeiros 12 meses de operação.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">Retenção de Clientes</h4>
              <p className="text-gray-300">
                Alcançar taxa de retenção de 85% após 12 meses, com base em resultados 
                mensuráveis e suporte dedicado.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">Expansão Regional</h4>
              <p className="text-gray-300">
                Expandir para cidades vizinhas a partir do 6º mês, alcançando 5 municípios 
                adicionais até o final do primeiro ano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estratégia de Posicionamento */}
      <section className="section mb-12">
        <h2>Posicionamento Estratégico</h2>
        <p className="mb-8">
          A Very Foods se posicionará como a solução de automação mais adaptada à realidade 
          dos pequenos e médios estabelecimentos de Dourados-MS, com foco em resultados 
          rápidos e suporte local.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
            <h3 className="text-xl font-semibold mb-4">Diferenciação</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-accent-500 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="font-semibold">Presença Local</span>
                  <p className="text-gray-400 mt-1">
                    Equipe baseada em Dourados, com suporte presencial e conhecimento 
                    profundo do mercado regional.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-accent-500 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="font-semibold">Modelo Freemium Acessível</span>
                  <p className="text-gray-400 mt-1">
                    Entrada gratuita com funcionalidades essenciais e crescimento modular 
                    conforme as necessidades do estabelecimento.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-accent-500 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="font-semibold">Foco em Resultados Rápidos</span>
                  <p className="text-gray-400 mt-1">
                    Implementação em etapas com priorização de funcionalidades que geram 
                    retorno imediato sobre investimento.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
            <h3 className="text-xl font-semibold mb-4">Proposta de Valor</h3>
            <p className="text-gray-300 mb-4">
              "Automação que entende seu negócio: soluções locais para resultados reais"
            </p>
            
            <div className="space-y-4">
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Para Microempresas (90% do mercado)</h4>
                <p className="text-gray-400">
                  Solução acessível que reduz dependência de marketplaces e automatiza 
                  processos operacionais básicos, com suporte presencial.
                </p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Para Pequenas Empresas (6% do mercado)</h4>
                <p className="text-gray-400">
                  Automação completa com integração de canais e análise de dados para 
                  otimização de cardápio e precificação.
                </p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Para Grandes e Médias Empresas (4% do mercado)</h4>
                <p className="text-gray-400">
                  Soluções personalizadas com integração total de sistemas e estratégias 
                  avançadas de marketing digital e fidelização.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

 

      {/* Plano de 90 Dias */}
      <section className="section mb-12">
        <h2>Plano de Execução em 90 Dias</h2>
        <p className="mb-8">
          Desenvolvemos um cronograma detalhado para os primeiros 90 dias de implementação 
          da Very Foods no mercado de Dourados-MS, com foco em resultados rápidos e mensuráveis.
        </p>

        <div className="bg-primary-800 rounded-xl p-8 border border-primary-700">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-item__marker">
                <div className="timeline-item__marker-circle bg-accent-500">1</div>
                <div className="timeline-item__marker-line"></div>
              </div>
              <div className="timeline-item__content">
                <h4 className="timeline-item__title">Dias 1-30: Lançamento e Primeiras Adesões</h4>
                <div className="timeline-item__description">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Produção de vídeos para criativos de tráfego pago</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Criação e configuração do Instagram do cliente</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Desenvolvimento de todo material gráfico digital</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Administração e postagens na rede social</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-item__marker">
                <div className="timeline-item__marker-circle bg-accent-500">2</div>
                <div className="timeline-item__marker-line"></div>
              </div>
              <div className="timeline-item__content">
                <h4 className="timeline-item__title">Dias 31-60: Expansão e Otimização</h4>
                <div className="timeline-item__description">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Ações de marketing para atingir cidades vizinhas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Desenvolvimento de material gráfico para região</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Implementação de campanhas de mídia digital regional</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Divulgação dos primeiros resultados obtidos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-item__marker">
                <div className="timeline-item__marker-circle bg-accent-500">3</div>
                <div className="timeline-item__marker-line"></div>
              </div>
              <div className="timeline-item__content">
                <h4 className="timeline-item__title">Dias 61-90: Consolidação e Crescimento</h4>
                <div className="timeline-item__description">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Produção de landing pages para campanhas de tráfego</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Implementação de diferentes formas de gerar leads a nível nacional</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Expansão das campanhas de marketing para alcance nacional</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Análise de resultados e planejamento para escala nacional</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas de Sucesso */}
      <section className="section">
        <h2>Métricas de Sucesso</h2>
        <p className="mb-8">
          Estabelecemos indicadores claros para mensurar o sucesso da implementação da 
          Very Foods no mercado de Dourados-MS, com foco em resultados tangíveis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">KPIs de Negócio</h3>
            
            <div className="space-y-6">
              <div className="card p-4">
                <h4 className="font-semibold mb-3">Aquisição de Clientes</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>25 novos estabelecimentos nos primeiros 90 dias</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Taxa de conversão de 30% das demonstrações para clientes pagantes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Custo de aquisição de cliente (CAC) inferior a R$ 500</span>
                  </li>
                </ul>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-3">Retenção e Crescimento</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Taxa de retenção de 90% nos primeiros 90 dias</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>40% dos clientes gratuitos migrando para planos pagos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>NPS (Net Promoter Score) superior a 50</span>
                  </li>
                </ul>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-3">Financeiros</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>MRR (Monthly Recurring Revenue) de R$ 5.000 ao final dos 90 dias</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>LTV (Lifetime Value) estimado em 24x o valor mensal do plano</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-500 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Relação LTV:CAC superior a 3:1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">KPIs de Impacto nos Clientes</h3>
            
            <div className="bg-primary-800 rounded-xl p-6 border border-primary-700 mb-6">
              <h4 className="font-semibold mb-4">Resultados Esperados para Estabelecimentos</h4>
              <p className="text-gray-300 mb-4">
                Nosso compromisso é gerar resultados mensuráveis para os estabelecimentos 
                que adotarem a Very Foods, com métricas claras de sucesso:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-32 text-right mr-4">
                    <span className="font-semibold">Redução de custos</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-full bg-primary-700 rounded-full h-4">
                      <div className="bg-accent-500 h-4 rounded-full" style={{width: '30%'}}>
                        <span className="px-2 text-xs h-4 flex items-center">30%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-32 text-right mr-4">
                    <span className="font-semibold">Aumento de vendas</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-full bg-primary-700 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full" style={{width: '20%'}}>
                        <span className="px-2 text-xs h-4 flex items-center">20%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-32 text-right mr-4">
                    <span className="font-semibold">Eficiência operacional</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-full bg-primary-700 rounded-full h-4">
                      <div className="bg-teal-500 h-4 rounded-full" style={{width: '40%'}}>
                        <span className="px-2 text-xs h-4 flex items-center">40%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-32 text-right mr-4">
                    <span className="font-semibold">Satisfação do cliente</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-full bg-primary-700 rounded-full h-4">
                      <div className="bg-amber-500 h-4 rounded-full" style={{width: '25%'}}>
                        <span className="px-2 text-xs h-4 flex items-center">25%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

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
        <NextPageButton nextPage="/plano-valor" />
      </div>
    </div>
  );
};

export default PlanoGoToMarket;
