import Close from '@mui/icons-material/Close';
import { React, useState } from 'react';

function Announce() {
    const [announceStyle, setannounceStyle] =
        useState(' bg-[#8a4af3] font-bold text-white justify-center  flex items-center');

    const handleClose = () => {
        // hidden er agy ekta space dity hoby na holy kj korvy na 
        setannounceStyle(announceStyle + " hidden")
    }
    return (
        <div className={announceStyle}>
            <h2> huury up its 40% of now</h2>
            <Close className='cursor-pointer ' onClick={handleClose} />
        </div>
    );
};

export default Announce;