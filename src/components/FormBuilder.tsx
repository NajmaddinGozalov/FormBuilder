// FormBuilder.tsx

import { useEffect, useState } from 'react';
import { FormBuilderProps, contentType, extensionType } from './type';
import SaveButton from './SaveButton';
import Elements from './element/Elements';
import Editor from './editor/Editor';
import Settings from './settings/Settings';

const FormBuilder = ({ form }: FormBuilderProps) => {
    const { extensions, formContent, onChange } = form;
    const [clickIndex, setClickIndex] = useState<number>();
    const [clickItem, setClickItem] = useState<extensionType>();

    useEffect(() => {
        // onChange({ extension: 'select', settings: { type: 'text', placeholder: 'new as' } });
    }, []);

    const handleClick = (item: extensionType, index: number) => {
        setClickItem(item);
        setClickIndex(index);
        // onChange({ extension: item.slug, settings: item.settings });
    }
    return (
        <div className='appContainer'>
            <SaveButton />
            <Elements list={extensions} />
            <Editor form={form} onClick={handleClick} />
            <Settings form={form} clickIndex={clickIndex} />
        </div>
    );
};

export default FormBuilder;
