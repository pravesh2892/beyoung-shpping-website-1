import { Container, Box, Flex, UnorderedList, ListItem} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams} from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import ComponentCard from './ComponentCard';
import Filter from './Filter';

export default function Men() {
  const {id} = useParams();

  const getData = useSelector((store)=>{
  console.log(store, "store debug");
  return store.data;
  })

  const [genderData, setGenderData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const[option, setOption] = useState(false)
  const [selectedSort, setSelectedSort] = useState(null);
  
  const handleClick = ()=>{
  setOption(!option)
  }

  useEffect(() => {
    if (id && getData) {
      const filtered = getData?.data?.data?.filter((item) => item.gender.toLowerCase() === id);
      setGenderData(filtered);
      setFilteredData(filtered); // Set initial filteredData to genderData
    }
  }, [id, getData]);

  const handleFilterChange = (filteredData) => {
    setFilteredData(filteredData);
  };

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

  return (
    <Box style={{marginTop:"6rem"}}>
      <Flex className='heading1'>
        <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
          <Container className='heading2'>Home</Container>
        </NavLink>
        <Container className='heading2'>/</Container>
        <Container className='heading2'>{id === 'men' ? "Men Clothing" : "Women Clothing"}</Container>
      </Flex>
      <Box>
        <Flex>
          <h2 className='heading3'>{id === 'men' ? "Men Clothing" : "Women Clothing"}</h2>
          <div style={{ marginLeft: "20px", fontSize: "30px", color: "gray", marginTop: "40px" }}>({filteredData?.length})</div>
        </Flex>
        <hr className='ruler' style={{marginLeft:"30px", marginTop:"-10px"}}/>
      </Box>
      <Flex>
        <Container style={{ width: "150px", height: "50px" }}>
          <Flex>
            <h3 className='heading4' style={{ marginRight: "900px" }}>FILTERS</h3>
            <Flex>
              <div className='sort' >SORT BY</div>
              <div style={{display:"flex"}} onClick={handleClick}>
              <div style={{ marginLeft: "70px", marginTop: "50px", cursor:"pointer"}}> Popular </div>
              <div style={{ marginLeft: "40px", marginTop: "55px", cursor:"pointer"}}><AiOutlineDown /></div>
              {option && (
                <Box className='optionBox'>
                  <UnorderedList style={{paddingLeft:"0"}}>
                  <ListItem onClick={() => handleSortChange({ target: { value: "1" } })}  
                  style={{ color: selectedSort === "1" ? "#42A2A2" : "black" }}>Popular</ListItem>
                  <ListItem onClick={() => handleSortChange({ target: { value: "2" } })}
                   style={{ color: selectedSort === "2" ? "#42A2A2" : "black" }}>Price: Low to High</ListItem>
                  <ListItem onClick={() => handleSortChange({ target: { value: "3" } })}
                   style={{ color: selectedSort === "3" ? "#42A2A2" : "black" }}>Price: High to Low</ListItem>
                  </UnorderedList>
                </Box>
              )}
              </div>
            </Flex>
          </Flex>
        <Filter onFilterChange={handleFilterChange} genderData={genderData} />
        </Container>
        <Container className='dataInfo' style={{marginLeft:"170px"}}>
        <ComponentCard data={filteredData} />
        </Container>
      </Flex>
      <div style={{marginTop:"155vh"}}>
    <Footer/>
    </div>
  </Box>
  )
}