import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  nome!: string;

  ngOnInit(): void {
  }

  search(form: any) {
    location.href = `/results/${form.value.nome}`;
  }

}
