import { Snippet } from './../model/snippet';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class SnippetService {

  node: string = '/snippets'
  snippets$: FirebaseListObservable<any>;

  constructor(public db: AngularFireDatabase) { }


  getSnippets(){
    return this.db.list(this.node);
  }

  searchSnippet(searchTerm){
    return this.db.list(this.node, {
      query: {
        orderByChild: 'name',
        startAt: searchTerm,
        endAt: searchTerm + '\uf8ff',
        //once:'value'
        //equalTo: searchTerm,
      }
    });
  }


  getSnippet(){

  }

  pushSnippet(snippet:Snippet){
    this.db.list(this.node).push(snippet);
  }

  deleteSnippets(){
    // this.db.list('/snippets').forEach((fbitem) => {
    //   fbitem.forEach((e)=>{
    //     let item = this.db.object('/snippets/'+ e.$key)
    //     item.remove();
    //   })
    // });  
  }

  deleteSnippet(){

  }

  ngOnInit(){
    //this.snippets$ = this.db.list('/snippets');  
  }

}
