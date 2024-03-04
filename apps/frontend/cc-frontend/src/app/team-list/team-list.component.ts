import { Component, OnDestroy, OnInit } from '@angular/core';
import {NgForOf, TitleCasePipe} from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {generateClient, type Client} from 'aws-amplify/api';
import {Team, TeamType, Interest} from '../graphql/cc-graphql.service'
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations'
import * as subscriptions from '../graphql/subscriptions'

const CITY_DEFAULT: string = "pittsburgh";
const CREATE_DEFAULTS = {
  teamContactId: "ade6f6a2-70ee-4fa8-bfa4-c0f1ec6e2625", // Brian in dev
  city: CITY_DEFAULT
};

@Component({
  selector: 'cc-team-list',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, TitleCasePipe],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss'
})
export class TeamListComponent implements OnInit, OnDestroy {
  public createForm: FormGroup;
  public client: Client;
  public types: string[];
  public interests: string[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private subscription: any = null;
  public teams: Team[];

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      interests: ['', Validators.required]
    });

    this.client = generateClient();
    this.types = Object.keys(TeamType);
    this.interests = Object.keys(Interest);
    this.teams = [];
  }

  /**
   * Fetch teams when app loads
   */
  async ngOnInit() {
    try {
      const response = await this.client.graphql({
        query: queries.teamsByCity,
        variables: {
          city: CITY_DEFAULT
        }
      });
      this.teams = response.data.teamsByCity?.items;
    } catch (e) {
      console.log('error fetching teams', e);
    }

    /* subscribe to new todos being created */
    this.subscription = this.client.graphql({
      query: subscriptions.onCreateTeam
    }).subscribe({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      next: (event: any) => {
        const newTeam = event.data.onCreateTeam;
        if (this.teams) {
          this.teams = [newTeam, ...this.teams];
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  public async onCreate(team: Team) {
    try {
      const input: Team = {...CREATE_DEFAULTS, ...team};
      const response = await this.client.graphql({
        query: mutations.createTeam,
        variables: {
          input: input
        }
      });
      console.log('team created!', response);
      this.createForm.reset();
    } catch (e) {
      console.log('error creating team...', e);
    }
  }


}
