import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero = 'win storm';
  // hero2: string = 'win storm'; 타입지정 자동삽입
  // public hero3 = 'win storm'; public이 기본값

  // 일반객체 생성문법
  // hero = {
  //   id: 1,
  //   name: 'Win Strom'
  // };

  // 클래스 객체로 생성
  // hero: Hero = {
  //   id: 1,
  //   name: 'Win Storm'
  // };


  hero: Hero;

  // 초기화 객체 01
  // constructor() {
  //   this.hero = new Hero();
  //   this.hero.id = 1;
  //   this.hero.name = 'win storm';
  // }

  // 초기화 객체 02
  constructor() {
    this.hero = new Hero(1, 'win storm');
  }


  ngOnInit() {
  }

}
