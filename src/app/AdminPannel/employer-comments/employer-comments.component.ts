import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServeyServiceService } from 'src/app/sharedServices/servey-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-employer-comments',
  templateUrl: './employer-comments.component.html',
  styleUrls: ['./employer-comments.component.css'],
  providers:[ServeyServiceService]
})
export class EmployerCommentsComponent implements OnInit {
  
  public id:any;
  public EmployerComment!:any;
  fileName = 'ExcelSheet.xlsx';

  constructor( private serveyService: ServeyServiceService,
    private route: Router) { }

  ngOnInit(): void {
    this.id = this.serveyService.getDecodedToken();
    this.serveyService.getEmployeeRes(this.id).subscribe((res) => {
      this.EmployerComment = res;
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


}
