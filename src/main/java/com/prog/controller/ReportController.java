package com.prog.controller;

import com.itextpdf.text.DocumentException;
import com.prog.Service.ReportService;
import com.prog.entity.PlacedStudents.ProjectPlacedStudents;

import DTO.ReportRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ReportController {
	@Autowired
	ReportService reportService;
	
    @PostMapping("/report/download")
    public ResponseEntity<byte[]> exportPdf(@ModelAttribute ReportRequest request) throws IOException, DocumentException, IllegalArgumentException, IllegalAccessException {
    	//System.out.println(request);
    	//return ResponseEntity.ok(null);
    	
        //List<Map<String, Object>> queryResults = myService.executeQuery(request);
        
        ByteArrayOutputStream pdfStream = reportService.generatePdfStream(reportService.getFilteredStudents(request));
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=query_results.pdf");
        headers.setContentLength(pdfStream.size());
        return new ResponseEntity<>(pdfStream.toByteArray(), headers, HttpStatus.OK); 
    }
    
    @PostMapping("/report/search")
    public ResponseEntity<List<ProjectPlacedStudents>> search(@ModelAttribute ReportRequest request){
    	
    	return ResponseEntity.ok(reportService.getFilteredStudents(request));
    	
    } 
}