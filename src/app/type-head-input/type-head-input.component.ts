import {Component, Injectable,OnInit} from '@angular/core';
import {Jsonp, URLSearchParams,Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {distinctUntilChanged} from 'rxjs/operator/distinctUntilChanged';
import {_catch} from 'rxjs/operator/catch';
import {_do} from 'rxjs/operator/do';
import {switchMap} from 'rxjs/operator/switchMap';
import {of} from 'rxjs/observable/of';

const states = [{id:1,name:'Alabama'}, {id:1,name:'Alaska'}, {id:1,name:'American Samoa'}];
@Injectable()
export class WikipediaService {
  constructor(private _jsonp: Jsonp,private http:Http) {}
  private url = 'http://localhost:8081/getHeroes';  // URL to web api
  search(term: string) {
    if (term === '') {
      return of.call([]);
    }
    return map.call(this.http.get(this.url),
      response => (
        <string[]> response.json())
        // console.log(response.json()[1]);
      );
  }
}
@Component({
  selector: 'app-type-head-input',
  templateUrl: './type-head-input.component.html',
   providers: [WikipediaService],
  styleUrls: ['./type-head-input.component.css']
})
export class TypeHeadInputComponent  {

  model: any;
    searching = false;
    searchFailed = false;

    constructor(private _service: WikipediaService) {}

      formatter = (result: any) => result.name.toUpperCase();

    search = (text$: Observable<string>) =>
      _do.call(
        switchMap.call(
          _do.call(
            distinctUntilChanged.call(
              debounceTime.call(text$, 300)),
            () => this.searching = true),
          term =>
            _catch.call(
              _do.call(this._service.search(term), () => this.searchFailed = false),
              () => {
                this.searchFailed = true;
                return of.call([]);
              }
            )
        ),
        () => this.searching = false);

}
