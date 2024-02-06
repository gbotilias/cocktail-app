import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemModel } from 'src/app/_models/item-model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public itemList: ItemModel[] = [];
  filteredItemList: any[] = [];
  searchIngredient: string = '';
  categories: any[] = [];
  selectedCategory: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      console.log(response.data.drinks);
      this.itemList = response.data.drinks;
      this.filteredItemList = [...this.itemList];

      // Extract unique categories
      this.categories = this.itemList.map(item => item.strCategory)
        .filter((value, index, self) => self.indexOf(value) === index);

    }, error => {
      console.log(error);
    })
  }

  filterItemList() {
    this.filteredItemList = this.itemList.filter(item => {
      return item.strIngredient1.toLowerCase().includes(this.searchIngredient.toLowerCase());
    });
  }

  selectCategory() {
    this.filteredItemList = this.itemList.filter(item => {
      const ingredientMatch = item.strIngredient1.toLowerCase().includes(this.searchIngredient.toLowerCase());
      const categoryMatch = !this.selectedCategory || item.strCategory === this.selectedCategory;
      return ingredientMatch && categoryMatch;
    });
  }

  showItemDetails(itemId: string): void {
    console.log(itemId);
    this.router.navigate(['item-detail'], { queryParams: { _id: itemId } })
  }

}
