import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GhSearch } from '../gh-search';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchInfo = new GhSearch('');
  @Output() getName = new EventEmitter<GhSearch>();

  searchFor(data:any){
      this.getName.emit(data.value.find);
      // console.log(data.value.find)
      data.reset();
  }


}
