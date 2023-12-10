import React, { useEffect, useState } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Box} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FETCH_DATA} from '../Utils/Action';

export default function Filter({ onFilterChange, genderData}) {

    const getData = useSelector((store)=>{
        console.log(store, "store");
        return store.data;
    })

    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(FETCH_DATA());
    },[])


      const [selectedCategory, setSelectedCategory] = useState(null);
      const [selectedBrand, setSelectedBrand] = useState(null);
      const [selectedColor, setSelectedColor] = useState(null);
      const [selectedPopularity, setSelectedPopularity] = useState(null);
      const [selectedSize, setSelectedSize] = useState(null);

    const applyFilter = () => {
        const filteredData = genderData?.filter((item) => {
          if (
            (!selectedCategory || item.subCategory === selectedCategory) &&
            (!selectedBrand || item.brand === selectedBrand) &&
            (!selectedColor || item.color === selectedColor) &&
            (!selectedPopularity || item.sellerTag === selectedPopularity) &&
            (!selectedSize || item.size.includes(selectedSize))
          ) {
            return true;
          }
          return false;
        });
        console.log(filteredData);
        onFilterChange(filteredData);
    }
      

     
  
  useEffect(() => {
    applyFilter();
  }, [ selectedCategory,
    selectedBrand,
    selectedColor,
    selectedPopularity,
    selectedSize]);

      const handleCategoryFilter = (category) => {
        if (selectedCategory === category) {
          setSelectedCategory(null);
        } else {
          setSelectedCategory(category);
        }
      }
      const handleColorFilter = (category) => {
        if (selectedColor === category) {
          setSelectedColor(null);
        } else {
          setSelectedColor(category);
        }
      }
      const handleBrandFilter = (category) => {
        if (selectedBrand=== category) {
          setSelectedBrand(null);
        } else {
          setSelectedBrand(category);
        }
      }
      const handlePopularityFilter = (category) => {
        if (selectedPopularity === category) {
          setSelectedPopularity(null);
        } else {
          setSelectedPopularity(category);
        }
      }
      const handleSizeFilter = (category) => {
        if (selectedSize === category) {
          setSelectedSize(null);
        } else {
          setSelectedSize(category);
        }
      }
    
const allowedSizes = ["M", "S", "L", "XL", "XXL"];
const uniqueSizes = genderData?.map(item => item.size).flat().filter(size => allowedSizes.includes(size));
const uniqueElements = [...new Set(uniqueSizes)];

  return (
    <>
    <Accordion allowToggle className='accordian'>
   <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'  >
        <Box as="span" flex='1' textAlign='left'>
          Category
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <ul className='accordianList'>
     {Array.from(new Set(genderData?.map(item => item?.subCategory)).values())?.map((subCategory, index) => (
          <li key={index} onClick={() =>handleCategoryFilter(subCategory)}  className={selectedCategory === subCategory ? 'activeCategory' : ''}>
            {subCategory?.charAt(0).toUpperCase() + subCategory?.slice(1)}</li>
        ))}
     </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>
  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'>
        <Box as="span" flex='1' textAlign='left'>
          Brands
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <ul className='accordianList'>
     {Array.from(new Set(genderData?.map(item => item?.brand)).values())?.map((brand, index) => (
          <li key={index} onClick={() => handleBrandFilter(brand)}  className={selectedBrand === brand ? 'activeCategory' : ''}>
            {brand?.charAt(0).toUpperCase() + brand?.slice(1)}</li>
        ))}
     </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>
  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'  >
        <Box as="span" flex='1' textAlign='left'>
         Color
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className='accordianList'>
     {Array.from(new Set(genderData?.map(item => item?.color)).values())?.map((color, index) => (
          <button key={index} onClick={() => handleColorFilter(color)}  className={selectedColor === color ? 'activeCategory' : ''}
         style={{ backgroundColor: color, border:"1px solid grey", width: "30px", height: "30px", borderRadius: "50%", marginRight: "10px",marginBottom: "8px", cursor:"pointer"}}>
          </button>
        ))}
     </ul>
     
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>
  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'>
        <Box as="span" flex='1' textAlign='left'>
         Popularity
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className='accordianList'>
     {Array.from(new Set(genderData?.map(item => item?.sellerTag))?.values())?.map((sellerTag, index) => (
          <li key={index} onClick={() => handlePopularityFilter(sellerTag)}  className={selectedPopularity === sellerTag ? 'activeCategory' : ''}>
            {sellerTag?.charAt(0).toUpperCase() + sellerTag?.slice(1)}</li>
        ))}
     </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>

  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'>
        <Box as="span" flex='1' textAlign='left'>
         Size
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className='accordianList'>
     {uniqueElements?.map((size, index)=>(
          <li key={index} onClick={() => handleSizeFilter(size)}  className={selectedSize === size ? 'activeCategory' : ''}>
            {size}</li>
     ))}
     </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>

  </Accordion>
    </>
  )
}
