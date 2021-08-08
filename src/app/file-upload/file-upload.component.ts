import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public array;
  ele = "";

  constructor(
    private router: Router
  ) { 
  }

  ngOnInit(): void {
    let input = document.querySelector('input');
    

    input.addEventListener('change', () => {
      let files = input.files;
      
      if(files.length == 0) return;

      const file = files[0];

      let reader = new FileReader();

      reader.onload = (e) => {
        const file = e.target.result;
        const lines = JSON.stringify(file);
        const arr = JSON.parse(lines);
        localStorage.setItem('upload', arr);
        this.array = localStorage.getItem('upload');
      }
      reader.onerror = (e) => alert(e.target.error.name);
      reader.readAsText(file);
    });
  }
  map(): void {
    this.router.navigateByUrl('/map').then();
  }

  logout(): void {
    this.router.navigateByUrl('/login').then();
  }

  dashboard(): void {
    this.router.navigateByUrl('/dashboard').then();
  }

}
