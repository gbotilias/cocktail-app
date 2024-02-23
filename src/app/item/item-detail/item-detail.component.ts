import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { ItemModel } from 'src/app/_models/item-model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  public itemDetail = {} as ItemModel;
  public errorMessage: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        this.errorMessage = 'Error fetching data. Please try again.';
        return error;
      })
    ).subscribe ((response: any) => {
      if (response.data && response.data.drinks && response.data.drinks.length > 0) {
        this.itemDetail = response.data.drinks[0];
      }
    })
  }
}
