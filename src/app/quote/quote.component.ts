import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'What you do not want done to yourself, do not do to others.','joselyne', new Date(2020,8,20)),
    new Quote(2, 'A single rose can be my garden… a single friend, my world.','claudine',new Date(2020,3,14)),
  new Quote(3,'There’s not a word yet for old friends who’ve just met.','Ritha',new Date(2020,6,18)),
   new Quote (4, 'One’s friends are that part of the human race with which one can be human','Vivine',new Date(2020,9,25)),
    new Quote(5,'Be slow to fall into friendship; but when thou art in, continue firm & constant','Fabiene',new Date(2020,5,12)),
   new Quote (6,'Tis the privilege of friendship to talk nonsense, and to have her nonsense respected.','Bonte',new Date(2020,7,30)),
  ];


  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
