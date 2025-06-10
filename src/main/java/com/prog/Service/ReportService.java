package com.prog.Service;

import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.properties.TextAlignment;
import com.itextpdf.text.DocumentException;

import com.prog.entity.PlacedStudents;
import com.prog.entity.PlacedStudents.ProjectPlacedStudents;
import com.prog.entity.StudentDetails;
import com.prog.repository.PlacedStudentsRepository;

import DTO.ReportRequest;

import java.io.ByteArrayOutputStream;
import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportService {
	@Autowired
	PlacedStudentsRepository placedRepo;
	
    public ByteArrayOutputStream generatePdfStream(List<ProjectPlacedStudents> list) throws DocumentException, IllegalArgumentException, IllegalAccessException {
        
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PdfWriter writer = new PdfWriter(outputStream);
        PdfDocument pdfDoc = new PdfDocument(writer);
        Document document = new Document(pdfDoc);
        // Write column names
       /* 
        for (String column : header) {
            Font boldFont = new Font(Font.FontFamily.HELVETICA, 12, Font.BOLD);
            Paragraph paragraph = new Paragraph(column, boldFont);
            document.add(paragraph);
        }
        // writing to the pdf
        document.add(new Paragraph("\n")); */
        // Write data rows
        float[] columnWidths = {50 , 50 , 50 , 50 , 50 , 50 , 50 , 50 , 50 , 50};
        Table table = new Table(columnWidths);
        
        String[] headers = new String[]{ "Name" ,"College Roll" , "Gender" , "Personal Mail" , "Stream" , "Phone" , "Company" , "Placed Year"  , "CTC"};
        for(String header : headers) {
        	table.addCell(new Cell().add(new Paragraph(header)));
        }
        
        for(ProjectPlacedStudents student : list) {
        	Field[] fields = student.getClass().getDeclaredFields();
        	for (Field field : fields) {
        		field.setAccessible(true);
        		Object fieldValue = field.get(student);
        		table.addCell(new Cell().add(new Paragraph(fieldValue.toString()).setFontSize(8)));
        		
        		}
        	
    }
        document.add(table);
        document.close();
        return outputStream;
    }
    
    public List<ProjectPlacedStudents> getFilteredStudents(ReportRequest request)
    {
    	
		var PSList = placedRepo.getFilteredList(request.getStream(), request.getYear(), request.getCompany(), request.getGender());
    	//var PSList = placedRepo.getList();
    	System.out.println(PSList.get(0).getCollege_roll());
    	return PSList;
    }
}
