import * as Device from 'expo-device';
import { Platform, StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView , } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { usePlayers } from '@/hooks/usePlayers';
import { PlayerCard } from '@/components/PlayerCard';
import { useCallback, useState } from 'react';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}


export default function HomeScreen() {
  const [draftedIds, setDraftedIds] = useState<number[]>([]);
  const { players, loading, error } = usePlayers();
  if ( loading === true ) {
    return (
      <View>
        <ActivityIndicator size="large"></ActivityIndicator>
        <Text>Buscando jogadores</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    )
  }

  const handleToggleDraft = useCallback((id: number) => {
    
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
      data={players}
      keyExtractor={item => String(item.id)}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between', gap: 12 }}
      renderItem={({ item }) => (
        <PlayerCard
        player={item}
        isDrafted={false}
        handleToggleDraft={(id)}
        />
      )
      }/> 
    </SafeAreaView>
    // <PlayerCard/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
