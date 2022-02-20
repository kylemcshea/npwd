import React from 'react';
import { Divider, List, ListItem, Paper } from '@mui/material';

const MentionsOverlay: React.FC<any> = ({ suggestions, onMentionSelect }) => {
  return (
    <Paper
      elevation={20}
      sx={{ position: 'absolute', zIndex: 9999, width: '100%', top: 100, right: 0 }}
    >
      <List>
        {suggestions &&
          suggestions.map((mention) => (
            <ListItem onClick={onMentionSelect}>
              {mention.profile_name}
              <Divider />
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default MentionsOverlay;
