///<reference path="../artist.service.ts"/>
import {Component, OnInit} from '@angular/core';
import {ArtistService} from "../artist.service";
import {Artist} from "../../../Artist";
import {Router} from "@angular/router";


@Component({
//  moduleID: module.id,
  selector: 'search',
  templateUrl: './search.component.html',
  styles: [`
    .artistholder{
      background: #FFF;
      border:10px solid #272b30;
      padding-top:10px;
      cursor: pointer;
      overflow: hidden;
  
    }
    .artistholder:hover{
     
      opacity: 0.8;
    }
    .artistholder:hover .heart{
      display: block;
    }
    .heart{      
      background-image: url('app/search/heart-image.png');
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      left:0;
      height: 100%;
      z-index: 3;
      display: none;;
    }
  
    .artistName{
      color: #000;
    }
    ul{
      padding:0;
    }
    ul li {
      color: #fff;
      padding: 6px 10px 6px 4px;
      display: block;
      text-decoration: none;
      text-align: left;
      position: relative;
      }
    ul li:hover {
     background: #555;
      }
  `]
})

export class SearchComponent implements OnInit{
  zoekTerm: string;
  searchRes: Artist[];
  private src;

  constructor (public router: Router, private spotifyService: ArtistService) {
  }

  ngOnInit() {
    this.spotifyService.getCurrentUser().subscribe(user => {
        this.spotifyService.userInfo = user;

        this.spotifyService.getCurrentUsersPlaylists(20, 0).subscribe(playLists => {
          this.spotifyService.playListInfo = playLists.items;
        });
      },
      err => {
        this.router.navigate(['/login']);
        return false;
      });
  }

  followArtist (artistId: string) {
    this.spotifyService.follow('artist', artistId).subscribe(data => {
    });

  }

  searchMusic(){
   this.spotifyService.getArtist(this.zoekTerm).subscribe(res => {
       this.searchRes = res.artists.items;
     })
  }

  imgError (img) {
    img.target.src="app/search/no-image.png";
  };
}
