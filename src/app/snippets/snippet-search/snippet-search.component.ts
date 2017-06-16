import { SnippetService } from './../../shared/services/snippet.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cwiki-snippet-search',
  templateUrl: './snippet-search.component.html',
  styleUrls: ['./snippet-search.component.css']
})
export class SnippetSearchComponent implements OnInit {
  searchString:string;

  constructor(private snippetService:SnippetService) { }

  ngOnInit() {

  }

}
