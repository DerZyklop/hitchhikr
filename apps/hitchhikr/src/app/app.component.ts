import { ChangeDetectorRef, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';

type CatId = number;

export interface Cat {
  id : CatId;
  name: string;
}

@Component({
  selector: 'hitchhikr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // hello$ = this.http.get<Message>('/api/app/hello');
  // cats$ = this.http.get<Cat[]>('/api/cats');
  cats$ = new BehaviorSubject<Cat[]>([]);
  // goodbye$; // = this.http.get<Message>('/api/goodbye');

  constructor(
    private http: HttpClient,
    private changeDetectorRef : ChangeDetectorRef,
    ) {
    // this.http.post('/api/goodbye', { message: 'Tschü!' });
    // this.goodbye$ = this.http.get<Message>('/api/app/goodbye');
    // this.cats$ = this.http.get<string[]>('/api/cats');
    // this.hello$.subscribe((item) => { console.log(item); });
    // this.http.post('/api/app/goodbye', { message: 'Tschü!' });
    // this.cats$.pipe(switchMap(data => this.http.get<Cat[]>('/api/cats')));
    this.http.get<Cat[]>('/api/cats').subscribe(data => {
      this.cats$.next(data);
    });
  }

  fetchAllData() {
    this.http.get<Cat[]>('/api/cats').subscribe(data => {
      this.cats$.next(data);
    });
  }

  public removeCat(id : CatId) : void {
    this.http.delete<Cat>(
      `/api/cats/${id}`
    ).subscribe((cat) => {
      this.cats$.next(this.cats$.getValue().filter(item => item.id !== cat.id));
    });
  }

  public addCat() : void {
    this.http.post<Cat>(
      '/api/cats',
      { name: 'Findus' }
    ).subscribe((newCat) => {
      this.cats$.next([...this.cats$.getValue(), newCat]);
    });
    // .subscribe((cat) => {
    //   this.cats$.next([cat]);
    //   // console.log(next);
    //   // // foo();
    //   // this.cats$ = this.cats$.pipe();

    //   // // this.cats$ = foo;
    //   // this.changeDetectorRef.detectChanges();
    // });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
