import './App.css';
import { Route, Routes } from 'react-router-dom';
import TemplateLibrary from './components/TemplateLibrary';
import SavedTemplates from './components/SavedTemplates';
import EditTemplate from './components/EditTemplate';
import CreateTemplate from './components/CreateTemplate';

function App() {
  return (
    <div className="App">

      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        
        <Route path='/template-library' element={<TemplateLibrary/>}/>
        <Route path='/saved-templates' element={<SavedTemplates/>}/>
        <Route path='/edit-template' element={<EditTemplate/>}/>
        <Route path='/create-template' element={<CreateTemplate/>}/>
      </Routes>
    </div>
  );
}

export default App;
