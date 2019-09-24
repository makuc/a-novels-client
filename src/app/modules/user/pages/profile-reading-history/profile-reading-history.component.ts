import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { UserProfile } from 'src/app/shared/models/users/user-profile.model';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profile-reading-history',
  templateUrl: './profile-reading-history.component.html',
  styleUrls: ['./profile-reading-history.component.scss']
})
export class ProfileReadingHistoryComponent implements OnInit, OnDestroy {

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
