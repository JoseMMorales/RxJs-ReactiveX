import { 
  Observable ,
  Subject,
  BehaviorSubject,
  pipe
} from "rxjs";

import { fromEvent } from "rxjs/observable/fromEvent";
import { merge } from "rxjs/observable/merge";
import { from } from "rxjs/observable/from";

import { map } from "rxjs/operators/map";
import { pluck } from "rxjs/operators/pluck";
import { skipUntil } from "rxjs/operators/skipUntil";

//Basics...

//1. Render Observable with Observer

//Observable
let observable1 = Observable.create((observer: any) => observer.next('Hey guys!'));

//Observer
let observer1 = observable1.subscribe((x: string) => addItem(x));

//2. How to use complete() method

//Observable
let observable2 = Observable.create((observer: any) => {
  observer.next('Hey guys!')
  observer.next('How are you?')
  observer.complete()
  observer.next('This will not send')
});

//Observer
let observer2 = observable2.subscribe(
  (x: string) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('Completed')
);

//3. Unsubscribe after 6 seconds

//Observable
let observable3 = Observable.create((observer: any) => {
  observer.next('Hey guys!')
  observer.next('How are you?')
  setInterval(() => {
    observer.next('I am very good!')
  }, 2000)
});

//Observer
let observer3 = observable3.subscribe(
  (x: string) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('I am really good!')
);

setTimeout(() => {
  observer3.unsubscribe();
}, 6001);

// Observables Event with observables, observers and subscriptions...

const observableEvent = fromEvent(document, 'mousemove')

setTimeout(() => {
  const subscription = observableEvent.subscribe(
    (x: any) => addItem(x)
  )
}, 2000);

//Subject (Check outcome based on order of subscriptions to same subject)...

let subject = new Subject();

subject.subscribe(
  data => addItem('Observer 1: ' + data),
  err => addItem(err),
  () => addItem('Observer 1 Completed!')
)

subject.next('The first thing has been sent');

let observerSubject = subject.subscribe(
  data => addItem('Observer 2: ' + data)
)

subject.next('The second thing has been sent')
subject.next('A third thing has been sent')

observerSubject.unsubscribe();

subject.next('A final thing has been sent')

//BehaviorSubject...

let behavior = new BehaviorSubject('First');

behavior.subscribe(
  data => addItem('Observer 1: ' + data),
  err => addItem(err),
  () => addItem('Observer 1 Completed!')
)

behavior.next('The first thing has been sent');
behavior.next('...Observer 2 is about to subscribe...');

let observer2Sub = behavior.subscribe(
  data => addItem('Observer 2: ' + data)
)

behavior.next('The second thing has been sent')
behavior.next('A third thing has been sent')

observer2Sub.unsubscribe();

behavior.next('A final thing has been sent')

//Operator...

//merge (to get single observable)

var observableOperators = Observable.create((observer: any) => {
  observer.next('Hey guys!');
})

var observableOperators2 = Observable.create((observer: any) => {
  observer.next('How is it going!');
})

let newsObs = merge(observableOperators, observableOperators2);

newsObs.subscribe((x:any) => addItem(x));

// map (to transform data before subscribe)

Observable.create((observer: any) => observer.next('Hey guys! with map operator!'))
  .pipe(map((val:any) => val.toUpperCase()))
  .subscribe((x: any) => addItem(x))

// plunck (to get data based on specific property)

from([
  { first: 'Jenny', last: 'Rodriguez', age: '21'},
  { first: 'Jose', last: 'Ramirez', age: '23'},
  { first: 'Mari', last: 'Chacon', age: '25'},
])
  .pipe(pluck('first'))
  .subscribe((x: any) => addItem(x));

//skipUntil 

let observableSkip = Observable.create((data: any) => {
  let i = 1;
  setInterval(() => {
    data.next(i++)
  }, 1000)
})

let observableSkip2 = new Subject;

setTimeout(() => {
  observableSkip2.next('Hey!');
}, 3000);

let newSkipObs = observableSkip.skipUntil(observableSkip2);

newSkipObs.subscribe((x: any) => addItem(x))


//Using JS to render elements in DOM...
function addItem (val: string) {
  let node = document.createElement("li");
  let textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
}