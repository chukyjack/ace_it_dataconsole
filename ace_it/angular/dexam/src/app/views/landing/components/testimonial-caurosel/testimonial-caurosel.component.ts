import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from "@ngu/carousel";
@Component({
  selector: "app-testimonial-caurosel",
  templateUrl: "./testimonial-caurosel.component.html",
  styleUrls: ["./testimonial-caurosel.component.scss"]
})
export class TestimonialCauroselComponent implements OnInit {
  public carouselTileItems: Array<any> = [
    {
      testimonial: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      user_image: "./assets/images/landing/faces/15.jpg",
      user_name: "Jhone Doe",
      user_designation: "Software Engineer"
    },
    {
      testimonial: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      user_image: "./assets/images/landing/faces/3.jpg",
      user_name: "Smith DOe",
      user_designation: "Creative Manager"
    },
    {
      testimonial: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      user_image: "./assets/images/landing/faces/5.jpg",
      user_name: "Micheal Clark",
      user_designation: "Marketing Manager"
    },
    {
      testimonial: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      user_image: "./assets/images/landing/faces/12.jpg",
      user_name: "Jassica june",
      user_designation: "Frontend Developer"
    },
    {
      testimonial: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      user_image: "./assets/images/landing/faces/13.jpg",
      user_name: "Gray Simon",
      user_designation: "Production Leader"
    },
    {
      testimonial: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      user_image: "./assets/images/landing/faces/5.jpg",
      user_name: "Jhone Doe",
      user_designation: "Software Engineer"
    }
  ];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)"
  };
  constructor() {}

  ngOnInit() {}
}
