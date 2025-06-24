import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxTypedJsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';

  protected typedStrings = ['Fullstack Developer', 'Angular Lover', 'Bitcoin Enthusiast'];

  protected socials = [
    { link: 'https://www.linkedin.com/in/joao-furlan-software/', svg: 'assets/icons/linkedin.svg', label: 'LinkedIn' },
    { link: 'https://www.instagram.com/furlan.jp/', svg: 'assets/icons/instagram.svg', label: 'Instagram' },
    { link: 'https://github.com/jpfurlan', svg: 'assets/icons/github.svg', label: 'GitHub' },
    { link: 'https://x.com/jpgfurlan', svg: 'assets/icons/twitter.svg', label: 'Twitter' },
    { link: 'https://www.youtube.com/@jp.furlan', svg: 'assets/icons/youtube.svg', label: 'YouTube' },
  ];

  protected projects = [
    {
      title: 'Project 1',
      subtitle: 'Subtitle 1',
      description: 'Description of project one.',
      link: '#'
    },
    {
      title: 'Project 2',
      subtitle: 'Subtitle 2',
      description: 'Description of project two.',
      link: '#'
    },
    {
      title: 'Coming Soon',
      subtitle: 'Subtitle',
      description: 'More projects on the way.',
      comingSoon: true
    }
  ];
}
