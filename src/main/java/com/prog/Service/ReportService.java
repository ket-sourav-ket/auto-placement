package com.prog.Service;

import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.text.DocumentException;

import com.prog.entity.PlacedStudents.ProjectPlacedStudents;
import com.prog.repository.PlacedStudentsRepository;

import DTO.ProjectedStudents;
import DTO.ReportRequest;

import java.io.ByteArrayOutputStream;
import java.lang.reflect.Field;
import java.util.List;

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
      
        // Write data rows
        float[] columnWidths = {30 , 30 , 30 , 30 , 30 , 30 , 30 , 30 , 30};
        Table table = new Table(columnWidths);
        
        String[] headers = new String[]{ "Roll","Name","Gender","Personal Mail","Stream","Phone","Company", "Placed Year" ,"CTC"};
        for(String header : headers) {
        	table.addCell(new Cell().add(new Paragraph(header)));
        }
       // table.addCell(new Cell().add(new Paragraph(" ")));
        for(ProjectPlacedStudents student : list) {
        	System.out.println(student.getName()+" : "+student.getCollege_roll());
        	ProjectedStudents tempStudent = new ProjectedStudents(student.getCollege_roll() , student.getName(), student.getGender() , student.getPersonal_mail() , student.getDepartment() , student.getPhone() , student.getCompany_name() , student.getPlaced_year() , student.getCtc());
        	Field[] fields = tempStudent.getClass().getDeclaredFields();
        	
        	for (Field field : fields) {
        		field.setAccessible(true);
        		System.out.println(field.getName());
        		
        		Object fieldValue = field.get(tempStudent);
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
