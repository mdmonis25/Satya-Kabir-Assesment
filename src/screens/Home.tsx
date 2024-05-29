import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-vector-icons/Icon';
const {width, height} = Dimensions.get('window');

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.topContainer}>
        <View style={[styles.topBtn]}>
          <Text style={styles.topText}>Male</Text>
        </View>
        <View style={[styles.topBtn, {marginLeft: 135}]}>
          <Image
            source={require('../assets/icons/sort.png')}
            resizeMode="cover"
            style={{width: 15, height: 14, marginRight: 5}}
          />
          <Text style={styles.topText}>Sort</Text>
        </View>
        <View style={[styles.topBtn]}>
          <Image
            source={require('../assets/icons/filter.png')}
            resizeMode="cover"
            style={{width: 15, height: 14, marginRight: 5}}
          />
          <Text style={styles.topText}>Filter</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.img}>
                <Image
                  source={require('../assets/image/image.png')}
                  resizeMode="cover"
                  style={{width: 150, height: 107}}
                />
              </View>
              <View style={styles.cardTopText}>
                <View style={styles.nameIcon}>
                  <Text style={styles.name}>Black Rim</Text>
                  <Image
                    source={require('../assets/icons/colors.png')}
                    style={{width: 22, height: 6}}
                  />
                </View>

                <Text style={styles.price}>$ 1200</Text>
              </View>
            </View>
            <View style={styles.cardBtm}>
              <Text style={styles.cardBtmText}>Add to cart</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.img}>
                <Image
                  source={require('../assets/image/image.png')}
                  resizeMode="cover"
                  style={{width: 150, height: 107}}
                />
              </View>
              <View style={styles.cardTopText}>
                <View style={styles.nameIcon}>
                  <Text style={styles.name}>Black Rim</Text>
                  <Image
                    source={require('../assets/icons/colors.png')}
                    style={{width: 22, height: 6}}
                  />
                </View>

                <Text style={styles.price}>$ 1200</Text>
              </View>
            </View>
            <View style={styles.cardBtm}>
              <Text style={styles.cardBtmText}>Add to cart</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.img}>
                <Image
                  source={require('../assets/image/image.png')}
                  resizeMode="cover"
                  style={{width: 150, height: 107}}
                />
              </View>
              <View style={styles.cardTopText}>
                <View style={styles.nameIcon}>
                  <Text style={styles.name}>Black Rim</Text>
                  <Image
                    source={require('../assets/icons/colors.png')}
                    style={{width: 22, height: 6}}
                  />
                </View>

                <Text style={styles.price}>$ 1200</Text>
              </View>
            </View>
            <View style={styles.cardBtm}>
              <Text style={styles.cardBtmText}>Add to cart</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.img}>
                <Image
                  source={require('../assets/image/image.png')}
                  resizeMode="cover"
                  style={{width: 150, height: 107}}
                />
              </View>
              <View style={styles.cardTopText}>
                <View style={styles.nameIcon}>
                  <Text style={styles.name}>Black Rim</Text>
                  <Image
                    source={require('../assets/icons/colors.png')}
                    style={{width: 22, height: 6}}
                  />
                </View>

                <Text style={styles.price}>$ 1200</Text>
              </View>
            </View>
            <View style={styles.cardBtm}>
              <Text style={styles.cardBtmText}>Add to cart</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.img}>
                <Image
                  source={require('../assets/image/image.png')}
                  resizeMode="cover"
                  style={{width: 150, height: 107}}
                />
              </View>
              <View style={styles.cardTopText}>
                <View style={styles.nameIcon}>
                  <Text style={styles.name}>Black Rim</Text>
                  <Image
                    source={require('../assets/icons/colors.png')}
                    style={{width: 22, height: 6}}
                  />
                </View>

                <Text style={styles.price}>$ 1200</Text>
              </View>
            </View>
            <View style={styles.cardBtm}>
              <Text style={styles.cardBtmText}>Add to cart</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.img}>
                <Image
                  source={require('../assets/image/image.png')}
                  resizeMode="cover"
                  style={{width: 150, height: 107}}
                />
              </View>
              <View style={styles.cardTopText}>
                <View style={styles.nameIcon}>
                  <Text style={styles.name}>Black Rim</Text>
                  <Image
                    source={require('../assets/icons/colors.png')}
                    style={{width: 22, height: 6}}
                  />
                </View>

                <Text style={styles.price}>$ 1200</Text>
              </View>
            </View>
            <View style={styles.cardBtm}>
              <Text style={styles.cardBtmText}>Add to cart</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.img}>
                <Image
                  source={require('../assets/image/image.png')}
                  resizeMode="cover"
                  style={{width: 150, height: 107}}
                />
              </View>
              <View style={styles.cardTopText}>
                <View style={styles.nameIcon}>
                  <Text style={styles.name}>Black Rim</Text>
                  <Image
                    source={require('../assets/icons/colors.png')}
                    style={{width: 22, height: 6}}
                  />
                </View>

                <Text style={styles.price}>$ 1200</Text>
              </View>
            </View>
            <View style={styles.cardBtm}>
              <Text style={styles.cardBtmText}>Add to cart</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.img}>
                <Image
                  source={require('../assets/image/image.png')}
                  resizeMode="cover"
                  style={{width: 150, height: 107}}
                />
              </View>
              <View style={styles.cardTopText}>
                <View style={styles.nameIcon}>
                  <Text style={styles.name}>Black Rim</Text>
                  <Image
                    source={require('../assets/icons/colors.png')}
                    style={{width: 22, height: 6}}
                  />
                </View>

                <Text style={styles.price}>$ 1200</Text>
              </View>
            </View>
            <View style={styles.cardBtm}>
              <Text style={styles.cardBtmText}>Add to cart</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.img}>
                <Image
                  source={require('../assets/image/image.png')}
                  resizeMode="cover"
                  style={{width: 150, height: 107}}
                />
              </View>
              <View style={styles.cardTopText}>
                <View style={styles.nameIcon}>
                  <Text style={styles.name}>Black Rim</Text>
                  <Image
                    source={require('../assets/icons/colors.png')}
                    style={{width: 22, height: 6}}
                  />
                </View>

                <Text style={styles.price}>$ 1200</Text>
              </View>
            </View>
            <View style={styles.cardBtm}>
              <Text style={styles.cardBtmText}>Add to cart</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.img}>
                <Image
                  source={require('../assets/image/image.png')}
                  resizeMode="cover"
                  style={{width: 150, height: 107}}
                />
              </View>
              <View style={styles.cardTopText}>
                <View style={styles.nameIcon}>
                  <Text style={styles.name}>Black Rim</Text>
                  <Image
                    source={require('../assets/icons/colors.png')}
                    style={{width: 22, height: 6}}
                  />
                </View>

                <Text style={styles.price}>$ 1200</Text>
              </View>
            </View>
            <View style={styles.cardBtm}>
              <Text style={styles.cardBtmText}>Add to cart</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.img}>
                <Image
                  source={require('../assets/image/image.png')}
                  resizeMode="cover"
                  style={{width: 150, height: 107}}
                />
              </View>
              <View style={styles.cardTopText}>
                <View style={styles.nameIcon}>
                  <Text style={styles.name}>Black Rim</Text>
                  <Image
                    source={require('../assets/icons/colors.png')}
                    style={{width: 22, height: 6}}
                  />
                </View>

                <Text style={styles.price}>$ 1200</Text>
              </View>
            </View>
            <View style={styles.cardBtm}>
              <Text style={styles.cardBtmText}>Add to cart</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.img}>
                <Image
                  source={require('../assets/image/image.png')}
                  resizeMode="cover"
                  style={{width: 150, height: 107}}
                />
              </View>
              <View style={styles.cardTopText}>
                <View style={styles.nameIcon}>
                  <Text style={styles.name}>Black Rim</Text>
                  <Image
                    source={require('../assets/icons/colors.png')}
                    style={{width: 22, height: 6}}
                  />
                </View>

                <Text style={styles.price}>$ 1200</Text>
              </View>
            </View>
            <View style={styles.cardBtm}>
              <Text style={styles.cardBtmText}>Add to cart</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  topContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
  },
  topBtn: {
    borderColor: 'solid rgba(48, 47, 51, 0.1)',
    borderWidth: 0.7,
    width: 69,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  topText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: 'rgba(221, 217, 218, 0.12)',
    width: 160,
    height: 180,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#DDDADA',
    overflow: 'hidden',
    marginTop: 15,
  },
  cardTop: {
    height: 149,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 107,
    borderRadius: 10,
    overflow: 'hidden',
    // marginTop: -10,
  },
  name: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(53, 54, 56, 1)',
  },
  price: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(3, 149, 175, 1)',
  },
  cardTopText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 50,
  },
  nameIcon: {},
  cardBtm: {
    height: 31,
    backgroundColor: '#0395AF',
  },
  cardBtmText: {
    color: '#fff',
    textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
  },
});
