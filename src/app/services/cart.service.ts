import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { Foods } from '../shared/model/food';
import { CartItem } from '../shared/model/cartitem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  addToCart(food: Foods): void {
    let existingCartItem = this.cart.items.find(
      (item) => item.food.id === food.id
    );
    if (existingCartItem) {
      this.changeQuantity(food.id, existingCartItem.quantity + 1);
      return;
    }

    this.cart.items.push(new CartItem(food));
  }
  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
  }
  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart(): Cart {
    return this.cart;
  }
}
