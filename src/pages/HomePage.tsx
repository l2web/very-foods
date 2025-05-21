import { Link } from 'react-router-dom';
import { useRef } from 'react';

const HomePage = () => {
  const iniciarJornadaRef = useRef<HTMLElement>(null);
  
  const scrollToIniciarJornada = (e: React.MouseEvent) => {
    e.preventDefault();
    iniciarJornadaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero mb-12">
        <div className="hero__content">
          <h1 className="hero__title">Very Foods: Automação Inteligente para Restaurantes em Dourados-MS</h1>
          <p className="hero__subtitle">Transformamos o seu negócio com soluções de marketing adaptadas à realidade local</p>
          <div className="hero__cta">
            <button onClick={scrollToIniciarJornada} className="btn btn-primary btn-xl">Conheça nossa solução de marketing</button>
          </div>
        </div>
      </section>

      {/* Visão Geral */}
      <section className="section">
        <div className="text-center mb-12">
          <h2>Automação Acessível para Todos os Portes</h2>
          <p className="max-w-3xl mx-auto">
            A Very Foods oferece soluções de automação escaláveis para restaurantes e lanchonetes, 
            com foco em redução de custos operacionais e aumento de vendas através de tecnologia 
            adaptada à realidade de Dourados-MS.
          </p>
        </div>

        {/* Estatísticas Destacadas */}
        <div className="stats">
          <div className="stat stat--accent">
            <div className="stat__value">90%</div>
            <div className="stat__label">dos estabelecimentos são microempresas</div>
          </div>
          <div className="stat stat--teal">
            <div className="stat__value">30%</div>
            <div className="stat__label">do faturamento virá do canal digital em 2025</div>
          </div>
          <div className="stat stat--purple">
            <div className="stat__value">40%</div>
            <div className="stat__label">de aumento no lucro com automação</div>
          </div>
        </div>
      </section>

      {/* Destaques da Pesquisa */}
      <section id="pesquisa-estrategica" className="section bg-primary-800 rounded-2xl p-8 mt-12">
        <div className="text-center mb-8">
          <h2>Baseado em Pesquisa Estratégica Regional</h2>
          <p className="max-w-3xl mx-auto">
            Nossa solução foi desenvolvida a partir de uma pesquisa aprofundada do mercado local, 
            identificando necessidades específicas dos estabelecimentos de Dourados-MS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card hover-lift p-6">
            <div className="card-body">
              <h3 className="text-xl font-bold mb-4">Perfil Regional</h3>
              <p>
                Análise detalhada do mercado de food service em Dourados, com mais de 150 estabelecimentos 
                gastronômicos e predominância de microempresas (90%).
              </p>
              <button onClick={scrollToIniciarJornada} className="text-accent-500 font-medium mt-4 inline-block hover:underline border-0 bg-transparent p-0 cursor-pointer text-left">
                Saiba mais →
              </button>
            </div>
          </div>

          <div className="card hover-lift p-6">
            <div className="card-body">
              <h3 className="text-xl font-bold mb-4">Dores Identificadas</h3>
              <p>
                Principais desafios dos estabelecimentos locais, desde sobrecarga operacional até 
                dependência de marketplaces e suas altas taxas.
              </p>
              <button onClick={scrollToIniciarJornada} className="text-accent-500 font-medium mt-4 inline-block hover:underline border-0 bg-transparent p-0 cursor-pointer text-left">
                Saiba mais →
              </button>
            </div>
          </div>

          <div className="card hover-lift p-6">
            <div className="card-body">
              <h3 className="text-xl font-bold mb-4">Oportunidades</h3>
              <p>
                Potencial de crescimento com automação adaptada, reduzindo custos operacionais em até 30% 
                e aumentando a eficiência no atendimento.
              </p>
              <button onClick={scrollToIniciarJornada} className="text-accent-500 font-medium mt-4 inline-block hover:underline border-0 bg-transparent p-0 cursor-pointer text-left">
                Saiba mais →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada para Navegação */}
      <section ref={iniciarJornadaRef} id="iniciar-jornada" className="section text-center mt-12">
        <h2>Explore Nossa Estratégia Completa</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Navegue pelo estudo estratégico e descubra como a Very Foods pode transformar seu negócio.
        </p>
        <Link to="/contexto-regional" className="btn btn-primary btn-lg">Iniciar Jornada</Link>
      </section>
    </div>
  );
};

export default HomePage;
