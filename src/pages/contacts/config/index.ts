import type { ShopData } from '../model'

export const shops: ShopData[] = [
  {
    name: 'Rivoli Almaty',
    address: 'almaty',
    phone: ['+7 (727) 272 33 33', '+7 (727) 272 32 72', '+7 702 112 00 66'],
    insta: '',
    whatsapp: '',
    workingHours: {
      weekdays: '11:00-20:00',
      saturday: '11:00-17:00'
    },
    geo: 'almatyGeo',
    warning: 'Все звонки и сообщения обрабатываться только в рабочее время'
  },
  {
    name: 'Rivoli Shymkent',
    address: 'shymkent',
    phone: ['+7 775 196 0270'],
    insta: '',
    whatsapp: '',
    workingHours: {
      weekdays: '11:00-20:00',
      saturday: '11:00-17:00'
    },
    geo: 'shymkentGeo'
  }
]
