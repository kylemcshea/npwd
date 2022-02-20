import React, { memo, useRef, useEffect, SyntheticEvent, useState, MutableRefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { usePhone } from '@os/phone/hooks/usePhone';
import { getNewLineCount, replaceCaret } from '../../utils/message';
import { TextField } from '@ui/components/Input';
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  styled,
} from '@mui/material';

const MessageInput = styled('div')({
  flex: '1 1 100%',
  padding: '10px 15px',
  marginTop: '15px',
  overflowY: 'auto',
  maxHeight: '300px',
  borderBottom: '1px solid #ddd',
  outline: 'none',
  marginBottom: 10,
});

export const TweetMessage = React.forwardRef<string, any>(
  (
    {
      modalVisible,
      message,
      handleChange,
      onEnter,
      suggestions,
      showSuggestions,
      closeSuggestions,
    },
    tweetMessageRef,
  ) => {
    const textFieldInputRef = useRef<HTMLDivElement>(null);
    const [lastHtml, setLastHtml] = useState<any>(null);

    const { ResourceConfig } = usePhone();
    const [t] = useTranslation();

    const { characterLimit, newLineLimit } = ResourceConfig.twitter;

    useEffect(() => {
      textFieldInputRef.current && textFieldInputRef.current.focus();
    }, [modalVisible]);

    useEffect(() => {
      if (lastHtml !== textFieldInputRef.current.innerHTML) {
        textFieldInputRef.current.innerHTML = (tweetMessageRef as MutableRefObject<any>).current;
      }

      setLastHtml((tweetMessageRef as MutableRefObject<any>).current);

      replaceCaret(textFieldInputRef.current);
    }, [lastHtml, setLastHtml, tweetMessageRef]);

    if (!ResourceConfig) return null;

    let errorMessage = null;

    const overCharacterLimit = message.trim().length > characterLimit;
    const characterWarningPrompt = `${t('TWITTER.TWEET_MESSAGE_CHAR_LIMIT')} (${characterLimit})`;

    const overNewLineLimit = getNewLineCount(message) > newLineLimit;
    const newLineWarningPrompt = `${t('TWITTER.TWEET_MESSAGE_NEW_LINE_LIMIT')} (${newLineLimit})`;

    if (overCharacterLimit) {
      errorMessage = characterWarningPrompt;
    } else if (overNewLineLimit) {
      errorMessage = newLineWarningPrompt;
    }

    const handleOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (overNewLineLimit) return;

      if (event.key === 'Enter' && !event.shiftKey) {
        onEnter();
      }
    };

    const emitChange = (e: any) => {
      const el = textFieldInputRef.current;

      const html = el.innerHTML;
      if (html !== lastHtml) {
        const evt = Object.assign({}, e, {
          target: {
            value: html,
          },
        });

        handleChange(evt);
      }

      setLastHtml(html);
    };

    const onMentionSelect = (value: string) => {
      textFieldInputRef.current.focus();
      textFieldInputRef.current.innerHTML += `<strong style="padding: 0px 3px; border-radius: 7px; background: #00acee">${value}</strong>&nbsp;`;

      closeSuggestions();
      replaceCaret(textFieldInputRef.current);
    };

    return (
      <>
        <MessageInput
          onInput={emitChange}
          dangerouslySetInnerHTML={{
            __html: (tweetMessageRef as MutableRefObject<string>).current,
          }}
          contentEditable={true}
          ref={textFieldInputRef}
        />
        {(tweetMessageRef as MutableRefObject<string>).current &&
          suggestions &&
          showSuggestions && (
            <MentionsOverlay suggestions={suggestions} onMentionSelect={onMentionSelect} />
          )}
      </>
    );
  },
);

const MentionsOverlay: React.FC<any> = ({ suggestions, onMentionSelect }) => {
  return (
    <Paper
      elevation={20}
      sx={{ position: 'absolute', zIndex: 9999, width: '100%', top: 100, right: 0 }}
    >
      <List>
        {suggestions &&
          suggestions.map((mention) => (
            <ListItem onClick={() => onMentionSelect(mention.profile_name)}>
              <ListItemAvatar>
                <Avatar src={mention.avatar_url} />
              </ListItemAvatar>
              <ListItemText primary={mention.profile_name} />
              <Divider />
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default memo(TweetMessage);
