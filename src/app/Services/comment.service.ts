import { Injectable } from '@angular/core';
import { Configuration } from '../Configuration/configuration';
import { Comment } from '../Types/comment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl = new Configuration().backendUrl + '/training-programs';
  private commentSent = new BehaviorSubject<boolean>(false);
  constructor() {}

  public async sendComment(fitnessProgramId: number, message: string) {
    const response = await fetch(
      this.baseUrl + '/' + fitnessProgramId + '/comments',
      {
        body: JSON.stringify(message),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    this.commentSent.next(!this.commentSent);
  }

  public async getAll(id: number): Promise<Comment[]> {
    const response = await fetch(this.baseUrl + '/' + id + '/comments', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  }

  isCommentSent(): Observable<boolean> {
    return this.commentSent.asObservable();
  }
}
