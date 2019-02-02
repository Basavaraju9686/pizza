import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('#categories').DataTable();
  } );

  $(document).ready(function() {
    $('#sub-categories').DataTable();
} );
  }

}
