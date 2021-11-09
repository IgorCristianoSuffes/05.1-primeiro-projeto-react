import React from "react";
import { useParams, Link } from "react-router-dom";
import { Header, RepositoryInfo } from './styles';
import logoImg from '../../assets/logo.svg'
import { FiChevronLeft } from 'react-icons/fi';

interface RepositoryParms {
    repository: string;
    profile:string
}

const Repository: React.FC = () => {
    const params = useParams() as RepositoryParms;
    return (
            <>
                <Header>
                    <img src={logoImg} alt="Github Explorer" />
                    <Link to="/">
                        <FiChevronLeft size={16} />
                        Voltar
                    </Link>
                </Header>

                <RepositoryInfo>
                    <header>
                        <img src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" alt="Rocketseat" />
                        <div>
                            <strong>
                                {params.profile+'/'+params.repository}
                            </strong>
                            <p>Descrição do repositório</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>
                                1808
                            </strong>
                            <span>
                                Stars
                            </span>
                        </li>
                        <li>
                            <strong>
                                48
                            </strong>
                            <span>
                                Forks
                            </span>
                        </li>
                        <li>
                            <strong>
                                67
                            </strong>
                            <span>
                                Issues abertas
                            </span>
                        </li>
                    </ul>
                </RepositoryInfo>

                <Issues>
                    
                </Issues>
            </>
        );
}

export default Repository;