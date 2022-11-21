import { NavLink, useLocation } from 'react-router-dom'
import { Header, PostContainer, PostContent } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { dateFormatter } from '../../utils/formatter'

export function Issue() {
  const location = useLocation()
  const data = location.state.data
  const {
    html_url: issueHTML,
    comments: issueComments,
    title: issueTitle,
    body: issueBody,
    created_at: createdAt,
    user: userIssue,
  } = data

  const issueDate = dateFormatter.format(new Date(createdAt))
  const issueUser = userIssue.login

  const markdown = issueBody

  return (
    <PostContainer>
      <Header>
        <div>
          <div>
            <NavLink to="/">
              <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
            </NavLink>
          </div>
          <div>
            <a href={issueHTML} target="_blank" rel="noreferrer">
              VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
        <h1>{issueTitle}</h1>
        <div>
          <div>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span>{issueUser}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{issueDate}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{issueComments} Comentários</span>
          </div>
        </div>
      </Header>
      <PostContent>
        {issueBody ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        ) : (
          'Não informado'
        )}
      </PostContent>
    </PostContainer>
  )
}
