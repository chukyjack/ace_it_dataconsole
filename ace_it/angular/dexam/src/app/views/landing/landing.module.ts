
import { ScrollToDirective } from './helpers/scrollTo.directives';
import { WINDOW_PROVIDERS } from './helpers/window.helpers';
import { NgModule } from '@angular/core';
// import { NgForm } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from "@ngu/carousel";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingV1Component } from './landing-v1/landing-v1.component';
import { Intro1Component } from './components/intro1/intro1.component';
import { Intro2Component } from './components/intro2/intro2.component';
import { Works1Component } from './components/works1/works1.component';
import { Works2Component } from './components/works2/works2.component';
import { WorksCarouselComponent } from './components/works-carousel/works-carousel.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesCauroselComponent } from './components/services-caurosel/services-caurosel.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TestimonialCauroselComponent } from './components/testimonial-caurosel/testimonial-caurosel.component';
import { PricingOneComponent } from './components/pricing-one/pricing-one.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingV2Component } from './landing-v2/landing-v2.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeaturesTwoComponent } from './components/features-two/features-two.component';
import { BestComponent } from './components/best/best.component';
import { LeftImageComponent } from './components/left-image/left-image.component';
import { RightImageComponent } from './components/right-image/right-image.component';
import { TeamComponent } from './components/team/team.component';
import { NewsComponent } from './components/news/news.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { NewsTwoComponent } from './components/news-two/news-two.component';
import { IntroThreeComponent } from './components/intro-three/intro-three.component';
import { LandingV3Component } from './landing-v3/landing-v3.component';
import { IntroFourComponent } from './components/intro-four/intro-four.component';
import { LandingV4Component } from './landing-v4/landing-v4.component';
import { IntroFiveComponent } from './components/intro-five/intro-five.component';
import { LandingV5Component } from './landing-v5/landing-v5.component';
import { LandingV6Component } from './landing-v6/landing-v6.component';
import { IntroSixComponent } from './components/intro-six/intro-six.component';
import { IntroSevenComponent } from './components/intro-seven/intro-seven.component';
import { LandingV7Component } from './landing-v7/landing-v7.component';
import { IntroEightComponent } from './components/intro-eight/intro-eight.component';
import { LandingV8Component } from './landing-v8/landing-v8.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderWhiteComponent } from './components/header-white/header-white.component';
import { IntroNineComponent } from './components/intro-nine/intro-nine.component';
import { LandingV9Component } from './landing-v9/landing-v9.component';
import { IntroTenComponent } from './components/intro-ten/intro-ten.component';
import { LandingV10Component } from './landing-v10/landing-v10.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemosComponent } from './components/demos/demos.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';
import { IntroElevenComponent } from './components/intro-eleven/intro-eleven.component';
import { LandingV11Component } from './landing-v11/landing-v11.component';
import {OpportunityComponent} from './components/opportunity/opportunity.component';
import { ExpandabletableComponent } from './components/expandabletable/expandabletable.component';
import {MatTableModule} from '@angular/material/table';
import { SortPaginateTableComponent } from './components/sort-paginate-table/sort-paginate-table.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { OpportunitypageComponent } from './pages/opportunitypage/opportunitypage.component';
import { CoursepageComponent } from './pages/coursepage/coursepage.component';
import { SchedulepageComponent } from './pages/schedulepage/schedulepage.component';
import { StudentspageComponent } from './pages/studentspage/studentspage.component';
import { TutorpageComponent } from './pages/tutorpage/tutorpage.component';
import { InvoicepageComponent } from './pages/invoicepage/invoicepage.component';
import { CallusboxComponent } from './components/callusbox/callusbox.component';
import { TutorListComponent } from './components/tutor-list/tutor-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { UpcomingSessionListComponent } from './components/upcoming-session-list/upcoming-session-list.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { UserprofilepageComponent } from './pages/userprofilepage/userprofilepage.component';
import {MatButtonModule} from '@angular/material/button';
import { ProfileComponent } from './pages/profile/profile.component';
import { OpportunitiesComponent } from './pages/opportunities/opportunities.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FilterPipe } from './pages/schedule/filter.pipe';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {IntlModule} from "@progress/kendo-angular-intl";
import {DateInputsModule} from "@progress/kendo-angular-dateinputs";
import { TimePickerComponent } from './components/time-picker/time-picker.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxTimePickerModule,
  IgxInputGroupModule,
  IgxIconModule,
  IgxSelectModule, IgxDatePickerModule
} from 'igniteui-angular';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BillingComponent } from './pages/billing/billing.component';
import { ChatComponent } from './pages/chat/chat.component';
import {
    AutoCompleterModule,
    BadgeModule,
    ButtonsModule,
    CardsFreeModule,
    CardsModule, CarouselModule, DatepickerModule,
    DropdownModule,
    IconsModule,
    NavbarModule, SelectModule, StickyHeaderModule,
    WavesModule, TimePickerModule, InputsModule, TableModule, ModalModule, FileInputModule
} from 'ng-uikit-pro-standard';
import { MegaMenuComponent } from './components/mega-menu/mega-menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactBoxComponent } from './components/contact-box/contact-box.component';
import { ContactBox2Component } from './components/contact-box2/contact-box2.component';
import { NewFooterComponent } from './components/new-footer/new-footer.component';
import { SeenOnComponent } from './components/seen-on/seen-on.component';
// Angular Animations Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchSelectComponent } from './components/search-select/search-select.component';
import { RemoteTablesComponent } from './components/remote-tables/remote-tables.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { QuickGigsComponent } from './pages/quick-gigs/quick-gigs.component';
import { ShowMoreComponent } from './components/show-more/show-more.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { GigComponent } from './components/gig/gig.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { ToastModule } from 'ng-uikit-pro-standard';
import { LowerNavComponent } from './components/lower-nav/lower-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
// import {DemoMaterialModule} from './material-module';

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        NguCarouselModule,
        NgbModule,

        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSortModule,
        MatInputModule,
        MatButtonModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatNativeDateModule,
        MatDatepickerModule,
        DateInputsModule,
        IntlModule,
        // BrowserModule,
        // BrowserAnimationsModule,
        IgxTimePickerModule,
        IgxInputGroupModule,
        IgxIconModule,
        IgxSelectModule,
        IgxDatePickerModule,
        MatProgressSpinnerModule,
        CardsModule.forRoot(),
        BadgeModule,
        IconsModule,
        ButtonsModule,
        CardsFreeModule,
        DropdownModule.forRoot(),
        NavbarModule,
        WavesModule,
        StickyHeaderModule,
        CarouselModule,
        SelectModule,
        DatepickerModule,
        TimePickerModule,
        InputsModule,
        TableModule,
        ReactiveFormsModule,
        ModalModule,
        AutoCompleterModule,
        FileInputModule,
        ToastModule.forRoot(),
    ],
  declarations: [
    LandingV1Component,
    Intro1Component,
    Intro2Component,
    Works1Component,
    Works2Component,
    WorksCarouselComponent,
    ServicesComponent,
    ServicesCauroselComponent,
    TestimonialComponent,
    TestimonialCauroselComponent,
    PricingOneComponent,
    ContactFormComponent,
    FooterComponent,
    LandingV2Component,
    FeaturesComponent,
    FeaturesTwoComponent,
    BestComponent,
    LeftImageComponent,
    RightImageComponent,
    TeamComponent,
    NewsComponent,
    FaqsComponent,
    NewsTwoComponent,
    IntroThreeComponent,
    LandingV3Component,
    IntroFourComponent,
    LandingV4Component,
    IntroFiveComponent,
    LandingV5Component,
    LandingV6Component,
    IntroSixComponent,
    IntroSevenComponent,
    LandingV7Component,
    IntroEightComponent,
    LandingV8Component,
    HeaderComponent,
    ScrollToDirective,
    HeaderWhiteComponent,
    IntroNineComponent,
    LandingV9Component,
    IntroTenComponent,
    LandingV10Component,
    DemosComponent,
    BlogDetailsComponent,
    BlogDetailsPageComponent,
    IntroElevenComponent,
    LandingV11Component,
    OpportunityComponent,
    ExpandabletableComponent,
    SortPaginateTableComponent,
    OpportunitypageComponent,
    CoursepageComponent,
    SchedulepageComponent,
    StudentspageComponent,
    TutorpageComponent,
    InvoicepageComponent,
    CallusboxComponent,
    TutorListComponent,
    StudentListComponent,
    UpcomingSessionListComponent,
    ScheduleListComponent,
    UserprofilepageComponent,
    ProfileComponent,
    OpportunitiesComponent,
    ScheduleComponent,
    FilterPipe,
    TimePickerComponent,
    DatePickerComponent,
    ScheduleFormComponent,
    SideNavComponent,
    SpinnerComponent,
    BillingComponent,
    ChatComponent,
    MegaMenuComponent,
    CarouselComponent,
    ContactBoxComponent,
    ContactBox2Component,
    NewFooterComponent,
    SeenOnComponent,
    SearchSelectComponent,
    RemoteTablesComponent,
    CoursesComponent,
    QuickGigsComponent,
    ShowMoreComponent,
    InfiniteScrollComponent,
    GigComponent,
    DashboardComponent,
    FileUploadComponent,
    NavigationsComponent,
    LowerNavComponent,
    TopNavComponent,

  ],
  exports: [
    MegaMenuComponent
  ],
  providers: [WINDOW_PROVIDERS]

  // exports: ScrollToDirective
})
export class LandingModule {}
