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
      link: '',
      target:'home'
    },
    {
      title: 'Training Program',
      link: '',
      target:'training'
    },
    {
      title: 'Why us',
      link: '/about-us',
      target:'about'
    },
    {
      title: 'Services',
      link: '',
      target:'services'
    },
    {
      title: 'Placement Assistance',
      link: '/placement',
      target:'placement'
    },
    {
      title: 'Career',
      link: '/career',
       target: 'career'
    },
    {
      title: 'FAQs',
      link: '/faqs',
      target: 'faq'
    },
    {
      title: 'Blog',
      link: '',
      target:'blog'
    },
    {
      title: 'Contact us',
      link: '/contact-us',
      target: 'contact'
    },
  ]
  ngOnInit(): void {
  }


  scroll(target:any){
    const element = document.getElementById(target)
    element ? element.scrollIntoView({behavior:'smooth'}) : console.log("Element not found")

  }
}
