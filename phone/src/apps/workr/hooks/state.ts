import { isEnvBrowser } from '@utils/misc';
import { categoryData, workerData } from '../utils/WorkrData';

export interface Category {
  id: number;
  title: string;
  amountOnline: number;
}

export interface Worker {
  id: number;
  type: string;
  name: string;
  company: string;
  phoneNumber: string;
}

export enum CATEGORY_ENUM {
  mechanic = 'MECHANIC',
  restaurant = 'RESTAURANT',
  meatshop = 'MEATSHOP',
  lawyer = 'LAWYER',
  judge = 'JUDGE',
}

export function grabCategoryData(): Category[] {
  console.log('grabCategoryData was hit');
  if (isEnvBrowser()) {
    console.log(categoryData);
    return categoryData;
  }

  return null;
  //TODO trigger a function to grab category data from in game.
}

export function grabWorkerDataByCategory(category: string): Worker[] {
  if (isEnvBrowser()) {
    const conditionsMet = workerData.filter(function (value) {
      return value.type === category;
    });
    return conditionsMet;
  }

  return null;

  //TODO trigger a function to grab a list of workers by category
}
