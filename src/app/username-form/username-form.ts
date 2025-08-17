import {Component, computed, effect, inject, linkedSignal, Signal, signal, untracked} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HttpClient, HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CountService} from '../count.service';

@Component({
  selector: 'app-username-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './username-form.html',
  styleUrls: ['./username-form.scss'],
})

export class UsernameForm {
  userId: string | null;
  data: string | null;
  private http = inject(HttpClient);
  private countService = inject(CountService);


  constructor(private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.data = this.route.snapshot.data['data'];
    effect(() => {
      console.log('il risultato della computation è', this.computedCounter());
    });
  }
  usernameControl = new FormControl('pippoaaa');

  counter = signal(0);
  readonly counterz = this.counter.asReadonly();

  increment() {
    this.counter.update(c => c + 1);
  }

  decrement() {
    this.counter.update(c => c - 1);
  }

  computedCounter = computed(() => this.counterz() * 2);

///////////////////////

  incrementaNumero() {
    this.countService.increment();
  }

  decrementaNumero() {
    this.countService.decrement();
  }

  resettaNumero() {
    this.countService.reset();
  }

  //////////////////////

  readonly initialUsers: User[] = [
    {id: '1', name: 'Pippo', surname: 'Pluto'},
    {id: '2', name: 'Paperino', surname: 'Pippo'},
    {id: '3', name: 'Mario', surname: 'Rossi'},
    {id: '4', name: 'Luigi', surname: 'Verdi'},
    {id: '5', name: 'Giovanni', surname: 'Neri'},
  ];

  users = signal<User[]>(this.initialUsers);


  selectUser(user: User) {
    this.selectedUser.set(user);
  }

  removeFirstUser() {
    const current = this.users();
    this.users.set(current.slice(1));

  }

  removeSelectedUser() {
    const current = this.users();
    const selected = this.selectedUser();
    if (selected) {
      this.users.set(current.filter(user => user.id !== selected.id));
    }
  }

  restoreUsers() {
    this.users.set(this.initialUsers);
  }

  clearUsers() {
    this.users.set([]);
  }

  selectedUser = linkedSignal<User[], User | undefined>({
    source: this.users,
    computation: (newUsers, prevSelectedUser) => {
      const prev = prevSelectedUser?.value;

      if (!prev) return undefined;
      return newUsers.find(user => user.id === prev.id);
    }
  });

  userCount = linkedSignal<User[], number>({
      source: this.users,
      computation: (newUsers) => newUsers.length,
    });
}

export interface User {
  id: string;
  name: string;
  surname: string;
}


