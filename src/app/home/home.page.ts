import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchTitle:'';
  movieApiUrl ='';
  movieData = {
    title: '',
    description: '',
    imageUrl: ''
  };

  constructor(public http : HttpClient){
   
     
  }

  readAPI(URL : string){
    return this.http.get(URL);
  }
 
  searchMovie(){
    const search = encodeURIComponent(this.searchTitle).trim();
   this.movieApiUrl = 'http://www.omdbapi.com/?apikey=593c140b&t=' + search;
    this.readAPI(this.movieApiUrl)
    .subscribe((data) => {
      console.log(data);
      this.movieData.title = data['Title'];
      this.movieData.description = data['Plot'];
      this.movieData.imageUrl = data['Poster'];
    });
  }
}