import * as XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

const FILE_PATH = path.join(process.cwd(), 'test-data', 'registered-users.xlsx');

export function appendUserToExcel(email: string, password: string) {
  let workbook: XLSX.WorkBook;
  let worksheet: XLSX.WorkSheet;

  // If file exists → load it
  if (fs.existsSync(FILE_PATH)) {
    workbook = XLSX.readFile(FILE_PATH);
    worksheet = workbook.Sheets['Users'];
  } else {
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
  }

  // Convert sheet to JSON
  const data = XLSX.utils.sheet_to_json<any>(worksheet);

  // Append new row
  data.push({ Email: email, Password: password });

  // Convert back to sheet
  const newSheet = XLSX.utils.json_to_sheet(data);

  workbook.Sheets['Users'] = newSheet;

  // Save file
  XLSX.writeFile(workbook, FILE_PATH);
}