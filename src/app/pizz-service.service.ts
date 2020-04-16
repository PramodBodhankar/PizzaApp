import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rejects } from 'assert';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaServiceService {
  constructor(private http: HttpClient) { }
  url = "https://5e97447c77f54300163395cb.mockapi.io/pizzapp/pizzaList";
  pizzaList: any = [];
  lstFilters = [];
  getPizzaList() {
    return this.http.get(this.url);
  }

  getfilteredList() {
    let filters = this.getCopy(this.lstFilters);
    let filterredList = this.getCopy(this.pizzaList);
    while (filters.length) {
      let filterObj = filters[0];
      if (filterObj.key != 'price') {
        filterredList = filterredList.filter((data) => data[filterObj.key] == filterObj.value);
      }
      else {
        filterredList = filterredList.filter((data) => data[filterObj.key] <= filterObj.value);
      }
      filters.shift();
    }
    return filterredList;
  }
  applyFilter(filterObj) {
    let index = this.lstFilters.findIndex((filter) => filter.key == filterObj.key);
    if (index > -1) {
      this.lstFilters[index].value = filterObj.value;
    }
    else {
      this.lstFilters.push(filterObj);
    }
    return this.getfilteredList();
  }
  getCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
  }
}
