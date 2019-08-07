import { Component, ViewChild } from '@angular/core';
import { IssueCountService } from './issue-count.service';

@Component({
  selector: 'app-issue-count-reader',
  templateUrl: './issue-count-reader.component.html',
  styleUrls: ['./issue-count-reader.component.css']
})
export class IssueCountReaderComponent {
  public records = [];
  public inputFilterVaue = "";
  public sortFlag = "asc";
  @ViewChild('issueCountReader', { static: false }) issueCountReader: any;
  constructor(private issueCountService: IssueCountService) { }

  // read the data from csv 
  readIssueCountCSV($event: any): void {
    let files = $event.srcElement.files;
    if (files[0].name.endsWith(".csv")) {
      this.issueCountService.readCSVFileData(files[0]);
      this.issueCountService.issueCount$.subscribe(csvData => {
        if (csvData.length === 0) {
          this.fileReset();
        } else {
          this.records = csvData;
        }
      })
    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  // to reset the file
  fileReset() {
    this.issueCountReader.nativeElement.value = "";
    this.records = [];
  }

  // To sort the data 
  sortIssues() {
    if (this.sortFlag === "asc") {
      this.records.sort((a, b) => (a['issue_count'] > b['issue_count']) ? 1 : -1);
      this.sortFlag = "desc";
    } else {
      this.records.sort((a, b) => (a['issue_count'] < b['issue_count']) ? 1 : -1);
      this.sortFlag = "asc";
    }
  }
}
