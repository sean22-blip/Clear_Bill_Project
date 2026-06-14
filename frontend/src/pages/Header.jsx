

import noti from '../assets/noti.png'
import logo from '../assets/logo.png'

function Header() {
    return (
        <>
            <div className=' flex items-center justify-between px-4 py-2'>
                <div className='flex  flex-row gap-2 '>
                    <img src={logo} className='w-6 h-6' alt="" />
                    <h1 className='font-bold text-[#00668A]'>ClearBill Care</h1>
                </div>
                <img src={noti} alt="" />
            </div>
        </>
    )
}

export default Header