import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ActivityIndicator, Dimensions, View } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import movieDB from '../api/movieDb';
import Carousel from 'react-native-snap-carousel';

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

  const { peliculasEnCine, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }} >
        <ActivityIndicator color="red" size={100} />
      </View >
    )
  }
  return (
    <View style={{ marginTop: top + 20 }}>
      {/* <MoviePoster movie={peliculasEnCine[5]} /> */}
      <View style={{
        height: 440
      }}>
        <Carousel
          data={peliculasEnCine}
          renderItem={({ item }: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>

    </View>
  )
}
