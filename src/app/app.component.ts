import { Component,Inject,OnInit } from '@angular/core';
import  *  as  _movieList  from  '../assets/movieDB.json';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  movieList!: {
    Title: string; Year: string; Rated: string; Released: string; Runtime: string; Genre: string; Director: string; Writer: string; // movieList: any;
    Actors: string; Plot: string; Language: string; Country: string; Awards: string; Poster: string; Ratings: { Source: string; Value: string; }[]; Metascore: string; imdbRating: string; imdbVotes: string; imdbID: string; Type: string; DVD: string; BoxOffice: string; Production: string; Website: string; Response: string;
  }[];
  originalMovieList: any;
  // movieList: any;
  constructor(public dialog: MatDialog) {
    this.movieList = this.originalMovieList = (_movieList as any).default;

  }
  ngOnInit(): void {
    
    console.log(this.movieList);
        // console.log(
    //   JSON.stringify(this.movieList));
  }
  // tbis.movieList =  JSON.stringify(this.movieList);;
  search(e: any) {
    // console.log(e.target.value);
    let keyword: string = e.target.value;
    if (keyword)
    this.movieList = this.movieList.filter(x=>x.Title.toLowerCase().includes(keyword.toLowerCase()));
    else this.movieList = this.originalMovieList;
  }
  open(i:any) {
    const dialogRef = this.dialog.open(MovieInfoDialog, {
      width: '250px',
      data: this.movieList[i],
    });
  }


}

@Component({
  selector: 'movie-info-dialog',
  templateUrl: 'movie-info.dialog.html',
})
export class MovieInfoDialog {
  constructor(
    public dialogRef: MatDialogRef<MovieInfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}