import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoUsersService {
  private users: User[] = [
    {
      name: 'Liam McCannan',
      img:
        'https://i.pinimg.com/originals/62/ba/86/62ba865eebf586466ed7db9fa960d4b6.jpg',
      interactions: 7,
      email: 'ejemplo@ejemplo.com',
      phone: '+114-3412-4422',
      city: 'New York, NY',
      travel: {
        start: {
          place: 'Jackson Heights',
          address: '37-27 74th Street',
        },
        end: {
          place: 'Greenpoint',
          address: '81 Gate St Brooklyn',
        },
        info: [
          {
            type: 'Distance',
            quantity: '12.3 km',
          },
          {
            type: 'Time',
            quantity: '42 min',
          },
          {
            type: 'Price',
            quantity: '12.3 km',
          },
          {
            type: 'Energy',
            quantity: '12.4 kWh',
          },
        ],
      },
    },
    {
      name: 'Vanessa Miles',
      img:
        'https://i.pinimg.com/474x/c0/cd/df/c0cddff8bce605d57a003ae1d98026ce.jpg',
      interactions: 3,
      email: 'vanessa.miles@example.com',
      phone: '(324)-857-2108',
      city: 'Jackson, Misisipi',
      travel: {
        start: {
          place: 'Bridgewater',
          address: '6993 Robinson Rd',
        },
        end: {
          place: 'Sevierville',
          address: '2824 White Oak Dr',
        },
        info: [
          {
            type: 'Distance',
            quantity: '12.3 km',
          },
          {
            type: 'Time',
            quantity: '42 min',
          },
          {
            type: 'Price',
            quantity: '12.3 km',
          },
          {
            type: 'Energy',
            quantity: '12.4 kWh',
          },
        ],
      },
    },
    {
      name: 'Jason Chavez',
      img: 'https://randomuser.me/api/portraits/men/72.jpg',
      interactions: 5,
      email: 'jason.chavez@example.com',
      phone: '(272)-368-7508',
      city: 'Hayden, Idaho',
      travel: {
        start: {
          place: 'Hayden Lake',
          address: '9811 Country Club Rd',
        },
        end: {
          place: 'Houston',
          address: '6897 Westheimer Rd',
        },
        info: [
          {
            type: 'Distance',
            quantity: '40 km',
          },
          {
            type: 'Time',
            quantity: '42 min',
          },
          {
            type: 'Price',
            quantity: '12.3 km',
          },
          {
            type: 'Energy',
            quantity: '12.4 kWh',
          },
        ],
      },
    },
  ];

  constructor() {}
  //retorna todos los usuarios
  getUsers(): User[] {
    return this.users;
  }

  getPersonalData(idx: any ){
    return this.users[idx];
  }

  getTravelData(idx: any ){
    return this.users[idx].travel;
  }
}

export interface User {
  name:         string;
  img:          string;
  interactions: number;
  email:        string;
  phone:        string;
  city:         string;
  travel:       Travel;
}

export interface Travel {
  start: End;
  end:   End;
  info:  Info[];
}

export interface End {
  place:    string;
  address: string;
}

export interface Info {
  type:     string;
  quantity: string;
}
