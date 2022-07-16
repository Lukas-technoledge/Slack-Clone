import React from 'react'
import './Sidebar.css';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <h2 className='sidebar__info'>ALX-ND-C1 <ExpandMoreSharpIcon /></h2>
        <ModeEditIcon />
      </div>
      <SidebarOption  Icon={InsertCommentIcon} title={'Threads'}/>
      <SidebarOption Icon={ForwardToInboxIcon} title={'Mentions & Reactions'}/>
      <SidebarOption Icon={DraftsIcon} title={'Saved items'}/>
      <SidebarOption Icon={BookmarkBorderIcon} title={'Channel browser'}/>
      <SidebarOption Icon={PeopleAltIcon} title={'People & user groups'}/>
      <SidebarOption Icon={AppsIcon} title={'Apps'}/>
      <SidebarOption Icon={FileCopyIcon} title={'File browser'}/>
      <SidebarOption Icon={ExpandLessIcon} title={'Showless'}/>
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title={'Channels'}/>
      <hr />
      <SidebarOption Icon={AddIcon} title={'Add channels'}/>
    </div>
  )
}

export default Sidebar
