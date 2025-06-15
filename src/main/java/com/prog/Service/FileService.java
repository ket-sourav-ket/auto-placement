
package com.prog.Service;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import org.apache.tika.exception.TikaException;
import org.apache.tika.metadata.Metadata;
import org.apache.tika.parser.ParseContext;
import org.apache.tika.parser.pdf.PDFParser;
import org.apache.tika.sax.BodyContentHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.xml.sax.SAXException;

import com.prog.entity.FileUpload;
import com.prog.repository.DatabaseRepository;

import java.io.File;
import java.io.FileInputStream;
import java.util.regex.*; 

@Service
public class FileService {
	private HashMap<String,ArrayList<String>> keywordMap =new HashMap<>();
	private String PERCENT = "(\\d+)%";
	private String EDUGAP = "(\\d+) year(s)?";
	private String PASSOUT = "20\\d{2}?";
	private String BACKLOG = "no( active)? backlog";
	
	
	@Autowired
	private DatabaseRepository dbFilerepo;
	public FileService(){
		keywordMap.put("stream" , new ArrayList<>(Arrays.asList(new String[] {"IT" , "CSE" ,"EE","DSC", "CA" , "ECE" , "AIML"})));
		keywordMap.put("degree" , new ArrayList<>(Arrays.asList(new String[] {"MCA" , "BTech" , "BCA" , "MTech" , "BSC"})));
		keywordMap.put("skill" , new ArrayList<>(Arrays.asList(new String[] {"java" , "python" , "sql" , "react" , "node" , "c++" , "angular" , ".net" , "spring" , "django" , "javascript" ,"html" , "css"})));
	}
	
	// storing the file to database
	public FileUpload storeFile(MultipartFile file) throws IOException
		{
		  String filename=StringUtils.cleanPath(file.getOriginalFilename());
		  String filetype=file.getContentType();//save file type
		  FileUpload dbFile= new FileUpload(file.getBytes(),filename,filetype);
		  return dbFilerepo.save(dbFile);	
		}
	
	
	//Retrieving the file from database
	public FileUpload getFile(Integer fileId) throws FileNotFoundException
		{
			return dbFilerepo.findById(fileId)
				.orElseThrow(()-> new FileNotFoundException("File Not Found"+fileId));
		}
	
	public String getPlainText(int fileId) throws IOException, SAXException, TikaException
	{
		BodyContentHandler contenthandler= new BodyContentHandler();
		
		FileUpload ff=getFile(fileId);
		byte[] filebytearray=ff.getOriginalfile();
		System.out.println("here: " + ff.getDocument_id());
		
		// creating a temporary file using create file and then writing PDF bytes to temp file.
		File tempFile = File.createTempFile("temp", "txt", null);
		
        //System.out.println("created");
        FileOutputStream fos = new FileOutputStream(tempFile);
        fos.write(filebytearray);
        fos.close();
		
		
		// Create a file input stream
		// on specified path with the created file
		FileInputStream fstream = new FileInputStream(tempFile);

		// Create an object of type Metadata to use
		Metadata data = new Metadata();

		// Create a context parser for the PDF document
		ParseContext context = new ParseContext();

		// PDF document can be parsed using the PDFparser class
		PDFParser pdfparser = new PDFParser();

		// Method parse invoked on PDFParser class
		pdfparser.parse(fstream, contenthandler, data,context);
		
		String textDocument= contenthandler.toString();
		
		return textDocument;

		
	}
	
	public HashMap<String,ArrayList<String>> extractKeyword(Integer fileId) throws IOException, SAXException, TikaException{
		String textDocument = getPlainText(fileId);
		
		Pattern pattern;
		Matcher matcher;
		String match;
		
				
		HashMap<String , ArrayList<String>> found = new HashMap<>();
		
		for (Map.Entry<String, ArrayList<String>> entry : keywordMap.entrySet())
		{
			ArrayList<String> list = entry.getValue();
			
			for(String keyword : list)
			{
				if(entry.getKey().equals("skill")) pattern = Pattern.compile("("+keyword+")", Pattern.CASE_INSENSITIVE);
				else pattern = Pattern.compile("("+keyword+")");
				matcher = pattern.matcher(textDocument);
				
				if(matcher.matches())
				{
					match = matcher.group(1);
					found.computeIfAbsent(entry.getKey(), k -> new ArrayList<>()).add(keyword);
				}
				if(!entry.getKey().equals("skill"))
					found.putIfAbsent(entry.getKey(), keywordMap.get(entry.getKey()));
			}
			
		}
		
		found.put("others", new ArrayList<>());
		pattern = Pattern.compile(PERCENT);
		matcher = pattern.matcher(textDocument);
		if(matcher.matches()) {
			match = matcher.group(1);
			found.get("others").add(match);
		}
		else found.get("others").add("0");
		
		pattern = Pattern.compile(EDUGAP);
		matcher = pattern.matcher(textDocument);
		if(matcher.matches()) {
			match = matcher.group(1);
			found.get("others").add(match);
		}
		else found.get("others").add(String.valueOf(Integer.MAX_VALUE));
		
		pattern = Pattern.compile(PASSOUT);
		matcher = pattern.matcher(textDocument);
		if(matcher.matches()) {
			match = matcher.group(0);
			found.get("others").add(match);
		}
		else found.get("others").add("2025");
		
		
		pattern = Pattern.compile(BACKLOG);
		matcher = pattern.matcher(textDocument);
		if(matcher.matches()) {
			match = matcher.group(0);
			found.get("others").add("FALSE");
		}
		else found.get("others").add("TRUE");
		
	
		
		System.out.println(found);
		
		return found;
		
		}  

}

