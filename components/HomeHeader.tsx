/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { View, Text, Image, TextInput } from 'dripsy';

import badge from '../assets/icons/badge.png';
import search from '../assets/icons/search.png';
import logo from '../assets/images/logo.png';
import person01 from '../assets/images/person01.png';

function HomeHeader() {
  return (
    <View
      sx={{
        bg: '$primary',
        p: '$3_5',
      }}
    >
      <View
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image source={logo} resizeMode="contain" sx={{ width: 90, height: 25 }} />

        <View sx={{ width: 45, height: 45 }}>
          <Image source={person01} resizeMode="contain" sx={{ width: '100%', height: '100%' }} />
          <Image
            source={badge}
            resizeMode="contain"
            sx={{
              position: 'absolute',
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View sx={{ my: '$3_5' }}>
        <Text
          sx={{
            fontSize: 'xs',
            color: '$white',
          }}
        >
          Hello Victoria 👋
        </Text>
        <Text
          sx={{
            fontWeight: '700',
            fontSize: 'lg',
            color: '$white',
            mt: '$1',
          }}
        >
          Let’s find masterpiece Art
        </Text>
      </View>

      <View sx={{ mt: '$3_5' }}>
        <View
          sx={{
            width: '100%',
            borderRadius: '0',
            bg: '$gray',
            flexDirection: 'row',
            alignItems: 'center',
            px: '$3_5',
            py: '$2_5',
          }}
        >
          <Image source={search} resizeMode="contain" sx={{ width: 20, height: 20, mr: '$2' }} />
          <TextInput placeholder="Search NFTs" sx={{ flex: 1 }} />
        </View>
      </View>
    </View>
  );
}

export default HomeHeader;
