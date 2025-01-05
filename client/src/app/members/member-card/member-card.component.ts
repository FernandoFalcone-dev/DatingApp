import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-member-card',
    templateUrl: './member-card.component.html',
    styleUrls: ['./member-card.component.css'],
    standalone: true,
    imports: [NgIf, RouterLink]
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member | undefined;
  
  ngOnInit(): void {
  }

}
