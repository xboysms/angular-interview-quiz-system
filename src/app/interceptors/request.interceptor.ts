import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})

export class AddHeaderInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService, 
    private readonly injector: Injector,
    private translate: TranslateService
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    // application/x-www-form-urlencoded
    try {
      const translateService = this.injector.get(TranslateService)
      // log using translate service
    } catch {
      // log without translation translation service is not yet available
    }

    const accessToken = this.authService.currentUserValue?.idToken;
    if (accessToken) req = this.addToHeader(accessToken, req);

    const clonedRequest = req.clone(
      { headers: req.headers.append('Content-Type', 'application/json') }
    );

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }

  private addToHeader(accessToken: string, request: HttpRequest<any>) {
    const headerSettings: { [name: string]: string | string[] } = {};
    headerSettings['Authorization'] = 'Bearer ' + accessToken;
    headerSettings['accept'] = 'text/plain';
    const newHeader = new HttpHeaders(headerSettings);
    request = request.clone({
      headers: newHeader
    });
    return request;
  }
}