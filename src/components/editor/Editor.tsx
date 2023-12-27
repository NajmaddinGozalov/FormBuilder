// Editor.tsx
import { useDrop } from 'react-dnd';
import { FormBuilderProps, extensionType } from '../type';
import './editor.css';
import { useEffect, useRef, useState } from 'react';
import Delete from '../../assets/Delete';
import Drag from '../../assets/Drag';
interface EditorProps extends FormBuilderProps {
  onClick: (item: extensionType, index: number) => void;
}
const Editor = ({ form, onClick }: EditorProps) => {
  const [clickIndex, setClickIndex] = useState<number>(-1);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'ITEM',
    drop: (item: extensionType) => {
      setClickIndex(form.formContent.length);
      form.onChange([...form.formContent, { extension: item.slug, settings: { ...item.settings, label: 'Label' } }]);
      onClick(item, form.formContent.length);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  const handleClick = (item: extensionType, index: number) => {
    onClick(item, index);
    setClickIndex(index);
  };
  const clickRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (clickRef.current &&
        !clickRef.current.contains(e.target as Node) &&
        e.target instanceof HTMLElement &&
        !e.target.closest('.inputEditorCon')) {
        setClickIndex(-1);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleDelete = (index: number) => {
    const newFormContent = [...form.formContent];
    newFormContent.splice(index, 1);
    form.onChange(newFormContent);
  };
  return (
    <div ref={drop} className={`editorContainer ${isActive ? 'active' : ''}`}>
      <div className='elementsHeader'>Editor</div>
      <div className='inputsContainer' ref={clickRef}>
        {
          form.formContent.map((item, index) => (<>
            <div className={'inputEditorCon' + (clickIndex === index ? ' inputEditorConFocus' : '')}
              onClick={() => handleClick(form.extensions.filter((extension) => extension.slug === item.extension)[0], index)}>
              {form.extensions.filter((extension) => extension.slug === item.extension)[0].render(item.settings)}
              {clickIndex === index && <div className='inputEditorActions'>
                <div onClick={() => handleDelete(index)}>
                  <Delete />
                </div>
                <div>
                  <Drag />
                </div>
              </div>}
            </div>
          </>
          ))
        }
      </div>
    </div>
  );
};
export default Editor;
