export type AuthorsSearchResultType = {
  numFound: number
  start: number
  numFoundExact: boolean
  docs: Author[]
}

export type Author = {
  alternate_names?: string[]
  birth_date?: string
  key: string
  name: string
  top_subjects: string[]
  top_work: string
  type: string
  work_count: number
  _version_: number
}
