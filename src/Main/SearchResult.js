import React from 'react';
import  { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Box, Flex, Text} from '@chakra-ui/react';
import { FETCH_DATA, addWishlist, removeWishlist } from '../Action';
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem} from '@chakra-ui/react';
import ComponentCard from './ComponentCard';
import Footer from './Footer';
import Filter from './Filter';

export default function SearchResult(){
    const{id} = useParams();
    console.log(id);

    const [filteredData, setFilteredData] = useState([]);
    const [genderData, setGenderData] = useState([]);
    const [selectedSort, setSelectedSort] = useState(null);
   
    const getData = useSelector((store)=>{
        console.log(store, "store debug");
        return store.data;
    })
    
    console.log(getData, "getData")

    const handleSortChange = (e) => {
      const selectedSortOption = e.target.value;
      setSelectedSort(selectedSortOption);
      if (selectedSort === selectedSortOption) {
        setSelectedSort(null);
        setFilteredData([...genderData]);
        return;
      }
      let sortedData = [...filteredData]; 
      if (selectedSortOption === "1") {
        const trendingItems = sortedData.filter(item => item.sellerTag === "trending");
        sortedData = [...trendingItems];
      } else if (selectedSortOption === "2") {
        sortedData.sort((a, b) => a.price - b.price);
      } else if (selectedSortOption === "3") {
        sortedData.sort((a, b) => b.price - a.price);
      }
      setFilteredData(sortedData); 
    }; 


    useEffect(()=>{ 
    if(id && getData){
       const filtered = getData?.data?.data?.filter((item) => item?.subCategory?.toLowerCase() === id
        || item?.color?.toLowerCase()===id  || item?.brand?.toLowerCase()===id)
        setGenderData(filtered);
        setFilteredData(filtered);
      }
     }, [id, getData])

     const handleFilterChange = (filteredData) => {
      setFilteredData(filteredData);
    };

  return ( 
    <Box style={{marginTop:"6rem"}}>
    <Flex className='heading1'>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <Container className='heading2'>Home</Container>
      </Link>
      <Container className='heading2'>/</Container>
      <Container className='heading2'>{id?.charAt(0)?.toUpperCase()+id?.slice(1)} Clothing</Container>
    </Flex>
    {filteredData.length===0 ? (
    <>
    <Container style={{textAlign:"center", marginTop:"5rem"}}>
      <h2>No Result found</h2>
    </Container>
    </>
    ):(
    <>
    <Box>
        <Flex>
          <h2 className='heading3'>Search Results For {id?.charAt(0)?.toUpperCase()+ id?.slice(1)}</h2>
          <div style={{ marginLeft: "20px", fontSize: "30px", color: "gray", marginTop: "40px" }}>({filteredData.length})</div>
        </Flex>
        <hr className='ruler' style={{marginLeft:"20px"}}/>
      </Box>
      <Flex>
        <Container style={{ width: "150px", height: "50px" }}>
          <Flex>
            <h3 className='heading4' style={{ marginRight: "950px"}}>FILTERS</h3>
            <Flex>
              <div className='sort' >SORT BY</div>
              <div style={{ marginLeft: "70px", marginTop: "50px" }}>
                <select style={{border:"none", width:"120px"}} onClick={handleSortChange}>
                  <option value="1" >Popular</option>
                  <option value="2" >Low to High</option>
                  <option value="3">High to Low</option>
                </select>
              </div>
            </Flex>
          </Flex>
          <Filter onFilterChange={handleFilterChange} genderData={genderData}/>
        </Container>

    <Container className='dataInfo' style={{marginLeft:"180px"}}>
    <ComponentCard data={filteredData} />
        </Container>
      </Flex>
      <div style={{marginTop:"155vh"}}>
    <Footer/>
    </div>
        </>
    )}
    </Box>
  )
}
