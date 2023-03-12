import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  navLinks = [
    {
      title: 'Home',
      link: ''
    },
    {
      title: 'Training Program',
      link: ''
    },
    {
      title: 'Why us',
      link: '/about-us'
    },
    {
      title: 'Services',
      link: ''
    },
    {
      title: 'Placement Assistance',
      link: ''
    },
    {
      title: 'Career',
      link: ''
    },
    {
      title: 'FAQs',
      link: ''
    },
    {
      title: 'Blog',
      link: ''
    },
    {
      title: 'Contact us',
      link: ''
    },
  ]
  ngOnInit(): void {
  }

}
