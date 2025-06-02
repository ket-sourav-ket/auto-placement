import React from 'react'
import styled from 'styled-components'
import CompanyCard from './CompanyCard'
import accenture from '../assets/accenture.png'
import tcs from '../assets/tcs.png'
import hashedin from '../assets/hasedin.png'
import hcl from '../assets/hcl.png'
import kreeti from '../assets/kreeti.png'
import ltimindtree from '../assets/ltimindtree.png'
import infosys from '../assets/infosys.png'
import ibm from '../assets/ibm.png'
import cognizant from '../assets/cognizant.png'
import nrifintech from '../assets/nri.jpg'
import pwc from '../assets/pwc.jpg'
import bmc from '../assets/bmc.jpg'



const StyledCompanyContainer = styled.div`
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 1fr 1fr 1fr;
    border-radius: 5px;
    background-color: #98a3ae;
    padding: 20px;
    width: 100%;
    gap: 20px;
`
const compList = [{ logo : accenture,
                   name : 'Accenture',
                   address : ' Prestige Technopolis, 1/8, Dr. MH Maregowda Road, Audugodi, Bengaluru, Karnataka, India, 560029 ',
                   role: 'Role: Software Engineer',
                   CTC: 'Highest Package: 4.5 LPA'
  },              { logo : tcs,
                   name : 'Tata Consultancy Service',
                   address : 'Biswa Bangla Sarani, DH Block(Newtown), Action Area I, Newtown, New Town, Chakpachuria, West Bengal 700135 ',
                   role: 'Role: Software Developer',
                   CTC: 'Highest Package: 11 LPA'
  },              { logo : hcl,
                   name : 'HCL',
                   address : 'Leather Complex, Plot No. IIIG/2, AA-IIIG, St, No.3333, Dist, Action Area III, Beonta II, Newtown, Kolkata, Hatisala, West Bengal 700135 ',
                   role: 'Role: Software Developer',
                   CTC: 'Highest Package: 8.1 LPA'
  },              { logo : hashedin,
                   name : 'Hasedin',
                   address : 'Block 4D, Ecospace Business Park Rmz Eco World Bellandur, Ecoworld – Hashedin 1st, 2nd, 3rd and 4th Floors, Marathahalli - Sarjapur Outer Ring Rd, Devarabisanahalli, Bengaluru, Karnataka 560103 ',
                   role: 'Role: SDE I',
                   CTC: 'Highest Package: 8.1 LPA'
  },                            { logo : kreeti,
                   name : 'Kreeti Technologies',
                   address : '#1408, Godrej Genesis, Plot XI Block EP, Sector V, Salt Lake City, Kolkata-700 091, India',
                   role: 'Role: Junior Software Engineer',
                   CTC: 'Highest Package: 4.8 LPA'
  },              { logo : infosys,
                   name : 'Infosys',
                   address : '22nd Floor, Tower-1, PS, Salt Lake Electronics Complex, SRIJAN CORPORATE PARK, GP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091',
                   role: 'Role: Software Engineer',
                   CTC: 'Highest Package: 3.5 LPA'
  },              { logo : ltimindtree,
                   name : 'LTIMindtree',
                   address : 'Global village Tech Park, Mysore Rd, RVCE, Bengaluru, Karnataka 560059',
                   role: 'Role: Software Engineer',
                   CTC: 'Highest Package: 4 LPA'
  },              { logo : nrifintech,
                   name : 'NRI FinTech',
                   address : '22nd Floor, Tower-1, PS, Salt Lake Electronics Complex, SRIJAN CORPORATE PARK, GP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091',
                   role: 'Role: Software Engineer',
                   CTC: 'Highest Package: 7.2 LPA'
  },              { logo : cognizant,
                   name : 'Cognizant',
                   address : 'Gn 34/3, Electronic Complex, Salt Lake City Sector 5-700091',
                   role: 'Role: Software Engineer',
                   CTC: 'Highest Package: 6.5 LPA'
  },              { logo : ibm,
                   name : 'IBM',
                   address : '2JXC+5XM Embassy Manyata Business Park, Manyata Tech Park Rd, Manayata Tech Park, Thanisandra, Bengaluru, Karnataka 560045',
                   role: 'Role: Software Engineer',
                   CTC: 'Highest Package: 8 LPA'
  },              { logo : pwc,
                   name : 'PwC',
                   address : 'Pricewaterhouse Coopers Service Delivery Center, Pine Valley, Village, Intermediate Ring Rd, Embassy Golf Links Business Park, Challaghatta, Bengaluru',
                   role: 'Role: Software Engineer',
                   CTC: 'Highest Package: 12 LPA'
  },              { logo : bmc,
                   name : 'BMC Software',
                   address : 'Nagarjuna Castle, Wood St, Ashok Nagar, Bengaluru, Karnataka 560025',
                   role: 'Role: Software Engineer',
                   CTC: 'Highest Package: 14 LPA'
  },] 


const CompanyBrowser = () => {
  return (
    <StyledCompanyContainer>
     {
      compList.map(item => {
        return(
          <CompanyCard key={item.name} data={item} />
        )
      })
     }
    </StyledCompanyContainer>
  )
}

export default CompanyBrowser