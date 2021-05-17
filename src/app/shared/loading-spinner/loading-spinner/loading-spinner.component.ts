import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})

//this spinner has been copied from loading.io/css
export class LoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
