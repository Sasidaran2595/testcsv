import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCountReaderComponent } from './issue-count-reader.component';

describe('IssueCountReaderComponent', () => {
  let component: IssueCountReaderComponent;
  let fixture: ComponentFixture<IssueCountReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueCountReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueCountReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
