import React,{useState} from 'react'
import Navbar from '../navabar/Navabar';
import Home from '../home/Home'
import {Routes, Route} from "react-router-dom"
import Advanture from '../advanture/Advanture';
import Profile from '../Profile/Profile';
import About from '../About/About';
// import Profilea from '../pro/pr/Profilea';
import Contact from "../contact/Contact"
import Form from '../signup/Form';
import Post  from '../pro/pr/Post/CreatePost';
import ProfileForm from '../pro/pr/ProfileForm';
import UpdatePost from '../pro/pr/Post/UpdatePost';
import Feeds from '../pro/pr/feed/Feeds.js';
// import ProfileFormb from '../pro/pr/About';
// import CreatePost from '../pro/pr/createPost';

import CommentAndhra from '../aandhra/CommentAndhra';
import CommentAmaravati from '../aandhra/CommentAmaravati';
// import { SearchProvider } from '../home/SearchContext';

import Bihar from '../bihar/Bihar';
import Jhharkhand from '../jhharkhand/Jhharkhand';
import ArunachalPradesh from '../Arunachal Pradesh/ArunachalPradesh';
import Bangalore from "../bangalore/Bangalore";
import Assam from '../Assam/Assam';
import Andhra from '../aandhra/Andhra';
import Telangana from '../telangana/Telangana';
import Goa from '../Goa/Goa';
import Kerala from '../Kerala/Kerala';
import MP from '../mp/MP';
import Maharashtra from "../Maharastra/Maharashtra"
import Jammu from '../jammu/Jammu';
import TamilNadu from '../Tamil Nadu/TamilNadu'
import TelanganaPosts from '../telangana/TelanganaPosts';
import Andaman from '../Andaman/Andaman';
import Chhattisgarh from '../Chhattisgarh/Chhattisgarh';
import Chandigarh from "../Chandigarh/Chandigarh"
import Gujarat from '../Gujarat/Gujarat'
import Haryana from '../Haryana/Haryana'
import Himachal from '../Himachal-Pradesh/Himachal-Pradesh'
import Manipur from '../Manipur/Manipur';
import Mizoram from '../Mizoram/Mizoram';
import Meghalaya from '../meghalaya/meghalaya ';
import Nagaland from '../Nagaland/Nagaland';
import Odisha from '../oddisa/Oddisa';
import Punjab from '../Punjab/Punjab';
import Rajsthan from "../Rajsthan/Rajsthan"
import Sikkim from '../Sikkim/Sikkim';
import Tripura from '../Tripura/Tripura';
import Uttarakhand from '../uttarakhand/Uttarakhand'
import Uttar from '../uttarPradesh/Uttar';
import WestBengal from '../west/West';

import Delhi from '../Delhi/Delhi';
import DamanDiu from '../Daman&Diu/Daman&Diu'
import Lakshadweep from '../Lakshadweep/Lakshadweep'
import Puducherry from '../Puducherry/Puducherry';



const Routesr = (location) => {
  return (
   <>
    <Routes>

{/* States of india */}

{/* A */}

    <Route path='/arunachalPradesh' element={<ArunachalPradesh/>} ></Route>
    <Route path='/andhra' element={<Andhra/>} ></Route>
    <Route path='/assam' element={<Assam/>} ></Route>

{/* B */}


    <Route path='/bihar' element={<Bihar/>} ></Route>

{/* C */}

<Route path='/chhattisgarh' element={<Chhattisgarh/>} ></Route>
<Route path='/Chandigarh' element={<Chandigarh/>} ></Route>


{/* G */}

<Route path='/goa' element={<Goa/>} ></Route>
<Route path='/Gujarat' element={<Gujarat/>} ></Route>

{/* H */}

<Route path='/Haryana' element={<Haryana/>} ></Route>
<Route path='/Himachal' element={<Himachal/>} ></Route>

{/* J */}

<Route path='/jhharkhand' element={<Jhharkhand/>} ></Route>

{/* K */}

<Route path='/bangalore' element={<Bangalore/>} ></Route>
<Route path='/kerala' element={<Kerala/>} ></Route>

{/* M */}


<Route path='/maharashtra' element={<Maharashtra/>} ></Route>
<Route path='/mP' element={<MP/>} ></Route>
<Route path='/Manipur' element={<Manipur/>} ></Route>
<Route path='/Meghalaya ' element={<Meghalaya/>} ></Route>
<Route path='/Mizoram' element={<Mizoram/>} ></Route>

{/* N */}

<Route path='/nagaland' element={<Nagaland/>} ></Route>

{/* O */}

<Route path='/odisha' element={<Odisha/>} ></Route>

{/* P */}

<Route path='/Punjab' element={<Punjab/>} ></Route>

{/* R */}

<Route path='/rajsthan' element={<Rajsthan/>} ></Route>

{/* S */}

<Route path='/sikkim' element={<Sikkim/>} ></Route>

{/* T */}

<Route path='/telangana' element={<Telangana/>} ></Route>
<Route path='/tamilNadu' element={<TamilNadu/>} ></Route>
<Route path='/Tripura' element={<Tripura/>} ></Route>


{/* U */}

<Route path='/uttarakhand' element={<Uttarakhand/>} ></Route>
<Route path='/uttar' element={<Uttar/>} ></Route>

{/* W */}

<Route path='/westBengal' element={<WestBengal/>} ></Route>


{/* Union Territories */}

{/* A */}

<Route path='/Andaman' element={<Andaman/>} ></Route>

{/* C */}

<Route path='/Chandigarh' element={<Chandigarh/>} ></Route>

{/* D */}

<Route path='/Delhi' element={<Delhi/>} ></Route>
<Route path='/DamanDiu' element={<DamanDiu/>} ></Route>

{/* J */}

<Route path='/jammu' element={<Jammu/>} ></Route>

{/* L */}

<Route path='/Lakshadweep' element={<Lakshadweep/>} ></Route>

{/* P */}

<Route path='/Puducherry' element={<Puducherry/>} ></Route>











       
        
   
     
    <Route path='/commentAmaravati' element={<CommentAmaravati/>} ></Route>   
{/* <Route path='/profileFormb' element={<ProfileFormb/>} ></Route> */}
          <Route path='/feeds' element={<Feeds/>} ></Route>
         <Route path='/post' element={<Post/>} ></Route>
         <Route path='/profileForm' element={<ProfileForm/>} ></Route>
         <Route path='/updatePost' element={<UpdatePost/>} ></Route>
{/* <Route path='/profilea' element={<Profilea/>} ></Route> */}


          <Route path='/profile' element={<Profile/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
          <Route path='/Advanture' element={<Advanture/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
{/* <Route path='/createPost' element={<CreatePost />}></Route> */}
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/form' element={<Form/>} ></Route>
          <Route path='/commentAndhra' element={<CommentAndhra/>} ></Route>
          <Route path="/commentAndhra/:location" element={<CommentAndhra />} />
          <Route path='/andaman' element={<Andaman/>} ></Route>
          <Route path='/chhattisgarh' element={<Chhattisgarh/>} ></Route>
          <Route path='/TelanganaPosts' element={<TelanganaPosts/>} ></Route>
 
    
      

    
      
     
      
    
    
      


      
      

    </Routes>
    </>
  )
}

export default Routesr
