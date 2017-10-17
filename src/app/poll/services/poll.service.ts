import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CONSTANTS} from '../../commons/constants';
import {GenericService} from '../../commons/generic.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class PollService extends GenericService {

    constructor(http: Http) {
        super(http);
    }


    public listPlayers(page: number): Observable<any> {
        const urlJob = `${CONSTANTS.urlApiFifa}`;
        return this.restGet(urlJob);

    }
    public listPic(category: string): Observable<any> {
        const urlJob = `${CONSTANTS.urlApiPic}${category}/400x300`;
        return this.restGet(urlJob);

    }


    public listUsers(): Observable<any> {
        const urlJob = `${CONSTANTS.urlApiPic}`;
        return this.restGet(urlJob);
    }

    public votesByUser(user: any): Observable<any> {
      const urlJob = `${CONSTANTS.urlApiPic}`;
        return this.restGet(urlJob);
    }

    public saveVote(vote: any): Observable<any> {
        const urlJob = `${CONSTANTS.urlApiPic}/billing/`;
        return this.restPost(vote, urlJob);
    }

}
