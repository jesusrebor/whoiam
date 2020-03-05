import { Component } from '@angular/core';

import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faFacebook,
  faGithub,
  faSpotify
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Jesus M Rebordinos';
  job = 'Search Engineer';
  description = 'Aquí andamos en el workshop. A ver si conseguimos que aparezcan los cambios.';
  smallImage = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80';
  bigImage = 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c';

  // Icons
  rrss = [
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/jes%C3%BAs-mart%C3%ADnez-rebordinos-76775315a' },
    { icon: faInstagram, url: 'https://www.instagram.com/jesusrebor' },
    { icon: faTwitter, url: 'https://twitter.com/jesusrebor' },
    { icon: faFacebook, url: 'https://www.facebook.com/jesusrebor' },
    { icon: faGithub, url: 'https://github.com/jesusrebor' },
    { icon: faSpotify, url: 'https://open.spotify.com/user/jesusrebor' }
  ]

  navigateTo(url: string) {
    window.open(url);
  }

}
