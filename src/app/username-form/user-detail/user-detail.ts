import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JsonPipe} from '@angular/common';
import {BehaviorSubject, Observable, Observer} from 'rxjs';

@Component({
  selector: 'app-user-detail',
  imports: [
    JsonPipe
  ],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss'
})
export class UserDetail {
  data: any[] = ['suca'];

  constructor() {}

  private http = inject(HttpClient);

  // fetchData() {
  //   this.http.get('https://jsonplaceholder.typicode.com/todos/3', {observe: 'response'}).subscribe(res => {
  //     console.log('Response status:', res.status);
  //     console.log('Body:', res.body);
  //     this.data = res;
  //   });
  // }
  //

  fetchData() {
    //observable
    const dataStream$: Observable<Object> = this.http.get('https://jsonplaceholder.typicode.com/todos/3');

    //observer
    const observer: Observer<any> = {
      next: (res: any) => {
        console.log('Dati ricevuti:', res);
        this.data.push(res);
      },
      error: (err: any) => {
        console.error('Errore:', err);
      },
      complete: () => {
        console.log('Richiesta completata.');
      }
    };



    // //observable + observer
    const sub = dataStream$.subscribe(observer);

    observer.next({
      'nome' : 'pippo',
      'age' : 13,
    })

    //
    // setTimeout(() => {
    //   sub.unsubscribe();
    //   console.log('Subscription annullata dopo 2 secondi');
    // }, 2000);


   //  const obs$ = new Observable<number>(subscriber => {
   //    subscriber.next(1);
   //    subscriber.next(2);
   //  });
   //
   //  obs$.subscribe(v => console.log('Subscriber 1:', v));
   //  obs$.subscribe(v => console.log('Subscriber 2:', v));
   //
   //
   //  const subject = new BehaviorSubject<number>(0);
   //
   //  subject.subscribe(v => console.log('behavior 1:', v));
   //  subject.next(1); // Subscriber 1 riceve 1
   //
   // const beh2 = subject.subscribe(v => console.log('behavior 2 (riceve l\'ultimo):', v));
   //  setTimeout(() => {
   //    beh2.unsubscribe();
   //    console.log('behavior 2 Subscription annullata');
   //  }, 5)
   //
   //  subject.next(2);
  }
}
