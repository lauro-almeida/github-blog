import { dateFormatter } from '../../../../utils/formatter'
import { IssueContent } from './styles'

interface IssueCoverProps {
  title: string
  createdAt: string
  body: string
  url: string
}

export function IssueCover({ title, body, url, createdAt }: IssueCoverProps) {
  return (
    <IssueContent>
      <header>
        <h2>{title}</h2>
        <span>{dateFormatter.format(new Date(createdAt))}</span>
      </header>
      <p>{body ?? 'Não informado'}</p>
    </IssueContent>
  )
}
