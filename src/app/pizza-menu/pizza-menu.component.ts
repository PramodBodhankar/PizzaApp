import { Component, OnInit } from '@angular/core';
import { PizzaServiceService } from '../pizz-service.service';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.css']
})
export class PizzaMenuComponent implements OnInit {
  activeTabindex = 0;
  slidervalue = 600;
  pizzaList = [];
  pizzaCategory = ["Veg", "Non-Veg"];
  pizaBaseOptions = [
    {
      label: "Thin Crust",
      value: "Thin Crust"
    },
    {
      label: "Regular Base",
      value: "Regular Base"
    },
    {
      label: "Flat Bread",
      value: "Flat Bread"
    },
    {
      label: "Multigrain",
      value: "Multigrain"
    }];
  pizaTypeOptions = [
    {
      label: "Cheese burst",
      value: "Cheese burst"
    },
    {
      label: "Cheese Toppings",
      value: "Cheese Toppings"
    },
    {
      label: "No Cheese",
      value: "No Cheese"
    }];
    isDataLoading = false;

  constructor(private pizzaservice: PizzaServiceService) { }

  ngOnInit(): void {
    this.pizzaservice.lstFilters.push({
      key: "Category",
      value: "Veg"
    });
    this.isDataLoading = true;
    this.pizzaservice.getPizzaList().subscribe((res) => {
      this.setData(res);
      this.isDataLoading = false;
    }, (error) => {
      return error;
    })
  }
  applyFilter(index) {
    this.activeTabindex = index
    this.applyFilterOnChange("Category", this.pizzaCategory[this.activeTabindex]);
  }
  setData(list) {
    this.pizzaservice.pizzaList = list;
    this.pizzaList = this.pizzaservice.getfilteredList();
  }
  applyFilterOnChange(key, value) {
    this.pizzaList = this.pizzaservice.applyFilter({ key, value });
  }
  ClearAllfilter()
  {
    this.pizzaservice.lstFilters = [];
    this.pizzaservice.lstFilters.push({
      key: "Category",
      value: "Veg"
    });
    this.pizzaList = this.pizzaservice.getfilteredList();
  }

}
