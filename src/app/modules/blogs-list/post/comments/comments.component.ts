import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpCommentService } from 'src/app/core/http/comment/httpComment.service';
import { Comment } from 'src/app/core/model/comment';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comment: Comment;

  postCreationForm: FormGroup;

  onOpenAnswer: boolean = false;

  constructor(public auth: AuthService, private commentHttp: HttpCommentService) { }

  ngOnInit(): void {
    this.postCreationForm = this.createNewFormGroup();
    console.log(this.comment)
  }

  createNewFormGroup() {
    return new FormGroup({
      content: new FormControl('', Validators.required)
    });
  }

  onCreateComment() {
    this.onOpenAnswer = false;
  }

}
