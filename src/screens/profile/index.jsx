import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { ImageSelector } from '../../components';
import { useGetProfileQuery, useUpdateImageProfileMutation } from '../../store/settings/api';
import { COLORS } from '../../themes';
import { useState, useEffect } from 'react';

const Profile = () => {
  const localId = useSelector((state) => state.auth.user.localId);
  const [uploadImageProfile, { data, isLoading, error }] = useUpdateImageProfileMutation();
  const { data: userData, isLoading: isLoadingUserData } = useGetProfileQuery({ localId });
  const onHandlerImage = async ({ uri, base64 }) => {
    await uploadImageProfile({ localId, image: `data:image/jpeg;base64,${base64}` });
  };

  const [ user , setUser ] = useState();

  useEffect (() => {
    setUser(userData)
  }, [userData])


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageSelector profileImage={user?.profileImage} onSelect={onHandlerImage} />
        {isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        )}
      </View>
    </View>
  );
};

export default Profile;