import { Component, OnInit } from '@angular/core';
import { Note } from '../note-home/note-home.page';
import { NotesService } from '../notes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.page.html',
  styleUrls: ['./note-details.page.scss'],
})
export class NoteDetailsPage implements OnInit {

  note: Note;
  noteId: number;
  new: boolean;
  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if (params.id) {
        this.note = this.notesService.get(params.id);
        this.noteId = params.id;
        this.new = false;
      } else {
        this.new = true;
      }
    });
  }
  onSubmit() {
    if (this.new) {
      console.log(this.note);
      this.notesService.add(this.note);
    } else {
      this.notesService.update(this.noteId, this.note.title, this.note.body);
    }
    this.router.navigateByUrl('');
  }
  onCancel() {
    this.router.navigateByUrl('');
  }

}
