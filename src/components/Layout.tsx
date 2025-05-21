import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: ReactNode }) => {
  
  return (
    <div className="layout">
      {/* Header - Only logo, no menu */}
      <header className="header">
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
          <Link to="/" className="header__logo">
            <img src="/logoperfil.png" alt="Very Foods Logo" className="h-10" />
          </Link>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="main">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="footer__logo mb-4 inline-block">
                <img src="/logoperfil.png" alt="Very Foods Logo" className="h-10" />
              </Link>
              <p className="text-gray-400 mb-4">
                Automação acessível e escalável para restaurantes e lanchonetes de todos os portes, 
                com foco em redução de custos operacionais e aumento de vendas.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/perfilmarketingms/" className="text-gray-400 hover:text-accent-500 transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Navegação</h3>
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-gray-400 hover:text-accent-500 transition-colors">Início</Link>
              </nav>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <p className="text-gray-400 flex items-start">
                  <svg className="mr-2 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>R. Hayel Bon Faker, 2630 - Sala 07<br />Dourados, MS - Brasil</span>
                </p>
                <p className="text-gray-400 flex items-center">
                  <svg className="mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>67 982052940</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-700 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Perfil Marketing. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      

    </div>
  );
};

export default Layout;
