interface Member
{
  id: string
  name: string
  image: string
  role: string
  admin: boolean
  bio: string
  favTopics: string[]
}

export interface MemberListed
{
  id: string
  name: string
  image: string
  role: string
  bio: string
  favTopics: string[]
}

export default Member