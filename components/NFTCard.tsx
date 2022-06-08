import { View, Image, Text } from 'dripsy';

import { SubInfo } from './SubInfo';
import { RectButton, CircleButton } from './Button';
import type { NFTItem } from '../lib';

import eth from '../assets/icons/eth.png';
import heart from '../assets/icons/heart.png';

type Props = {
  item: NFTItem;
};

const NFTCard = ({ item }: Props) => {
  const { creator, image, name, price } = item;

  return (
    <View
      sx={{
        bg: '$white',
        borderRadius: '0',
        mb: '$6',
        m: '$2',
        boxShadow: 'dark',
      }}
    >
      <View
        sx={{
          width: '100%',
          height: 250,
        }}
      >
        <Image
          source={image}
          resizeMode="cover"
          sx={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0',
          }}
        />
        <CircleButton imgUrl={heart} />
      </View>

      <SubInfo />

      <View sx={{ width: '100%', padding: '$3_5' }}>
        <View>
          <Text
            sx={{
              fontWeight: '600',
              fontSize: 'lg',
              color: '$primary',
            }}
          >
            {name}
          </Text>
          <Text
            sx={{
              fontSize: 'xs',
              color: '$primary',
            }}
          >
            by {creator}
          </Text>
        </View>
        <View
          sx={{
            mt: '$3_5',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View sx={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={eth} resizeMode="contain" sx={{ width: 20, height: 20, mr: 2 }} />
            <Text
              sx={{
                fontWeight: '500',
                fontSize: 'sm',
                color: '$primary',
              }}
            >
              {price}
            </Text>
          </View>
          <RectButton />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
