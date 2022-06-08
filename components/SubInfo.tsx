import { View, Image, Text } from 'dripsy';
import type { ImageSourcePropType } from 'react-native';

import person02 from '../assets/images/person02.png';
import person03 from '../assets/images/person03.png';
import person04 from '../assets/images/person04.png';

type ICProps = {
  imgUrl: ImageSourcePropType;
  index: number;
};

function ImageCmp({ imgUrl, index }: ICProps) {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      sx={{
        width: 48,
        height: 48,
        ml: index === 0 ? 0 : -14,
      }}
    />
  );
}

export function People() {
  return (
    <View sx={{ flexDirection: 'row' }}>
      {[person02, person03, person04].map((imgUrl, index) => (
        <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
      ))}
    </View>
  );
}

export function EndDate() {
  return (
    <View
      sx={{
        px: '$3_5',
        py: '$2',
        bg: '$white',
        borderRadius: '0',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'light',
        elevation: 1,
        maxWidth: '50%',
      }}
    >
      <Text
        sx={{
          fontSize: 'xs',
          color: '$primary',
        }}
      >
        Ending in
      </Text>
      <Text
        sx={{
          fontWeight: '600',
          fontSize: 'base',
          color: '$primary',
        }}
      >
        12h 30m
      </Text>
    </View>
  );
}

export function SubInfo() {
  return (
    <View
      sx={{
        width: '100%',
        px: '$3_5',
        mt: -24,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <People />
      <EndDate />
    </View>
  );
}
