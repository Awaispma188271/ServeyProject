import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServeyServiceService } from 'src/app/sharedServices/servey-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-student-response',
  templateUrl: './student-response.component.html',
  styleUrls: ['./student-response.component.css'],
  providers: [ServeyServiceService],
})
export class StudentResponseComponent implements OnInit {
  public Students!: any;
  //public IsApproved!: boolean;
  fileName = 'ExcelSheet.xlsx';
  id: any;

  constructor(
    private serveyService: ServeyServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.id = this.serveyService.getDecodedToken();
    this.serveyService.getStudentRes(this.id).subscribe((res) => {
      console.log('res', res);

      this.Students = res;
    });
  }
  exportexcel() {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  studentChart() {
    this.route.navigate(['/student-chart']);
  }
}
