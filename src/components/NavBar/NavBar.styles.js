import styled from 'styled-components';

export const Nav = styled.nav`
  z-index: 1000;
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const NavHeading = styled.div`
  padding: 0 0 0 2vw;
  font-weight: 550;
  font-size: 2rem;
 
`

export const NavLinks = styled.div`
    padding: 0 2vw 0 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 50%;
    .border{
        border: 2px solid #9AD3FF;
        padding: 0 0.3em;
      } 
      
`

export const NavLink = styled.a`
padding: 0 2vw;
@media(max-width: 576px){
  font-size: 0.7em;
}
`