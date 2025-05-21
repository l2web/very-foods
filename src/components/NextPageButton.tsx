import React from 'react';
import { Link } from 'react-router-dom';

interface NextPageButtonProps {
  nextPage: string;
  buttonText?: string;
}

const NextPageButton: React.FC<NextPageButtonProps> = ({ 
  nextPage, 
  buttonText = "Próximo" 
}) => {
  // Função para rolar para o topo da página quando o link for clicado
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex justify-center my-6 next-page-navigation">
      <Link 
        to={nextPage} 
        onClick={handleClick}
        className="btn btn-primary btn-lg"
      >
        {buttonText}
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
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>
    </div>
  );
};

export default NextPageButton;
