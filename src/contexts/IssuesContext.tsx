import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface Issue {
  id: string
  url: string
  title: string
  body: string
  created_at: string
}

interface IssuesContextType {
  issues: Issue[]
  numberOfIssues: number
  fetchIssuesData: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const user = 'rocketseat-education'
  const [issues, setIssues] = useState<Issue[]>([])
  const [numberOfIssues, setNumberOfIssues] = useState(0)

  const fetchIssuesData = useCallback(async (query?: string) => {
    if (query) {
      const response = await api.get(`search/issues?q=${query}:user:${user}`)

      setIssues(response.data.items)
      setNumberOfIssues(response.data.total_count)
    } else {
      const response = await api.get(`search/issues?q=user:${user}`)

      setIssues(response.data.items)
      setNumberOfIssues(response.data.total_count)
    }
  }, [])

  useEffect(() => {
    fetchIssuesData()
  }, [fetchIssuesData])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        numberOfIssues,
        fetchIssuesData,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
