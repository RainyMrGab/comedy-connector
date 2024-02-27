import { Component } from '@angular/core';
import {NgForOf, TitleCasePipe} from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {generateClient, type Client} from 'aws-amplify/api';
// import {Team, ListTeamsQuery} from '../graphql/cc-graphql.service'
import {Team, TeamType, Interest} from '../graphql/cc-graphql.service'
import * as mutations from '../graphql/mutations'

@Component({
  selector: 'cc-team-list',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, TitleCasePipe],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss'
})
export class TeamListComponent {
  public createForm: FormGroup;
  public client: Client;
  public types: string[];
  public interests: string[];

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      interests: ['', Validators.required]
    });

    this.client = generateClient();
    this.types = Object.keys(TeamType);
    this.interests = Object.keys(Interest);
  }

  public async onCreate(team: Team) {
    try {
      const response = await this.client.graphql({
        query: mutations.createTeam,
        variables: {
          input: team
        }
      });
      console.log('team created!', response);
      this.createForm.reset();
    } catch (e) {
      console.log('error creating team...', e);
    }
  }

}
