export type ShopData = {
  name: string
  adress: string
  phone: string[]
  insta: string
  whatsapp: string
  workingHours: {
    weekdays: string
    saturday: string
    sunday?: string
  }
  geo: string
  warning?: string
}
