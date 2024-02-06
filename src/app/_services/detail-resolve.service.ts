import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ItemModel } from "../_models/item-model";
import { ItemService } from "./item.service";

@Injectable({
    providedIn: 'root'
})
export class DetailResolveService implements Resolve<Observable<ItemModel[]>> {
    
    constructor(private itemService: ItemService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ItemModel[]> {
        const itemId = route.queryParams["_id"];
        return this.itemService.getOne(itemId);
    }
}