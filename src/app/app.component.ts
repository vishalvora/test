import { Component } from "@angular/core";
import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { Badge} from '@grafana/ui' 


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public rootId = 'rootId'

  ngOnChnages(changes: SimpleChange){
    this.render()
  }

  ngAfterViewInit(){
    this.render()
  }

private render(){
  console.log('rendering...')
  // let element = React.createElement('div',null, 'hello')
  let element = React.createElement(Badge, {text:'test123'})
  ReactDOM.render(element, document.getElementById(this.rootId))

}

}
