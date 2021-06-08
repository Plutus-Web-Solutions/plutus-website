import styled from 'styled-components';



export const NavHeading = styled.div`
  font-weight: 550;
  font-size: 2em;

  @media screen and (max-width: 768px) {
    font-size:1em;
    
  }
 
`

export const NavLinks = styled.div`
  
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    
   
      
`

export const NavLink = styled.a`
    color:black;
    text-decoration: none;

    &:hover{
      color:#9AD3FF;
      text-decoration: none; 
    }

    

`

export const NavLinkButton = styled.div`

  border: 2px solid #9AD3FF;
  padding: 0.5em 1em;

  &:hover{
    background-color:#9AD3FF;
    text-decoration: none; 
    color:white;
  }


    

`

