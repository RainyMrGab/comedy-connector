import {Component, OnInit} from '@angular/core';
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
export class TeamListComponent implements OnInit {
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
    await this._fetchTeams();
    // subscription does not seem to work
  }

  private async _fetchTeams() {
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
      await this._fetchTeams();
      this.createForm.reset();
    } catch (e) {
      console.log('error creating team...', e);
    }
  }


}
