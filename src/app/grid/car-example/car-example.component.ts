import { Component } from "@angular/core";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

@Component({
  selector: "car-ex",
  templateUrl: "./car-example.component.html",
  styleUrls: ["./car-example.component.css"]
})
export class CarExampleComponent {
  columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price", editable: true }
  ];

  rowData = [
    // { make: "Toyota", model: "Celica", price: 35000 },
    // { make: "Ford", model: "Mondeo", price: 32000 },
    // { make: "Porsche", model: "Boxter", price: 72000 }
  ];

  // set data dynamically 

  ngOnInit() {
    fetch('https://api.myjson.com/bins/15psn9')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
  }
}
