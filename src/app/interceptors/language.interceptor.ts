import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable, of } from "rxjs";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private readonly injector: Injector, private translate: TranslateService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
      const translateService = this.injector.get(TranslateService)
      // log using translate service
    } catch {
      // log without translation translation service is not yet available
    }
    return of();
  }
}