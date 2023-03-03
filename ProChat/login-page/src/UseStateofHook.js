import {React, useState} from 'react';

const UseStateofHook = () => {
    const [on, setOn] = useState(false); // Truyen cho gia tri ban dau "on" = false, "setOn" la ham de cap nhat state cho "on"
    const handleClick = () => { // lam 1 bien ham
        setOn(on => !on); // Tra ve gia tri nguoc voi kq ban dau
    };
    return (
        // neu on = false, nen xam ,true nen hong, su dung tailwin Css
        <div className={`Toggle ${on ? "active bg-pink-600" : "bg-slate-400"} w-24 h-12 rounded-full p-1 my-4 mx-auto transition-all`} onClick={handleClick}>
            <div className={`Btn ${on ? "active translate-x-[48px]" : ""} h-[40px] w-[40px] bg-yellow-400 rounded-full transition-all duration-200`}>
            </div>
        </div>
    );
};

export default UseStateofHook;