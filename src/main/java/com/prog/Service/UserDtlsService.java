package com.prog.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.prog.entity.UserDtls;
import com.prog.repository.UserDetailsRepository;

@Service
public class UserDtlsService {
	@Autowired
	private UserDetailsRepository userdao;
	
	
	public List<UserDtls> getUserDtls() {
		// TODO Auto-generated method stub
		return userdao.findAll();
	}

	public String getUserDtl(String email,String password) {
		String status="Failure";
		for(UserDtls ut: userdao.findAll()) {
			if(ut.getEmail().equals(email) && ut.getPassword().equals(password)){
				status="Success";
				break;
			}				
		}
		return status;
	}
	
	
	public UserDtls addUser(UserDtls u) {
		userdao.save(u);
		return u;
	}
	

}