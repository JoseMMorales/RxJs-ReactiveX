import { Observable } from "rxjs";

//Observable
let observable = Observable.create((observer: any) => {
  observer.next('Hey guys!')
});

//Observer
observable.subscribe((x: string) => addItem(x));

function addItem (val: string) {
  let node = document.createElement("li");
  let textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
}