import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class FetchDataInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
    return next.handle(request).pipe(
        
      catchError((error: HttpErrorResponse) => {
        console.error('Error intercepted:', error);

        // Customize error handling logic here

        // Rethrow the error to propagate it to the subscriber
        return throwError(error);
      })
    );
  }
}