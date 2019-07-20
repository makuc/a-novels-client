import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { UserProfile } from 'src/app/shared/models/user-profile.model';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profile-favorites',
  templateUrl: './profile-favorites.component.html',
  styleUrls: ['./profile-favorites.component.scss']
})
export class ProfileFavoritesComponent implements OnInit, OnDestroy {

  private destroyer = new Subject<void>();

  public user: UserProfile;
  public navId: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
      .pipe(takeUntil(this.destroyer))
      .subscribe(data => {
        this.user = data.user;
        this.navId = data.navId;
      });
  }

  ngOnDestroy() {
    this.destroyer.next();
    this.destroyer.unsubscribe();
  }

}
