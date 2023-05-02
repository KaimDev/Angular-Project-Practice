import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent
{
  searchValue: string = "";
  iconChange: string = "";

  @Output() returnValue: EventEmitter<string> = new EventEmitter();

  kindIcon =
  {
    search: "pi pi-search",
    cancel: "pi pi-times"
  }

  ngOnInit(): void
  {
    this.iconChange = this.kindIcon.search;
  }

  onInputChange()
  {

    if (this.searchValue.trim().length)
    {
      this.iconChange = this.kindIcon.cancel;
    }
    else
    {
      this.iconChange = this.kindIcon.search;
    }

    this.returnValue.emit(this.searchValue);
  }

  iconClick()
  {
    this.searchValue = "";
    this.returnValue.emit('');
    this.iconChange = this.kindIcon.search;
  }
}
