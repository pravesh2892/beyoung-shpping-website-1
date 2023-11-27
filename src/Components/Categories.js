import React from 'react';
import  { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineDown } from 'react-icons/ai';
import { Container, Box, Flex,  UnorderedList, ListItem} from '@chakra-ui/react';
import Footer from './Footer';
import ComponentCard from './ComponentCard';
import Filter from './Filter';

export default function Categories(){
    const{gender, id} = useParams();
    console.log(id);

  
    const [filteredData, setFilteredData] = useState([]);
    const [genderData, setGenderData] = useState([]);
    const[option, setOption] = useState(false)
    const [selectedSort, setSelectedSort] = useState(null);
   

    
    const handleClick = ()=>{
      setOption(!option)
      }

    const getData = useSelector((store)=>{
        console.log(store, "store debug");
        return store.data;
    })

    useEffect(()=>{ 
    if(gender && id && getData){
        const filtered = getData?.data?.data?.filter((item) => item?.subCategory?.toLowerCase() === id && item?.gender?.toLowerCase()===gender);
        setGenderData(filtered);
        setFilteredData(filtered);
    }
     }, [id, gender, getData])

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
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <Container className='heading2'>Home</Container>
      </Link>
      <Container className='heading2'>/</Container>
      <Container className='heading2'>{gender?.charAt(0)?.toUpperCase()+gender?.slice(1)} Clothing</Container>
    </Flex>

    <Box>
        <Flex>
          <h2 className='heading3'>{id?.charAt(0)?.toUpperCase()+ id?.slice(1)} for {genderData[0]?.gender}</h2>
          <div style={{ marginLeft: "20px", fontSize: "30px", color: "gray", marginTop: "40px" }}>({filteredData.length})</div>
        </Flex>
        <hr className='ruler' style={{marginLeft:"30px", marginTop:"-10px"}}/>
      </Box>
      <Flex>
        <Container style={{ width: "150px", height: "50px" }}>
          <Flex>
            <h3 className='heading4' style={{ marginRight: "950px"}}>FILTERS</h3>
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
          <Filter onFilterChange={handleFilterChange} genderData={genderData}/>
        </Container>

    <Container className='dataInfo' style={{marginLeft:"180px"}}>
    <ComponentCard data={filteredData} />
    </Container>
    </Flex>
    <div style={{marginTop:"155vh"}}>
    <Footer/>
    </div>
    </Box> 
  )
}
