import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { categories } from '../models/mocks/categories.mocks';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

  categories : Category[];

  ngOnInit(): void {
    this.categoryService.getCategories()
                        .subscribe((data:Category[])=>this.categories=data)
  }

}
