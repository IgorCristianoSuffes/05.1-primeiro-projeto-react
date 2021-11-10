import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

interface RepositoryParms {
    repository: string;
    profile:string
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    }
}

interface Issue {
    id: number;
    title: string;
    user: {
        login: string;
    }
}

const Repository: React.FC = () => {
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    const params = useParams() as RepositoryParms;

    const repositoryParms = params.profile+'/'+params.repository;

    useEffect(() => {

        async function loadDate():  Promise<void> {
            const [repository, issues] = await Promise.all([
                api.get(`repos/${repositoryParms}`),
                api.get(`repos/${repositoryParms}/issues`)
            ]);

            //setRepository(repository);
            //setIssues(issues);
            console.log(issues);
            console.log(repository);

            
        }

        loadDate();

    }, [repositoryParms]);
    return (
            <>
                <Header>
                    <img src={logoImg} alt="Github Explorer" />
                    <Link to="/">
                        <FiChevronLeft size={16} />
                        Voltar
                    </Link>
                </Header>

                { repository && (
                    <RepositoryInfo>
                        <header>
                            <img
                                src={repository.owner.avatar_url}
                                alt={repository.owner.login}
                            />
                            <div>
                                <strong>
                                    {repository.full_name}
                                </strong>
                                <p>{repository.description}</p>
                            </div>
                        </header>
                        <ul>
                            <li>
                                <strong>
                                    {repository.stargazers_count}
                                </strong>
                                <span>
                                    Stars
                                </span>
                            </li>
                            <li>
                                <strong>
                                    {repository.forks_count}
                                </strong>
                                <span>
                                    Forks
                                </span>
                            </li>
                            <li>
                                <strong>
                                    {repository.open_issues_count}
                                </strong>
                                <span>
                                    Issues abertas
                                </span>
                            </li>
                        </ul>
                    </RepositoryInfo>
                ) }

                <Issues>
                    <Link
                        to={`asdasdasd`}>
                        <div>
                            <strong>asdasdasd</strong>
                            <p>asdasdasdaaaaaaaaaaaa</p>
                        </div>
    
                        <FiChevronRight size={20} />
                    </Link>
                </Issues>
            </>
        );
}

export default Repository;