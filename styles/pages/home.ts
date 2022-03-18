import styled from 'styled-components'

export const Container = styled.div`
 header {
    padding-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    background: #9fdadf;
 }
 header #search {
   border-radius: 4px;
   padding:5px;
   margin-right: 2rem;
 }
 .geral {
   margin: 2rem;
 }
 .geral h1 {
    font-size: 2rem;
    margin: 1rem 2rem; 
 }
 .produtos {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
 }
 .produto {
   margin: 1rem;
   font-size: 2rem;
   text-align: center;
   font-weight: bold;
 }
 .produto img {
   height: 250px;
   width: auto;
 }
 .items {
   display: flex;
 }
 .item img {
   height: 400px !important;
   width: auto;
 }
 .item h3, .item h4 {
   text-align: left;
 }
 .discricao, .item {
   font-size: 2rem;
   margin: 1rem 2rem; 
   height: auto;
   width: 50%;
 }
`