import { Component, Input } from '@angular/core';
import { Member } from 'src/app/models/member';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-member-card',
    templateUrl: './member-card.component.html',
    styleUrls: ['./member-card.component.css'],
    standalone: true,
    imports: [RouterLink]
})
export class MemberCardComponent {
  @Input() member: Member | undefined;
  
}
