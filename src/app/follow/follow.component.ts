import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {ArtistService} from "../artist.service";
import {Router} from "@angular/router";
import {Artist} from "../../../Artist";


@Component({
//  moduleID: module.id,
  selector: 'follow',
  templateUrl: 'follow.component.html',
})

export class FollowComponent implements OnInit{
  private http;

  constructor (public router: Router, private spotifyService: ArtistService) {
  }
initFollowList(){
  this.spotifyService.getCurrentUser().subscribe(user => {
      this.spotifyService.userInfo = user;
      this.spotifyService.following('artist').subscribe(followed => {
        this.spotifyService.favoritesInfo = followed.artists.items;
        console.log(followed);
      });
    },
    err => {
      this.router.navigate(['/login']);
      return false;
    });
}
  ngOnInit() {
    this.initFollowList();
  }

  unfollowArtist (artistId: string) {
    this.spotifyService.unfollow('artist', artistId).subscribe(data => {
      this.initFollowList();
    });
  }


  imgError (img) {
    img.target.src="app/search/no-image.png";
  };


}
