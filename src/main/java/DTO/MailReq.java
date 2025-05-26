package DTO;

import java.util.List;

public class MailReq {
	private List<String> mails;
	private int fileId;
	public List<String> getMails() {
		return mails;
	}
	public void setMails(List<String> mails) {
		this.mails = mails;
	}
	public int getFileId() {
		return fileId;
	}
	public void setFileId(int fileId) {
		this.fileId = fileId;
	}

}
