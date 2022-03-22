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
    padding: 5px;
    margin-right: 10px;
 }
 .search {
    display: flex;
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
 .tabs {
    background: #363b48;
    display: flex;
    list-style: none;
 }
 .tabs .list {
   display: flex;
 }
 .tabs .rd_tab { 
	  display:none;
	  position: absolute;
  }
 .tab_label{
    font-weight: bold;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
		display: block;
		width: 100px;
		padding: 15px;
		font-size: 15px;
		color:#fff;
		cursor: pointer;
		text-align: center;
	}
  .rd_tab:checked ~ label { 
    background-color: #9fdadf;
    color: black;
  }
  .add {
    margin: 10px;
  }
  .add:hover {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 30px;
  }
  .tabs li {
    display: flex;
  }
  .endItem {
    cursor: pointer;
    font-weight: bold;
  }
`