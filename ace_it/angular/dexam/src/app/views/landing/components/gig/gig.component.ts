import {Component, Input, OnInit} from '@angular/core';
import {GigData} from "../../pages/quick-gigs/state/gig.model";

@Component({
  selector: 'app-gig',
  template: `
    <section class="my-5">

      <!-- Grid row -->
      <!--        <div class="row">-->

      <!-- Grid column -->
      <div class=" centre">

        <!-- Newsfeed -->
        <div class="mdb-feed ">
          <div  *ngIf="gig">
            <!--   <div class="card-body">-->
            <!--    <h5 class="card-title">{{ gig.title }}</h5>-->
            <!--    <p class="card-text">{{ gig.text }}</p>-->
            <!--  </div>-->
            <div class="news">

              <!-- Label -->
              <div class="label">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg" class="rounded-circle z-depth-1-half">
              </div>

              <!-- Excerpt -->
              <div class="excerpt">

                <!-- Brief -->
                <div class="brief">
                  <a class="name">John Doe</a> wants help with his Mathematica assignment.
                  <div class="date">1 hour ago</div>
                </div>
                <div class="added-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero inventore,
                  iste quas libero eius? Vitae sint neque animi alias sunt dolor, accusantium ducimus, non placeat
                  voluptate.</div>

                <!-- Feed footer -->
                <div class="feed-footer">
                  <div class="row">
                    <div class="col-sm-2">
                      <a class="like">
                        <mdb-icon fas icon="thumbs-up"></mdb-icon>
                        <span>Accept</span>
                      </a>
                    </div>
                    <div class="col-sm-2">
                      <a class="like">
                        <mdb-icon fas icon="money-check-alt"></mdb-icon>
                        <span>Pay: $50</span>
                      </a>
                    </div>
                    <div class="col-sm-2">
                      <a class="like">
                        <mdb-icon far icon="calendar-alt"></mdb-icon>
                        <span>Deadline: May 2</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
              <!-- Excerpt -->

            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./gig.component.scss']
})
export class GigComponent implements OnInit {
  @Input() gig: GigData;

  constructor() { }

  ngOnInit() {
  }

}
