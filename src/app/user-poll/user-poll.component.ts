import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-user-poll',
  templateUrl: './user-poll.component.html',
  styleUrls: ['./user-poll.component.css']
})
export class UserPollComponent  {
  user: string = '';
  constructor(public dialogRef: MatDialogRef<UserPollComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) { }

  
  
  setUser(){
      this.dialogRef.close({user:this.user,pic:this.data});
  }
}
