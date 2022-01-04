<h2 align="left">
  <img src="https://user-images.githubusercontent.com/43299285/148022873-04cc409e-60fd-4b81-bb9c-a2d574b43f7b.jpeg" width="120">
  ReactiveX Project
</h2>

[RxJs](https://rxjs.dev/guide/overview) is a library for managing asynchronous as event-based programs by using observables sequences. [ReactiveX](https://reactivex.io/) combines the Observer pattern with the iterator pattern and functional programming with collections to fill the need for an ideal way of managing sequences of events.

### The essential concepts in RxJS which solve async event management are:

* <b>Observable:</b> represents the idea of an invokable collection of future values or events.
* <b>Observer:</b> is a collection of callbacks that knows how to listen to values delivered by the Observable.
* <b>Subscription:</b> represents the execution of an Observable, is primarily useful for cancelling the execution.
* <b>Operators:</b> are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.
* <b>Subject:</b> is equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.

## How create an Observable...

Applying create() method to build the observable that accepts a single argument, which is a subscribe function. This subscribe function accepts an observer argument, and emitting a single value of 'Hey guys!' by calling observer.next(). Then, we subscribe or create a subscription to this observable to get output in our console.

<div align="center">

![Screenshot 2022-01-04 at 08 48 08](https://user-images.githubusercontent.com/43299285/148026132-ed4030fc-d162-4915-bd76-1ce6e61d94d8.png)

</div>

## VanillaJS to handle DOM...

Rather than staring the console of each output in this project we will create a vanilla JS function that will push the values to the unordered list item in our HTML.

<div align="center">

![Screenshot 2022-01-04 at 08 43 10](https://user-images.githubusercontent.com/43299285/148025663-04f8fe7f-cb67-448d-b6d0-325ff39874ac.png)

</div>

## In this project you will do...

* Modify observers: `.next(), .error() or .complete()`
* Cancel subscriptions: `.unsubscribe()`
* Create multiple subscriptions:  `.subscribe()`
* Record events in observables with operator: `fromEvent`
* Create subject to emit values: `Subject`
* Emit last value in Subject: `BehaviorSubject`
* Play around with operators as: `merge, map, plunck, skipEntry`

## Just to let you know...
All comments and details reflected in this repo has been taken from [RxJs App](https://rxjs.dev/)

## Installing...
Clone this repo and run `yarn install`. Then, run `yarn run start`.

## Author 
JoseMMorales

