export type ShopData = {
  name: string
  address: string
  phone: string[]
  insta: string
  whatsapp: string
  workingHours: {
    weekdays: string
    saturday?: string
    sunday?: string
  }
  geo: string
  warning?: string
}
