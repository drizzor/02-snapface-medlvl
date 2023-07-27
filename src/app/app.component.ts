import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  interval$!: Observable<number>;

  ngOnInit() {
    // const interval$ = interval(1000);

    // interval$.subscribe(value => console.log(value));

    // setTimeout(() => {
    //   interval$.subscribe(value => console.log(value));
    // }, 3000);
    this.interval$ = interval(1000);
  }
}
