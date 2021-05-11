import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nextTick } from 'node:process';


@Injectable({
  providedIn: 'root'
})
export class HttpInterseptorService implements HttpInterceptor{
  token = localStorage.getItem('token')
  constructor() { }
  intercept(req, next){
    let tokeintersept = req.colne({
setHeaders:{
  Autherization:`Bearer ${this.token}`
}
    });
    return next.handle(tokeintersept);
    }
}
