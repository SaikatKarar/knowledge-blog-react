import React, { useEffect, useRef, useState } from 'react';
import profileImg from '../../assets/images/profile.png';

function Profile() {
    const [openProfile, setOpenProfile] = useState(false);
    const Menus = ['Profile', 'Setting', 'Logout'];

    const menuRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                imgRef.current !== event.target
            ) {
                setOpenProfile(false);
            }
        }

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [openProfile]);

    const handleImageClick = () => {
        setOpenProfile(!openProfile);
    };

    return (
        <>
            <img
                ref={imgRef}
                className="cursor-pointer"
                src={profileImg}
                alt=""
                onClick={handleImageClick}
            />

            {openProfile && (
                <div className="flex flex-col dropDownProfile" ref={menuRef}>
                    <ul className="">
                        {Menus.map((menu) => (
                            <li onClick={() => setOpenProfile(false)} className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100' key={menu}>{menu}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Profile;
