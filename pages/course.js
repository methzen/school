import React, { useState,useEffect } from "react";
import Sidebar from "../components/sidebar";
import ChapterDescription from "../components/chapterdescription";
import Header from "../components/header";
import { getModules } from "../services/fakeModules";
import _ from "lodash";


const Course =(props)=> {

  const [Modules, setModules]=useState([...getModules()]);
  const [selectedChapter, setSelectedChapter]=useState(Modules[0].Chapters[0]);
  

  const onModuleSelect=(moduleId)=>{
    const myModules = Modules.map(m => handleActive(m, moduleId));
    setModules(Modules=myModules);
  };

  const onChapterSelect =(module, chapter)=> { 
    const myModules=[...Modules];
    const Index = myModules.indexOf(module);
    const Chapters = module.Chapters;
    const ChapIndex = Chapters.indexOf(chapter);
    const MyChapters = Chapters.map((ch) => {
      Chapters.indexOf(ch) === ChapIndex
        ? (ch.IsActive = true)
        : (ch.IsActive = false);
      return ch;
    });

    module.Chapters = MyChapters;
    myModules[Index] = { ...module };
    setModules(Modules=myModules);
    setSelectedChapter(chapter);
  };

  const  handleValidation = (Chapter)=> {
    const myModules =[...Modules] ;
    for( let i=0; i< myModules.length; i++) {
      let Index=myModules[i].Chapters.indexOf(Chapter)
      if (Index !==-1 )
      {
        myModules[i].Chapters[Index].IsValidated=!myModules[i].Chapters[Index].IsValidated;
        setModules(myModules);
      }
    }
  };



  return ( 
    <div >
    <Header />
    <div className="wrapper">
    <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <Sidebar
          Modules={Modules}
          onModuleSelect={(moduleId)=> onModuleSelect(moduleId) }
          onChapterSelect={(module, chapter)=> onChapterSelect(module, chapter) }
        />
      </div>
      <div className="col-sm-8 border-0">
      <ChapterDescription
          Chapter={selectedChapter}
          ChapterValidated={(Chapter) => handleValidation(Chapter) }
        />
      </div> 
    </div>
  </div>
    </div>
    </div>

   );
}
 
  function handleActive(m, moduleId){
    if (m._Id === moduleId ){
      (m.clicked = !m.clicked)
    }else {
      m.clicked = false;
      const chapters = m.Chapters.map((ch) => {
        ch.IsActive = false;
        return ch;
      });
      m.Chapters = chapters;
      return m;
    }
    return m;
  };

export default Course;

