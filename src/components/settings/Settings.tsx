import { useEffect, useState } from 'react';
import { FormBuilderProps } from '../type';
import './settings.css';

interface EditorProps extends FormBuilderProps {
  clickIndex: any;
}

export default function Settings({ form, clickIndex }: EditorProps) {

  const [val, setVal] = useState('')
  useEffect(() => {
    setVal('')
  }, [clickIndex]);

  const handleChange = (e: any) => {
    setVal(e.target.value);
    form.formContent[clickIndex].settings.label = e.target.value;

    form.onChange([...form.formContent.slice(0, clickIndex), form.formContent[clickIndex], ...form.formContent.slice(clickIndex + 1)]);
  };

  const handleClickOutside = () => {
    setVal('');
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="settingsContainer">
      <div className='elementsHeader'>Settings</div>
      <div className='inputsContainer'>

        <div className='inputEditorCon '>
          <label htmlFor="" className='inputEditorLabel'>Label</label>
          <input type="text" placeholder="" value={val} className="inputChocies" onChange={(e) => handleChange(e)} />
        </div>

        {/* <div className='inputEditorCon '>
          <label htmlFor="" className='inputEditorLabel'>Chocies</label>

          <div className='chociesInputCon'>
            <input type="text" placeholder="" className="inputChocies" />
            <img src={remove} alt="" />
          </div>

          <div className='chociesPlus'>
            <img src={Plus} alt="" />
          </div>
        </div> */}

      </div>
    </div>
  )
}
