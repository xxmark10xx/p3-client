import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import zIndex from '@mui/material/styles/zIndex';

const actions = [
  { icon: <HomeIcon />, name: 'Home' },
  { icon: <ChatIcon />, name: 'Main Chat' },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 360, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 40, zIndex: 1050 }}
        icon={<MenuIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

// this was from materia ui, not sure how to implement this 