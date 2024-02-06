import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ItemModel } from "../_models/item-model";

@Injectable({
    providedIn: 'root'
})

export class ItemService {
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ItemModel[]> {
        const endpoint = '/search.php?f=a';
        return this.http.get<ItemModel[]>(environment.API_BASE_URL + endpoint);
    }

    getOne(itemId: string): Observable<ItemModel[]> {
        const endpoint = '/lookup.php?i=';
        return this.http.get<ItemModel[]>(environment.API_BASE_URL + endpoint + itemId);
    }

}