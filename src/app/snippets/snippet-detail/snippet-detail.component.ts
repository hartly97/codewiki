import { SnippetService } from './../../shared/services/snippet.service';
import { Snippet } from './../../shared/model/snippet';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-snippet-detail',
  templateUrl: './snippet-detail.component.html',
  styleUrls: ['./snippet-detail.component.css']
})
export class SnippetDetailComponent implements OnInit {

  @Input() searchString: string;
  snip:Snippet;
  
  constructor(private snippetService:SnippetService, private route: ActivatedRoute){
  }

  id: string;
  private sub: any;

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
    this.id = params['id']; 
    console.log(this.id);
  });
  
    this.getSnippet(this.id)
  }

  getSnippet(id){
    this.snippetService.getSnippet(id)
    .subscribe(snippet => {
      this.snip = snippet[0];
      console.log(this.snip);
    });
  }
}
