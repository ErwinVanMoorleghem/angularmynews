import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }
  getArticles(): Article[] {
    let articles: Article[] = [];

    let article1: Article = {
      id: 1,
      title: "A tittel",
      subtitle: "Subtitle a",
      imageUrl: "https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
      imageCaption: "caption image",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
      quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
      dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
      necessitatibus itaque explicabo?`,
      author: "Michaël Cloots",
      publishDate: "28/11/2020"
    };

    let article2: Article = {
      id: 2,
      title: "Title article 2",
      subtitle: "Subtitle article 2",
      imageUrl: "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
      imageCaption: "caption image 2",
      content: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
      quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
      dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
      necessitatibus itaque explicabo?`,
      author: "Florian Smeyers",
      publishDate: "30/11/2020"
    };

    articles.push(article1);
    articles.push(article2);

    return articles;
  }
}
