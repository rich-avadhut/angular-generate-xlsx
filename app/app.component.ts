import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  data: any = [{
    id: 1,
    name: 'ravi',
    salary: 1000
  },
  {
    id: 2,
    name: 'avi',
    salary: 2000
  },
  {
    id: 3,
    name: 'rajesh',
    salary: 3000
  }];

  downloadExcel() {
    
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    console.log('worksheet',worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'sample');
  }

  saveAsExcelFile(buffer: any, fileName: string){
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName  + new Date().getTime() + EXCEL_EXTENSION);
  }

}