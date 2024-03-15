import type { ShopData } from '../model'

export const shops: ShopData[] = [
  {
    name: 'Rivoli Almaty',
    address: 'almaty',
    phone: ['+7 (727) 272‒33‒33', '+7 (727) 272‒32‒72'],
    whatsapp: '',
    workingHours: {
      weekdays: '11:00-20:00',
      saturday: '11:00-17:00'
    },
    geo: 'almaty',
    warning: 'Все звонки и сообщения обрабатываться только в рабочее время',
    insta: 'https://www.instagram.com/rivoli.gallery/'
  },
  {
    name: 'Rivoli Shymkent',
    address: 'shymkent',
    phone: ['+7‒775‒196‒02‒70', '+7‒707‒739‒04‒85'],
    whatsapp: '',
    workingHours: {
      weekdays: '10:00-21:00'
    },
    geo: 'shymkent',
    insta: 'https://www.instagram.com/rivoli_gallery.shym/'
  }
]
