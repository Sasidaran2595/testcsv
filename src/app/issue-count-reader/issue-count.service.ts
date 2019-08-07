import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IssuesDataModel } from '../data-model/issues.data.model';

@Injectable({
  providedIn: 'root'
})
export class IssueCountService {
  public issueCount$ = new BehaviorSubject<IssuesDataModel[]>([]);
  constructor() { }

  // to load the csv data from reader
  readCSVFileData(file) {
    var reader = new FileReader();
    reader.readAsText(file);

    reader.onerror = function () {
      console.log('error is occured while reading file!');
    };

    reader.onload = () => {
      let csvData = reader.result.toString();
      if (csvData === "") {
        alert("No data is present!")
        this.issueCount$.next([]);
      } else {
        let csvRecordsArray = csvData.split(/\r\n|\n/);
        let headerRowCount = csvRecordsArray[0].split(',').length;
        this.issueCount$.next(this.getDataArrayCSV(csvRecordsArray, headerRowCount));
      }
    };
  }
  // get the csv data and map to the array
  getDataArrayCSV(csvRecordsArray: String[], headerLength: number) {
    var csvFinalArray: IssuesDataModel[] = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let currentRow = csvRecordsArray[i].split(',');
      if (currentRow.length == headerLength) {
        let csvRecord: IssuesDataModel = new IssuesDataModel();
        csvRecord.first_name = JSON.parse(currentRow[0]);
        csvRecord.sur_name = JSON.parse(currentRow[1].trim());
        csvRecord.issue_count = parseInt(currentRow[2].trim());
        csvRecord.dob = JSON.parse(currentRow[3].trim());
        csvFinalArray.push(csvRecord);
      } else {
        alert("Inconsistent data present in the uploaded CSV file.");
        return [];
      }
    }
    return csvFinalArray;
  }
}

