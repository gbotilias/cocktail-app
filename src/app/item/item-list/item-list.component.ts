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
  searchByName: string = '';
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.itemList = response.data.drinks;
      this.filteredItemList = [...this.itemList];
      this.categories = this.getCategories();
      this.selectCategory();
    }, error => {
      console.log(error);
    })
  }

  getCategories(): string[] {
    const allCategories: string[] = [];
    this.itemList.forEach((item) => {
      if (!allCategories.includes(item.strCategory)) {
        allCategories.push(item.strCategory);
      }
    });
    return allCategories;
  }

  searchItemByName(): void { 
    if (this.selectedCategory !== '') {
      this.filteredItemList = this.itemList.filter(item =>
        item.strDrink.toLowerCase().includes(this.searchByName.toLowerCase()) &&
        item.strCategory === this.selectedCategory
      );
    } else {
      this.filteredItemList = this.itemList.filter(item =>
        item.strDrink.toLowerCase().includes(this.searchByName.toLowerCase())
      );
    }
  }

  selectCategory(): void {
    if (this.selectedCategory !== '') {
      this.filteredItemList = this.itemList.filter(item =>
        item.strCategory === this.selectedCategory &&
        item.strDrink.toLowerCase().includes(this.searchByName.toLowerCase())  
      );
    } else {
      this.filteredItemList = this.itemList.filter(item =>
        item.strDrink.toLowerCase().includes(this.searchByName.toLowerCase())
      );
    }
  }

  showItemDetails(itemId: string): void {
    console.log(itemId);
    this.router.navigate(['item-detail'], { queryParams: { _id: itemId } })
  }

}
