import { useState } from 'react'
import { contentSettings, contentType, extensionType } from './components/type'
import { Extension } from './hooks/Extension';
import useFormBuilder from './hooks/useFormBuilder';
import FormBuilder from './components/FormBuilder';
import SelectIcon from './assets/SelectIcon';
import InputIcon from './assets/InputIcon';
import RadiIcon from './assets/RadiIcon';
import CheckboxIcon from './assets/CheckboxIcon';
import './App.css'

function App() {
  const [content, setContent] = useState<contentType[]>(
    [{ extension: 'input', settings: { type: 'text', placeholder: 'your name', label: 'Name' } }]
  );

  const extensionInstance = new Extension();
  const SelectInput: extensionType[] = extensionInstance.extend([
    {
      slug: 'select',
      title: 'Select',
      description: 'Description',
      icon: <SelectIcon />,
      settings: {
        options: ['test1'],
        multiple: false,
      },
      renderSettings: (settings: contentSettings) => (
        <>
          <button onClick={() => settings.multiple = true}>Make Multiple</button>
          <button onClick={() => settings.options?.push('sds')}>Add Option</button>
        </>
      ),
      render: (settings: contentSettings) => <>
        <label htmlFor="" className='inputEditorLabel'>{settings.label}</label>
        <select multiple={settings.multiple} className='inputEditor'>
          {settings.options?.map((option) => <option key={option}>{option}</option>)}
        </select>
      </>,
    },
    {
      slug: 'input',
      title: 'Input',
      description: 'Description',
      icon: <InputIcon />,
      settings: {
        placeholder: '',
        type: 'string',
      },
      renderSettings: (settings: contentSettings) => (<><button onClick={() => settings.options?.push('sds')}>Add Option</button></>),
      render: (settings: contentSettings) => <>
        <label htmlFor="" className='inputEditorLabel'>{settings.label}</label>
        <input className='inputEditor'
          type={settings.type}
          placeholder={settings.placeholder}
        />
      </>,
    },
    {
      slug: 'checkbox',
      title: 'checkbox',
      description: 'Description',
      icon: <CheckboxIcon />,
      settings: {
        placeholder: '',
        type: 'string',
      },
      renderSettings: (settings: contentSettings) => (<><button onClick={() => settings.options?.push('sds')}>Add Option</button></>
      ),
      render: (settings: contentSettings) => <>
        <label htmlFor="" className='inputEditorLabel'>{settings.label}</label>
        <input type="checkbox" className="checkboxEditor" />
      </>,
    },
    {
      slug: 'radio',
      title: 'Radio-Group',
      description: 'asta',
      icon: <RadiIcon />,
      settings: {
        options: ['test1'],
      },
      renderSettings: (settings: contentSettings) => (<><button onClick={() => settings.options?.push('sds')}>Add Item</button></>),
      render: (settings: contentSettings) => <>
        <label htmlFor="" className='inputEditorLabel'>{settings.label}</label>
        {
          settings.options && settings.options.map((option: string) => (
            <div key={option} >
              <input
                className='inputEditor'
                type="radio"
                id={option}
                name="radioGroup"
                value={option}
                checked={option === option}
              />
              <label htmlFor={option} className='inputEditorLabel'>{option}</label>
            </div>
          ))}
      </>,
    }
  ])

  const onSave = (c: contentType[]) => {
    setContent(c);
  }

  const form = useFormBuilder({
    extensions: SelectInput,
    content,
    onChange: onSave,
  });

  return <FormBuilder form={form} />
}

export default App
