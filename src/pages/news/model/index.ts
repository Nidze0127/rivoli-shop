type LocalizedContent = {
  title: string
  shortDesc: string
  fullDesc: string
}

export type NewsDetails = {
  [key: string]: any
  id: string
  ru: LocalizedContent
  en: LocalizedContent
  kz: LocalizedContent
  date: string
  img: string
}
