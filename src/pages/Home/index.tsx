import {
  FormContainer,
  Header,
  HomeContainer,
  InfosContainer,
  IssuesContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { IssueCover } from './components/IssueCover'
import { Issue, IssuesContext } from '../../contexts/IssuesContext'
import { UserContext } from '../../contexts/UserContext'

import { useContextSelector } from 'use-context-selector'

export function Home() {
  const [query, setQuery] = useState('')

  const { name, avatar, company, description, followers, login, github } =
    useContext(UserContext)

  const numberOfIssues = useContextSelector(IssuesContext, (context) => {
    return context.numberOfIssues
  })

  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  const fetchIssuesData = useContextSelector(IssuesContext, (context) => {
    return context.fetchIssuesData
  })

  function handleInputChange(event: FormEvent<HTMLInputElement>) {
    setQuery((event.target as HTMLInputElement).value)
  }

  function handleFetchSearch(event: FormEvent) {
    event.preventDefault()
    fetchIssuesData(query)
  }

  useEffect(() => {
    if (query === '') {
      fetchIssuesData()
    }
  }, [query, fetchIssuesData])

  return (
    <HomeContainer>
      <Header>
        <div>
          <img src={avatar} alt="" />
        </div>
        <div>
          <h1>{name ?? 'Não Informado'}</h1>
          <p>{description ?? 'Não informado'}</p>
          <InfosContainer>
            <div>
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <h4>{login}</h4>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <h4>{company ?? 'Não informado'}</h4>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <h4>{followers ?? 'Não informado'} seguidores</h4>
            </div>
          </InfosContainer>
        </div>
        <div>
          <a href={github} target="_blank" rel="noreferrer">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </Header>
      <FormContainer>
        <header>
          <h3>Publicações</h3>
          <span>{numberOfIssues} publicações</span>
        </header>
        <form onSubmit={handleFetchSearch}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            onChange={handleInputChange}
            value={query}
          />
        </form>
      </FormContainer>
      <IssuesContainer>
        {issues.map((issue: Issue) => {
          return (
            <Link
              key={issue.id}
              to={`issue/${issue.url.split('repos/')[1]}`}
              state={{ data: issue }}
            >
              <IssueCover
                body={issue.body}
                title={issue.title}
                createdAt={issue.created_at}
                url={issue.url}
              />
            </Link>
          )
        })}
      </IssuesContainer>
    </HomeContainer>
  )
}
