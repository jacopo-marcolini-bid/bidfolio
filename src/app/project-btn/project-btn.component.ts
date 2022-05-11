import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-btn',
  templateUrl: './project-btn.component.html',
  styleUrls: ['./project-btn.component.css']
})
export class ProjectBtnComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() desc: string;
  @Input() link: string;

  constructor() { 
    this.imgSrc = '/assets/img/bidicon.png';
    this.desc = '...';
    this.link = '/';
  }

  ngOnInit(): void {
  }

}
