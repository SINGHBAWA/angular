import { Component, OnInit } from '@angular/core';
import { PatentsService } from '../patents.service';
import { Patent, News } from '../patent';

@Component({
  selector: 'app-patents',
  templateUrl: './patents.component.html',
  styleUrls: ['./patents.component.css']
})
export class PatentsComponent implements OnInit {

  patents: Patent[];
  news: News;
  displayedColumns: string[] = ['publication_number',
   'priority_date', 'publication_date',
   'assignee', 'title',
  ];

  constructor(private patentService: PatentsService) { }

  ngOnInit() {
    this.getPatents();
    this.getNews();
  }

  getPatents(): void {
    this.patentService.getPatents()
        .subscribe(patents => this.patents = patents);
  }

  getNews(): void {
    this.patentService.getNews()
        .subscribe(news => this.news = news);
    console.log(this.news);
  }

}
