import react from 'react'
// src/types/types.ts
export type DishDetails = {
    DishName: string;
    Description: string;
    Course_Type: string;
    MenuItems: number; // Number of menu items
    Price: number;     // Price of the dish
    AveragePrice: number; //Average price of the dish
  }
export type RootStackParamList={HomeScreen:{
  Average:{
    PriceAverage:number;
};
}
} 
FilterScreen:{
  Dishname: DishDetails{
    setDishname<React.SetStateAction<DishDetails>>;
  }
} 