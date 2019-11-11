import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
titre="Films a avoir aujourd'hui"
  constructor() { }
@Input("test") p: number;
  ngOnInit() {
  }

}
