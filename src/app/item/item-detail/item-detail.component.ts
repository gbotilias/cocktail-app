import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from 'src/app/_models/item-model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  public teamDetail = {} as ItemModel;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // const data = this.activatedRoute.snapshot.paramMap.getAll('teadData');
    // this.teamDetail = JSON.parse(data[0]);
    // console.log(this.teamDetail);
  }

}
