import { Component, OnInit } from '@angular/core';
import { forkJoin, ReplaySubject, Subject, Subscriber, take } from 'rxjs';
import * as rx from 'rxjs';
import * as op from 'rxjs/operators';

const logger = (name: string) => {
  let count = 0;
  return {
    next(value?: any) {
      count += 1;
      console.log(name + ' (' + count + '): ' + value);
    },
    complete() {
      console.log(name + ' COMPLETE');
    },
    error(err?: any) {
      console.log(name, err);
    },
  };
};
@Component({
  selector: 'examples-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly onInit$ = new Subject<void>();
  readonly one$ = new ReplaySubject(1);
  readonly oneOnce$ = this.one$.pipe(take(1));
  readonly two$ = new ReplaySubject(1);
  readonly three$ = new ReplaySubject(1);
  readonly tick1$ = rx.interval(1000).pipe(op.map((i) => i + 1));
  concat$ = rx.concat(this.one$, this.two$, this.three$);
  merge$ = rx.merge(this.one$, this.two$, this.three$);
  forkJoin$ = rx.forkJoin([this.one$, this.two$, this.three$]);
  combineLatest$ = rx.combineLatest([this.one$, this.two$, this.three$]);

  constructor() {
    //this.concat$.subscribe(logger('concat'));
    // this.merge$.subscribe(logger('merge'));
    // this.forkJoin$.subscribe(logger('forkJoin'));
    this.combineLatest$.subscribe(logger('combineLatest'));
    //this.tick1$.subscribe(logger('tick1'));
  }

  ngOnInit(): void {
    this.onInit$.next();
    this.onInit$.complete();
    const onInitSub = this.onInit$.subscribe(() => {
      console.log('ON INIT EMITTED');
    });

    console.log(this.onInit$);
    console.log(this.onInit$.isStopped);
    console.log(onInitSub.closed);
    console.log(onInitSub);
  }
}
