import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemName: string;

  constructor() {
    this.itemName = '';
  }

  ngOnInit(): void {}

  getItemName(): string {
    return this.itemName;
  }
}
