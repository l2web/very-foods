const GuidedNavigation = () => {
  return (
    <div className="guided-navigation">
      <div className="container">
        <div className="guided-navigation__inner">
          <div className="guided-navigation__prev">
            <a href="#" className="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Anterior
            </a>
          </div>
          
          <div className="guided-navigation__pagination">
            <span className="guided-navigation__page-number">Página 1 de 6</span>
          </div>
          
          <div className="guided-navigation__next">
            <a href="#" className="btn btn-primary">
              Próximo
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidedNavigation;
