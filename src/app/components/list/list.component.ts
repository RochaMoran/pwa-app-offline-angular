import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  data: any[] = [];
  loading = false;

  constructor(private dataService: DataService) {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.dataService.getData().subscribe(
      (data: any) => {
      this.data = data;
    },
    (error: any) => {
      console.log(error);
    },
    () => {
      this.loading = false;
    });
  }

  removeItem(id: any) {
    this.dataService.deleteData(id).subscribe(
      (_data: any) => {
        this.getData();
      },
      (error: any) => {
        console.log(error);
      });
  }

}
