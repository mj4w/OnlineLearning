import React,{ useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Banner from '../img/banner.jpg'
import sampleImg from '../img/logo.png'
import instructor from '../img/instructor.jpg'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { BsFillBookmarksFill } from 'react-icons/bs'


function Home() {

  const [selectedLink, setSelectedLink] = useState('python');
  const handleLinkClick = (section) => {
    setSelectedLink(section);
  };

  // sub content 
  const [subSelectedLink, setSubSelectedLink] = useState('');
  const handleSubLinkClick = (subSection) => {
    if (subSelectedLink === subSection) {
      // If the same subSection is clicked again, close it
      setSubSelectedLink('');
    } else {
      setSubSelectedLink(subSection);
    }
  };



  return (
    <div>
        <NavBar/>
        
        <div className='max-w-screen-xl flex flex-wrap items-center mx-auto justify-between gap-2 p-3'>
          <div>
            <div className=''>
              <img src={Banner} width='1340' height='400' />
            </div>
            <Box>
              <Collapse in={open}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 1 }}
                >
                  <a href='' className='sub_text'>
                    New 3 FREE Course Available!
                  </a>
           
                </Alert>
              </Collapse>
            </Box>
          </div>
          
          <div className='flex'>
              <div className='p-5'>
                <h1 className='text-3xl mb-4 text_header'>A broad selection of courses</h1>
                <p className='text-1xl sub_text'>We upload everyday online video courses with new additions publish every month</p>
              </div>
          </div>
       
          <ul className='flex gap-6 font-semibold p-1'>
            <li className='active hover:font-bold '><a className={selectedLink === 'python' ? 'active' : ''} href='#python' onClick={() => handleLinkClick('python')}>Python</a></li>
            <li className='hover:font-bold'><a  className={selectedLink === 'excel' ? 'active' : ''} href='#excel' onClick={() => handleLinkClick('excel')}>Excel</a></li>
            <li className='hover:font-bold'><a  className={selectedLink === 'webdev' ? 'active' : ''} href='#webdev' onClick={() => handleLinkClick('webdev')}>Web Development</a></li>
            <li className='hover:font-bold'><a className={selectedLink === 'js' ? 'active' : ''} href='#js' onClick={() => handleLinkClick('js')}>Javascript</a></li>
            <li className='hover:font-bold'><a className={selectedLink === 'dataScience' ? 'active' : ''} href='#dataScience' onClick={() => handleLinkClick('dataScience')}>Data Science</a></li>
            <li className='hover:font-bold'><a className={selectedLink === 'aws' ? 'active' : ''} href='#Aws' onClick={() => handleLinkClick('aws')}>Amazon AWS</a></li>
            <li className='hover:font-bold'><a className={selectedLink === 'drawing' ? 'active' : ''} href='#drawing' onClick={() => handleLinkClick('drawing')}>Drawing</a></li>
          </ul>
          {selectedLink === 'python' && (
            <div className='border border-black p-4 w-[100%]' id='section1'>
                <div className='p-2'>
                  <h2 className='text-2xl mb-4 font-semibold text_header'>Expand your career opportunities with Python</h2>
                  <p className='text-1xl py-4 px-auto sub_text'>Take one of Online Learnings Python <span className='text-red-500'>FREE</span> courses and learn how to code using this incredibly useful language.</p>
                  <a className={subSelectedLink === 'subPython' ? 'active' : ''} href='#subPython' onClick={() => handleSubLinkClick('subPython')}>
                    <button className='hover:bg-gray-300 p-3 text-sm bg-white text-black border border-black font-bold'>Explore Python</button>
                  </a>
       
                </div>
                <div className='flex gap-4 my-4 border-box'>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md '>The Complete Courses Sample From Zero to Hero.</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <div className='flex items-center'>
                      <BsFillBookmarksFill className='text-1xl text-[#0056d2] cursor-pointer'/>
                      <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                    </div>

                    
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-autoborder w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                  <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>

     
                </div>
                {/* Sub selected */}
                {subSelectedLink === 'subPython' && (
                <div className='w-[100%]'>
        
                  <div className=' break-words p-4 w-56 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
         
                </div>
                )}
  
  
            </div>
          )}
         
           {selectedLink === 'excel' && (
            <div className='border border-black p-4 w-[100%]' id='section1'>
                <div className='p-2'>
                  <h2 className='text-2xl mb-4 font-semibold text_header'>Analyze and visualize data with excel</h2>
                  <p className='text-1xl py-4 px-auto sub_text'>Take a Microsoft Excel for <span className='text-red-500'>FREE</span> courses and learn how to code using this industry-standard software.</p>
                  <a href='' className=' hover:bg-gray-300 p-3 text-sm bg-white text-black border border-black font-bold'>Explore Excel</a>
                </div>
                <div className='flex gap-4 my-4 border-box'>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero.</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-autoborder w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                  <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                </div>
  
  
            </div>
          )}
           {selectedLink === 'webdev' && (
            <div className='border border-black p-4 w-[100%]' id='section1'>
                <div className='p-2'>
                  <h2 className='text-2xl mb-4 font-semibold text_header'>Build websites and application with Web Development</h2>
                  <p className='text-1xl py-4 px-auto sub_text'>The world of web development is a wide as the internet itself. By this <span className='text-red-500'>FREE</span> courses you can build a dynamic and learn how to manage and debug the websites and applications that we increasingly rely on.</p>
                  <a href='' className='hover:bg-gray-300 p-3 text-sm bg-white text-black border border-black font-bold'>Explore Web Development</a>
                </div>
                <div className='flex gap-4 my-4 border-box'>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero.</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-autoborder w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                  <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                </div>
  
  
            </div>
          )}
           {selectedLink === 'js' && (
            <div className='border border-black p-4 w-[100%]' id='section1'>
                <div className='p-2'>
                  <h2 className='text-2xl mb-4 font-semibold text_header'>Grow your software development skills with Javascript</h2>
                  <p className='text-1xl py-4 px-auto sub_text'>Javascript is a text-based computer programming language used to make dynamic web pages. By this <span className='text-red-500'>FREE</span> courses you must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels and more...</p>
                  <a href='' className=' hover:bg-gray-300 p-3 text-sm bg-white text-black border border-black font-bold'>Explore Javascript</a>
                </div>
                <div className='flex gap-4 my-4 border-box'>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero.</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-autoborder w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                  <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                </div>
  
  
            </div>
          )}
           {selectedLink === 'dataScience' && (
            <div className='border border-black p-4 w-[100%]' id='section1'>
                <div className='p-2'>
                  <h2 className='text-2xl mb-4 font-semibold text_header'>Lead data-driven decisions with Data Science</h2>
                  <p className='text-1xl py-4 px-auto sub_text'>Data science application is an in-demand skill in many industries worldwide in this <span className='text-red-500'>FREE</span> courses explore data science with Python, statistics, machine learning, and more to grow your knowledge.</p>
                  <a href='' className=' hover:bg-gray-300 p-3 text-sm bg-white text-black border border-black font-bold'>Explore Data Science</a>
                </div>
                <div className='flex gap-4 my-4 border-box'>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero.</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-autoborder w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                  <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                </div>
  
  
            </div>
          )}
           {selectedLink === 'aws' && (
            <div className='border border-black p-4 w-[100%]' id='section1'>
                <div className='p-2'>
                  <h2 className='text-2xl mb-4 font-semibold text_header'>Become an expert in cloud computing with AWS Certification</h2>
                  <p className='text-1xl py-4 px-auto sub_text'>Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services. In this <span className='text-red-500'>FREE</span> AWS course offers the theory and practical skills you need to land a job in cloud development, sales, engineering, networking and more.</p>
                  <a href='' className='hover:bg-gray-300 p-3 text-sm bg-white text-black border border-black font-bold'>Explore Amazon AWS</a>
                </div>
                <div className='flex gap-4 my-4 border-box'>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero.</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-autoborder w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                  <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                </div>

  
  
            </div>
          )}
            {selectedLink === 'drawing' && (
            <div className='border border-black p-4 w-[100%]' id='section1'>
                <div className='p-2'>
                  <h2 className='text-2xl mb-4 font-semibold text_header'>Expand your creative skillset with Drawing</h2>
                  <p className='text-1xl py-4 px-auto sub_text'>Want to start drawing for fun or take your craft to the next level? In this <span className='text-red-500'>FREE</span> courses explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing and many more.</p>
                  <a href='' className='hover:bg-gray-300 p-3 text-sm bg-white text-black border border-black font-bold'>Explore Drawing</a>
                </div>
                <div className='flex gap-4 my-4 border-box'>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero.</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-autoborder w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                  <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                  <div className=' break-words p-4 w-64 h-64'>
                    <img src={sampleImg}  width='100' height='100' className='hover:bg-gray-300 flex m-auto border w-[100%] p-3'/>
                    <h2 className='font-semibold text-md'>The Complete Courses Sample From Zero to Hero</h2>
                    <p className='text-sm opacity-80'>Author name</p>
                    <p className='bg-white text-red-600 p-2 text-md font-bold'>FREE</p>
                  </div>
                </div>
  
  
            </div>
          )}


        <div className='flex justify-center items-center my-8 gap-5'>
          <div className='flex'>
            <img src={instructor} className='w-[300px] h-[300px]' alt="Instructor" />
          </div>
          <div className='ml-4 w-[30%] text-left'>
            <h1 className='text-3xl mb-4 text_header'>Become an instructor</h1>
            <p className='mb-4 text-1xl sub_text'>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p> 
            <button className='bg-[#2d2f31] text-white font-bold p-3 hover:bg-gray-800'>Start teaching today</button>
          </div>
        </div>
      
        </div>
      <Footer />
    </div>
  )
}

export default Home