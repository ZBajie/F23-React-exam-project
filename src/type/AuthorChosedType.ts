export type AuthorChosedType = {
  photos: number[]
  key: string
  personal_name: string
  bio: string
  source_records: string[]
  title: string
  death_date: string
  name: string
  type: Type
  remote_ids: RemoteIds
  birth_date: string
  links: Link[] | undefined
  alternate_names: string[]
  latest_revision: number
  revision: number
  created: Created
  last_modified: LastModified
}

export type Type = {
  key: string
}

export type RemoteIds = {
  viaf: string
  goodreads: string
  storygraph: string
  isni: string
  librarything: string
  amazon: string
  wikidata: string
}

export type Link = {
  title: string
  url: string
  type: Type2
}

export type Type2 = {
  key: string
}

export type Created = {
  type: string
  value: string
}

export type LastModified = {
  type: string
  value: string
}
