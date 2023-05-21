import { Menu } from "@mui/material";
import React from "react";
import { HiChevronDown } from "react-icons/hi";

export default function SearchDropdown(props: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuStyle = {
        padding: '8px',
        borderRadius: '12px',
        width: 'auto',
        overflow: 'hidden',
        transition: 'max-height 0.2s ease',
      };

    return (
        <div className="flex flex-row w-full rounded-xl">
            <div className="flex flex-col my-auto mx-3">
                <button
                    className="focus:outline-none mx-1"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <h3 className="flex flex-row text-gray-800">{props.title}<HiChevronDown className="mx-1 my-auto"/></h3>
                </button>
                <h3 className="text-xs text-gray-600">{props.value}</h3>
            </div>
            <Menu
                PaperProps={{ style: menuStyle }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {props.obj}
            </Menu>
        </div>
    );
}