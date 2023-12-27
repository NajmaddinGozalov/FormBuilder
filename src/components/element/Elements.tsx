// Elements.tsx

import { extensionType } from '../type';
import DraggableItem from './DraggableItem';
import './elements.css';

interface ElementsProps {
    list: extensionType[];
}

export default function Elements({ list }: ElementsProps) {

    return (
        <div className='elementsConainer'>
            <div className='elementsHeader'>Elements</div>
            <div className='inputsContainer'>
                {list.map((item, index) => (
                    <DraggableItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
}
