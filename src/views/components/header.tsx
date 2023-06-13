import * as React from 'react';
import { InputHTMLAttributes, memo, ReactElement, useState } from "react";
import Header_responsive from "./header_responsive";
import { Drawer } from '@mui/material';
import { AiOutlineMenu , AiOutlineClose} from "react-icons/ai";
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { GrNotification } from "react-icons/gr";
import { logout } from '../../core/service';
import { useNavigate } from 'react-router-dom';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  details?:any;
  isActive?:string;
}

export function Header({details, isActive}: Props): ReactElement {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event:any) => {
	  setAnchorElUser(event.currentTarget);
	};
  const handleCloseUserMenu = () => {
	  setAnchorElUser(null);
	};

  const handleGoProfile = () => {
    navigate("/profile")
	  setAnchorElUser(null);
	};

    return (
        <>
        <div className="hide-desktop">
        <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
          <div className="header__drawer" onClick={() => setOpen(false)}>
          <AiOutlineClose/>
          <Header_responsive isActive={isActive} details={details}/>
          </div>
        </Drawer>
      </div>
      <div className="hide-mobile">
         <Header_responsive isActive={isActive} details={details}/>
        </div>
        <div className="header">
        <div className="hide-desktop custome-width">
            <div className="menu has-cursor " onClick={() => setOpen(true)}>
            <AiOutlineMenu/>           
                     </div>
           
          </div>
          <div className="hide-mobile">

          </div>
          <div className="header-left-side d-flex">
            <div>
              <div className="header-texts">
              ۱۹۹۱/۱/۵

              </div>
              <div className="header-texts" >
              ۰۲:۰۰:۰۰				
                  
              </div>
            </div>
            
            <div className='notification'>
              <GrNotification fontSize={25} />
            </div>
            <div>
              <Avatar sx={{cursor:"pointer"}} alt="ف" src="/static/images/avatar/2.jpg" onClick={handleOpenUserMenu}/>

              <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

                {/* <MenuItem  onClick={handleCloseUserMenu}>
                پروفایل کاربری
                </MenuItem> */}

                <MenuItem  onClick={handleCloseUserMenu}>
                پنل ادمین
                </MenuItem>

                <MenuItem  onClick={handleGoProfile}>
                ویرایش پروفایل
                </MenuItem>
                <MenuItem  onClick={()=>logout()}>
خروج
                </MenuItem>

            </Menu>
            </div>
            
            <div className="role">
            <div className="header-texts">
              فاطمه قلی زاده

              </div>
              <div className="header-texts" >
              مدیر کل		
                  
              </div>
            </div>
            
            </div>

          
        </div>
        </>
    )
}
export default memo(Header);