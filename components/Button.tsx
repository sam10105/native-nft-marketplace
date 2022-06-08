import { Text, Image, styled } from 'dripsy';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';

const StyledTouchableOpacity = styled(TouchableOpacity)({
  borderRadius: '1',
});

type CBProps = {
  imgUrl: ImageSourcePropType;
};

export const CircleButton = ({ imgUrl }: CBProps) => {
  return (
    <StyledTouchableOpacity
      sx={{
        width: 40,
        height: 40,
        bg: '$white',
        position: 'absolute',
        top: 10,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'light',
      }}
    >
      <Image source={imgUrl} resizeMode="contain" sx={{ width: 24, height: 24 }} />
    </StyledTouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <StyledTouchableOpacity
      sx={{
        bg: '$primary',
        p: '$3',
        minWidth: 120,
      }}
    >
      <Text
        sx={{
          fontWeight: '600',
          fontSize: 'sm',
          color: '$white',
          textAlign: 'center',
        }}
      >
        Place a bid
      </Text>
    </StyledTouchableOpacity>
  );
};
