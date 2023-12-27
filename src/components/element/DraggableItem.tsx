import { useDrag } from 'react-dnd';

const DraggableItem = ({ item }: any) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'ITEM',
    item: item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move', width: '100%', }}>
      {<div className='inputElement'>
        <div className='inputElement'>
          {item.icon}
        </div>
        <div className='elementslabel'>
          {item.title}
        </div>
      </div>}
    </div>
  );
};

export default DraggableItem;
