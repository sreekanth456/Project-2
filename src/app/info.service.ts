import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class InfoService {
  private _url: string = "/assets/data/demo.json";

  constructor(private _http: HttpClient) {}

  getData(): any {
    return this._http.get<any>(this._url);
  }

}
