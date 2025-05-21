import NextPageButton from '../components/NextPageButton';

const ComportamentoLocal = () => {
  return (
    <div className="animate-fade-in">
      {/* Título da Página */}
      <div className="mb-12 text-center">
        <h1>Comportamento Local</h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          Análise do comportamento dos consumidores e estabelecimentos em Dourados-MS
        </p>
      </div>

      {/* Comportamento do Consumidor */}
      <section className="section mb-12">
        <h2>O Consumidor de Dourados-MS</h2>
        <p className="mb-6">
          Compreender o comportamento do consumidor local é fundamental para desenvolver 
          estratégias eficazes de automação que atendam às expectativas e necessidades reais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
            <h3 className="text-xl font-semibold mb-4">Perfil Demográfico</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-accent-500 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="font-semibold">População jovem e universitária</span>
                  <p className="text-gray-400 mt-1">
                    Forte presença de estudantes devido às universidades locais, com preferência 
                    por experiências digitais e pagamentos eletrônicos.
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
                  <span className="font-semibold">Classe média em crescimento</span>
                  <p className="text-gray-400 mt-1">
                    Aumento do poder aquisitivo nos últimos anos, com maior disposição para 
                    gastar em experiências gastronômicas diferenciadas.
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
                  <span className="font-semibold">Influência do agronegócio</span>
                  <p className="text-gray-400 mt-1">
                    Forte presença de profissionais ligados ao agronegócio, com valorização 
                    de produtos locais e atendimento personalizado.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
            <h3 className="text-xl font-semibold mb-4">Hábitos de Consumo</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-purple-500 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="font-semibold">Crescimento do delivery</span>
                  <p className="text-gray-400 mt-1">
                    Aumento de 65% nos pedidos por delivery nos últimos 2 anos, com forte 
                    dependência de aplicativos de terceiros.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-purple-500 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="font-semibold">Valorização da experiência</span>
                  <p className="text-gray-400 mt-1">
                    Consumidores buscam não apenas boa comida, mas experiências completas, 
                    incluindo ambiente, atendimento e conveniência.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-purple-500 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="font-semibold">Adoção digital crescente</span>
                  <p className="text-gray-400 mt-1">
                    78% dos consumidores preferem estabelecimentos que oferecem opções 
                    digitais de cardápio, pedido e pagamento.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-4">Expectativas em Transformação</h3>
          <p className="text-gray-300">
            A pesquisa com consumidores locais revelou uma mudança significativa nas expectativas 
            em relação aos estabelecimentos gastronômicos. Há uma crescente demanda por:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-primary-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Conveniência Digital</h4>
              <p className="text-gray-400">
                Cardápios digitais, pedidos online e pagamentos sem contato são cada vez mais 
                valorizados e esperados.
              </p>
            </div>
            
            <div className="bg-primary-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Personalização</h4>
              <p className="text-gray-400">
                Experiências e ofertas personalizadas com base em histórico de pedidos e 
                preferências individuais.
              </p>
            </div>
            
            <div className="bg-primary-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Transparência</h4>
              <p className="text-gray-400">
                Informações claras sobre ingredientes, tempo de preparo e status do pedido 
                em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dores e Desafios */}
      <section className="section mb-12">
        <h2>Dores e Desafios dos Estabelecimentos</h2>
        <p className="mb-8">
          Os estabelecimentos de food service em Dourados-MS enfrentam desafios específicos 
          que impactam diretamente sua operação e rentabilidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">Principais Dores Identificadas</h3>
            
            <div className="space-y-6">
              <div className="card p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold">Altas Taxas de Marketplaces</h4>
                </div>
                <p className="text-gray-400">
                  Taxas de 25-30% cobradas por aplicativos de delivery comprometem significativamente 
                  a margem de lucro dos estabelecimentos.
                </p>
                <div className="mt-3">
                  <div className="text-sm text-gray-500">Impacto na rentabilidade</div>
                  <div className="w-full bg-primary-700 rounded-full h-2 mt-1">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="card p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold">Sobrecarga Operacional</h4>
                </div>
                <p className="text-gray-400">
                  Proprietários e equipes reduzidas acumulam múltiplas funções, comprometendo 
                  a qualidade do atendimento e a gestão estratégica.
                </p>
                <div className="mt-3">
                  <div className="text-sm text-gray-500">Impacto na operação</div>
                  <div className="w-full bg-primary-700 rounded-full h-2 mt-1">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="card p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold">Barreira Tecnológica</h4>
                </div>
                <p className="text-gray-400">
                  Dificuldade em adotar e utilizar novas tecnologias devido à falta de 
                  conhecimento técnico e suporte adequado.
                </p>
                <div className="mt-3">
                  <div className="text-sm text-gray-500">Impacto na inovação</div>
                  <div className="w-full bg-primary-700 rounded-full h-2 mt-1">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Desafios Específicos do Mercado Local</h3>
            

            
            <div className="space-y-6">
              <div className="card p-4">
                <h4 className="font-semibold mb-3">Competição com Grandes Redes</h4>
                <p className="text-gray-400">
                  Entrada crescente de franquias nacionais no mercado local, com maior poder 
                  de investimento em tecnologia e marketing.
                </p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-3">Logística Regional</h4>
                <p className="text-gray-400">
                  Desafios logísticos específicos da região, como distância de grandes centros 
                  e dependência de fornecedores locais com limitações.
                </p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-3">Cultura de Atendimento Tradicional</h4>
                <p className="text-gray-400">
                  Resistência à mudança de processos tradicionais, especialmente em estabelecimentos 
                  mais antigos e consolidados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oportunidades */}
      <section className="section">
        <h2>Oportunidades de Transformação</h2>
        <p className="mb-8">
          A análise do comportamento local revela oportunidades significativas para soluções 
          de automação que atendam às necessidades específicas do mercado de Dourados-MS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Independência Digital</h3>
            <p className="text-gray-300">
              Desenvolvimento de canais próprios de venda digital para reduzir dependência 
              de marketplaces e suas altas taxas.
            </p>
            <div className="mt-4">
              <div className="badge badge-accent">Alto Impacto</div>
            </div>
          </div>
          
          <div className="card p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Automação Operacional</h3>
            <p className="text-gray-300">
              Redução da sobrecarga operacional através de automação de processos repetitivos 
              e integração de sistemas.
            </p>
            <div className="mt-4">
              <div className="badge badge-accent">Alto Impacto</div>
            </div>
          </div>
          
          <div className="card p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Experiência Personalizada</h3>
            <p className="text-gray-300">
              Utilização de dados para oferecer experiências personalizadas e fidelizar 
              clientes com ofertas relevantes.
            </p>
            <div className="mt-4">
              <div className="badge badge-accent">Alto Impacto</div>
            </div>
          </div>
        </div>
        
        <div className="bg-primary-800 rounded-xl p-8 border border-primary-700 mt-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Potencial de Transformação</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Antes da Automação</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-red-500 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <span>25-30% do faturamento comprometido com taxas de marketplaces</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-red-500 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <span>4-6 horas diárias em tarefas administrativas manuais</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-red-500 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <span>Tempo médio de atendimento de 12-15 minutos por mesa</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-red-500 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <span>Desperdício de 15-20% em insumos por falta de controle</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Após a Automação</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal-500 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Redução para 10-15% em taxas com canal próprio de vendas</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-teal-500 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Redução para 1-2 horas diárias em tarefas administrativas</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-teal-500 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Tempo médio de atendimento reduzido para 5-7 minutos</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-teal-500 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Redução do desperdício para 5-8% com controle de estoque</span>
                </li>
              </ul>
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
        <NextPageButton nextPage="/plano-go-to-market" />
      </div>
    </div>
  );
};

export default ComportamentoLocal;
