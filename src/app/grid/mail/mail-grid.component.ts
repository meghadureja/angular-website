import { Component } from "@angular/core";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

@Component({
  selector: "mail-grid",
  templateUrl: "./mail-grid.component.html",
  styleUrls: ["./mail-grid.component.css"]
})
export class MailGridComponent {
  columnDefs = [{ headerName: "Primary", field: "primary" }];

  rowData = [];

  // set data dynamically

  ngOnInit() {
    fetch("https://api.myjson.com/bins/15psn9")
      .then(result => result.json())
      .then(rowData => (this.rowData = rowData));
  }
}
