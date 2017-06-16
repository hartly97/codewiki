import { Snippet } from './../../shared/model/snippet';
import { SnippetService } from './../../shared/services/snippet.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cwiki-snippet-list',
  templateUrl: './snippet-list.component.html',
  styleUrls: ['./snippet-list.component.css']
})
export class SnippetListComponent implements OnInit {
  snippets: Snippet

  @Input() showCode:boolean;
  @Input() searchString: string;
  
  constructor(private snippetService:SnippetService){
  }

  ngOnInit(){
    this.getSnippets()
  }

  getSnippets(){
    this.snippetService.getSnippets()
    .subscribe(snippets => {
      this.snippets = snippets;
      console.log(this.snippets);
    });
  }

  onSearch(searchString){
    console.log("got the event")
      this.snippetService.searchSnippet(searchString)
      .subscribe(snippets => {
        this.snippets = snippets;
        console.log(this.snippets);
      });
  }

  ngOnChanges(){
    if(this.searchString){
      this.onSearch(this.searchString)
    }else{
      this.getSnippets();
    }
  }


}

