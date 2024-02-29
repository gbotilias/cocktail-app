import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    // Subscribe to the resolved data from the route
    this.activatedRoute.data
      .subscribe({
        next: (response: any) => {
          // Check if there is data and at least one item in the drinks array
          if (response.data && response.data.drinks && response.data.drinks.length > 0) {
            // Set the itemDetail to the first item in the drinks array
            this.itemDetail = response.data.drinks[0];
          }
        },
        error: (error: any) => {
          // Handle the error response
          this.errorMessage = error.message;
        },
      });
  }
}
