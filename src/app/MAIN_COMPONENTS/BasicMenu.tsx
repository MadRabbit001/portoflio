import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from "@mui/icons-material/LightMode";
import {useEffect, useState} from "react";

interface MobileNavProps {
    color:string,
    toggleDarkMode():void,
    bgColor:string
}
export default function BasicMenu(props:MobileNavProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement | undefined>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon fontSize={'large'}/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                PaperProps={{
                    sx: {
                        backgroundColor:props.bgColor,
                    },
                }}
            >
                <a href={'#home'} style={{textDecoration:'none'}}><MenuItem onClick={handleClose} style={{backgroundColor:props.bgColor,color:props.color,width:'100%',border:'0 none transparent'}}>Home</MenuItem></a>
                <a href={'#about1'} style={{textDecoration:'none'}}><MenuItem onClick={handleClose} sx={{backgroundColor:props.bgColor,color:props.color}}>About</MenuItem></a>
                <a href={'#skills'} style={{textDecoration:'none'}}><MenuItem onClick={handleClose} sx={{backgroundColor:props.bgColor,color:props.color}}>Skills</MenuItem></a>
                <a href={'#services1'} style={{textDecoration:'none'}}><MenuItem onClick={handleClose} sx={{backgroundColor:props.bgColor,color:props.color}}>Services</MenuItem></a>
                <a href={'#about'} style={{textDecoration:'none'}}><MenuItem onClick={handleClose} sx={{backgroundColor:props.bgColor,color:props.color}}>Portfolio</MenuItem></a>
                <a href={'#about'} style={{textDecoration:'none'}}><MenuItem onClick={handleClose} sx={{backgroundColor:props.bgColor,color:props.color}}>Contact Me</MenuItem></a>
                <MenuItem sx={{backgroundColor:props.bgColor}}><LightModeIcon onClick={props.toggleDarkMode} fontSize={"small"} sx={{cursor:'pointer',width:'100%',color:props.color,backgroundColor:props.bgColor}}/></MenuItem>
            </Menu>
        </div>
    );
}
