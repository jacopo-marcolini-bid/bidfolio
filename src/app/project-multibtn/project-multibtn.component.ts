import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-multibtn',
  templateUrl: './project-multibtn.component.html',
  styleUrls: ['./project-multibtn.component.css']
})
export class ProjectMultibtnComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() desc: string;
  @Input() links: string[];
  @Input() linksDesc: string[];

  constructor() { 
    this.imgSrc = '/assets/img/bidicon.png';
    this.desc = '...';
    this.links = [];
    this.linksDesc = [];
  }

  ngOnInit(): void {
  }

}
