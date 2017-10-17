import {Component, OnInit} from '@angular/core';
import {PollService} from './services/poll.service'
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Vote} from './model/votes'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserPollComponent} from '../user-poll/user-poll.component'
import {MatDialog} from '@angular/material';




@Component({
    selector: 'app-poll',
    templateUrl: './poll.component.html',
    styleUrls: ['./poll.component.css'],
    providers: [PollService, AngularFireAuth]
})
export class PollComponent implements OnInit {

    public dataLeft: string = '';
    public dataRigth: string= '';
    public playersPage: any;
    public user:string = '';
    itemsCol: AngularFirestoreCollection<Vote>;
    items: Observable<Vote[]>;

    constructor(private pollService: PollService,  
                private afs: AngularFirestore,
                public dialog: MatDialog) {
                      

    }

    ngOnInit() {
        
        this.itemsCol = this.afs.collection('votes');
        this.items = this.itemsCol.valueChanges();
        this.getPics();
    }
    
    

    private getPics(): void {
       
        this.pollService.listPic('nature').subscribe(result => {
            const r: any = result as Response;
            this.dataLeft = r.url;
        },
            err => {
                console.error('err de listPlayers ' + err);
            }
        );
        
        this.pollService.listPic('people').subscribe(result => {
            const r: any = result as Response;
            this.dataRigth = r.url;
        },
            err => {
                console.error('err de listPlayers ' + err);
            }
        );
    }

    

    public saveVote(pic: string ): void {
        if (this.user == ''){
            this.openDialog(pic);
            return;
        }
        const vote:Vote = new Vote();
        vote.picLeft = this.dataLeft;
        vote.picRight = this.dataRigth;
        vote.picSel = pic;
        vote.user = this.user;
      
        this.afs.collection('votes').add({'picLeft':this.dataLeft,'picRight':this.dataRigth,'picSel':pic,'user':this.user});
          this.dataLeft = '';
        this.dataRigth = '';
        this.getPics();
    }
    
    
    openDialog(pic: string): void {
    let dialogRef = this.dialog.open(UserPollComponent, {
      width: '400px',   
      data:{data: pic}});
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user = result.user;
      this.saveVote(result.pic.data);
    });
  }
 /*   
    login() {
        this.afAuth.auth.signInAnonymously();

  }

logout() {
    this.afAuth.auth.signOut();
  }
  */
  
}
