import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgxTypedJsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'portfolio';

  typedStrings = ['Fullstack Developer', 'Bitcoin Enthusiast', 'Eternal learner'];

  socials = [
    { link: 'https://www.linkedin.com/in/joao-furlan-software/', svg: 'assets/icons/linkedin.svg', label: 'LinkedIn' },
    { link: 'https://www.instagram.com/furlan.jp/', svg: 'assets/icons/instagram.svg', label: 'Instagram' },
    { link: 'https://github.com/jpfurlan', svg: 'assets/icons/github.svg', label: 'GitHub' },
    { link: 'https://x.com/jpgfurlan', svg: 'assets/icons/twitter.svg', label: 'Twitter' },
    { link: 'https://www.youtube.com/@jp.furlan', svg: 'assets/icons/youtube.svg', label: 'YouTube' },
  ];

  projects = [
    {
      title: 'LSREYES',
      subtitle: 'App for downloading images with the laser eye',
      description: 'You can add the laser eye to an image of your choice and download it, with payment via Lightning.',
      link: 'https://www.lsreyes.com'
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
