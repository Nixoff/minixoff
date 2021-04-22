import { LongUrlService } from './../services/long-url.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-links',
  templateUrl: './my-links.component.html',
  styleUrls: ['./my-links.component.css']
})
export class MyLinksComponent implements OnInit {

  urls: Array<any>;

  constructor(private longUrl: LongUrlService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.longUrl.list().subscribe(dados => this.urls = dados);
  }

}
