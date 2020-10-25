import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from './../../../_services/posts.service';
import { CryptoService } from '../../../_services/crypto.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  fileToUpload: File = null;
  postForm: FormGroup;
  submitted = false;
  constructor(
    public cryptoService: CryptoService,
    public postsService: PostsService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    const user = JSON.parse(this.cryptoService.Decrypt(localStorage.getItem('user')));
    console.log(user);
    this.postForm = this.formBuilder.group({
      content: ['', Validators.required],
      title: ['', Validators.required],
      creator_id: [user.id]
    });
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.postForm.invalid) {
      return;
    }
    if (this.fileToUpload) {
      this.postsService.uploadFile(this.fileToUpload).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
    } else {
      this.postsService.addPosts(this.postForm.value).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
    }


  }
}
