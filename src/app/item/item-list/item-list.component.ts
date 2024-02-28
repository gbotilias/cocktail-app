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
  public filteredItemList: ItemModel[] = [];
  public searchByName: string = '';
  public categories: string[] = [];
  public selectedCategory: string = '';
  public errorMessage: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Fetch data from the resolved route
    this.activatedRoute.data
      .subscribe({
        next: (response: any) => {
          this.itemList = response.data.drinks;
          // Make a copy for filtering
          this.filteredItemList = [...this.itemList];
          this.categories = this.getCategories();
          this.filterItems();
        },
        error: (error: any) => {
          // Handle error
          this.errorMessage = error.message;
        },
      });
  }

  // Method to get unique categories
  getCategories(): string[] {
    const allCategories: string[] = [];
    // Iterate throw itemList
    this.itemList.forEach((item) => {
      if (!allCategories.includes(item.strCategory)) {
        allCategories.push(item.strCategory);
      }
    });
    return allCategories;
  }

  // Method to filter items based on selected category and search criteria
  filterItems(): void {
    this.filteredItemList = this.itemList.filter(item =>
      // Check if the selected category matches and if the item name contains the search term
      (!this.selectedCategory || item.strCategory === this.selectedCategory) &&
      item.strDrink.toLowerCase().includes(this.searchByName.toLowerCase())
    );
  }

  // Method to handle search input changes
  onSearchChange(searchTerm: string): void {
    // Update the search term and trigger filtering
    this.searchByName = searchTerm;
    this.filterItems();
  }

  // Method to handle category selection changes
  onCategoryChange(selectedCategory: string): void {
    // Update the selected category and trigger filtering
    this.selectedCategory = selectedCategory;
    this.filterItems();
  }

  // Method to navigate to item details
  showItemDetails(itemId: string): void {
    this.router.navigate(['item-detail'], { queryParams: { _id: itemId } })
  }

}
