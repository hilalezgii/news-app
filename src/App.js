import { StyleSheet, Text, View, FlatList, ScrollView, Image, Dimensions } from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import news_banner_data from './news_banner_data.json';
export default function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  const listHeaderComponent = () => <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {
      news_banner_data.map(bannerNews => <Image key={bannerNews.id} style={styles.banner_image} source={{ uri: bannerNews.imageUrl }} />)
    }
  </ScrollView>
  return (
    <View style={styles.container}>
      <Text style={styles.header_text} >News</Text>
      <FlatList
        ListHeaderComponent={listHeaderComponent}
        data={news_data}
        keyExtractor={item => item.u_id.toString()}
        renderItem={renderNews}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});
