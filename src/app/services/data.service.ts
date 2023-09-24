import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { 
  }

  getData() {
    return this.http.get('https://qaposbe.facturele.com/api/company/1800/groups').pipe(
      map((data: any) => {
        return data.response.data;
      })
    );
  }

  saveData(id: any, name: string, is_active: number) {
    return this.http.post('https://qaposbe.facturele.com/api/company/1800/groups', {
      id,
      name,
      is_active
    } )
      .pipe( map( (response: any) => {
        return response.response;
      } )
    );
  }

  deleteData(id: any) {
    return this.http.delete('https://qaposbe.facturele.com/api/company/1800/groups/' + id)
      .pipe( map( (response: any) => {
        return response.response;
      } )
    );
  }
}
