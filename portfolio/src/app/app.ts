import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';

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
