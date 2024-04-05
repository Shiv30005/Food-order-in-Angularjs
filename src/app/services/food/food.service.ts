import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/model/Tag';
import { Foods } from 'src/app/shared/model/food';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Foods {
    return this.getAll().find((food) => food.id == id)!;
  }
  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'Fastfood', count: 3 },
      { name: 'Pizza', count: 1 },
      { name: 'Lunch', count: 4 },
      { name: 'Fry', count: 3 },
      { name: 'Sweets', count: 1 },
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Chole Bhature',
        cooktime: '30-50',
        price: 150,
        favorite: true,
        origins: ['Delhi'],
        star: 4.5,
        ImageUrl: '/assets/food_1.jpg',
        tags: ['Fastfood', 'Fry'],
      },
      {
        id: 2,
        name: 'Rasgulla',
        cooktime: '40-50',
        price: 100,
        favorite: true,
        origins: ['Kolkata'],
        star: 4.5,
        ImageUrl: '/assets/food_2.jpg',
        tags: ['Sweets'],
      },
      {
        id: 3,
        name: 'Litti Chokha',
        cooktime: '60-70',
        price: 160,
        favorite: true,
        origins: ['Patna'],
        star: 4.5,
        ImageUrl: '/assets/Food_3.jpg',
        tags: ['Lunch'],
      },
      {
        id: 4,
        name: 'Vada Pav',
        cooktime: '10-20',
        price: 30,
        favorite: true,
        origins: ['Mumbai'],
        star: 4.5,
        ImageUrl: '/assets/food_4.jpg',
        tags: ['Fastfood'],
      },
      {
        id: 5,
        name: 'Idli Dosa',
        cooktime: '60-70',
        price: 70,
        favorite: true,
        origins: ['Chennai'],
        star: 4.5,
        ImageUrl: '/assets/food_5.jpg',
        tags: ['Lunch'],
      },
      {
        id: 6,
        name: 'Dal Bati Churma',
        cooktime: '50-60',
        price: 150,
        favorite: true,
        origins: ['Jaipur'],
        star: 4.5,
        ImageUrl: '/assets/food_6.jpg',
        tags: ['Lunch', 'Fry'],
      },
      {
        id: 7,
        name: 'Kulcha and Makki ',
        cooktime: '70-80',
        price: 170,
        favorite: true,
        origins: ['Amritsar'],
        star: 4.5,
        ImageUrl: '/assets/food_7.jpg',
        tags: ['Lunch', 'Fry'],
      },
      {
        id: 8,
        name: 'Pizza',
        cooktime: '30-40',
        price: 200,
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        ImageUrl: '/assets/food_8.jpg',
        tags: ['Fastfood', 'Pizza'],
      },
    ];
  }
}
