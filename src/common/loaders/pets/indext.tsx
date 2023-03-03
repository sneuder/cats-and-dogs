import { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import ListLayout from '../../listLayout';

const LoaderPets = () => {
  const times = [1, 2, 3, 4, 5, 6, 7, 8];
  const fadeAnim = useRef(new Animated.Value(0.1)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),

        Animated.timing(fadeAnim, {
          toValue: 0.1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [fadeAnim]);

  return (
    <ListLayout>
      {times.map((time, index) => (
        <Animated.View
          key={index}
          style={{
            opacity: fadeAnim,
          }}
        >
          <View style={styles.container}></View>
        </Animated.View>
      ))}
    </ListLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    backgroundColor: 'grey',
    borderRadius: 8,
  },
});

export default LoaderPets;
