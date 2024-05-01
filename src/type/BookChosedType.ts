export type BookChosedType = {
  description: string | description
  links: Link[]
  title: string
  covers: number[]
  subject_places: string[]
  first_publish_date: string
  subject_people: string[]
  key: string
  authors: Author[]
  excerpts: Excerpt[]
  subjects: string[]
  type: Type3
  subject_times: string[]
  latest_revision: number
  revision: number
  created: Created
  last_modified: LastModified
}

export type Link = {
  title: string
  url: string
  type: Type
}

export type Type = {
  key: string
}

export type Author = {
  author: Author2
  type: Type2
}

export type Author2 = {
  key: string
}

export type Type2 = {
  key: string
}

export type Excerpt = {
  pages?: string
  excerpt: string
  author: Author3
  comment?: string
}

export type Author3 = {
  key: string
}

export type Type3 = {
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

export type description = {
  value: string
}
