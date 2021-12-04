import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'CCD Rosted',
      brand: 'CCD',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'CCD Rosted PRO',
      brand: 'CCD',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 3,
      name: 'CCD Rosted PLUS',
      brand: 'CCD',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 4,
      name: 'CCD Rosted PRO MAX ULTRA',
      brand: 'CCD',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    const coffees = this.coffees;
    if (!coffees) {
      throw new NotFoundException(`Coffees not found.`);
    }
    return coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((coffee) => coffee.id === +id);
    if (!coffee) {
      console.log('Hi');
      throw new NotFoundException(`Coffee #${id} not found.`);
    }
    return coffee;
  }

  create(coffee: any) {
    this.coffees.push(coffee);
    return true;
  }

  update(id: string, coffee: any) {
    const existing = this.findOne(id);
    if (existing) {
      console.log(coffee);
      return true;
    }
    return false;
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === +id);

    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
