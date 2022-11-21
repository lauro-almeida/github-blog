import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface UserContextType {
  user: string
  avatar: string
  description: string
  name: string
  company: string
  followers: number
  login: string
  github: string
  fetchUserData: () => Promise<void>
}

export const UserContext = createContext({} as UserContextType)

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const user = 'rocketseat-education'
  const [avatar, setAvatar] = useState('')
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [followers, setFollowers] = useState(0)
  const [login, setLogin] = useState('')
  const [github, setGithub] = useState('')

  const fetchUserData = useCallback(async () => {
    const response = await api.get(`users/${user}`)

    const {
      avatar_url: avatarURL,
      bio,
      name,
      company,
      followers,
      login,
      html_url: htmlURL,
    } = response.data
    setAvatar(avatarURL)
    setDescription(bio)
    setName(name)
    setCompany(company)
    setFollowers(followers)
    setLogin(login)
    setGithub(htmlURL)
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  return (
    <UserContext.Provider
      value={{
        user,
        avatar,
        description,
        name,
        company,
        followers,
        login,
        github,
        fetchUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
