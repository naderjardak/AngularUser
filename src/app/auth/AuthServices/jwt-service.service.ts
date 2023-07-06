import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  constructor() { }

  DecodeToken(accessToken: string): string {
    return jwt_decode(accessToken);
    }
}


