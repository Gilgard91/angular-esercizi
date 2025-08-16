import {Component} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';

@Component({
  selector: 'app-interceptor',
  imports: [],
  templateUrl: './interceptor.html',
  styleUrl: './interceptor.scss'
})
export class Interceptor {
}

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  console.log('Invio richiesta a: ', req.url);

  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Sent) {
      console.log('Sent');
    }
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);
    }

  }));
}

// export function loggingInterceptor(
//   req: HttpRequest<unknown>,
//   next: HttpHandlerFn
// ): Observable<HttpEvent<unknown>> {
//
//   console.log('Invio richiesta a:', req.url);
//
//   return next(req).pipe(
//     map(event => {
//       if (event.type === HttpEventType.Response) {
//         console.log(req.url, 'returned a response with status', event.status);
//         // creo una nuova Response con il body modificato
//         return event.clone({ body: (event.body as any).title });
//       }
//       return event;
//     })
//   );
// }

// export function loggingInterceptor(
//   req: HttpRequest<unknown>,
//   next: HttpHandlerFn
// ): Observable<HttpEvent<unknown>> {
//
//   console.log('Invio richiesta a:', req.url);
//
//   return next(req).pipe(
//     map(event => {
//       if (event.type === HttpEventType.Response) {
//         // Modifichiamo il body
//         const modifiedBody = {
//           ...(event.body as object),
//           fetchedAt: new Date().toLocaleString()
//         };
//
//         // Cloniamo la HttpResponse con il nuovo body
//         return event.clone({ body: modifiedBody });
//       }
//       return event;
//     })
//   );
// }
