package com.prog.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.prog.entity.FileUpload;
import com.prog.Service.FileService;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "*")
@RestController
public class FileController {

		@Autowired
		private FileService fileservice;
		public int file_id_use;
		
		
		//for uploading file from the user
		@PostMapping("/uploadFile")
		public Integer uploadFile(@RequestParam("files") MultipartFile file) throws IOException {
			@SuppressWarnings("unused")
			FileUpload upload=fileservice.storeFile(file);
			//file_id_use=4;
					/*upload.getDocument_id() */
			return upload.getDocument_id();
		}
		
		
		// for accessing the file from database
		@GetMapping("/downloadFile/{document_id}")	
		@ResponseBody
		public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable Integer document_id, HttpServletRequest request) throws FileNotFoundException{

					// load as resource
			FileUpload download=fileservice.getFile(document_id);
			
			String content=request.getServletContext().getMimeType(download.getFiletype());  //convert to file type
			if (content != null)
			  {
		       content = "application/octet-stream";
		       System.out.print(content);
		      }
			else			 
				System.out.print("content is null");
	
			System.out.print(download.getFiletype());
			
			return  ResponseEntity.ok()	
			.contentType(MediaType.parseMediaType(download.getFiletype()))
			.header(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename=\""+download.getFilename()+"\"")
			.body(new ByteArrayResource(download.getOriginalfile()));
			
		}
		
		@PostMapping("/importExcel")
		public String importFromExcel(@RequestParam("files") MultipartFile file) throws IOException{
			
			FileUpload excelFile=fileservice.storeFile(file);
			fileservice.importExcel(excelFile.getDocument_id());
			return "O.K";
			
		}
		
	
		
		
			
		
		
} 
  