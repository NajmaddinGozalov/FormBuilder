import Plus from '../../assets/plus.svg';
import remove from '../../assets/remove.svg';

export default function ChociesSettings() {
    return (
        <div className='inputEditorCon '>
            <label htmlFor="" className='inputEditorLabel'>Chocies</label>

            <div className='chociesInputCon'>
                <input type="text" placeholder="" className="inputChocies" />
                <img src={remove} alt="" />
            </div>

            <div className='chociesPlus'>
                <img src={Plus} alt="" />
            </div>
        </div>
    )
}
