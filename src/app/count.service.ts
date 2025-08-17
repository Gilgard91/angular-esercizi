import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private _count = signal<number>(0);

  readonly count = this._count.asReadonly();

  increment() {
    this._count.update(n => n + 1);
  }

  decrement() {
    this._count.update(n => n - 1);
  }

  reset() {
    this._count.set(0);
  }
}
