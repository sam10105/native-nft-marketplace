import { View, SafeAreaView } from 'dripsy';
import { FlatList } from 'react-native';

import { HomeHeader, NFTCard } from '../components';
import { items } from '../lib';

function Home() {
  return (
    <SafeAreaView sx={{ flex: 1 }}>
      <View sx={{ flex: 1 }}>
        <View sx={{ zIndex: 0 }}>
          <FlatList
            data={items}
            renderItem={({ item }) => <NFTCard item={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View
          sx={{
            position: 'absolute',
            inset: '$0',
            zIndex: -1,
          }}
        >
          <View sx={{ height: 300, bg: '$primary' }} />
          <View sx={{ flex: 1, bg: '$white' }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
