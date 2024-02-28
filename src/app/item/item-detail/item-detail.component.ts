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
    this.activatedRoute.data
      .subscribe({
        next: (response: any) => {
          if (response.data && response.data.drinks && response.data.drinks.length > 0) {
            this.itemDetail = response.data.drinks[0];
          }
        },
        error: (error: any) => {
          // Handle error
          this.errorMessage = error.message;
        },
      });
  }
}
