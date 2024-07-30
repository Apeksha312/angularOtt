import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  constructor(private route:Router) { }
  galleryItems = [
    {
      name: 'Amazon',
      imgSrc: '../assets/amazon.jpg',
      alt: 'amazon',
      link: 'https://www.primevideo.com/collection/IncludedwithPrime',
      infoLine1: 'Amazon Prime Video offers a wide selection of movies and TV shows.',
      infoLine2: 'Enjoy exclusive Amazon Originals and free shipping on Amazon products.'
    },
    {
      name: 'Netflix',
      imgSrc: '../assets/netflix.jpg',
      alt: 'netflix',
      link: 'https://www.netflix.com/in/',
      infoLine1: 'Netflix is a streaming service that offers a variety of award-winning TV shows, movies, anime, documentaries, and more.',
      infoLine2: 'Watch as much as you want, anytime you want, without a single commercial – all for one low monthly price.'
    },
    {
      name: 'Disney',
      imgSrc: '../assets/disney.jpg',
      alt: 'disney',
      link: 'https://www.hotstar.com/in/home?ref=%2Fin',
      infoLine1: 'Disney+ Hotstar offers live streaming of sports events and exclusive TV shows.',
      infoLine2: 'Get access to Disney, Pixar, Marvel, Star Wars, and National Geographic content.'
    },
    {
      name: 'Voot',
      imgSrc: '../assets/voot.jpg',
      alt: 'voot',
      link: 'https://www.jiocinema.com/',
      infoLine1: 'Voot offers a wide variety of shows from Colors TV and many more regional networks.',
      infoLine2: 'Enjoy a vast library of shows, movies, and live channels.'
    },
    {
      name: 'Crunchyroll',
      imgSrc: '../assets/crunchyroll.jpg',
      alt: 'crunchyroll',
      link: 'https://www.jiocinema.com/',
      infoLine1: 'Crunchyroll is the world’s largest destination for anime and manga.',
      infoLine2: 'Watch the latest episodes and popular anime series.'
    }
    // Add more items as needed
  ];

  selectedItem: any = null;

  showInfo(item: any) {
    this.selectedItem = this.selectedItem === item ? null : item;
  }

  onSignup() {
    this.route.navigate(['/shopparent']);
  }
}
