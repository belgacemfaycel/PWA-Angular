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
    this.postForm = this.formBuilder.group({
      content: ['', Validators.required],
      title: ['', Validators.required],
      creator_id: [user.id],
      filename: ['default'],
    });
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.postForm.invalid) {
      return;
    }
    if (this.fileToUpload) {
      const formData: FormData = new FormData();
      formData.append('image', this.fileToUpload, this.fileToUpload.name);
      this.postsService.uploadFile(formData).subscribe(response => {
        const result: any = response;
        this.postForm.controls.filename.setValue(result.filename);
        this.postsService.addPosts(this.postForm.value).subscribe(data => {
          console.log(data);
        }, error => {
          console.log(error);
        });
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
