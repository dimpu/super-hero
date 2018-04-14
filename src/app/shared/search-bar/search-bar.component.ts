import { Component, OnInit , ElementRef, Input, OnChanges} from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms'



@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnChanges {
  @Input() open = false;

  form: FormGroup;
  searchInput: FormControl;
  searchInputEl: HTMLInputElement;

  constructor(public el: ElementRef, public formBuilder: FormBuilder) {}

  ngOnChanges(changes: any): void {
    if (changes.open.currentValue) {
      this.searchInput.setValue('');
    }
  }

  ngOnInit(): void {
    this.searchInput = new FormControl();

    this.form = this.formBuilder.group({
      search: this.searchInput
    });

    this.searchInputEl = this.el.nativeElement.querySelector('input');

    this.el.nativeElement
      .querySelector('.search-bar')
      .addEventListener('transitionend', () => {
        if (this.open) {
          this.searchInputEl.focus();
        }
      }, false);
  }

  submit(): void {
    if (this.form.valid) {
      const value = this.searchInput.value.trim();
      // if (value.length) {
      //   this.router.navigate(['/search', {q: value}]);
      //   this.searchInputEl.blur();
      // }
    }
  }
}
