import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JsonPipe} from '@angular/common';
import {BehaviorSubject, Observable, Observer} from 'rxjs';
import {JSONPlaceholderAPIService, Todo} from '../../api/jsonplaceholder';
import {CountService} from '../../count.service';

@Component({
  selector: 'app-user-detail',
  imports: [
    JsonPipe
  ],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss'
})
export class UserDetail {
  data: any[] = [];
  private apiService = inject(JSONPlaceholderAPIService);
  private countService = inject(CountService);

  numeroDaService = this.countService.count;

  constructor() {}

  fetchData() {
    // Metodo 1: Chiamata semplice con subscribe
    this.apiService.getTodosId(3).subscribe({
      next: (todo: Todo) => {
        console.log('Todo ricevuto:', todo);
        this.data.push(todo);
      },
      error: (err) => {
        console.error('Errore:', err);
      },
      complete: () => {
        console.log('Richiesta completata');
      }
    });
  }

// Metodo alternativo per ottenere tutti i todos
  fetchAllTodos() {
    this.apiService.getTodos().subscribe({
      next: (todos: Todo[]) => {
        console.log('Todos ricevuti:', todos);
        this.data = todos; // Sostituisce l'array
      },
      error: (err) => console.error('Errore:', err)
    });
  }

  clearTodos() {
    this.data  = [];
  }

























  // private http = inject(HttpClient);


  // fetchData() {
  //   this.http.get('https://jsonplaceholder.typicode.com/todos/3', {observe: 'response'}).subscribe(res => {
  //     console.log('Response status:', res.status);
  //     console.log('Body:', res.body);
  //     this.data = res;
  //   });
  // }
  //

  // fetchData() {
  //   //observable
  //   const dataStream$: Observable<Object> = this.http.get('https://jsonplaceholder.typicode.com/todos/3');
  //
  //   //observer
  //   const observer: Observer<any> = {
  //     next: (res: any) => {
  //       console.log('Dati ricevuti:', res);
  //       this.data.push(res);
  //     },
  //     error: (err: any) => {
  //       console.error('Errore:', err);
  //     },
  //     complete: () => {
  //       console.log('Richiesta completata.');
  //     }
  //   };



    // //observable + observer
    // const sub = dataStream$.subscribe(observer);
    //
    // observer.next({
    //   'nome' : 'pippo',
    //   'age' : 13,
    // })

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
  // }
}
