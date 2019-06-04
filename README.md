# angular-generate-xlsx
Angular generate / write xlsx, Excel

Use the following steps.

1. Install file-saver using the following command
    - _**npm install file-saver**_

2. Install XLSX using the following command
    - _**npm install xlsx**_

3. import file-saver & xlsx in component
    - _**import * as FileSaver from 'file-saver';**_
    - _**import * as XLSX from 'xlsx';**_

4. Define constats
    - _**const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';**_
    - _**const EXCEL_EXTENSION = '.xlsx';**_

5. Store object data in variable

`data: any = [{`
    `id: 1,`
    `name: 'ravi',`
    `salary: 1000`
  `},`
  `{`
    `id: 2,`
    `name: 'avi',`
    `salary: 2000`
  `},`
  `{`
    `id: 3,`
    `name: 'rajesh',`
    `salary: 3000`
  `}];`


6. Write download function/method

`downloadExcel() {`
    `const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);`
    `console.log('worksheet',worksheet);`
    `const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };`
    `const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });`
    `this.saveAsExcelFile(excelBuffer, 'sample');`
  `}`

  `saveAsExcelFile(buffer: any, fileName: string){`
    `const data: Blob = new Blob([buffer], {`
      `type: EXCEL_TYPE`
    `});`
    `FileSaver.saveAs(data, fileName  + new Date().getTime() + EXCEL_EXTENSION);`
  `}`
  
7. Add the following code into "app.component.html" file.

    `<button type="button" class="btn btn-primary" (click)="downloadExcel()">Download Excel</button>`

8. Run
    - _**ng serve -o**_


Here you go,

**Best Luck**
