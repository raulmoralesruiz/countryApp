import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubcription?: Subscription;

  @Input()
  placeholder: string = '';

  @Input()
  initialValue: string = '';

  @Output() onValue = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubcription = this.debouncer
      .pipe(debounceTime(1000))
      .subscribe((value) => {
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubcription?.unsubscribe();
  }

  emitValue(event: string): void {
    this.onValue.emit(event);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
