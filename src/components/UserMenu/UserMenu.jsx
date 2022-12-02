import {
  Menu,
  UserInfo,
  UserAvatar,
  UserName,
  LogOutButton,
  LogOutIcon,
  LogOutText,
} from './UserMenu.styled';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import authSelectors from '../../redux/auth/authSelectors';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import { useTranslation } from 'react-i18next';
import LanguageFlags from 'components/Localisation/LanguageFlags';
import '../../utils/i18next';

export const UserMenu = () => {
  const { t } = useTranslation();
  const userName = useSelector(authSelectors.getUsername);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  return (
    <Menu>
      <UserInfo>
        <UserAvatar>
          <Avatar
            color={'#4A56E2'}
            name={userName}
            size="30"
            textMarginRatio={0.1}
            textSizeRatio={2}
            round={true}
            maxInitials={2}
          />
        </UserAvatar>
        <UserName>{userName}</UserName>
      </UserInfo>
      <LanguageFlags />
      <LogOutButton type="button" onClick={toggleModal}>
        <LogOutIcon />
        <LogOutText>{t('LogOut.exit')}</LogOutText>
      </LogOutButton>

      {isModalOpen && <ModalLogout onClose={toggleModal} />}
    </Menu>
  );
};
