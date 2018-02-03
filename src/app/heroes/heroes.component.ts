import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero = 'win storm';
  // hero2: string = 'win storm'; 타입지정 자동삽입
  // public hero3 = 'win storm'; public이 기본값

  // 클래스 객체로 생성
  hero = {
    id: 1,
    name: 'Win Strom'
  }

  constructor() { }

  ngOnInit() {
  }

}
