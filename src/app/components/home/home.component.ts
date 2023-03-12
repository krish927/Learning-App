import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  carouselItem = [
    {
      imgUrl: 'assets/images/welcomebanner.jpeg',
      bannerUrl: ''
    },
    {
      imgUrl: 'assets/images/trainingbanner.jpeg',
      bannerUrl: ''
    },
    {
      imgUrl: 'assets/images/trainingbanner2.jpeg',
      bannerUrl: ''
    },
    {
      imgUrl: 'assets/images/trainingbanner3.jpeg',
      bannerUrl: ''
    },
    {
      imgUrl: 'assets/images/trainingbanne4.jpeg',
      bannerUrl: ''
    },
  ]
  services = [
    {
      name: 'classroom training',
      imgUrl: 'assets/images/classroom.jpeg',
      pageUrl: ''
    },
    {
      name: 'corporate training',
      imgUrl: 'assets/images/corporate.jpg',
      pageUrl: ''
    },
    {
      name: 'online training',
      imgUrl: 'assets/images/online.jpg',
      pageUrl: ''
    },
    {
      name: '6 weeks/months industrial training',
      imgUrl: 'assets/images/industrial.jpg',
      pageUrl: ''
    },
    {
      name: 'college campus training',
      imgUrl: 'assets/images/campus.jpg',
      pageUrl: ''
    },
    {
      name: 'summer/winter training',
      imgUrl: 'assets/images/summer.jpg',
      pageUrl: ''
    },
    {
      name: 'workshop & seminars',
      imgUrl: 'assets/images/workshop.jpg',
      pageUrl: ''
    },
    {
      name: 'support outsourcing',
      imgUrl: 'assets/images/outsource.jpg',
      pageUrl: ''
    },
  ];

  courses = [
    {
      imgUrl: 'assets/images/courses/erp1.png',
      title: 'ERP',
      subTitle: 'ERP ABAP4 / ERP ABAP ...',
      link: '',
      inquiryLink: ''
    },
    {
      imgUrl: 'assets/images/courses/data1.png',
      title: 'DATA SCIENCE',
      subTitle: 'SAS / R-PROGRAMMING ...',
      link: '',
      inquiryLink: ''
    },
    {
      imgUrl: 'assets/images/courses/checklist.png',
      title: 'SOFTWARE TESTING',
      subTitle: 'SQT / MANUAL / SELENIUM ...',
      link: '',
      inquiryLink: ''
    },
    {
      imgUrl: 'assets/images/courses/monitor.png',
      title: 'WEB & GRAPHIC DESIGNING',
      subTitle: 'WEB / GRAPHIC DESIGNING',
      link: '',
      inquiryLink: ''
    },
    {
      imgUrl: 'assets/images/courses/Microsoft.png',
      title: 'MICROSOFT COURSES',
      subTitle: '.NET COMPLETE / VBA / MS ...',
      link: '',
      inquiryLink: ''
    },
    {
      imgUrl: 'assets/images/courses/cad.png',
      title: 'CAD / CAM / CAE',
      subTitle: 'CAD / CAM / CAE',
      link: '',
      inquiryLink: ''
    },
    {
      imgUrl: 'assets/images/courses/cloud.png',
      title: 'CLOUD COMPUTING',
      subTitle: 'AWS / MS AZURE / SALESFORCE ...',
      link: '',
      inquiryLink: ''
    },
    {
      imgUrl: 'assets/images/courses/fullstack.png',
      title: 'FULL STACK DEVELOPMENT',
      subTitle: 'PHP / MONGO / JS / JOOMLA ...',
      link: '',
      inquiryLink: ''
    },
    {
      imgUrl: 'assets/images/courses/digital-marketing.png',
      title: 'DIGITAL MARKETING',
      subTitle: 'SEO/ SMO / SMM / PPC ...',
      link: '',
      inquiryLink: ''
    },
    {
      imgUrl: 'assets/images/courses/app.png',
      title: 'MOBILE APPLICATION',
      subTitle: 'ANDROID / IPHONE',
      link: '',
      inquiryLink: ''
    },
    {
      imgUrl: 'assets/images/courses/embedded.png',
      title: 'EMBEDDED & ROBOTICS',
      subTitle: 'ROBOTICS / MATLAB / AVR ...',
      link: '',
      inquiryLink: ''
    },
    {
      imgUrl: 'assets/images/courses/python.png',
      title: 'PYTHON',
      subTitle: '',
      link: '',
      inquiryLink: ''
    },
  ]

  gallery = [
    {
      imgUrl: 'assets/images/gallery/img1.jpeg'
    },
    {
      imgUrl: 'assets/images/gallery/img2.jpeg'
    },
    {
      imgUrl: 'assets/images/gallery/img3.jpeg'
    },
    {
      imgUrl: 'assets/images/gallery/img4.jpeg'
    },
    {
      imgUrl: 'assets/images/gallery/img5.jpeg'
    },
    {
      imgUrl: 'assets/images/gallery/img6.jpeg'
    },
    {
      imgUrl: 'assets/images/gallery/img1 - Copy.jpeg'
    },
    {
      imgUrl: 'assets/images/gallery/img2 - Copy.jpeg'
    },
    {
      imgUrl: 'assets/images/gallery/img3 - Copy.jpeg'
    },
    {
      imgUrl: 'assets/images/gallery/img4 - Copy.jpeg'
    },
    {
      imgUrl: 'assets/images/gallery/img5 - Copy.jpeg'
    },
    {
      imgUrl: 'assets/images/gallery/img6 - Copy.jpeg'
    },
  ]


  boxes =[
    {
      imgUrl: 'assets/images/box1.jpg',
      heading: 'WORKSHOP AT POWER MIND TECHNOLOGIES',
      text: 'Power Mind Technologies is specialized in delivering workshops on different technologies(voluntarily- these workshops are completly free of cost). These workshop can be considered as a co-curricular activity that enriches the knowledge base of student in an addition to what they learn at the college.',
      btnText: 'READ MORE'
    },
    {
      imgUrl: 'assets/images/box2.jpg',
      heading: 'OUR EXPERT MENTORS',
      text: 'Mentors play an essential role in an institute, the level of education, development of student’s skills are based on their trainers. If you do not have a good mentor then you may lagin many things from others and that is why we at Ducat gives you the facility of skilled employees so that you do not feel unsecured about the academics.',
      btnText: 'READ MORE'
    }
  ]

  placementLink = [
    {
      eventDate: '07',
      monthYear: 'DEC,2019',
      title: 'INFOSYS 2019-2020',
      link: '',
      text: 'Recruitment Drive for for 2019-2020 pass out (BE/B.TECH on Computer ...',
    },
    {
      eventDate: '07',
      monthYear: 'DEC,2019',
      title: 'INFOSYS 2019-2020',
      link: '',
      text: 'Recruitment Drive for for 2019-2020 pass out (BE/B.TECH on Computer ...',
    },
    {
      eventDate: '07',
      monthYear: 'DEC,2019',
      title: 'INFOSYS 2019-2020',
      link: '',
      text: 'Recruitment Drive for for 2019-2020 pass out (BE/B.TECH on Computer ...',
    },
    {
      eventDate: '07',
      monthYear: 'DEC,2019',
      title: 'INFOSYS 2019-2020',
      link: '',
      text: 'Recruitment Drive for for 2019-2020 pass out (BE/B.TECH on Computer ...',
    },
  ]
  ngOnInit(): void {
  }

}
